/*jslint nomen: true */
/*global define */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
		define(['jquery', 'underscore', 'src/spreadsheet'], factory);
    } else {
        root.GOOGAPI_SPREADSHEET = factory(root.$, root._, root.Spreadsheet);
    }
}(this, function ($, _, Spreadsheet) {
	'use strict';

	return {
		version: '0.0.5',
		Spreadsheet: Spreadsheet
	};
}));
