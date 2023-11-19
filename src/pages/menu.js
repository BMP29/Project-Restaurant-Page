import clear from "../functions/clear";
import filterCards from "../functions/filterCards";
import eggs from "../assets/imgs/eggs.png";
import pizza from "../assets/imgs/pizza.png";
import martinezCockTail from "../assets/imgs/martinezCockTail.png";
import pie from "../assets/imgs/pie.png";
import mintLemonade from "../assets/imgs/mintLemonade.png";
import icecream from "../assets/imgs/icecream.png";
import hamburger from "../assets/imgs/hamburger.png";
import waffles from "../assets/imgs/waffles.png";


const loadMenu = () => {
    clear();

    const content = document.getElementById('content');

    const heroMenu = document.createElement('section');
    const menuHead = document.createElement('div');
    const menuText = document.createElement('div');
    const menuTextH1 = document.createElement('h1');
    const menuTextP = document.createElement('p');
    const menuBtns = document.createElement('ul');
    const menuBtnsLi1 = document.createElement('li');
    const menuBtnsLiLink1 = document.createElement('a');
    const menuBtnsLi2 = document.createElement('li');
    const menuBtnsLiLink2 = document.createElement('a');
    const menuBtnsLi3 = document.createElement('li');
    const menuBtnsLiLink3 = document.createElement('a');
    const menuBtnsLi4 = document.createElement('li');
    const menuBtnsLiLink4 = document.createElement('a');
    const menuBtnsLi5 = document.createElement('li');
    const menuBtnsLiLink5 = document.createElement('a');

    const menuCards = document.createElement('div');

    const card1 = document.createElement('div');
    const card1Img = new Image();
    const DishPrice1 = document.createElement('span');
    const card1Span1 = document.createElement('span');
    const card1P1 = document.createElement('p');

    const card2 = document.createElement('div');
    const card2Img = new Image();
    const DishPrice2 = document.createElement('span');
    const card2Span2 = document.createElement('span');
    const card2P2 = document.createElement('p');

    const card3 = document.createElement('div');
    const card3Img = new Image();
    const DishPrice3 = document.createElement('span');
    const card3Span3 = document.createElement('span');
    const card3P3 = document.createElement('p');

    const card4 = document.createElement('div');
    const card4Img = new Image();
    const DishPrice4 = document.createElement('span');
    const card4Span4 = document.createElement('span');
    const card4P4 = document.createElement('p');

    const card5 = document.createElement('div');
    const card5Img = new Image();
    const DishPrice5 = document.createElement('span');
    const card5Span5 = document.createElement('span');
    const card5P5 = document.createElement('p');

    const card6 = document.createElement('div');
    const card6Img = new Image();
    const DishPrice6 = document.createElement('span');
    const card6Span6 = document.createElement('span');
    const card6P6 = document.createElement('p');

    const card7 = document.createElement('div');
    const card7Img = new Image();
    const DishPrice7 = document.createElement('span');
    const card7Span7 = document.createElement('span');
    const card7P7 = document.createElement('p');

    const card8 = document.createElement('div');
    const card8Img = new Image();
    const DishPrice8 = document.createElement('span');
    const card8Span8 = document.createElement('span');
    const card8P8 = document.createElement('p');

    heroMenu.setAttribute('id', 'heroMenu');
    menuHead.setAttribute('id', 'menuHead');
    menuText.setAttribute('id', 'menuText');
    menuTextH1.textContent = "Our Menu";
    menuTextP.textContent = "We consider all the drivers of change gives you the components you need to change to create a truly happens.";
    menuBtns.setAttribute('id', 'menuBtns');
    menuBtnsLiLink1.setAttribute('href', '#');
    menuBtnsLiLink1.textContent = "All";
    menuBtnsLiLink2.setAttribute('href', '#');
    menuBtnsLiLink2.textContent = "Breakfast";
    menuBtnsLiLink3.setAttribute('href', '#');
    menuBtnsLiLink3.textContent = "Main Dishes";
    menuBtnsLiLink4.setAttribute('href', '#');
    menuBtnsLiLink4.textContent = "Drinks";
    menuBtnsLiLink5.setAttribute('href', '#');
    menuBtnsLiLink5.textContent = "Desserts";

    menuCards.setAttribute('id', 'menuCards');

    card1.classList.add('card');
    card1.classList.add('breakfast');
    card1Img.src = eggs;
    card1Img.setAttribute('alt', 'FriedEggsImg');
    DishPrice1.classList.add('dishPrice');
    DishPrice1.textContent = '$ 9.99';
    card1Span1.textContent = 'Fried Eggs';
    card1P1.textContent = "Made with eggs, lettuce, salt, oil and other ingredients.";

    card2.classList.add('card');
    card2.classList.add('breakfast');
    card2.classList.add('mainDish');
    card2Img.src = pizza;
    card2Img.setAttribute('alt', 'PizzaImg');
    DishPrice2.classList.add('dishPrice');
    DishPrice2.textContent = '$ 15.99';
    card2Span2.textContent = 'Hawaiian Pizza';
    card2P2.textContent = "Made with eggs, lettuce, salt, oil and other ingredients.";

    card3.classList.add('card');
    card3.classList.add('drink');
    card3Img.src = martinezCockTail;
    card3Img.setAttribute('alt', 'martinezCockTailImg');
    DishPrice3.classList.add('dishPrice');
    DishPrice3.textContent = '$ 7.25';
    card3Span3.textContent = 'Martinez Cocktail';
    card3P3.textContent = "Made with eggs, lettuce, salt, oil and other ingredients.";

    card4.classList.add('card');
    card4.classList.add('dessert');
    card4Img.src = pie;
    card4Img.setAttribute('alt', 'pieImg');
    DishPrice4.classList.add('dishPrice');
    DishPrice4.textContent = '$ 20.99';
    card4Span4.textContent = 'Butterscotch Cake';
    card4P4.textContent = "Made with eggs, lettuce, salt, oil and other ingredients.";

    card5.classList.add('card');
    card5.classList.add('drink');
    card5Img.src = mintLemonade;
    card5Img.setAttribute('alt', 'mintLemonade');
    DishPrice5.classList.add('dishPrice');
    DishPrice5.textContent = '$ 5.89';
    card5Span5.textContent = 'Mint Lemonade';
    card5P5.textContent = "Made with eggs, lettuce, salt, oil and other ingredients.";

    card6.classList.add('card');
    card6.classList.add('dessert');
    card6Img.src = icecream;
    card6Img.setAttribute('alt', 'iceCreamImg');
    DishPrice6.classList.add('dishPrice');
    DishPrice6.textContent = '$ 18.05';
    card6Span6.textContent = 'Chocolate Icecream';
    card6P6.textContent = "Made with eggs, lettuce, salt, oil and other ingredients.";

    card7.classList.add('card');
    card7.classList.add('mainDish');
    card7Img.src = hamburger;
    card7Img.setAttribute('alt', 'hamburgerImg');
    DishPrice7.classList.add('dishPrice');
    DishPrice7.textContent = '$ 12.55';
    card7Span7.textContent = 'Cheese Burger';
    card7P7.textContent = "Made with eggs, lettuce, salt, oil and other ingredients.";

    card8.classList.add('card');
    card8.classList.add('breakfast');
    card8Img.src = waffles;
    card8Img.setAttribute('alt', 'wafflesImg');
    DishPrice8.classList.add('dishPrice');
    DishPrice8.textContent = '$ 12.99';
    card8Span8.textContent = 'Classic Waffles';
    card8P8.textContent = "Made with eggs, lettuce, salt, oil and other ingredients.";

    content.appendChild(heroMenu);

    heroMenu.appendChild(menuHead);
    menuHead.appendChild(menuText);
    menuText.appendChild(menuTextH1);
    menuText.appendChild(menuTextP);
    menuHead.appendChild(menuBtns);
    menuBtns.appendChild(menuBtnsLi1);
    menuBtnsLi1.appendChild(menuBtnsLiLink1);
    menuBtns.appendChild(menuBtnsLi2);
    menuBtnsLi2.appendChild(menuBtnsLiLink2);
    menuBtns.appendChild(menuBtnsLi3);
    menuBtnsLi3.appendChild(menuBtnsLiLink3);
    menuBtns.appendChild(menuBtnsLi4);
    menuBtnsLi4.appendChild(menuBtnsLiLink4);
    menuBtns.appendChild(menuBtnsLi5);
    menuBtnsLi5.appendChild(menuBtnsLiLink5);

    heroMenu.appendChild(menuCards);
    menuCards.appendChild(card1);
    card1.appendChild(card1Img);
    card1.appendChild(DishPrice1);
    card1.appendChild(card1Span1);
    card1.appendChild(card1P1);

    menuCards.appendChild(card2);
    card2.appendChild(card2Img);
    card2.appendChild(DishPrice2);
    card2.appendChild(card2Span2);
    card2.appendChild(card2P2);
    
    menuCards.appendChild(card3);
    card3.appendChild(card3Img);
    card3.appendChild(DishPrice3);
    card3.appendChild(card3Span3);
    card3.appendChild(card3P3);

    menuCards.appendChild(card4);
    card4.appendChild(card4Img);
    card4.appendChild(DishPrice4);
    card4.appendChild(card4Span4);
    card4.appendChild(card4P4);

    menuCards.appendChild(card5);
    card5.appendChild(card5Img);
    card5.appendChild(DishPrice5);
    card5.appendChild(card5Span5);
    card5.appendChild(card5P5);

    menuCards.appendChild(card6);
    card6.appendChild(card6Img);
    card6.appendChild(DishPrice6);
    card6.appendChild(card6Span6);
    card6.appendChild(card6P6);

    menuCards.appendChild(card7);
    card7.appendChild(card7Img);
    card7.appendChild(DishPrice7);
    card7.appendChild(card7Span7);
    card7.appendChild(card7P7);

    menuCards.appendChild(card8);
    card8.appendChild(card8Img);
    card8.appendChild(DishPrice8);
    card8.appendChild(card8Span8);
    card8.appendChild(card8P8);

    menuBtnsLiLink1.addEventListener('click', filterCards.bind(this, 'card'));
    menuBtnsLiLink2.addEventListener('click', filterCards.bind(this, 'breakfast'));
    menuBtnsLiLink3.addEventListener('click', filterCards.bind(this, 'mainDish'));
    menuBtnsLiLink4.addEventListener('click', filterCards.bind(this, 'drink'));
    menuBtnsLiLink5.addEventListener('click', filterCards.bind(this, 'dessert'));
}

export default loadMenu;