const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container"></div>
  <div class="d-flex flexwrap justify-content-around" id="boards"></div>`;
};

export default domBuilder;
