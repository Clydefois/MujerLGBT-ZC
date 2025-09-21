document.querySelectorAll('.article-card.slim').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelector('.article-card.center p').style.opacity = '0';
        document.querySelector('.article-card.center p').style.visibility = 'hidden';
    });

    item.addEventListener('mouseleave', () => {
        document.querySelector('.article-card.center p').style.opacity = '1';
        document.querySelector('.article-card.center p').style.visibility = 'visible';
    });
});
