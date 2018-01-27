// a controller manages the app's data
// the property title is used to store a string, and attach it to $scope

app.controller('MainController', [
  '$scope', function($scope) {
    $scope.title = 'Top Sellers in Books';
    $scope.promo = 'life value'
    $scope.product = {
      name: 'The book of trees'
      price: 19
    }

  }]);
//any new properties attached to $scope will become available to use in view
