import axios from "axios";
import { Product } from "../pages/Upload";

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = "http://localhost:3000";

export const saveProducts = async (products: Array<Product>) => {
  try {
    const response = await axios.post(`${apiUrl}/save-products`, { products });
    return response.data;
  } catch (error) {
    console.error("Error saving products:", error);
    return [];
  }
};
