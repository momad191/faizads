 
const express = require('express');
const router = express.Router();
const config = require('config');
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Visualcode = require('../../models/visualCode');
const auth = require('../../middleware/auth');
// User model
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

        const newVisualcode = new Visualcode({
            visual_code: req.body.visual_code,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        });
        const visualcode = await newVisualcode.save();
        res.json(visualcode);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );  

 


module.exports = router;