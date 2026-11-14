
import mongoose, { Schema } from "mongoose";

// Embedded Order Item Schema
const orderItemSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },

    priceAtPurchase: {
      type: Number,
      required: true,
      min: 0
    },

    currency: {
      type: String,
      required: true,
      default: "INR"
    },

    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  },
  { _id: false }
);

// Shipping Address Schema
const shippingAddressSchema = new Schema(
  {
    addressLine1: {
      type: String,
      required: true
    },

    addressLine2: {
      type: String,
      default: ""
    },

    city: {
      type: String,
      required: true
    },

    state: {
      type: String,
      required: true
    },

    country: {
      type: String,
      required: true
    },

    pincode: {
      type: String,
      required: true
    },

    contactNumber: {
      type: String,
      required: true
    }
  },
  { _id: false }
);

// Main Order Schema
const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    products: {
      type: [orderItemSchema],
      required: true,
      validate: {
        validator: function (value) {
          return value.length > 0;
        },
        message: "Order must contain at least one product"
      }
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0
    },

    orderStatus: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "shipped",
        "delivered",
        "cancelled"
      ],
      default: "pending"
    },

    paymentStatus: {
      type: String,
      enum: [
        "pending",
        "paid",
        "failed",
        "refunded"
      ],
      default: "pending"
    },

    shippingAddress: {
      type: shippingAddressSchema,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

// Example

db.order.insert({
  userId: ObjectId("6af729bff9a3d8e82afd4afa"),

  products: [
    {
      productId: ObjectId("6af73093f9a3d8e82afd4b0a"),
      priceAtPurchase: 1999,
      currency: "INR",
      quantity: 1
    },
    {
      productId: ObjectId("6af72f44f9a3d8e82afd4b07"),
      priceAtPurchase: 119900,
      currency: "INR",
      quantity: 1
    }
  ],

  totalAmount: 121899,

  orderStatus: "confirmed",

  paymentStatus: "paid",

  shippingAddress: {
    addressLine1: "Flat 202, ABC Apartments",
    addressLine2: "Near Main Road",
    city: "Nagpur",
    state: "Maharashtra",
    country: "India",
    pincode: "440001",
    contactNumber: "9876543210"
  },

  createdAt: new Date(),
  updatedAt: new Date()
})
