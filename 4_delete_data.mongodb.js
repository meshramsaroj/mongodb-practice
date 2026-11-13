use("ecommerce");

// delete a single document with a specific name
db.contacts.deleteOne({
    name: "Alice"
})

// delete multiple documents with a specific name
db.contacts.deleteMany({
    name: {
        $in: ["Jack", "Karen"]
    }
})