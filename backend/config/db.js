import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Can not connect to database ${error.message}`);
    process.exit(1); // process code 1 means failure, 0 means success
  }
};
