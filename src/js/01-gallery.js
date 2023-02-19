import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryItemMarkup = createGallery(galleryItems);

const galleryContainer = document.querySelector('.gallery');
function createGallery(items) {
    return items.map(item => `<a class="gallery__item" href="${item.original}" onclick="return false;" rel="noreferrer noopener">
  <img class="gallery__image" 
  src="${item.preview}"
   alt="${item.description}" />
</a>`).join('');
}
galleryContainer.innerHTML = galleryItemMarkup;

let lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
     captionPosition: "bottom"
})