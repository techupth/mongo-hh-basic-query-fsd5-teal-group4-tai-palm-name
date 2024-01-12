import connectToMongoDB from "./connectToMongoDB.js";

const ex7_1 = async (collection) => {
  return await collection.deleteMany({ customer_name: "Jack" });
};

const ex7_2 = async (collection) => {
  return await collection.find({ customer_name: "Jack" }).toArray();
};

const result1 = await connectToMongoDB(ex7_1);

const result2 = await connectToMongoDB(ex7_2);

console.log(result2);
