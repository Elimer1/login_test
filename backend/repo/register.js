import connectToDb from "../mongo.js";

const db = await connectToDb();
const collection = await db.collection("user_collection");

const registerUser = async (user) => {
  await collection.insertOne(user);
};

registerUser({ eli: "eli" });
