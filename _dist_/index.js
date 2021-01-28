import { registerImage } from './lazy.js';

const minimum = 1;
const maxinum = 122;
const random = () => Math.floor(Math.random() * (maxinum - minimum)) + minimum

const createImageNode = () => {
  const container = document.createElement('div');
  container.className = 'p-4';

  const imagen = document.createElement('img');
  imagen.className = 'mx-auto';
  imagen.width = '320';
  imagen.src = "https://cdn.wallpapersafari.com/97/82/LvWIVR.jpg"
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(imagen)
  return container;
};

const mountNode = document.getElementById('images');
const addButton = document.querySelector('#add');
const deleteButton = document.querySelector('#delete');

const addImage = () => {
  const newImage = createImageNode();
  mountNode.appendChild(newImage)
  registerImage(newImage)
}

const deleteImages = () =>{
  mountNode.innerHTML = "";
}

addButton.addEventListener("click", addImage)
deleteButton. addEventListener("click",deleteImages)
