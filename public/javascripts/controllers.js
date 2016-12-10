app.controller('icecreamController', function($scope, $window, $location, $http, icecreamService, $routeParams) {

  $scope.view = {};
  $scope.view.oneIcecream = [];

  $scope.view.getData = icecreamService.all().then(function(data) {
    $scope.view.icecreams = data.data;
  });
  $scope.view.edit = icecreamService.one().then(function(data) {
    $scope.view.oneIcecream.push(data.data)
    });

  $scope.view.update = function (icecream) {
    var icecreamId = icecream._id;
    return $http({
      method: 'post',
      url: '/api/icecreams/' + icecreamId,
      data: icecream
    }).then(function() {
      $location.path('/')
    })
  }

})
