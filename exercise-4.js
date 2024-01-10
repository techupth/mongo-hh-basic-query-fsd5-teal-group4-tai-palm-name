import connectToMongoDB from "./connectToMongoDB.js";

const result4_1 = async (collection) => {
  return await collection
    .find({
      $and: [{ quantity: { $lt: 5 } }, { credit_card_type: "mastercard" }],
    })
    .toArray();
};

const result4_2 = async (collection) => {
  return await collection
    .find({
      $and: [{ quantity: { $lte: 5, $gte: 1 } }, { size: "small" }],
    })
    .toArray();
};

const result4_3 = async (collection) => {
  return await collection
    .find({
      $and: [{ quantity: { $gt: 10 } }, { credit_card_type: null }],
    })
    .toArray();
};

const result_1 = await connectToMongoDB(result4_1);
const result_2 = await connectToMongoDB(result4_2);
const result_3 = await connectToMongoDB(result4_3);

console.log(result_3.length);
