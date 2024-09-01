import mongoose from "mongoose";

async function main() {
  await mongoose.connect("mongodb://localhost:27017/testemongoose");
  console.log("Conectado ao MongoDB com Mongoose!");
}

main().catch((err) => {
  return console.log(err);
});

export default mongoose;
