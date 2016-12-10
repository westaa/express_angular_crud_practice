app.factory('icecreamService', function ($http, $location, $routeParams) {
  return {
    update: function (icecreamId) {
      return $http.post(icecreamId + '/edit')
    },
    all: function () {
      return $http.get('/api/icecreams');
    },
  }
})
