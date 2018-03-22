var schools = require("./api_components/schools.js");
var apilist = require("./api_components/apilist.js");
Book =require('./models/book');

var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 4005;
var app = express();
var server = require('http').createServer(app);
const io = require('socket.io')(server);

var router = express.Router();
app.use(function (req, res, next) {
    // do logging
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); // make sure we go to the next routes and don't stop here
});

//var mongo = require('mongodb').MongoClient;
//const mongoose = require('mongoose');
const mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/s_erp_data');
var db = mongoose.connection;


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: false, parameterLimit: 10000 }));


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
io.on('connection', function(client) {  
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
        client.emit('messages', 'Hello from server');
    });
})


server.listen(port, function () {
    
    console.log('Express server listening on port ' + port);
    var a='23';
    var b='89';
    c=(a-0)+(b-0)
   //var c= typeof(a-1)
   console.log(c);
   

});

// app.get('/api/books', (req, res) => {
// 	Book.getBooks((err, books) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(books);
// 	});
// });
// app.post('/api/books', (req, res) => {
// 	var book = req.body;
// 	Book.addBook(book, (err, book) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(book);
// 	});
// });





app.use('/api', schools);
app.use('/api',apilist);
