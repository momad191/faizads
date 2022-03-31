const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Country = require('../../models/Country');
const User = require('../../models/User'); 
const City = require('../../models/City');
  
   

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



// @route    POST Method api/countries/cities
// @desc     Create a city
// @access   Private
router.post(
  '/cities',
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

      const newCity = new City({
          city_AR_name: req.body.city_AR_name,
          city_EN_name: req.body.city_EN_name,
          city_code: req.body.city_code,
          city_description: req.body.city_description,
          city_image: req.body.city_image,
          name: user.name,
          avatar: user.avatar,
          user: req.user.id,
          countryid:req.body.countryid,
          country_code:req.body.country_code,
      });
      const city = await newCity.save();
      res.json(city);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);  
  
  



  // @route    GET api/countries
// @desc     Get all countries
// @access   public
router.get('/',async (req, res) => {
    try {
      const countries = await Country.find().sort({ });
      res.json(countries);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

 
  router.get('/middle-east',async (req, res) => {
    try {
      const countries = await Country.find({country_description:'middle-east'}).sort({ });
      res.json(countries);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



  router.get('/Asia',async (req, res) => {
    try {
      const countries = await Country.find({country_description:'Asia'}).sort({ });
      res.json(countries);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



  router.get('/Africa',async (req, res) => {
    try {
      const countries = await Country.find({country_description:'Africa'}).sort({ });
      res.json(countries);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


  router.get('/Europe',async (req, res) => {
    try {
      const countries = await Country.find({country_description:'Europe'}).sort({ });
      res.json(countries);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



  router.get('/Australia',async (req, res) => {
    try {
      const countries = await Country.find({country_description:'Australia'}).sort({ });
      res.json(countries);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



  router.get('/NorthAmarica',async (req, res) => {
    try {
      const countries = await Country.find({country_description:'NorthAmarica'}).sort({ });
      res.json(countries);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



  router.get('/SouthAmerica',async (req, res) => {
    try {
      const countries = await Country.find({country_description:'SouthAmerica'}).sort({ });
      res.json(countries);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


    // @route    GET api/countries/cities
// @desc     Get one city
// @access   public
router.get('/cities/:id',async (req, res) => {
  try {
    const city = await City.find({countryid:req.params.id}).sort({ date: -1 });
    res.json(city);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.get('/homeCities/:id',async (req, res) => {
  try {
    const cities = await City.find({country_code:req.params.id}).sort({});
    res.json(cities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



    // @route    GET api/countries/cities
// @desc     Get one city by country_code
// @access   public
router.get('/cities/country_code/:id',async (req, res) => {
  try {
    const city = await City.find({country_code:req.params.id}).sort({ date: -1 });
    res.json(city);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


    // @route    GET api/countries/cities
// @desc     Get all cities
// @access   public
router.get('/cities',async (req, res) => {
  try {
    const city = await City.find({}).sort({});
    res.json(city);
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





  // @route    DELETE api/countries/cities/:id
// @desc     Delete a city
// @access   Private
router.delete('/cities/:id', auth, async (req, res) => {
  try {
    const city = await City.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !city) {
      return res.status(404).json({ msg: 'city not found' });
    }
    await city.remove();

    res.json({ msg: 'city removed' });
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



  router.get('/countyByCode/:id', async (req, res) => {
    try {
      const country = await Country.find({country_code:req.params.id});
  
  
      res.json(country);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });





  router.get('/cityByCode/:id', async (req, res) => {
    try {
      const city = await City.find({country_code:req.params.id});
   
  
      res.json(city);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });


 

  router.get('/onecityinfo/:id/:city', async (req, res) => {
    try {
      const city = await City.find({country_code:req.params.id,city_code:req.params.city});
      res.json(city);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });



  router.get('/citylink/:id', async (req, res) => {
    try {
      const city = await City.findOne({country_code:req.params.id});
      res.json(city);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }); 


    // @route    GET api/cities/:id
// @desc     Get cities by ID
// @access   Private
router.get('/cities/:id', async (req, res) => {
  try {
    const city = await City.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !cities) {
      return res.status(404).json({ msg: 'city not found' });
    }

    res.json(city);
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

 

router.route('/cities/update/:id').post((req, res) => {
  City.findById(req.params.id)
    .then(pp => {
      pp.city_AR_name= req.body.city_AR_name,
      pp.city_EN_name= req.body.city_EN_name,
      pp.city_code= req.body.city_code,
      pp.city_image = req.body.city_image;
      pp.city_description = req.body.city_description;    
      pp.save()
        .then(() => res.json('city updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
 


module.exports = router;