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

  let data = new FormData();
  data.append('title', projectInformation.images[0]);
  data.append('title', projectInformation.title);
  data.append('description', projectInformation.description);
  data.append('privacy', projectInformation.privacy);
  data.append('createdDate', date.toISOString());
  data.append('lastUpdatedDate', date.toISOString());
  data.append('status', 0);
  data.append('autorId', projectInformation.autorId);
  data.append('professionalId', projectInformation.professionalId);
  data.append('clientId', projectInformation.clientId);
  data.append('extUserId', projectInformation.extUserId);

  return axios.post(URI, 
      data,
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    ).then(response => response.data)
    .catch(error => error.response.data);
}