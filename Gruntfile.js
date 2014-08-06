'use strict';

module.exports = function(grunt) {
	require('jit-grunt')(grunt, {
		useminPrepare: 'grunt-useminPrepare'
	});

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
		, livereloadPort : 4000

		, jshint: {
			lib: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: [
					'app/js/**/*.js'
					, '!app/js/libs/**/*.js'
				]
			}
			, test: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: [
					'app/test/jasmine/**/*.js'
					, '!app/test/jasmine/lib/**/*.js'
				]
			}
		}
		, clean: {
			options: {
				force: true
			},
			build: {
				expand: true,
				cwd: 'build/',
				src: '**',
				flatten: false
			}
		}
		, requirejs: {
			compile: {
				options: {
					baseUrl: ".",
					mainConfigFile: "main.js",
					name: "main",
					out: "build/goog-api.min.js",
					preserveLicenseComments: false,

				    include: ["bower_components/almond/almond", "goog-api", "src/spreadsheet"]
				    // exclude: ["jquery", "underscore"]

					// , "wrap": {
					// 	"startFile": "wrap.start",
					// 	"endFile": "wrap.end"
					// }
				}
				// {
				//     "baseUrl": "../lib",
				//     "paths": {
				//         "principium": "../principium"
				//     },
				//     "include": ["../tools/almond", "principium"],
				//     "exclude": ["jquery", "underscore"],
				//     "out": "../dist/principium.js",
				//     "wrap": {
				//         "startFile": "wrap.start",
				//         "endFile": "wrap.end"
				//     }
				// }
			}
		}
		// , copy: {
		// 	dist: {
		// 		files: [
		// 			// chrome
		// 			{
		// 				src: 'app/js/chrome.js',
		// 				dest: 'dist/app/js/chrome.js'
		// 			},
		// 			{
		// 				src: 'manifest.json',
		// 				dest: 'dist/'
		// 			},
		// 			{
		// 				src: 'app/js/libs/bower/requirejs/require.js',
		// 				dest: 'dist/app/js/require.js'
		// 			},
		// 			{
		// 				expand: true,
		// 				cwd: 'app/js/libs/bower/bootstrap/fonts',
		// 				src: '**',
		// 				dest: 'dist/app/fonts',
		// 				flatten: false
		// 			},
		// 			{
		// 				expand: true,
		// 				cwd: 'app/img',
		// 				src: '**',
		// 				dest: 'dist/app/img',
		// 				flatten: false
		// 			},
		// 			{
		// 				expand: true,
		// 				cwd: 'app/data',
		// 				src: ['**/*.json', '!test/'],
		// 				dest: 'dist/app/data',
		// 				flatten: false
		// 			},
		// 			// FIXME use jquery-ui via bower instead!!!
		// 			{
		// 				expand: true,
		// 				cwd: 'app/css/jquery-ui/images',
		// 				src: ['**'],
		// 				dest: 'dist/app/css/images',
		// 				flatten: false
		// 			}
		// 		]
		// 	}
		// }
		// , exec: {
		// 	deploy_ffxos: {
		// 		cwd: '../ffxos',
		// 		cmd: 'git commit -am "Deploy JAMES version <%= pkg.version %>" && git push github gh-pages'
		// 	}			
		// }
		// , watch: {
		// 	templates: {
		// 		files: ['app/templates/**/*.tpl'],
		// 		tasks: ['handlebars']
		// 	}
		// }
	});

	grunt.registerTask('build', ['clean', 'copy', 'requirejs']);
	grunt.registerTask('dev', ['handlebars', 'watch']);
};
