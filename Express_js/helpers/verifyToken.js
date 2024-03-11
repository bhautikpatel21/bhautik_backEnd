const jwt = require('jsonwebtoken');
const User = require('../model/user2.model');

exports.verifyToken = async (req,res,next) => {
    const authorization = req.headers['authorization'];

    if(authorization === undefined) {
        return res.json({message: 'authorization not defined'});
    }

    let token = authorization.split(" ")[1];
    // console.log(token);
    if(token === undefined)
        return res.status(401).json({message: 'Unauthorize'});
    else {
        let {userId} = jwt.verify(token, 'Skillqode');
        // console.log(userId)
        let user = await User.findById(userId);
        console.log(user);

        if(user) {
            req.user = user;
            next();
        }
        else
        return res.status(401).json({message: 'Invalid user'});
    }
};