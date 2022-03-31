const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Category = require('../../models/Category');
const SubCategory = require('../../models/subCategory');

 
 
// @route    POST Method api/categories
// @desc     Create a category
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
        const newCategory = new Category({
          market_id: req.body.market_id,
          market_code: req.body.market_code,
          c_AR_name: req.body.c_AR_name,
          c_EN_name: req.body.c_EN_name,
          c_code: req.body.c_code,
          c_description: req.body.c_description,
          image: req.body.image,

          name: user.name,
          avatar: user.avatar,
          user: req.user.id
        });
        const category = await newCategory.save();
        res.json(category);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


 

// @route    GET api/categories
// @desc     Get all categories
// @access   Private
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find().sort({ });
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/cars', async (req, res) => {
  try {
    const cars = await Category.find({market_id:'61729b0d255aa7119ca20851'}).sort({  });
    res.json(cars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/properties', async (req, res) => {
  try {
    const properties = await Category.find({market_id:'61729aef255aa7119ca207e0'}).sort({ });
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Category.find({market_id:'61729b2d255aa7119ca208c7'}).sort({  });
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.get('/services', async (req, res) => {
  try {
    const services = await Category.find({market_id:'61729b7f255aa7119ca209fa'}).sort({ });
    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


  


router.get('/classifieds', async (req, res) => {
  try {
    const classifieds = await Category.find({market_id:'61729baf255aa7119ca20aae'}).sort({ });
    res.json(classifieds);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 

router.get('/electronics', async (req, res) => {
  try {
    const electronics = await Category.find({market_id:'620f5450ba9645bce0866f82'}).sort({ });
    res.json(electronics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.get('/animals', async (req, res) => {
  try {
    const animals = await Category.find({market_id:'620f55c90b7a60b6f2e8894d'}).sort({ });
    res.json(animals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




router.get('/furniture', async (req, res) => {
  try {
    const furniture = await Category.find({market_id:'620f560f0b7a60b6f2e889c0'}).sort({ });
    res.json(furniture);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.get('/personal-items', async (req, res) => {
  try {
    const personalitems = await Category.find({market_id:'620f56640b7a60b6f2e88a7c'}).sort({ });
    res.json(personalitems);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});







router.get('/food-drinks', async (req, res) => {
  try {
    const fooddrinks = await Category.find({market_id:'620f56bb0b7a60b6f2e88b2d'}).sort({ });
    res.json(fooddrinks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
 

// @route    GET api/categories
// @desc     Get all categories
// @access   public
router.get('/public', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});





// @route    GET api/categories
// @desc     Get all categories
// @access   public
router.get('/getname/:id', async (req, res) => {
  try {
    const categories = await Category.findById(req.params.id).sort();
    res.json(categories);
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
    const category = await Category.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !category) {
      return res.status(404).json({ msg: 'Category not found' });
    }

    // Check user
    // if (post.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'User not authorized' });
    // }
 
    await category.remove();

    res.json({ msg: 'Category removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


 


// @route    GET api/category/:id
// @desc     Get Category by ID
// @access   Private
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !category) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(category);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

  
 
router.route('/update/:id').post((req, res) => {
  Category.findById(req.params.id)
    .then(pp => {
      pp.market_id= req.body.market_id,
      pp.market_code= req.body.market_code,
      pp.c_AR_name= req.body.c_AR_name,
      pp.c_EN_name= req.body.c_EN_name,
      pp.c_code= req.body.c_code,
      pp.c_description = req.body.c_description;    
      pp.image = req.body.image;
         
      pp.save()
        .then(() => res.json('Category updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});








//******************************************************************** */
  
// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post(
  '/subcategory/:id',
  [ 
    auth,
    [
      check('subCategory', 'Text is required')
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

      const newPost = new SubCategory({
        mainCategoryID: req.body.mainCategoryID,
        mainCategoryName :req.body.mainCategoryName,
        subCategory: req.body.subCategory,
       
         
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

  


//************************************************************************ */

router.route('/sub/update/:id').post((req, res) => {
  SubCategory.findById(req.params.id)
    .then(pp => {
      pp.subCategory = req.body.subCategory;

      pp.save()
        .then(() => res.json('تم تعديل التصنيف الفرعي'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


 

router.get('/onecategory/:category_code', async (req, res) => {
  try {
    const category = await Category.find({c_code:req.params.category_code});
    res.json(category);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});



  module.exports = router;