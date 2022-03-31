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
const ProfitRequest = require('../../models/ProfitRequest');
 
 
// @route    POST api/profitrequests
// @desc     POST profitrequest
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
        const newProfitRequest = new ProfitRequest({
          amount: req.body.amount,
          name: user.name,
          avatar: user.avatar,
          user: req.user.id
        });
        const profitrequest = await newProfitRequest.save();
        res.json(profitrequest);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );




// @route    GET api/profitrequests عدد كل الطلبات الارباح المكتملة
// @desc     GET profitrequest
// @access   private
router.get('/allrequests', auth, async (req, res) => {
  try {
    // const username = await User.findById(req.user.id).select('-password');
    const profitrequests = await ProfitRequest.find({user:req.user.id});
    res.json(profitrequests);
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
      const profitrequests = await ProfitRequest.find({user:req.user.id,status:'complete'});
      res.json(profitrequests);
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
    const profitrequests = await ProfitRequest.find({user:req.user.id,status:'check-in'});
    res.json(profitrequests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
  // @route    GET api/profitrequests اخر طلب
// @desc     GET profitrequest
// @access   private
router.get('/lastrequest', auth, async (req, res) => {
  try {
     // const username = await User.findById(req.user.id).select('-password');
    const lastrequest = await ProfitRequest.findOne({user:req.user.id,status:'check-in'}).sort({date:-1});
 
    if(lastrequest === null ){
      res.json({
        amount: '',
        name: '',
        avatar: '',
        user: '',
        date: '',
        status: '',
      });
    
 
    }else {
      res.json(lastrequest);
    }


   
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



module.exports = router;