const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const { translateAliases } = require('./models/user')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

//app.use((req, res, next) => {
//    if (req.method === 'Get') {

//    } else {
//        next()
//    }
//})

//const multer = require('multer')
//const upload =  multer({
//    dest: 'images'
//})

//app.post('/upload', upload.single('upload'),(req,res) => {
//    res.send()
//})


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const router = new express.Router()

const jwt = require('jsonwebtoken')

app.listen(port, () => {
    console.log('server is up on port ' +port)
})

