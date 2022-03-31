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
const Subscription = require('../../models/Subscription');
 
const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AeKXPyrACIZfl4Z5PCi5DPp-4E9TA_Hcfi-AZ3RFy-SCa3tlPqeF_4TBIzK4PHj4v461kGixLQOBEZfw',
  'client_secret': 'ECe5ar_Bdjv_efFIZ7ErMFSbuI1DAKVTgaBhOIeJrDc-OQ-htcA-F8FIZumYkhkmM9u4UcL-uJkTnXf-'
});
 
 
// @route    POST api/subscriptions
// @desc     POST subscription
// @access   private
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
        const newSubscription = new Subscription({
      
            shopname: req.body.shopname,
            shopstatus: req.body.shopstatus,
            membership_class: req.body.membership_class,
            Payment_status: req.body.Payment_status,
            available_ads: req.body.available_ads,
            membership_renewal_date: req.body.membership_renewal_date,
            membership_renewal_expiry_date: req.body.membership_renewal_expiry_date,


            country_name: req.body.country_name,
            country_code: req.body.country_code,
            city: req.body.city,
            state: req.body.state,
            postal: req.body.postal,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            IPv4: req.body.IPv4,
             
            ref:user.ref,
            email:user.email,
            username:user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            avatar: user.avatar,
            user: req.user.id
        });
        const subscription = await newSubscription.save();
        res.json(subscription);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );




// @route    GET api/profitrequests عدد كل الطلبات الارباح المكتملة
// @desc     GET profitrequest
// @access   private
router.get('/allsubscriptions', auth, async (req, res) => {
  try {
    // const username = await User.findById(req.user.id).select('-password');
    const subscriptions = await Subscription.find({user:req.user.id});
    res.json(subscriptions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



// @route    GET api/profitrequests عدد كل الطلبات الارباح المكتملة
// @desc     GET profitrequest
// @access   private
  router.get('/complete', auth, async (req, res) => {
    try {
      // const username = await User.findById(req.user.id).select('-password');
      const subscriptions = await Subscription.find({user:req.user.id,Payment_status:'ok'});
      res.json(subscriptions);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


  // @route    GET api/profitrequests/checkin عدد كل الطلبات الارباح غير مكتملة للتحقق
// @desc     GET profitrequest/checkin
// @access   private
router.get('/checkin', auth, async (req, res) => {
  try {
    // const username = await User.findById(req.user.id).select('-password');
    const profitrequests = await Subscription.find({user:req.user.id,Payment_status:'ok'});
    res.json(profitrequests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
// @route    GET api/profitrequests اخر طلب
// @desc     GET profitrequest 
// @access   private
router.get('/lastsubscription', auth, async (req, res) => {
  try {
      
     // const username = await User.findById(req.user.id).select('-password');
    const lastsubscription = await Subscription.findOne({user:req.user.id}).sort({registration_date:-1})
    .populate({
      path: 'user',
      select:
      'first_name last_name  username'
    });
    ;
  
    if(lastsubscription === null ){
      res.json({
        membership_class: '',
        Payment_status: 'no',
        available_ads:0,
        membership_renewal_expiry_date:Date.now(),
        name: '',
        avatar: '',
        user: '',
        date: '',
        
      });
    
 
    }else {
      res.json(lastsubscription);
    }


   
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.get('/refToPayaffiliate', auth, async (req, res) => {
  try {
    const username = await User.findById(req.user.id).select('-password');
    const user = await Subscription.find({ref:username.username,Payment_status:'ok'});
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

  

module.exports = router;