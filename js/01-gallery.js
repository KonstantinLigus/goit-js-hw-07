import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);
const refs = {
  gallery: document.querySelector(".gallery"),
};
function galleryRender(galleryItems) {
  refs.gallery.innerHTML = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item"><a class="gallery__link" href="${original}"><img src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
    )
    .join("");
}

refs.gallery.addEventListener("click", onImgClic);

function onImgClic(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imgInstance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}"/>`,
    {
      onClose: () => {
        window.removeEventListener("keydown", imgInstanceClose);
      },
    }
  );
  event.target.onclick = imgInstance.show();
  window.addEventListener("keydown", imgInstanceClose);
}

function imgInstanceClose(event) {
  if (event.code === "Escape") {
    window.removeEventListener("keydown", imgInstanceClose);
    imgInstance.close();
  }
}

galleryRender(galleryItems);
