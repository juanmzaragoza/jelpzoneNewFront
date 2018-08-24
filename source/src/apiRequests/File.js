import axios from 'axios';
import { getItem } from 'util/ApplicationStorage';
import { getBase64 } from 'util/Files';
import _ from 'lodash';

export const uploadUserFileRequest = async ( file ) => {

  const URI = REACT_APP_API_URL + 'Users/upload?access_token='+getItem('token');
  const data = new FormData();
  const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }
  data.append('file', file);

  return axios.post(URI,data,config).then(response => {
    return response.data
  })
  .catch(error => {
    return error.response.data
  });
  
}