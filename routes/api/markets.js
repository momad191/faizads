const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Market = require('../../models/Market');
const User = require('../../models/User');

   
// @route    POST Method api/markets
// @desc     Create a market
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
        const newMarket = new Market({
          m_AR_name: req.body.m_AR_name,
          m_EN_name: req.body.m_EN_name,
          m_code: req.body.m_code,
          m_fontawesome_class: req.body.m_fontawesome_class,
          m_description: req.body.m_description,
          m_image: req.body.m_image,

          name: user.name,
          avatar: user.avatar,
          user: req.user.id
        });
        const market = await newMarket.save();
        res.json(market);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  

 


// @route    GET api/markets
// @desc     Get all markets
// @access   Private
router.get('/', async (req, res) => {
  try {
    const markets = await Market.find().sort({ });
    res.json(markets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


 


// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const market = await Market.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !market) {
      return res.status(404).json({ msg: 'Market not found' });
    }

    // Check user
    // if (post.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'User not authorized' });
    // }
 
    await market.remove();

    res.json({ msg: 'Market removed' });
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
    const market = await Market.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !market) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(market);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});




router.get('/onemarket/:m_code', async (req, res) => {
  try {
    const market = await Market.find({m_code:req.params.m_code});
    res.json(market);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});
 


 

 
router.route('/update/:id').post((req, res) => {
  Market.findById(req.params.id)
    .then(pp => {
      pp.m_AR_name= req.body.m_AR_name,
      pp.m_EN_name= req.body.m_EN_name,
      pp.m_code= req.body.m_code,
      pp.m_fontawesome_class= req.body.m_fontawesome_class,
      pp.m_image = req.body.m_image;
      pp.m_description = req.body.m_description;    
      pp.save()
        .then(() => res.json('market updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }) 
    .catch(err => res.status(400).json('Error: ' + err));
});
  


 

  module.exports = router;