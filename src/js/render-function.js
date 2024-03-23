import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';
import { fetchImages } from '../js';

export function renderImages(query) {
  refs.ulEl.innerHTML = '';
}

// refs.formEl.addEventListener('submit', e => {
//   fetchImages(query);
//   e.preventDefault();
//   const query = refs.formEl.elements.query.value;
//   fetchImages(query).then(data => {
//     const markup = createGalleryMarkup(data);
//     refs.ulEl.insertAdjacentHTML('beforeend', markup);
//   });
// });

function createGalleryMarkup(images) {
  return images
    .map(
      ({ webformatURL, largeImageURL, tags }) => `
      <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img       
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
      </a>
    </li>
    <li><h3>likes</h3><p>${images.likes}</p><li/>
    <li><h3>views</h3><p>${images.views}</p><li/>
    <li><h3>comments</h3><p>${images.comments}</p><li/>  
    <li><h3>downloads</h3><p>${images.downloads}</p><li/>  
  `
    )
    .join('');
}
// container.insertAdjacentHTML('beforeend', createGalleryMarkup(images));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('show.simplelightbox', function () {});
