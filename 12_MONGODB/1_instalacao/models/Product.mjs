import conn from "../db/conn.mjs";
import { ObjectId } from "mongodb";

class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  save() {
    const product = conn.db().collection("products").insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description,
    });

    return product;
  }
  static async getProducts() {
    const product = await conn.db().collection("products").find().toArray();

    return product;
  }

  static async getProduct(id) {
    const product = await conn
      .db()
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    return product;
  }

  static async removeProductById(id) {
    conn
      .db()
      .collection("products")
      .deleteOne({ _id: new ObjectId(id) });
  }
  updateProduct(id) {
    conn
      .db()
      .collection("products")
      .updateOne({ _id: new ObjectId(id) }, { $set: this });
  }
}

export default Product;
