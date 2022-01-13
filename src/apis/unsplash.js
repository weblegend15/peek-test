import axios from "axios";
import { UNSPLASH_ACCESS_KEY, UNSPLASH_API_URL } from "../constants/variables";
export const fetchRandomBgImage = async () => {
  const options = {
    method: 'GET',
    url: `${UNSPLASH_API_URL}/photos/random`,
    params: {
      client_id: UNSPLASH_ACCESS_KEY
    }
  };

  const result = await axios.request(options);
  return result.data;
}