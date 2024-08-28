import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/testemongodb";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }
}

run();

export default client;
