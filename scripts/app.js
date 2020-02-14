const env = document.querySelector('.env-wrapper');
const card = document.querySelector('.card');

env.addEventListener('click', () => {
    card.classList.remove('card-hidden');
});

card.addEventListener('click', () => {
    card.classList.add('card-hidden');
});
