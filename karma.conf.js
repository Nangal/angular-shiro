module.exports = function(config) {
	config.set({
		basePath : '',
		frameworks : [ 'jasmine' ],

		preprocessors : {
			'src/directives/usernamePasswordForm.html' : [ 'ng-html2js' ]
		},

		ngHtml2JsPreprocessor : {
			moduleName : 'templates',
			stripPrefix : 'src/directives',
			prependPrefix : 'templates',
			moduleName : 'angularShiro.templates'
		},

		files : [ 'bower_components/jquery/dist/jquery.min.js',
				'bower_components/angular/angular.min.js',
				'bower_components/angular-mocks/angular-mocks.js',

				'src/services/config.js',
				'src/services/filters.js',
				'src/services/authenticate.js',
				'src/services/authorize.js',
				'src/services/session.js',
				'src/services/subject.js',

				'src/directives/*.html', 
				'src/directives/*.js',
				'src/directives/usernamePasswordForm.html',
				'src/angular-shiro.js',

				'test/services/sessionSpec.js'
				//'test/directives/*Spec.js' 
				],

		reporters : [ 'progress', 'junit', 'dots' ],
		junitReporter : {
			outputFile : 'build/test/results.xml'
		},
		browsers : [ 'Firefox' ],
		port : 9018,
		runnerPort : 9100,
		colors : true,
		logLevel : config.LOG_INFO,
		autoWatch : true,
		captureTimeout : 60000,
		singleRun : false
	});
};
