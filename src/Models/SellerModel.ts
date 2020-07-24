import * as mongoose from "mongoose";

const SellerScheema = new mongoose.Schema({
  // _id: String,
  email: String,
  // firstName: String,
  // lastName: String,
  password: String,
  // isLogged: Boolean,
});

export const SellerModel = mongoose.model("seller", SellerScheema);
