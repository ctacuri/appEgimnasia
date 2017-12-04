var server = "";
var perfilUsuario = "";
//var theme = "ui-smoothness";
var theme = "custom";
var theme2 = "fresh";
var theme3 = "web";
var theme4 = "bootstrap";

var body = $('body');
var offset = body.offset();
//var usuario = 'MIMEND';
//var perfilUsuario = 'CCENTE'; //SCCENT - CCENTE - JSCOME // STALLE - OTALM

//INICIO - LINK PANTALLAS
/*function fn_pantalla(nomPantalla){
    $("#div1").load(server + "/", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")

        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
}*/
//INICIO - LINK PANTALLAS

var fechaActual = new Date();
var diaActual = fechaActual.getDate();
var ultimoDiaMesActual = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();
var mesActual = fechaActual.getMonth();
var anioActual = fechaActual.getFullYear();
var horaActual = fechaActual.getHours();
var minutoActual = fechaActual.getMinutes();
var fechaInicioLoad = anioActual + '-' + (((mesActual)+1<10) ? "0" + (mesActual + 1) : (mesActual + 1)) + '-' + '01';
var fechaFinLoad = anioActual + '-' + (((mesActual)+1<10) ? "0" + (mesActual + 1) : (mesActual + 1)) + '-' + ((diaActual<10) ? "0" + diaActual : diaActual) ;

var optionsMap, chartMap;

function fn_convertFecha_DMY_to_SQL(fechaDMY){
    dia = fechaDMY.substr(0,2);
    mes = fechaDMY.substr(3,2);
    anio = fechaDMY.substr(6,4);

    return anio +'-'+mes+'-'+dia;
}

function fn_convertFecha_DMYHM_to_SQL(fechatime){
    dia = fechatime.substr(0,2);
    mes = fechatime.substr(3,2);
    anio = fechatime.substr(6,4);
    hora = fechatime.substr(11,2);
    min = fechatime.substr(14,2);

    return anio +'-'+mes+'-'+dia+' '+hora+':'+min+':00';
}

function fn_convertFecha_SQL_to_DMY(fechatime){
    anio = fechatime.substr(0,4);
    mes = fechatime.substr(5,2);
    dia = fechatime.substr(8,2);

    return dia +'/'+mes+'/'+anio;
}

function fn_DMY_to_Array(fechaDMYHM){
    dia = fechaDMYHM.substr(0,2);
    mes = fechaDMYHM.substr(3,2);
    anio = fechaDMYHM.substr(6,4);

    /*var fech = {
     DIA: (( dia<10) ? "0" + dia : dia),
     MES: (((mes)+1<10) ? "0" + (mes) : (mes)),
     ANIO: anio,
     HORA: ((hora<10) ? "0" + hora : hora),
     MINUTO: ((min<10) ? "0" + min : min)
     }*/
    var fech = {
        DIA: dia,
        MES: mes,
        ANIO: anio
    };
    return fech;
}

function fn_DMYHM_to_Array(fechaDMYHM){
    dia = fechaDMYHM.substr(0,2);
    mes = fechaDMYHM.substr(3,2);
    anio = fechaDMYHM.substr(6,4);
    hora = fechaDMYHM.substr(11,2);
    min = fechaDMYHM.substr(14,2);

    /*var fech = {
        DIA: (( dia<10) ? "0" + dia : dia),
        MES: (((mes)+1<10) ? "0" + (mes) : (mes)),
        ANIO: anio,
        HORA: ((hora<10) ? "0" + hora : hora),
        MINUTO: ((min<10) ? "0" + min : min)
    }*/
    var fech = {
        DIA: dia,
        MES: mes,
        ANIO: anio,
        HORA: hora,
        MINUTO: min
    }

    return fech;
}

function fn_time(){
    var f = new Date();
    var dia = f.getDate();
    // el mes es devuelto entre 0 y 11
    var mes = f.getMonth() + 1;
    var anio = f.getFullYear();
    var hora = f.getHours();
    var minuto = f.getMinutes();
    var segundo = f.getSeconds();

    var fech = {
      DIA: ((dia<10) ? "0" + dia : dia),
      MES: (((mes)+1<10) ? "0" + (mes) : (mes)),
      ANIO: anio,
      HORA: ((hora<10) ? "0" + hora : hora),
      MINUTO: ((minuto<10) ? "0" + minuto : minuto),
      SEGUNDO: ((segundo<10) ? "0" + segundo : segundo)
    };

    return fech;
}

