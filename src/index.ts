// "use strict";

// const Hapi = require("@hapi/hapi");
// const Mongoose = require("mongoose");
// const Joi = require("@hapi/joi");
// var UserModel = require("./Models/SellerModel");
// var Config = require("./Config");
// var SellerController = require("./Controllers/SellerController");

// const server = new Hapi.Server({
//   // routes: { cors: true },
//   host: "localhost",
//   port: 3000,
// });

// Mongoose.connect(Config.connectionString, Config.options);

// server.route(SellerController.routes);

// server.start();
// console.log("Server running on %s", server.info.uri);

// import { Server, Request, ResponseToolkit } from "@hapi/hapi";
// import * as mongoose from "mongoose";
// import { SellerController } from "./Controllers/SellerController";
// var Config = require("../src/Config");

// mongoose.connect(Config.connectionString, Config.options);

// const server = new Server({
//   host: "localhost",
//   port: 3000,
// });

// const sellerController = new SellerController();
// server.route(sellerController.getAllRoutes());

// server.start();
// console.log("ok");

import { APIServer } from "./server";

const server: APIServer = new APIServer();

server.init();
