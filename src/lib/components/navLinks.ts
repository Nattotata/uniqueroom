import * as m from '$lib/paraglide/messages';

export const navLinks = [
  {
    alt: m.navAbout(),
    link: '#about',
  },
  {
    alt: m.navRooms(),
    link: '#rooms',
  },
  {
    alt: m.navGallery(),
    link: '#gallery',
  },
  {
    alt: m.navPrices(),
    link: '#pricing',
  },
  {
    alt: m.navVoucher(),
    link: '#voucher',
  },
  {
    alt: m.navContact(),
    link: '#contact',
  },
];

export const pages = {
  giftVoucher: {
    alt: m['pages.giftVoucher.alt'](),
    src: '/giftVoucher',
  },
  homepage: {
    alt: m['pages.home.alt'](),
    src: '/',
  },
};
