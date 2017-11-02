="INSERT INTO gim_tutores VALUES("&A1&","&B1&",'"&C1&"','"&D1&"','"&E1&"','"&F1&"','"&G1&"',"&H1&","&I1&",'"&J1&"','"&K1&"','"&L1&"','"&M1&"','"&N1&"','"&O1&"','"&P1&"','"&Q1&"','"&R1&"','"&S1&"')"

="INSERT INTO gim_alumnos VALUES("&A1&","&B1&","&C1&",'"&D1&"','"&E1&"','"&F1&"','"&G1&"','"&H1&"',"&I1&",'"&J1&"','"&K1&"','"&L1&"','"&M1&"','"&N1&"','"&O1&"','"&P1&"','"&Q1&"','"&R1&"')"



/* CARGAR ESTADO CIVIL */
INSERT INTO gim_seguro_medico (id_seguro_medico, descripcion, estado)
SELECT id_seguro_medico, nombre, 'V' 
FROM seguro_medicos

/* CARGAR TIPO DOCUMENTO */
INSERT INTO gim_tipo_documento (id_tipo_documento, descripcion)
SELECT id_tipo_documento, nombre
FROM   tipo_documentos

/* CARGAR ESTADO CIVIL */
INSERT INTO gim_estado_civil (id_estado_civil, descripcion)
SELECT id_estado_civil, nombre
FROM   estados_civil

/* CARGAR EDADES */
INSERT INTO gim_edades (id_edad, descripcion, estado)
SELECT id_edad, nombre, 'V'
FROM   edades

/* CARGAR PROFESORES */
INSERT INTO gim_profesores (id_profesor, tipo_doc, numdoc, nombres, apepat, apemat, nombre_corto, estado)
SELECT 
id_profesor, id_tipo_documento, nro_documento, nombres, apellido_paterno, apellido_materno,
CONCAT(nombres, ' ', apellido_paterno), 'V'
FROM   profesores

/* CARGAR TUTORES */
INSERT INTO gim_tutores (id_tutor, tipo_doc, numdoc, nombres, apepat, apemat, fecha_nac, sexo, estado_civil, 
departamento, provincia, distrito, direccion, telefono, celular, email, fecha_ingreso, observacion, estado)
SELECT 
id_tutor, id_tipo_documento, nro_documento, nombres, apellido_paterno, apellido_materno, fecha_nacimiento, '',
id_estado_civil, '','','', direccion, telefono_fijo, telefono_ce, email, '1900-01-01', '', 'V'
FROM   tutores

/* CARGAR ALUMNOS */
INSERT INTO gim_alumnos (id_alumno, id_tutor, tipo_doc, numdoc, nombres, apepat, apemat, fecha_nac, sexo, departamento, provincia, distrito, direccion, essalud, cia_seguro, enfermedades, alergias, nombre_mama, apepat_mama, apemat_mama, tel_fijo_mama, tel_cel_mama, email_mama, nombre_papa, apepat_papa, apemat_papa, tel_fijo_papa, tel_cel_papa, email_papa, observaciones, estado)
SELECT 
id_alumno, id_tutor, id_tipo_documento, nro_documento, nombres, apellido_paterno, apellido_materno, fecha_nacimiento, sexo, '','','', direccion, '', id_seguro_medico, enfermedades, alergias, '', '', '', '', '', '', '', '', '', '', '', '', observaciones, 'V'
FROM   alumnos

/* CARGAR SEXO */
INSERT INTO gim_sexo (id_sexo, descripcion, estado)
SELECT id_sexo, nombre, 'V'
FROM   sexo



SHOW COLUMNS FROM usuarios;


SELECT * 
FROM   usuarios


SELECT * FROM
gim_alumnos



SELECT * FROM
sexo


SELECT * FROM
gim_ubigeo_dist

SELECT * 
FROM   DEPARTAMENTOS


SELECT * 
FROM seguro_medicos



Zs6%pe72
