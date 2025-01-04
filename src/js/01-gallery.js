import './init';
import { images } from '../data/images';

// Kullanılacak kısmın import edilmesi
import SimpleLightbox from 'simplelightbox';
// Ek stillerin eklenmesi
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryImages = document.querySelector('.gallery');

const imagesList = images
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

galleryImages.innerHTML = imagesList;

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
