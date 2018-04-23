var module = angular.module("myModule",[]);
module.controller("MyCtrl",DateApi);

function DateApi($scope){

    $scope.UpdateTime = function(){

        $scope.userName = '';
        $scope.currentdate = new Date();

        $scope.datetime = $scope.currentdate.getDate()+"/"+$scope.currentdate.getMonth()+"/"+$scope.currentdate.getFullYear()+" " +$scope.currentdate.toTimeString();


    }
}