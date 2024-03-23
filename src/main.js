import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from '../js';
export const refs = {
  formEl: document.querySelector('form'),
  formCont: document.querySelector('form-container'),
  inputEl: document.querySelector('form-control'),
  ulEl: document.querySelector('gallery'),
};

const fetchUsersBtn = document.querySelector('.btn');
fetchUsersBtn.addEventListener('submit', e => {
  e.preventDefault();
  fetchImages()
    .then(images => renderUsers(images))
    .catch(error => console.log(error));
});
