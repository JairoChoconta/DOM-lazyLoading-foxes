const isIntercepting = (entry) => {
  return entry.isIntersecting; //true (dentro de la pantalla)
};

const accion = (entry) => {
  const container = entry.target; // container (DIV)
  const imagen = container.querySelector("img");
  const url = imagen.dataset.src;
  //load image
  imagen.src = url;
  //console.log(nodo.nodeName);

  loadedImages++;
  printLog();
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntercepting).forEach(accion);
});
//

export const registerImage = (imagen) => {
  // IntersectionObserver -> observer(imagen)
  observer.observe(imagen);
};
