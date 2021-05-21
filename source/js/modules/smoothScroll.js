import jump from '../vendor/jump';

const smoothScroll = () => {

  let promoLink = document.getElementById('promo-link');

  let toursLink = document.getElementById('tours-link');
  let galleryLink = document.getElementById('gallery-link');
  let ticketsLink = document.getElementById('tickets-link');
  let regulationsLink = document.getElementById('regulations-link');
  let contactsLink = document.getElementById('contacts-link');

  if (promoLink) {
    promoLink.addEventListener('click', () => {
      jump('.promo-target');
    })
  }

  if (toursLink) {
    toursLink.addEventListener('click', () => {
      jump('.tours-target', {
        duration: 2000
      });
    })
  }

  if (galleryLink) {
    galleryLink.addEventListener('click', () => {
      jump('.gallery-target', {
        duration: 2000
      });
    })
  }

  if (ticketsLink) {
    ticketsLink.addEventListener('click', () => {
      jump('.tickets-target', {
        duration: 2000
      });
    })
  }

  if (regulationsLink) {
    regulationsLink.addEventListener('click', () => {
      jump('.regulations-target', {
        duration: 2000
      });
    })
  }

  if (contactsLink) {
    contactsLink.addEventListener('click', () => {
      jump('.contacts-target', {
        duration: 2000
      });
    })
  }

};

export {smoothScroll};
