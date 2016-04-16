angular.module('ecommerce').controller('productsCtrl', function($scope, $timeout, productsService) {
    
    $scope.newProduct = {};
   
    function getAllProducts() {
        productsService.getAllProducts().then(function(products) {
            
            $scope.products = products;
            $scope.products.forEach(function(item, index) {
                item.edit = false;
            });
            
        });
    }
    
    getAllProducts();

    $scope.loading = false;
    
    $scope.addProduct = function() {
        $scope.loading = true; 
        $timeout(function(){          
            productsService.addProduct($scope.newProduct).then(function(newProduct) {   //the $scope.newProduct is from the adminTmpl.html
            $scope.newProduct.title = '';
            $scope.newProduct.description = '';
            $scope.newProduct.price = '';
            console.log('Response = ', newProduct);
            $scope.products.push(newProduct);
            $scope.loading = false;
            //getAllProducts();
        });
        }, 3000)
        
    };   
    
    $scope.editProduct = function() {
        console.log($scope.productToChange);
        productsService.editProduct($scope.productToChange).then(function(changedProduct) {
            getAllProducts();
        });
    };
    
    $scope.showEditing = function(product) {
        $scope.productToChange = {
            title: product.title,
            description: product.description,
            price: product.price,
            _id: product._id
        }
        product.edit = !product.edit;
    }
    
    $scope.showProductToDelete = function(product) {
         $scope.productToDelete = {
            title: product.title,
            description: product.description,
            price: product.price,
            _id: product._id
        }
        product.delete = !product.delete;
    }
    
    $scope.deleteProduct = function() {
        console.log($scope.productToDelete);
        productsService.deleteProduct($scope.productToDelete).then(function(deletedProduct) {
            getAllProducts();
        });
    };
    
});