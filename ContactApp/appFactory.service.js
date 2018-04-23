
(function(){
var myModule = angular.module("myModule");
function FactoryDataFunc(AppValueSvc){

    var value = {};
  
      value.name = AppValueSvc;
      value.author = "Manojkumar Velama";
      value.company = "My Company";
      value.created =  new Date().toDateString();
      value.versionversion = 1;
    
  
    return value;
  }
  myModule.factory("AppFactorySvc", FactoryDataFunc);

})();