const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema =new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type:String
    },
    subtitle:{
        type:String
    },
    body:{
        type:String
    },
    image:{
        type:String
    },
    tag:{
        type:String
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default: 0
    },
    date:{
        type:String
    }
},{
    timestamps:true
})

var Posts = mongoose.model('Post',postSchema)

module.exports=Posts;