function fn_FechaTimeProgTrab(tipoTrabajo){
    //Declaramos la fecha actual
    var f = new Date();
    var dia = f.getDate();
    var diaSemana = f.getDay();
    // el mes es devuelto entre 0 y 11
    var mes = f.getMonth();
    var anio = f.getFullYear();
    var hora = f.getHours();
    var minuto = f.getMinutes();
    var segundo = f.getSeconds();

    switch(tipoTrabajo){
        case 'A': //ADICIONAL
            days = 0;
            break;
        case 'N': //NORMAL
            if(diaSemana == 5){
                days = 2;
            }else{
                days = 1;
            }
            break;
        case 'P': //PROVINCIA NORMAL
            days = 1;
            break;
        case 'L': //PROVINCIA ADICIONAL
            days = 1;
            break;
        default:
            days = 1;
    }

    //Obtenemos los milisegundos desde media noche del 1/1/1970
    var tiempo = f.getTime();
    //Calculamos los milisegundos sobre la fecha que hay que sumar o restar...
    var milisegundos = parseInt(days*24*60*60*1000);
    //Modificamos la fecha actual
    var total = f.setTime(tiempo+milisegundos);
    var dia = f.getDate();
    var mes = f.getMonth();
    var anio = f.getFullYear();

    var fech = {
        DIA: ((dia<10) ? "0" + dia : dia),
        MES: (((mes)+1<10) ? "0" + (mes) : (mes)),
        ANIO: anio,
        HORA: ((hora<10) ? "0" + hora : hora),
        MINUTO: ((minuto<10) ? "0" + minuto : minuto),
        SEGUNDO: ((segundo<10) ? "0" + segundo : segundo)
    };

    return fech;
}

function fn_validarFormProgTrab(){
    var msg = '';
    var tipoTrabajo = $('#tipoTrabajo').jqxDropDownList('selectedIndex');
    var dpto = $('#dpto').jqxDropDownList('selectedIndex');
    var prov = $('#prov').jqxDropDownList('selectedIndex');
    var dist = $('#dist').jqxDropDownList('selectedIndex');
    var obs = $('#observacion').val();

    if(tipoTrabajo == -1){
        msg += 'Elija un tipo de trabajo correcto\n';
    }
    if(dpto == -1){
        msg += 'Elija un departamento correcto\n';
    }
    if(prov == -1){
        msg += 'Elija una provincia correcta\n';
    }
    if(dist == -1){
        msg += 'Elija un distrito correcto\n';
    }
    if(obs.length < 5){
        msg += 'La observacion debe tener mas de 5 caracteres\n';
    }

    return msg;
}

function fn_addFilterGrid(grid, field, value){
    var filtergroup = new $.jqx.filter();
    var filter_or_operator = 1;
    var filtervalue = value;
    var filtercondition = 'contains';
    var filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
    filtergroup.addfilter(filter_or_operator, filter1);

    // add the filters.
    $("#"+grid).jqxGrid('addfilter', field, filtergroup);
    // apply the filters.
    $("#"+grid).jqxGrid('applyfilters');
}

function fn_sourceJSON(datafields, url){
    var source =
    {
        datatype: "json",
        datafields: datafields,
        url: url
    };
    return source;
}


function fn_readOnlyText(arrayException){
    var elementsText = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < elementsText.length; i++) {
        elementsText[i].readOnly = !elementsText[i].readOnly;
    }

    //console.log()
    for(var i = 0; i < arrayException.length; i++){
        document.getElementById(arrayException[i]).readOnly = false;
        //arrayException[i].readOnly = false;
    }
}

var vDefaultOptionsToolBar = {
    theme: theme3,
    width: '100%',
    height: 35
};

var vDefaultOptionsGrid = {
    theme: theme3,
    width: '100%',
    height: '100%',
    touchmode: false,
    //filtermode: 'excel',
    filterable: true,
    showfilterrow: true,
    groupable: true,
    sortable: true,
    altrows: true,
    enabletooltips: true,
    columnsresize: true,
    columnsreorder: true,
    selectionmode: 'singlerow',
    showstatusbar: true,
    showaggregates: true
};

var vDefaultOptionsWindow = {
    theme: theme,
    autoOpen: false,
    resizable: false,
    //position: { x: offset.left + 50, y: offset.top + 50},
    showCollapseButton: true,
};

