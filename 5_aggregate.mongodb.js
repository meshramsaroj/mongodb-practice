use("ecommerce")

// db.products.aggregate([
//     {
//         $match: {
//             category: "Electronics"
//         }
//     },
//     {
//         $group: {
//             _id: "$category",
//             totalStock: { $sum: "$stock" },
//             averagePrice: { $avg: "$price" }
//         }
//     }
// ])

// db.products.aggregate([
//     {
//         $match: { category: "Electronics" }
//     },
//     {
//         $project: {
//             _id: 0,
//             name: 1,
//             price: 1,
//             category: 1,
//             stock: 1,
//         }
//     },
// ])


db.orders.aggregate([
    {
        $match: {user:"John Doe" }
    },
{
    $lookup: {
        from: 'products',
        localField: 'products.name', // another table field name
        foreignField: 'name',
        as: 'productDetails',
        pipeline: [
            {$match: {name: {$in: ["Wireless Mouse"]}}},
            {
                $project: {
                    _id: 0,
                    name: 1,
                    price: 1,
                    category: 1,
                    stock: 1
                }
            }
        ]
    }
},
{
    $project: {
        _id: 0,
        user: 1,
        products: 1,
        productDetails: 1
        }
    }
]).explain("executionStats")