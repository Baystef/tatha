const gallery = document.querySelector('#paginated_gallery');
const gallery_scroller = gallery.querySelector('.gallery_scroller');
const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;


function scrollToNextPage(scroller, itemSize) {
  scroller.scrollTo(scroller.scrollLeft + itemSize, 0);
}
function scrollToPrevPage(scroller, itemSize) {
  scroller.scrollTo(scroller.scrollLeft - itemSize, 0);
}

gallery.querySelector('.btn.next').addEventListener('click', () => scrollToNextPage(gallery_scroller, gallery_item_size));
gallery.querySelector('.btn.prev').addEventListener('click', () => scrollToPrevPage(gallery_scroller, gallery_item_size));


//Projects Gallery
const projectsGallery = document.querySelector('#project_paginated_gallery');
const projectsGallery_scroller = projectsGallery.querySelector('.projects-gallery_scroller');
const projectsGallery_item_size = projectsGallery_scroller.querySelector('div').clientWidth;
const projectsContainer = document.querySelector('.projects-container');
const projectDetsContainer = document.querySelector('.projectDets-container');
const projectItem = projectsContainer.querySelectorAll('.item')
const closeDets = projectDetsContainer.querySelector('.close-projectDets');


projectsGallery.querySelector('.btn.next').addEventListener('click', () => scrollToNextPage(projectsGallery_scroller, projectsGallery_item_size));
projectsGallery.querySelector('.btn.prev').addEventListener('click', () => scrollToPrevPage(projectsGallery_scroller, projectsGallery_item_size));

projectItem.forEach((project) => project.onclick = function () {
  projectsContainer.style.display = 'none';
  projectDetsContainer.style.display = 'block';
  closeDets.style.display = 'block';
})

closeDets.onclick = function () {
  projectsContainer.style.display = 'block'
  projectDetsContainer.style.display = 'none';
  closeDets.style.display = 'none';
}

// Packages
const startProjectContainer = document.querySelector('.startProject-container');
const startGalleryContainer = document.querySelector('.startGallery-container');
const tiersContainer = document.querySelector('.tiers-container');

const packagesGrid = document.querySelector('.packagesProject-grid');
const packageImage = packagesGrid.querySelectorAll('.packagesProject-item .packagesProject-image--container');
const galleryProceedBtn = startGalleryContainer.querySelector('.galleryProceed-btn');
const checkPackagesBtn =  startProjectContainer.querySelector('.checkPackages-btn');


const toggleProceedButton = (allSelected) => {
  if (allSelected.length > 0) {
    galleryProceedBtn.removeAttribute("disabled")
    galleryProceedBtn.classList.remove('btn-secondary');
    galleryProceedBtn.classList.add('btn-danger');
  } else {
    galleryProceedBtn.setAttribute("disabled", "");
    galleryProceedBtn.classList.add('btn-secondary');
    galleryProceedBtn.classList.remove('btn-danger');
  }
}

for (var i = 0; i < packageImage.length; i++) {
  packageImage[i].addEventListener("click", function () {
    // Toggle this
    this.classList.toggle("active");
    const allSelected = document.querySelectorAll(".packagesProject-image--container.active")
    toggleProceedButton(allSelected)
  
  }, false);
}

checkPackagesBtn.onclick = function () {
  startGalleryContainer.style.display = 'block';
  startProjectContainer.style.display = 'none';
  tiersContainer.style.display = 'none';
}

galleryProceedBtn.onclick = function () {
  tiersContainer.style.display = 'block';
  startGalleryContainer.style.display = 'none';
  startProjectContainer.style.display = 'none';
}

// Top Nav
const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  } 
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();


//Slick
$(document).ready(function () {
  $('.clients-slideshow').slick({
    infinite: true,
    // speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  $('.partners-slideshow').slick({
    infinite: true,
    // speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    // arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});
