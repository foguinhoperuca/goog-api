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
		sayHello: function(name) {
			var hello = 'Hello, ' + name + '! Nice to meet you!!';

			return hello;
		}
	};
}));
