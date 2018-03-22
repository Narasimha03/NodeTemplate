var db = require('./db');


var Task = {
    getAllTasks: function(callback) {
    db.open(function (err, db) {
        if(!err) {
            db.collection("schools", function(err, collection) {
                collection.findOne(
                    {
                        "username": user,
                        "password": pass
                    },
                    function(err, item) {
                        if(!err) {
                            callback(null,item);
                        } else {
                            callback("error");
                        }
                    }
                );
            });
        } else {
            callback("error",null);
        }
    });
}
};

//var connection = require('./db');
// var mongo = require('mongodb').MongoClient;

// var url = 'mongodb://localhost:27017/s_erp_data';

// var Task = {
    
//         getAllTasks: function (callback) {
    
//           //  return db.query("select * from positions, devices where positions.id=devices.positionid order by devices.id asc", callback);
//           return  con.collection('schools').find({}, function(err, cursor){
//                 cursor.toArray();
//                 con.close();
//             },callback);
//         },
//     }

// var Task = {
//     getAllTasks: con(function (callback) {

//     })
// }

// var Task = {



//     getAllTasks: con(function (err, db) {
//         console.log("hhh"+db);
        
//         db.collection('schools').find({}, function (err, result) {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             else {
//                 return result;
//             }
//             //Close connection
//         });
//     })
// };
module.exports = Task;