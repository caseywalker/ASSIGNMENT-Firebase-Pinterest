import logoutButton from './buttons/logoutButton';

const navbar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <span class="material-icons">face</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id="home-nav">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" id="all-pins">All Pins</a>
        </li>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search Pins" aria-label="Search" id="search-bar">
        <button class="btn btn-outline-danger" type="submit" id="search-btn">Search</button>
      </form> 
      <li class="nav-item" id="sign-in-btn">
      </li>
    </div>
  </div>
</nav>`;
  document.querySelector('#navigation').innerHTML = domString;
  logoutButton();
};

export default navbar;
