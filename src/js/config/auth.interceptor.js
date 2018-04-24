function authInterceptor(JWT, AppConstants, $window, $q) {
  "ngInject";

  return {
    request: function(config) {
      //debugger;
      if (config.url.indexOf(AppConstants.api) === 0 && JWT.get()) {
          var requestPayload="Token " + JWT.get();
          console.log("ruchin: "+ requestPayload);
        config.headers.Authorization = requestPayload;
      }
      return config;
    },
    responseError: function(rejection) {
      if (rejection.status === 401) {
        JWT.destroy();
        console.log("401 received");
        //$window.location.reload();
      }
      return $q.reject(rejection);
    }
  };
}

export default authInterceptor;
