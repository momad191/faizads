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
const Report = require('../../models/Report');
const Shop = require('../../models/Shop');


 

// @route    POST api/reports
// @desc     POST report
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
        // const user = await User.findById(req.user.id).select('-password');
        const shop = await Shop.findOne({username:req.body.r_username});
        const reporteduser = await User.findOne({username:req.body.r_username});
 
        const newReport = new Report({
          user: req.user.id,
          r_subject: req.body.r_subject,
          r_message: req.body.r_message,
          r_username: req.body.r_username,
          r_user_id:reporteduser._id,
          r_shop: shop._id,
         
        });
        const report = await newReport.save();
        res.json(report);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );







  module.exports = router;