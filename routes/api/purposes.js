const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Purpose = require('../../models/Purpose');
const User = require('../../models/User');

 
 


// @route    POST Method api/purposes 
// @desc     Create a purpose
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
        const newPurpose = new Purpose({
        p_AR_name: req.body.p_AR_name,  
        p_EN_name: req.body.p_EN_name, 
        p_code: req.body.p_code, 
        p_description: req.body.p_description, 
        name: user.name,
        user: req.user.id
        });
        const purpose = await newPurpose.save();
        res.json(purpose);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  

 
   

// @route    GET api/purposes
// @desc     Get all purposes
// @access   Private
router.get('/', async (req, res) => {
  try { 
    const purposes = await Purpose.find().sort({ date:-1});
    res.json(purposes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




// @route    GET api/purposes/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id', async (req, res) => {
  try { 
    const purpose = await Purpose.findById(req.params.id);
    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !purpose) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(purpose);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


 

  // @route    DELETE api/purposes/:id
// @desc     Delete a purpose
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const purpose = await Purpose.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !purpose) {
      return res.status(404).json({ msg: 'purpose not found' });
    }
    await purpose.remove();

    res.json({ msg: 'purpose removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});
   

router.route('/update/:id').post((req, res) => {
  Purpose.findById(req.params.id)
    .then(pp => {
      pp.p_AR_name= req.body.p_AR_name,
      pp.p_EN_name= req.body.p_EN_name,  
      pp.p_code= req.body.p_code, 
      pp.p_description= req.body.p_description, 
      pp.save()
        .then(() => res.json('Purpose updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }) 
    .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;