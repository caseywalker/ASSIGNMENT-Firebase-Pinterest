import axios from 'axios';
import firebaseConfig from '../helpers/apiKeys';

// API CALLS FOR BOARDS
const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS

const getPins = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Delete Pins

const deletePin = (firebaseKey, boardId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getPins(boardId).then((pins) => resolve(pins)))
    .catch((error) => reject(error));
});

export { getPins, deletePin };
