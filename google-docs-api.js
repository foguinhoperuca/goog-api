/*global define */

// /**
//  * The main module that defines the public interface for principium,
//  * a made-up library to demonstrate how to construct a source from components.
//  */
// define(function (require) {
//     'use strict';

//     var $ = require('jquery'),
// 		spreedsheet = require('src/spreeedsheet');
// 	;

//     //Return the module value.
//     return {
//         version: '0.0.1, jQuery version is: ' + $.fn.jquery,
//         spreedsheet: spreedsheet
//     };
// });

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['underscore', 'jquery', 'spreadsheet'], factory);
    } else {
        root.amdWeb = factory(root._, root.$, root.spreadsheet);
    }
}(this, function (_, $, spreadsheet) {
	'use strict';
    //use b in some fashion.

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    // return {};

    // var $ = require('jquery'),
	// 	spreedsheet = require('src/spreeedsheet');
	// ;

    //Return the module value.
    return {
        version: '0.0.1, jQuery version is: ' + $.fn.jquery,
        spreedsheet: spreadsheet
    };
}));
