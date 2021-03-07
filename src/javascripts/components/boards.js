const showBoards = (array) => {
  document.querySelector('#main-container').innerHTML = '<h1>Boards</h1>';
  document.querySelector('#boards').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#boards').innerHTML += `<div class="card" style="width: 18rem;">
    <img src='${item.image}' class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.board_title}</h5>
      <a href="#" class="btn btn-danger" id="viewBoard--${item.firebaseKey}">Visit Board</a>
      <a href="#" class="btn btn-danger" id="deleteBoard--${item.firebaseKey}">Delete Board</a>
    </div>
  </div>`;
  });
};

export default showBoards;
