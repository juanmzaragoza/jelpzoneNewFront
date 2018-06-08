import axios from 'axios';

import { API_URL } from './config'

export const getUserByIdRequest = ( userId , token) => {
  const URI = API_URL + 'Users/' + userId + '?access_token=' + token;
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

export const signInUserWithEmailPasswordRequest = ( credentials ) => {
	const URI = API_URL + 'Users/login';
	return axios.post(URI, 
			{
      	'email': credentials.username,
      	'password': credentials.password,
      },
			{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    ).then(response => response.data)
    .catch(error => error.response.data);
}

export const createUserWithEmailPasswordRequest = async ( signupUser ) => {
  const URI = API_URL + 'Users';
  return axios.post(URI, 
      {
        'firstName': signupUser.firstName,
        'lastName': signupUser.lastName,
        'email': signupUser.email,
        'password': signupUser.password,
        'professional': signupUser.isProfessional,
        'address': signupUser.address,
        'city': signupUser.city,
        'country': signupUser.country,
        'phoneNumber': signupUser.phoneNumber,
        'frontPicture': signupUser.frontPicture,
        'backPicture': signupUser.backPicture,
        'location': signupUser.location,
      },
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    ).then(response => response.data)
    .catch(error => error.response.data);
}