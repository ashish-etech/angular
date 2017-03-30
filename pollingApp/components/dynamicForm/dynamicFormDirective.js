var app = angular.module('angularForm');

app.directive("dynamicForm",function(){
    return {
        restrict:"AE",
        replace: true,
        scope: {
        	form:'=',
            send: '&',
            alert: '&',
            spinner:'='
        },
        controller: function ($scope,$timeout) { 
        	// $scope.spinner= false;
            $scope.submit = function () {    
            $scope.spinner= true;     	
            	$scope.send({data:$scope.form.fields,spin:$scope.spinner});
            	$scope.myForm.$setPristine();
            	// $scope.spinner= false;
            };
            $scope.change=function(){
            	$scope.alert();
            }               
        },   
        templateUrl:'components/dynamicForm/dynamicFormTemplate.html',
    }
})
