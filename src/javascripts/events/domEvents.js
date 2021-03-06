import showBoards from '../components/boards';
import addBoardForm from '../components/forms/addBoardForm';
import addPinForm from '../components/forms/addPinForm';
import editPinForm from '../components/forms/editPinForm';
import formModal from '../components/forms/formModal';
import showPins from '../components/pins';
import pinTitleBuilder from '../components/pinTitle';
import { createBoard, getBoards, getSingleBoard } from '../data/boardData';
import { deleteBoardPins, getSearchPins } from '../data/pinBoardData';
import {
  createPin, deletePin, getAllPins, getPins, getSinglePin, updatePin
} from '../data/pinData';

const domEvents = (userId) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Event for clicking into pins
    if (e.target.id.includes('viewBoard')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      getPins(firebaseKey).then((pins) => showPins(pins));
      getSingleBoard(firebaseKey).then((board) => pinTitleBuilder(board));
    }

    // Event to return to main page from pins
    if (e.target.id.includes('returnPins')) {
      e.preventDefault();
      document.querySelector('#boards').innerHTML = '';
      document.querySelector('#stage').innerHTML = '';
      getBoards(userId).then((boards) => showBoards(boards));
    }

    // Delete a Pin
    if (e.target.id.includes('deletePin')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        e.preventDefault();
        const firebaseKey = e.target.id.split('^^')[1];
        const boardId = e.target.id.split('^^')[2];
        deletePin(firebaseKey, boardId).then((pins) => showPins(pins));
        getSingleBoard(boardId).then((board) => pinTitleBuilder(board));
      }
    }
    // Delete a Board
    if (e.target.id.includes('deleteBoard')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        e.preventDefault();
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoardPins(firebaseKey, userId).then((boardsArray) => showBoards(boardsArray));
      }
    }
    // Create pin
    if (e.target.id.includes('createPin')) {
      e.preventDefault();
      addPinForm(userId);
    }
    // Submit new pin
    if (e.target.id.includes('submit-pin')) {
      console.warn('clicked it');
      e.preventDefault();
      const pinObj = {
        pin_title: document.querySelector('#title').value,
        pin_description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        board_id: document.querySelector('#board').value,
        uid: userId
      };
      createPin(pinObj).then((pinArray) => showPins(pinArray));
      getSingleBoard(pinObj.board_id).then((board) => pinTitleBuilder(board));
    }
    // Create Board
    if (e.target.id.includes('createBoard')) {
      e.preventDefault();
      addBoardForm();
    }

    // Submit Board Button
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObj = {
        board_title: document.querySelector('#board-title').value,
        image: document.querySelector('#board-image').value,
        uid: userId,
      };
      createBoard(boardObj, userId).then((boardArray) => showBoards(boardArray));
    }

    // Click event for showing modal on editing pin board
    if (e.target.id.includes('edit-pin')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('^^')[1];
      formModal('Edit Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject, userId));
    }

    if (e.target.id.includes('update-pin')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('^^')[1];
      const pinObj = {
        board_id: document.querySelector('#board').value
      };
      updatePin(firebaseKey, pinObj).then((pinsArray) => showPins(pinsArray));
      $('#formModal').modal('toggle');
    }
    // NAVBAR Events
    if (e.target.id.includes('home-nav')) {
      e.preventDefault();
      document.querySelector('#boards').innerHTML = '';
      document.querySelector('#stage').innerHTML = '';
      getBoards(userId).then((boards) => showBoards(boards));
    }

    if (e.target.id.includes('all-pins')) {
      e.preventDefault();
      document.querySelector('#main-container').innerHTML = '<h1>All Pins</h1>';
      document.querySelector('#boards').innerHTML = '';
      document.querySelector('#stage').innerHTML = '';
      getAllPins(userId).then((pins) => showPins(pins));
    }
    // Search bar
    if (e.target.id.includes('search-btn')) {
      e.preventDefault();
      const searchValue = document.querySelector('#search-bar').value;
      getSearchPins(userId, searchValue).then((pinsArray) => showPins(pinsArray));
      document.querySelector('#main-container').innerHTML = `<h1>Search Results for ${searchValue}</h1>`;
      document.querySelector('#search-bar').value = '';
    }
  });
};

export default domEvents;
