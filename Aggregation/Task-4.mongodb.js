/* 
Task:
1. Group products by categoryId.
2. Count products in each category.
3. Calculate average product price.
4. Find maximum and minimum product price.
5. Calculate total available stock.
*/

use("e-commerce")

db.product.aggregate([
    {
        $set: {
            stock: 10
        }
    },
    {
        $group: {
            _id: "$categoryId",
            totalStock: {$sum: "$stock"},
            totalProduct: { $sum: 1 },  // product array count
            average: { $avg: "$price" },
            max: { $max: "$price" },
            min: { $min: "$price" },

        }
    },
    { $limit: 2 }
])