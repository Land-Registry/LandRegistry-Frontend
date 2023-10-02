import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Update with your API base URL

export async function createAuction(data) {
    console.log(data)
  try {
    const response = await axios.post(`${API_BASE_URL}/auction`, data);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}
