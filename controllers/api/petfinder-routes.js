const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();
const { Pet } = require('../../models');
const sequelize = require('../../config/connection.js');
const {getToken, getPetfinder} = require('../../utils/petfinder-helpers');

// General Search for Pets by Type, Location, and Distance
router.post('/', async (req, res) => {
    try {
        const searchData = req.body;
        // Run Petfinder API calls
        const token = await getToken();
        let searchResults = await getPetfinder(token, searchData);
        searchResults = searchResults.animals;
        // Filter out Results without a Picture
        const filteredSearchResults = searchResults.filter((term) => {
            return term.primary_photo_cropped;
        });
        // Commit Results to Database
        filteredSearchResults.forEach(async (result) => {
            await Pet.create({
                Pet_name: result.name,
                Age: result.age,
                breeds: result.breeds.primary,
                description: result.description,
                petfinder_id: result.id,
                type: result.type,
                photos: result.primary_photo_cropped.small,
            }); 
        });
        res.status(200).json(filteredSearchResults);
    } catch (err) {
      return res.status(500).json(err);
    }
});

module.exports = router;