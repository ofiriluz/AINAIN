var express = require('express');
var fs = require('fs');
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
    fs.readFile('assets/ascii_kir_tippus.png', (err, img) => {
        if(err){
            res.send(err);
        }
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': img.length
        });
        res.end(img);
    })
});

router.get('/doABarrelRoll', function(req, res) {
    res.render('assets/barrel_roll');
})

router.get('/yee', function(req, res){
    fs.readFile('assets/yee.mp4', (err, vid) => {
        if(err){
            res.send(err);
        }
        res.writeHead(200, {
            'Content-Type': 'video/mp4',
            'Content-Length': vid.length
        });
        res.end(vid);
    })
})

module.exports = router;
