import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("success!");
  } catch (error) {
    console.log("Connect failure!", error);
  }
};

export default connectDB;
