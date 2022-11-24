import { registerImage } from "./lazy.js";

// Crear imagen
// Agregar i#imagen
{
  /* <div class="p-4">
            <img class="mx-auto" width="320" src="https://randomfox.ca/images/15.jpg" alt="" />
</div> */
}

const minimum = 1,
  maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; //TODO

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "bg-gray-300";
  imageWrapper.style.minHeight = "100px";
  imageWrapper.style.display = "inline-block";

  imageWrapper.appendChild(imagen);
  container.appendChild(imagen);

  appendedImages++;
  printLog();

  return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

const addButton = document.querySelector("button");
const cleanButton = document.querySelector("#clean");

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
};

const cleanImages = () => {
  console.log(mountNode.childNodes);

  [...mountNode.childNodes].forEach((child) => {
    child.remove();
  });
};
addButton.addEventListener("click", addImage);
cleanButton.addEventListener("click", cleanImages);
