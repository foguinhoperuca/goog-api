define([
	'../../../google-docs-api'
], function (GDAPI) {
	'use strict';

	describe('GDAPI.', function() {
		it('Should say a personalized hello (SPREADSHEET).', function() {
			expect('Hello, GDAPI! Nice to meet you!!').toEqual(GDAPI.spreadsheet.sayHello('GDAPI'));
		});
	});
});
