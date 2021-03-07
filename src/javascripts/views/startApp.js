import showBoards from '../components/boards';
import domBuilder from '../components/domBuilder';
import navbar from '../components/navbar';
import { getBoards } from '../data/boardData';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder(); // Building the DOM
  navbar();
  getBoards(user.uid).then((boards) => showBoards(boards));
  domEvents(user.uid);
};

export default startApp;
