// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
  baseURL: `${process.env.NEXT_PUBLIC_HOST_AND_PORT}`,
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.withCredentials = true;
instance.defaults.headers.accessControlAllowOrigins = true;

export default instance;
