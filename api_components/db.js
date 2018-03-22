// var mongo = require('mongodb').MongoClient

// var URL = 'mongodb://localhost:27017/s_erp_data';

// var mongoCon = mongo.connect(URL, function (err, db) {
//     if (err) return

//    db.collection('schools').find();

// })
// module.exports = function (callback) {

//     var MongoClient = require('mongodb').MongoClient;
//     var url = 'mongodb://localhost:27017/ShoppingCart';
//     MongoClient.connect(url, callback);
// }




var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/s_erp_data';
var connection = function(){
    MongoClient.connect(url, function(err, db){
        console.log(db); 
        
        if(!err){
            console.log('mongodb connected'); 
        }
      //  module.exports.db = db;
    });
};
module.exports = connection;

