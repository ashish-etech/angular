var app = angular.module("angularForm");
app.controller("templateController", function($scope,$location){

    $scope.hideMenu=true;
    
    if ($scope.sidebar) {
        $scope.count=0;
    }else{
        $scope.count=1;
    };

    $scope.toggleNav=function() {
        $scope.count++;
        if ($scope.count%2==0) {
            $scope.sidebar=true;
        }
        else{
            $scope.sidebar=false;
        }
    };

    $scope.isActive = function (viewLocation) { 
        var Active = (viewLocation === $location.path());
        return Active;
    };

    // sidebar ng-show
    window.onresize=function(){
        $scope.change();
        $scope.$digest();
    };
    $scope.change=function(){
        if (window.innerWidth<=998) {
            console.log(window.innerWidth)
            $scope.sidebar=false;
        }
        else{
            $scope.sidebar=true;
        }
    };

    $scope.change();
});
