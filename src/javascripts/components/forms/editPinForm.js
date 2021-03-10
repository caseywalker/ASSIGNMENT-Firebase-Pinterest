// import selectBoard from './selectBoard';

const editPinForm = () => {
  document.querySelector('#modal-body').innerHTML = `<form id="edit-pin-form" class="mb-4">
  <div class="form-group" id="select-board">Plz work</div>
  <button type="submit" id="update-pin" class="btn btn-success">Update Pin</button>
</form>`;
};

export default editPinForm;
