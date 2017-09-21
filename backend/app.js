var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var goods = require('./routes/goods');
var shop =require('./routes/shop');
var admin=require('./routes/admin');
// 引入 h5 history 模式的中间件
var history = require('connect-history-api-fallback');


var app = express();
//app.get();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// 配置 cors
//app.use(cors({
//  origin:['http://localhost:8080'],
//  methods:['GET','POST', 'DELETE', 'PATCH', 'PUT'],
//  alloweHeaders:['Conten-Type', 'Authorization']
//}));

// 解决 history 模式的问题（非常重要！！！）
// app.use(history());


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', index);
app.use('/users', users);
app.use('/goods',goods);
app.use('/shop',shop);
app.use('/admin',admin);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
