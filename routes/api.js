var express = require('express');
var router = express.Router();

MIN_J=1
MAX_J=5
DEFAULT_RIDDLE = {KEY: "KEY_BA_ZIN", PATH: "C:\\users\\Administrator\\Desktop\\magic.pyc"}

router.get('/riddleMeThis', function(req, res) {
    return res.json(DEFAULT_RIDDLE);    
});
    
router.get('/fireItUp', function(req, res) {    
    var j_num = Math.random() * (MAX_J - MIN_J) + MIN_J;
    return res.json({count: j_num});
});

router.get('/climbMe', function(req, res) {
    // TODO
});

module.exports = router;
