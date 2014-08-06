require.config({
	baseUrl: '.',
	paths: {
		'underscore': 'bower_components/underscore/underscore',
		'jquery': 'bower_components/jquery/dist/jquery.min'

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
