/**
 * imports modules
 * - express: main framework
 * - http-errors: create HTTP errors for Express
 * - path: directory & file path handling
 * - cookieParser: parses cookies
 * - logger: HTTP request logger middleware
 */
const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/** 
 * imports routers, which will handle
 * incoming HTTP requests at specific paths
*/
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const educationRouter = require('./routes/education');
const projectRouter = require('./routes/projects');
const experienceRouter = require('./routes/experience');

// the app variable
var app = express();

// sets the view engine & template directory
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

/**
 * sets up middleware functions to be executed
 * for every incoming HTTP request
 * - logger: sets up request logger with 'dev' format
 * - express.json & express.urlencoded: parses incoming request bodies
 * - cookieParser: parses cookies
 * - express.static: serves static files in 'public' directory
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// mount routers (middleware functions) to their paths
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/education', educationRouter);
app.use('/projects', projectRouter);
app.use('/experience', experienceRouter);

/**
 * if none of the middleware functions handle the
 * incoming request, this one catches the 404 &
 * passes control to the next function (error handler)
 */
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
