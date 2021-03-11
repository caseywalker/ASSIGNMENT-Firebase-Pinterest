import axios from 'axios';
import firebaseConfig from '../helpers/apiKeys';

// API CALLS FOR BOARDS
const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS

const getBoards = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSingleBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// Delete Board

const deleteBoard = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards(userId).then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});

// Create Board

const createBoard = (boardObj, userId) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, boardObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body)
        .then(() => {
          getBoards(userId).then((boardsArray) => resolve(boardsArray));
        });
    }).catch((error) => reject(error));
});

export {
  getBoards, deleteBoard, createBoard, getSingleBoard
};
