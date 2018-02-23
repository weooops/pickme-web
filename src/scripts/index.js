import '../styles/imageViewer.scss';
import ryan from '../images/ryan.jpg';
import MySharedTemplate from './templates/my-shared-template';

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'World'].join(' ');
  // console.log(element);

  return element;
}
document.body.appendChild(component());

function componentImage() {
  const image = document.createElement('img');
  image.className = 'image';
  image.src = ryan;
  // console.log(image);

  return image;
}
document.body.appendChild(componentImage());

function componentWithTemplate() {
  const templateData = { name: 'Jake', age: 31 };
  document.body.insertAdjacentHTML('beforeend', MySharedTemplate(templateData));
}
componentWithTemplate();
