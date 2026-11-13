import mongoose, { Schema } from "mongoose"

const categorySchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }

})

export const Category = mongoose.model("Category", categorySchema)

// insert category

db.category.insertMany([
  {
    slug: "electronics",
    name: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661"
  },
  {
    slug: "fashion",
    name: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050"
  },
  {
    slug: "home-kitchen",
    name: "Home & Kitchen",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
  },
  {
    slug: "sports-fitness",
    name: "Sports & Fitness",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
  },
  {
    slug: "books",
    name: "Books",
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
  },
  {
    slug: "beauty-personal-care",
    name: "Beauty & Personal Care",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
  },
  {
    slug: "toys-games",
    name: "Toys & Games",
    imageUrl: "https://images.unsplash.com/photo-1558060370-d644479cb6f7"
  },
  {
    slug: "grocery",
    name: "Grocery",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e"
  }
])