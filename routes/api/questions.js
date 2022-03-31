const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Question = require('../../models/Question');
const User = require('../../models/User');

 
// @route    POST Method api/questions
// @desc     Create a question
// @access   Private
router.post(
    '/',
    [
      auth,
      [
        check('q_title', 'title is required')
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
        const user = await User.findById(req.user.id).select('-password');
        const newQuestion = new Question({
          q_title: req.body.q_title,
          q_category_id: req.body.q_category_id,
          q_category: req.body.q_category,         
          q_description: req.body.q_description,
          q_image: req.body.q_image,
          name: user.name,
          avatar: user.avatar,
          user: req.user.id
        });
        const question = await newQuestion.save();
        res.json(question);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  



   


// @route    GET api/questions
// @desc     Get all questions
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const questions = await Question.find().sort({ date: -1 });
    res.json(questions);
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
    const question = await Question.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !question) {
      return res.status(404).json({ msg: 'Market not found' });
    }

    // Check user
    // if (post.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'User not authorized' });
    // }
 
    await question.remove();

    res.json({ msg: 'Question removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


 
// @route    GET api/questions/:id
// @desc     Get question by ID
// @access   Private
router.get('/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !question) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(question);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});
 



router.route('/update/:id').post((req, res) => {
  Question.findById(req.params.id)
    .then(pp => {
      pp.q_title = req.body.q_title;
      pp.q_category_id = req.body.q_category_id;  
      pp.q_category = req.body.q_category;       
      pp.q_image = req.body.q_image;
      pp.q_description = req.body.q_description;    
      pp.save()
        .then(() => res.json('market updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});




  module.exports = router; 