const{MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err){
 	return console.log('Unable to connect to MongoDB server.')
 } 
//  delete many
// db.collection('Todos').deleteMany({text:"Eat lunch"}).then((result)=>{
// console.log(result)
// },(err)=>{
// 	console.log('Unable to delete')
// });



//	delete one

// db.collection('Todos').deleteOne({text:"walk the dog"}).then((result)=>{
// console.log(result)
// },(err)=>{
// 	console.log('Unable to delete')
// });

// find one and delete 
// db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
// console.log(result)
// },(err)=>{
// 	console.log('Unable to delete')
// });

db.collection('Users').deleteMany({name:"Prakash"}).then((result)=>{
	console.log(result);
},(err)=>{
	console.log('Unable to delete');
});

db.collection('Users').findOneAndDelete({name:"Somen"}).then((result)=>{
	console.log(result);
},(err)=>{
	console.log('unable to delete');
});

db.collection('Users').deleteOne({
	_id: new ObjectID("5ac0a2df563e3f2e034e183f")
}).then((result)=>{
	console.log(result);
},(err)=>{
	console.log('Unable to delete');
});

console.log('Connected to MongoDB server.');
//db.close();
});   