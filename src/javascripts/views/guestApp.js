import domBuilder from '../components/domBuilder';
import guestNavbar from '../components/guestNavbar';
import homePage from '../components/home';

const guestApp = () => {
  domBuilder();
  homePage();
  guestNavbar();
};
export default guestApp;
