const express = require('express');
const userRoutes = express.Router();
const {addUser} = require('../controller/user2.controller');

userRoutes.post('/add-user',addUser);

module.exports = userRoutes ; 