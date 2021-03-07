import { deleteBoard } from './boardData';
import { deletePin, getPins } from './pinData';

const deleteBoardPins = (boardId, userId) => new Promise((resolve, reject) => {
  getPins(boardId).then((pinsArray) => {
    const deletePins = pinsArray.map((pin) => deletePin(pin.firebaseKey));

    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, userId)));
  }).catch((error) => reject(error));
});

export default deleteBoardPins;
