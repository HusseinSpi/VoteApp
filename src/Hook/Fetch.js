import mongoose from "mongoose";

const uri =
  "mongodb+srv://huseeink852:q6ywsHhkHUWWPNR3@cluster0.sy1ea1q.mongodb.net/?retryWrites=true&w=majority";

const dbName = "Data";
const collectionName = "Characters";

export async function fetchData() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: dbName,
    });
    console.log("Connected to the database");

    const result = await mongoose.connection.db
      .collection(collectionName)
      .find()
      .toArray();
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  } finally {
    await mongoose.disconnect();
  }
}
