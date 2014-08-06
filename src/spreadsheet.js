/*jslint nomen: true */
/*global define */

define([
	'underscore'
	, 'jquery'
], function (_, $) {
    'use strict';

	var spreadsheet = function () {
		this.sayHello = function(name) {
			var hello = 'Hello, ' + name + '! Nice to meet you!!';

			return hello;
		};

        return this;
    };

	return spreadsheet;
});
