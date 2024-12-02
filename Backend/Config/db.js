import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const dbUrl = process.env.DB_URL;

if (!dbUrl) {
    console.error("Error: DB_URL is undefined. Check your .env file.");
    process.exit(1); 
}

mongoose.connect(dbUrl, {
    serverSelectionTimeoutMS: 7000,
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
    console.log("=============================");
});

mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error: ", error);
});

export default mongoose;
