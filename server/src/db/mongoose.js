const mongoose = require("mongoose")

const connectDatabase = async () => {
  const url = process.env.MONGODB_URL

  if (!url) {
    throw new Error("MONGODB_URL is missing!")
  }

  await mongoose.connect(url)
  console.log("MongoDB connected!")
}

module.exports = connectDatabase
