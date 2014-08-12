define([
	'src/spreadsheet'
], function (Spreadsheet) {
	'use strict';

	var spreadsheet = Spreadsheet.extend({key: '1O3k3wgYs_4uzl8Pjghq57Xygzj2DymRmR6cr269bAbg'});

	describe('Spreadsheet.', function() {
		describe('Pull.', function() {
			var email;

			beforeEach(function(done) {
				spreadsheet.pull(function(data) {
					email = data.feed.author[0].email.$t;
					done();
				});
			});

			it('Should retrieve data from google spredsheet.', function() {
				expect('foguinho.peruca@gmail.com').toEqual(email);
			});
		});

		// describe('Push.', function() {
		// 	it('Should create new worksheet.', function() {
		// 		spreadsheet.push({entry: {id: 8, dia: 'TER'}});
		// 		expect(true).toEqual(true);
		// 	});
		// });
	});
});
