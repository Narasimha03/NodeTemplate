var express = require('express');
var router = express.Router();
var Task = require('./testdb');
Book = require('../models/book');



router.get('/books', (req, res) => {
	Book.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});
router.post('/books', (req, res) => {
	var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});


router.get('/get_all_tracking', function (req, res, next) {


    Task.getAllTasks(function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }


    });
});


// router.post('/', function (req, res, next) {

//     Task.addTask(req.body, function (err, count) {

//         //console.log(req.body);
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(req.body);//or return count for 1 & 0
//         }
//     });
// });


// router.post('/devicecode', function (req, res, next) {

//         Task.postSingleDevice(req.body, function (err, count) {

//             //console.log(req.body);
//             if (err) {
//                 res.json(err);
//             }
//             else {
//                 res.json(req.body);//or return count for 1 & 0
//             }
//         });
//     });



// router.post('/:id', function (req, res, next) {

//     Task.deleteAll(req.body.id, function (err, count) {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(count);
//         }
//     });
// });
// router.delete('/:id', function (req, res, next) {

//     Task.deleteTask(req.params.id, function (err, count) {

//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(count);
//         }

//     });
// });
// router.put('/:id', function (req, res, next) {

//     Task.updateTask(req.params.id, req.body, function (err, rows) {

//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
//     });
// });
module.exports = router;