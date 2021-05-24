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
    console.log(req.body)
    Posts.create(req.body)
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