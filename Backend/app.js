var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config = require('./config');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
var pdf = require("pdf-creator-node");
var fs = require('fs');
 

const url = config.mongoURL;
mongoose.connect(url,{useNewUrlParser:true , useUnifiedTopology: true });

const db=mongoose.connection
db.on('error',error=>console.error(error))
db.once('open',()=>console.log("connected to moongose"))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var commentRouter = require('./routes/commentRouter')
var postRouter = require('./routes/postRouter')

var app = express();

app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments',commentRouter);
app.use('/posts',postRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
