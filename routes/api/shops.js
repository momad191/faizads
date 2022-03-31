const express = require('express');
const router = express.Router();
const gravatar = require('gravatar'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const auth = require('../../middleware/auth');
// User model
const User = require('../../models/User');

const Shop = require('../../models/Shop');
 

router.get('/usershop', auth, async (req, res) => {
  try {
     const shops = await Shop.findOne({user:req.user.id});
    res.json(shops);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 



//shops/shopinfo
//public to get info about the current shop
router.get('/shopinfo/:username', async (req, res) => {
  try {
     const shops = await Shop.findOne({username:req.params.username});
    res.json(shops);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 


  // @route    GET api/Shops/:shop_url
// @desc     Get   Shops/:shop_url
// @access   public
router.get('/:username', async (req, res) => {
  try {
    const shops = await Shop.find({username:req.params.username});
    res.json(shops);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/image/:username', async (req, res) => {
  try {
    const shops = await Shop.findOne({username:req.params.username});
    res.json(shops);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    GET api/Shops
// @desc     Get all Shops
// @access   public
router.get('/', async (req, res) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/allshops', async (req, res) => {
  try {
    const shops = await Shop.find({});
    res.json(shops);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
 



 
// POST   api/shops

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
      const newShop = new Shop({
    
        shop_name: req.body.shop_name,
        shop_type: req.body.shop_type,
        shop_description: req.body.shop_description,
        shop_img: req.body.shop_img,
        shop_logo_img: req.body.shop_logo_img,
        shop_status: req.body.shop_status,
        shop_country_code: req.body.shop_country_code,
        shop_country_name: req.body.shop_country_name,
        youtube: req.body.youtube,
        twitter: req.body.twitter,
        facebook: req.body.facebook,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
 
        shop_email: req.body.shop_email,
        shop_website: req.body.shop_website,
        shop_whatsaap: req.body.shop_whatsaap,
        shop_mobile: req.body.shop_mobile,
        shop_phone1: req.body.shop_phone1,
        shop_phone2: req.body.shop_phone2,
        shop_phone3: req.body.shop_phone3,
        
          username:user.username,
          user: req.user.id
      });
      const shop = await newShop.save();
      res.json(shop);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
 




//******************************updateShop****************************************** */
router.post('/updateShop/:id',auth, async (req, res) => {
  try {
      
    const pp = await Shop.findById(req.params.id);
 
    pp.shop_name = req.body.shop_name;
    pp.shop_type = req.body.shop_type;
    pp.shop_description = req.body.shop_description;
    pp.shop_img = req.body.shop_img;
    pp.shop_logo_img = req.body.shop_logo_img;
    pp.youtube = req.body.youtube;
    pp.twitter = req.body.twitter;
    pp.facebook = req.body.facebook;
    pp.linkedin = req.body.linkedin;
    pp.instagram = req.body.instagram; 
 
    pp.shop_email = req.body.shop_email; 
    pp.shop_website = req.body.shop_website; 
    pp.shop_whatsaap = req.body.shop_whatsaap; 
    pp.shop_mobile = req.body.shop_mobile; 
    pp.shop_phone1 = req.body.shop_phone1; 
    pp.shop_phone2 = req.body.shop_phone2; 
    pp.shop_phone3 = req.body.shop_phone3; 

    await pp.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});  




 // @route    PUT api/shops/click/:id
// @desc     Click a shop
// @access   public
router.put('/click/:id', async (req, res) => {
  try { 
    const shop = await Shop.findById(req.params.id);
    shop.clicks.unshift({ shop: req.params.id });
    await shop.save();
    res.json(shop.clicks); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  } 
}); 
     

 

module.exports = router;