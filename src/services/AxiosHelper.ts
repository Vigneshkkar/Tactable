import axios from 'axios';
let BaseURL = 'https://6144e843411c860017d256f0.mockapi.io/api/v1/';

if (process.env.REACT_APP_STAGE === 'production') {
  BaseURL = `${window.location.protocol}//${window.location.hostname}/api/v1/`;
}

const AxiosHelper = axios.create({
  baseURL: BaseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default AxiosHelper;
