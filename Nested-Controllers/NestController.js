var NestModule = angular.module("NestModule",[]);
NestModule.controller("NestCtrl1",NestFunc1);
NestModule.controller("NestCtrl2",NestFunc2);


function NestFunc1(){
    
    this.testprop = "prop1";
}

function NestFunc2(){

    this.testprop = "prop2";

}