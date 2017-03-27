var app = angular.module("angularForm");
app.controller("loginController", function($scope, $localStorage, $state, getDataFactory) {
    $scope.user={username:'',password:''};
    $scope.loadingLogin = false;
    
    $scope.login = function(data) {        
        url = '/login'; 
        $scope.loadingLogin=true;      
        getDataFactory.getData(url).get(data).$promise
        .then(function(response) {
            $scope.loadingLogin=false;
            if (response.error==0) {
                console.log(response.data.role)
                $localStorage.role= response.data.role;
                $scope.form.$setPristine();
                $state.go('menuTemplate.createPoll');
            }else{
                $scope.alertLoginError = true;
                $scope.loginErrrMsg = response.data;
            }
        })
    };
    
    $scope.change = function() {
        $scope.alertLoginError = false;
    };
});
