const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const MembershipType = require('../../models/MembershipType');
const User = require('../../models/User');


  
 
// @route    POST Method api/membershiptypes 
// @desc     Create a membershiptype
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
        const newMembershipType = new MembershipType({
        m_t_AR_name: req.body.m_t_AR_name,  
        m_t_EN_name: req.body.m_t_EN_name, 
        m_t_code: req.body.m_t_code, 
        m_t_description: req.body.m_t_description, 

        name: user.name,
        user: req.user.id
        });
        const membershiptype = await newMembershipType.save();
        res.json(membershiptype);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

 




  // @route    GET api/membershiptypes
// @desc     Get all membershiptypes
// @access   Private
router.get('/', async (req, res) => {
    try { 
      const membershiptype = await MembershipType.find().sort({ date:-1});
      res.json(membershiptype);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  





  // @route    GET api/membershiptypes/:id
// @desc     Get membershiptype by ID
// @access   Private
router.get('/:id', async (req, res) => {
    try { 
      const membershiptype = await MembershipType.findById(req.params.id);
      // Check for ObjectId format and membershiptype
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !membershiptype) {
        return res.status(404).json({ msg: 'membershiptype not found' });
      }
  
      res.json(membershiptype);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  




    // @route    DELETE api/membershiptypes/:id
// @desc     Delete a membershiptypes
// @access   Private
router.delete('/:id', auth, async (req, res) => {
    try {
      const membershiptype = await MembershipType.findById(req.params.id);
  
      // Check for ObjectId format and post
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !membershiptype) {
        return res.status(404).json({ msg: 'membershiptype not found' });
      }
      await membershiptype.remove();
  
      res.json({ msg: 'membershiptype removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });




  router.route('/update/:id').post((req, res) => {
    MembershipType.findById(req.params.id)
      .then(pp => {
        pp.m_t_AR_name= req.body.m_t_AR_name,
        pp.m_t_EN_name= req.body.m_t_EN_name,  
        pp.m_t_code= req.body.m_t_code,  
        pp.m_t_description= req.body.m_t_description,  
        pp.save()
          .then(() => res.json('membershiptype updated'))
          .catch(err => res.status(400).json('Error: ' + err));
      }) 
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  
   
  
  module.exports = router;