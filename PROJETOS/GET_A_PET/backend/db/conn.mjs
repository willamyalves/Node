import mongoose from "mongoose";

async function main() {
  await mongoose.connect("mongodb://localhost:5000");
  console.log("Conectado ao MongoDB");
}

main().catch((err) => console.log(err));

export default mongoose;
