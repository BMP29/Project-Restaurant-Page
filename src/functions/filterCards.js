const filterCards = (type) => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((item) => {
        if(item.classList.contains(type)) {
            item.setAttribute('style', 'position:static; display:flex;');
        }else {
            item.setAttribute('style', 'position:absolute; display:none;');
        }

        
    });
};

export default filterCards;