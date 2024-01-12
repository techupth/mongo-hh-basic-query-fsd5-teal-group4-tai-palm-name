import connectToMongoDB from "./connectToMongoDB.js";

const result3_1 = async (collection) => {
  return await collection
    .find({}, { projection: { total_price: 1 } })
    .sort({ total_price: -1 })
    .toArray();
};

const result3_2 = async (collection) => {
  return await collection
    .find({}, { projection: { created_at: 1 } })
    .sort({ created_at: 1 })
    .toArray();
};

const result_1 = await connectToMongoDB(result3_1);
const result_2 = await connectToMongoDB(result3_2);

// run quoakka แล้วเปลี่ยน x ตาม บรรทัด 14-16
// console.log(result_x);
// uncomment ด้วย
