// a controller manages the app's data
// the property title is used to store a string, and attach it to $scope

app.controller('MainController', [
  '$scope', function($scope) {
    //any new properties attached to $scope will become available to use in view
    $scope.title = 'Top Sellers in Books';
    $scope.promo = 'life value';
    $scope.products =
        [
          {
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: 'img/the-book-of-trees.jpg',
            likes: 0,
          },
          {
            name: 'Program or be Programmed',
            price: 8,
            pubdate: new Date('2013', '08', '01'),
            cover: 'img/program-or-be-programmed.jpg',
            likes: 0,
          },
        ];

  }]);
