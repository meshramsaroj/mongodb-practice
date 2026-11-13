// use ecommerce

use('ecommerce')

db.dropDatabase()

db.products.insertMany([
  {
    _id: ObjectId('6a87e5881ac4bf89ba8bdae9'),
    name: 'Mechanical Keyboard',
    price: NumberInt('2499'),
    category: 'Electronics',
    stock: NumberInt('80'),
    ratings: Double('4.8'),
    tags: ['keyboard', 'mechanical'],
    createdAt: ISODate('2026-08-21T05:43:36.600Z')
  },
  {
    name: 'Wireless Mouse',
    price: NumberInt('1299'),
    category: 'Electronics',
    stock: NumberInt('120'),
    ratings: Double('4.5'),
    tags: ['mouse', 'wireless'],
    createdAt: ISODate('2026-08-20T08:20:15.300Z')
  },
  {
    name: 'Gaming Headset',
    price: NumberInt('3499'),
    category: 'Electronics',
    stock: NumberInt('65'),
    ratings: Double('4.7'),
    tags: ['headset', 'gaming'],
    createdAt: ISODate('2026-08-19T10:15:22.100Z')
  },
  {
    name: 'USB-C Hub',
    price: NumberInt('1799'),
    category: 'Electronics',
    stock: NumberInt('95'),
    ratings: Double('4.4'),
    tags: ['usb', 'hub'],
    createdAt: ISODate('2026-08-18T06:30:45.500Z')
  },
  {
    name: 'Bluetooth Speaker',
    price: NumberInt('2999'),
    category: 'Electronics',
    stock: NumberInt('70'),
    ratings: Double('4.6'),
    tags: ['speaker', 'bluetooth'],
    createdAt: ISODate('2026-08-17T09:45:12.200Z')
  },
  {
    name: 'Laptop Stand',
    price: NumberInt('1599'),
    category: 'Accessories',
    stock: NumberInt('110'),
    ratings: Double('4.3'),
    tags: ['laptop', 'stand'],
    createdAt: ISODate('2026-08-16T11:20:33.700Z')
  },
  {
    name: 'Webcam HD',
    price: NumberInt('2299'),
    category: 'Electronics',
    stock: NumberInt('55'),
    ratings: Double('4.5'),
    tags: ['webcam', 'camera'],
    createdAt: ISODate('2026-08-15T07:10:18.900Z')
  },
  {
    name: 'Gaming Monitor',
    price: NumberInt('18999'),
    category: 'Electronics',
    stock: NumberInt('25'),
    ratings: Double('4.9'),
    tags: ['monitor', 'gaming'],
    createdAt: ISODate('2026-08-14T12:40:55.400Z')
  },
  {
    name: 'Wireless Charger',
    price: NumberInt('999'),
    category: 'Accessories',
    stock: NumberInt('150'),
    ratings: Double('4.2'),
    tags: ['charger', 'wireless'],
    createdAt: ISODate('2026-08-13T05:35:20.600Z')
  },
  {
    name: 'Power Bank',
    price: NumberInt('1999'),
    category: 'Electronics',
    stock: NumberInt('90'),
    ratings: Double('4.6'),
    tags: ['powerbank', 'portable'],
    createdAt: ISODate('2026-08-12T08:25:44.300Z')
  },
  {
    name: 'Running Shoes',
    price: NumberInt('3499'),
    category: 'Footwear',
    stock: NumberInt('75'),
    ratings: Double('4.5'),
    tags: ['shoes', 'running'],
    createdAt: ISODate('2026-08-11T10:30:12.800Z')
  },
  {
    name: 'Casual Sneakers',
    price: NumberInt('2799'),
    category: 'Footwear',
    stock: NumberInt('60'),
    ratings: Double('4.4'),
    tags: ['sneakers', 'casual'],
    createdAt: ISODate('2026-08-10T06:15:36.500Z')
  },
  {
    name: 'Leather Wallet',
    price: NumberInt('899'),
    category: 'Accessories',
    stock: NumberInt('130'),
    ratings: Double('4.3'),
    tags: ['wallet', 'leather'],
    createdAt: ISODate('2026-08-09T09:40:25.100Z')
  },
  {
    name: 'Smart Watch',
    price: NumberInt('5999'),
    category: 'Electronics',
    stock: NumberInt('45'),
    ratings: Double('4.7'),
    tags: ['watch', 'smartwatch'],
    createdAt: ISODate('2026-08-08T11:50:42.900Z')
  },
  {
    name: 'Fitness Band',
    price: NumberInt('2499'),
    category: 'Electronics',
    stock: NumberInt('85'),
    ratings: Double('4.2'),
    tags: ['fitness', 'band'],
    createdAt: ISODate('2026-08-07T07:25:19.400Z')
  },
  {
    name: 'Coffee Maker',
    price: NumberInt('4499'),
    category: 'Home Appliances',
    stock: NumberInt('35'),
    ratings: Double('4.6'),
    tags: ['coffee', 'appliance'],
    createdAt: ISODate('2026-08-06T05:55:30.700Z')
  },
  {
    name: 'Electric Kettle',
    price: NumberInt('1899'),
    category: 'Home Appliances',
    stock: NumberInt('100'),
    ratings: Double('4.5'),
    tags: ['kettle', 'kitchen'],
    createdAt: ISODate('2026-08-05T08:10:14.200Z')
  },
  {
    name: 'Air Fryer',
    price: NumberInt('6999'),
    category: 'Home Appliances',
    stock: NumberInt('40'),
    ratings: Double('4.8'),
    tags: ['airfryer', 'kitchen'],
    createdAt: ISODate('2026-08-04T10:45:28.600Z')
  },
  {
    name: 'Backpack',
    price: NumberInt('2199'),
    category: 'Bags',
    stock: NumberInt('95'),
    ratings: Double('4.4'),
    tags: ['backpack', 'travel'],
    createdAt: ISODate('2026-08-03T06:35:45.800Z')
  },
  {
    name: 'Travel Bag',
    price: NumberInt('2999'),
    category: 'Bags',
    stock: NumberInt('50'),
    ratings: Double('4.5'),
    tags: ['travel', 'bag'],
    createdAt: ISODate('2026-08-02T09:15:22.500Z')
  },
  {
    name: 'Office Chair',
    price: NumberInt('8999'),
    category: 'Furniture',
    stock: NumberInt('30'),
    ratings: Double('4.7'),
    tags: ['chair', 'office'],
    createdAt: ISODate('2026-08-01T11:05:38.100Z')
  },
  {
    name: 'Study Table',
    price: NumberInt('7499'),
    category: 'Furniture',
    stock: NumberInt('25'),
    ratings: Double('4.5'),
    tags: ['table', 'study'],
    createdAt: ISODate('2026-07-31T07:45:16.300Z')
  },
  {
    name: 'LED Desk Lamp',
    price: NumberInt('1299'),
    category: 'Home Decor',
    stock: NumberInt('140'),
    ratings: Double('4.3'),
    tags: ['lamp', 'led'],
    createdAt: ISODate('2026-07-30T05:20:40.900Z')
  },
  {
    name: 'Water Bottle',
    price: NumberInt('699'),
    category: 'Lifestyle',
    stock: NumberInt('200'),
    ratings: Double('4.6'),
    tags: ['bottle', 'water'],
    createdAt: ISODate('2026-07-29T08:55:12.400Z')
  },
  {
    name: 'Yoga Mat',
    price: NumberInt('999'),
    category: 'Fitness',
    stock: NumberInt('125'),
    ratings: Double('4.5'),
    tags: ['yoga', 'fitness'],
    createdAt: ISODate('2026-07-28T10:10:35.700Z')
  },
  {
    name: 'Dumbbell Set',
    price: NumberInt('3999'),
    category: 'Fitness',
    stock: NumberInt('45'),
    ratings: Double('4.7'),
    tags: ['dumbbell', 'workout'],
    createdAt: ISODate('2026-07-27T06:40:25.500Z')
  },
  {
    name: 'Bluetooth Earbuds',
    price: NumberInt('2499'),
    category: 'Electronics',
    stock: NumberInt('100'),
    ratings: Double('4.6'),
    tags: ['earbuds', 'bluetooth'],
    createdAt: ISODate('2026-07-26T09:30:18.200Z')
  },
  {
    name: 'Smartphone Stand',
    price: NumberInt('599'),
    category: 'Accessories',
    stock: NumberInt('180'),
    ratings: Double('4.1'),
    tags: ['phone', 'stand'],
    createdAt: ISODate('2026-07-25T11:15:42.600Z')
  },
  {
    name: 'HDMI Cable',
    price: NumberInt('799'),
    category: 'Electronics',
    stock: NumberInt('160'),
    ratings: Double('4.4'),
    tags: ['hdmi', 'cable'],
    createdAt: ISODate('2026-07-24T07:35:29.300Z')
  },
  {
    name: 'External SSD 1TB',
    price: NumberInt('8499'),
    category: 'Storage',
    stock: NumberInt('35'),
    ratings: Double('4.9'),
    tags: ['ssd', 'storage'],
    createdAt: ISODate('2026-07-23T05:50:14.800Z')
  },
  {
    name: 'Wireless Router',
    price: NumberInt('3299'),
    category: 'Networking',
    stock: NumberInt('55'),
    ratings: Double('4.6'),
    tags: ['router', 'wifi'],
    createdAt: ISODate('2026-07-22T08:45:36.100Z')
  }
])


