import { deleteBoard } from './boardData';
import { deletePin, getAllPins, getPins } from './pinData';

const deleteBoardPins = (boardId, userId) => new Promise((resolve, reject) => {
  getPins(boardId).then((pinsArray) => {
    const deletePins = pinsArray.map((pin) => deletePin(pin.firebaseKey));

    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, userId)));
  }).catch((error) => reject(error));
});

const getSearchPins = (userId, searchValue) => new Promise((resolve, reject) => {
  const result = [];
  getAllPins(userId).then((pins) => {
    pins.forEach((pin) => {
      const searchedValue = searchValue.toUpperCase();
      const pinTitle = pin.pin_title.toUpperCase();
      if (pinTitle.includes(searchedValue)) {
        result.push(pin);
      }
    });
  }).then(() => resolve(Object.values(result)))
    .catch((error) => reject(error));
});

export { deleteBoardPins, getSearchPins };
