

dashboard.controller("WebsitesController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.websites = [
        
        {
            title: "Palamalai Temple Site",
            image: "palamalai",
            link: "http://palamalairanganathar.org"
        },
       
        
        {
            title: "The Chennai Opticals",
            image: "chennaiopticals",
            link: "http://thechennaiopticals.com"
        },
       
        {
            title: "Garments Today",
            image: "garment",
            link: "http://garmenttoday.in"
        }
    ];
    console.log("coming to Websites controller");

}]);

