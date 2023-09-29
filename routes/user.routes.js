const express = require('express');

const userController=require("../controllers/user.controller")
const userRoutes = express.Router();

// register the user
userRoutes.post("/api/register", userController.registerUser);

// login the user
userRoutes.post('/api/login', userController.loginUser);

// reset the password
userRoutes.patch('/api/user/:userId/reset', userController.resetPassword);



module.exports = userRoutes;