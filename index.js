
//Dependencies
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
//var mongojs = require('mongojs');
var mongoose = require('mongoose');

var Product = require('./productsSchema.js');


//Express
var app = express();

//Connections
var port = 9001;
//var db = mongojs('ecommerce', ['products']); /// this 'mongojs' is referring to the var mongojs we created on line 6
mongoose.connect('mongodb://localhost/products');



//Middleware
app.use(cors());
app.use(bodyParser.json());

//Serving the front-end
app.use(express.static('front-end')); ///this serves the static file called 'index.html' ...you can type "localhost:9001" to see the index.html on the DOM


//Endpoints
app.listen(port, function(){
	console.log('Now listening on port: ' + port);
});




////Mongoose Queries....


app.get('/api/products', function(req,res) {
    Product.find(req.query, function(err, response){
        if(err) {
          res.status(500).json(err)
        } else {
          res.json(response)
        }
      });
});

app.get('/api/products/:id', function(req,res) {
    Product.findById(req.params.id, function(err, response){
        if(err) {
          res.status(500).json(err)
        } else {
          res.json(response)
        }
      });
});

app.post('/api/products', function(req,res) {
    Product.create(req.body, function(error, response){
       if(error) {
         return res.status(500).json(error)
       } else {
         return res.json(response)
       }
     });
});

app.put('/api/products/:id', function(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, function(error, response){
      if(error) {
        return res.status(500).json(error)
      } else {
        return res.json(response)
      }
    });
});


app.delete('/api/products/:id', function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(error, response){
      if(error) {
        return res.status(500).json(error)
      } else {
        return res.json(response)
      }
    });
});



///****THIS WAS FOR MONGOJS***
//app.get('/api/products', function(req,res) {
//    var query = req.query;
//    db.products.find(query, function(err, response){
//        if(err) {
//            res.status(500).json(err);
//        } else {
//            res.json(response);
//        }
//    });
//});
//
//app.get('/api/products/:id', function(req,res) {
//    
//    
//    var idObj = {
//        _id: mongooose.ObjectId(req.params.id)
//    };
//    db.products.findOne(idObj, function(err, response){
//        if(err) {
//            res.status(500).json(err);
//        } else {
//            res.json(response);
//        }
//    });
//    
//});
//        
//app.post('/api/products', function(req,res) {
//     db.products.save(req.body, function(error, response){
//        if(error) {
//            return res.status(500).json(error);
//        } else {
//            return res.json(response);
//        }
//    });
//});
//
//
//app.put('/api/products/:id', function(req, res) {
//     if(!req.params.id){
//        return res.status(400).send('id query needed');
//    }
//    var query = {
//        _id: mongoose.ObjectId(req.params.id)
//    };
//    db.products.update(query, req.body, function(error, response){
//        if(error) {
//            return res.status(500).json(error);
//        } else {
//            return res.json(response);
//        }
//    });
//});
//
//app.delete('/api/products/:id', function(req, res) {
//     if(!req.params.id){
//        return res.status(400).send('id query needed');
//    }
//    var query = {
//        _id: mongoose.ObjectId(req.params.id)
//    };
//    db.products.remove(query, function(error, response){
//        if(error) {
//            return res.status(500).json(error);
//        } else {
//            return res.json(response);
//        }
//    });
//});





