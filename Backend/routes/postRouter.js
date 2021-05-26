const express = require('express');

const Posts = require('../models/Posts')

const postRouter = express.Router()

postRouter.route('/')
.get((req,res,next)=>{
    Posts.find()
    .populate('userId')
    .then(posts=>{
        res.statusCode=200
        res.setHeader('Content-Type', 'application/json');
        res.json(posts)
    })
    .catch(err=>next(err))
})

.post((req,res,next)=>{
    var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
  
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '/' + mm + '/' + yyyy;
    console.log(today);
    console.log(req.body)
    newpost = new Posts({
        userId:req.body.userId,
        title:req.body.title,
        subtitle:req.body.subtitle,
        body:req.body.body,
        tag:req.body.tag,
        image:req.body.image,
        date:today,
    })
    Posts.create(newpost)
    .then(post=>{
        console.log(post)
        res.statusCode=200
        res.setHeader('Content-Type', 'application/json');
        res.json(post)
    })
    .catch(err=>next(err))
})

postRouter.route('/:userId')
.get((req,res,next)=>{
    Posts.find({userId:req.params.userId})
    .populate('userId')
    .then(posts=>{
        res.statusCode=200
        res.setHeader('Content-Type', 'application/json');
        res.json(posts)
    })
    .catch(err=>next(err))
})

module.exports = postRouter