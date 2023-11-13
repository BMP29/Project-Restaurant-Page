const clear = () => {
    const content = document.getElementById('content');

    const all = content.children;

    for (let i = 1; i < all.length; i++) {
        all[i].remove();
    }
}

export default clear;