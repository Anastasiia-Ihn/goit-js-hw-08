// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);


const galleryEl = document.querySelector('.gallery')

galleryEl.insertAdjacentHTML('afterbegin', createCardsMarkup(galleryItems))
galleryEl.addEventListener('click', handlerClickCard)

// ств галереї з бібліотеки
let lightbox = new SimpleLightbox('.gallery a',  { 'captionsData': 'alt', 'captionDelay': 250});

function createCardsMarkup(arr) {
     return arr.map(({preview, original, description}) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}


function handlerClickCard(evt) { 
    evt.preventDefault()   
  
if (evt.target.classList.value !== 'gallery__image') {
  return 
    } 
    // виклик галереї
    lightbox.on('show.simplelightbox')
    // зачистка слухача
    galleryEl.removeEventListener('click', handlerClickCard)
}