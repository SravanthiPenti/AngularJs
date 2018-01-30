'use strict';



var myapp = angular.module("angular1App", []);
myapp.controller("myController", function ($scope) {
    var technologies = [
        {name:"Java",like:0,dislike:0},
        {name:"JavaScript",like:0,dislike:0},
        {name:"AngularJs",like:0,dislike:0},
        {name:"Node",like:0,dislike:0}
    ]
    $scope.technologies=technologies;
    $scope.incrementLike=function(technology){
      technology.like++;
    }
    $scope.incrementDislike=function(technology){
      technology.dislike++;
    }
})
