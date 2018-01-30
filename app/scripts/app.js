// 'use strict';



var myapp = angular.module("angular1App", []);
myapp.filter("gender",function(){
  return function(gender){
    switch(gender){
      case 1:
        return "Male";
      case 2:
        return "Female";
    }
  }
})
myapp.controller("myController", function ($scope) {
    var emp=[{firstname:"Ben",lastname:"Hasting",gender:1,salary:55000},
    {firstname:"Sara",lastname:"Paul",gender:2,salary:68000},
    {firstname:"Mark",lastname:"Holland",gender:1,salary:57000},
    {firstname:"Pam",lastname:"Macintosh",gender:2,salary:53500},
    {firstname:"Todd",lastname:"Barber",gender:1,salary:59500}]
    $scope.emp=emp;
    // $scope.rowlimit=2;
    // $scope.sortBy="firstname"
    // $scope.revertOrder=false;
    // $scope.sortData=function(column){
    //   $scope.sortBy=column;
    //   $scope.revertOrder=($scope.sortBy==column)?!$scope.revertOrder:false;
    // }
    // $scope.getSortOrder=function(column){
    //   if($scope.sortBy==column)
    //  {
    //    return $scope.revertOrder ? 'arrow-up' :'arrow-down';
    //  } 
    //  else{
    //    return ' ';
    //  }
    // }
    $scope.employeeView="views/table.html"
})
