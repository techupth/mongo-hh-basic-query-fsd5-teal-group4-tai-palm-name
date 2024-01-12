import connectToMongoDB from "./connectToMongoDB.js";

const ex2_1 = async (collection) => {
  return await collection.findOne(
    { customer_name: /zo/i },
    { projection: { total_price: 1, customer_name: 1 } }
  );
};

const result1 = await connectToMongoDB(ex2_1);

console.log(result1);
