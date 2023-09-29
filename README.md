# fooddeliveryapplication

# Start the app locally;
- To start the app locally use command "npm start"
# Routes

## Basic route
- http://localhost:8000/

## User Routes

## Register User

- POST   /user/api/register

### Request:
    body:{
        name: String,
    email: String,
    password: String,
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String,
    },
    }

- password will be in bcrypted form
- password should have minimum 8 character and have one Capital letter, one number and one symbol.

### Response:

- status 201


                    response:{
                    "Message": "User registered successfully",
                    "User": {
                        "name": "Indu sanap",
                        "email": "indu@gmail.com",
                        "password": "$2b$05$OlZTN68nOZfNJ.3KcqP2feCQjOoxpncorTdBfZzhSxbx176peQ2Ne",
                        "address": {
                            "street": "Lane number 9",
                            "city": "Nashik",
                            "state": "MH",
                            "country": "India",
                            "zip": "422002"
                        },
                        "_id": "64783a48cad679f0170bb661",
                        "__v": 0
                    }
                    }


## Login User

- POST   /user/api/login

### Request:
     body:{
        email: String,
        password: String,
     }

### Response :

- status(201).


            response:{
            "message": "Login Successfull",

            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDc4M2E0OGNhZDY3OWYwMTcwYmI2NjEiLCJpYXQiOjE2ODU2MDE1NDB9.MoqfyVozBO9L_RUq4SxHWBDWovlqYnXQyHsF8t5yMc0"
            }

- Token will be generated using json-web-token and secrete key will be inserted.



## Change password:
- To Change a password.

### Request :
- PATCH /user//api/orders/:id
- userID will be taken from params
      body:{
        password:String,
        newPassword:String
      }

### Response :

- Status(204).
- password will be updated


# Restaurant Route :

## Add Restaurant :

### Request:
 - POST 


   body:{
    name: String,
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String
    },
    menu: [{
        name: String,
        description: String,
        price: Number,
        image: String
    }]
   }

### Response :

- Response.status(201)  



            response:{
            "Messsage": "New Restaurant added successfully",
            "Restaurant": {
                "name": "Sagar Sweets",
                "address": {
                    "street": "Lane number 10",
                    "city": "Nashik",
                    "state": "MH",
                    "country": "India",
                    "zip": "422002"
                },
                "menu": [
                    {
                        "name": "Soya Chili",
                        "description": "Grilled soya bolls",
                        "price": 120,
                        "image": "soyachili.jpg",
                        "_id": "6478452c5f24644ad7603c95"
                    },
                    {
                        "name": "Paneer Chili",
                        "description": "Grilled paneer",
                        "price": 220,
                        "image": "paneerchili.jpg",
                        "_id": "6478452c5f24644ad7603c96"
                    }
                ],
                "_id": "6478452c5f24644ad7603c94",
                "__v": 0
            }
            }

## Get All Restaurants Data :

### Request :
- GET /restaurant/api/restaurants

