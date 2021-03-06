/*
 * Globalize Culture es-US
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "es-ES", "default", {
	name: "es",
	englishName: "Spanish",
	nativeName: "Spanish",
	isRTL: false,
	language: "es",
	numberFormat: {
		pattern: ["-n"],
		decimals: 2,
		",": ",",
		".": ".",
		groupSizes: [3],
		"+": "+",
		"-": "-",
		"NaN": "NaN",
		negativeInfinity: "-Infinity",
		positiveInfinity: "Infinity",
		percent: {pattern: ["-n %", "n %"], decimals: 2, groupSizes: [3], ",": ",", ".": ".", symbol: "%"},
		currency: {pattern: ["($n)", "$n"], decimals: 2, groupSizes: [3], ",": ",", ".": ".", symbol: "$"}
	},
	calendars: {
		standard: {
			name: "Gregorian_USEnglish",
			"/": "/",
			":": ":",
			firstDay: 0,
			days: {
				names: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
				namesAbbr: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
				namesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
			},
			months: {
				names: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre", ""],
				namesAbbr: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic", ""]
			},
			AM: ["AM", "am", "AM"],
			PM: ["PM", "pm", "PM"],
			eras: [{name: "A.D.", start: null, offset: 0}],
			twoDigitYearMax: 2029,
			patterns: {
				d: "M/d/yyyy",
				D: "dddd, MMMM dd, yyyy",
				t: "h:mm tt",
				T: "h:mm:ss tt",
				f: "dddd, MMMM dd, yyyy h:mm tt",
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				M: "MMMM dd",
				Y: "yyyy MMMM",
				S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
			}
		}
	}
});

}( this ));
