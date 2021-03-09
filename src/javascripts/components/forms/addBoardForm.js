const addBoardForm = () => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `<form id="submit-pin-form" class="mb-4">
  <div class="form-group">
    <label for="board-title">Board Title</label>
    <input type="text" class="form-control" id="board-title" aria-describedby="bookTitle" placeholder="Enter Board Title" required>
  </div>
  <div class="form-group">
    <label for="board-image">Image URL</label>
    <input type="url" class="form-control" id="board-image" placeholder="Image URL" required>
  </div>
  <div class="form-group" id="select-board">
  </div>
  <button type="submit" id="submit-board" class="btn btn-danger">Submit Board</button>
</form>`;
};

export default addBoardForm;
