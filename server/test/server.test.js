const expect=require('expect');
const request=require('supertest');
const {ObjectID}=require('mongodb'); 
const {app}=require('./../server');

const {Todo}=require('./../models/todo');

const todos=[{
	_id: new ObjectID(),
	text:"First test todo"
},{
	_id: new ObjectID(),
	text:"Second text todo"
}];



 beforeEach((done)=>{
 	Todo.remove({}).then(()=>{
 		return Todo.insertMany(todos);
 	}).then(()=>done());
 });



describe('Post / Todos',()=>{

it('Should create new todo',(done)=>{
	var text="Test todo text";

	request(app)
	.post('/todos')
	.send({text})
	.expect(200)
	.expect((res)=>{
		expect(res.body.text).toBe(text);

	})
	.end((err,res)=>{
		if(err){
			return done(err);
		}

		Todo.find({text}).then((todos)=>{
			expect(todos.length).toBe(1);
			expect(todos[0].text).toBe(text);
			done();
		}).catch((e)=>done(e));
	});
});


it('should not create todo with invalid data',(done)=>{
	 request(app)
	 .post('/todos')
	 .send({})
	 .expect(400)
	 .end((err,res)=>{
	 	if(err){
	 		return done(err);
	 	}
	 });

	 Todo.find().then((todos)=>{
	 	expect(todos.length).toBe(2);
	 	done();
	 }).catch((e)=>done(e));
});

describe('Get /todos',()=>{

it('Should get all todos',(done)=>{
	request(app)
	.get('/todos')
	.expect(200)
	.expect((res)=>{
		expect(res.body.todos.length).toBe(2);
	}).end(done);
});

describe('Get/todo/:id',()=>{
	it('Should return todo doc',(done)=>{
		request(app)
		.get(`/todos/${todos[0]._id.toHexString()}`)
		.expect(200)
		.expect((res)=>{
			expect(res.body.todo.text).toBe(todos[0].text);

		})
		.end(done);


	});
	it('Should return 400 if todo not found',(done)=>{
		 var hexId = new ObjectID().toHexString();
		 request(app)
		.get(`/todos/${hexId}`)
		.expect(400)
		.end(done);

	});

	it('Should retuen 404 for non-object ids',(done)=>{
		request(app)
		.get('/todos/120abc')
		.expect(404)
		.end(done);

	})


});

});

});
