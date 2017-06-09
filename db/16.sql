CREATE DEFINER='root'@'localhost' PROCEDURE 'sp_updProfesor'(
IN p_id_profesor INT(11), 
IN p_tipo_doc INT(2), 
IN p_numdoc VARCHAR(20) CHARSET latin1, 
IN p_nombres VARCHAR(100) CHARSET latin1, 
IN p_apepat VARCHAR(100) CHARSET latin1, 
IN p_apemat VARCHAR(100) CHARSET latin1, 
IN p_nombre_corto VARCHAR(100) CHARSET latin1, 
IN p_sexo INT(2), 
IN p_estado CHAR(1) CHARSET latin1)

UPDATE gim_profesores SET
tipo_doc = p_tipo_doc
,numdoc = p_numdoc
,nombres = p_nombres
,apepat = p_apepat
,apemat = p_apemat 
,nombre_corto = p_nombre_corto 
,sexo = p_sexo
,estado = p_estado
WHERE id_profesor = p_id_profesor;


CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_saveAlumno`(
IN `p_id_tutor` INT(11), 
IN `p_tipo_doc` INT(2), 
IN `p_numdoc` VARCHAR(20) CHARSET latin1, 
IN `p_apepat` VARCHAR(100) CHARSET latin1, 
IN `p_apemat` VARCHAR(100) CHARSET latin1,
IN `p_nombres` VARCHAR(100) CHARSET latin1,  
IN `p_fecha_nac` DATE, 
IN `p_sexo` INT(2), 
IN `departamento` VARCHAR(2), 
IN `provincia` VARCHAR(2), 
IN `distrito` VARCHAR(2), 
IN `direccion` VARCHAR(100) CHARSET latin1, 
IN `essalud` VARCHAR(2), 
IN `cia_seguro` INT(2), 
IN `enfermedades` TEXT, 
IN `alergias` TEXT, 
IN `nombre_mama` VARCHAR(100) CHARSET latin1, 
IN `apepat_mama` VARCHAR(100) CHARSET latin1, 
IN `apemat_mama` VARCHAR(100) CHARSET latin1, 
IN `tel_fijo_mama` VARCHAR(45), 
IN `tel_cel_mama` VARCHAR(45), 
IN `email_mama` VARCHAR(100) CHARSET latin1, 
IN `nombre_papa` VARCHAR(100) CHARSET latin1, 
IN `apepat_papa` VARCHAR(100) CHARSET latin1, 
IN `apemat_papa` VARCHAR(100) CHARSET latin1, 
IN `tel_fijo_papa` VARCHAR(45), 
IN `tel_cel_papa` VARCHAR(45), 
IN `email_papa` VARCHAR(100) CHARSET latin1, 
IN `observaciones` TEXT,
IN `p_estado` CHAR(1))

INSERT INTO `gim_alumnos` (
`id_tutor`, 
`tipo_doc`, 
`numdoc`, 
`apepat`, 
`apemat`, 
`nombres`, 
`fecha_nac`, 
`sexo`, 
`departamento`, 
`provincia`, 
`distrito`, 
`direccion`, 
`essalud`, 
`cia_seguro`, 
`enfermedades`, 
`alergias`, 
`nombre_mama`, 
`apepat_mama`, 
`apemat_mama`, 
`tel_fijo_mama`, 
`tel_cel_mama`, 
`email_mama`, 
`nombre_papa`, 
`apepat_papa`, 
`apemat_papa`, 
`tel_fijo_papa`, 
`tel_cel_papa`, 
`email_papa`, 
`observaciones`, 
`estado`) VALUES(
p_id_tutor, 
p_tipo_doc, 
p_numdoc, 
p_apepat, 
p_apemat, 
p_nombres, 
p_fecha_nac, 
p_sexo, 
p_departamento, 
p_provincia, 
p_distrito, 
p_direccion, 
p_essalud, 
p_cia_seguro, 
p_enfermedades, 
p_alergias, 
p_nombre_mama, 
p_apepat_mama, 
p_apemat_mama, 
p_tel_fijo_mama, 
p_tel_cel_mama, 
p_email_mama, 
p_nombre_papa, 
p_apepat_papa, 
p_apemat_papa, 
p_tel_fijo_papa, 
p_tel_cel_papa, 
p_email_papa, 
p_observaciones, 
p_estado
)

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_updAlumno`(
IN `p_id_alumno` INT(11), 
IN `p_id_tutor` INT(11), 
IN `p_tipo_doc` INT(2), 
IN `p_numdoc` VARCHAR(20) CHARSET latin1, 
IN `p_apepat` VARCHAR(100) CHARSET latin1, 
IN `p_apemat` VARCHAR(100) CHARSET latin1,
IN `p_nombres` VARCHAR(100) CHARSET latin1,  
IN `p_fecha_nac` DATE, 
IN `p_sexo` INT(2), 
IN `departamento` VARCHAR(2), 
IN `provincia` VARCHAR(2), 
IN `distrito` VARCHAR(2), 
IN `direccion` VARCHAR(100) CHARSET latin1, 
IN `essalud` VARCHAR(2), 
IN `cia_seguro` INT(2), 
IN `enfermedades` TEXT, 
IN `alergias` TEXT, 
IN `nombre_mama` VARCHAR(100) CHARSET latin1, 
IN `apepat_mama` VARCHAR(100) CHARSET latin1, 
IN `apemat_mama` VARCHAR(100) CHARSET latin1, 
IN `tel_fijo_mama` VARCHAR(45), 
IN `tel_cel_mama` VARCHAR(45), 
IN `email_mama` VARCHAR(100) CHARSET latin1, 
IN `nombre_papa` VARCHAR(100) CHARSET latin1, 
IN `apepat_papa` VARCHAR(100) CHARSET latin1, 
IN `apemat_papa` VARCHAR(100) CHARSET latin1, 
IN `tel_fijo_papa` VARCHAR(45), 
IN `tel_cel_papa` VARCHAR(45), 
IN `email_papa` VARCHAR(100) CHARSET latin1, 
IN `observaciones` TEXT,
IN `p_estado` CHAR(1))

