'use strict';

module.exports = function(grunt) {
	require('jit-grunt')(grunt);

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
			'goog-api': {
				options: {
					baseUrl: ".",
					paths: {
						'goog-api': 'goog-api'
						, 'jquery': 'bower_components/jquery/dist/jquery'
						, 'underscore': 'bower_components/underscore/underscore'
					},
					out: "build/goog-api.min.js",
					preserveLicenseComments: false,
				    include: ["goog-api"],
				    exclude: ["jquery", "underscore"]
					, optimize: 'uglify2'
					, generateSourceMaps: true
				}
			},
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
						src: 'build/goog-api.min.js',
						dest: 'dist/goog-api.min.js'
					},
					{
						src: 'build/goog-api.min.js.map',
						dest: 'dist/goog-api.min.js.map'
					},
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
						src: 'build/goog-api.min.js',
						dest: '../james/app/js/libs/custom/goog-api.min.js'
					},
					{
						src: 'build/goog-api.min.js.map',
						dest: '../james/app/js/libs/custom/goog-api.min.js.map'
					},
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
	});

	grunt.registerTask('build', ['clean', 'copy', 'requirejs']);
	grunt.registerTask('james', ['requirejs', 'copy:james']);
	grunt.registerTask('bower', ['requirejs', 'copy:bower']);
};
