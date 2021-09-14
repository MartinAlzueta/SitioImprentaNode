var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var pool = require('./models/bd');
var session = require('express-session');

var fileUpload = require('express-fileupload');


var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var loginRouter = require('./routes/admin/login');
var adminRouter= require('./routes/admin/novedades');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
  secret: 'aVmQ8eprVUCTe5mpvMZraVmQ8eprVUCTe5mpvMZr' ,
  resave: false,
  saveUninitialized: true
}))

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

secured = async(req,res,next) =>{
  try{
    console.log(req.session.id_usuario);
    if(req.session.id_usuario){
      next();
   } else{
     res.redirect('/admin/login');
   }
  } catch (error){
    console.log(error);
  }
}

app.use('/', indexRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter);
// app.use('/users', usersRouter);

// consultas:
// seclect
// pool.query('select * from usuarios').then(function (resultados) {
  // console.log(resultados);
// });

// insert

// var obj = {
//   nombre: 'Cosme',
//   apellido: 'Fulanito',
//   trabajo: 'Programador',
//   edad: 40,
//   salario: 125000,
//   mail: 'cosme@fulanito.com',
// }

// pool.query('insert into empleados set ?', [obj]).then(function (resultados) {
//   console.log(resultados);
// });

//  update
// var id = 26;
// var obj = {
//   nombre: 'Homero',
//   apellido: 'Thompson'
// }

// pool.query('update empleados set ? where id_emp=?', [obj, id]).then(function (resultados) {
//   console.log(resultados);
// });

// delete

// var id = 27;

// pool.query('delete from empleados where id_emp=?', [id]).then(function (resultados) {
//   console.log(resultados);
// });


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