### Response:
 - res.status(200) 



                    response:{
                "Message": "All Restaurants List",
                    "Restaurants": [
                        {
                            "address": {
                                "street": "Lane number 9",
                                "city": "Nashik",
                                "state": "MH",
                                "country": "India",
                                "zip": "422002"
                            },
                            "_id": "647821c2ecf775a1be68388a",
                            "name": "Sai Chainies Corner",
                            "menu": [
                                {
                                    "name": "Soya Chili",
                                    "description": "Grilled soya bolls",
                                    "price": 120,
                                    "image": "soyachili.jpg",
                                    "_id": "647821c2ecf775a1be68388b"
                                },
                                {
                                    "name": "Paneer Chili",
                                    "description": "Grilled paneer",
                                    "price": 220,
                                    "image": "paneerchili.jpg",
                                    "_id": "647821c2ecf775a1be68388c"
                                }
                            ],
                            "__v": 0
                        },
                        {
                            "address": {
                                "street": "Lane number 9",
                                "city": "Nashik",
                                "state": "MH",
                                "country": "India",
                                "zip": "422002"
                            },
                            "_id": "647821f037adcd0d69b62727",
                            "name": "Sai Chainies Corner",
                            "menu": [
                                {
                                    "name": "Soya Chili",
                                    "description": "Grilled soya bolls",
                                    "price": 120,
                                    "image": "soyachili.jpg",
                                    "_id": "647821f037adcd0d69b62728"
                                },
                                {
                                    "name": "Paneer Chili",
                                    "description": "Grilled paneer",
                                    "price": 220,
                                    "image": "paneerchili.jpg",
                                    "_id": "647821f037adcd0d69b62729"
                                },
                                {
                                    "name": "Noodles",
                                    "description": "Grilled Noodles",
                                    "price": 100,
                                    "image": "noodles.jpg",
                                    "_id": "64782514d90b5913ce664a67"
                                }
                            ],
                            "__v": 3
                        },
                        {
                            "address": {
                                "street": "Lane number 10",
                                "city": "Nashik",
                                "state": "MH",
                                "country": "India",
                                "zip": "422002"
                            },
                            "_id": "6478452c5f24644ad7603c94",
                            "name": "Sagar Sweets",
                            "menu": [
                                {
                                    "name": "Paneer Chili",
                                    "description": "Grilled paneer",
                                    "price": 220,
                                    "image": "paneerchili.jpg",
                                    "_id": "6478452c5f24644ad7603c96"
                                },
                                {
                                    "name": "Gol Gappe",
                                    "description": "spiced water with pudi",
                                    "price": 50,
                                    "image": "golgappe.jpg",
                                    "_id": "64784644facbff551c9b6b56"
                                }
                            ],
                            "__v": 2
                        }
                    ]
                    }

## Get Restaurant By Id

### Request :

- GET   /api/restaurants/:id

### Response :
- res.status(200)  


                response:{
                "Message": "Restaurants By ID",
                "Restaurant": {
                    "address": {
                        "street": "Lane number 10",
                        "city": "Nashik",
                        "state": "MH",
                        "country": "India",
                        "zip": "422002"
                    },
                    "_id": "6478452c5f24644ad7603c94",
                    "name": "Sagar Sweets",
                    "menu": [
                        {
                            "name": "Paneer Chili",
                            "description": "Grilled paneer",
                            "price": 220,
                            "image": "paneerchili.jpg",
                            "_id": "6478452c5f24644ad7603c96"
                        },
                        {
                            "name": "Gol Gappe",
                            "description": "spiced water with pudi",
                            "price": 50,
                            "image": "golgappe.jpg",
                            "_id": "64784644facbff551c9b6b56"
                        }
                    ],
                    "__v": 2
                }
                }

## Get a All menu of restaurant by ID

### Request :
- GET /restaurant/api/restaurants/:id/menu

### Response :
-status 200


                response:{
                "Message": "Restaurants By ID",
                "Restaurant-Menu": [
                    {
                        "name": "Paneer Chili",
                        "description": "Grilled paneer",
                        "price": 220,
                        "image": "paneerchili.jpg",
                        "_id": "6478452c5f24644ad7603c96"
                    },
                    {
                        "name": "Gol Gappe",
                        "description": "spiced water with pudi",
                        "price": 50,
                        "image": "golgappe.jpg",
                        "_id": "64784644facbff551c9b6b56"
                    }
                ]
                }

## Add New Menu to Restaurants menu list :

### Request :

- POST   /restaurant/api/restaurants/:id
- id will be from req.params

    body;{
         "name": "Gol Gappe",
          "description": "spiced water with pudi",
          "price": 50,
          "image": "golgappe.jpg"
    }

### Response

- status code 200.


                        response:{
                    "Message": "Menu Added Succeesfully",
                        "Restaurant": {
                            "address": {
                                "street": "Lane number 10",
                                "city": "Nashik",
                                "state": "MH",
                                "country": "India",
                                "zip": "422002"
                            },
                            "_id": "6478452c5f24644ad7603c94",
                            "name": "Sagar Sweets",
                            "menu": [
                                {
                                    "name": "Soya Chili",
                                    "description": "Grilled soya bolls",
                                    "price": 120,
                                    "image": "soyachili.jpg",
                                    "_id": "6478452c5f24644ad7603c95"
                                },
                                {
                                    "name": "Paneer Chili",
                                    "description": "Grilled paneer",
                                    "price": 220,
                                    "image": "paneerchili.jpg",
                                    "_id": "6478452c5f24644ad7603c96"
                                },
                                {
                                    "name": "Gol Gappe",
                                    "description": "spiced water with pudi",
                                    "price": 50,
                                    "image": "golgappe.jpg",
                                    "_id": "64784644facbff551c9b6b56"
                                }
                            ],
                            "__v": 1
                        }
                        }

