import axios from "axios";
import {
  RAPID_API_URI,
  RAPID_API_KEY,
  RAPID_API_HOST
} from "../constants/variables";

export const fetchRandomQuotes = async () => {
  const options = {
    method: 'GET',
    url: `${RAPID_API_URI}/quotes/random/`,
    headers: {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': RAPID_API_HOST,
      useQueryString: true
    }
  };

  const result = await axios.request(options);
  return result.data;
}