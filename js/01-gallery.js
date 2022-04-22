import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryRender = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<img src="${preview}" data-src="${original}" alt="${description}">`
  )
  .join("");

gallery.innerHTML = galleryRender;

gallery.addEventListener("click", onImgClic);

function onImgClic(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // event.target.src = event.target.dataset.src;
  event.target.onclick = () => {
    basicLightbox
      .create(
        `<img src="${original}" data-src="${original}" alt="${description}">`
      )
      .show();
  };
}
// console.log(gallery);
