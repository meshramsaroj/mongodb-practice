
/* Task 1:

Write an aggregation query to:
1. Group product by categoryId.
2. Calculate total product per category.
3. Calculate total product amount per category.
4. Calculate average product price value.
5. Most expensive product. ($max: "product.price")
6. Cheapest product. {$min: "product.price"}
7. Products with price greater than ₹5,000. 

*/

db.category.aggregate([
    {
        // Get product details from product table based on category id
        $lookup: {
            from: "product",
            localField: "_id",
            foreignField: "categoryId",
            as: "products"
        }
    },
    {
        // send only selected details
        $project: {
            _id: 1,
            categoryName: "$name",
            productCount: { $size: "$products" }, // size of product array or product count
            totalProductAmount: { $sum: "$products.price" }, // calculate total product amount based on price
            avgPrice: { $avg: "$products.price" } // average price of product
        }
    },
    {
        $limit: 2 // only 2 document will send
    }
])



//

db.product.aggregate([
  {
    $group: {
      _id: "$categoryId",  // group by category id
      totalPrice: {$sum: "$price"},
      avgPrice: {$avg: "$price"}
    }
  },
  {
    $limit: 2
  }
])