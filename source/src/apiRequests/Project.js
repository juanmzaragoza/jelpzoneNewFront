import axios from 'axios';
import { getItem } from 'util/ApplicationStorage';
import { getBase64 } from 'util/Files';
import _ from 'lodash';

export const getProjectsByUserIdRequest = async ( userId ) => {
  const URI = REACT_APP_API_URL + 'Projects';
  return axios.get(URI, 
      { params: { 
          filter: {
            include:["images","comments"],
            where: {
              extUserId: userId
            },
            order: "createdDate DESC"
          } 
        }
      },
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    ).then(response => response.data)
    .catch(error => error.response.data);
}

export const getDashboardProjectsRequest = async ( userId ) => {
  const URI = REACT_APP_API_URL + 'Projects';
  return axios.get(URI, 
      { params: { 
          filter: {
            include:["images","comments"],
            where: {
              privacy: false
            },
            order: "createdDate DESC"
          } 
        }
      },
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
  const data = new FormData();
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

  await projectInformation.images.forEach((image, index) => {
    data.append('files',image);
  });

  return axios.post(URI, data).then(response => response.data)
    .catch(error => error.response.data);
  
}

export const postBasicProjectRequest = async ( projectInformation ) => {

  const URI = REACT_APP_API_URL + 'Projects?access_token='+getItem('token');
  const date = new Date();
  
  return axios.post(URI, 
      {
        'title': projectInformation.title,
        'description': projectInformation.description,
        'createdDate': date.toISOString(),
        'lastUpdatedDate': date.toISOString(),
        'status': 1,
        'autorId': projectInformation.autorId,
        'clientId': projectInformation.clientId,
        'extUserId': projectInformation.extUserId,
      },
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    ).then(response => {
      return response.data
    })
    .catch(error => {
      return error.response.data
    });
  
}

export const postNewCommentRequest= async ( userId, comment ) => {

  const URI = REACT_APP_API_URL + 'Comments?access_token='+getItem('token');
  const date = new Date();

  return axios.post(URI, 
    {
      'content': comment.message,
      'createdDate': date.toISOString(),
      'lastUpdatedDate': date.toISOString(),
      'authorId': userId,
      'extUserId': userId,
      'projectId': comment.projectId
    },
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  ).then(response => {
    return response.data
  })
  .catch(error => {
    return error.response.data
  });

}

export const getProjectByIdRequest = async ( projectId ) => {
  const URI = REACT_APP_API_URL + 'Projects/' + projectId;;
  return axios.get(URI, 
      { params: { 
          filter: {
            include:["images","comments"]
          } 
        }
      },
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    ).then(response => response.data)
    .catch(error => error.response.data);
}