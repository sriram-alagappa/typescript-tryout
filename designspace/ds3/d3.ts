module ds3{
	angular.module("ds3",["ui.router"]);
	
	angular.module('ds3').config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("/landing");
		$stateProvider.state("landing",{url:"/landing",templateUrl:"ds3/landing/landingview.html",controller:"LandingViewCtrl as vm"})
	});
	
}
