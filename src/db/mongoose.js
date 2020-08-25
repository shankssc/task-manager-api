const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



//const me = new User({
//    name: 'Lars',
//    email: 'abc@xyz.com',
//    password: '1234567',
//    age: 23
//})

//me.save().then(() => {
//    console.log(me)
//}).catch((error) => {
//    console.log('Error',error)
//})



//const i1 = new Task({
//    description: 'Washing the dishes',
//    completed: true
//})

//i1.save().then(() => {
//    console.log(i1)
//}).catch((error) => {
//    console.log('Error', error)
//})