// const express = require('express');
// const userRoutes = express.Router();
// const {addUser} = require('../controller/user2.controller');

// userRoutes.post('/add-user',addUser);

// module.exports = userRoutes ; 

const express = require('express');
const userRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const { 
    registerUser,
    loginUser,
    addUser,
    getUser,
    getAllUsers,  
    updateUser,
    deleteUser,
    addNewUser
} = require('../controller/user.controller');
const { upload } = require('../helpers/imageUpload');

userRoutes.get('/get-all-users',verifyToken, getAllUsers);
userRoutes.get('/get-user',verifyToken, getUser)
userRoutes.post('/register-user', registerUser);
userRoutes.post('/login-user', loginUser);
userRoutes.post('/add-user', addUser);
userRoutes.put('/update-user', updateUser);
userRoutes.delete('/delete-user', deleteUser);

userRoutes.post('add-user',upload.single('profileImage'), addNewUser );

module.exports = userRoutes;
