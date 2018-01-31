var app=angular.module("RouteDemo",["ngRoute"])
                .config(function($routeProvider,$locationProvider){
                    $routeProvider
                            .when("/home",{
                                templateUrl:"RouteTemplate/home.html",
                                controller:("homeController")
                            })
                            .when("/table",{

                                templateUrl:"RouteTemplate/table.html",
                                controller:("tableController")
                            })
                            .when("/list",{
                                templateUrl:"RouteTemplate/list.html",
                                controller:("tableController")
                            })

                            .when("/table/:firstname",{
                                templateUrl:"RouteTemplate/empDetails.html",
                                controller:("empDetails")
                            })

                            .otherwise({
                                redirectTo:"/home"
                            })
                            $locationProvider.html5Mode(true);
                })
                .controller("homeController",function($scope){
                    console.log("Inside home");
                    $scope.msg="Welcome";
                })
                .controller("tableController",function($scope){
                    var emp=[{firstname:"Ben",lastname:"Hasting",gender:1,salary:55000},
                    {firstname:"Sara",lastname:"Paul",gender:2,salary:68000},
                    {firstname:"Mark",lastname:"Holland",gender:1,salary:57000},
                    {firstname:"Pam",lastname:"Macintosh",gender:2,salary:53500},
                    {firstname:"Todd",lastname:"Barber",gender:1,salary:59500}]
                    $scope.emp=emp;
                })
                .controller("empDetails",function($scope,$route,$routeParams){
                    var param=$route.current.params.firstname;
                    $scope.employee=param;
                })