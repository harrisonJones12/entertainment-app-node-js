const express = require("express");
const app = express();
const userRoutes = require("./routes/index");

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Use the userRoutes for user-related routes
app.use("/watchfun", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
