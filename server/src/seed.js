const path = require("path")
require("dotenv").config({ path: path.join(__dirname, "../.env") })

const mongoose = require("mongoose")
const connectDatabase = require("./db/mongoose")
const Product = require("./models/product")

const products = [
  {
    sku: "INV-5K-001",
    productName: "5kW Hybrid Inverter",
    category: "Solar Inverter",
    stock: 8,
    minStock: 3,
  },
  {
    sku: "BAT-48V-100",
    productName: "48V Lithium Battery",
    category: "Batteries",
    stock: 3,
    minStock: 4,
  },
  {
    sku: "PV-550W-001",
    productName: "550W Solar Panel",
    category: "PV Modules",
    stock: 24,
    minStock: 10,
  },
  {
    sku: "WIFI-DONGLE",
    productName: "Inverter WiFi Dongle",
    category: "Accessories",
    stock: 0,
    minStock: 5,
  },
]

const seed = async () => {
  await connectDatabase()
  await Product.deleteMany({})
  await Product.insertMany(products)
  console.log(`Seeded ${products.length} products`)
  await mongoose.disconnect()
}

seed().catch(async (error) => {
  console.error(error)
  await mongoose.disconnect()
  process.exit(1)
})
