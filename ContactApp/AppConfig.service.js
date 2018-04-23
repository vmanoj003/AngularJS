 
(function(){
var myModule = angular.module("myModule");
myModule.factory("AppServiceSvc",function ServiceDataFunc(AppValueSvc){


    this.name = AppValueSvc;
    this.author = "Manojkumar Velama";
    this.company = "My Company";
    this.created =  new Date().toDateString();
    this.versionversion = 1;
  
});
})();
