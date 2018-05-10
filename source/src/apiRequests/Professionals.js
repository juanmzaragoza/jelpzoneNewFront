import axios from 'axios';
import { API_URL } from './config'

export const getProfessionalsRequest = async () => {

	const URI = API_URL + 'Users';
  return axios.get(URI, 
      { params: { filter: "{\"include\": \"professions\"}" } },
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    ).then(response => response.data)
    .catch(error => {
      console.log(error)
      return error.response.data;
    });

}
