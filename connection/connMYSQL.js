var mysql = require("mysql"),
	opciones = {
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "gimnasio",
        connectionLimit: 50,
        queueLimit: 0,
        waitForConnection: true
	};

	opciones2 = {
		host: "192.169.177.117",
		port: 3306,
		user: "root",
		password: "Admin2016Juego",
		database: "gimnasio",
        connectionLimit: 50,
        queueLimit: 0,
        waitForConnection: true
	};

/*
function fnConectado(err){
	if(err){
		console.log("Error = " + err);	
	}else{
		console.log("MySQL conectado en el PID = " + conexion.threadId);
	}
}

var conexion = mysql.createConnection(opciones);
conexion.connect(fnConectado);
*/

/*
var connection;
function handleDisconnect() {
    connection = mysql.createConnection(opciones2); 		// Recreate the connection, since
                                                    		// the old one cannot be reused.
    connection.connect(function(err) {              		// The server is either down
        if(err) {                                     			// or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }else{
            console.log("MySQL conectado en el PID = " + connection.threadId);
        }                                    // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();
*/

var connection;
function startConnection() {
    console.error('CONNECTING');
    //connection = mysql.createConnection(opciones2);
    connection = mysql.createPool(opciones2);

    connection.getConnection(function(err) {
        if (err) {
            console.error('CONNECT FAILED', err.code);
            startConnection();
        }
        else
            console.error('CONNECTED');
    });
    connection.on('error', function(err) {
        if (err.fatal)
            startConnection();
    });
}

startConnection();


module.exports = connection;