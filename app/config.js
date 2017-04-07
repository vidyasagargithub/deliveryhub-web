app.config(["$stateProvider","$urlRouterProvider", function($stateProvider,$urlRouterProvider){
   $stateProvider
   .state("home", {
       url:"/",
       templateUrl:"app/views/home/home.html"
   })
   
   /*.state("auth",{
       url:"",
       templateUrl:"app/views/auth/index.html"
   })
   .state("auth.register",{
       url:"/register",
       templateUrl:"app/views/auth/register.html",
       controller:"registerCtrl"
   })
   .state("auth.login",{
       url:"/login",
       templateUrl:"app/views/auth/login.html",
       controller:"loginCtrl"
   })*/
   $urlRouterProvider.otherwise("/");
}]);