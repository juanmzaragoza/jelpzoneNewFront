import axios from 'axios';
import { getItem } from 'util/ApplicationStorage';

export const getProjectsByUserIdRequest = async ( userId ) => {
  const URI = REACT_APP_API_URL + 'Projects';
  return axios.get(URI, 
      { params: { filter: '{"extUserId": "'+userId+'"}' } },
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    ).then(response => response.data)
    .catch(error => error.response.data);
}

export const postNewProjectRequest = async ( projectInformation ) => {
  const URI = REACT_APP_API_URL + 'Projects'+'?access_token='+getItem('token');
  const date = new Date();
  return axios.post(URI, 
      {
        'title': projectInformation.title,
        'description': projectInformation.description,
        'privacy': projectInformation.privacy,
        'createdDate': date.toISOString(),
        'lastUpdatedDate': date.toISOString(),
        'status': 0,
        'autorId': projectInformation.autorId,
        'professionalId': projectInformation.professionalId,
        'clientId': projectInformation.clientId,
        'extUserId': projectInformation.extUserId
      },
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    ).then(response => response.data)
    .catch(error => error.response.data);
}