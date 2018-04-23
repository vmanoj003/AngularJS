var myModule = angular.module("myModule",[])

myModule.controller("NestCtrl1",NestFunc1);
 


function NestFunc1(){
    
    this.list = [{name:"manoj",age:23},{name:"kumar",age:24},{name:"velama",age:25}];
}