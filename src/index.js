import './styles/home.css'
import './styles/about.css';
import loadHome from './pages/home';
import loadAbout from './pages/about';
import loadHead from './functions/header';

console.log("everything is ok!");

loadHead();

const aboutBtn = document.getElementById('about');

loadHome();

aboutBtn.addEventListener('click', () => {
    loadAbout();
});