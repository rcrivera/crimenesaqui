// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-route
//= require angular-resource
//= require_self
//= require_tree ./services
//= require_tree ./filters
//= require_tree ./controllers
//= require_tree ./directives
//= require bootstrap.min.js
//= require typeahead.bundle.min.js
//= require leaflet.js
//= require L.Control.Sidebar.js
//= require main.js

var ngApp = angular.module('CrimenesAqui', ['ngRoute']);

ngApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'assets/index.html',
		controller: 'IndexController'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);

ngApp.config([
  "$httpProvider", function(provider) {
    return provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);