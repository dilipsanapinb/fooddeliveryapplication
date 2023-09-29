const express = require('express');
const restaurantController = require('../controllers/restaurant.controller');

const restaurantRoutes = express.Router();

// get all restaurants
restaurantRoutes.get("/api/restaurants", restaurantController.getAllRestaurants);

// get restaurant by id;
restaurantRoutes.get("/api/restaurants/:id", restaurantController.getRestaurantById);

// get a menu of restautant
restaurantRoutes.post("/api/restaurant", restaurantController.registerRestaurant);

module.exports = restaurantRoutes;