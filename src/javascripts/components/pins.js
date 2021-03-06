const showPins = (array) => {
  document.querySelector('#main-container').innerHTML = '<h1>Pins</h1>';
  document.querySelector('#stage').innerHTML = '<a href="#" class="btn btn-danger" id="returnPins">Return to Boards</a></hr>';
  document.querySelector('#boards').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#boards').innerHTML += `<div class="card" style="width: 18rem;">
    <img src='${item.image}' class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.pin_title}</h5>
      <p>${item.pin_description}</p>
      <a href="#" class="btn btn-danger" id="deletePin^^${item.firebaseKey}^^${item.board_id}">Delete Pin</a>
    </div>
  </div>`;
  });
};

export default showPins;
