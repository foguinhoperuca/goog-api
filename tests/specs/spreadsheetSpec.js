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
					console.log('test');
					console.log(data.feed.author[0].email.$t);

					email = data.feed.author[0].email.$t;

					done();
				});
			});

			it('Should retrieve data from google spredsheet.', function() {
				expect('foguinho.peruca@gmail.com').toEqual(email);
			});
		});
	});
});