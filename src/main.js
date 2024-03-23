import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from '../src/js/pixabay-api';
// import { createGalleryMarkup } from '../js';
export const refs = {
  formEl: document.querySelector('form'),
  formCont: document.querySelector('form-container'),
};
export let query = '';
const galleryList = document.querySelector('gallery');
const inQuery = document.querySelector('form-control');
inQuery.addEventListener('input', e => {
  e.preventDefault();
  query = inQuery.value.trim();
  galleryList.innerHTML = '';
});
const fetchUsersBtn = document.querySelector('.btn');
fetchUsersBtn.addEventListener('click', e => {
  e.preventDefault();
  if (query) {
    fetchImages(query)
      .then(images => renderUsers(images))
      .catch(error =>
        iziToast.error({
          title: 'Error',
          backgroundColor: 'red',
          position: 'topRight',
          message: 'Please try again!',
        })
      );
  }
});
