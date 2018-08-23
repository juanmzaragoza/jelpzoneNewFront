import axios from 'axios';
import { getItem } from 'util/ApplicationStorage';
import { getBase64 } from 'util/Files';
import _ from 'lodash';

export const postNewEstimateRequestRequest = async ( params ) => {

  const URI = REACT_APP_API_URL + `Projects/${params.projectId}/estimateRequests?access_token=`+getItem('token');

  return axios.post(URI, 
    {
      'message': params.message,
      'professionalId': params.professionalId,
      'clientId': params.clientId,
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