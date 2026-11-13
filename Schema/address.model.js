import mongoose, { Schema } from "mongoose"

const addressSchema = new Schema({

    userId: {
        type: mongoose.Schema.types.ObjectId,
        ref: "User"
    },
    addressLine1: {
        type: String,
        required: true,
    },
    addressLine2: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },

}, { timestamps: true })

export const Address= mongoose.model("Address", addressSchema)

// insert address

db.addresses.insertMany([
    {
        userId: ObjectId("6af729bff9a3d8e82afd4afa"),
        addressLine1: "Plot no 37, Raghukul Park",
        addressLine2: "Jagtap Layout",
        country: "India",
        state: "Maharashtra",
        city: "Nagpur",
        pincode: 441110,
        contactNumber: ""
    },
       {
        userId: ObjectId("6af729bff9a3d8e82afd4afa"),
        addressLine1: "Ward no2, Amarnagar",
        addressLine2: "MIDC, Hingna",
        country: "India",
        state: "Maharashtra",
        city: "Nagpur",
        pincode: 440016,
        contactNumber: ""
    },
])