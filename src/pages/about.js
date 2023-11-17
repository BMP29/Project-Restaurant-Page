import clear from '../functions/clear';

const loadAbout = () => {
    clear();

    const content = document.getElementById('content');
    const heroAbout = document.createElement('section');
    const cardAbout = document.createElement('div');
    const cardAboutImg = new Image();
    const cardAboutInfo = document.createElement('div');
    const cardAboutInfoH2 = document.createElement('h2');
    const cardAboutInfoUl = document.createElement('ul');
    const cardAboutInfoUlLi1 = document.createElement('li');
    const cardAboutInfoUlLi2 = document.createElement('li');
    const cardAboutInfoUlLi3 = document.createElement('li');
    const cardAboutInfoUlLi1Img = new Image();
    const cardAboutInfoUlLi1Span = document.createElement('span');
    const cardAboutInfoUlLi2Img = new Image();
    const cardAboutInfoUlLi2Span = document.createElement('span');
    const cardAboutInfoUlLi3Img = new Image();
    const cardAboutInfoUlLi3Span = document.createElement('span');

    const heroTextAbout = document.createElement('div');
    const heroTextAboutH1 = document.createElement('h1');
    const heroTextAboutP1 = document.createElement('p');
    const heroTextAboutP2 = document.createElement('p');

    heroAbout.setAttribute('id', 'heroAbout');
    cardAbout.setAttribute('id', 'cardAbout');
    cardAboutImg.setAttribute('src', './assets/imgs/heroAboutImg.png');
    cardAboutImg.setAttribute('alt', 'foodOnAPlate');
    cardAboutInfo.setAttribute('id', 'cardAboutInfo');
    cardAboutInfoH2.textContent = 'Come and visit us';
    cardAboutInfoUlLi1Span.textContent = '(414) 857 - 0107';
    cardAboutInfoUlLi2Span.textContent = 'happytummy@restaurant.com';
    cardAboutInfoUlLi3Span.textContent = '837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles';
    cardAboutInfoUlLi1Img.setAttribute('src', './assets/icons/telephone.svg');
    cardAboutInfoUlLi1Img.setAttribute('alt', 'telephoneIcon');
    cardAboutInfoUlLi2Img.setAttribute('src', './assets/icons/msg.svg');
    cardAboutInfoUlLi2Img.setAttribute('alt', 'messageIcon');
    cardAboutInfoUlLi3Img.setAttribute('src', './assets/icons/location.svg');
    cardAboutInfoUlLi3Img.setAttribute('alt', 'locationIcon');
    heroTextAbout.setAttribute('id', 'heroTextAbout');
    heroTextAboutH1.textContent = 'We provide healthy food for your family.';
    heroTextAboutP1.textContent = "Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate."
    heroTextAboutP2.textContent = "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.";

    heroAbout.appendChild(cardAbout);
    heroAbout.appendChild(heroTextAbout);
    cardAbout.appendChild(cardAboutImg);
    cardAbout.appendChild(cardAboutInfo);
    cardAboutInfo.appendChild(cardAboutInfoH2);
    cardAboutInfo.appendChild(cardAboutInfoUl);
    cardAboutInfoUl.appendChild(cardAboutInfoUlLi1);
    cardAboutInfoUlLi1.appendChild(cardAboutInfoUlLi1Img);
    cardAboutInfoUlLi1.appendChild(cardAboutInfoUlLi1Span);
    cardAboutInfoUl.appendChild(cardAboutInfoUlLi2);
    cardAboutInfoUlLi2.appendChild(cardAboutInfoUlLi2Img);
    cardAboutInfoUlLi2.appendChild(cardAboutInfoUlLi2Span);
    cardAboutInfoUl.appendChild(cardAboutInfoUlLi3);
    cardAboutInfoUlLi3.appendChild(cardAboutInfoUlLi3Img);
    cardAboutInfoUlLi3.appendChild(cardAboutInfoUlLi3Span);
    heroTextAbout.appendChild(heroTextAboutH1);
    heroTextAbout.appendChild(heroTextAboutP1);
    heroTextAbout.appendChild(heroTextAboutP2);
    content.appendChild(heroAbout);
};

export default loadAbout;