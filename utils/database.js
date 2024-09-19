import mongoose from "mongoose";
async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "blog" });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
  }
}

export default connectToDB;