import connectToMongoDB from "./connectToMongoDB.js";

const ex6_1 = async (collection) => {
  return await collection.updateMany(
    { customer_name: "Jack" },
    {
      $set: {
        isAdmin: false,
      },
    },
    {
      upsert: true,
    }
  );
};

const ex6_2 = async (collection) => {
  return await collection.updateMany(
    {},
    {
      $set: {
        country: "Thailand",
      },
    },
    {
      upsert: true,
    }
  );
};

const ex6_3 = async (collection) => {
  return await collection.updateOne(
    { customer_name: "M" },
    {
      $set: {
        size: "large",
        total_price: 200000,
        quantity: 20,
        customer_name: "M",
        credit_card_type: "mastercard",
        created_at: "2022-01-01T10:48:40Z",
      },
    },
    {
      upsert: true,
    }
  );
};

const result_1 = await connectToMongoDB(ex6_1);
const result_2 = await connectToMongoDB(ex6_2);
const result_3 = await connectToMongoDB(ex6_3);

console.log(result_3);
