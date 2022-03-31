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

const Followup = require('../../models/Followup'); 

const Rating = require('../../models/Rating'); 



// @route    POST api/followups
// @desc     POST followups
// @access   Public
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
        const shop = await Shop.findOne({username:user.username});

        const newRating = new Rating({
            the_target_shop:  req.body.the_target_shop,
            the_target_shop_username: req.body.the_target_shop_username,
            rating_value:  req.body.rating_value,

            rater_user: user.username,
            // rater_shop :shop.id,

           user: req.user.id
        });
        const rating = await newRating.save();
        res.json(rating);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );  








// @route    GET api/ratings/doyourate
// @desc     GET ratings/doyourate
// @access   private
router.get('/doyourate/:username', auth, async (req, res) => { 
    try { 
       // const username = await User.findById(req.user.id).select('-password');
      const doyourate = await Rating.findOne({user:req.user.id,the_target_shop_username:req.params.username});
   
      if(doyourate === null ){
        res.json({
            the_target_shop: '',
            the_target_shop_username:'',
            rating_value:'',

            rater_user:'',
            // rater_shop :'',
            user:'',
        });
      
   
      }else {
        res.json(doyourate);
      }
  
  
     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });





// @route    DELETE api/ratings/:id
// @desc     Delete a rate
// @access   Private
router.delete('/:id', auth, async (req, res) => {
    try {
      const rating = await Rating.findById(req.params.id);
    
      // Check for ObjectId format and rating
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !rating) {
        return res.status(404).json({ msg: 'ratinging not found' });
      }
  
     
   
      await rating.remove();
  
      res.json({ msg: 'rating removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  



// @route    GET api/ratings/userrating هو قيم
// @desc     GET ratings/userrating
// @access   private
router.get('/userrating/:username', async (req, res) => {
    try {
        // const username = await User.findById(req.user.id).select('-password');
      const userrating = await Rating.find({rater_user:req.params.username})
      .populate({
        path: 'the_target_shop',
        select:
        'shop_name shop_logo_img shop_description username'
      });
  
      // .populate('shop', ['shop_name', 'shop_logo_img','shop_description','username']);
   
      if(userrating === null ){
        res.json({ 
            the_target_shop: '',
            the_target_shop_username:'',
            rating_value:'',
            rater_user:'',
            // rater_shop :'',
            user:'',
        });
      
   
      }else {
        res.json(userrating);
      }
  
  
     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });







  // @route    GET api/ratings/userrater المقييمين  
// @desc     GET ratings/userrating
// @access   private
router.get('/userrater/:username', async (req, res) => {
    try {
        // const username = await User.findById(req.user.id).select('-password');
      const userrater = await Rating.find({the_target_shop_username:req.params.username})
      .populate({
        path: 'user',
        select:
        'first_name last_name  username'
      });
  
      
   
      if(userrater === null ){
        res.json({ 
            the_target_shop: '',
            the_target_shop_username:'',
            rating_value:'',
            rater_user:'',
            // rater_shop :'',
            user:'',
        });
      
   
      }else {
        res.json(userrater);
      }
  
  
     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });






  // @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id', async (req, res) => {
  try {
    var populateQuery =
    [
    {path:'the_target_shop', select: 'shop_name shop_logo_img shop_description username shop_whatsaap shop_email shop_website shop_phone1 shop_phone2 shop_phone3'},
    {path:'user', select: 'first_name last_name username'},
    // {path:'market', select: 'm_AR_name m_EN_name m_code'},
    // {path:'category', select: 'c_AR_name c_EN_name c_code'},
    // {path:'city', select: 'city_AR_name city_EN_name city_code'},
    // {path:'country', select: 'country_AR_name country_EN_name country_code'},
    // {path:'comments', select: 'comments'},
   ];
    const rating = await Rating.findById(req.params.id).populate(populateQuery);

    // Check for ObjectId format and rating
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !rating) {
      return res.status(404).json({ msg: 'rating not found' });
    }

    res.json(rating);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});
 


module.exports = router;