define([
	'../../../goog-api'
], function (GOOGAPI) {
	'use strict';

	describe('GOOGAPI.', function() {
		it('Should say a personalized hello (SPREADSHEET).', function() {
			expect('Hello, GOOGAPI! Nice to meet you!!').toEqual(GOOGAPI.spreadsheet.sayHello('GOOGAPI'));
		});
	});
});
