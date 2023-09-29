const express = require('express');
const restaurantController = require('../controllers/restaurant.controller');

const restaurantRoutes = express.Router();

// get all restaurants
restaurantRoutes.get("/api/restaurants", restaurantController.getAllRestaurants);

// get restaurant by id;
restaurantRoutes.get("/api/restaurants/:id", restaurantController.getRestaurantById);

// add restautant
restaurantRoutes.post("/api/restaurant", restaurantController.registerRestaurant);

// get menu of restaurant
restaurantRoutes.get("/api/restaurants/:id/menu", restaurantController.getMenuOfRestaurant);

// add menu to the restaurant
restaurantRoutes.post("/api/restaurants/:id/menu", restaurantController.addNewMenu);

// delete the menu by id
restaurantRoutes.delete("/api/restaurants/:id/menu/:menu",restaurantController.deleteMenu);

module.exports = restaurantRoutes;