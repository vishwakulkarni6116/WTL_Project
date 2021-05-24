var express = require('express');
var router = express.Router();


const Users = require('../models/Users');
const app = require('../app');

const userRouter = express.Router()




userRouter.route('/')
.get((req,res,next)=>{
    Users.find()
    .then(users=>{
        console.log(users)
        res.statusCode=200
        res.setHeader('Content-Type', 'application/json')
        res.json(users)
    })
    .catch(err=>next(err))
});

userRouter.route('/signup')
.post((req,res,next)=>{
    console.log("req.body",req.body);
    

    Users.findOne({emailId:req.body.emailId})
    .then(user=>{
      console.log(user)
        if(user===null){
          console.log("not found1");
          var fname = req.body.fname;
          var lname = req.body.lname;
          fname = fname[0].toUpperCase() + fname.slice(1);
          lname = lname[0].toUpperCase() + lname.slice(1);
          
          console.log("hello"+fname+" "+lname);
          newuser = new Users({
            name:{
              fname:fname,
              lname:lname
            },
            emailId:req.body.emailId,
            password:req.body.password,
            regId:req.body.regId,
            passingYear:req.body.passingYear,
            dept : req.body.dept
      
          })
          console.log("not present")
          Users.create(newuser)
          .then(user=>{
              console.log(user)
              res.statusCode=200
              res.setHeader('Content-Type', 'application/json')
              res.json({user:user,success:true})
          })
          .catch(err=>next(err))
        }
        else{
          console.log("present")
          res.json({err:"User already present!!",success:false})
        }
    })
    .catch(err=>{next(err)})

    
})

userRouter.route('/signin')
.post((req,res,next)=>{
    console.log("req.body",req.body)
    
    Users.findOne({emailId:req.body.emailId,password:req.body.password})
    .then(user=>{
      console.log(user)
        if(user){
            console.log("present")
            console.log(user)
            res.statusCode=200
            res.setHeader('Content-Type', 'application/json')
            res.json({user:user,success:true})
        }
         
        else{
            console.log("not present")
            res.json({err:"emailid or password is wrong!!",success:false})
        }
    })
    .catch(err=>{next(err)})
})

userRouter.route('/:userId')
.get((req,res,next)=>{
    Users.findById(req.params.userId)
    .then(users=>{
        console.log(users)
        res.statusCode=200
        res.setHeader('Content-Type', 'application/json')
        res.json(users)
    })
    .catch(err=>next(err))
});

module.exports = userRouter;