## Delete a menu By ID

### Request :
 - DELETE /restaurant/api/restaurants/:id/menu/:menuId
    body :{
    id:menuId
    }

### Response :
- status code 202


                        response:{
                        "Message": "Menu deleted Successfully",
                        "Restaurant": {
                            "address": {
                                "street": "Lane number 10",
                                "city": "Nashik",
                                "state": "MH",
                                "country": "India",
                                "zip": "422002"
                            },
                            "_id": "6478452c5f24644ad7603c94",
                            "name": "Sagar Sweets",
                            "menu": [
                                {
                                    "name": "Paneer Chili",
                                    "description": "Grilled paneer",
                                    "price": 220,
                                    "image": "paneerchili.jpg",
                                    "_id": "6478452c5f24644ad7603c96"
                                },
                                {
                                    "name": "Gol Gappe",
                                    "description": "spiced water with pudi",
                                    "price": 50,
                                    "image": "golgappe.jpg",
                                    "_id": "64784644facbff551c9b6b56"
                                }
                            ],
                            "__v": 2
                        }
                        }

# Orders Route

## Add Order

### Request
- POST /order/api/order


            body:{
                _id: ObjectId,
                user : { type: ObjectId, ref: 'User' },
                restaurant : { type: ObjectId, ref: 'Restaurant' },
            items: [{
                name: String,
                price: Number,
                quantity: Number
            }],
            totalPrice: Number,
            deliveryAddress: {
                street: String,
                city: String,
                state: String,
                country: String,
                zip: String
            },
            status: String // e.g, "placed", "preparing", "on the way", "delivered"
            }

### Response

- starus code 201


                response:{
                "Message": "Order Added Successfully",
                "Order": {
                    "user": {
                        "address": {
                            "street": "Lane number 9",
                            "city": "Nashik",
                            "state": "MH",
                            "country": "India",
                            "zip": "422002"
                        },
                        "_id": "64783a48cad679f0170bb661",
                        "name": "Indu sanap",
                        "email": "indu@gmail.com",
                        "__v": 0
                    },
                    "restaurant": {
                        "address": {
                            "street": "Lane number 10",
                            "city": "Nashik",
                            "state": "MH",
                            "country": "India",
                            "zip": "422002"
                        },
                        "_id": "6478452c5f24644ad7603c94",
                        "name": "Sagar Sweets"
                    },
                    "items": [
                        {
                            "name": "Paneer Chili",
                            "price": 220,
                            "quantity": 1,
                            "_id": "64784f20522f948f28c0ea43"
                        }
                    ],
                    "totalPrice": 420,
                    "deliveryAddress": {
                        "street": "Lane number 9",
                        "city": "Nashik",
                        "state": "MH",
                        "country": "India",
                        "zip": "422002"
                    },
                    "status": "placed",
                    "_id": "64784f20522f948f28c0ea42",
                    "__v": 0
                }
                }


## Get All Orders

###  Request:
-GET   /order/api/orders

