const jwt = require('jsonwebtoken');
const User = require('../model/user2.model');

exports.verifyToken = async (req,res,next) => {
    const authorization = req.headers['authorization'];

    if(authorization === underfined) {
        return res.status(401).json({message: 'Unauthorize'});
    }
    else {
        let {userId} = jwt.verify(token, 'skillqode');
        console.log(user)
    }
}