var vDefaultOptionsDateTimeInput = {
    theme: theme3,
    width: '200',
    height: '25',
    formatString: 'dd/MM/yyyy HH:mm',
    showTimeButton: true,
    //value: new Date(anioActual, mesActual, diaActual, horaActual, minutoActual, 0),
    showCalendarButton: true,
    culture: 'es-ES'
};

var vDefaultOptionsDropDownList = {
    theme: theme4,
    placeHolder: "Seleccione:",
    width: 200,
    height: 25
};

var vDefaultOptionsTextArea = {
    theme: theme3,
    width: 200,
    height: 90,
    minLength: 1
};

var vDefaultOptionsInput = {
    theme: theme3,
    height: 25,
    width: 195
};

var vDefaultOptionsButton = {
    theme: theme3,
    width: 100,
    height: 30,
    imgPosition: "left",
    textPosition: "right",
    textImageRelation: "imageBeforeText"
};

var vDefaultOptionsTabs = {
    theme: theme3,
    width: '100%',
    height: '100%',
    position: 'top'
};

var vDefaultOptionsMenu = {
    theme: theme3,
    width: 200,
    height: 58,
    autoOpenPopup: false,
    mode: 'popup'
}


function fn_JSONToCSVConvertor(JSONData, fileName, ReportTitleCSV, ShowLabel) {
    /*if(JSONData.length == 0){
        alert("ERROR: No existen datos en la grilla");
        return false;
    }*/

    if(confirm("Esta seguro de exportar los datos?")) {
        //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

        var CSV = '';
        if (ReportTitleCSV != "") {
            //Set Report title in first row or line
            CSV += ReportTitleCSV + '\r\n\n';
        }

        //This condition will generate the Label/Header
        if (ShowLabel) {
            var row = "";

            //This loop will extract the label from 1st index of on array
            for (var index in arrData[0]) {

                //Now convert each value to string and comma-seprated
                row += index + ',';
            }

            row = row.slice(0, -1);

            //if(ReportTitleCSV != "") {
            //append Label row with line break
            CSV += row + '\r\n';
            //}
        }

        //1st loop is to extract each row
        for (var i = 0; i < arrData.length; i++) {
            var row = "";

            //2nd loop will extract each column and convert it in string comma-seprated
            for (var index in arrData[i]) {
                row += '"' + arrData[i][index] + '",';
            }

            row.slice(0, row.length - 1);

            //add a line break after each row
            CSV += row + '\r\n';
        }

        if (CSV == '') {
            alert("Invalid data");
            return;
        }

        ////Generate a file name
        //var fileName = "MyReport_";
        ////this will remove the blank-spaces from the title and replace it with an underscore
        //fileName += ReportTitleCSV.replace(/ /g,"_");

        //Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

        // Now the little tricky part.
        // you can use either>> window.open(uri);
        // but this will not work in some browsers
        // or you will not get the correct file extension

        //this trick will generate a temp <a /> tag
        var link = document.createElement("a");
        link.href = uri;

        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";

        //this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function fn_nmes(mes){
    var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return monthNames[mes - 1];
}

/*
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});


function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}*/

/*
var vLocalizationScheduler = {
    //localization: {
        // separator of parts of a date (e.g. '/' in 11/05/1955)
        '/': "/",
        // separator of parts of a time (e.g. ':' in 05:44 PM)
        ':': ":",
        // the first day of the week (0 = Sunday, 1 = Monday, etc)
        firstDay: 0,
        days: {
            // full day names
            names: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
            // abbreviated day names
            namesAbbr: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            // shortest day names
            namesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
        },
        months: {
            // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
            names: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre", ""],
            // abbreviated month names
            namesAbbr: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic", ""]
        },
        // AM and PM designators in one of these forms:
        // The usual view, and the upper and lower case versions
        //      [standard,lowercase,uppercase]
        // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
        //      null
        AM: ["AM", "am", "AM"],
        PM: ["PM", "pm", "PM"],
        eras: [
            // eras in reverse chronological order.
            // name: the name of the era in this culture (e.g. A.D., C.E.)
            // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
            // offset: offset in years from gregorian calendar
            { "name": "A.D.", "start": null, "offset": 0 }
        ],
        twoDigitYearMax: 2029,
        patterns: {
            // short date pattern
            d: "M/d/yyyy",
            // long date pattern
            D: "dddd, MMMM dd, yyyy",
            // short time pattern
            t: "h:mm tt",
            // long time pattern
            T: "h:mm:ss tt",
            // long date, short time pattern
            f: "dddd, MMMM dd, yyyy h:mm tt",
            // long date, long time pattern
            F: "dddd, MMMM dd, yyyy h:mm:ss tt",
            // month/day pattern
            M: "MMMM dd",
            // month/year pattern
            Y: "yyyy MMMM",
            // S is a sortable format that does not vary by culture
            S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",
            // formatting of dates in MySQL DataBases
            ISO: "yyyy-MM-dd hh:mm:ss",
            ISO2: "yyyy-MM-dd HH:mm:ss",
            d1: "dd.MM.yyyy",
            d2: "dd-MM-yyyy",
            d3: "dd-MMMM-yyyy",
            d4: "dd-MM-yy",
            d5: "H:mm",
            d6: "HH:mm",
            d7: "HH:mm tt",
            d8: "dd/MMMM/yyyy",
            d9: "MMMM-dd",
            d10: "MM-dd",
            d11: "MM-dd-yyyy"
        },
        agendaDateColumn: "Fecha",
        agendaTimeColumn: "Hora",
        agendaAppointmentColumn: "Evento",
        backString: "anterior",
        forwardString: "siguiente",
        toolBarPreviousButtonString: "anterior",
        toolBarNextButtonString: "siguiente",
        emptyDataString: "No hay datos para mostrar",
        loadString: "Loading...",
        clearString: "Clear",
        todayString: "Hoy",
        dayViewString: "Dia",
        weekViewString: "Semana",
        monthViewString: "Mes",
        agendaViewString: "Agenda",

        timelineDayViewString: "Timeline Day",
        timelineWeekViewString: "Timeline Week",
        timelineMonthViewString: "Timeline Month",

        agendaAllDayString: "Todo el dia",
        loadingErrorMessage: "Los datos todav�a se est� cargando y no se puede establecer una propiedad o llamar a un m�todo. Usted puede hacer que una vez que los datos se completa la uni�n. jqxScheduler plantea el evento 'bindingComplete' cuando se completa la uni�n.",
        editRecurringAppointmentDialogTitleString: "Editar evento peri�dico",
        editRecurringAppointmentDialogContentString: "�Quieres editar s�lo esta ocurrencia o la serie?",
        editRecurringAppointmentDialogOccurrenceString: "Editar Ocurrencia",
        editRecurringAppointmentDialogSeriesString: "Editar la serie",

        editDialogTitleString: "Editar Evento",
        editDialogCreateTitleString: "Crear un nuevo evento",
        contextMenuEditAppointmentString: "Modificar evento",
        contextMenuCreateAppointmentString: "Crear nuevo evento",
        editDialogSubjectString: "Tema",
        editDialogLocationString: "Ubicacion",
        editDialogFromString: "Desde",
        editDialogToString: "Hasta",
        editDialogAllDayString: "Todo el dia",
        editDialogExceptionsString: "Excepciones",
        editDialogResetExceptionsString: "Reset on save",
        editDialogDescriptionString: "Descripcion",
        editDialogResourceIdString: "Propietario",
        editDialogStatusString: "Status",
        editDialogColorString: "Color",
        editDialogColorPlaceHolderString: "Seleccionar color",
        editDialogTimeZoneString: "Zona horaria",
        editDialogSelectTimeZoneString: "Seleccione zona horaria",
        editDialogSaveString: "Guardar",
        editDialogDeleteString: "Eliminar",
        editDialogCancelString: "Cancelar",
        editDialogRepeatString: "Repetir",

        editDialogRepeatEveryString: "Repite cada",
        editDialogRepeatEveryWeekString: "semana(s)",
        editDialogRepeatEveryYearString: "a�o(s)",
        editDialogRepeatEveryDayString: "dia(s)",
        editDialogRepeatNeverString: "Nunca",
        editDialogRepeatDailyString: "Diariamente",
        editDialogRepeatWeeklyString: "Semanal",
        editDialogRepeatMonthlyString: "Mensual",
        editDialogRepeatYearlyString: "Anual",
        editDialogRepeatEveryMonthString: "mes(es)",
        editDialogRepeatEveryMonthDayString: "Dia",
        editDialogRepeatFirstString: "Primero",
        editDialogRepeatSecondString: "Segundo",
        editDialogRepeatThirdString: "Tercero",
        editDialogRepeatFourthString: "Cuarto",
        editDialogRepeatLastString: "Ultimo",
        editDialogRepeatEndString: "Fin",
        editDialogRepeatAfterString: "Despues",
        editDialogRepeatOnString: "On",
        editDialogRepeatOfString: "of",
        editDialogRepeatOccurrencesString: "ocurrencia(s)",
        editDialogRepeatSaveString: "Guardar ocurrencia",

        editDialogRepeatSaveSeriesString: "Guardar serie",
        editDialogRepeatDeleteString: "Eliminar ocurrencia",
        editDialogRepeatDeleteSeriesString: "Eliminar serie",
        editDialogStatuses:
        {
            free: "Libre",
            tentative: "Tentativo",
            busy: "Ocupado",
            outOfOffice: "Fuera oficina"
        }
    //}
}*/

/*
function jqxGridConstructor(customOptions) {
    this.defaults = {
        filterable: true,
        sortable: true,
        width: '99.8%',
        columnsresize: true,
        theme: 'custom',
        columns: [
            {
                text: '#', sortable: false, filterable: false, editable: false,
                groupable: false, draggable: false, resizable: false,
                datafield: ', columntype: 'number', width: '5%',
                cellsrenderer: function (row, column, value) {
                    return "<div style='margin:4px; float: right'>" + (value + 1) + "</div>";
                }, pinned: true
            }
        ]
    };
    this.customOptions = customOptions;
    this.jqxGridAdapter = function (customOptions) {
        var source =
        {
            datatype: "json"
        };
        // create a new instance of the jqx.dataAdapter.
        this.dataAdapter = new $.jqx.dataAdapter($.extend(source, customOptions.source));
        this.get = function () {
            return this.dataAdapter;
        }
    }
    this.getOptions = function () {
        if (this.customOptions.columns != undefined) {
            for (var i = 0; i < this.defaults.columns.length; i++) {
                this.customOptions.columns.push(this.defaults.columns[i]);
            }
        }
        return $.extend(this.defaults, this.customOptions, {source: new this.jqxGridAdapter(this.customOptions).get()});
    }
}*/

function fn_clearText(){
    var elementsText = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < elementsText.length; i++) {
        //elementsText[i].readOnly = !elementsText[i].readOnly;
        elementsText[i].value = '';
    }

    /*for(var i = 0; i < arrayException.length; i++){
     document.getElementById(arrayException[i]).value = '';
     }*/
}

