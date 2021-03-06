import showBoards from '../components/boards';
import showPins from '../components/pins';
import getBoards from '../data/boardData';
import { deletePin, getPins } from '../data/pinData';

const domEvents = (userId) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Event for clicking into pins
    if (e.target.id.includes('viewBoard')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      getPins(firebaseKey).then((pins) => showPins(pins));
    }
    // Event to return to main page from pins
    if (e.target.id.includes('returnPins')) {
      e.preventDefault();
      document.querySelector('#boards').innerHTML = '';
      document.querySelector('#stage').innerHTML = '';
      getBoards(userId).then((boards) => showBoards(boards));
    }

    if (e.target.id.includes('deletePin')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        e.preventDefault();
        const firebaseKey = e.target.id.split('^^')[1];
        const boardId = e.target.id.split('^^')[2];
        deletePin(firebaseKey, boardId).then((pins) => showPins(pins));
      }
    }
  });
};

export default domEvents;
