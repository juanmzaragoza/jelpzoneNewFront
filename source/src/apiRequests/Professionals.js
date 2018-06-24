import axios from 'axios';
//import { API_URL } from './config'

export const getProfessionalsRequest = async () => {

  const URI = REACT_APP_API_URL + 'Users';
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

export const getProfessionalsByIdRequest = async ( id ) => {
  const URI = REACT_APP_API_URL + 'Professions/'+ id + '/users';
  console.log(URI);
  return axios.get(URI,
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
