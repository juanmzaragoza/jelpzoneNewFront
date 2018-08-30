import axios from 'axios';
import { getItem } from 'util/ApplicationStorage';
import { getBase64 } from 'util/Files';
import _ from 'lodash';

export const getProjectsByUserIdRequest = async ( userId ) => {
  const URI = REACT_APP_API_URL + 'Projects';
  return axios.get(URI, 
      { params: { filter: '{"include":"images","include":"comments","extUserId": "'+userId+'"}' } },
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
  let promises = [];

  _.each(projectInformation.images,function(image) {
    promises.push(getBase64(image));
  });

  return Promise.all(promises).then(images => { 
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
        'files': images,
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
  });
  
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