function fn_clearDateTimeInput(arregloInput){
    var f = new Date();
    var dia = f.getDate();
    // el mes es devuelto entre 0 y 11
    var mes = f.getMonth();
    var anio = f.getFullYear();

    for(var x = 0; x < arregloInput.length; x++){
        $('#' + arregloInput[x]).jqxDateTimeInput('setDate', new Date(anio, mes, dia));
    }
}

function fn_clearDropDownList(arregloInput){
    for(var x = 0; x < arregloInput.length; x++){
        $('#' + arregloInput[x]).jqxDropDownList('clearSelection');
    }
}

function fn_validarTutor(datos) {
    if(datos.tipoDoc == ""){
        alert("Error: ingrese un tipo de documento valido");
        return false;
    }
    if(datos.nroDocumento == ""){
        alert("Error: ingrese un nro de documento valido");
        return false;
    }
    if(datos.apepat == ""){
        alert("Error: ingrese un apellido paterno valido");
        return false;
    }
    if(datos.apemat == ""){
        alert("Error: ingrese un apellido materno valido");
        return false;
    }
    if(datos.nombres == ""){
        alert("Error: ingrese un nombre valido");
        return false;
    }
    if(datos.sexo == ""){
        alert("Error: ingrese un sexo valido");
        return false;
    }
    if(datos.dpto == ""){
        alert("Error: ingrese un departamento valido");
        return false;
    }
    if(datos.prov == ""){
        alert("Error: ingrese un provincia valido");
        return false;
    }
    if(datos.dist == ""){
        alert("Error: ingrese un distrito valido");
        return false;
    }
    if(datos.direccion == ""){
        alert("Error: ingrese una direccion valida");
        return false;
    }
    /*if(datos.obs == ""){
        alert("Error: ingrese una observacion valida");
        return false;
    }*/
    return true;
}

