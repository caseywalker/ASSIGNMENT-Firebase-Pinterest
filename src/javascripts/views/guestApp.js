import domBuilder from '../components/domBuilder';
import homePage from '../components/home';
import navbar from '../components/navbar';

const guestApp = () => {
  domBuilder();
  navbar();
  homePage();
};

export default guestApp;
