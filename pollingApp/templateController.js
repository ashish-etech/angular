var app = angular.module("angularForm");
app.controller("templateController", function($scope){
$scope.sidebar=true;
$scope.hideMenu=true;

    $scope.openNav=function() {
        $scope.sidebar=true;
        $scope.hideMenu=true;
    };

    $scope.closeNav=function(){
        $scope.hideMenu=false;
        $scope.sidebar=false;
    };
});

