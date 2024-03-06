require ('dotenv').config
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('./DB/conn')
const users= require('./model/userSchema')
const cors = require('cors')
 const router = require('./routes/router')
 
 const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())

app.use(router)

app.listen(port,()=>{
    console.log(`the server is start on port number ${port}`)
})