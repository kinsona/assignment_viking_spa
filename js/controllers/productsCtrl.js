vikingStore.controller('ProductsCtrl',
  ['$scope', 'productService', 'shoppingCart',
  function($scope, productService, shoppingCart) {

    $scope.products = productService.products;
    $scope.categories = productService.categories;


    $scope.filterOn = function(category_id) {
      $scope.categoryFilter = { category: { id: category_id } };
    };


    $scope.addItem = function(product){
      shoppingCart.addItem(product);
    };

}]);