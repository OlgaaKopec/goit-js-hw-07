import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
function createGalleryItem(item) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item')
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link')
    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image')
    galleryImage.setAttribute('data-source',item.preview)

    galleryLink.href = item.original;
    galleryImage.src = item.preview;
    galleryImage.alt = item.description;
  
    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
  
       return galleryItem; 
    }
      
  const galleryItemsElements = galleryItems.map(item => createGalleryItem(item));
  gallery.append(...galleryItemsElements);
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',
  });
console.log(galleryItems);
