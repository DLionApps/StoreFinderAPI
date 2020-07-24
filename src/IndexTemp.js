"use strict";

const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);

  mongoose.connect(
    "mongodb+srv://SysAdmin:19921230@clusterone.la7eb.gcp.mongodb.net/test?authSource=admin&replicaSet=atlas-hwt9x5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    { useNewUrlParser: true }
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("db Conected");
  });

  const kittySchema = new mongoose.Schema({
    name: String,
  });

  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  const Kitten = mongoose.model("Kitten", kittySchema);

  const silence = new Kitten({ name: "Silence" });
  console.log(silence.name); // 'Silence'

  const fluffy = new Kitten({ name: "fluffy" });
  fluffy.speak(); // "Meow name is fluffy"

  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  });

  Kitten.find({ name: /^fluff/ }, callback);
  //   //
};

// process.on("unhandledRejection", (err) => {
//   console.log(err);
//   process.exit(1);
// });

init();
