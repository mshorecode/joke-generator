// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import domBuilder from '../pages/domBuilder';
import domEvents from '../events/domEvents';
import { jokeBtn } from '../components/buttons';

const init = () => {
  domBuilder();
  jokeBtn();
  domEvents();
};

init();
