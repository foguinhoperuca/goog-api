define([
	'../../../goog-api'
], function (GOOGAPI) {
	'use strict';

	describe('GOOGAPI.', function() {
		it('Should say a personalized hello (SPREADSHEET).', function() {
			var spreadsheet = GOOGAPI.Spreadsheet.extend();
			expect('Hello, GOOGAPI! Nice to meet you!!').toEqual(spreadsheet.sayHello('GOOGAPI'));
		});
	});
});
