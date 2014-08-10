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
		baseURL: 'http://spreadsheet.google.com/feeds/',
		feed: 'cells',
		key: undefined,
		worksheet: 'od6',
		visibility: 'public',
		projection: 'full',

		extend: function(args) {
			if (args.key == undefined)
				throw new Error('Must define key!!');

			return _.extend({}, this, args);
		},

		url: function() {
			return this.baseURL + this.feed + '/' + this.key + '/' + this.worksheet + '/' + this.visibility + '/' + this.projection;
		},

		push: function(callback) {
			var self = this;

			$.ajax({
				type: 'GET',
				async: false,
				url: self.url() + '?alt=json-in-script',
				jsonp: 'callback',
				dataType: "jsonp",
				contentType: "application/json",
				success: callback
			});
		}
	};
}));
