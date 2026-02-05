// import userController ("../controllers/index");

// Define routes and map to controller methods
// router.get("/signup", userController.signupUser); // Map to getUsers function
// router.get("/users/:id", userController.getUserById); // Map to getUserById function
// router.post("/users", userController.createUser); // Map to createUser function

const Router = (server) => {
  server.get("/v1", (req, res) => {
    try {
      // server.get("/signup", userController.signupUser);
      res.status(200).json({
        status: "success",
        data: [],
        message: "v1 Endpoint accessed",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
      console.error("Error setting up routes:", error);
    }
  });
};

export default Router;
