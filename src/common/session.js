var jwt = require('jsonwebtoken');
var pubkey = require('fs').readFileSync(__dirname + '/../../key/jwtRS256.key.pub');

module.exports = function(req,res,next){
    let token = req.headers.authorization || req.headers['x-access-token'];
     //console.log(token);
     jwt.verify(token,pubkey,{algorithms:['RS256']},(err,decoded) => {
        if (err){
            res.status(401).json({success:false,message:'Failed to authenticate token.'});
        }else{
            req.user = decoded;
            console.log(decoded)
            next();
        }
    })
    next()
}