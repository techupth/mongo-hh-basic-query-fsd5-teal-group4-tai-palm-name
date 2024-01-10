import { MongoClient } from "mongodb";

async function connectToMongoDB(fn) {
  const url = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
  const dbName = "practice-mongo"; // Replace with your database name

  try {
    const client = await MongoClient.connect(url);
    console.log("Connected to MongoDB successfully.");

    const db = client.db(dbName);
    const collection = db.collection("pizzaOrders"); // Replace with the name of your collection

    const result = await fn(collection);

    client.close();

    return await result;
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}

const ex1_1 = async (collection) => {
  return await collection.findOne({ customer_name: "Cherlyn" });
};

connectToMongoDB(ex1_1);

export default connectToMongoDB;
