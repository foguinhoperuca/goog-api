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

		url: function(feed) {
			var url;

			switch (feed) {
			case 'worksheets':
				url = this.baseURL + this.feed + '/' + this.key + '/' + this.visibility + '/' + this.projection;
				break;
			default:
				url = this.baseURL + this.feed + '/' + this.key + '/' + this.worksheet + '/' + this.visibility + '/' + this.projection;
			}

			return url;
		},

		pull: function(callback) {
			var self = this;

			self.feed = 'cells';
			$.ajax({
				type: 'GET',
				async: false,
				url: self.url('cells') + '?alt=json-in-script',
				jsonp: 'callback',
				dataType: "jsonp",
				contentType: "application/json",
				success: callback
			});
		},

		// TODO implement push data back to google spreadsheet.
		// It's hard to use google spreadsheat api. See another solution
		push: function(data) {
			var self = this;
			self.feed = 'list';

			$.ajax({
				type: 'GET',
				async: false,
				url: this.url(),
				success: function(data) {
					console.log('Send data to google api!!');
					console.log(data);
				}
			});
		}
	};
}));
