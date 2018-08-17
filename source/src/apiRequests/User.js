import axios from 'axios';
// import { API_URL } from './config'

export const getUserByIdRequest = ( userId ) => {
  const URI = REACT_APP_API_URL + 'Users/' + userId;
  return axios.get(URI, 
      { params: { include: 'projects' } },
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
	const URI = REACT_APP_API_URL + 'Users/login';
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
  const URI = REACT_APP_API_URL + 'Users';
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

export const patchUserInformationRequest = async ( userId, signupUser ) => {
  const URI = REACT_APP_API_URL + 'Users/' + userId;
  return axios.patch(URI, 
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
        //'frontPicture': signupUser.frontPicture,
        //'backPicture': signupUser.backPicture,
        //'location': signupUser.location,
      },
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    ).then(response => {
      return response.data;
    })
    .catch(error => error.response.data);
} 