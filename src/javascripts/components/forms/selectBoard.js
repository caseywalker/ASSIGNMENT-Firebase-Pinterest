import { getBoards } from '../../data/boardData';

const selectBoard = (userId) => {
  let domString = `<label for="board">Select a Board</label>
  <select class="form-control" id="board" required>
  <option value="">Select a Board</option>`;

  getBoards(userId).then((boardsArray) => {
    boardsArray.forEach((boards) => {
      domString += `<option value="${boards.firebaseKey}">${boards.board_title}</option>`;
    });
    domString += '</select>';

    document.querySelector('#select-board').innerHTML = domString;
  });
};

export default selectBoard;
