var app=angular.module("AngularProject",[]);
app.controller("myController",function($scope,$http){
$http.get("views/httpservice.html").then(function(response){
    $scope.message=response.data;
})
})
app.controller("ServiceController",function($scope,$timeout){
    $timeout(function(){
        $scope.myTime="How are u?"},
        2000);
    })
           
        

    app.controller("myNgOptionCtrl",function($scope){
        $scope.cars=[
            {model : "Ford Mustang", color : "red"},
            {model : "Fiat 500", color : "white"},
            {model : "Volvo XC90", color : "black"}
        ]
    })
    app.controller("AnchorServiceCntrl",function($scope,$location,$anchorScroll){
        $scope.scroll=function(scrollto){
            $location.hash(scrollto);
            $anchorScroll();
        }
    })