
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true,
            index: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        imageUrl: {
            type: [String],
            required: true,
            default: []
        },

        specification: {
            type: [Schema.Types.Mixed],
            default: []
        },

        price: {
            type: Number,
            required: true,
            min: 0
        },

        currency: {
            type: String,
            required: true,
            default: "INR"
        },

        discount: {
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },

        isAvailable: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;


db.product.insertMany([
    // 1. Electronics

    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4aff"),
        name: "Sony Wireless Headphones",
        description: "Premium wireless headphones with noise cancellation.",
        imageUrl: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        ],
        specification: [
            { key: "Connectivity", value: "Bluetooth" },
            { key: "Battery Life", value: "30 Hours" },
            { key: "Type", value: "Over Ear" }
        ],
        price: 8999,
        currency: "INR",
        discount: 10,
        isAvailable: true
    },

    // 2. Fashion
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b00"),
        name: "Men's Casual T-Shirt",
        description: "Comfortable cotton casual t-shirt for everyday wear.",
        imageUrl: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        ],
        specification: [
            { key: "Material", value: "100% Cotton" },
            { key: "Size", value: "M, L, XL" },
            { key: "Color", value: "Black" }
        ],
        price: 799,
        currency: "INR",
        discount: 15,
        isAvailable: true
    },
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b00"),
        name: "Women's Denim Jacket",
        description: "Stylish denim jacket suitable for casual outfits.",
        imageUrl: [
            "https://images.unsplash.com/photo-1543076447-215ad9ba6923"
        ],
        specification: [
            { key: "Material", value: "Denim" },
            { key: "Fit", value: "Regular Fit" },
            { key: "Color", value: "Blue" }
        ],
        price: 1999,
        currency: "INR",
        discount: 20,
        isAvailable: true
    },

    // 3. Home & Kitchen
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b01"),
        name: "Modern Table Lamp",
        description: "Elegant table lamp for bedroom and living room decoration.",
        imageUrl: [
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c"
        ],
        specification: [
            { key: "Material", value: "Metal and Glass" },
            { key: "Power", value: "12W" },
            { key: "Color", value: "White" }
        ],
        price: 1499,
        currency: "INR",
        discount: 10,
        isAvailable: true
    },
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b01"),
        name: "Non-Stick Cookware Set",
        description: "Durable non-stick cookware set for everyday cooking.",
        imageUrl: [
            "https://images.unsplash.com/photo-1556911220-bff31c812dba"
        ],
        specification: [
            { key: "Material", value: "Aluminium" },
            { key: "Pieces", value: "5" },
            { key: "Coating", value: "Non-Stick" }
        ],
        price: 2999,
        currency: "INR",
        discount: 12,
        isAvailable: true
    },

    // 4. Sports & Fitness
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b02"),
        name: "Adjustable Dumbbell Set",
        description: "Adjustable dumbbells for strength training and home workouts.",
        imageUrl: [
            "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
        ],
        specification: [
            { key: "Weight", value: "20 KG" },
            { key: "Material", value: "Cast Iron" },
            { key: "Type", value: "Adjustable" }
        ],
        price: 2499,
        currency: "INR",
        discount: 10,
        isAvailable: true
    },
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b02"),
        name: "Running Shoes",
        description: "Lightweight running shoes designed for comfort and daily training.",
        imageUrl: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        ],
        specification: [
            { key: "Material", value: "Mesh" },
            { key: "Sole", value: "Rubber" },
            { key: "Type", value: "Running" }
        ],
        price: 3499,
        currency: "INR",
        discount: 15,
        isAvailable: true
    },

    // 5. Books
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b03"),
        name: "Atomic Habits",
        description: "A practical guide to building good habits and breaking bad ones.",
        imageUrl: [
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
        ],
        specification: [
            { key: "Author", value: "James Clear" },
            { key: "Language", value: "English" },
            { key: "Format", value: "Paperback" }
        ],
        price: 599,
        currency: "INR",
        discount: 10,
        isAvailable: true
    },
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b03"),
        name: "The Psychology of Money",
        description: "Timeless lessons on wealth, greed and happiness.",
        imageUrl: [
            "https://images.unsplash.com/photo-1512820790803-83ca734da794"
        ],
        specification: [
            { key: "Author", value: "Morgan Housel" },
            { key: "Language", value: "English" },
            { key: "Format", value: "Paperback" }
        ],
        price: 399,
        currency: "INR",
        discount: 5,
        isAvailable: true
    },

    // 6. Beauty & Personal Care
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b04"),
        name: "Vitamin C Face Serum",
        description: "Daily skincare serum for a brighter and healthier-looking complexion.",
        imageUrl: [
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b"
        ],
        specification: [
            { key: "Volume", value: "30ml" },
            { key: "Skin Type", value: "All Skin Types" },
            { key: "Ingredient", value: "Vitamin C" }
        ],
        price: 699,
        currency: "INR",
        discount: 15,
        isAvailable: true
    },
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b04"),
        name: "Moisturizing Face Cream",
        description: "Hydrating face cream for everyday skincare.",
        imageUrl: [
            "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8"
        ],
        specification: [
            { key: "Volume", value: "50ml" },
            { key: "Skin Type", value: "Normal Skin" },
            { key: "Texture", value: "Cream" }
        ],
        price: 499,
        currency: "INR",
        discount: 10,
        isAvailable: true
    },

    // 7. Toys & Games
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b05"),
        name: "Building Blocks Set",
        description: "Creative building block set for kids to develop imagination.",
        imageUrl: [
            "https://images.unsplash.com/photo-1587654780291-39c9404d746b"
        ],
        specification: [
            { key: "Pieces", value: "500" },
            { key: "Age Group", value: "6+ Years" },
            { key: "Material", value: "ABS Plastic" }
        ],
        price: 1299,
        currency: "INR",
        discount: 10,
        isAvailable: true
    },
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b05"),
        name: "Remote Control Racing Car",
        description: "High-speed remote control racing car for indoor and outdoor fun.",
        imageUrl: [
            "https://images.unsplash.com/photo-1594787318286-3d835c1d207f"
        ],
        specification: [
            { key: "Battery", value: "Rechargeable" },
            { key: "Control", value: "Remote Control" },
            { key: "Age Group", value: "8+ Years" }
        ],
        price: 1899,
        currency: "INR",
        discount: 12,
        isAvailable: true
    },

    // 8. Grocery
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b06"),
        name: "Organic Almonds",
        description: "Premium quality almonds suitable for daily healthy snacking.",
        imageUrl: [
            "https://images.unsplash.com/photo-1508061253366-f7da158b6d46"
        ],
        specification: [
            { key: "Weight", value: "500g" },
            { key: "Type", value: "Organic" },
            { key: "Packaging", value: "Resealable Pack" }
        ],
        price: 599,
        currency: "INR",
        discount: 5,
        isAvailable: true
    },
    {
        categoryId: ObjectId("6af72e6ef9a3d8e82afd4b06"),
        name: "Organic Honey",
        description: "Natural organic honey for everyday consumption.",
        imageUrl: [
            "https://images.unsplash.com/photo-1587049352851-8d4e89133924"
        ],
        specification: [
            { key: "Weight", value: "500g" },
            { key: "Type", value: "Organic Honey" },
            { key: "Packaging", value: "Glass Jar" }
        ],
        price: 349,
        currency: "INR",
        discount: 8,
        isAvailable: true
    }
]
)