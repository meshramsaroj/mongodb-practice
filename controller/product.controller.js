
const getCatgoryAndProductInfo = async (req, res) => {
    try {
        const { categoryId } = req.params
        const product = await db.product.aggregate([
            { $match: { categoryId: ObjectId(categoryId) } },
            {
                $lookup: {
                    from: "category",
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "categoryDetails"
                }
            },
            {
                $unwind: {
                    path: "$categoryDetails"
                }
            },
            {
                $group: {
                    _id: "$categoryId",
                    categoryDetails: { $first: "$categoryDetails" },
                    products: {
                        $push: {
                            name: "$name",
                            description: "$description",
                            price: "$price"
                        }
                    }
                }
            }
        ])
        return res.status(200).json({
            success: true,
            data: product
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}