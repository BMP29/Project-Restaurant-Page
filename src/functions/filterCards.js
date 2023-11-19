const filterCards = (type) => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((item) => {
        if(item.classList.contains(type)) {
            item.setAttribute('style', 'postion:static; display:flex;');
        }else {
            item.setAttribute('style', 'postion:absolute; display:none;');
        }

        
    });
};

export default filterCards;