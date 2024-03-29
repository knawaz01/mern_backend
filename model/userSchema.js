const mongoose =require('mongoose')
const { type } = require('os')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    age:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    add:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
})

const users =mongoose.model('users',userSchema)

module.exports =users;