//Modules Imports
import express from 'express'
import bodyParser from 'body-parser'
require('dotenv').config()
//Database 
import db from "./db"
//Routes Imports
import usersRouter from './routes/users'

const app = express()

//Body-Parser middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.use("/api", usersRouter);

app.listen(process.env.PORT, process.env.IP, () => console.log('Example app listening on ' + process.env.IP + ":" + process.env.PORT))