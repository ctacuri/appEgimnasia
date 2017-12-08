/**
 * Created by Cesar on 15/02/17.
 */
var model = require("../models/modelEG");
var path = require("path");
//var sleep = require('sleep');

var controller = function(){}

controller.listaDias = function(req, res, next){
    model.listaDias(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaTutores = function(req, res, next){
    model.listaTutores(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.saveTutores = function(req, res, next){
    var datos = {
        tipoDoc: req.body.tipoDoc,
        nroDocumento: req.body.nroDocumento,
        nombres: req.body.nombres,
        apepat: req.body.apepat,
        apemat: req.body.apemat,
        fechaNac: req.body.fechaNac,
        sexo: req.body.sexo,
        estadoCivil: req.body.estadoCivil,
        dpto: req.body.dpto,
        prov: req.body.prov,
        dist: req.body.dist,
        direccion: req.body.direccion,
        telefonoFijo: req.body.telefonoFijo,
        celular: req.body.celular,
        email: req.body.email,
        fechaReg: req.body.fechaReg,
        obs: req.body.obs
    };
    model.saveTutores(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.updTutores = function(req, res, next){
    var datos = {
        id: req.body.id,
        tipoDoc: req.body.tipoDoc,
        nroDocumento: req.body.nroDocumento,
        nombres: req.body.nombres,
        apepat: req.body.apepat,
        apemat: req.body.apemat,
        fechaNac: req.body.fechaNac,
        sexo: req.body.sexo,
        estadoCivil: req.body.estadoCivil,
        dpto: req.body.dpto,
        prov: req.body.prov,
        dist: req.body.dist,
        direccion: req.body.direccion,
        telefonoFijo: req.body.telefonoFijo,
        celular: req.body.celular,
        email: req.body.email,
        fechaReg: req.body.fechaReg,
        obs: req.body.obs
    };
    model.updTutores(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.listaTutoresSimple = function(req, res, next){
    model.listaTutoresSimple(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaCiaSeguro = function(req, res, next){
    model.listaCiaSeguro(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaProfesores = function(req, res, next){
    model.listaProfesores(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error", "error": err});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaProfesoresSimple = function(req, res, next){
    model.listaProfesoresSimple(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.saveProfesores = function(req, res, next){
    var datos = {
        tipoDoc: req.body.tipoDoc,
        nroDocumento: req.body.nroDocumento,
        nombres: req.body.nombres,
        apepat: req.body.apepat,
        apemat: req.body.apemat,
        sexo: req.body.sexo,
        nombreCorto: req.body.nombreCorto
    };
    model.saveProfesores(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.updProfesores = function(req, res, next){
    var datos = {
        id: req.body.id,
        tipoDoc: req.body.tipoDoc,
        nroDocumento: req.body.nroDocumento,
        nombres: req.body.nombres,
        apepat: req.body.apepat,
        apemat: req.body.apemat,
        sexo: req.body.sexo,
        nombreCorto: req.body.nombreCorto
    };
    model.updProfesores(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}


controller.saveParametros = function(req, res, next){
    var datos = {
        nroDocumento: req.body.nroDocumento,
        descripcion: req.body.descripcion,

        departamento: req.body.departamento,
        provincia: req.body.provincia,
        distrito: req.body.distrito,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        paginaWeb: req.body.paginaWeb,
        facebook: req.body.facebook,
        autorizacionSunat: req.body.autorizacionSunat,
        nroMaquina: req.body.nroMaquina,

        impuesto: req.body.impuesto,
        serieTicket: req.body.serieTicket,
        nroTicket: req.body.nroTicket,
        serieBoleta: req.body.serieBoleta,
        nroBoleta: req.body.nroBoleta,
        serieFactura: req.body.serieFactura,
        nroFactura: req.body.nroFactura,

        serieRegistro: req.body.serieRegistro,
        nroRegistro: req.body.nroRegistro
    };
    model.saveParametros(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.updParametros = function(req, res, next){
    var datos = {
        id: req.body.id,
        nroDocumento: req.body.nroDocumento,
        descripcion: req.body.descripcion,

        departamento: req.body.departamento,
        provincia: req.body.provincia,
        distrito: req.body.distrito,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        paginaWeb: req.body.paginaWeb,
        facebook: req.body.facebook,
        autorizacionSunat: req.body.autorizacionSunat,
        nroMaquina: req.body.nroMaquina,

        impuesto: req.body.impuesto,
        serieTicket: req.body.serieTicket,
        nroTicket: req.body.nroTicket,
        serieBoleta: req.body.serieBoleta,
        nroBoleta: req.body.nroBoleta,
        serieFactura: req.body.serieFactura,
        nroFactura: req.body.nroFactura,

        serieRegistro: req.body.serieRegistro,
        nroRegistro: req.body.nroRegistro
    };
    //console.log(datos);
    //return false;
    model.updParametros(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.listaAlumnos = function(req, res, next){
    model.listaAlumnos(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaAlumnosSimple = function(req, res, next){
    model.listaAlumnosSimple(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.saveAlumnos = function(req, res, next){
    var datos = {
        idTutor: req.body.idTutor,
        tipoDoc: req.body.tipoDoc,
        nroDocumento: req.body.nroDocumento,
        nombres: req.body.nombres,
        apepat: req.body.apepat,
        apemat: req.body.apemat,
        fechaNac: req.body.fechaNac,
        sexo: req.body.sexo,
        dpto: req.body.dpto,
        prov: req.body.prov,
        dist: req.body.dist,
        direccion: req.body.direccion,
        esSalud: req.body.esSalud,
        ciaSeguro: req.body.ciaSeguro,

        nombreCiaSeguro: req.body.nombreCiaSeguro,

        enfermedades: req.body.enfermedades,
        alergias: req.body.alergias,

        apepatMama: req.body.apepatMama,
        apematMama: req.body.apematMama,
        nombresMama: req.body.nombresMama,
        telefonoFijoMama: req.body.telefonoFijoMama,
        CelularMama: req.body.CelularMama,
        emailMama: req.body.emailMama,

        apepatPapa: req.body.apepatPapa,
        apematPapa: req.body.apematPapa,
        nombresPapa: req.body.nombresPapa,
        telefonoFijoPapa: req.body.telefonoFijoPapa,
        CelularPapa: req.body.CelularPapa,
        emailPapa: req.body.emailPapa,
        tipoAlumno: req.body.tipoAlumno,

        obs: req.body.obs
    };
    //console.log(datos);
    //return false;
    model.saveAlumnos(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.updAlumnos = function(req, res, next){
    var datos = {
        id: req.body.id,
        idTutor: req.body.idTutor,
        tipoDoc: req.body.tipoDoc,
        nroDocumento: req.body.nroDocumento,
        nombres: req.body.nombres,
        apepat: req.body.apepat,
        apemat: req.body.apemat,
        fechaNac: req.body.fechaNac,
        sexo: req.body.sexo,
        dpto: req.body.dpto,
        prov: req.body.prov,
        dist: req.body.dist,
        direccion: req.body.direccion,
        esSalud: req.body.esSalud,
        ciaSeguro: req.body.ciaSeguro,

        nombreCiaSeguro: req.body.nombreCiaSeguro,

        enfermedades: req.body.enfermedades,
        alergias: req.body.alergias,

        apepatMama: req.body.apepatMama,
        apematMama: req.body.apematMama,
        nombresMama: req.body.nombresMama,
        telefonoFijoMama: req.body.telefonoFijoMama,
        CelularMama: req.body.CelularMama,
        emailMama: req.body.emailMama,

        apepatPapa: req.body.apepatPapa,
        apematPapa: req.body.apematPapa,
        nombresPapa: req.body.nombresPapa,
        telefonoFijoPapa: req.body.telefonoFijoPapa,
        CelularPapa: req.body.CelularPapa,
        emailPapa: req.body.emailPapa,
        tipoAlumno: req.body.tipoAlumno,

        obs: req.body.obs
    };
    model.updAlumnos(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             //console.log(datos);
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}


controller.listaTipoDoc = function(req, res, next){
    model.listaTipoDoc(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaEstadoCivil = function(req, res, next){
    model.listaEstadoCivil(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaSexo = function(req, res, next){
    model.listaSexo(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaDepartamentos = function(req, res, next){
    model.listaDepartamentos(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaProvincias = function(req, res, next){
    model.listaProvincias(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaDistritos = function(req, res, next){
    model.listaDistritos(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaUsuarios = function(req, res, next){
    model.listaUsuarios(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaParametros = function(req, res, next){
    model.listaParametros(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}


controller.saveUsuarios = function(req, res, next){
    var states = req.body.states;

    var datos = {
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        states: states.split(",")
    };
    model.saveUsuarios(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.updUsuarios = function(req, res, next){
    var states = req.body.states;

    var datos = {
        id: req.body.id,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        states: states.split(",")
    };
    //console.log(datos);
    model.updUsuarios(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.listaEdades = function(req, res, next){
    model.listaEdades(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaHorarios = function(req, res, next){
    model.listaHorarios(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaHorariosSimple = function(req, res, next){
    model.listaHorariosSimple(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                //console.log(datos);
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.saveEdades = function(req, res, next){
    var datos = {
        descripcion: req.body.descripcion,
        estado: req.body.estado
    };
    model.saveEdades(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.updEdades = function(req, res, next){
    var datos = {
        id: req.body.id,
        descripcion: req.body.descripcion,
        estado: req.body.estado
    };
    //console.log(datos);
    model.updEdades(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.saveDias = function(req, res, next){
    var datos = {
        descripcion: req.body.descripcion,
        estado: req.body.estado
    };
    model.saveDias(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.updDias = function(req, res, next){
    var datos = {
        id: req.body.id,
        descripcion: req.body.descripcion,
        estado: req.body.estado
    };
    //console.log(datos);
    model.updDias(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.saveHorarios = function(req, res, next){
    var datos = {
        dias: req.body.dias,
        dias_txt: req.body.dias_txt,
        edades: req.body.edades,
        edades_txt: req.body.edades_txt,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        sexo: req.body.sexo,
        sexo_txt: req.body.sexo_txt,

        //clase: req.body.sexo_txt+'-'+req.body.edades_txt+'-'+req.body.dias_txt+'-('+req.body.fechaInicio+'-'+req.body.fechaFin+')',
        clase: req.body.dias_txt+'-'+req.body.edades_txt+'-('+req.body.fechaInicio+'-'+req.body.fechaFin+')',

        importe: req.body.importe,
        profesor: req.body.profesor
    };
    //console.log(datos.clase);
    model.saveHorarios(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.updHorarios = function(req, res, next){
    var datos = {
        id: req.body.id,
        dias: req.body.dias,
        edades: req.body.edades,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        sexo: req.body.sexo,

        //clase: req.body.sexo_txt+'-'+req.body.edades_txt+'-'+req.body.dias+'-('+req.body.fechaInicio+'-'+req.body.fechaFin+')',
        clase: req.body.dias_txt+'-'+req.body.edades_txt+'-('+req.body.fechaInicio+'-'+req.body.fechaFin+')',

        importe: req.body.importe,
        profesor: req.body.profesor
    };
    //console.log(datos);
    model.updHorarios(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.listaMatricula = function(req, res, next){
    var datos = {
      fechaInicio: req.params.fechaInicio,
      fechaFin: req.params.fechaFin
    };
    //console.log(datos);
    model.listaMatricula(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(registros);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.saveMatricula = function(req, res, next){
    var datos = {
        alumno: req.body.id_alumno,
        horario: req.body.id_horario,
        fecha: req.body.fecha,
        anio: req.body.anio,
        mes: req.body.id_mes,
        importe: req.body.importe,
        saldo: req.body.saldo,
        profesor: req.body.id_profesor,
        comentario: req.body.comentario
    };
    /*var datos = {
        empresa: req.body.empresa,
        emitir: req.body.emitir,
        formaPago: req.body.formaPago,
        serie: req.body.serie,
        correlativo: req.body.correlativo,
        datosGrilla: JSON.parse(req.body.datosGrilla)
    };*/

    //console.log(datos);
    //return false;
    model.saveMatricula(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.saveAsistenciaHorario = function(req, res, next){
    var datos = {
        idHorario: req.body.id_horario,
        anio: req.body.anio,
        mes: req.body.mes,
        fecha: req.body.fecha
    };

    model.saveAsistenciaHorario(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.saveCabCobro = function(req, res, next){
    var datos = {
        rucEmpresa: req.body.rucEmpresa,
        tipoComprobante: req.body.tipoComprobante,
        nroSerie: req.body.nroSerie,
        nroCorrelativo: req.body.nroCorrelativo,
        fechaEmision: req.body.fechaEmision,
        idPedido: req.body.idPedido,
        tipoDocumento: req.body.tipoDocumento,
        numDoc: req.body.numDoc,
        cliente: req.body.cliente,
        direccion: req.body.direccion,
        formaPago: req.body.formaPago,
        subTotal: req.body.subTotal,
        igv: req.body.igv,
        total: req.body.total
    };
    //console.log(datos);
    model.saveCabCobro(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
            //res.status(200).json({"status": "success"});
        }
    });
}

controller.saveDetCobro = function(req, res, next){
    //console.log(req.body.detalle);
    var arreglo = JSON.parse(req.body.detalle);
    //console.log(arreglo.length);
    //var cont = 0;
        for(var x = 0; x< arreglo.length; x++){
            //cont = cont + 1;
            //console.log(x);
            var igv = parseFloat(arreglo[x].importe * req.body.impuesto)
            var subTotal = parseFloat(arreglo[x].importe - igv);
            var total = subTotal + igv;

            var datos = {
                idCobro: req.body.idCobro,
                //idTutor: req.body.idTutor,
                idAlumno: arreglo[x].id_alumno,
                //idMatricula: req.body.idMatricula,
                idHorario: arreglo[x].id_horario,
                cantidad: 1,
                descripcion: arreglo[x].horario,
                subTotal: subTotal,
                igv: igv,
                total: total
            };

            model.saveDetCobro(datos, function(err){
                //console.log(datos);
                try {
                    if(err){
                        //console.log("Error: " + err);
                        res.status(200).json({"status": "error"});
                    }else{
                        /*if(registros.length > 0){
                         res.status(200).json({"status": "success", "registros": registros});
                         }else{
                         res.status(200).json({"status": "sinDatos"});
                         }*/
                        //console.log(x);
                        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                        res.header("Pragma", "no-cache");
                        res.header("Expires", 0);
                        res.status(200).json({"status": "success", "registros": x });
                    }
                }catch (err) {
                    console.log("Error capturado indefinido");
                }
            });
            //sleep.sleep(1);
        }
}

controller.updMatricula = function(req, res, next){
    var datos = {
        id: req.body.id,
        id_alumno: req.body.id_alumno,
        id_horario: req.body.id_horario,
        fecha: req.body.fecha,
        anio: req.body.anio,
        id_mes: req.body.id_mes,
        importe: req.body.importe,
        saldo: req.body.saldo,
        id_profesor: req.body.id_profesor,
        comentario: req.body.comentario
    };
    console.log(datos);
    model.updMatricula(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.listaEmpresas = function(req, res, next){
    model.listaEmpresas(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaFormaPago = function(req, res, next){
    model.listaFormaPago(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaComprobanteVenta = function(req, res, next){
    model.listaComprobanteVenta(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaMatriculaCobro = function(req, res, next){
    var datos = {
        fechaInicio: req.params.fechaInicio,
        fechaFin: req.params.fechaFin,
        status: req.params.status
    };
    model.listaMatriculaCobro(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaHistorialPagos = function(req, res, next){
    var datos = {
        idAlumno: req.params.idAlumno
    };
    model.listaHistorialPagos(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaHistorialMatricula = function(req, res, next){
    var datos = {
        idAlumno: req.params.idAlumno
    };
    model.listaHistorialMatricula(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listarAsistenciaHorario = function(req, res, next){
    var datos = {
        idHorario: req.params.idHorario
    };
    model.listarAsistenciaHorario(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaAlumnosHorario = function(req, res, next){
    var datos = {
        idHorario: req.params.idHorario
    };
    model.listaAlumnosHorario(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaTipoAlumno = function(req, res, next){
    model.listaTipoAlumno(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.reporteAlumnosClase = function(req, res, next){
    var datos = {
        mes: req.params.mes,
        anio: req.params.anio,
        id_horario: req.params.id_horario
    };
    model.reporteAlumnosClase(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.reporteDeudasMatriculados = function(req, res, next){
    /*var datos = {
        mes: req.params.mes,
        anio: req.params.anio,
        id_horario: req.params.id_horario
    };*/
    model.reporteDeudasMatriculados(function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.reportePagosMatriculadosAlumnos = function(req, res, next){
    var datos = {
        fechaInicio: req.params.fechaInicio,
        fechaFin: req.params.fechaFin
    };
    model.reportePagosMatriculadosAlumnos(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.reporteRegistroVentas = function(req, res, next){
    var datos = {
        fechaInicio: req.params.fechaInicio,
        fechaFin: req.params.fechaFin,
        rucEmpresa: req.params.rucEmpresa
    };
    //console.log(datos);
    model.reporteRegistroVentas(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listarAsistenciaHorarioAlumno = function(req, res, next){
    var datos = {
        idHorario: req.params.idHorario,
        idAlumno: req.params.idAlumno
    };
    console.log(datos);
    model.listarAsistenciaHorarioAlumno(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.eliminarRegistroTabla = function(req, res, next){
    var datos = {
        id: req.body.id,
        tabla: req.body.tabla
    };
    //console.log(datos);
    model.eliminarRegistroTabla(datos, function(err){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.updCorrelativo = function(req, res, next){
    var datos = {
        rucEmpresa: req.body.rucEmpresa,
        idFormaPago: req.body.idFormaPago
    };
    model.updCorrelativo(datos, function(err){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            /*if(registros.length > 0){
             res.status(200).json({"status": "success", "registros": registros});
             }else{
             res.status(200).json({"status": "sinDatos"});
             }*/
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.status(200).json({"status": "success"});
        }
    });
}

controller.searchTutor = function(req, res, next){
    var datos = {
        dni: req.params.dni
    };
    model.searchTutor(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.searchAlumno = function(req, res, next){
    var datos = {
        dni: req.params.dni
    };
    model.searchAlumno(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaCobroCab = function(req, res, next){
    var datos = {
        id: req.params.idCobro
    };
    model.listaCobroCab(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.listaCobroDet = function(req, res, next){
    var datos = {
        id: req.params.idCobro
    };
    model.listaCobroDet(datos, function(err, registros){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success", "registros": registros});
            }else{
                res.status(200).json({"status": "sinDatos"});
            }
        }
    });
}

controller.updSaldoMatricula = function(req, res, next){
    var datos = {
        alumno: req.body.alumno,
        cliente: req.body.cliente,
        direccion: req.body.direccion,
        fechaEmision: req.body.fechaEmision,
        formaPago: req.body.formaPago,
        horario: req.body.formaPago,
        idPedido: req.body.formaPago,
        id_matricula: req.body.id_matricula, //
        id_tutor: req.body.id_tutor,
        igv: req.body.igv,
        importe: req.body.importe,
        nroCorrelativo: req.body.nroCorrelativo,
        nroDocumento: req.body.nroDocumento,
        nroSerie: req.body.nroSerie,
        numDoc: req.body.numDoc,
        pantallaCobro: req.body.pantallaCobro,
        rucEmpresa: req.body.rucEmpresa,
        subTotal: req.body.subTotal,
        tipoComprobante: req.body.subTotal,
        tipoDoc: req.body.tipoDoc,
        tipoDocumento: req.body.tipoDocumento,
        total: req.body.total //
    };
    model.updSaldoMatricula(datos, function(err){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            //if(registros.length > 0){
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                //console.log(datos);
                res.status(200).json({"status": "success"});
            /*}else{
                res.status(200).json({"status": "sinDatos"});
            }*/
        }
    });
}

controller.updateProfesorReporteAlumno = function(req, res, next){
    var datos = {
        id_matricula: req.body.id_matricula,
        profesor: req.body.profesor
    };
    model.updateProfesorReporteAlumno(datos, function(err){
        if(err){
            //console.log("Error: " + err);
            res.status(200).json({"status": "error"});
        }else{
            //if(registros.length > 0){
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            //console.log(datos);
            res.status(200).json({"status": "success"});
            /*}else{
             res.status(200).json({"status": "sinDatos"});
             }*/
        }
    });
}

controller.emisionTicket = function(req, res, next){
    var datos = {
        nroCorrelativo: 123456,
        fechaHoraEmision: '12/12/2016 10:10:58',
        idCliente: '12345678',
        cliente: 'Cesar Tacuri Inga',
        formaPago: 'EFECTIVO',
        arreglo: [
            {
                detalle: 'detalle 1'
            },
            {
                detalle: 'detalle 2'
            }
        ],
        total: 333,
        size: 12
    };

    res.render('formatoTicketPago', datos);
}


module.exports = controller;