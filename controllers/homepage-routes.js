const { Dog } = require('../models');
const router = require('express').Router();

const getAllDogs = () => {
    const dogDData = Dog.findAll()
    return dogDData
}

router.get('/', async (req,res) => {
    const dogData = await getAllDogs()
    const dogs = dogData.map((dog) => dog.get({ plain: true }));
    res.render('homePage', { dogs });
    res.render('homePage', {layout: 'nav'});
    // res.render('homePage');
})

//tester area
router.get('/all', async (req,res) => {
    const dogData = await getAllDogs()
    const dogs = dogData.map((dog) => dog.get({ plain: true }));
    res.render('all', { dogs });
})


router.post('/seed', async (req, res) => {
    try {
        const seedData = await seedDogs()
        res.json(seedData)
    } catch (error) {
      res.json(error)
    }
})


module.exports = router;