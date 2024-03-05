const User = require('../model/user2.model');

exports.addUser = async (req , res) =>  {
    try {
        const {firstName ,lastName, gender ,email, passworld,age } = req.body;
        console.log(req.body) 
        let newUser =   await User.create ({
            firstName,
            lastName,
            email,
            passworld,
            age,
            gender
        });
        newUser.save();
        res.status(201).json ({user : newUser, message : 'new User Added'});
    } catch (error)
      {
        console.log(error);
        res.status(500).json({Message : 'Internal Server Error'})
      }
}