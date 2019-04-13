import axios from 'axios';

const instance = axios.create({ baseURL: 'https://react-burger-app-88a2e.firebaseio.com/' });

export default instance;
