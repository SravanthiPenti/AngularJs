var myapp=angular.module("uiRouter",["ui.router"])
        .config(function($stateProvider){
            $stateProvider
                .state("home",{
                    url:"/home",
                    templateUrl:"RouteTemplate/home.html",
                    controller:"homeController",
                    controllerAs:"homeCntrl"
                })
                .state("table",{
                    url:"/table",
                    templateUrl:"RouteTemplate/table.html",
                    controller:"tableController",
                    controllerAs:"tableCntrl"
                })
                .state("list",{
                    url:"/list",
                    templateUrl:"RouteTemplate/list.html",
                    controller:"tableController",
                    controllerAs:"tableCntrl"

                })
        })
        .controller("homeController",function(){
            this.message="Welcome"
        })
        .controller("tableController",function(){
            var emp=[
                {firstname:"Ben",lastname:"Hasting",gender:1,salary:55000},
                    {firstname:"Sara",lastname:"Paul",gender:2,salary:68000},
                    {firstname:"Mark",lastname:"Holland",gender:1,salary:57000},
                    {firstname:"Pam",lastname:"Macintosh",gender:2,salary:53500},
                    {firstname:"Todd",lastname:"Barber",gender:1,salary:59500}
            ]
            this.emp=emp;
        })