function fn_validarAlumno(datos){
    if(datos.idTutor == ""){
        alert("Error: ingrese un tutor valido");
        return false;
    }
    if(datos.tipoDoc == ""){
        alert("Error: ingrese un tipo de documento valido");
        return false;
    }
    if(datos.nroDocumento == ""){
        alert("Error: ingrese un nro de documento valido");
        return false;
    }
    if(datos.apepat == ""){
        alert("Error: ingrese un apellido paterno valido");
        return false;
    }
    if(datos.apemat == ""){
        alert("Error: ingrese un apellido materno valido");
        return false;
    }
    if(datos.nombres == ""){
        alert("Error: ingrese un nombre valido");
        return false;
    }
    if(datos.sexo == ""){
        alert("Error: ingrese un sexo valido");
        return false;
    }

    /*if(datos.dpto == ""){
        alert("Error: ingrese un departamento valido");
        return false;
    }
    if(datos.prov == ""){
        alert("Error: ingrese un provincia valido");
        return false;
    }
    if(datos.dist == ""){
        alert("Error: ingrese un distrito valido");
        return false;
    }
    if(datos.direccion == ""){
        alert("Error: ingrese una direccion valida");
        return false;
    }*/
    return true;
}

function fn_validarHorarios(datos) {
    if(datos.tipoDoc == ""){
        alert("Error: ingrese un tipo de documento valido");
        return false;
    }
    if(datos.nroDocumento == ""){
        alert("Error: ingrese un nro de documento valido");
        return false;
    }
    if(datos.apepat == ""){
        alert("Error: ingrese un apellido paterno valido");
        return false;
    }
    if(datos.apemat == ""){
        alert("Error: ingrese un apellido materno valido");
        return false;
    }
    if(datos.nombres == ""){
        alert("Error: ingrese un nombre valido");
        return false;
    }
    if(datos.sexo == ""){
        alert("Error: ingrese un sexo valido");
        return false;
    }
    if(datos.dpto == ""){
        alert("Error: ingrese un departamento valido");
        return false;
    }
    if(datos.prov == ""){
        alert("Error: ingrese un provincia valido");
        return false;
    }
    if(datos.dist == ""){
        alert("Error: ingrese un distrito valido");
        return false;
    }
    if(datos.direccion == ""){
        alert("Error: ingrese una direccion valida");
        return false;
    }
    return true;
}


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function fn_updArreglos(){
    //console.log(arregloEmpresas.length);
    var arreglo = [];
    $.when(
        $.ajax("/listaEmpresas")
    ).done(function( json5 ) {
        //console.log(json5);
        //console.log(arregloEmpresas.length);
        //console.log(json5.registros[0]);
        for(var x = 0; x<json5.registros[0].length; x++){
            //console.log(json5.registros[0][x])
            arreglo.push(
                {
                    id_parametro: json5.registros[0][x].id_parametro,
                    numdoc: json5.registros[0][x].numdoc,
                    descripcion: json5.registros[0][x].descripcion,

                    impuesto: json5.registros[0][x].impuesto,
                    nro_serie_ticket: json5.registros[0][x].nro_serie_ticket,
                    nro_ticket: json5.registros[0][x].nro_ticket,
                    nro_serie_boleta: json5.registros[0][x].nro_serie_boleta,
                    nro_boleta: json5.registros[0][x].nro_boleta,
                    nro_serie_factura: json5.registros[0][x].nro_serie_factura,
                    nro_factura: json5.registros[0][x].nro_factura,

                    nro_serie_registro: json5.registros[0][x].nro_serie_registro,
                    nro_registro: json5.registros[0][x].nro_registro
                }
           );
            return JSON.stringify(arreglo);
        }
        //console.log("PINTA DESDE FUNCION");
        //console.log(JSON.stringify(arreglo));
        //return JSON.stringify(arreglo);
    });
    //console.log("parametros actualizados");
}

