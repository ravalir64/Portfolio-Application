

dashboard.controller("SkillController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.skills = {};

    //development stack
    vm.skills.development = [
        {
            Software: "Mongo DB",
            Percentage: "50",
            theme: "yellow",
            image: "mongodb"
        },
        {
            Software: "Express JS",
            Percentage: "45",
            theme: "aqua",
            image: "express"
        },
        {
            Software: "Angular JS",
            Percentage: "85",
            theme: "green",
            image: "angular"
        },
        {
            Software: "Node JS",
            Percentage: "50",
            theme: "purple",
            image: "node"
        },
        {
            Software: "Javascript",
            Percentage: "80",
            theme: "maroon",
            image: "javascript"
        },
        {
            Software: "Type Script",
            Percentage: "40",
            theme: "teal",
            image: "typescript"
        },
        {
            Software: "jQuery & AJAX",
            Percentage: "60",
            theme: "yellow",
            image: "jquery"
        }
        
    ];

    //Design Stack
    vm.skills.design = [
        {
            Software: "HTML 5",
            Percentage: "90",
            theme: "yellow",
            image: "html5"
        },
        {
            Software: "CSS 3",
            Percentage: "83",
            theme: "aqua",
            image: "css3"
        },
        {
            Software: "SAAS",
            Percentage: "50",
            theme: "green",
            image: "saas-css"
        },
        {
            Software: "Bootstrap",
            Percentage: "85",
            theme: "purple",
            image: "bootstrap"
        },
        {
            Software: "Photo Shop",
            Percentage: "50",
            theme: "maroon",
            image: "Photoshop"
        }
        
    ];

    //Other Stack
    vm.skills.others = [
        {
            Software: "Java",
            Percentage: "60",
            theme: "aqua",
            image: "java",
        },
        {
            Software: "SQL",
            Percentage: "70",
            theme: "purple",
            image: "sql"
        },
        {
            Software: "Hardware",
            Percentage: "67",
            theme: "maroon",
            image: "hardware"
        }
        
    ];
}]);

