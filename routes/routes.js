var express = require('express');
var passport = require("passport");
var conn = require("../connection/connMYSQL");
var controladorEG = require("../controllers/controllerEG");
var router = express.Router();

/* GET home page. */
var tittlePage = 'Escuela de Gimnasia';

router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/main', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('main', { usuario: req.user });
});
router.get('/alumnos', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('alumnos', { usuario: req.user });
});
router.get('/profesores', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('profesores', { usuario: req.user });
});
router.get('/tutores', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('tutores', { usuario: req.user });
});
router.get('/usuarios', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('usuarios', { usuario: req.user });
});
router.get('/suscripciones', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('suscripciones', { usuario: req.user });
});
router.get('/cobros', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('cobros', { usuario: req.user });
});
router.get('/asistencia', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('asistencia', { usuario: req.user });
});
router.get('/evaluacion', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('evaluacion', { usuario: req.user });
});
router.get('/clases', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('clases', { usuario: req.user });
});
router.get('/parametros', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('parametros', { usuario: req.user });
});
router.get('/edades', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('edades', { usuario: req.user });
});
router.get('/registroVentas', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('registroVentas', { usuario: req.user });
});
router.get('/reporteDeudas', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('reporteDeudas', { usuario: req.user });
});
router.get('/reporteAlumnosClase', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('reporteAlumnosClase', { usuario: req.user });
});
router.get('/reportePagosMatriculados', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('reportePagosMatriculados', { usuario: req.user });
});
router.get('/padronSocios', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('formatoRegistroPadronSocios', { usuario: req.user });
});
router.get('/generarAsistencia', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('generarAsistencia', { usuario: req.user });
});
router.get('/tomarAsistencia', fnEstaAutenticado, function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('tomarAsistencia', { usuario: req.user });
});
router.get('/ticket', fnEstaAutenticado, controladorEG.emisionTicket);

//FIREBASE
router.get('/firebase', function(req, res, next) {
    res.render('firebase');
});


/*Registros JSON*/
router.get('/listaTutores', fnEstaAutenticado, controladorEG.listaTutores);
router.post('/EG/saveTutores', fnEstaAutenticado, controladorEG.saveTutores);
router.post('/EG/updTutores', fnEstaAutenticado, controladorEG.updTutores);

router.post('/EG/saveAlumnos', fnEstaAutenticado, controladorEG.saveAlumnos);
router.post('/EG/updAlumnos', fnEstaAutenticado, controladorEG.updAlumnos);

router.post('/EG/saveProfesores', fnEstaAutenticado, controladorEG.saveProfesores);
router.post('/EG/updProfesores', fnEstaAutenticado, controladorEG.updProfesores);

router.post('/EG/saveUsuarios', fnEstaAutenticado, controladorEG.saveUsuarios);
router.post('/EG/updUsuarios', fnEstaAutenticado, controladorEG.updUsuarios);

router.post('/EG/saveParametros', fnEstaAutenticado, controladorEG.saveParametros);
router.post('/EG/updParametros', fnEstaAutenticado, controladorEG.updParametros);

router.post('/EG/saveEdades', fnEstaAutenticado, controladorEG.saveEdades);
router.post('/EG/updEdades', fnEstaAutenticado, controladorEG.updEdades);

router.post('/EG/saveDias', fnEstaAutenticado, controladorEG.saveDias);
router.post('/EG/updDias', fnEstaAutenticado, controladorEG.updDias);

router.post('/EG/saveHorarios', fnEstaAutenticado, controladorEG.saveHorarios);
router.post('/EG/updHorarios', fnEstaAutenticado, controladorEG.updHorarios);

router.post('/EG/saveMatricula', fnEstaAutenticado, controladorEG.saveMatricula);
router.post('/EG/updMatricula', fnEstaAutenticado, controladorEG.updMatricula);

router.post('/EG/saveCabCobro', fnEstaAutenticado, controladorEG.saveCabCobro);
router.post('/EG/saveDetCobro', fnEstaAutenticado, controladorEG.saveDetCobro);

router.post('/EG/saveAsistenciaHorario', fnEstaAutenticado, controladorEG.saveAsistenciaHorario);

router.get('/listaTutoresSimple', fnEstaAutenticado, controladorEG.listaTutoresSimple);
router.get('/listaProfesores', controladorEG.listaProfesores);
router.get('/listaProfesoresSimple', fnEstaAutenticado, controladorEG.listaProfesoresSimple);
router.get('/listaAlumnos', fnEstaAutenticado, controladorEG.listaAlumnos);
router.get('/listaAlumnosSimple', fnEstaAutenticado, controladorEG.listaAlumnosSimple);
router.get('/listaHistorialPagos/:idAlumno', fnEstaAutenticado, controladorEG.listaHistorialPagos);

