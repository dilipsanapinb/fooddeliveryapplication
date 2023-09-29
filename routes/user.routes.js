const express = require('express');

const userController=require("../controllers/user.controller")
const userRoutes = express.Router();

// register the user
userRoutes.post("/api/register", userController.registerUser);

// login the user
userRoutes.post('/api/login', userController.loginUser);



module.exports = userRoutes;