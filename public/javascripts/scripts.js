/**
 * Created by ctacuri on 07/11/2016.
 */
// 'css/style.css',
// 'bower_components/jqwidgets/jqwidgets/styles/jqx.ui-smoothness.css',
var style_arr = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/jqwidgets/jqwidgets/styles/jqx.base.css',
    'bower_components/jqwidgets/jqwidgets/styles/jqx.web.css',
    'bower_components/jqwidgets/jqwidgets/styles/jqx.custom.css',
    'bower_components/font-awesome/css/font-awesome.min.css',
    'stylesheets/style.css'
]

for (var i = 0; i < style_arr.length; i++) {
    var newString = '<link rel="stylesheet" href="' + style_arr[i] + '" type="text/css" />'; //.replace('src="', 'src="' + dirModule + '/');
    document.write(newString);
    //console.log(newString);
}

var script_arr = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/jqwidgets/jqwidgets/jqxcore.js',
    'bower_components/jqwidgets/jqwidgets/jqxbuttons.js',
    'bower_components/jqwidgets/jqwidgets/jqxswitchbutton.js',
    'bower_components/jqwidgets/jqwidgets/jqxscrollbar.js',
    'bower_components/jqwidgets/jqwidgets/jqxdata.js',
    'bower_components/jqwidgets/jqwidgets/jqxtabs.js',
    'bower_components/jqwidgets/jqwidgets/jqxscheduler.js',
    'bower_components/jqwidgets/jqwidgets/jqxscheduler.api.js',
    'bower_components/jqwidgets/jqwidgets/jqxtree.js',
    'bower_components/jqwidgets/jqwidgets/jqxpanel.js',

    'bower_components/jqwidgets/jqwidgets/jqxdatetimeinput.js',
    'bower_components/jqwidgets/jqwidgets/jqxmenu.js',
    'bower_components/jqwidgets/jqwidgets/jqxcalendar.js',
    'bower_components/jqwidgets/jqwidgets/jqxtooltip.js',
    'bower_components/jqwidgets/jqwidgets/jqxwindow.js',
    'bower_components/jqwidgets/jqwidgets/jqxcheckbox.js',
    'bower_components/jqwidgets/jqwidgets/jqxlistbox.js',
    'bower_components/jqwidgets/jqwidgets/jqxdropdownlist.js',
    'bower_components/jqwidgets/jqwidgets/jqxnumberinput.js',
    'bower_components/jqwidgets/jqwidgets/jqxradiobutton.js',
    'bower_components/jqwidgets/jqwidgets/jqxinput.js',
    'bower_components/jqwidgets/jqwidgets/jqxtextarea.js',
    'bower_components/jqwidgets/jqwidgets/jqxwindow.js',

    'bower_components/jqwidgets/jqwidgets/jqxtoolbar.js',
    'bower_components/jqwidgets/jqwidgets/jqxgrid.js',
    'bower_components/jqwidgets/jqwidgets/jqxgrid.sort.js',
    'bower_components/jqwidgets/jqwidgets/jqxgrid.pager.js',
    'bower_components/jqwidgets/jqwidgets/jqxgrid.filter.js',
    'bower_components/jqwidgets/jqwidgets/jqxgrid.selection.js',
    'bower_components/jqwidgets/jqwidgets/jqxgrid.columnsresize.js',
    'bower_components/jqwidgets/jqwidgets/jqxgrid.columnsreorder.js',
    'bower_components/jqwidgets/jqwidgets/jqxgrid.aggregates.js',
    'bower_components/jqwidgets/jqwidgets/jqxgrid.grouping.js',
    'bower_components/jqwidgets/jqwidgets/jqxgrid.edit.js',
    'bower_components/jqwidgets/jqwidgets/jqxdata.export.js',
    'bower_components/jqwidgets/jqwidgets/jqxgrid.export.js',

    'bower_components/jqwidgets/jqwidgets/globalization/globalize.js',
    'bower_components/jqwidgets/jqwidgets/globalization/globalize.culture.es-ES.js',

    'bower_components/bootstrap/dist/js/bootstrap.min.js',

    'javascripts/config.js',
    'javascripts/linq.js_ver2.2.0.2/linq.js',
    //'javascripts/jquery.printElement.js'
    'javascripts/printThis.js'

];

for (var i = 0; i < script_arr.length; i++) {
    var newString = '<script type="text/javascript" src="' + script_arr[i] + '"></script>'; //.replace('src="', 'src="' + dirModule + '/');
    document.write(newString);
    //console.log(newString);
}

//$.support.cors = true;
//var progress = 0;
//script_arr.forEach(function(script) {
/*$.getScript(script, function () {
 if (++progress == scripts.length) callback();
 });*/
/*var s = document.createElement("script");
 s.type = "text/javascript";
 s.src = script;
 $("head").append(s);*/
//document.head.appendChild(script);
//console.log(s);
//});
