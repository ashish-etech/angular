var app = angular.module("angularForm", []);
app.controller('angularFormController',function($scope, $http, $interval, dataFactory) {
    $scope.Obj = {'alertSuccess':false, 'validationFailed':false,'alertPass':false};
// sending data to database
    $scope.submitForm = function(isValid) {
        if (isValid) {
            $scope.Obj.alertSuccess=true; 
            dataFactory.addData($scope.Obj);//call to factory method
            $scope.Obj={}; 
            $scope.userForm.$setPristine();  
        }
        else{
            $scope.Obj.validationFailed = true;
        }
    };
    $scope.Onchange=function(){
        $scope.Obj.alertSuccess = false;
        $scope.Obj.validationFailed = false;
    };
});