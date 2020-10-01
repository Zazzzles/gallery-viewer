import axios from 'axios';
import qs from 'qs';
import routes from './routes';

const parameterSerialiserConfig = {
  arrayFormat: 'repeat',
  indices: false,
};

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_ROUTE}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
  },
  paramsSerializer: (parameters) => {
    const newParameters = Object.keys(parameters).reduce((acc, key) => {
      if (parameters[key] === null) {
        return acc;
      }

      return {
        ...acc,
        [key]: parameters[key],
      };
    }, {});
    return qs.stringify(newParameters, parameterSerialiserConfig);
  },
});

export default routes(instance);
