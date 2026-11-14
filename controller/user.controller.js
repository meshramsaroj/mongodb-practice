import { Address } from "../Schema/address.model"

export const getUserSpecificAddress = async (req, res) => {
    try {
        const { userId } = req.params

        const addresses = await Address.aggregate([
            { $match: { userId: userId } },
            {
                $lookup: {
                    from: "User",
                    localField: "userId",
                    foreignField: "_id",
                    as: "userDetails"
                }
            },
            {
                $unwind: {
                    path: "$userDetails"
                }
            },
            {
                $group: {
                    _id: "$userId",
                    userDetails: "$userDetails",
                    addresses: {
                        $push: {
                            _id: "$_id",
                            addressLine1: "$addressLine1",
                            addressLine2: "$addressLine2",
                            country: "$country",
                            state: "$state",
                            city: "$city",
                            pincode: "$pincode",
                            contactNumber: "$contactNumber"
                        }
                    }

                },

            }
        ])

        res.status(200).json({
            data: addresses,
            message: "success"
        })

    } catch (error) {

    }
}