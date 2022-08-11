const { Dog } = require('../models');

const router = require('express').Router();

router.get('/', async (req,res) => {
    res.render('homePage');
})

const getAllDogs = () => {
    const dogDData = Dog.findAll()
    return dogDData
}

//test
router.get('/all', async (req,res) => {
    const dogData = await getAllDogs()
    const dogs = dogData.map((dog) => dog.get({ plain: true }));
    res.render('all', { dogs });
})

router.post('/seed', async (req, res) => {
    // seedCategories
    try {
        const seedData = await seedDogs()
        res.json(seedData)
    } catch (error) {
      res.json(error)
    }
})


module.exports = router;