var express = require('express');
var router = express.Router();

DEFAULT_PASSPHRASE = 'YWdpbGJ6aW41MDAwQUE='

router.get('passPhrase', function(req, res){
    return res.json({PHRASE: DEFAULT_PASSPHRASE});
});