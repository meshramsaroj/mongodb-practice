/*
Task 3:

1. fetch products based on categoryId
2. send selected data like name , price and id from fetched prodcuts
3. calculate total products
4. calculat total product amount
5. get filter product which price > 1000
6. finaly return categoryName, totalProducts, totalProductAmount, filter product


*/

use("e-commerce")

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
    $project: {
      categoryName: "$name",
      totalProducts: {$size: "$products"},
      totalProductAmount: {$sum: "$products.price"},
      products: {
        $filter: {
          input: "$products",
          as: "product",
          cond: {
            $gt: ["$$product.price", 1000]
          }
        }
      }
    }
  },
  
  {
    $limit: 2
  }
])


/*
output

[
{
  _id: ObjectId('6af72e6ef9a3d8e82afd4aff'),
  categoryName: 'Electronics',
  totalProducts: 2,
  totalProductAmount: 128899,
  products: [
    {
      _id: ObjectId('6af72f44f9a3d8e82afd4b07'),
      name: 'iPhone 16 Pro',
      price: 119900
    },
    {
      _id: ObjectId('6af73093f9a3d8e82afd4b08'),
      name: 'Sony Wireless Headphones',
      price: 8999
    }
  ]
},
{
  _id: ObjectId('6af72e6ef9a3d8e82afd4b00'),
  categoryName: 'Fashion',
  totalProducts: 2,
  totalProductAmount: 2798,
  products: [
    {
      _id: ObjectId('6af73093f9a3d8e82afd4b0a'),
      name: "Women's Denim Jacket",
      price: 1999
    }
  ]
}
]

*/