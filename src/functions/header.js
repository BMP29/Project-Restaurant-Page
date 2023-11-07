const loadHead = () => {
    const cont = document.getElementById('content');
    const header = document.createElement('header');

    /*********Top head*********/
    const sectionTop = document.createElement('section');
    const ulInfo = document.createElement('ul');
    const ulSocial = document.createElement('ul');
    const linkSocial1 = document.createElement('a');
    const linkSocial2 = document.createElement('a');
    const linkSocial3 = document.createElement('a');
    const linkSocial4 = document.createElement('a');
    const liInfo1 = document.createElement('li');
    const liInfo2 = document.createElement('li');
    const liSocial1 = document.createElement('li');
    const liSocial2 = document.createElement('li');
    const liSocial3 = document.createElement('li');
    const liSocial4 = document.createElement('li');
    const imgSocial1 = document.createElement('img');
    const imgSocial2 = document.createElement('img');
    const imgSocial3 = document.createElement('img');
    const imgSocial4 = document.createElement('img');
    const imgInfo1 = document.createElement('img');
    const imgInfo2 = document.createElement('img');
    const spanInfo1 = document.createElement('span');
    const spanInfo2 = document.createElement('span');

    sectionTop.setAttribute('id', 'top-header');
    ulInfo.setAttribute('id', 'info');
    ulSocial.setAttribute('id', 'social');
    imgSocial1.setAttribute('src', './assets/icons/twitter.svg');
    imgSocial1.setAttribute('alt', 'twitterIcon');
    imgSocial2.setAttribute('src', './assets/icons/facebook.svg');
    imgSocial2.setAttribute('alt', 'facebookIcon');
    imgSocial3.setAttribute('src', './assets/icons/instagram.svg');
    imgSocial3.setAttribute('alt', 'instagramIcon');
    imgSocial4.setAttribute('src', './assets/icons/github.svg');
    imgSocial4.setAttribute('alt', 'githubIcon');
    linkSocial1.setAttribute('href', '#');
    linkSocial2.setAttribute('href', '#');
    linkSocial3.setAttribute('href', '#');
    linkSocial4.setAttribute('href', '#');

    liInfo1.setAttribute('id', 'phoneNumber');
    imgInfo1.setAttribute('src', './assets/icons/telephone.svg');
    imgInfo1.setAttribute('alt', 'telephoneIcon');
    imgInfo2.setAttribute('src', './assets/icons/msg.svg');
    imgInfo2.setAttribute('alt', 'messageIcon');
    spanInfo1.textContent = '(414) 857 - 0107';
    spanInfo2.textContent = 'yummy@bistrobliss';
    

    cont.appendChild(header);
    sectionTop.appendChild(ulInfo);
    sectionTop.appendChild(ulSocial);
    ulInfo.appendChild(liInfo1);
    ulInfo.appendChild(liInfo2);

    ulSocial.appendChild(liSocial1);
    ulSocial.appendChild(liSocial2);
    ulSocial.appendChild(liSocial3);
    ulSocial.appendChild(liSocial4);

    liInfo1.appendChild(imgInfo1);
    liInfo2.appendChild(imgInfo2);
    liInfo1.appendChild(spanInfo1);
    liInfo2.appendChild(spanInfo2);

    linkSocial1.appendChild(imgSocial1);
    linkSocial2.appendChild(imgSocial2);
    linkSocial3.appendChild(imgSocial3);
    linkSocial4.appendChild(imgSocial4);

    liSocial1.appendChild(linkSocial1);
    liSocial2.appendChild(linkSocial2);
    liSocial3.appendChild(linkSocial3);
    liSocial4.appendChild(linkSocial4);
    /*********Top head*********/


    /*********Bottom head*********/
    const sectionBottom = document.createElement('section');
    const divLogo = document.createElement('div');
    const imgLogo = document.createElement('img');
    const h1Logo = document.createElement('h1');

    const ulMenu = document.createElement('ul');
    const liMenu1 = document.createElement('li');
    const liMenu2 = document.createElement('li');
    const liMenu3 = document.createElement('li');
    const liMenu4 = document.createElement('li');
    const liMenu5 = document.createElement('li');
    const linkMenu1 = document.createElement('a');
    const linkMenu2 = document.createElement('a');
    const linkMenu3 = document.createElement('a');
    const linkMenu4 = document.createElement('a');
    const linkMenu5 = document.createElement('a');

    const divBtnHeader = document.createElement('div');
    const linkBtnHeader = document.createElement('a');

    sectionBottom.setAttribute('id', 'bottom-header');
    divLogo.setAttribute('id', 'logo-head');
    imgLogo.setAttribute('src', './assets/icons/logo.svg');
    imgLogo.setAttribute('alt', 'logoIcon');
    h1Logo.textContent = 'Bistro Bliss';
    ulMenu.setAttribute('id', 'head-menu');
    divBtnHeader.classList.add('btn');
    linkMenu1.setAttribute('href', '#');
    linkMenu2.setAttribute('href', '#');
    linkMenu3.setAttribute('href', '#');
    linkMenu4.setAttribute('href', '#');
    linkMenu5.setAttribute('href', '#');
    linkBtnHeader.setAttribute('href', '#');
    linkMenu1.textContent = 'Home';
    linkMenu2.textContent = 'About';
    linkMenu3.textContent = 'Menu';
    linkMenu4.textContent = 'Pages';
    linkMenu5.textContent = 'Contact';
    linkBtnHeader.textContent = 'Book A Table';

    sectionBottom.appendChild(divLogo);
    sectionBottom.appendChild(ulMenu);
    sectionBottom.appendChild(divBtnHeader);
    divLogo.appendChild(imgLogo);
    divLogo.appendChild(h1Logo);
    liMenu1.appendChild(linkMenu1);
    liMenu2.appendChild(linkMenu2);
    liMenu3.appendChild(linkMenu3);
    liMenu4.appendChild(linkMenu4);
    liMenu5.appendChild(linkMenu5);

    ulMenu.appendChild(liMenu1);
    ulMenu.appendChild(liMenu2);
    ulMenu.appendChild(liMenu3);
    ulMenu.appendChild(liMenu4);
    ulMenu.appendChild(liMenu5);

    divBtnHeader.appendChild(linkBtnHeader);

    /*********Bottom head*********/


    header.appendChild(sectionTop);
    header.appendChild(sectionBottom);
};

export default loadHead;