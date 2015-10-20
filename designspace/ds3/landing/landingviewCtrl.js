var LandingViewCtrl = (function () {
    function LandingViewCtrl() {
        this.title = "landing page";
        this.projects = [
            {
                "projectId": 1,
                "projectName": "Thank you card",
                "description": "make it now thanks you card"
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
