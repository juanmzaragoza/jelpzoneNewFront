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

export const getProfessionalsFilterRequest = async ( filters ) => { 
  const URI = REACT_APP_API_URL + 'Users/getNearbyLocation'; 
  return axios.get(URI+'?lat='+filters.lat+'&lng='+filters.lng+'&distance='+filters.distance, 
      { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json' 
      } 
    ).then(response => {

      console.log(response.data.Users);
      return response.data.Users; 
    }) 
    .catch(error => { 
      console.log(error) 
      return error.response.data; 
    }); 
     
} 