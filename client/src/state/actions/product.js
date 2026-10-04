import axios from "axios"

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5050"

export const loadProducts = () => async (dispatch) => {
  dispatch({ type: "SET_PRODUCT_LOADING", data: true })
  dispatch({ type: "SET_PRODUCT_ERROR", data: "" })

  try {
    const response = await axios.get(`${apiUrl}/products`)
    dispatch({ type: "SET_PRODUCTS", data: response.data })
  } catch (error) {
    dispatch({
      type: "SET_PRODUCT_ERROR",
      data: error.response?.data?.message || "Could not load products",
    })
  } finally {
    dispatch({ type: "SET_PRODUCT_LOADING", data: false })
  }
}

export const adjustStock =
  ({ sku, change, reason }) =>
  async (dispatch) => {
    /*
     * CANDIDATE TODO
     *
     * The UI has separate Add stock / Remove stock actions.
     * It passes `change` as a positive integer for add, or a negative
     * integer for remove.
     *
     * Call PATCH /product/:sku/stock and update Redux with the
     * returned product. See ASSESSMENT.md for the full requirements.
     */
    dispatch({
      type: "SET_PRODUCT_ERROR",
      data: "Stock update has not been implemented",
    })
    return false
  }
