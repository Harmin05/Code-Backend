const connectDB = async () => {
  if (process.env.MONGODB_ENABLED !== "true") {
    console.log("MongoDB is disabled, starting without DB.");
    return;
  }

  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.log("MONGODB_URI is not set, skipping database connection.");
    return;
  }

  try {
    const mongooseModule = await import("mongoose");
    const mongoose = mongooseModule.default ?? mongooseModule;
    const connectionInstance = await mongoose.connect(mongoUri);
    console.log(
      `MongoDB connected: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection failed, starting without DB:", error.message);
  }
};

export default connectDB;
