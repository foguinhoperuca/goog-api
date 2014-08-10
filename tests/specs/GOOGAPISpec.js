define([
	'../../../goog-api'
], function (GOOGAPI) {
	'use strict';

	describe('GOOGAPI.', function() {
		it('Should show the version.', function() {
			expect('0.0.6').toEqual(GOOGAPI.VERSION);
		});
	});
});
