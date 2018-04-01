//const MongoClient=require('mongodb').MongoClient;

const{MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err){
 	return console.log('Unable to connect to MongoDB server.')
 } 

// db.collection('Todos').insertOne({
// text:'Something to do',
// completed:false
// },(err,res)=>{
// if(err){
// 	return console.log('Unable to insert todo',err);
// }


// console.log(JSON.stringify(res.ops,undefined,2));
// });

// console.log('Connected to MongoDB server.')


// db.collection('Users').insertOne({
// name:'Prakash',
// age:21,
// location:'Jalpaiguri'
// },(err,res)=>{
// 	if(err){
// 		return console.log('Unable to insert into Users.',Users);
// 	}
// 	console.log(JSON.stringify(res.ops,undefined,2));
// });

console.log('Connected to MongoDB server.');
db.close();
}); 