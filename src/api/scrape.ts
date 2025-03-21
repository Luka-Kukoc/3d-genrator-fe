import axios from "axios";

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = "http://localhost:3000";

export const scrapeProducts = async (url: string) => {
  try {
    const response = await axios.post(`${apiUrl}/scrape`, { url });
    return response.data;
  } catch (error) {
    console.error("Error scraping data:", error);
    return [];
  }
};
