const express = require("express");
const router = express.Router();
const userController = require("../controllers/index");

// Define routes and map to controller methods
router.get("/signup", userController.signupUser); // Map to getUsers function
// router.get("/users/:id", userController.getUserById); // Map to getUserById function
// router.post("/users", userController.createUser); // Map to createUser function

module.exports = router;
``;
