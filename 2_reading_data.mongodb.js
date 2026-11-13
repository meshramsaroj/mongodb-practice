
use("ecommerce")

// db.products.find({
//     name: {
//         $regex: "wireless",
//         $options: "i"
//     }
// })

// db.products.find({
//     category: "Electronics"
// })

// db.products.find({
//     price: { $gte: 500, $lte: 5000}
// })

// db.products.find({
//     $or: [{
//         category: "Electronics"
//     },
//     { price: { $gte: 5000 } }]
// })

// to get only perticular fields in the result set we can use projection
// db.products.find({}, {name:1, price:1, _id:0, category:1})

// pagination
db.products.find().skip(5).limit(10)

// Sort 
// Ascending order
// db.products.find().sort({name: 1})

// Descending order
// db.products.find().sort({name: -1})