import { MONGODB_URI } from "../config/index.js";
import mongoose from "mongoose";

const connectToDB = () => {
  mongoose.promise = global.Promise;
  mongoose.set("strictQuery", false);

  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("connected to the database"))
    .catch((err) => console.error("Error connecting to the database", err));
};

export default connectToDB;
