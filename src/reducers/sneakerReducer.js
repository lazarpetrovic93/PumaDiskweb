const initialState = {
  sneakersPics: [
    '/images/slider/rsz_aniversary.jpg',
    '/images/slider/rsz_puma-disc-blaze-x-atmos-sun-moon-3.jpg',
    "/images/slider/rsz_puma-x-atmos-disc-blaze-suede-359401-01-6_1-e1424707647907.jpg",
    '/images/slider/rsz_kicks-lab-x-puma-disc-blaze-desert-trooper-1.jpg',
    "/images/slider/rsz_puma-trinomic-disc-blaze-coastal-dark-shadow-1.jpg",
    "/images/slider/rsz_puma_te_disc-702jbt.jpg"
                ],
  tikepa: [
    '/images/slider/rsz_aniversary.jpg',
    '/images/slider/rsz_aniversary.jpg',
    '/images/slider/rsz_aniversary.jpg',
    '/images/slider/rsz_aniversary.jpg',
    '/images/slider/rsz_aniversary.jpg',

  ],
  price: [
    {
      title: 'Sajlice',
      price: '20e (par)',
      time: 'Do 3 dana',
      color: 'Providna'      
    },
    {
      title: 'Plastika',
      price: '40e (uračunate sajlice)',
      time: 'Do 7 dana',
      color: 'Crna'      
    },
    {
      title: 'Točkić',
      price: '10e (par)',
      time: '1 dan',
      color: 'Crna'      
    },
    {
      title: 'Mehanizam',
      price: 'Dogovor',
      time: 'Dogovor',
    }
  ]
}


const sneakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return {
        ...state,
      };

    default:
    return state;
  }
};

export default sneakerReducer;