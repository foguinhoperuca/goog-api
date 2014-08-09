/*jslint nomen: true */
/*global define */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
		define(['jquery', 'underscore'], factory);
    } else {
        root.GOOGAPI_SPREADSHEET = factory(root.$, root._);
    }
}(this, function ($, _) {
	'use strict';

	return {
		url: undefined,
		key: undefined,

		extend: function(args) {
			return _.extend({}, this, args);
		},

		sync: function(data, sheet) {
			throw new Error('Not implemented yet!');
		},

		sayHello: function(name) {
			var hello = 'Hello, ' + name + '! Nice to meet you!!';

			return hello;
		}
	};
}));
