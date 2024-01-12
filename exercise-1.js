import connectToMongoDB from "./connectToMongoDB.js";

const ex1_1 = async (collection) => {
  return await collection.findOne({ customer_name: "Cherlyn" });
};
const ex1_2 = async (collection) => {
  return await collection.find({ credit_card_type: "mastercard" }).toArray();
};
const ex1_3 = async (collection) => {
  return await collection.find({ size: "medium" }).limit(5).toArray();
};

const result1_1 = await connectToMongoDB(ex1_1);
const result1_2 = await connectToMongoDB(ex1_2);
const result1_3 = await connectToMongoDB(ex1_3);

// run quoakka แล้วเปลี่ยน x ตาม บรรทัด 14-16
// console.log(result1_x);
// uncomment ด้วย
