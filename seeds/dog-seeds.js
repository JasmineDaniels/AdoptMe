const { Pet } = require('../models');

const petData = [ //add pet finder id and sm/med photo
  {
    Pet_name: 'Rocky',
    Age: 1,
    breeds: 'German Shepherd',
    description: 'Rocky is super playful and great with kids!', 
    type_id: 1
    //category_id: 1,
    //user_id: 1
  },
  {
    Pet_name: 'Princess',
    Age: 3,
    breeds: 'Miniture Pinscher',
    description: 'Princess is adorably sweet and loves car rides!', 
    type_id: 2
    //category_id: 2,
    //user_id: 2
  },
  {
    Pet_name: 'Chucky',
    Age: 7,
    breeds: 'Yorkshire Terrier',
    description: 'Chucky needs alot of love and attention, and he loves outdoors!',
    type_id: 3 
    //category_id: 3,
    //user_id: 3,
  },
  {
    Pet_name: 'Roman',
    Age: 7,
    breeds: 'German Shepherd',
    description: 'Roman is a certified emotional support animal and loves traveling!',
    type_id: 3 
    //category_id: 3,
    //user_id: 3,
  }
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;
