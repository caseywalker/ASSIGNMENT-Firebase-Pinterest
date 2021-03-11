const showPins = (array) => {
  document.querySelector('#stage').innerHTML = '<a href="#" class="btn btn-danger" id="returnPins">Return to Boards</a> </hr> <a href="#" class="btn btn-danger" id="createPin">Add a Pin</a></hr>';
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#boards').innerHTML += `<div class="card mt-3" style="width: 18rem;">
    <img src='${item.image}' class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.pin_title}</h5>
      <p>${item.pin_description}</p>
      <a href="#" class="btn btn-danger" id="deletePin^^${item.firebaseKey}^^${item.board_id}">Delete Pin</a>
      <button class="btn btn-danger mt-2" data-toggle="modal" data-target="#formModal" id="edit-pin^^${item.firebaseKey}">Change Pin Board</button>
    </div>
  </div>`;
  });
};

export default showPins;
