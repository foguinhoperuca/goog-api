require.config({
	urlArgs: 'cb=' + Math.random(),
	baseUrl: '../../',
	paths: {
		'jquery': 'bower_components/jquery/dist/jquery.min',
		'underscore': 'bower_components/underscore/underscore',

		'jasmine': 'bower_components/jasmine/lib/jasmine-core/jasmine'
		, 'jasmine-html': 'bower_components/jasmine/lib/jasmine-core/jasmine-html'
		, 'jasmine-boot': 'bower_components/jasmine/lib/jasmine-core/boot'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},

		'jasmine' : {
			exports: 'jasmineRequire'
		},
		'jasmine-html' : {
			deps: ['jasmine']
			, exports: 'jasmineRequire'
		},
		'jasmine-boot' : {
			deps: ['jasmine', 'jasmine-html'],
			exports: 'jasmineRequire'
		}
	}
});

require([
	'jasmine-boot'
], function(Jasmine) {
	require([
		'tests/jasmine/specs/spreadsheetSpec',
		'tests/jasmine/specs/GDAPISpec'
	], function() {
		window.onload();
	});
});