function fn_registrarDetCobro(arregloDet, idCobro, impuesto, arregloCab){
    //REGISTRAR DETALLE DE COBRO
    var url = "/EG/saveDetCobro";
    //var cobroDet = [];
    //cobroDet.push({
       //arrayDetCobro: arregloDet
    //});
    console.log("DETALLE");
    console.log(arregloCab);
    //console.log(arregloDet);
    //var cont = 0;
    $.ajax({
        type: "POST",
        url: url,
        data: { idCobro: idCobro, detalle: arregloDet, impuesto: impuesto},
        dataType: 'json',
        success: function(result){
            //console.log(result);
            if(result.status == "success") {
                //DETALLE DE COBRO REGISTRADO
                //alert("");
                //cont = cont + 1;
                //console.log("Cobro realizado satisfactoriamente")
                //alert("Proceso realizado correctamente (COBRO)");
                //location.reload();
                fn_emisionTicket(arregloCab, arregloDet);
                return false;
            }else{
                alert("Error: Vuelva a intentarlo (Det Cobro)");
                return false;
            }
        },error: function (xhr, ajaxOptions, thrownError) {
            alert("ERROR: " + xhr.responseText+" - "+thrownError);
        }
    });
}

function fn_registrarCabCobro(arregloCab, arregloDet, impuesto){
    //REGISTRAR CABECERA DE COBRO
    var url = "/EG/saveCabCobro";
    //console.log(arregloDet);
    $.ajax({
        type: "POST",
        url: url,
        data: arregloCab,
        dataType: 'json',
        success: function(result){
            //console.log(result);
            if(result.status == "success") {
                //REGISTRAR DETALLE DE COBRO
                var idCobro = result.registros[0][0].vIdCobro;
                fn_registrarDetCobro(arregloDet, idCobro, impuesto, arregloCab);
                return false;
            }else{
                alert("Error: Vuelva a intentarlo (Cab Cobro)");
                return false;
            }
        },error: function (xhr, ajaxOptions, thrownError) {
            alert("ERROR: " + xhr.responseText+" - "+thrownError);
        }
    });
}

