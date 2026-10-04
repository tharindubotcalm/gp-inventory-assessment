const express = require("express")
const Product = require("../models/product")

const router = new express.Router()

// Similar to the GP ERP, products are addressed by SKU.
router.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find({ deleted: { $ne: true } }).sort({
      sku: 1,
    })
    res.send(products)
  } catch (error) {
    next(error)
  }
})

router.patch("/product/:sku/stock", async (req, res, next) => {
  /*
   * CANDIDATE TODO
   *
   * Implement add/remove stock as described in ASSESSMENT.md.
   * The UI sends a positive `change` for Add stock and a negative
   * `change` for Remove stock.
   *
   * Request body examples:
   * { change: 5, reason: "Goods received" }
   * { change: -4, reason: "Customer order" }
   */
  res.status(501).send({
    message: "Stock update has not been implemented",
  })
})

module.exports = router
