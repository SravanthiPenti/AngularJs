// 'use strict';



var myapp = angular.module("angular1App", []);
myapp.controller("myController", function ($scope) {
    var emp=[{firstname:"Ben",lastname:"Hasting",gender:"Male",salary:55000},
    {firstname:"Sara",lastname:"Paul",gender:"Female",salary:68000},
    {firstname:"Mark",lastname:"Holland",gender:"Male",salary:57000},
    {firstname:"Pam",lastname:"Macintosh",gender:"Female",salary:53500},
    {firstname:"Todd",lastname:"Barber",gender:"Male",salary:59500}]
    $scope.emp=emp;
    // $scope.rowlimit=2;
    $scope.sortBy="firstname"
    $scope.revertOrder=false;
    $scope.sortData=function(column){
      $scope.sortBy=column;
      $scope.revertOrder=($scope.sortBy==column)?!$scope.revertOrder:false;
    }
    $scope.getSortOrder=function(column){
      if($scope.sortBy==column)
     {
       return $scope.revertOrder ? 'arrow-up' :'arrow-down';
     } 
     else{
       return ' ';
     }
    }
})