router.get('/listaTipoDoc', fnEstaAutenticado, controladorEG.listaTipoDoc);
router.get('/listaEstadoCivil', fnEstaAutenticado, controladorEG.listaEstadoCivil);
router.get('/listaSexo', fnEstaAutenticado, controladorEG.listaSexo);
router.get('/listaDias', fnEstaAutenticado, controladorEG.listaDias);
router.get('/listaDepartamentos', fnEstaAutenticado, controladorEG.listaDepartamentos);
router.get('/listaProvincias', fnEstaAutenticado, controladorEG.listaProvincias);
router.get('/listaDistritos', fnEstaAutenticado, controladorEG.listaDistritos);
router.get('/listaCiaSeguro', fnEstaAutenticado, controladorEG.listaCiaSeguro);
router.get('/listaUsuarios', fnEstaAutenticado, controladorEG.listaUsuarios);
router.get('/listaParametros', fnEstaAutenticado, controladorEG.listaParametros);
router.get('/listaEdades', fnEstaAutenticado, controladorEG.listaEdades);
router.get('/listaHorarios', fnEstaAutenticado, controladorEG.listaHorarios);
router.get('/listaHorariosSimple', fnEstaAutenticado, controladorEG.listaHorariosSimple);
router.get('/listaMatricula/:fechaInicio/:fechaFin', fnEstaAutenticado, controladorEG.listaMatricula);
router.get('/listaEmpresas', fnEstaAutenticado, controladorEG.listaEmpresas);
router.get('/listaFormaPago', fnEstaAutenticado, controladorEG.listaFormaPago);
router.get('/listaComprobanteVenta', fnEstaAutenticado, controladorEG.listaComprobanteVenta);
router.get('/listaMatriculaCobro/:fechaInicio/:fechaFin/:status', fnEstaAutenticado, controladorEG.listaMatriculaCobro);
router.get('/listaHistorialMatricula/:idAlumno', fnEstaAutenticado, controladorEG.listaHistorialMatricula);
router.get('/listarAsistenciaHorario/:idHorario', fnEstaAutenticado, controladorEG.listarAsistenciaHorario);
router.get('/listaAlumnosHorario/:idHorario', fnEstaAutenticado, controladorEG.listaAlumnosHorario);
router.get('/listaTipoAlumno', fnEstaAutenticado, controladorEG.listaTipoAlumno);
/*Registros JSON*/

//REPORTES
router.get('/reporteAlumnosClase/:mes/:anio/:id_horario', fnEstaAutenticado, controladorEG.reporteAlumnosClase);
router.get('/reporteDeudasMatriculados', fnEstaAutenticado, controladorEG.reporteDeudasMatriculados);
router.get('/reportePagosMatriculadosAlumnos/:fechaInicio/:fechaFin', fnEstaAutenticado, controladorEG.reportePagosMatriculadosAlumnos);
router.get('/reporteRegistroVentas/:fechaInicio/:fechaFin', fnEstaAutenticado, controladorEG.reporteRegistroVentas);
router.get('/listarAsistenciaHorarioAlumno/:id_horario/:idAlumno', fnEstaAutenticado, controladorEG.listarAsistenciaHorarioAlumno);

router.post('/EG/eliminarRegistroTabla/', fnEstaAutenticado, controladorEG.eliminarRegistroTabla);


router.post('/loguear',

    passport.authenticate('local',
        {
          successRedirect: '/successjson',
          failureRedirect: '/failurejson'
        }
    )

);

router.get('/successjson', function(req, res) {
  //var fechaActual = new Date();
  //var dia = parseInt(req.user.FECHA_EXPIRACION.substring(0,2));
  //var mes = parseInt(req.user.FECHA_EXPIRACION.substring(3,5)) - 1;
  //var anio = req.user.FECHA_EXPIRACION.substring(6,10)
  //var fechaExpiracion = new Date(anio, mes, dia);
  //console.log(fechaExpiracion);

  /*if(req.user.ESTADO != 'V'){
    res.status(200).json({"status": "error2", "datos": ""});
    return false;
  }
  if(fechaExpiracion < fechaActual){
    res.status(200).json({"status": "error3", "datos": ""});
    return false;
  }*/
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.status(200).json({"status": "success", "datos": req.user});
});

router.get('/failurejson', function(req, res) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.status(200).json({"status": "error", "datos": ""});
});

router.get("/logout", function(req, res){
        req.logout();
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        res.header("Pragma", "no-cache");
        res.header("Expires", 0);
        res.redirect("/");
    }
);

function fnEstaAutenticado(req, res, next){
  if(req.isAuthenticated()) {
    next();
  } else {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.redirect("/");
  }
}

module.exports = router;
