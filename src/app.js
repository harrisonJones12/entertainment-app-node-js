import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { PORT } from "./config/index.js";
import Router from "./routes/index.js";
import connectToDB from "./db/db.js";

const server = express();

const Port = PORT || 3000;

// CONFIGURE HEADER INFORMATION
server.use(cors());
server.disable("x-powered-by"); //Reduce fingerprinting
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

connectToDB();
Router(server);

server.listen(Port || 3000, () => {
  console.log(`Server is running on port ${Port}`);
});
