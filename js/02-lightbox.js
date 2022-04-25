import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};
function galleryRender(galleryItems) {
  refs.gallery.innerHTML = galleryItems.reduce(
    (acc, { preview, original, description } = galleryItems) =>
      acc +
      `<a class="gallery__item" href=${original}>
<img class="gallery__image" src="${preview}" alt=${description} />
</a>`,
    ""
  );
}
galleryRender(galleryItems);
console.log(refs.gallery);
