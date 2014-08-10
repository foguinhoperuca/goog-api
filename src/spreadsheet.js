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
		version: '3.0',
		baseUrl: 'http://spreadsheet.google.com/feeds/',
		feed: 'list',
		key: undefined,
		worksheet: 1,
		visibility: 'public',
		projection: 'full',

		extend: function(args) {
			if (args.key == undefined)
				throw new Error('Must define key!!');

			return _.extend({}, this, args);
		},

		url: function() {
			return this.baseURL + this.feed + this.key + this.worksheet + this.visibility + this.projection;
		},

		sync: function(data, worksheet) {
			throw new Error('Not implemented yet!');
		},

		sayHello: function(name) {
			var hello = 'Hello, ' + name + '! Nice to meet you!!';

			return hello;
		}
	};
}));
