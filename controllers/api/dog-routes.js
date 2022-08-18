const router = require('express').Router();
const { Pet, Category } = require('../../models');

// // The `/api/Dogs` endpoint

// get all Dogs
router.get('/', (req, res) => {
//Get All dogs and related categories
  Pet.findAll({ include: [{model: Category}, ]}) // + model User?
  .then((data) => res.json(data))
  .catch((error) => res.json(error))
});

// get one Dog
router.get('/:id', async (req, res) => {
  // find a single Dog by its `id`
  Pet.findByPk(req.params.id, { include: [{model:Category}, ]}) // + model User?
  .then((data) => res.json(data))
  .catch((error) => res.json(error))
});

// get one Dog
router.get('/:breeds', async (req, res) => {
  // find a single Dog by its `id`
  
  Pet.findAll( {where: {breeds: [req.params.breeds]}}) // include model: Category (type dog or cat) + user (owner)?
  .then((data) => res.json(data))
  .catch((error) => res.json(error))
});

// create new Dog
router.post('/', async (req, res) => {
    /* req.body should look like this...
  
    {
      Dog_name: "Rocky",
      Age: 3,
      Pet ids? Type id?
    }
  */
    try {
      const petData = await Pet.create({ 
        Pet_name: req.body.Pet_name,
        description: req.body.description,
        breeds: req.body.breeds,
        Age: req.body.Age,
        //type: req.body.type ?
      })
      // if (req.body){ 
      //   const petArray = req.body.map((pet) => {
      //     return {
      //       user_id: user.id,
      //       category_id,
      //       type_id,
      //       pet_id,
      //     }
      //   });
      //   return Category.bulkCreate(petArray)
      // }
      
      res.status(200).json(petData);
    } catch (error) {
      res.status(400).json(err);
    }

});

// update Pet?
router.put('/:id', (req, res) => {
  // update Dog data
  try {
    const pet = await Pet.update(
      {
        Pet_name: req.body.dish_name,
        description: req.body.description,
        breeds: req.body.breeds,
        Age: req.body.Age,
        // type: req.body.type,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    //                      .findByPk
    const getPets = await Category.findAll({ where: { pet_id: req.params.id } });

    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

// router.delete('/:id', (req, res) => {
//   // delete one Dog by its `id` value

// });

module.exports = router;
