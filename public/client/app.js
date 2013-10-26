angular.module('shortlyApp',[])
.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeCtrl',
    templateUrl: "templates/home.html"
  })
  .when('/create', {
    controller: 'CreateCtrl',
    templateUrl: 'templates/create.html'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.controller('CreateCtrl', function($scope, $http) {
  $scope.postit = function(input) {
    var data = {};
    data['url'] = input;

    $http({
      url: '/links',
      method: "POST",
      data: JSON.stringify(data),
      headers: {'Content-Type': 'application'}
    });
  }
})
.controller('HomeCtrl', function($scope, $http) {
  $http.get('/links')
  .success(function(data, status, headers, config) {
    $scope.links = data;
  }).error(function(data, status) {
  });
})