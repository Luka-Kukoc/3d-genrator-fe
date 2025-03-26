import axios from "axios";

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = "http://localhost:3000";

export const getProductsWithPagination = async (
  limit: number,
  page: number
) => {
  try {
    const response = await axios.get(
      `${apiUrl}/products?limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting products:", error);
    return [];
  }
};
