// const express = require('express');
// const userRoutes = express.Router();
// const {addUser} = require('../controller/user2.controller');

// userRoutes.post('/add-user',addUser);

// module.exports = userRoutes ; 

const express = require('express');
const userRoutes = express.Router();
const { 
    registerUser,
    loginUser,
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/user2.controller');

userRoutes.post('/register-user', registerUser);
userRoutes.post('/login-user', loginUser);
userRoutes.post('/add-user', addUser);
userRoutes.get('/get-all-users', getAllUsers);
userRoutes.get('/get-user', getUser);
userRoutes.put('/update-user', updateUser);
userRoutes.delete('/delete-user', deleteUser);

module.exports = userRoutes;

