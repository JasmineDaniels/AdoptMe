const router = require('express').Router();

router.post('/contact', async (req, res) => {
    console.log(req.body)
    try {
        const petData = await Pet.create({
            Pet_name: req.body.Pet_name,
            Age: req.body.Age,
            petfinder_id: req.body.petfinder_id, 
            breeds: req.body.breeds,
            description: req.body.description,
            type: req.body.type,
            photos: req.body.photos,
        }); 
        
        res.status(200).json(petData)
    } catch (error) {
        res.status(400).json(error);
    }

    
})



module.exports = router;