const clear = () => {
    const content = document.getElementById('content');

    const all = content.children;

    for (let i = 2; i < all.length; i++) {
        all[i].remove();
    }
}

export default clear;