import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB CONNECTED", conn.connection.host);
  } catch (err) {
    process.exit(1);
  }
};

export default connectDB;
