/* Task
1. get products
2. return name and price only
3. filter product price greater than 1000

*/


db.category.aggregate([
  {$lookup: {
    from: "product",
    localField: "_id",
    foreignField: "categoryId",
    as: "products",
    pipeline: [
      {
        $project: {
          _id: 1,
          name: 1,
          price: 1
        }
      }
    ]
  }
  },
  
  {
    $limit: 2
  }
])