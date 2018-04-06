var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');

var index = require('./routes/index');
var gana_por_comer = require('./routes/gana-por-comer');
var tienes_un_restaurante = require('./routes/tienes-un-restaurante');
var formulario_contacto = require('./routes/formulario-contacto');
var gracias = require('./routes/gracias');
var qr = require('./routes/qr');
var page_not_found = require('./routes/404');

var app = express();

// view engine setup
app.engine('.hbs', expressHbs({
  defaultLayout: 'home',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(favicon(path.join(__dirname, 'public', 'icon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.get('/gana-por-comer', gana_por_comer);
app.get('/tienes-un-restaurante', tienes_un_restaurante);
app.get('/formulario-contacto', formulario_contacto);
app.get('/gracias', gracias);
app.get('/qr', qr);

// return robot.txt
app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /formulario-contacto\nDisallow: /gracias\nDisallow: /404\nDisallow: /bin/\nDisallow: /models/\nDisallow: /node_modules/\nDisallow: /app.js\nDisallow: /Dockerfile\nDisallow: /package-lock.json\nDisallow: /package.json\n\nSitemap: https://www.comeygana.com/sitemap.xml");
});

app.get('*', page_not_found);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('404');
});

module.exports = app;
