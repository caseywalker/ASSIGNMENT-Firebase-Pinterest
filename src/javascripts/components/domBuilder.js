const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container"></div>
  <div class="d-flex flexwrap justify-content-around" id="boards"></div>
  <div class="align-text-center mt-3" id="stage"></div>`;
};

export default domBuilder;