// insert contacts data
db.contacts.insertMany([
  {
    _id: ObjectId('6a87efefca6e77220eb8ad01'),
    name: 'Alice',
    message: 'I want to check my order status.',
    phone: '9876543210',
    createdAt: ISODate('2026-08-21T06:30:15.100Z')
  },
  {
    _id: ObjectId('6a87efefca6e77220eb8ad02'),
    name: 'Bob',
    message: 'My order has not arrived yet.',
    phone: '9988771122',
    createdAt: ISODate('2026-08-21T06:35:22.450Z')
  },
  {
    _id: ObjectId('6a87efefca6e77220eb8ad03'),
    name: 'David',
    message: 'I received the wrong product.',
    phone: '9876123456',
    createdAt: ISODate('2026-08-21T06:40:18.200Z')
  },
  {
    _id: ObjectId('6a87efefca6e77220eb8ad04'),
    name: 'Emma',
    message: 'I want to return my product.',
    phone: '9123456789',
    createdAt: ISODate('2026-08-21T06:45:30.750Z')
  },
  {
    _id: ObjectId('6a87efefca6e77220eb8ad05'),
    name: 'Frank',
    message: 'Can you tell me the delivery date?',
    phone: '9988112233',
    createdAt: ISODate('2026-08-21T06:50:12.350Z')
  },
  {
    _id: ObjectId('6a87efefca6e77220eb8ad06'),
    name: 'Grace',
    message: 'I received a damaged product.',
    phone: '9877001122',
    createdAt: ISODate('2026-08-21T06:55:45.900Z')
  },
  {
    _id: ObjectId('6a87efefca6e77220eb8ad07'),
    name: 'Henry',
    message: 'I want to change my delivery address.',
    phone: '9012345678',
    createdAt: ISODate('2026-08-21T07:00:20.600Z')
  },
  {
    _id: ObjectId('6a87efefca6e77220eb8ad08'),
    name: 'Irene',
    message: 'I have not received my refund.',
    phone: '9898989898',
    createdAt: ISODate('2026-08-21T07:05:35.250Z')
  },
  {
    _id: ObjectId('6a87efefca6e77220eb8ad09'),
    name: 'Jack',
    message: 'Can I modify my order?',
    phone: '9765432109',
    createdAt: ISODate('2026-08-21T07:10:48.800Z')
  },
  {
    _id: ObjectId('6a87efefca6e77220eb8ad10'),
    name: 'Karen',
    message: 'I want to know about your return policy.',
    phone: '9556677889',
    createdAt: ISODate('2026-08-21T07:15:10.450Z')
  }
])

db.orders.insertMany([
    {
        orderId: "ORD001",
        user: "John Doe",
        products: [
            { name: "Wireless Mouse", quantity: 1, price: 799 },
            { name: "Mechanical Keyboard", quantity: 1, price: 2499 }
        ],
        total: 3298,
        status: "Delivered",
        createdAt: new Date()
    },
    {
        orderId: "ORD002",
        user: "Jane Smith",
        products: [
            { name: "Gaming Laptop", quantity: 1, price: 85999 }
        ],
        total: 85999,
        status: "Pending",
        createdAt: new Date()
    }
])


