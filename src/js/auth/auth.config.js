function AuthConfig($stateProvider, $httpProvider) {
  "ngInject";

  $stateProvider
    .state("app.login", {
      url: "/login",
      controller: "AuthCtrl as $ctrl",
      templateUrl: "auth/auth.html",
      title: "Sign in",
      resolve: {
        auth: function(User) {
          debugger;
          return User.ensureAuthIs(false);
        }
      }
    })
    .state("app.register", {
      url: "/register",
      controller: "AuthCtrl as $ctrl",
      templateUrl: "auth/auth.html",
      title: "Sign up",
      resolve: {
        auth: function(User) {
          //debugger;
          User.ensureAuthIs(false);
        }
      }
    });
}

export default AuthConfig;
