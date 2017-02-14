
var app = angular.module("productForm", []);
app.controller("ctrl", function($scope) {
    $scope.index=0;
    $scope.total=0.00;
    $scope.data=[];
    $scope.realName=[	{"value":500,"id":"0","name":"Tutorials Development"},
                        {"value":300,"id":"1","name":"Tutorials Design"},
                        {"value":250,"id":"2","name":"Code Integration"},
                        {"value":220,"id":"3","name":"Training"}
                    ];
    $scope.myFunc= function(value,id) {
        if($scope.data[id]!=value) {
            $scope.data[id]=value;
            $scope.total=$scope.total+value;
        }
        else{
            $scope.total=$scope.total-value;
            $scope.data[id]=null;
        }
    }
});