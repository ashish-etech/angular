var app=angular.module("angularForm");
app.run(function($rootScope, $location,$localStorage) {
    $rootScope.$on('$locationChangeStart', function () {
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        if (restrictedPage && $localStorage.id==null) {
            $location.path('/login');
        }
    });    
});