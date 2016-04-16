angular.module('ecommerce').service('productsService', function($http) {
    
///the service talks to the back-end    
    
    this.getAllProducts = function() {
        return $http.get('http://localhost:9001/api/products').then(function(response) {
            return response.data                  
        })
    };
    
    
    this.addProduct = function(newProduct){
        return $http.post('http://localhost:9001/api/products', newProduct).then(function(response) {
            return response.data
        })
    };
    
    this.editProduct = function(productToChange) {
        return $http.put('http://localhost:9001/api/products/' + productToChange._id, productToChange).then(function(response) {
            return response.data
        }) 
    };
    
    this.deleteProduct = function(productToDelete) {
        return $http.delete('http://localhost:9001/api/products/' + productToDelete._id).then(function(response) {
            return response.data
        }) 
    };

     
});