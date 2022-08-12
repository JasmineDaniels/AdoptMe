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
})

//tester area
router.get('/all', async (req,res) => {
    const dogData = await getAllDogs()
    const dogs = dogData.map((dog) => dog.get({ plain: true }));
    res.render('all', { dogs });
})

// get One Dog by its ID
router.get('/dog/:id', async (req, res) => {
    // find a single Dog by its `id`
    try {
        const dogData = await Dog.findByPk(req.params.id);
        if (!dogData){
            res.status(404).json({message: `Sorry, No dogs in our system with and id of ${req.params.id}.`});
            // return alertbox on client side?
            return;
        } else {
            const dog = dogData.get({plain: true});
            res.render('dog', dog);
        }   
    } catch (error) {
        res.status(500).json(error)
    }
    
});

// get one Dog
router.get('/:breed', async (req, res) => {
    // find a single Dog by its `breed`
  
});


router.post('/seed', async (req, res) => {
    try {
        const seedData = await seedDogs()
        res.json(seedData)
    } catch (error) {
      res.json(error)
    }
})


module.exports = router;