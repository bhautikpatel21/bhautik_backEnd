const users = require('../product.json');

exports.adduser = (req,res) => {
     // console.log(req.body);   
     const user = req.body;
     users.push(user);
     // users.push({...req.body});
     res.status(201).json({ message : "users Is Added...."});
};

exports.getAllUser = (req,res) => {
    res.status(201).json(users);

};

exports.getuser = (req,res) => {
    const id = +req.query.id;
    // console.log(id);
    let users = users.find((item) => item.id === id);
    res.status(200).json(users);
};

exports.replaceuser = (req,res) => {
    const id = +req.query.id;
    let userIndex = users.findIndex((item) => item.id === id) 
    let users = users[userIndex];
    users.splice(userIndex,1 ,{...req.body});
    // console.log(users);
    res.status(200).json({ message : 'userss Replace SucessFully...'});

};

exports.updateuser = (req,res) => {
    const id = +req.query.id;
    let userIndex = users.findIndex((item) => item.id === id) 
    let users = users[userIndex];
    let item = users.splice(userIndex,1 ,{ ...users, ...req.body});
    // console.log(users);
    res.status(200).json({ message : ' userss update SucessFully...'});

};

exports.deleteUser = (req,res) => { 
    const id = req.query.id;
    let userIndex = users.findIndex((item) => item.id === id) 
    let user = users[userIndex];
    users.splice(userIndex,1);
    // console.log(users);
    res.status(200).json({ message : ' user Delete SucessFully...'});

};