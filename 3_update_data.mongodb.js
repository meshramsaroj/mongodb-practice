use('ecommerce');


// Update a single document
// db.products.updateOne(
//     { name: "Wireless Mouse" }, // selector 
//     {
//         $set: {
//             price: 1500, // update data which we want to update
//             stock: 140
//         },
//     },
//     { new: true } // return the updated document
// )


// db.products.updateMany(
//     {category: "Electronics"}, // selector
//     {$inc: {stock: 10}}, // update stock by 10 for all products in Electronics category
// )

// add single tag element
// db.products.updateOne(
//     {name: "Wireless Mouse"},
//     {$push: {tags: "bluetooth"}} // add multiple tags elements
// )

// // add multiple tag elements
// db.products.updateOne(
//     {name: "Wireless Mouse"},
//     {$push: {tags:{$each:  ["wired1", "wired2"]}}} // add multiple tags elements
// )

// Remove a single tag element
db.products.updateOne(
    {name: "Wireless Mouse"},
    {$pull: {tags: "wired1"}} // remove a tag element
)

// Remove multiple tag elements
db.products.updateOne(
    {name: "Wireless Mouse"},
    {$pull: {tags: {$in: ["wired1", "wired2"]}}} // remove multiple tag elements
)
