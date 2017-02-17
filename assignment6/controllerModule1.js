// implementation using $rootscope
var app=angular.module("assignment6",[]);

// controller for left div using $rootScope
    app.controller("assign6Controller1", function($scope, $rootScope){
        $rootScope.obj={value1:''};
    });

    app.controller("assign6Controller2", function($scope, $rootScope){
        $rootScope.obj={value1:''};
    });


// controller for right div $scope $broadcast $emit
    app.controller("assign6Controller3", function($scope, $rootScope){
        // send data down
        $scope.change2=function(evt){
            $scope.$broadcast("SendDataDown",$scope.obj.value3)
        };
        $scope.$on("SendDataUP", function(evt, data){
            $scope.obj.value3=data;
        });
    });

    app.controller("assign6Controller4", function($scope, $rootScope){
        // event handler
        $scope.$on("SendDataDown", function(evt, data){
            $scope.obj.value4=data;
        });
        $scope.change2=function(evt){
            $scope.$emit("SendDataUP",$scope.obj.value4);
        };
    });