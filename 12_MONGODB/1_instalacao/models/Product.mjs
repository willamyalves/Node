import conn from "../db/conn.mjs";

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
  static getProducts() {
    const product = conn.db().collection("products").find().toArray();

    return product;
  }
}

export default Product;
