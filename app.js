var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var multer = require('multer');
var nodemailer = require('nodemailer');


/*
 * Mail service for contact form
 */
var contactTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mail.profilerh@gmail.com',
    pass: '9F38Wceu'
  }
});


function sendContactMail(from, subject, content) {
  contactTransporter.sendMail({
    from: from,
    to: 'contact@profilerh.com',
    subject: "[ProfileRH][contact]" + subject,
    text: content
  });
}

var routes = require('./routes/index');
var contact = require('./routes/contact');
var inscription = require('./routes/inscription');
var about = require('./routes/about');
var services = require('./routes/services');

//var users = require('./routes/users');

var app = express();

// view engine setup => useless in this App
app.set('views', path.join(__dirname, 'views')); //views
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/assets/images/faviconPAD.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  // c t false
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(multer()); // for parsing multipart/form-data


app.use('/', routes);
app.use('/about', about);
app.use('/contact', contact);
app.use('/inscription', inscription);
app.use('/services', services);

// Receive contact form
app.post('/contact', function(req, res) {
  console.log(req.body);
  console.log("Receive contact form");
  sendContactMail(req.body['email'], req.body['subject'], req.body['message']);
  res.send("OK");
});

// Receive signup form
app.post('/inscription', function(req, res) {
  console.log(req.body);
  console.log("Receive signup form");
  sendContactMail(req.body['email'], "Nouvelle inscription sur Profilerh.com",
      "Nom:"+req.body.name+" \nPrénom:"+req.body.firstname+"\nTél:"+req.body.workphone+" \nSociété:"+req.body.companyname+" \nEmail:"+
      req.body.email+" \nURL désirée:"+req.body.desiredurl+" \nNb Employes:"+ req.body.nbemployees);
  res.send("OK");
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
