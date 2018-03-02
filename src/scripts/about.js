import '../styles/about.scss';
import cardTemplate from './templates/card-template';

function cardComponent(data) {
  const element = data.map(item => cardTemplate(item)).join('');

  return element;
}

function cardEventListener() {
  const moreEls = document.querySelectorAll('.card-info > .more');
  for (let i = 0; i < moreEls.length; i++) {
    moreEls[i].addEventListener('click', () => {
      const cardEl = moreEls[i].closest('.card');
      cardEl.querySelector('.card-image').classList.add('open');
      cardEl.querySelector('.card-info').classList.add('open');
      cardEl.querySelector('.card-about').classList.add('open');
      cardEl.querySelector('.card-project').classList.add('open');
    });
  }

  const closeEls = document.querySelectorAll('.card-about > .close');
  for (let i = 0; i < closeEls.length; i++) {
    closeEls[i].addEventListener('click', () => {
      const cardEl = moreEls[i].closest('.card');
      cardEl.querySelector('.card-image').classList.remove('open');
      cardEl.querySelector('.card-info').classList.remove('open');
      cardEl.querySelector('.card-about').classList.remove('open');
      cardEl.querySelector('.card-project').classList.remove('open');
    });
  }
}

fetch('http://localhost:3001/pickmes?category=1&limit=2')
  .then(response => {
    return response.json();
  })
  .then(json => {
    document.getElementById('main')
      .insertAdjacentHTML('afterbegin', cardComponent(json));
    cardEventListener();
  });
