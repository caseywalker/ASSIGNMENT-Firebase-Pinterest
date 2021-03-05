// import showBoards from '../components/boards';
import showBoards from '../components/boards';
import domBuilder from '../components/domBuilder';
import navbar from '../components/navbar';
import getBoards from '../data/boardData';

const startApp = () => {
  domBuilder(); // Building the DOM
  navbar();
  getBoards().then((boards) => showBoards(boards));
};

export default startApp;