UPDATE `gim_alumnos` SET
id_tutor = p_id_tutor, 
tipo_doc = p_tipo_doc, 
numdoc = p_numdoc, 
apepat = p_apepat,  
apemat = p_apemat,  
nombres = p_nombres,  
fecha_nac = p_fecha_nac, 
sexo = p_sexo, 
departamento = p_departamento,  
provincia = p_provincia,  
distrito = p_distrito,  
direccion = p_direccion, 
essalud = p_essalud, 
cia_seguro = p_cia_seguro, 
enfermedades = p_enfermedades, 
alergias = p_alergias,  
nombre_mama = p_nombre_mama, 
apepat_mama = p_apepat_mama, 
apemat_mama = p_apemat_mama, 
tel_fijo_mama = p_tel_fijo_mama, 
tel_cel_mama = p_tel_cel_mama, 
email_mama = p_email_mama, 
nombre_papa = p_nombre_papa, 
apepat_papa = p_apepat_papa, 
apemat_papa = p_apemat_papa, 
tel_fijo_papa = p_tel_fijo_papa, 
tel_cel_papa = p_tel_cel_papa, 
email_papa = p_email_papa, 
observaciones = p_observaciones, 
estado = p_estado
WHERE id_alumno = p_id_alumno;






SET @p0='1'; SET @p1='1'; SET @p2='24002848'; SET @p3='EDMUNDO VICTOR'; SET @p4='MEDINA'; SET @p5='MALAGA'; SET @p6='1955-09-09'; SET @p7='1'; SET @p8='2'; SET @p9=''; SET @p10=''; SET @p11=''; SET @p12='PERRICHOLI 131'; SET @p13=''; SET @p14='983-451-700'; SET @p15=''; SET @p16='1900-01-01'; SET @p17=''; SET @p18='V'; CALL `sp_updTutores`(@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10, @p11, @p12, @p13, @p14, @p15, @p16, @p17, @p18);