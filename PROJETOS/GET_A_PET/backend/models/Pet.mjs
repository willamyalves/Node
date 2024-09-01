import mongoose from "../db/conn.mjs";
import { Schema } from "mongoose";

const Pet = mongoose.model(
  "Pet",
  new Schema(
    {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      weight: { type: Number, required: true },
      color: { type: String, required: true },
      images: { type: Array, required: true },
      Available: { type: Boolean },
      user: { Object },
      adopter: { Object },
    },
    { timestamps: true }
  )
);

export default Pet;
