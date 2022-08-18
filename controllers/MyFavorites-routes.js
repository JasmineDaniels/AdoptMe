const { Pet } = require('../models');
const { findAll } = require('../models/Pets');
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

const getAllPets = () => {
    const petDData = Pet.findAll()
    return petDData
}

router.get('/signin', (req, res) => {
    res.render('MyPage', {layout: 'nav'});
})
router.get('/petfinder', async (req, res) => {
    res.render('petfinder-search');
});


router.get('/searchResults/*', async (req, res) => {
    try {
    
        const breedData = await Pet.findAll({ 
            where: {
                breeds: [req.params.breeds] //validation case sensitive .lowerCase?
            }
        });
        if (!breedData){
            res.status(404).json({message: `Sorry, No ${req.params.breeds}'s are in our system..`});
            // return alertbox on client side?
            return;
        }
        const breeds = breedData.map((pet) => pet.get({ plain: true }));
        console.log(breeds)
        res.render('breed', { breeds });

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
    
});

router.get('/', async (req,res) => {
    const petData = await getAllPets()
    const pets = petData.map((pet) => pet.get({ plain: true }));
    res.render('MyPage', { pets });
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

// Search by pet finder id - still needs a view 
router.get('/petfinderID/:petfinder_id', async (req, res) => {
    // find a single Dog by its `id`
    try {
        const petData = await Pet.findAll({ 
            where: {
                petfinder_id: [req.params.petfinder_id] 
            }
        });
        //const petData = await Pet.findByPk(req.params.id);
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

router.get('/type/:type', async (req, res) => {
    // find pets by `type`
    try {
        const typeData = await Pet.findAll({ 
            where: {
                type: [req.params.type] //validation case sensitive .lowerCase?
            }
        });
        if (!typeData){
            res.status(404).json({message: `Sorry, No ${req.params.type}s are in our system..`});
            // return alertbox on client side?
            return;
        }
        const types = typeData.map((type) => type.get({ plain: true }));
        console.log(types)
        res.render('type', { types });
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

// get one Dog
router.get('/breed/:breeds', async (req, res) => {
    // find a single Dog by its `breed`
    try {
        const breedData = await Pet.findAll({ 
            where: {
                breeds: [req.params.breeds] //validation case sensitive .lowerCase?
            }
        });
        if (!breedData){
            res.status(404).json({message: `Sorry, No ${req.params.breeds}'s are in our system..`});
            // return alertbox on client side?
            return;
        }
        const breeds = breedData.map((pet) => pet.get({ plain: true }));
        console.log(breeds)
        res.render('breed', { breeds });
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




// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('myPage', {
      users,
      
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  



module.exports = router;