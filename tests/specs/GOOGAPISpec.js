define([
	'../../../goog-api'
	, 'text!package.json'
], function (GOOGAPI, PackageJSON) {
	'use strict';

	describe('GOOGAPI.', function() {
		it('Should show the version.', function() {
			expect(JSON.parse(PackageJSON).version).toEqual(GOOGAPI.VERSION);
		});
	});
});
