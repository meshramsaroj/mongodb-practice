
import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    //  _id: ObjectId,
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    },
    contactNo: {
        type: String
    },

}, { timestamps: true })

export const User = mongoose.model("User", userSchema)



// Insert data into user model

db.user.insertMany([
    {
        email: "saroj@gmail.com",
        firstName: "Saroj",
        lastName: "Meshram",
        password: "saroj@123",
        contactNo: "9168945656",
        isActive: true
    },
    {
        email: "ritu@gmail.com",
        firstName: "Ritu",
        lastName: "Kanojiya",
        password: "ritu@123",
        contactNo: "9163445656",
        isActive: true
    },
    {
        email: "suhas@gmail.com",
        firstName: "Suhas",
        lastName: "Meshram",
        password: "test@123",
        contactNo: "9168945656",
        isActive: true
    }

])