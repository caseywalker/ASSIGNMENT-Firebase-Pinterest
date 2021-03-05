import axios from 'axios';
import firebaseConfig from '../helpers/apiKeys';

// API CALLS FOR BOARDS
const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => resolve(Object.values((response.data))))
    .catch((error) => reject(error));
});

export default getBoards;
