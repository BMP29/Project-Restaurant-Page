import loadHead from "../functions/header";
import '../styles/home.css'

export default loadHead;

const loadHome = () => {
    loadHead();

    const content = document.getElementById('content');

    const heroSection = document.createElement('section');
    const divHeroText = document.createElement('div');
    const h1HeroText = document.createElement('h1');
    const pHeroText = document.createElement('p');

    const divHeroBtns = document.createElement('div');
    const divHeroBtn1 = document.createElement('div');
    const divHeroBtn2 = document.createElement('div');
    const divHeroLink1 = document.createElement('a');
    const divHeroLink2 = document.createElement('a');

    heroSection.setAttribute('id', 'hero');
    divHeroText.setAttribute('id', 'hero-text');
    divHeroBtns.setAttribute('id', 'hero-btns');
    divHeroBtn1.classList.add('btn');
    divHeroBtn2.classList.add('btn');
    divHeroLink1.setAttribute('href', '#');
    divHeroLink2.setAttribute('href', '#');
    h1HeroText.textContent = 'Best food for your taste';
    pHeroText.textContent = 'Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.';
    divHeroLink1.textContent = 'Book A Table';
    divHeroLink2.textContent = 'Explore Menu';

    heroSection.appendChild(divHeroText);
    divHeroText.appendChild(h1HeroText);
    divHeroText.appendChild(pHeroText);
    heroSection.appendChild(divHeroBtns);
    divHeroBtns.appendChild(divHeroBtn1);
    divHeroBtns.appendChild(divHeroBtn2);
    divHeroBtn1.appendChild(divHeroLink1);
    divHeroBtn2.appendChild(divHeroLink2);

    content.appendChild(heroSection);
}