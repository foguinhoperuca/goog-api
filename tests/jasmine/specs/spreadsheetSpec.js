define([
	'src/spreadsheet'
], function (Spreadsheet) {
	'use strict';

	var spreadsheet = Spreadsheet.extend({key: '1O3k3wgYs_4uzl8Pjghq57Xygzj2DymRmR6cr269bAbg'});

	describe('Spreadsheet.', function() {
		it('Should say a personalized hello.', function() {
			expect('Hello, spreadsheet! Nice to meet you!!').toEqual(spreadsheet.sayHello('spreadsheet'));
		});

		describe('Push.', function() {
			var email;

			beforeEach(function(done) {
				spreadsheet.push(function(data) {
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
