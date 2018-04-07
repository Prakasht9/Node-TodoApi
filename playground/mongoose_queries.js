 const {ObjectID}=require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');


// var id = '5ac32349624f506410b34db3';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }  

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{

// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// console.log('Todo By Id',todo);
// }).catch((e)=>console.log(e));

// User.findById('5ac1db18b42f838429fc324e').then((user) => {
//   if (!user) {
//     return console.log('User not found');
//   }
//   console.log(JSON.stringify(users, undefined, 2));
// }, (e) => {
//   console.log(e);
// });


var id="5ac1db18b42f838429fc324e";

Users.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});


