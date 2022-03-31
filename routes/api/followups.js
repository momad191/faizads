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

        const newFollowup = new Followup({
          following_shop:  req.body.following_shop,
          following_user: req.body.following_user,

          follower_user: user.username,
          follower_shop :shop.id,
          

          user: req.user.id
        });
        const followup = await newFollowup.save();
        res.json(followup);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );  





    // @route    GET api/followup/doyoufollow
// @desc     GET followup/doyoufollow
// @access   private
router.get('/doyoufollow/:username', auth, async (req, res) => { 
    try { 
       // const username = await User.findById(req.user.id).select('-password');
      const doyoufollow = await Followup.findOne({user:req.user.id,following_user:req.params.username});
   
      if(doyoufollow === null ){
        res.json({
          follower_shop: '',
          following_shop: '',

          following_user: '',
          follower_user: '',
        });
      
   
      }else {
        res.json(doyoufollow);
      }
  
  
     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



  // @route    DELETE api/followups/:id
// @desc     Delete a followup
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    
    const followup = await Followup.findById(req.params.id);
  
    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !followup) {
      return res.status(404).json({ msg: 'followup not found' });
    }

   
 
    await followup.remove();

    res.json({ msg: 'followup removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});




 
// @route    GET api/followups/userfollowing هو يتابع
// @desc     GET followups/userfollowing
// @access   private
router.get('/userfollowing/:username', async (req, res) => {
  try {
      // const username = await User.findById(req.user.id).select('-password');
    const userfollowing = await Followup.find({follower_user:req.params.username})
    .populate({
      path: 'following_shop',
      select:
      'shop_name shop_logo_img shop_description username'
    });

    // .populate('shop', ['shop_name', 'shop_logo_img','shop_description','username']);
 
    if(userfollowing === null ){
      res.json({
         
          follower_shop: '',
          following_shop: '',

          following_user: '',
          follower_user: '',
      });
    
 
    }else {
      res.json(userfollowing);
    }


   
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




// @route    GET api/followups/userfollowers المتبعين له
// @desc     GET followups/userfollowers
// @access   private
router.get('/userfollowers/:username', async (req, res) => {
  try {  
      // const username = await User.findById(req.user.id).select('-password');
    const userfollowers = await Followup.find({following_user:req.params.username})

    .populate({
      path: 'follower_shop',
      select:
      'shop_name shop_logo_img shop_description username'
    });


    // .populate('shop', ['shop_name', 'shop_logo_img','shop_description','username']);
  
    if(userfollowers === null ){
      res.json({
        follower_shop: '',
        following_shop: '',

        following_user: '',
        follower_user: '',
       
      });
    
 
    }else {
      res.json(userfollowers);
    }


   
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});






router.get('/ffing/:username', async (req, res) => {
  try {
      // const username = await User.findById(req.user.id).select('-password');
    const userfollowing = await Followup.find({follower_user:req.params.username})
    .populate('shop', ['shop_name', 'shop_logo_img','shop_description','username']);
 
    if(userfollowing === null ){
      res.json({
        follower_shop: '',
        following_shop: '',

        following_user: '',
        follower_user: '',
      });
    
 
    }else {
      res.json(userfollowing);
    }


   
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;