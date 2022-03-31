const express = require('express');
const router = express.Router(); 
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Post = require('../../models/Post');
const Voting = require('../../models/Voting');

const User = require('../../models/User');
const mongoose = require('mongoose'); 

  

 
 //*****************************اجابة السؤال الواحد *************************************** */
 
// @route    POST api/votings/
// @desc     Create a voting
// @access   Private voting for product  
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

      const newVoting = new Voting({
        post_id: req.body.post_id,
        post_title: req.body.post_title,
        rank :req.body.rank,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });
 
      const voting = await newVoting.save();

      res.json(voting);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);




//************************************************************************ */
// @route    get api/votings/
// @desc    get all votings  
// @access   Public get all votings  
 
router.get('/', async (req, res) => {

  
  try {
   
     
    const posts = await Voting.find({})
    .sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



//************************************************************************ */
 // @route    get api/votings/:post_id
// @desc    get one voting
// @access   private get all votings  

router.get('/:post_id', auth, async (req, res) => {
  try {
    const posts = await Voting.findOne({ post_id: req.params.post_id,user: req.user.id})
    .sort({ date: -1 });

    if(posts === null ){
      res.json({
        post_id: req.params.post_id,
      });
      

 
    }
    
 
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});







//************************************************************************ */
 

module.exports = router;
