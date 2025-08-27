import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        first: String,
    },
    email: String,
    gender: String,
    location: {
        city: String,
        coordinates: {
            latitude: String,
            longitude: String,
        },
    },
    picture: {
        large: String,
    },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);