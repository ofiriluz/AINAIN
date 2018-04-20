var express = require('express');
var router = express.Router();

DEFAULT_USERNAME = "hutch";
DEFAULT_PASSWORD = "agilbzin5000AA";

router.post('/login', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    
    if(username !== null && 
        password !== null &&
        username === DEFAULT_USERNAME &&
        password === DEFAULT_PASSWORD) {
            res.json({result: "SUCCESS"});
    }

    res.json({result: "FAILURE"});
});

module.exports = router;