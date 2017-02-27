var app=angular.module('angularForm');  
app.factory('dataFactory', function($http){
    var factory={
        addData:function(newdata){
           $http.post('http://192.168.1.113:3015/user/register', newdata);
           console.log("data inserteed successfuly");
        }        
    };    
    return factory;
});