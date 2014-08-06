define([
	'spreadsheet'
], function (Spreadsheet) {
	'use strict';

	describe('Spreadsheet.', function() {
		it('Should say a personalized hello.', function() {
			var spreadsheet = new Spreadsheet();
			expect('Hello, GDAPI! Nice to meet you!!').toEqual(spreadsheet.sayHello('GDAPI'));
		});
	});
});
