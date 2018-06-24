import axios from 'axios';
// import { API_URL } from './config'

export const getProfessionsRequest = async () => {

	const URI = REACT_APP_API_URL + 'Professions';
  return axios.get(URI, 
      {},
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
