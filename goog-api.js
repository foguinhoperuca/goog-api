/*jslint nomen: true */
/*global define */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
		define(['jquery', 'underscore', 'src/spreadsheet', 'text!package.json'], factory);
    } else {
        root.GOOGAPI_SPREADSHEET = factory(root.$, root._, root.Spreadsheet, root.BowerJSON);
    }
}(this, function ($, _, Spreadsheet, PackageJSON) {
	'use strict';

	return {
		VERSION: JSON.parse(PackageJSON).version,
		Spreadsheet: Spreadsheet
	};
}));