function fn_viewTicket(idCobro){
    $.when(
        $.ajax("/EG/listaCobroCab/"+idCobro),
        $.ajax("/EG/listaCobroDet/"+idCobro)
    ).done(function( json1, json2 ) {

        if(json1[0].status == "success"){
            console.log("CAB");
            //console.log(json1[0].registros[0]);
        }else{
            alert("Error: al cargar cobroCab");
            return false;
        }

        if(json2[0].status == "success"){
            console.log("DET");
            console.log(json2[0].registros);
        }else{
            alert("Error: al cargar cobroDet");
            return false;
        }

        //var objDet = JSON.parse(json2[0].registros);
        console.log("REIMPRESION DE TICKET");
        //console.log(json1[0].registros[0]);
        //console.log(objDet);
        var UBIGEO = " " + json1[0].registros[0].departamento_name + " - " + json1[0].registros[0].provincia_name + " - " + json1[0].registros[0].distrito_name;

        $("#rucEmpresa").text(json1[0].registros[0].ruc_empresa);
        $("#nombreEmpresa").text(json1[0].registros[0].empresa);
        $("#direccionEmpresa").text(json1[0].registros[0].direccion_empresa + UBIGEO);
        $("#telefonoEmpresa").text(json1[0].registros[0].telefono_empresa);
        $("#autorizacionSunat").text(json1[0].registros[0].autorizacion_sunat);
        $("#nroMaquina").text(json1[0].registros[0].nro_maquina);
        $("#paginaWeb").text(json1[0].registros[0].pagina_web);
        $("#facebook").text(json1[0].registros[0].facebook);
        $("#nroTicket").text(json1[0].registros[0].nro_correlativo);
        $("#fechaEmision").text(fn_convertFecha_SQL_to_DMY(json1[0].registros[0].fecha_emision));
        $("#idCliente").text(json1[0].registros[0].numdoc);
        $("#cliente").text(json1[0].registros[0].cliente);
        //$("#tipoPago").text( (json1[0].registros[0].formaPago == 1) ? 'EFECTIVO' : 'CREDITO' );
        //$("#tipoPago").text( (json1[0].registros[0].formaPago == 1) ? 'EFECTIVO' : 'CREDITO' );
        var tipoPago = "";
        switch(json1[0].registros[0].forma_pago){
            case 1:
                tipoPago = 'EFECTIVO';
                break;
            case 2:
                tipoPago = 'DEBITO';
                break;
            case 3:
                tipoPago = 'CREDITO';
                break;
        }
        //console.log(json1[0].registros[0].forma_pago);
        $("#tipoPago").text(tipoPago);

        var html = "";
        for(var x = 0; x < json2[0].registros.length; x++){
            html += "Cuota mes de: " + json2[0].registros[x].mes + "("+json2[0].registros[x].alumno+")" + "("+json2[0].registros[x].horario+")" + " <span>S/." + json2[0].registros[x].total+"</span>";
            html += "<br>";
        }

        $("#detalle").html(html);
        $("#totalTicket").text("S/. " + json1[0].registros[0].total);

        $('#myModalTicket').modal('show');
    });
    //return false;
}

