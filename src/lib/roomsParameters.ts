const prison = {
  duration: 75,
  people: '3-6',
};
const winery = {
  duration: 75,
  people: '3-6',
};
const cat = {
  duration: 45,
  people: '2-4',
  price: 899,
};

// this is used in pricing
const bigRooms = {
  duration: 75,
  players: '3-6',
  price: 1500,
  discountedPrice: 1100,
};

const parameters = {
  prison: { ...prison },
  winery: { ...winery },
  bigRooms: { ...bigRooms },
  cat: { ...cat },
};

export { prison, winery, cat, parameters, bigRooms };
