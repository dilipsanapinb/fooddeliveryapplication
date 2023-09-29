const express = require('express');
const orderController = require('../controllers/order.controller');

const orderRoutes = express.Router();

// place a order
orderRoutes.post("/api/order", orderController.createOrder);

// get order details by id

orderRoutes.get("/api/orders/:id", orderController.getOrderById);

// get all order data
orderRoutes.get("/api/orders", orderController.getAllOrders);

// change the status of order
orderRoutes.put("/api/orders/:id", orderController.changeStatus);

module.exports=orderRoutes