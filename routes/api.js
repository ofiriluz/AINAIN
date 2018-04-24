var express = require('express');
var fs = require('fs');
var router = express.Router();

MIN_J=1
MAX_J=4
DEFAULT_RIDDLE = {HKEY: "AgilBzin", PATH: "Desktop/russia.exe"}
CURR_FIRE_TIME_SECONDS = null;
TIME_DIFF_SECONDS = 300

router.get('/riddleMeThis', function(req, res) {
    res.json(DEFAULT_RIDDLE);    
});
    
router.get('/fireItUp', function(req, res) {
    const now = parseInt(new Date().getTime() / 1000);
    const left = now - CURR_FIRE_TIME_SECONDS
    if(CURR_FIRE_TIME_SECONDS === null || left >= TIME_DIFF_SECONDS) {
        CURR_FIRE_TIME_SECONDS = now;
        const j_num = parseInt(Math.random() * (MAX_J - MIN_J + 1) + MIN_J);
        console.log('Fire It up = ' + j_num);
        res.json({SMOKE: j_num});
    }
    else {
        res.json({MESSAGE: 'You can only request this once every 5 minutes, time remaining: ' + (TIME_DIFF_SECONDS - left) + 's'});
    }
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
