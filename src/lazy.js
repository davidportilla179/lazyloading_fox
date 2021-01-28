let totalImgs = 0;
let totalRenders=0;

const isIntersecting = (entry) => { 
  return entry.isIntersecting;
}

const loadImage = (entry) => {
  const container = entry.target;
  const imagen = container.firstChild;
  const url = imagen.dataset.src;

  imagen.src = url;
  imagen.onload = () => {
    totalRenders++
    loadConsole();
  }
  observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) =>{
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
  totalImgs++;
  loadConsole();
  observer.observe(imagen);
}

const loadConsole = () => {
  console.log("-------------------------------");
  console.log("🔵Total imágenes: " + totalImgs);
  console.log("🔴Imágenes cargadas: " + totalRenders)
  console.log("-------------------------------");
}