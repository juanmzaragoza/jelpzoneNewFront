import axios from 'axios';
import { getItem } from 'util/ApplicationStorage';
import { getBase64 } from 'util/Files';

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

  const URI = REACT_APP_API_URL + 'Projects/files?access_token='+getItem('token');
  const date = new Date();

  const file = getBase64(projectInformation.images[0]);

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
        'extUserId': projectInformation.extUserId,
        'files': file,
      },
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    ).then(response => {
      console.log("hola2",response)
      return response.data
    })
    .catch(error => {
      console.log("errorApiRequest",error)
      return error.response.data
    });
  
}