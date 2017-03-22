var app = angular.module("angularForm");
app.controller("loginController", function($scope, $localStorage, $state, getDataFactory) {
    $scope.user={username:'',password:''}
    // if ($localStorage.token) {
    //      $state.go('createPoll');
    // }
    // else{
    $scope.login = function(data) {        
        url = '/login';       
        getDataFactory.getData(url).get(data).$promise
        .then(function(response) {
             if (response.error==0) {
                $localStorage.token=response.data._id;
                console.log(response)
                $scope.form.$setPristine();
                $scope.isChecked = false;
                $state.go('createPoll');
            }else{
                 $scope.alertLoginError = true;
                $scope.loginErrrMsg = response.data;
            }
        })
        }
    // }
    $scope.change = function() {
        $scope.alertLoginError = false;
    }
});
