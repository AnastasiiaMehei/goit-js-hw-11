import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from '../js';
// import { createGalleryMarkup } from '../js';
export const refs = {
  formEl: document.querySelector('form'),
  formCont: document.querySelector('form-container'),
  inputEl: document.querySelector('form-control'),
  ulEl: document.querySelector('gallery'),
};
let query = '';
refs.inputEl.addEventListener('input', e => {
  query = refs.inputEl.query.trim();
  refs.ulEl.innerHTML = '';
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
