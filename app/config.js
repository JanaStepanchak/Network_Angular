app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        templateUrl: "app/templates/home.html"
        , controller: "homeCtrl"
        , controllerAs: "home" 
    }).when("/", {
        templateUrl: "app/templates/login.html"
       , controller: "loginCtrl"
        , controllerAs: "log"
    }).when("/regester", {
        templateUrl: "app/templates/regester.html"
        , controller: "regesterCtrl"
        , controllerAs: "reg"
    })
})