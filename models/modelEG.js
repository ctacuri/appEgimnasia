/**
 * Created by Cesar on 15/02/17.
*/
var conn = require("../connection/connMYSQL");
var model = function(){};

model.validar = function(datos, cb){
    var sentenciaSQL = "SELECT * FROM gim_usuarios WHERE usuario = '"+datos.username+"' AND contrasena = '"+datos.password+"'";
    //var sentenciaSQL = "SELECT * FROM gim_usuarios WHERE usuario = 'admin' AND contrasena = '1114'";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.detalleUsuario = function(usuario, cb) {
    var sentenciaSQL = "SELECT * FROM gim_usuarios WHERE id_usuario = "+usuario.id+" AND contrasena = '"+usuario.contrasena+"'";
    //var sentenciaSQL = "SELECT * FROM gim_usuarios WHERE usuario = 'admin' AND contrasena = '1114'";
    console.log("2do. Query : " + sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaDias = function(cb){
    var sentenciaSQL = "SELECT * FROM gim_dias WHERE estado = 'V' ORDER BY descripcion";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaTutores = function(cb){
    var sentenciaSQL = "CALL sp_listaTutores ";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveTutores = function(datos, cb){
    var sentenciaSQL = "CALL sp_saveTutores(";
    sentenciaSQL += datos.tipoDoc + ",";
    sentenciaSQL += "'" + datos.nroDocumento + "',";
    sentenciaSQL += "'" + datos.nombres + "',";
    sentenciaSQL += "'" + datos.apepat + "',";
    sentenciaSQL += "'" + datos.apemat + "',";
    sentenciaSQL += "'" + datos.fechaNac + "',";
    sentenciaSQL += "'" + datos.sexo + "',";
    sentenciaSQL += "'" + datos.estadoCivil + "',";
    sentenciaSQL += "'" + datos.dpto + "',";
    sentenciaSQL += "'" + datos.prov + "',";
    sentenciaSQL += "'" + datos.dist + "',";
    sentenciaSQL += "'" + datos.direccion + "',";
    sentenciaSQL += "'" + datos.telefonoFijo + "',";
    sentenciaSQL += "'" + datos.celular + "',";
    sentenciaSQL += "'" + datos.email + "',";
    sentenciaSQL += "'" + datos.fechaReg + "',";
    sentenciaSQL += "'" + datos.obs + "',";
    sentenciaSQL += "'V')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updTutores = function(datos, cb){
    var sentenciaSQL = "CALL sp_updTutores(";
    sentenciaSQL += datos.id + ",";
    sentenciaSQL += datos.tipoDoc + ",";
    sentenciaSQL += "'" + datos.nroDocumento + "',";
    sentenciaSQL += "'" + datos.nombres + "',";
    sentenciaSQL += "'" + datos.apepat + "',";
    sentenciaSQL += "'" + datos.apemat + "',";
    sentenciaSQL += "'" + datos.fechaNac + "',";
    sentenciaSQL += "'" + datos.sexo + "',";
    sentenciaSQL += "'" + datos.estadoCivil + "',";
    sentenciaSQL += "'" + datos.dpto + "',";
    sentenciaSQL += "'" + datos.prov + "',";
    sentenciaSQL += "'" + datos.dist + "',";
    sentenciaSQL += "'" + datos.direccion + "',";
    sentenciaSQL += "'" + datos.telefonoFijo + "',";
    sentenciaSQL += "'" + datos.celular + "',";
    sentenciaSQL += "'" + datos.email + "',";
    sentenciaSQL += "'" + datos.fechaReg + "',";
    sentenciaSQL += "'" + datos.obs + "',";
    sentenciaSQL += "'V');";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaTutoresSimple = function(cb){
    var sentenciaSQL = "SELECT t.id_tutor, t.tipo_doc, t.numdoc, CONCAT(t.apepat,' ',t.apemat,', ',t.nombres) AS descripcion, t.direccion FROM gim_tutores t WHERE estado = 'V' ORDER BY descripcion ";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaProfesores = function(cb){
    var sentenciaSQL = "CALL sp_listaProfesores ";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaProfesoresSimple = function(cb){
    var sentenciaSQL = "SELECT p.id_profesor, p.nombre_corto FROM gim_profesores p WHERE estado = 'V'";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveProfesores = function(datos, cb){
    var sentenciaSQL = "CALL sp_saveProfesor( ";
    sentenciaSQL += datos.tipoDoc + ",";
    sentenciaSQL += "'" + datos.nroDocumento + "',";
    sentenciaSQL += "'" + datos.nombres + "',";
    sentenciaSQL += "'" + datos.apepat + "',";
    sentenciaSQL += "'" + datos.apemat + "',";
    sentenciaSQL += "'" + datos.nombreCorto + "',";
    sentenciaSQL +=  datos.sexo + ",";
    sentenciaSQL += "'" + datos.estado + "')";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updProfesores = function(datos, cb){
    var sentenciaSQL = "CALL sp_updProfesor( ";
    sentenciaSQL += datos.id + ",";
    sentenciaSQL += datos.tipoDoc + ",";
    sentenciaSQL += "'" + datos.nroDocumento + "',";
    sentenciaSQL += "'" + datos.nombres + "',";
    sentenciaSQL += "'" + datos.apepat + "',";
    sentenciaSQL += "'" + datos.apemat + "',";
    sentenciaSQL += "'" + datos.nombreCorto + "',";
    sentenciaSQL += "'" + datos.sexo + "',";
    sentenciaSQL += "'V');";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveParametros = function(datos, cb){
    var sentenciaSQL = "INSERT INTO gim_parametros( ";
    sentenciaSQL += "numdoc,";
    sentenciaSQL += "alias,";
    sentenciaSQL += "descripcion,";

    sentenciaSQL += "departamento,";
    sentenciaSQL += "provincia,";
    sentenciaSQL += "distrito,";
    sentenciaSQL += "direccion,";
    sentenciaSQL += "pagina_web,";
    sentenciaSQL += "facebook,";
    sentenciaSQL += "autorizacion_sunat,";
    sentenciaSQL += "nro_maquina,";

    sentenciaSQL += "impuesto,";
    sentenciaSQL += "nro_serie_ticket,";
    sentenciaSQL += "nro_ticket,";
    sentenciaSQL += "nro_serie_boleta,";
    sentenciaSQL += "nro_boleta,";
    sentenciaSQL += "nro_serie_factura,";
    sentenciaSQL += "nro_factura,";

    sentenciaSQL += "nro_serie_registro,";
    sentenciaSQL += "nro_registro)";
    sentenciaSQL += " VALUES('" + datos.nroDocumento + "',";
    sentenciaSQL += "'" + datos.alias + "',";
    sentenciaSQL += "'" + datos.descripcion + "',";

    sentenciaSQL += "'" +datos.departamento + "',";
    sentenciaSQL += "'" +datos.provincia + "',";
    sentenciaSQL += "'" +datos.distrito + "',";
    sentenciaSQL += "'" + datos.direccion + "',";
    sentenciaSQL += "'" + datos.paginaWeb + "',";
    sentenciaSQL += "'" + datos.facebook + "',";
    sentenciaSQL += "'" + datos.autorizacionSunat + "',";
    sentenciaSQL += "'" + datos.nroMaquina + "',";

    sentenciaSQL += datos.impuesto + ",";
    sentenciaSQL += "'" + datos.serieTicket + "',";
    sentenciaSQL += datos.nroTicket + ",";
    sentenciaSQL += "'" + datos.serieBoleta + "',";
    sentenciaSQL += datos.nroBoleta + ",";
    sentenciaSQL += "'" + datos.serieFactura + "',";
    sentenciaSQL += datos.nroFactura + ",";

    sentenciaSQL += "'" + datos.serieRegistro + "',";
    sentenciaSQL += datos.nroRegistro + ");";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updParametros = function(datos, cb){
    var sentenciaSQL = "UPDATE gim_parametros SET ";
    sentenciaSQL += "numdoc = '" + datos.nroDocumento + "',";
    sentenciaSQL += "alias = '" + datos.alias + "',";
    sentenciaSQL += "descripcion = '" + datos.descripcion + "',";

    sentenciaSQL += "departamento = '" + datos.departamento + "',";
    sentenciaSQL += "provincia = '" + datos.provincia + "',";
    sentenciaSQL += "distrito = '" + datos.distrito + "',";
    sentenciaSQL += "direccion = '" + datos.direccion + "',";
    sentenciaSQL += "telefono = '" + datos.telefono + "',";
    sentenciaSQL += "pagina_web = '" + datos.paginaWeb + "',";
    sentenciaSQL += "facebook = '" + datos.facebook + "',";
    sentenciaSQL += "autorizacion_sunat = '" + datos.autorizacionSunat + "',";
    sentenciaSQL += "nro_maquina = '" + datos.nroMaquina + "',";

    sentenciaSQL += "impuesto = " + datos.impuesto + ",";
    sentenciaSQL += "nro_serie_ticket = '" + datos.serieTicket + "',";
    sentenciaSQL += "nro_ticket = " + datos.nroTicket + ",";
    sentenciaSQL += "nro_serie_boleta = '" + datos.serieBoleta + "',";
    sentenciaSQL += "nro_boleta = " + datos.nroBoleta + ",";
    sentenciaSQL += "nro_serie_factura = '" + datos.serieFactura + "',";
    sentenciaSQL += "nro_factura = " + datos.nroFactura + ",";

    sentenciaSQL += "nro_serie_registro = '" + datos.serieRegistro + "',";
    sentenciaSQL += "nro_registro = " + datos.nroRegistro + " ";

    sentenciaSQL += "WHERE id_parametro = " + datos.id + ";";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaHorarios = function(cb){
    var sentenciaSQL = "CALL sp_listaHorarios ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaHorariosSimple = function(cb){
    var sentenciaSQL = "CALL sp_listaHorariosSimple ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveHorarios = function(datos, cb){
    var sentenciaSQL = "INSERT INTO gim_horarios( ";
    sentenciaSQL += "dias,";
    sentenciaSQL += "edades,";
    sentenciaSQL += "sexo,";
    sentenciaSQL += "hora_inicio,";
    sentenciaSQL += "hora_fin,";
    sentenciaSQL += "clase,";
    sentenciaSQL += "importe,";
    sentenciaSQL += "id_profesor,";
    sentenciaSQL += "estado)";
    sentenciaSQL += " VALUES('" + datos.dias + "',";
    sentenciaSQL += "'" + datos.edades + "',";
    sentenciaSQL += "'" + datos.sexo + "',";
    sentenciaSQL += "'" + datos.fechaInicio + "',";
    sentenciaSQL += "'" + datos.fechaFin + "',";
    sentenciaSQL += "'" + datos.clase + "',";
    sentenciaSQL += datos.importe + ",";
    sentenciaSQL += "'" + datos.profesor + "',";
    sentenciaSQL += "'V');";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updHorarios = function(datos, cb){
    var sentenciaSQL = "UPDATE gim_horarios SET ";
    sentenciaSQL += "dias = '" + datos.dias + "',";
    sentenciaSQL += "edades = '" + datos.edades + "',";
    sentenciaSQL += "sexo = " + datos.sexo + ",";
    sentenciaSQL += "hora_inicio = '" + datos.fechaInicio + "',";
    sentenciaSQL += "hora_fin = '" + datos.fechaFin + "',";
    sentenciaSQL += "clase = '" + datos.clase + "',";
    sentenciaSQL += "importe = " + datos.importe + ",";
    sentenciaSQL += "id_profesor = " + datos.profesor + " WHERE ";
    sentenciaSQL += "id_horario = " + datos.id + ";";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaMatricula = function(datos, cb){
    var sentenciaSQL = "CALL sp_listaMatricula( ";
    sentenciaSQL += "'" + datos.fechaInicio + "',";
    sentenciaSQL += "'" + datos.fechaFin + "')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveMatricula = function(datos, cb){
    var sentenciaSQL = "CALL sp_saveMatricula( ";
    sentenciaSQL += datos.alumno + ",";
    sentenciaSQL += datos.horario + ",";
    sentenciaSQL += "'" + datos.fecha + "',";
    sentenciaSQL += datos.anio + ",";
    sentenciaSQL += datos.mes + ",";
    sentenciaSQL += datos.importe + ",";
    sentenciaSQL += datos.saldo + ",";
    sentenciaSQL += datos.profesor + ",";
    sentenciaSQL += "'" + datos.comentario + "',";
    sentenciaSQL += "'" + datos.rucEmpresa + "',";
    sentenciaSQL += "'" + datos.formaPago + "')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveAsistenciaHorario = function(datos, cb){
    var sentenciaSQL = "CALL sp_saveAsistenciaHorario( ";
    sentenciaSQL += datos.idHorario + ",";
    sentenciaSQL += datos.anio + ",";
    sentenciaSQL += datos.mes + ",";
    sentenciaSQL += "'" + datos.fecha + "')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updMatricula = function(datos, cb){
    var sentenciaSQL = "CALL sp_updMatricula(";
    sentenciaSQL += datos.id + ",";
    sentenciaSQL += datos.id_alumno + ",";
    sentenciaSQL += datos.id_horario + ",";
    sentenciaSQL += "'" + datos.fecha + "',";
    sentenciaSQL += datos.anio + ",";
    sentenciaSQL += datos.id_mes + ",";
    sentenciaSQL += datos.importe + ",";
    sentenciaSQL += datos.saldo + ",";
    sentenciaSQL += datos.id_profesor + ",";
    sentenciaSQL += "'" + datos.comentario + "',";
    sentenciaSQL += "'" + datos.rucEmpresa + "',";
    sentenciaSQL += "'" + datos.formaPago + "')";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveCabCobro = function(datos, cb){
    var sentenciaSQL = "CALL sp_saveCabCobro(";
    sentenciaSQL += "'" + datos.rucEmpresa + "',";
    sentenciaSQL += datos.tipoComprobante + ",";
    sentenciaSQL += "'" + datos.nroSerie + "',";
    sentenciaSQL += datos.nroCorrelativo + ",";
    sentenciaSQL += "'" + datos.fechaEmision + "',";
    sentenciaSQL += datos.idPedido + ",";
    sentenciaSQL += datos.tipoDocumento + ",";
    sentenciaSQL += "'" + datos.numDoc + "',";
    sentenciaSQL += "'" + datos.cliente + "',";
    sentenciaSQL += "'" + datos.direccion + "',";
    sentenciaSQL += datos.formaPago + ",";
    sentenciaSQL += datos.subTotal + ",";
    sentenciaSQL += datos.igv + ",";
    sentenciaSQL += datos.total + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveDetCobro = function(datos, cb){
    var sentenciaSQL = "CALL sp_saveDetCobro(";
    sentenciaSQL += datos.idCobro + ",";
    //sentenciaSQL += datos.idTutor + ",";
    sentenciaSQL += datos.idAlumno + ",";
    //sentenciaSQL += datos.idMatricula + ",";
    sentenciaSQL += datos.idHorario + ",";
    sentenciaSQL += datos.cantidad + ",";
    sentenciaSQL += "'" + datos.descripcion + "',";
    sentenciaSQL += datos.subTotal + ",";
    sentenciaSQL += datos.igv + ",";
    sentenciaSQL += datos.total + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveEdades = function(datos, cb){
    var sentenciaSQL = "INSERT INTO gim_edades (";
    sentenciaSQL += "descripcion)";
    sentenciaSQL += " VALUES('" + datos.descripcion + "')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updEdades = function(datos, cb){
    var sentenciaSQL = "UPDATE gim_edades SET ";
    sentenciaSQL += "descripcion = '" + datos.descripcion + "' WHERE ";
    sentenciaSQL += "id_edad = " + datos.id + ";";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveDias = function(datos, cb){
    var sentenciaSQL = "INSERT INTO gim_dias (";
    sentenciaSQL += "descripcion)";
    sentenciaSQL += " VALUES('" + datos.descripcion + "')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updDias = function(datos, cb){
    var sentenciaSQL = "UPDATE gim_dias SET ";
    sentenciaSQL += "descripcion = '" + datos.descripcion + "' WHERE ";
    sentenciaSQL += "id = " + datos.id + ";";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaAlumnos = function(cb){
    var sentenciaSQL = "CALL sp_listaAlumnos ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaAlumnosSimple = function(cb){
    var sentenciaSQL = "CALL sp_listaAlumnosSimple ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveAlumnos = function(datos, cb){
    var sentenciaSQL = "CALL sp_saveAlumno(";
    sentenciaSQL += datos.idTutor + ",";
    sentenciaSQL += datos.tipoDoc + ",";
    sentenciaSQL += "'" + datos.nroDocumento + "',";

    sentenciaSQL += "'" + datos.apepat + "',";
    sentenciaSQL += "'" + datos.apemat + "',";
    sentenciaSQL += "'" + datos.nombres + "',";

    sentenciaSQL += "'" + datos.fechaNac + "',";
    sentenciaSQL += "'" + datos.sexo + "',";
    sentenciaSQL += "'" + datos.dpto + "',";
    sentenciaSQL += "'" + datos.prov + "',";
    sentenciaSQL += "'" + datos.dist + "',";
    sentenciaSQL += "'" + datos.direccion + "',";
    sentenciaSQL += "'" + datos.esSalud + "',";
    sentenciaSQL += "'" + datos.ciaSeguro + "',";

    sentenciaSQL += "'" + datos.nombreCiaSeguro + "',";

    sentenciaSQL += "'" + datos.enfermedades + "',";
    sentenciaSQL += "'" + datos.alergias + "',";

    sentenciaSQL += "'" + datos.nombresMama + "',";
    sentenciaSQL += "'" + datos.apepatMama + "',";
    sentenciaSQL += "'" + datos.apematMama + "',";
    sentenciaSQL += "'" + datos.telefonoFijoMama + "',";
    sentenciaSQL += "'" + datos.CelularMama + "',";
    sentenciaSQL += "'" + datos.emailMama + "',";

    sentenciaSQL += "'" + datos.nombresPapa + "',";
    sentenciaSQL += "'" + datos.apepatPapa + "',";
    sentenciaSQL += "'" + datos.apematPapa + "',";
    sentenciaSQL += "'" + datos.telefonoFijoPapa + "',";
    sentenciaSQL += "'" + datos.CelularPapa + "',";
    sentenciaSQL += "'" + datos.emailPapa + "',";
    sentenciaSQL += datos.tipoAlumno + ",";

    sentenciaSQL += "'" + datos.obs + "',";
    sentenciaSQL += "'V')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updAlumnos = function(datos, cb){
    var sentenciaSQL = "CALL sp_updAlumno(";
    sentenciaSQL += datos.id + ",";
    sentenciaSQL += datos.idTutor + ",";
    sentenciaSQL += datos.tipoDoc + ",";
    sentenciaSQL += "'" + datos.nroDocumento + "',";

    sentenciaSQL += "'" + datos.apepat + "',";
    sentenciaSQL += "'" + datos.apemat + "',";
    sentenciaSQL += "'" + datos.nombres + "',";

    sentenciaSQL += "'" + datos.fechaNac + "',";
    sentenciaSQL += "'" + datos.sexo + "',";
    sentenciaSQL += "'" + datos.dpto + "',";
    sentenciaSQL += "'" + datos.prov + "',";
    sentenciaSQL += "'" + datos.dist + "',";
    sentenciaSQL += "'" + datos.direccion + "',";
    sentenciaSQL += "'" + datos.esSalud + "',";
    sentenciaSQL += "'" + datos.ciaSeguro + "',";

    sentenciaSQL += "'" + datos.nombreCiaSeguro + "',";

    sentenciaSQL += "'" + datos.enfermedades + "',";
    sentenciaSQL += "'" + datos.alergias + "',";

    sentenciaSQL += "'" + datos.nombresMama + "',";
    sentenciaSQL += "'" + datos.apepatMama + "',";
    sentenciaSQL += "'" + datos.apematMama + "',";
    sentenciaSQL += "'" + datos.telefonoFijoMama + "',";
    sentenciaSQL += "'" + datos.CelularMama + "',";
    sentenciaSQL += "'" + datos.emailMama + "',";

    sentenciaSQL += "'" + datos.nombresPapa + "',";
    sentenciaSQL += "'" + datos.apepatPapa + "',";
    sentenciaSQL += "'" + datos.apematPapa + "',";
    sentenciaSQL += "'" + datos.telefonoFijoPapa + "',";
    sentenciaSQL += "'" + datos.CelularPapa + "',";
    sentenciaSQL += "'" + datos.emailPapa + "',";
    sentenciaSQL += datos.tipoAlumno + ",";

    sentenciaSQL += "'" + datos.obs + "',";
    sentenciaSQL += "'V')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaTipoDoc = function(cb){
    var sentenciaSQL = "CALL sp_listaTipoDoc ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaEstadoCivil = function(cb){
    var sentenciaSQL = "SELECT * FROM gim_estado_civil ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaSexo = function(cb){
    var sentenciaSQL = "SELECT * FROM gim_sexo WHERE id_sexo <> 3 ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaDepartamentos = function(cb){
    var sentenciaSQL = "SELECT * FROM gim_ubigeo_dpto ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaProvincias = function(cb){
    var sentenciaSQL = "SELECT * FROM gim_ubigeo_prov ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaDistritos = function(cb){
    var sentenciaSQL = "SELECT * FROM gim_ubigeo_dist ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaUsuarios = function(cb){
    var sentenciaSQL = "SELECT * FROM gim_usuarios WHERE estado = 'V'";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaParametros = function(cb){
    var sentenciaSQL = "SELECT ";
    sentenciaSQL += "p.id_parametro ";
    sentenciaSQL += ",p.numdoc ";
    sentenciaSQL += ",p.alias ";
    sentenciaSQL += ",p.descripcion ";
    sentenciaSQL += ",p.departamento ";
    sentenciaSQL += ",dpto.descripcion as departamento_name ";
    sentenciaSQL += ",p.provincia ";
    sentenciaSQL += ",prov.descripcion as provincia_name ";
    sentenciaSQL += ",p.distrito ";
    sentenciaSQL += ",dist.descripcion as distrito_name ";
    sentenciaSQL += ",p.direccion ";
    sentenciaSQL += ",p.telefono ";
    sentenciaSQL += ",p.pagina_web ";
    sentenciaSQL += ",p.facebook ";
    sentenciaSQL += ",p.autorizacion_sunat ";
    sentenciaSQL += ",p.nro_maquina ";
    sentenciaSQL += ",p.impuesto ";
    sentenciaSQL += ",p.nro_serie_ticket ";
    sentenciaSQL += ",p.nro_ticket ";
    sentenciaSQL += ",p.nro_serie_boleta ";
    sentenciaSQL += ",p.nro_boleta ";
    sentenciaSQL += ",p.nro_serie_factura ";
    sentenciaSQL += ",p.nro_factura ";
    sentenciaSQL += ",p.nro_serie_registro ";
    sentenciaSQL += ",p.nro_registro ";
    sentenciaSQL += ",p.estado ";
    sentenciaSQL += "FROM gim_parametros p ";
    sentenciaSQL += "left join gim_ubigeo_dpto dpto on dpto.ccod_dpto = p.departamento ";
    sentenciaSQL += "left join gim_ubigeo_prov prov on prov.ccod_dpto = p.departamento and prov.ccod_prov = p.provincia ";
    sentenciaSQL += "left join gim_ubigeo_dist dist on dist.ccod_dpto = p.departamento and dist.ccod_prov = p.provincia and dist.ccod_dist = p.distrito ";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaEdades = function(cb){
    var sentenciaSQL = "SELECT * FROM gim_edades WHERE estado = 'V' order by descripcion";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaCiaSeguro = function(cb){
    var sentenciaSQL = "CALL sp_listaCiaSeguro ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveUsuarios = function(datos, cb){
    var sentenciaSQL = "CALL sp_saveUsuarios(";
    sentenciaSQL += "'" + datos.usuario + "',";
    sentenciaSQL += "'" + datos.contrasena + "',";
    sentenciaSQL += datos.states[0] + ",";
    sentenciaSQL += datos.states[1] + ",";
    sentenciaSQL += datos.states[2] + ",";
    sentenciaSQL += datos.states[3] + ",";
    sentenciaSQL += datos.states[4] + ",";
    sentenciaSQL += datos.states[5] + ",";
    sentenciaSQL += datos.states[6] + ",";
    sentenciaSQL += datos.states[7] + ",";
    sentenciaSQL += datos.states[8] + ",";
    sentenciaSQL += datos.states[9] + ",";
    sentenciaSQL += datos.states[10] + ",";
    sentenciaSQL += datos.states[11] + ",";
    sentenciaSQL += datos.states[12] + ",";
    sentenciaSQL += datos.states[13] + ",";
    sentenciaSQL += datos.states[14] + ",";
    sentenciaSQL += datos.states[15] + ",";
    /*sentenciaSQL += datos.maestros + ",";
    sentenciaSQL += datos.m_tutores + ",";
    sentenciaSQL += datos.m_profesores + ",";
    sentenciaSQL += datos.m_horarios + ",";
    sentenciaSQL += datos.m_usuarios + ",";
    sentenciaSQL += datos.m_suscripciones + ",";
    sentenciaSQL += datos.m_parametros + ",";
    sentenciaSQL += datos.m_registroVentas + ",";
    sentenciaSQL += datos.m_edades + ",";
    sentenciaSQL += datos.reportes + ",";
    sentenciaSQL += datos.r_alumnosPorClase + ",";
    sentenciaSQL += datos.r_deudasMatriculados + ",";
    sentenciaSQL += datos.r_pagosMatriculados + ",";
    sentenciaSQL += datos.suscripciones + ",";
    sentenciaSQL += datos.cobros + ",";*/
    sentenciaSQL += "'V')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updUsuarios = function(datos, cb){
    var sentenciaSQL = "CALL sp_updUsuarios(";
    sentenciaSQL += datos.id + ",";
    sentenciaSQL += "'" + datos.usuario + "',";
    sentenciaSQL += "'" + datos.contrasena + "',";
    sentenciaSQL += datos.states[0] + ",";
    sentenciaSQL += datos.states[1] + ",";
    sentenciaSQL += datos.states[2] + ",";
    sentenciaSQL += datos.states[3] + ",";
    sentenciaSQL += datos.states[4] + ",";
    sentenciaSQL += datos.states[5] + ",";
    sentenciaSQL += datos.states[6] + ",";
    sentenciaSQL += datos.states[7] + ",";
    sentenciaSQL += datos.states[8] + ",";
    sentenciaSQL += datos.states[9] + ",";
    sentenciaSQL += datos.states[10] + ",";
    sentenciaSQL += datos.states[11] + ",";
    sentenciaSQL += datos.states[12] + ",";
    sentenciaSQL += datos.states[13] + ",";
    sentenciaSQL += datos.states[14] + ",";
    sentenciaSQL += datos.states[15] + ",";
    sentenciaSQL += "'V');";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaEmpresas = function(cb){
    var sentenciaSQL = "CALL sp_listaEmpresas ";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaFormaPago = function(cb){
    var sentenciaSQL = "CALL sp_listaFormaPago ";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaComprobanteVenta = function(cb){
    var sentenciaSQL = "CALL sp_listaComprobanteVenta ";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaMatriculaCobro = function(datos, cb){
    var sentenciaSQL = "CALL sp_listaMatriculaCobro(";
    sentenciaSQL += "'" + datos.fechaInicio + "',";
    sentenciaSQL += "'" + datos.fechaFin + "',";
    sentenciaSQL += "'" + datos.status + "')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaHistorialPagos = function(datos, cb){
    var sentenciaSQL = "CALL sp_listaHistorialPagos(";
    sentenciaSQL += datos.idAlumno + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaHistorialMatricula = function(datos, cb){
    var sentenciaSQL = "CALL sp_listaHistorialMatricula(";
    sentenciaSQL += datos.idAlumno + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listarAsistenciaHorario = function(datos, cb){
    var sentenciaSQL = "CALL sp_listarAsistenciaHorario(";
    sentenciaSQL += datos.idHorario + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaAlumnosHorario = function(datos, cb){
    var sentenciaSQL = "CALL sp_listaAlumnosHorario(";
    sentenciaSQL += datos.idHorario + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaTipoAlumno = function(cb){
    var sentenciaSQL = "CALL sp_listaTipoAlumno ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.reporteAlumnosClase = function(datos, cb){
    var sentenciaSQL = "CALL sp_reporteAlumnosClase(";
    sentenciaSQL += datos.mes + ",";
    sentenciaSQL += datos.anio + ",";
    sentenciaSQL += datos.id_horario + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.reporteDeudasMatriculados = function(cb){
    var sentenciaSQL = "CALL sp_reporteDeudasMatriculados()";
    /*sentenciaSQL += datos.mes + ",";
    sentenciaSQL += datos.anio + ",";
    sentenciaSQL += datos.id_horario + ")";*/

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.reportePagosMatriculadosAlumnos = function(datos, cb){
    var sentenciaSQL = "CALL sp_reportePagosMatriculados(";
    sentenciaSQL += "'" + datos.fechaInicio + "',";
    sentenciaSQL += "'" + datos.fechaFin + "')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.reportePagosMatriculadosAlumnosMesAnio = function(datos, cb){
    var sentenciaSQL = "CALL sp_reportePagosMatriculadosMesAnio(";
    sentenciaSQL += datos.mes + ",";
    sentenciaSQL += datos.anio + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.reporteCierreDiarioMatricula = function(datos, cb){
    var sentenciaSQL = "CALL sp_reporteCierreDiario(";
    sentenciaSQL += "'" + datos.fechaInicio + "',";
    sentenciaSQL += "'" + datos.fechaFin + "')";
    //sentenciaSQL += "'" + datos.rucEmpresa + "',";
    //sentenciaSQL += "'" + datos.formaPago + "')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.reporteResumenAlumnosClaseMatriculados = function(datos, cb){
    var sentenciaSQL = "CALL sp_reporteResumenAlumnosClase(";
    sentenciaSQL += datos.mes + ",";
    sentenciaSQL += datos.anio + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.reporteRegistroVentas = function(datos, cb){
    var sentenciaSQL = "CALL sp_reporteRegistroVentas(";
    sentenciaSQL += "'" + datos.fechaInicio + "',";
    sentenciaSQL += "'" + datos.fechaFin + "',";
    sentenciaSQL += "'" + datos.rucEmpresa + "')";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listarAsistenciaHorarioAlumno = function(datos, cb){
    var sentenciaSQL = "CALL sp_listarAsistenciaHorarioAlumno(";
    sentenciaSQL += datos.idHorario + ",";
    sentenciaSQL += datos.idAlumno + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaHorariosVacantes = function(cb){
    var sentenciaSQL = "CALL sp_listarHorariosVacantes()";
    //sentenciaSQL += datos.idHorario + ",";
    //sentenciaSQL += datos.idAlumno + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.saveHorariosVacantes = function(datos, cb){
    var sentenciaSQL = "CALL sp_saveHorariosVacantes(";
    sentenciaSQL += datos.mes + ",";
    sentenciaSQL += datos.anio + ",";
    sentenciaSQL += datos.id_horario + ",";
    sentenciaSQL += datos.vacantes + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updHorariosVacantes = function(datos, cb){
    var sentenciaSQL = "CALL sp_updHorariosVacantes(";
    sentenciaSQL += datos.id + ",";
    sentenciaSQL += datos.mes + ",";
    sentenciaSQL += datos.anio + ",";
    sentenciaSQL += datos.id_horario + ",";
    sentenciaSQL += datos.vacantes + ")";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.eliminarRegistroTabla = function(datos, cb){
    var sentenciaSQL = "CALL sp_eliminarRegistroTabla(";
    sentenciaSQL += datos.id + ",";
    sentenciaSQL += "'" + datos.tabla + "')";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updCorrelativo = function(datos, cb){
    var sentenciaSQL = "CALL sp_updCorrelativo(";
    sentenciaSQL += "'" + datos.rucEmpresa + "',";
    sentenciaSQL += datos.idFormaPago + ")";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.searchTutor = function(datos, cb){
    var sentenciaSQL = "SELECT count(numdoc) as CANT FROM gim_tutores ";
    sentenciaSQL += "WHERE numdoc = ";
    sentenciaSQL += "'" + datos.dni + "' ";
    sentenciaSQL += "AND estado = 'V'";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.searchAlumno = function(datos, cb){
    var sentenciaSQL = "SELECT count(numdoc) as CANT FROM gim_alumnos ";
    sentenciaSQL += "WHERE numdoc = ";
    sentenciaSQL += "'" + datos.dni + "' ";
    sentenciaSQL += "AND estado = 'V'";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaCobroCab = function(datos, cb){
    //var sentenciaSQL = "SELECT * FROM gim_cobro_cab WHERE id_cobro = " + datos.id;
    var sentenciaSQL = "";
    sentenciaSQL += "SELECT ";
    sentenciaSQL += "c.id_cobro ";
    sentenciaSQL += ",c.ruc_empresa ";
    sentenciaSQL += ",p.descripcion as empresa ";
    sentenciaSQL += ",p.direccion as direccion_empresa ";

    sentenciaSQL += ",p.departamento ";
    sentenciaSQL += ",dpto.descripcion as departamento_name ";
    sentenciaSQL += ",p.provincia ";
    sentenciaSQL += ",prov.descripcion as provincia_name ";
    sentenciaSQL += ",p.distrito ";
    sentenciaSQL += ",dist.descripcion as distrito_name ";

    sentenciaSQL += ",p.telefono as telefono_empresa ";
    sentenciaSQL += ",p.pagina_web ";
    sentenciaSQL += ",p.facebook ";
    sentenciaSQL += ",p.autorizacion_sunat ";
    sentenciaSQL += ",p.nro_maquina ";
    sentenciaSQL += ",c.tipo_comprobante ";
    sentenciaSQL += ",c.nro_serie ";
    sentenciaSQL += ",c.nro_correlativo ";
    sentenciaSQL += ",c.fecha_emision ";
    sentenciaSQL += ",c.id_pedido ";
    sentenciaSQL += ",c.tipo_documento ";
    sentenciaSQL += ",c.numdoc ";
    sentenciaSQL += ",c.cliente ";
    sentenciaSQL += ",c.direccion ";
    sentenciaSQL += ",c.forma_pago ";
    sentenciaSQL += ",c.subtotal ";
    sentenciaSQL += ",c.igv ";
    sentenciaSQL += ",c.total ";
    sentenciaSQL += "FROM gim_cobro_cab c ";
    sentenciaSQL += "left join gim_parametros p on c.ruc_empresa = p.numdoc ";
    sentenciaSQL += "left join gim_ubigeo_dpto dpto on dpto.ccod_dpto = p.departamento ";
    sentenciaSQL += "left join gim_ubigeo_prov prov on prov.ccod_dpto = p.departamento and prov.ccod_prov = p.provincia ";
    sentenciaSQL += "left join gim_ubigeo_dist dist on dist.ccod_dpto = p.departamento and dist.ccod_prov = p.provincia and dist.ccod_dist = p.distrito ";
    sentenciaSQL += "WHERE c.id_cobro = " + datos.id;
    sentenciaSQL += " AND c.estado = 'V' ";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.listaCobroDet = function(datos, cb){
    //var sentenciaSQL = "SELECT * FROM gim_cobro_det WHERE id_cobro = "  + datos.id;
    var sentenciaSQL = "";
    sentenciaSQL += "SELECT DISTINCT ";
    //sentenciaSQL += "d.id_cobro_det ";
    sentenciaSQL += "d.id_cobro ";
    sentenciaSQL += ",d.id_alumno ";
    sentenciaSQL += ",CONCAT(a.apepat,' ',a.apemat,', ',a.nombres) as alumno ";
    sentenciaSQL += ",d.cantidad ";
    sentenciaSQL += ",fn_nombreMes(m.mes_matricula) as mes ";
    sentenciaSQL += ",d.id_horario ";
    sentenciaSQL += ",d.descripcion as horario ";
    sentenciaSQL += ",d.subtotal ";
    sentenciaSQL += ",d.igv ";
    sentenciaSQL += ",d.total ";
    sentenciaSQL += "FROM gim_cobro_det d ";
    sentenciaSQL += "inner join gim_alumnos a on d.id_alumno = a.id_alumno ";
    sentenciaSQL += "inner join gim_matricula m on m.id_alumno = a.id_alumno and m.id_horario = d.id_horario and m.estado = 'V' ";
    sentenciaSQL += "WHERE d.id_cobro = "+datos.id+" ";
    sentenciaSQL += "AND d.estado = 'V' ";
    //sentenciaSQL += "ORDER BY m.anio_matricula, m.mes_matricula ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updSaldoMatricula = function(datos, cb){
    var sentenciaSQL = "";
    sentenciaSQL += "CALL sp_updSaldoMatricula(";
    sentenciaSQL += datos.id_matricula + ",";
    sentenciaSQL += datos.total + ")";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updateProfesorReporteAlumno = function(datos, cb){
    var sentenciaSQL = "";
    sentenciaSQL += "CALL sp_updateProfesorReporteAlumno(";
    sentenciaSQL += datos.id_matricula + ",";
    sentenciaSQL += "'" + datos.profesor + "')";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.updateFormaPagoReportePagosAlumno = function(datos, cb){
    var sentenciaSQL = "";
    sentenciaSQL += "CALL sp_updateFormaPagoReportePagosAlumno(";
    sentenciaSQL += datos.id + ",";
    sentenciaSQL += "'" + datos.descripcion + "')";
    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.chkVacantes = function(datos, cb){
    //var sentenciaSQL = "SELECT * FROM gim_cobro_det WHERE id_cobro = "  + datos.id;
    var sentenciaSQL = "";
    sentenciaSQL += "SELECT ";
    sentenciaSQL += "m.anio_matricula ";
    sentenciaSQL += ",m.mes_matricula ";
    sentenciaSQL += ",h.id_horario ";
    sentenciaSQL += ",IFNULL(v.vacantes,0) as capacidad ";
    sentenciaSQL += ",COUNT(anio_matricula) as total ";
    sentenciaSQL += ",(v.vacantes - COUNT(anio_matricula)) as vacantes ";
    sentenciaSQL += "FROM gim_matricula m ";
    sentenciaSQL += "inner join gim_horarios h ON m.id_horario = h.id_horario ";
    sentenciaSQL += "left join gim_vacantes v ON v.anio = m.anio_matricula and v.mes = m.mes_matricula and v.id_horario = h.id_horario ";
    sentenciaSQL += "WHERE m.mes_matricula = "+datos.mes+" ";
    sentenciaSQL += "AND m.anio_matricula = "+datos.anio+" ";
    sentenciaSQL += "AND h.id_horario = "+datos.id_horario+" ";
    sentenciaSQL += "AND m.estado = 'V' ";
    sentenciaSQL += "GROUP BY ";
    sentenciaSQL += "m.anio_matricula ";
    sentenciaSQL += ",m.mes_matricula ";
    sentenciaSQL += ",h.clase ";
    sentenciaSQL += ",CONCAT(h.hora_inicio,'-',h.hora_fin) ";
    sentenciaSQL += ",v.vacantes ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

model.reporteSeleccion = function(datos, cb){
    var sentenciaSQL = "";
    sentenciaSQL += "CALL sp_reporteSeleccion( ";
    sentenciaSQL += datos.mes+", ";
    sentenciaSQL += datos.anio+") ";

    console.log(sentenciaSQL);
    conn.query(sentenciaSQL, cb);
}

module.exports = model;