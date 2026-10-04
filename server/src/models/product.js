const mongoose = require("mongoose")

const stockAdjustmentSchema = new mongoose.Schema(
  {
    change: {
      type: Number,
      required: true,
    },
    reason: {
      type: String,
      required: true,
      trim: true,
    },
    adjustedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false },
)

const productSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    minStock: {
      type: Number,
      default: 0,
      min: 0,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    stockAdjustments: {
      type: [stockAdjustmentSchema],
      default: [],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model("Product", productSchema)
