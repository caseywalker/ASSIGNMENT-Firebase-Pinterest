import axios from 'axios';
import firebaseConfig from '../helpers/apiKeys';

// API CALLS FOR BOARDS
const dbUrl = firebaseConfig.databaseURL;

// GET Pins

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

// Create Pins

const createPin = (pinObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then(() => {
          getPins(pinObject.board_id).then((pinsArray) => resolve(pinsArray));
        });
    }).catch((error) => reject(error));
});
export { getPins, deletePin, createPin };
