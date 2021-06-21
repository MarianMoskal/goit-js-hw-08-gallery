'use strict';

const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryEl = document.querySelector(".gallery");
const modalDiv = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('.lightbox__button');
const overlay = document.querySelector('.lightbox__overlay');

const markup = galleryItems.map(({ preview, original, description }, index) => {
  return `<li class="gallery__item">
          <a class="gallery__link"
              href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                data-index="${index}"
                alt="${description}"/>
            </a></li>`
});
galleryEl.insertAdjacentHTML("beforeend", markup.join(" "));

const images = document.querySelectorAll('.gallery__image');



function catchClickedEl(evt) {
  evt.preventDefault();
  
  let index = Number(evt.target.dataset.index);

    if (evt.target.nodeName !== 'IMG') {
      return;
    };

    modalDiv.classList.add("is-open");

    modalImage.src = evt.target.dataset.source;
    
    window.addEventListener("keydown", (evt, min, max) => {
        min = 0;
        max = images.length - 1;
    
          if (evt.code === 'ArrowRight' && index < max) {
              index += 1;
              modalImage.src = images[index].dataset.source;
              };
        
          if (evt.code === 'ArrowLeft' && index > min) {
              index -= 1;
              modalImage.src = images[index].dataset.source;
            };
      });
};


function closeModal(evt) {
  modalImage.src = "";
  modalDiv.classList.remove("is-open");
};

function closeModalWithOverlay(evt) {
  modalImage.src = "";
  modalDiv.classList.remove("is-open");
};

function closeModalWithEsc(evt) {
    if (evt.code === 'Escape') {
        modalImage.src = "";
        modalDiv.classList.remove("is-open");
      }
};

galleryEl.addEventListener('click', catchClickedEl);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModalWithOverlay);
window.addEventListener("keydown", closeModalWithEsc);




























