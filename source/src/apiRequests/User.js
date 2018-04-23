import axios from 'axios';

const API_URL = 'http://localhost:4000/api/';

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
    .catch(error => error);
}