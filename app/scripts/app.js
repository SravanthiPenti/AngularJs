'use strict';



var myapp = angular.module("angular1App", []);
myapp.controller("myController", function ($scope) {
    // var emp=[
    // {firstname:"Ben",lastname:"Hasting",gender:"Male",salary:55000},
    // {firstname:"Sara",lastname:"Paul",gender:"Female",salary:68000},
    // {firstname:"Mark",lastname:"Holland",gender:"Male",salary:57000},
    // {firstname:"Pam",lastname:"Macintosh",gender:"Female",salary:53500},
    // {firstname:"Todd",lastname:"Barber",gender:"Male",salary:59500},
    // ]
    // $scope.emp=emp

    var states = [

        {
            name: "Telangana",

            dist: [
                { name: "Karimnagar" },
                { name: "Hyderabad" },
                { name: "Warangal" }]
        },
        {
            name: "Andhra Pradesh",

            dist: [
                { name: "West Godavari" },
                { name: "Kurnool" },
                { name: "East Godavari" }

            ]


        }


    ]

    $scope.states = states;
})
