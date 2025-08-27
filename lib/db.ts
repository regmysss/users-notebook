import mongoose from "mongoose";

const CONN_STRING = process.env.DB_CONN_STRING;

const db = async () => {
    if (!CONN_STRING)
        throw new Error("DB_CONN_STRING environment variable is not set.");

    try {
        await mongoose.connect(CONN_STRING, {
            dbName: "usersDB",
        });
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};

export default db;