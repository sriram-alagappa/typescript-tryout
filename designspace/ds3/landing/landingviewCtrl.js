var ds3;
(function (ds3) {
    var productlist;
    (function (productlist) {
        var LandingViewCtrl = (function () {
            function LandingViewCtrl() {
                this.title = "landing page";
                this.projects = [
                    {
                        "projectId": 1,
                        "projectName": "Thank you card",
                        "description": "make it now thanks you card2"
                    },
                    {
                        "projectId": 2,
                        "projectName": "Vinyl Thank you card",
                        "description": "Vinyl make it now thanks you card"
                    }
                ];
            }
            return LandingViewCtrl;
        })();
        angular
            .module('ds3')
            .controller('LandingViewCtrl', LandingViewCtrl);
    })(productlist = ds3.productlist || (ds3.productlist = {}));
})(ds3 || (ds3 = {}));
