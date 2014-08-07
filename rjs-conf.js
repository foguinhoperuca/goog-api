require.config({
	baseUrl: '.',
	paths: {
		'underscore': 'bower_components/underscore/underscore',
		'jquery': 'bower_components/jquery/dist/jquery.min'
		
		, 'goog-api': 'goog-api'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		}
	}
});
