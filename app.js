var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require("cookie-session");
var model = require("./models/modelEG");

var passport = require("passport");
var passportLocal = require("passport-local").Strategy;

var routes = require('./routes/routes');
//var users = require('./routes/users');

var app = express();

passport.serializeUser(function(usuario, done) {
  done(null, usuario);
  //done(null, usuario.id);
  //console.log(usuario);
  //console.log(usuario.descripcion);
});

passport.deserializeUser(function(usuario, done) {
  //console.log("Datos de Usuario:");
   //console.log(usuario);
   //if(usuario.length > 0){
   //done(null, usuario);
   //}else{
   //done(null, false);
   //}
  model.detalleUsuario(usuario, function(err, registros){
    if(err){
      done(err);
    } else if(registros.length == 0){
      done(null, false);
    } else {
      done(null, registros[0]);
      //req.user  {id:10, nombre:"sergio"}
      //req.user.nombre
      //req.isAuthenticate()
      //req.logout();
    }
  });

});

passport.use(new passportLocal(
    {
      usernameField: "usuario",
      passwordField: "contrasena"
    },
    function(username, password, done) {
      //console.log("Usuario: "+username);
      //console.log("Contrasena: "+funcObj.decrypPwdHunterSys(password, 1, 'E'));
      var datos = {
        username: username,
        password: password
      };
      model.validar(datos, function(err, registros){
        console.log(registros);

        if(err) {
          return done(err);
        }

        if(registros.length) {
          //var usuario = {id: registros[0].ID, nombre: registros[0].NOMBRE};
          var usuario = {
            id: registros[0].id_usuario,
            contrasena: registros[0].contrasena,
            usuario: registros[0].usuario,
            maestros: registros[0].maestros,
            m_alumnos: registros[0].m_alumnos,
            m_profesores: registros[0].m_profesores,
            m_tutores: registros[0].m_tutores,
            m_horarios: registros[0].m_horarios,
            m_usuarios: registros[0].m_usuarios,
            m_suscripciones: registros[0].m_suscripciones,
            m_parametros: registros[0].m_parametros,
            m_registroVentas: registros[0].m_registroVentas,
            m_edades: registros[0].m_edades,
            reportes: registros[0].reportes,
            r_alumnosPorClase: registros[0].r_alumnosPorClase,
            r_deudasMatriculados: registros[0].r_deudasMatriculados,
            r_pagosMatriculados: registros[0].r_pagosMatriculados,
            suscripciones: registros[0].suscripciones,
            cobros: registros[0].cobros
          };
          //console.log(usuario);
          return done(null, usuario);
        } else {
          return done(null, false);
        }
      });
    }
));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'HEAD,GET,POST,PUT,OPTIONS,DELETE'); //GET,PUT,POST,DELETE
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }));
app.use(cookieParser());
app.use(allowCrossDomain);
app.use(cookieSession({secret: "appEgimnasia"}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  /*var err = new Error('Not Found');
   err.status = 404;
   next(err);*/
  res.status(404).json({"status": "errorPageNotFound"});
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

app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next()
});

module.exports = app;
