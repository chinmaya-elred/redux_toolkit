import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from './productSlice';

export const fetchProducts = () => async dispatch => {
  try {
    dispatch(fetchProductsStart());
    // Perform API call to fetch products
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
