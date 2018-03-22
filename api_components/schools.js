var express = require('express');
var router = express.Router();
router.use(function (req, res, next) {
    // do logging
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); // make sure we go to the next routes and don't stop here
});
router.get('/data', function (req, res) {
    res.send("missionfailure");
})


module.exports = router;