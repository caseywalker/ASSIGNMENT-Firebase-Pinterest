import selectBoard from './selectBoard';

const addPinForm = (userId) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `<form id="submit-pin-form" class="mb-4">
  <div class="form-group">
    <label for="title">Pin Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Pin Title" required>
  </div>
  <div class="form-group">
  <label for="description">Description</label>
  <input type="text" class="form-control" id="description" placeholder="Pin Description" required>
  </div>
  <div class="form-group">
    <label for="image">Image URL</label>
    <input type="url" class="form-control" id="image" placeholder="Image URL" required>
  </div>
  <div class="form-group" id="select-board">
  </div>
  <button type="submit" id="submit-pin" class="btn btn-danger">Submit Pin</button>
</form>`;

  selectBoard(userId);
};

export default addPinForm;
