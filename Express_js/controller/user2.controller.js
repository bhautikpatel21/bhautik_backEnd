const User = require('../model/user2.model');
const bcrypt = require('bcrypt');
cont jwt = require('jsonwebtoken');

exports.registerUser = async (res,res) => {
  try {
    const {firstName ,lastName, gender ,email, passworld,age } = req.body;
    let user = await User.findOne({email: email, isDelete: false});
    if(user) {
      return res.status(400).json({ message: 'User is already registered....'})
    }
    // hash password 

    let hashPassword = await bcrypt.hash(password,10);
    user = await User.create({
      firstName ,lastName,
      gender ,email, 
      passworld: hashPassword,
      age
    });
    user.save();
    res.status(201).json({ user: user, message: 'New User is Added'});
  }
  catch(error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error'});
  }
};

exports.loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email, isDelete: false });
    if(!user) {
      return res.status(404).json({ message: 'User is not found'});
    }
    let checkPassword = await bcrypt.compare(req.body.password, user.password);

    if(!checkPassword) {
      return res.status(400).json({ message: 'Password is not match...'})
    }
    let token = jwt.sign({ userId: user._id }, 'Skillqode');
    res.status(200).json({ token,message: 'Login successfully'})
  }
  catch(error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server error'});
  }
};

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

exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json(users);
  } catch (error){
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error'});
  }
};

exports.getUser = async (req,res) => {
  try {
    let userId = req.query.userId;
    // let user = await User.findById(userId);
    let user = await User.findOne({ firstName: userId });

    if(!user) {
       return res.status(404).json({message: 'User not found'});
    }
    res.status(200).json(user);
  }
  catch(error) {
    console.log(error);
    res.status(500).json({ message : 'Internal Server Error'});
  }
};

exports.updateUser = async (req,res) => {
  try {
    let userId = req.query.userId;
    let user = await User.findById(userId);
    if(!user) {
       return res.status(404).json({message: 'User not found'});
    }
    // user = await User.findByIdAndUpadate(user._id, { $set: {...req.body} }, { new: true});
    user = await User.findOneAndUpdate({_id:user._id},{ $set: {...req.body} }, { new: true});
    res.status(200).json({user, message: 'User Updated...'});
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error'});
  }
};


exports.deleteUser = async (req, res) => {
  try {
    let userId = req.query.userId;
    let user = await User.findById(userId);

    if(!user) {
      return res.status(404).json({ message: 'User not found...'});
    }
    // user = await User.findByIdandDelete(user._id);
    user = await User.findOneAndDelete({_id:user._id});
    res.status(200).json({user, message: 'User deleted...'});
  }
  catch(error) {
    console.log(error);
    res.status(500).json({ message: 'Interanal server Error'});
  }
};