function fn_emisionTicket(arregloCab, arregloDet){
    var objDet = JSON.parse(arregloDet);
    console.log("EMISION DE TICKET");
    //console.log(arregloCab);
    console.log(objDet);
    $("#nroTicket").text(arregloCab.nroCorrelativo);
    $("#fechaEmision").text(fn_convertFecha_SQL_to_DMY(arregloCab.fechaEmision));

    var UBIGEO = " " + arregloCab.departamento_name + " - " + arregloCab.provincia_name + " - " + arregloCab.distrito_name;
    $("#nombreEmpresa").text(arregloCab.empresa);
    $("#rucEmpresa").text(arregloCab.rucEmpresa);
    $("#direccionEmpresa").text(arregloCab.direccion_empresa + UBIGEO);
    $("#telefonoEmpresa").text(arregloCab.telefono_empresa);
    $("#autorizacionSunat").text(arregloCab.autorizacion_sunat);
    $("#nroMaquina").text(arregloCab.nro_maquina);
    $("#paginaWeb").text(arregloCab.pagina_web);
    $("#facebook").text(arregloCab.facebook);
    $("#nroTicket").text(arregloCab.nro_correlativo);

    $("#idCliente").text(arregloCab.numDoc);
    $("#cliente").text(arregloCab.cliente);
    //$("#tipoPago").text( (arregloCab.formaPago == 1) ? 'EFECTIVO' : 'CREDITO' );
    var tipoPago = "";
    switch(arregloCab.formaPago){
        case "1":
            tipoPago = 'EFECTIVO';
            break;
        case "2":
            tipoPago = 'DEBITO';
            break;
        case "3":
            tipoPago = 'CREDITO';
            break;
    }
    //console.log(tipoPago);
    $("#tipoPago").text(tipoPago);

    var html = "";
    for(var x = 0; x < objDet.length; x++){
        html += "Cuota mes de: " + objDet[x].mes + "("+objDet[x].alumno+")" + "("+objDet[x].horario+")" + " <span>S/." + objDet[x].importe+"</span>";
        html += "<br>";
    }

    $("#detalle").html(html);
    $("#totalTicket").text("S/. " + arregloCab.total);
    $('#myModal').modal('hide');

    //SHOW TICKET (MENOS TIPO DOC: REGISTRO)
    $('#myModalTicket').modal('show');
    //return false;
    console.log("UPDATE CORRELATIVO");
    console.log(arregloCab);
    var url = "/EG/updCorrelativo/";
    var arregloUpdCorrelativo = {
      rucEmpresa: arregloCab.rucEmpresa,
      idFormaPago: arregloCab.tipoComprobante
    };
    $.ajax({
        type: "POST",
        url: url,
        data: arregloUpdCorrelativo,
        dataType: 'json',
        success: function(result){
            console.log("ver ticket");
            //console.log(result);
            if(result.status == "success") {
                //DESPUES DE ACTUALIZAR EL CORRELATIVO MUESTRO
                //EL TICKET
                //$("#empresa").text(arregloCab.empresa);
                $('#myModalTicket').modal('show');
                fn_updArreglos();
                if(arregloCab.pantallaCobro == "SI"){
                    console.log("UPDATE DE SALDO DE MATRICULA");
                    console.log(arregloCab);
                    fn_updSaldoCobro(arregloCab);
                }
                return false;
            }else{
                alert("Error: Vuelva a intentarlo (Upd Correlativo)");
                return false;
            }
        },error: function (xhr, ajaxOptions, thrownError) {
            alert("ERROR: " + xhr.responseText+" - "+thrownError);
        }
    });
}

function fn_updSaldoCobro(datos){
    console.log("INICIO DE UPDATE SALDO");
    console.log(datos);
    //return false;
    var url = "/EG/updSaldoMatricula";
    $.ajax({
        type: "POST",
        url: url,
        data: datos,
        dataType: 'json',
        success: function(result){
            console.log("RESSPUESTA DE UPDATE SALDO");
            console.log(result);
            if(result.status == "success") {
               //alert("Saldo actualizado correctamente");
                //location.reload();
                console.log("UPDATE SALDO - OK");
                return false;
            }else{
                alert("Error: Vuelva a intentarlo");
                return false;
            }
        },error: function (xhr, ajaxOptions, thrownError) {
            alert("ERROR: " + xhr.responseText+" - "+thrownError);
        }
    });
}