var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var schema = new Schema({
      title       : {type: String, unique: true, required: true, index: true}
    , description : {type: String, required: true}
    , price       : {type: Number, required: true, min: 0}
})

module.exports = mongoose.model('products', schema);


//questions.....where am I naming my database? where am I naming the collection?