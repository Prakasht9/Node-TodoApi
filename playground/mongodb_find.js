const{MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err){
 	return console.log('Unable to connect to MongoDB server.')
 } 

// db.collection('Todos').find({
// 	_id:new ObjectID("5abf9c3d76d8090cf83bcb01")
// }).toArray().then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));

// },(err)=>{
// console.log('Unable to fetch Todos',err);
// });

// db.collection('Todos').find().count().then((count)=>{
// console.log(`Todos count :${count}`);
// //console.log(JSON.stringify(docs,undefined,2));

// },(err)=>{
// console.log('Unable to fetch Todos',err);
// })

db.collection('Users').find({name:'Prakash'}).toArray().then((docs)=>{
console.log('Users');
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
	console.log('Unable to fetch Todos',err);
});



console.log('Connected to MongoDB server.');
//db.close();
});   