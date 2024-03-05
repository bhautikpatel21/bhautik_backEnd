const express = require('express');
const userRoutes = express.Router();
const { adduser,
       deleteUser,
       getAllUser,
       getuser,
       replaceuser,
       updateuser,
      } = require('../controller/user.controller');

        // Create user
    userRoutes.post('/',adduser);

        // Get All user
    userRoutes.get('/',getAllUser);

        // Get Single user
    userRoutes.get('/single-user',getuser);

        // Replace Single user
    userRoutes.get('/replace-user',replaceuser);
      
        // Update SIngle user
    userRoutes.get('/update-user',updateuser);

        // delete SIngle user
    userRoutes.get('/delete-user',deleteUser);

    module.exports = userRoutes;