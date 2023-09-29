const Restaurant = require('../models/restaurant.model');


exports.getAllRestaurants =async (req, res) => {
    try {
        let restaurants = await Restaurant.find();
        res.status(200).json({ message: "All restaurants data", restaurants });
    } catch (error) {
        console.log("Error in Getting the all restautant details", error.message);
        res.status(500).json({ message: error.Message });
    }
}

// get restaurant by id
exports.getRestaurantById = async (req, res) => {
    const id = req.params.id;
    try {
        let restaurant = await Restaurant.findOne({ _id: id });
        res.status(200).json({ message: "Restaurants By ID", restaurant });
    } catch (error) {
        console.log("Error in Getting the single restautant details", error);
        res.status(500).json({ message: error.Message });
    }
};

exports.registerRestaurant = async (req, res) => {
    try {
        const { name, address, menu } = req.body;
        let restaurant = new Restaurant({ name, address, menu });
        await restaurant.save();
        res.status(200).json({
            messsage: "New Restaurant added successfully",
            restaurant,
        });
    } catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: "Something went wrong at register the restaurant" });
    }
};

