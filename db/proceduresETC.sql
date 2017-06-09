15
01
01

UPDATE gim_alumnos 
SET departamento = '15', 
provincia = '01',
distrito = '01';

UPDATE gim_tutores 
SET departamento = '15', 
provincia = '01',
distrito = '01';


CREATE DEFINER='root'@'localhost' PROCEDURE sp_updUsuarios(
IN p_id_usuario INT(11),
IN p_usuario VARCHAR(10) CHARSET latin1, 
IN p_contrasena VARCHAR(10) CHARSET latin1, 
IN p_maestros INT(1), 
IN p_m_tutores INT(1), 
IN p_m_alumnos INT(1), 
IN p_m_profesores INT(1), 
IN p_m_horarios INT(1), 
IN p_m_usuarios INT(1), 
IN p_m_suscripciones INT(1),
IN p_m_parametros INT(1),
IN p_m_registroVentas INT(1),
IN p_m_edades INT(1),
IN p_reportes INT(1),
IN p_r_alumnosPorClase INT(1),
IN p_r_deudasMatriculados INT(1),
IN p_r_pagosMatriculados INT(1),
IN p_suscripciones INT(1),
IN p_cobros INT(1),
IN p_estado VARCHAR(1) CHARSET latin1
)

UPDATE gim_usuarios SET 
usuario = p_usuario, 
contrasena = p_contrasena, 
maestros = p_maestros, 
m_tutores = p_m_tutores,
m_alumnos = p_m_alumnos,
m_profesores = p_m_profesores, 
m_horarios = p_m_horarios, 
m_usuarios = p_m_usuarios, 
m_suscripciones = p_m_suscripciones, 
m_parametros = p_m_parametros, 
m_registroVentas = p_m_registroVentas, 
m_edades = p_m_edades, 
reportes = p_reportes, 
r_alumnosPorClase = p_r_alumnosPorClase, 
r_deudasMatriculados = p_r_deudasMatriculados, 
r_pagosMatriculados = p_r_pagosMatriculados, 
suscripciones = p_suscripciones, 
cobros = p_cobros, 
estado = p_estado 
WHERE id_usuario = p_id_usuario;


CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_saveUsuarios`(
IN p_usuario VARCHAR(10) CHARSET latin1, 
IN p_contrasena VARCHAR(10) CHARSET latin1, 
IN p_maestros INT(1), 
IN p_m_tutores INT(1), 
IN p_m_alumnos INT(1), 
IN p_m_profesores INT(1), 
IN p_m_horarios INT(1), 
IN p_m_usuarios INT(1), 
IN p_m_suscripciones INT(1),
IN p_m_parametros INT(1),
IN p_m_registroVentas INT(1),
IN p_m_edades INT(1),
IN p_reportes INT(1),
IN p_r_alumnosPorClase INT(1),
IN p_r_deudasMatriculados INT(1),
IN p_r_pagosMatriculados INT(1),
IN p_suscripciones INT(1),
IN p_cobros INT(1),
IN p_estado VARCHAR(1) CHARSET latin1
)
INSERT INTO gim_usuarios (
usuario, 
contrasena, 
maestros, 
m_tutores,
m_alumnos,
m_profesores, 
m_horarios, 
m_usuarios, 
m_suscripciones, 
m_parametros, 
m_registroVentas, 
m_edades, 
reportes, 
r_alumnosPorClase, 
r_deudasMatriculados, 
r_pagosMatriculados, 
suscripciones, 
cobros, 
estado
) 
VALUES
(
p_usuario, 
p_contrasena, 
p_maestros, 
p_m_tutores,
p_m_alumnos,
p_m_profesores, 
(p_m_horarios, 
p_m_usuarios, 
p_m_suscripciones, 
p_m_parametros, 
p_m_registroVentas, 
p_m_edades, 
p_reportes, 
p_r_alumnosPorClase, 
p_r_deudasMatriculados, 
p_r_pagosMatriculados, 
p_suscripciones, 
p_cobros, 
p_estado
)




SELECT 
h.id_horario
,h.dias as id_dias
,d.descripcion as dias
,h.edades as id_edades
,e.descripcion as edades
,h.sexo as id_sexo
,s.descripcion as sexo
,h.hora_inicio
,h.hora_fin
,h.clase
,h.importe
,h.id_profesor
p.nombre_corto as profesor
,h.estado
FROM gim_horarios h
inner join gim_dias d ON h.dias = d.id 
inner join gim_edades e ON h.edades = e.id_edad
inner join gim_sexo s ON h.sexo = s.id_sexo
inner join gim_profesores p ON h.id_profesor = p.id_profesor;





CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_listaProfesoresSimple`()
BEGIN
	SELECT 
	p.id_profesor
	,p.nombre_corto
	FROM gim_profesores p;
END



CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_listaAlumnosSimple`()
BEGIN
	SELECT
       a.id_alumno
       ,CONCAT(a.nombres,' ',a.apepat,' ',a.apemat) AS descripcion
	FROM gim_alumnos a;
END

SELECT
id_horario
,clase
,importe
FROM gim_horarios;



INSERT INTO gim_matricula(
id_alumno
,id_horario
,fecha_matricula
,anio_matricula
,mes_matricula
,id_profesor
,auditoria_ingreso
,auditoria_actualizacion
,estado
) VALUES (
p_id_alumno
,p_id_horario
,p_fecha_matricula
,p_anio_matricula
,p_mes_matricula
,p_id_profesor
,p_auditoria_ingreso
,p_auditoria_actualizacion
,'V'
);


UPDATE gim_matricula SET 
id_alumno = p_id_alumno
,id_horario = p_id_horario
,fecha_matricula = p_fecha_matricula
,anio_matricula = p_anio_matricula
,mes_matricula = p_mes_matricula
,id_profesor = p_id_profesor
,auditoria_ingreso = p_auditoria_ingreso
,auditoria_actualizacion = p_auditoria_actualizacion
WHERE id_matricula = p_id_matricula;


CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_saveMatricula`(IN `p_id_alumno` INT(11), IN `p_id_horario` INT(11), IN `p_fecha_matricula` DATE, IN `p_anio_matricula` INT(4), IN `p_mes_matricula` INT(2), IN `p_id_profesor` INT(11))

INSERT INTO gim_matricula(
id_alumno
,id_horario
,fecha_matricula
,anio_matricula
,mes_matricula
,id_profesor
,auditoria_ingreso
,auditoria_actualizacion
,estado
) VALUES (
p_id_alumno
,p_id_horario
,p_fecha_matricula
,p_anio_matricula
,p_mes_matricula
,p_id_profesor
,NOW()
,NOW()
,'V'
);



SELECT 
m.id_matricula
,m.id_alumno
,CONCAT(a.nombres,' ',a.apepat,' ',a.apemat) as alumno
,m.id_horario
,h.clase
,m.anio_matricula
,m.mes_matricula
,m.id_profesor
,p.nombre_corto
FROM gim_matricula m
INNER JOIN gim_alumnos a ON m.id_alumno = a.id_alumno
INNER JOIN gim_horarios h ON h.id_horario = m.id_horario
INNER JOIN gim_profesores p ON p.id_profesor = m.id_profesor
WHERE m.fecha_matricula >= p_fechaIni
AND m.fecha_matricula <= p_fechaFin
AND m.estado = 'V';



CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_saveMatricula`(IN `p_id_alumno` INT(11), 
IN `p_id_horario` INT(11), 
IN `p_fecha_matricula` DATE, 
IN `p_anio_matricula` INT(4), 
IN `p_mes_matricula` INT(2), 
IN `p_importe` DECIMAL(10,2), 
IN `p_saldo` DECIMAL(10,2), 
IN `p_id_profesor` INT(11))
INSERT INTO gim_matricula(
id_alumno
,id_horario
,fecha_matricula
,anio_matricula
,mes_matricula
,importe
,saldo
,id_profesor
,auditoria_ingreso
,auditoria_actualizacion
,estado
) VALUES (
p_id_alumno
,p_id_horario
,p_fecha_matricula
,p_anio_matricula
,p_mes_matricula
,p_importe
,p_saldo
,p_id_profesor
,NOW()
,NOW()
,'V'
)


CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_updMatricula`(
IN `p_id_matricula` INT(11), 
IN `p_id_alumno` INT(11), 
IN `p_id_horario` INT(11), 
IN `p_fecha_matricula` DATE, 
IN `p_anio_matricula` INT(4), 
IN `p_mes_matricula` INT(2),
IN `p_importe` DECIMAL(10,2), 
IN `p_saldo` DECIMAL(10,2), 
IN `p_id_profesor` INT(11))
UPDATE gim_matricula SET 
id_alumno = p_id_alumno
,id_horario = p_id_horario
,fecha_matricula = p_fecha_matricula
,anio_matricula = p_anio_matricula
,mes_matricula = p_mes_matricula
,importe = p_importe
,saldo = p_saldo
,id_profesor = p_id_profesor
,auditoria_actualizacion = NOW()
WHERE id_matricula = p_id_matricula


INSERT INTO `gimnasio`.`gim_comprobante_venta` (`id_comprobante`, `descripcion`, `estado`) VALUES (NULL, 'RECIBO', 'V');
INSERT INTO `gimnasio`.`gim_comprobante_venta` (`id_comprobante`, `descripcion`, `estado`) VALUES (NULL, 'BOLETA', 'V');
INSERT INTO `gimnasio`.`gim_comprobante_venta` (`id_comprobante`, `descripcion`, `estado`) VALUES (NULL, 'FACTURA', 'V');



CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_listaMatriculaCobro`(
IN `p_fecha_ini` DATE, 
IN `p_fecha_fin` DATE, 
IN `p_status` VARCHAR(1))


IF p_status = 'P' THEN
	SELECT 
	t.id_tutor
	,t.tipo_doc as id_tipo_doc
	,t.numdoc
	,CONCAT(t.nombres, ' ',t.apepat, ' ',t.apemat) as tutor
	,CONCAT(t.direccion,' - ',dpto.descripcion,' - ',prov.descripcion) as direccion
	,m.id_matricula
	,a.id_alumno
	,h.id_horario
	,CONCAT('Matricula de ', h.clase, ' de ', fn_nombreMes(m.mes_matricula), ' del ', m.anio_matricula, ' de ',CONCAT(a.nombres, ' ',a.apepat, ' ',a.apemat)) as descripcion_pedido
	,m.importe
	,m.saldo
	FROM gim_matricula m 
	inner join gim_alumnos a ON a.id_alumno = m.id_alumno
	inner join gim_tutores t ON t.id_tutor = a.id_tutor
	inner join gim_horarios h ON h.id_horario = m.id_horario
	inner join gim_ubigeo_dpto dpto ON dpto.ccod_dpto = t.departamento
	inner join gim_ubigeo_prov prov ON prov.ccod_dpto = t.departamento AND prov.ccod_prov = t.provincia
	WHERE m.fecha_matricula >= p_fecha_ini
	AND m.fecha_matricula <= p_fecha_fin
	AND m.saldo > 0
	AND m.estado = 'V'
ELSE
	SELECT 
	t.id_tutor
	,t.tipo_doc as id_tipo_doc
	,t.numdoc
	,CONCAT(t.nombres, ' ',t.apepat, ' ',t.apemat) as tutor
	,CONCAT(t.direccion,' - ',dpto.descripcion,' - ',prov.descripcion) as direccion
	,m.id_matricula
	,a.id_alumno
	,h.id_horario
	,CONCAT('Matricula de ', h.clase, ' de ', fn_nombreMes(m.mes_matricula), ' del ', m.anio_matricula, ' de ',CONCAT(a.nombres, ' ',a.apepat, ' ',a.apemat)) as descripcion_pedido
	,m.importe
	,m.saldo
	FROM gim_matricula m 
	inner join gim_alumnos a ON a.id_alumno = m.id_alumno
	inner join gim_tutores t ON t.id_tutor = a.id_tutor
	inner join gim_horarios h ON h.id_horario = m.id_horario
	inner join gim_ubigeo_dpto dpto ON dpto.ccod_dpto = t.departamento
	inner join gim_ubigeo_prov prov ON prov.ccod_dpto = t.departamento AND prov.ccod_prov = t.provincia
	WHERE m.fecha_matricula >= p_fecha_ini
	AND m.fecha_matricula <= p_fecha_fin
	AND m.saldo = 0
	AND m.estado = 'V'

END IF;



 DECLARE result VARCHAR(20); 
 
 CASE p_mes
        WHEN '1' THEN SET result = 'Enero';
        WHEN '2' THEN SET result = 'Febrero';
        WHEN '3' THEN SET result = 'Marzo';
        WHEN '4' THEN SET result = 'Abril';
        WHEN '5' THEN SET result = 'Mayo';
		WHEN '6' THEN SET result = 'Junio';
		WHEN '7' THEN SET result = 'Julio';
        WHEN '8' THEN SET result = 'Agosto';
        WHEN '9' THEN SET result = 'Setiembre';
        WHEN '10' THEN SET result = 'Octubre';
        WHEN '11' THEN SET result = 'Noviembre';
        WHEN '12' THEN SET result = 'Diciembre';
    END;
    
    RETURN result;


if n = '1' THEN result = 'Enero';
 elseif n = '2' THEN result = 'Febrero';
 elseif n = '3' THEN result = 'Marzo';
 elseif n = '4' THEN result = 'Abril';
 elseif n = '5' THEN result = 'Mayo';


DELIMITER $$
CREATE FUNCTION fn_nombreMes(p_mes INT(2)) RETURNS VARCHAR(20)
BEGIN
  DECLARE result VARCHAR(20);

 CASE p_mes
        WHEN '1' THEN SET result = 'Enero';
        WHEN '2' THEN SET result = 'Febrero';
        WHEN '3' THEN SET result = 'Marzo';
        WHEN '4' THEN SET result = 'Abril';
        WHEN '5' THEN SET result = 'Mayo';
		WHEN '6' THEN SET result = 'Junio';
		WHEN '7' THEN SET result = 'Julio';
        WHEN '8' THEN SET result = 'Agosto';
        WHEN '9' THEN SET result = 'Setiembre';
        WHEN '10' THEN SET result = 'Octubre';
        WHEN '11' THEN SET result = 'Noviembre';
        WHEN '12' THEN SET result = 'Diciembre';
END CASE;
  
  RETURN result;
END$$
DELIMITER ;





