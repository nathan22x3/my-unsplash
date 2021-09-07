import { getEnvString } from 'utils/environment.util';

const env = {
  api: {
    url: getEnvString('REACT_APP_API_URL'),
  },
};

export default env;
