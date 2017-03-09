var app = angular.module('windowApp', []);

app.controller('windowAppController', function($scope) {
    
});

app.directive('resize', function(){
    return function (scope){   
        restrict : 'A';     
        function resize (){
            scope.height = window.innerHeight;
            scope.width  = window.innerWidth;
        };
        window.onresize = function(){
            resize();
            scope.$digest();
        };
        resize();
    }
}); 