import '../styles/home.scss';
import gridItemTemplate from './templates/grid-item-template';

function gridItemComponent(data) {
  const element = data.map(item => gridItemTemplate(item)).join('');

  return element;
}

fetch('http://localhost:3001/categories')
  .then(response => {
    return response.json();
  })
  .then(json => {
    document.getElementById('grid')
      .insertAdjacentHTML('beforeend', gridItemComponent(json));
  });
