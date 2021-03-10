import selectBoard from './selectBoard';

const editPinForm = (pinObject, userId) => {
  document.querySelector('#modal-body').innerHTML = `<form id="edit-pin-form" class="mb-4">
  <div class="form-group" id="select-board"></div>
  <button type="submit" id="update-pin^^${pinObject.firebaseKey}" class="btn btn-danger">Update Pin</button>
</form>`;
  selectBoard(userId);
};

export default editPinForm;
