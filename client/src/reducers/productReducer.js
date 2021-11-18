export const getAllProductsReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false
      };

    case "GET_PRODUCTS_FAILED":
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export const getProductByIdReducer = (state = {product: []}, action) => {
  switch (action.type) {
    case "GET_PRODUCTBYID_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "GET_PRODUCTBYID_SUCCESS":
      return {
        ...state,
        product: action.payload,
        loading: false
      };

    case "GET_PRODUCTBYID_FAILED":
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state
  }
};

export const addProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_REVIEW_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "ADD_PRODUCT_REVIEW_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true
      };

    case "ADD_PRODUCT_REVIEW_FAILED":
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "DELETE_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true
      };

    case "DELETE_PRODUCTS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state
  }
};

export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "ADD_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true
      };

    case "ADD_PRODUCTS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state
  }
};

export const updateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT_REQUEST":
      return {
        ...state,
        uploading: true
      };

    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        uploading: false,
        success: true
      };

    case "UPDATE_PRODUCT_FAILED":
      return {
        ...state,
        uploading: false,
        uperror: action.payload
      };
    default:
      return state
  }
};
