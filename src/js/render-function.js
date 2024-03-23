import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';
import { fetchImages } from '../js';
refs.formEl.addEventListener('submit', e => {
  fetchImages(query);
  e.preventDefault();
  const query = refs.formEl.elements.name.value;
  console.log(query);
});

export function createGalleryMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) => `
      <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img       
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `
    )
    .join('');
}
container.insertAdjacentHTML('beforeend', createGalleryMarkup(images));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('show.simplelightbox', function () {});
