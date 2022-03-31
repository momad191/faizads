const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Country = require('../../models/Country');
const User = require('../../models/User'); 

  
   

// @route    POST Method api/countries
// @desc     Create a country
// @access   Private
router.post(
    '/',
    [
      auth,
    ], 
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } 
       
      try {
        const user = await User.findById(req.user.id).select('-password');

        const newCountry = new Country({
            country_AR_name: req.body.country_AR_name,
            country_EN_name: req.body.country_EN_name,
            country_code: req.body.country_code,
            country_description: req.body.country_description,
            country_image: req.body.country_image,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        });
        const country = await newCountry.save();
        res.json(country);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  
  



  // @route    GET api/countries
// @desc     Get all countries
// @access   public
router.get('/', auth,async (req, res) => {
    try {
      const countries = await Country.find().sort({ date: -1 });
      res.json(countries);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });






// @route    DELETE api/countries/:id
// @desc     Delete a country
// @access   Private
router.delete('/:id', auth, async (req, res) => {
    try {
      const country = await Country.findById(req.params.id);
  
      // Check for ObjectId format and post
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !country) {
        return res.status(404).json({ msg: 'country not found' });
      }
      await country.remove();
  
      res.json({ msg: 'country removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });






  // @route    GET api/countries/:id
// @desc     Get country by ID
// @access   Private
router.get('/:id', async (req, res) => {
    try {
      const country = await Country.findById(req.params.id);
  
      // Check for ObjectId format and post
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !country) {
        return res.status(404).json({ msg: 'Post not found' });
      }
  
      res.json(country);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });





    
router.route('/update/:id').post((req, res) => {
  Country.findById(req.params.id)
    .then(pp => {
      pp.country_AR_name= req.body.country_AR_name,
      pp.country_EN_name= req.body.country_EN_name,
      pp.country_code= req.body.country_code,
      pp.country_image = req.body.country_image;
      pp.country_description = req.body.country_description;    
      pp.save()
        .then(() => res.json('country updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
 