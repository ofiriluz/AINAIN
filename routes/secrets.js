var express = require('express');
var fs = require('fs');
var router = express.Router();

DEFAULT_PASSPHRASE = 'YWdpbGJ6aW41MDAwQUE='

router.get('/passPhrase', function(req, res){
    res.json({PHRASE: DEFAULT_PASSPHRASE});
});

router.get('/solveThisToMaster1337', function(req, res){
    fs.readFile('assets/solve.jpeg', (err, img) => {
        if(err){
            res.send(err);
        }
        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Length': img.length
        });
        res.end(img);
    })
});

module.exports = router;