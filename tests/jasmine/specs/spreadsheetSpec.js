define([
	'src/spreadsheet'
], function (Spreadsheet) {
	'use strict';

	describe('Spreadsheet.', function() {
		it('Should say a personalized hello.', function() {
			var spreadsheet = Spreadsheet.extend();
			expect('Hello, spreadsheet! Nice to meet you!!').toEqual(spreadsheet.sayHello('spreadsheet'));
		});
	});
});