### Response :
- status code 200
    
                response:{
                "Message": "All Orders data",
                "Orders": [
                    {
                        "deliveryAddress": {
                            "street": "Lane number 9",
                            "city": "Nashik",
                            "state": "MH",
                            "country": "India",
                            "zip": "422002"
                        },
                        "_id": "6478310a4c7a744bc57556b3",
                        "user": {
                            "address": {
                                "street": "Lane number 9",
                                "city": "Nashik",
                                "state": "MH",
                                "country": "India",
                                "zip": "422002"
                            },
                            "_id": "647817c8158c6ed824624bea",
                            "name": "Dilip sanap",
                            "email": "dilip@gmail.com",
                            "__v": 0
                        },
                        "restaurant": {
                            "address": {
                                "street": "Lane number 9",
                                "city": "Nashik",
                                "state": "MH",
                                "country": "India",
                                "zip": "422002"
                            },
                            "_id": "647821f037adcd0d69b62727",
                            "name": "Sai Chainies Corner"
                        },
                        "items": [
                            {
                                "name": "Noodels",
                                "price": 100,
                                "quantity": 2,
                                "_id": "6478310a4c7a744bc57556b4"
                            },
                            {
                                "name": "Paneer Chili",
                                "price": 220,
                                "quantity": 1,
                                "_id": "6478310a4c7a744bc57556b5"
                            }
                        ],
                        "totalPrice": 420,
                        "status": "placed",
                        "__v": 0
                    },
                    {
                        "deliveryAddress": {
                            "street": "Lane number 9",
                            "city": "Nashik",
                            "state": "MH",
                            "country": "India",
                            "zip": "422002"
                        },
                        "_id": "647831ab93561b78846ceea8",
                        "user": {
                            "address": {
                                "street": "Lane number 9",
                                "city": "Nashik",
                                "state": "MH",
                                "country": "India",
                                "zip": "422002"
                            },
                            "_id": "647817c8158c6ed824624bea",
                            "name": "Dilip sanap",
                            "email": "dilip@gmail.com",
                            "__v": 0
                        },
                        "restaurant": {
                            "address": {
                                "street": "Lane number 9",
                                "city": "Nashik",
                                "state": "MH",
                                "country": "India",
                                "zip": "422002"
                            },
                            "_id": "647821f037adcd0d69b62727",
                            "name": "Sai Chainies Corner"
                        },
                        "items": [
                            {
                                "name": "Noodels",
                                "price": 100,
                                "quantity": 2,
                                "_id": "647831ab93561b78846ceea9"
                            },
                            {
                                "name": "Paneer Chili",
                                "price": 220,
                                "quantity": 1,
                                "_id": "647831ab93561b78846ceeaa"
                            }
                        ],
                        "totalPrice": 420,
                        "status": "deliverd",
                        "__v": 0
                    }
                ]
                }

## Get Order by ID

### Request :
- GET   /order/api/orders/:id
### Response :
- status code 200.



                    response:{
                    "Message": " Order By Id data",
                    "Order": {
                        "deliveryAddress": {
                            "street": "Lane number 9",
                            "city": "Nashik",
                            "state": "MH",
                            "country": "India",
                            "zip": "422002"
                        },
                        "_id": "6478310a4c7a744bc57556b3",
                        "user": {
                            "address": {
                                "street": "Lane number 9",
                                "city": "Nashik",
                                "state": "MH",
                                "country": "India",
                                "zip": "422002"
                            },
                            "_id": "647817c8158c6ed824624bea",
                            "name": "Dilip sanap",
                            "email": "dilip@gmail.com",
                            "__v": 0
                        },
                        "restaurant": {
                            "address": {
                                "street": "Lane number 9",
                                "city": "Nashik",
                                "state": "MH",
                                "country": "India",
                                "zip": "422002"
                            },
                            "_id": "647821f037adcd0d69b62727",
                            "name": "Sai Chainies Corner"
                        },
                        "items": [
                            {
                                "name": "Noodels",
                                "price": 100,
                                "quantity": 2,
                                "_id": "6478310a4c7a744bc57556b4"
                            },
                            {
                                "name": "Paneer Chili",
                                "price": 220,
                                "quantity": 1,
                                "_id": "6478310a4c7a744bc57556b5"
                            }
                        ],
                        "totalPrice": 420,
                        "status": "placed",
                        "__v": 0
                    }
                    }

## Edit The Status of Order :

### Request :
- PUT /order/api/orders/:id
  body:{
    status
  }

### Response
- status code 204


    
            response:{
            "Message": "Order Status Updated Successfully",
            "Order": {
                "deliveryAddress": {
                    "street": "Lane number 9",
                    "city": "Nashik",
                    "state": "MH",
                    "country": "India",
                    "zip": "422002"
                },
                "_id": "6478310a4c7a744bc57556b3",
                "user": "647817c8158c6ed824624bea",
                "restaurant": "647821f037adcd0d69b62727",
                "items": [
                    {
                        "name": "Noodels",
                        "price": 100,
                        "quantity": 2,
                        "_id": "6478310a4c7a744bc57556b4"
                    },
                    {
                        "name": "Paneer Chili",
                        "price": 220,
                        "quantity": 1,
                        "_id": "6478310a4c7a744bc57556b5"
                    }
                ],
                "totalPrice": 420,
                "status": "deliverd",
                "__v": 0
            }
            }

