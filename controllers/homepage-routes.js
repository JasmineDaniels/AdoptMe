const { Pet } = require('../models');
const { findAll } = require('../models/Pets');
const router = require('express').Router();

const getAllPets = () => {
    const petDData = Pet.findAll()
    return petDData
}

router.get('/', async (req,res) => {
    const petData = await getAllPets()
    const pets = petData.map((pet) => pet.get({ plain: true }));
    res.render('homePage', { pets });
})

//tester area
router.get('/all', async (req,res) => {
    const petData = await getAllPets()
    const pets = petData.map((pet) => pet.get({ plain: true }));
    res.render('all', { pets });
})

// get One Dog by its ID
router.get('/dog/:id', async (req, res) => {
    // find a single Dog by its `id`
    try {
        const petData = await Pet.findByPk(req.params.id);
        if (!petData){
            res.status(404).json({message: `Sorry, No dogs in our system with and id of ${req.params.id}.`});
            // return alertbox on client side?
            return;
        } else {
            const dog = petData.get({plain: true});
            res.render('dog', dog);
        }   
    } catch (error) {
        res.status(500).json(error)
    }
    
});

// get one Dog
router.get('/breed/:breeds', async (req, res) => {
    // find a single Dog by its `breed`
    try {
        // const breedData  = await getAllPets();
        const breedData = await Pet.findAll({ 
            where: {
                breeds: [req.params.breeds]
            }
        })
        console.log(breedData)
        const breeds = breedData.map((pet) => pet.get({ plain: true }));
        console.log(breeds)

        // const requestedBreeds  = breeds.find((pet) => {
        //     pet.breeds == req.params.breeds
        // })
        
        res.render('breed', { breeds });
        // const breedData = Dog.findAll({ 
        //     where: {
        //         breed: [{breed: req.params.breed}]
        //     }
        // })

        
        // .then((breed) => {
        //     const breed = breed.get({plain: true});
        //     res.render('breed', breed);
        // })

        // const { count, rows } = Dog.findAndCountAll({ 
        //     where: {
        //         breed: [req.params.breed]
        //     }
        // })
        // const breed = rows.get({plain: true});
        // res.render('breed', breed);
        
        
        // if (!breedData){
        //     res.status(404).json({message: `Sorry, No ${req.params.breed} dogs are in our system..`});
        //     // return alertbox on client side?
        //     return;
        // } else {
            // const breed = breedData.get({plain: true});
            
            //return res.render('breed', breeds[req.params.breed == breeds.breed]);
            //res.render('breed', breeds);
            // res.render('breed', requestedBreeds);
        // }   
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});


// router.post('/seed', async (req, res) => {
//     try {
//         const seedData = await seedDogs()
//         res.json(seedData)
//     } catch (error) {
//       res.json(error)
//     }
// })


module.exports = router;