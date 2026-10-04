import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { adjustStock, loadProducts } from "../state/actions/product"

const InventoryPage = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.product)
  const [sku, setSku] = useState("")
  const [mode, setMode] = useState("add")
  const [quantity, setQuantity] = useState("")
  const [reason, setReason] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  useEffect(() => {
    if (!sku && products.length) {
      setSku(products[0].sku)
    }
  }, [products, sku])

  const submitStockChange = async (event) => {
    event.preventDefault()
    setSuccess("")

    const amount = Number(quantity)
    const change = mode === "add" ? amount : -amount

    const completed = await dispatch(
      adjustStock({
        sku,
        change,
        reason,
      }),
    )

    if (completed) {
      setQuantity("")
      setReason("")
      setSuccess(
        mode === "add"
          ? "Stock added successfully"
          : "Stock removed successfully",
      )
    }
  }

  return (
    <main className="container py-4">
      <div className="mb-4">
        <p className="text-uppercase text-secondary small mb-1">
          Gunda Power ERP
        </p>
        <h1 className="h3">Inventory Stock Management</h1>
        <p className="text-secondary mb-0">
          Associate Software Engineer on-site assessment
        </p>
      </div>

      <div className="row g-4">
        <section className="col-lg-8">
          <div className="card">
            <div className="card-header fw-semibold">Current stock</div>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr>
                    <th>SKU</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th className="text-end">Stock</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => {
                    const lowStock = product.stock <= product.minStock
                    return (
                      <tr key={product._id}>
                        <td className="font-monospace">{product.sku}</td>
                        <td>{product.productName}</td>
                        <td>{product.category}</td>
                        <td className="text-end fw-semibold">
                          {product.stock}
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              lowStock ? "text-bg-warning" : "text-bg-success"
                            }`}
                          >
                            {lowStock ? "Low stock" : "Available"}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="col-lg-4">
          <form className="card" onSubmit={submitStockChange}>
            <div className="card-header fw-semibold">
              {mode === "add" ? "Add stock" : "Remove stock"}
            </div>
            <div className="card-body">
              <div className="btn-group w-100 mb-3" role="group">
                <button
                  type="button"
                  className={`btn ${
                    mode === "add" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => {
                    setMode("add")
                    setSuccess("")
                  }}
                >
                  Add stock
                </button>
                <button
                  type="button"
                  className={`btn ${
                    mode === "remove" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => {
                    setMode("remove")
                    setSuccess("")
                  }}
                >
                  Remove stock
                </button>
              </div>

              <label className="form-label" htmlFor="sku">
                Product
              </label>
              <select
                id="sku"
                className="form-select mb-3"
                value={sku}
                onChange={(event) => setSku(event.target.value)}
                required
              >
                {products.map((product) => (
                  <option key={product._id} value={product.sku}>
                    {product.sku} — {product.productName}
                  </option>
                ))}
              </select>

              <label className="form-label" htmlFor="quantity">
                Quantity
              </label>
              <input
                id="quantity"
                className="form-control mb-1"
                type="number"
                min="1"
                step="1"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                placeholder="Example: 5"
                required
              />
              <div className="form-text mb-3">
                Enter a positive quantity. The form will{" "}
                {mode === "add" ? "add" : "remove"} this amount.
              </div>

              <label className="form-label" htmlFor="reason">
                Reason
              </label>
              <input
                id="reason"
                className="form-control mb-3"
                value={reason}
                onChange={(event) => setReason(event.target.value)}
                placeholder={
                  mode === "add" ? "Goods received" : "Customer order"
                }
                required
              />

              {error && <div className="alert alert-danger py-2">{error}</div>}
              {success && (
                <div className="alert alert-success py-2">{success}</div>
              )}

              <button
                className="btn btn-primary w-100"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Saving..."
                  : mode === "add"
                    ? "Add stock"
                    : "Remove stock"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default InventoryPage
