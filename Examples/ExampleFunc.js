var ExampleModule = angular.module("ExampleModule",[]);
ExampleModule.controller("ExCtrl",InputFunc);

function InputFunc($scope){

   $scope.onchange = function(){

        console.log("your name is changed");
    }


    
}