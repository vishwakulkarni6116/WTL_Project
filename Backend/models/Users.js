const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema =new Schema({
    emailId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        fname:{
            type:String
        },
        lname:{
            type:String
        }     
    },
    regId:{
        type:String
    },
    passingYear:{
        type:Number
    },
    postsLiked:{
        type:Number,
        default:0
    },
    postsDisliked:{
        type:Number,
        default: 0
    }


})

var Users = mongoose.model('User',userSchema)

module.exports=Users;