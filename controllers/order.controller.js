const Order = require('../models/order.model');

// get all order data
exports.getAllOrders = async (req, res) => {
    try {
        let orders = await Order.find()
          .populate("user", "-password")
          .populate("restaurant", "name address");
        res.status(200).json({ message: "All Orders data", orders });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong at getting all orders data",
        });
    }
};

// get order by id
exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById({ id })
            .populate("user", "-password")
            .populate("restaurant", "name address");
        res.status(200).json({ message: " Order data by id", order });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong at getting order by id",
        });
    }
};


// post the order
exports.createOrder = async (req, res) => {
    try {
        const { user, restaurant, items, totalPrice, deliveryAddress, status } = req.body;
        let order = new Order({
            user,
            restaurant,
            items,
            totalPrice,
            deliveryAddress,
            status,
        });
        order = await order.populate("user", "-password");
        order = await order.populate("restaurant", "name address");
        await order.save();

        res.status(201).json({ message: "New Order placed", order })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong at placing order",
        });
    }
};


// change the status of order

exports.changeStatus = async (req, res) => {
    try {
        let { id } = req.params;
        let { status } = req.body;

        let order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: "Order Not found" });
        }

        order.status = status;
        await order.save();
        res.status(200).send({
            message: "Order Status Updated Successfully",
            order,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong at updating the order status",
        });
    }
};