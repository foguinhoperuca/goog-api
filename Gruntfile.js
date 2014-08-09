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
			spreadsheet: {
				options: {
					baseUrl: ".",
					paths: {
						'spreadsheet': 'src/spreadsheet'
						, 'jquery': 'bower_components/jquery/dist/jquery'
						, 'underscore': 'bower_components/underscore/underscore'
					},
					out: "build/spreadsheet.min.js",
					preserveLicenseComments: false,
				    include: ["spreadsheet"],
				    exclude: ["jquery", "underscore"]
					, optimize: 'uglify2'
					, generateSourceMaps: true
				}
			}
		}
		, copy: {
			bower: {
				files: [
					{
						src: 'build/spreadsheet.min.js',
						dest: 'dist/spreadsheet.min.js'
					},
					{
						src: 'build/spreadsheet.min.js.map',
						dest: 'dist/spreadsheet.min.js.map'
					}
				]
			},
			james: {
				files: [
					{
						src: 'build/spreadsheet.min.js',
						dest: '../james/app/js/libs/custom/spreadsheet.min.js'
					},
					{
						src: 'build/spreadsheet.min.js.map',
						dest: '../james/app/js/libs/custom/spreadsheet.min.js.map'
					}
				]
			}
		}
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
	grunt.registerTask('james', ['requirejs', 'copy:james']);
	grunt.registerTask('bower', ['requirejs', 'copy:bower']);
};
