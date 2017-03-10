var app = angular.module('windowApp', []);
app.controller('windowAppController', function($scope) {
    
});
app.directive('resize', function(){
    return directive={   
        restrict : 'A',     
        link: function ($scope){
            function resize(){
                $scope.height=window.innerHeight;
                $scope.width =window.innerWidth;
            }                
            window.onresize=function(){
                resize();
                $scope.$digest();
            }
            resize();
        }
    }    
}); 