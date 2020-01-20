const express = require('express');
const router = express.Router();
var sessionMW = require('./../common/session');
const jwt = require('jsonwebtoken');
var sessionMW = require('./../common/session');
var cert = require('fs').readFileSync(__dirname + '/../../key/jwtRS256.key');

router.get('/', function(req, res) {
    res.send('Hello, World! PM2 auto pull from git when it\'s change.11' + process.env.NODE_ENV);
})

router.get('/users', function(req, res) {
    res.send('Hello users!');
})

// specifix middleware
router.post('/login', sessionMW);
router.post('/create-user', function(req, res) {
    let user = {
        'username': 'dangvanduc90',
        'email': 'dangvanduc0@gmail.com',
    }
    var token = jwt.sign(user, cert, { algorithm: 'RS256' });
    res.send(token);
});
router.post('/', function(req, res) {
    res.send('Hello, Post Method!');
});
router.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

module.exports = router