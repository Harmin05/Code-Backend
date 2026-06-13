const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is missing in your .env file.");
  }

  try {
    const mongooseModule = await import("mongoose");
    const mongoose = mongooseModule.default ?? mongooseModule;
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB connection failed");
    console.error(error.message);
    throw error;
  }
};

export default connectDB;
