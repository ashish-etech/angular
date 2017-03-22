var app = angular.module("angularForm", ['ui.router', 'ngStorage', 'angularUtils.directives.dirPagination', 'ngResource']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'components/registration/registrationForm.html',
            controller: 'registrationController',
        })
        .state('login', {
            url: '/login',
            templateUrl: 'components/login/loginForm.html',
            controller: 'loginController',
        })
        .state('createPoll', {
            url: '/createPoll',
            templateUrl: 'components/createPoll/createPoll.html',
            controller: 'createPollController',
        })
        .state('viewPoll', {
            url: '/viewPoll',
            templateUrl: 'components/viewPoll/viewPoll.html',
            controller: 'viewPollController',
        })
        .state('takePoll', {
            url: '/takePoll',
            templateUrl: 'components/takePoll/takePoll.html',
            controller: 'takePollController',
        })
})
