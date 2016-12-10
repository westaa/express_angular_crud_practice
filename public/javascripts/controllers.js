app.controller('icecreamController', function($scope, $window, $location, icecreamService) {

  $scope.view = {};

  $scope.view.getData = icecreamService.all().then(function(data) {
    $scope.view.icecreams = data.data;
  })
})
