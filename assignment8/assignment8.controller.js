var app = angular.module("Assignment8", []);

// controller for service method
    app.controller("controller1", function($scope, $rootScope, dataService){
        $scope.change=function(data){
            dataService.setUpdate(data);
            $rootScope.$broadcast("SendDataDown");
        };
        $rootScope.$on("SendDataUp",function(){
            $scope.dataShowService=dataService.getUpdate();
        });
    });
    app.controller("controller2", function($scope, $rootScope, dataService){
        $rootScope.$on("SendDataDown",function(){
            $scope.dataShowService=dataService.getUpdate();
        });
        $scope.change=function(data){
            dataService.setUpdate(data);
            $rootScope.$emit("SendDataUp");
        };
    });

    app.service('dataService', function(){
        var output;
        this.setUpdate=function(newdata){
            output=newdata;
        };     
        this.getUpdate=function(){
            return output;
        };
    });
   

// controller for factory method

    app.controller("controller3", function($scope, $rootScope, dataFactory){
        $scope.change=function(data){
            dataFactory.setUpdate1(data);
            $rootScope.$broadcast("SendDataDown1");
        };
        $rootScope.$on("SendDataUp1",function(){
            $scope.dataShowFactory=dataFactory.getUpdate1();
        });
    });
    app.controller("controller4", function($scope, $rootScope, dataFactory){
        $rootScope.$on("SendDataDown1",function(){
            $scope.dataShowFactory=dataFactory.getUpdate1();
        });
        $scope.change=function(data){
            dataFactory.setUpdate1(data);
            $rootScope.$emit("SendDataUp1");
        };
    });

    app.factory('dataFactory', function(){
        var factory={
            setUpdate1:function(newdata){
               factory=newdata;
            },
            getUpdate1:function(){
                return factory;
            }
        };    
        return factory;
    });

