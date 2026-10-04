const initialState = {
  products: [],
  loading: false,
  error: "",
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.data,
      }
    case "SET_PRODUCT_LOADING":
      return {
        ...state,
        loading: action.data,
      }
    case "SET_PRODUCT_ERROR":
      return {
        ...state,
        error: action.data,
      }
    case "ADJUST_STOCK_SUCCESS":
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.data._id ? action.data : product
        ),
      }
    default:
      return state
  }
}

export default productReducer
