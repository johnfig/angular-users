app.controller('UserController', ['$scope',
function($scope) {
  $scope.name = 'John Fig';
  $scope.age  = '28';
  $scope.likes = 0;
  $scope.plusOne = function(index) {
    $scope.likes += 1;
  };
  $scope.users = [
                   {
                      name: 'John Fig',
                      age: 28
                   },
                   {
                      name: 'Demetria',
                      age: 27
                   }
                ];
}]);
