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

// registe the restaurant
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

// get a menu from restaurant by it's id;

exports.getMenuOfRestaurant = async (req, res) => {
    try {
        const id = req.params.id;

        let restaurant = await Restaurant.findOne({ _id: id });
        res
            .status(200)
            .json({
                message: "Restaurants By ID",
                "Restaurant-Menu": restaurant.menu,
            });
    } catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: "Something went wrong at get a menu of restaurant" });
    }
};

// add new menu to the restaurant

exports.addNewMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, image } = req.body;

        let restaurant = await Restaurant.findById({ id });
        if (!restaurant) {
            return res
                .status(404)
                .json({ message: "Restaurant with this id not found" });
        }

        restaurant.menu.push({ name, description, price, image });

        await restaurant.save();

        res
            .status(201)
            .json({ message: "New Mwnu added to restaurant", restaurant });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong at add a menu of restaurant",
        });
    }
};

// delete the perticular menu by id

exports.deleteMenu = async (req, res) => {
    try {
        const { id, menuId } = req.params;
        let restaurant = await Restaurant.findById({ id });
        if (!restaurant) {
            return res.status(404).send({ Message: "restaurant not found" });
        }

        const menuIndex = restaurant.menu.findIndex(
            (item) => item._id.toString() === menuId
        );

        if (menuIndex == -1) {
            return res.status(404).json({ message: "Menu with id is not found" });
        }

        restaurant.menu.splice(menuIndex, 1);
        await restaurant.save();

        res.status(202).json({ message: "Menu deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong at add a menu of restaurant",
        });
    }
};


