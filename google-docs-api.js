(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['src/spreadsheet'], factory);
    } else {
        root.GDAPI = factory(root.spreadsheet);
    }
}(this, function (spreadsheet) {
	'use strict';

    return {
        version: '0.0.1, jQuery version is: ' + $.fn.jquery,
        spreedsheet: spreadsheet
    };
}));
