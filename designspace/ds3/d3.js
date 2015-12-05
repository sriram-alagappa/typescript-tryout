var ds3;
(function (ds3) {
    angular.module("ds3", ["ui.router"]);
    angular.module('ds3').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("home", { url: "/", templateUrl: "ds3/welcome/welcome-view.html" });
        $stateProvider.state("landing", { url: "/landing", templateUrl: "ds3/landing/landingview.html", controller: "LandingViewCtrl as vm" });
    });
})(ds3 || (ds3 = {}));
