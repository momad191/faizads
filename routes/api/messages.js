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
const Message = require('../../models/Message');
const Submessage = require('../../models/Submessage');
const Shop = require('../../models/Shop');

     
  

// @route    POST api/messages
// @desc     POST message
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
        // const user = await User.findById(req.user.id).select('-password');
        // const shop = await Shop.findOne({username:req.body.r_username});
         const toUser = await User.findOne({username:req.body.toUser});
     
        const newMessage = new Message({
          from_user: req.user.id,
          to_user: toUser._id,
          toUser: req.body.toUser,
          subject: req.body.subject,
          text: req.body.text,
        });
        const message = await newMessage.save();
        res.json(message);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );




//////////////////////////Incoming messages///////////////////////////
  router.get('/incoming', auth, async (req, res) => {
    try {
      var populateQuery =
      [
  
      {path:'from_user', select: 'first_name last_name username'},
  
  
     ];
      const message = await  Message.find({to_user:req.user.id }).sort({ date:-1 }).populate(populateQuery);
      res.json(message);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



  
// @route    POST api/messages/submessage/:id
// @desc     submessages on a message
// @access   Private
router.post(
  '/submessage/:id',
  [
    auth,
    [
      check('text', 'text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
 
    try {
      // const user = await User.findById(req.user.id).select('-password');
      // const shop = await Shop.findOne({username:req.body.r_username});
      //  const toUser = await User.findOne({username:req.body.toUser});
   
      const newSubmessage = new Submessage({
        
        msgId: req.body.msgId,
        from_user: req.user.id,
        // to_user: toUser._id,
        // toUser: req.body.toUser,
        subject: req.body.subject,
        text: req.body.text,
      });
      const submessage = await newSubmessage.save();
      res.json(submessage);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);





router.get('/:id',auth, async (req, res) => {
  try {
    var populateQuery =
    [
    {path:'from_user', select: 'first_name last_name username'},
   ];
    const message = await  Message.findById(req.params.id).populate(populateQuery);
    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




router.get('/submsgs/:id',auth, async (req, res) => {
  try {
    var populateQuery =
    [
    {path:'from_user', select: 'first_name last_name username'},
   ];
    const submessages = await  Submessage.find({msgId:req.params.id}).populate(populateQuery);
    res.json(submessages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 





// @route    DELETE api/messages/:id
// @desc     Delete a message
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !message) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    // Check user
    // if (post.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'User not authorized' });
    // }
 
    await message.remove();

    res.json({ msg: 'message removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});
 












// @route    DELETE api/posts/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete('/submessage/:id/:submessage_id', auth, async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    // Pull out comment
    const submessage = message.submessages.find(
      submessage => submessage.id === req.params.submessage_id
    );
    
    // Make sure comment exists
    if (!submessage) {
      return res.status(404).json({ msg: 'submessage does not exist' });
    }

    // Check user
    if (submessage.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // Get remove index
    const removeIndex = message.submessages
      .map(submessage => submessage.id)
      .indexOf(req.params.submessage_id);

      message.submessages.splice(removeIndex, 1);

    await message.save();

    res.json(message.submessages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


  module.exports = router;