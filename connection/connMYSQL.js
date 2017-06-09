var mysql = require("mysql"),
	opciones = {
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "gimnasio"
	};

	opciones2 = {
		host: "localhost",
		port: 3306,
		user: "root",
		password: "",
		database: "gim_escuela"
	};

function fnConectado(err){
	if(err){
		console.log("Error = " + err);	
	}else{
		console.log("MySQL conectado en el PID = " + conexion.threadId);
	}
}

var conexion = mysql.createConnection(opciones);
conexion.connect(fnConectado);

module.exports = conexion;