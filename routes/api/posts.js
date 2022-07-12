const express = require('express');
const router = express.Router(); 
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
   
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
 
const Category = require('../../models/Category');
const Country = require('../../models/Country');
const City = require('../../models/City');
const Market = require('../../models/Market');
const Shop = require('../../models/Shop');
const Purpose = require('../../models/Purpose');

 
 
const mongoose = require('mongoose'); 
const { populate } = require('../../models/Post');

const cloudinary = require('cloudinary').v2;
 

cloudinary.config({
  cloud_name: "momad191",
  api_key: "569326899647897",
  api_secret: "OGnEPD07ZzKxlk2WeATnuGShhNw",
});

 
  

 

// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Text is required')
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
      const shop = await Shop.findOne({user:user.id});
      const market = await Market.findOne({m_code:req.body.market_code});
      const category = await Category.findOne({c_code:req.body.category_code});
       const city = await City.findOne({city_code:req.body.city_code});
       const country = await Country.findOne({country_code_upper_case:user.country_code});
       const purpose = await Purpose.findOne({p_code:req.body.purpose_code});
         

      const newPost = new Post({
        title: req.body.title,
        title_English: req.body.title_English,
        activation: req.body.activation,
        purpose_code: req.body.purpose_code,
        price: req.body.price,
        currency: req.body.currency,
        premium:req.body.premium,
          
    



        category_code: req.body.category_code,
        category_name: req.body.category_name,
        market_code: req.body.market_code,
        market_name: req.body.market_name,
  
        country_code: country.country_code,
        city_code: req.body.city_code,
 
        mobile:  req.body.mobile,
        whatsapp: req.body.whatsapp ,
        telephone: req.body.telephone ,
        email: req.body.email,
        websitelink: req.body.websitelink,
        Main_paragraph: req.body.Main_paragraph,
        Main_English_paragraph: req.body.Main_English_paragraph,
 
        video: req.body.video,
        Keywords: req.body.Keywords,
        short: req.body.short,
        image: req.body.image,


        pic1: req.body.pic1,
        pic2: req.body.pic2,
        pic3: req.body.pic3,
        pic4: req.body.pic4,
        pic5: req.body.pic5,
        pic6: req.body.pic6,
        pic7: req.body.pic7,
        pic8: req.body.pic8,
        pic9: req.body.pic9,
        pic10: req.body.pic10,
        
        duration: req.body.duration,
        expired: req.body.expired,
 
        user: req.user.id,
        username:user.username,
        name: user.name,
        avatar: user.avatar,
        
        shop:shop._id,
        category:category._id,
        market:market._id,
         country:country._id,
         city:city._id,
         purpose:purpose._id
         
          
      });
  
      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
  
 //activationComplete
router.get('/activationComplete', auth, async (req, res) => {
  try {

    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},

   ];
    // const posts = await Post.find().sort({ date:-1 });
    // const posts = await Post.and([{ user: req.user.id }])

    const posts = await  Post.find({activation:'yes',user:req.user.id}).sort({ date:-1 }).populate(populateQuery);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 

 //activationCompleteAdmin
 router.get('/activationCompleteAdmin', auth, async (req, res) => {
  try {

    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},

   ];
    // const posts = await Post.find().sort({ date:-1 });
    // const posts = await Post.and([{ user: req.user.id }])

    const posts = await  Post.find({activation:'yes'}).sort({ date:-1 }).populate(populateQuery);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 



 //activationNo
 router.get('/activationNo', auth, async (req, res) => {
  try {

    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},
   ];
    // const posts = await Post.find().sort({ date:-1 });
    // const posts = await Post.and([{ user: req.user.id }])

    const posts = await  Post.find({activation:'no',user:req.user.id}).sort({ date:-1 }).populate(populateQuery);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



 //activationNoAdmin
 router.get('/activationNoAdmin', auth, async (req, res) => {
  try {

    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},
   ];
    // const posts = await Post.find().sort({ date:-1 });
    // const posts = await Post.and([{ user: req.user.id }])

    const posts = await  Post.find({activation:'no'}).sort({ date:-1 }).populate(populateQuery);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



 //premium
 router.get('/premiumComplete', auth, async (req, res) => {
  try {
    
    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},

   ];

    const posts = await  Post.find({premium:'yes', user:req.user.id}).sort({ date:-1 }).populate(populateQuery);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
 


 //premium
 router.get('/premiumCompleteAdmin', auth, async (req, res) => {
  try {
    
    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},

   ];

    const posts = await  Post.find({premium:'yes', user:req.user.id}).sort({ date:-1 }).populate(populateQuery);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/get5sumUser', auth, async (req, res) => {
  try {
    // const posts = await Post.find().sort({ date:-1 });
    // const posts = await Post.and([{ user: req.user.id }])

    const posts = await  Post.find({'five_stars.rate':'5', user:req.user.id});
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/get5s/:id', auth, async (req, res) => {
  try {
    // const posts = await Post.find().sort({ date:-1 });
    // const posts = await Post.and([{ user: req.user.id }])

    const posts = await  Post.find({'five_stars.user':req.user.id, _id: req.params.id});
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




router.get('/get4sumUser', auth, async (req, res) => {
  try {
    // const posts = await Post.find().sort({ date:-1 });
    // const posts = await Post.and([{ user: req.user.id }])

    const posts = await  Post.find({'four_stars.rate':'4', user:req.user.id});
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/get4s/:id', auth, async (req, res) => {
  try {
    // const posts = await Post.find().sort({ date:-1 });
    // const posts = await Post.and([{ user: req.user.id }])

    const posts = await  Post.find({'four_stars.user':req.user.id, _id: req.params.id});
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});






router.get('/get3sumUser', auth, async (req, res) => {
  try {
    // const posts = await Post.find().sort({ date:-1 });
    // const posts = await Post.and([{ user: req.user.id }])

    const posts = await  Post.find({'three_stars.rate':'3', user:req.user.id});
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/get3s/:id', auth, async (req, res) => {
  try {
    // const posts = await Post.find().sort({ date:-1 });
    // const posts = await Post.and([{ user: req.user.id }])

    const posts = await  Post.find({'three_stars.user':req.user.id, _id: req.params.id});
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



 
  

// @route    GET api/posts/home
// @desc     Get all posts/home
// @access   public
router.get('/homePage/:country_code', async (req, res) => {
  try {

    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},

   ];
 
    const posts = await Post.find({country_code:req.params.country_code,activation:'yes'}).sort({ premium:-1,date:-1 }).populate(populateQuery).gt('expired', Date());
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
router.get('/homePage/:country_code/:city_code', async (req, res) => {
  try {

    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},

   ];


    const posts = await Post.find({country_code:req.params.country_code,city_code:req.params.city_code,activation:'yes'}).sort({ premium:-1,date:-1 }).populate(populateQuery).gt('expired', Date());
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/homePage/:country_code/:city_code/:market_code', async (req, res) => {
  try {


    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},

   ];


    const posts = await Post.find({country_code:req.params.country_code,city_code:req.params.city_code,market_code:req.params.market_code,activation:'yes'}).sort({ premium:-1,date:-1 }).populate(populateQuery).gt('expired', Date());
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



 




router.get('/homePage/:country_code/:city_code/:market_code/:purpose_code', async (req, res) => {
  try {


    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},

   ];



    const posts = await Post.find({country_code:req.params.country_code,city_code:req.params.city_code,market_code:req.params.market_code,purpose_code:req.params.purpose_code,activation:'yes'}).sort({ premium:-1,date:-1 }).populate(populateQuery).gt('expired', Date());
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




router.get('/homePage/:country_code/:city_code/:market_code/:purpose_code/:category_code', async (req, res) => {
  try {
 
    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},

   ];




    const posts = await Post.find({country_code:req.params.country_code,city_code:req.params.city_code,market_code:req.params.market_code,purpose_code:req.params.purpose_code,category_code:req.params.category_code,activation:'yes'}).sort({ premium:-1,date:-1 }).populate(populateQuery).gt('expired', Date());
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
  

// @route    GET api/posts
// @desc     Get all posts
// @access   public
router.get('/', async (req, res) => {
  try {  
    var populateQuery =
     [
     {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
     {path:'user', select: 'first_name last_name username'},
     {path:'market', select: 'm_AR_name m_EN_name m_code'},
     {path:'category', select: 'c_AR_name c_EN_name c_code'},
     {path:'city', select: 'city_AR_name city_EN_name city_code'},
     {path:'country', select: 'country_AR_name country_EN_name country_code'},
     {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},
    ];

    const posts = await Post.find().sort({ premium:-1,date:-1 })

     .populate(populateQuery)
 
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

  

// @route    GET api/posts/userposts
// @desc     Get all userposts
// @access   Private
router.get('/userposts', auth, async (req, res) => {
  try { 
    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},
   ];

    const posts = await Post.find({user:req.user.id}).sort({ premium:-1,date:-1 })
    .populate(populateQuery);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});





// @route    GET api/posts/userPostsInToday
// @desc     Get all userPostsInToday
// @access   Private
router.get('/userPostsInToday', auth, async (req, res) => {
  try { 
    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},
   ]; 
  var d = new Date();
 
 
  
    const posts = await Post.find()
    .sort({ premium:-1,date:-1 })
    .populate(populateQuery);

    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.get('/getarray', auth, async (req, res) => {
  try {
    const posts = await Post.find({});
    
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

     

// @route    GET api/posts
// @desc     Get all posts
// @access   public
router.get('/public', async (req, res) => {
  try {
    const posts = await Post.find().sort({ premium:-1,date:-1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 

 
 

router.get('/topics', async (req, res) => {
  try {
    const posts = await Post.find({Publish:"yes"}).sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
// @route    GET api/posts/topics
// @desc     Get all topics 
// @access   Private 
//----------------------------------------
router.get('/topics11/:Categoryid', async (req, res) => {
  try {
    const posts = await Post.find({ Categoryid: req.params.Categoryid,Publish:"yes"})
    .sort({ date: -1 })
    .populate('categories', ['body', 'text']);
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.get('/PrivacyPolicy', async (req, res) => {
  try {
    const posts = await Post.find({ body:"PrivacyPolicy"})
     //.sort({ date: -1 })
     // .populate('categories', ['body', 'text']);
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/Social', async (req, res) => {
  try {
    const posts = await Post.find({ body:"SocialMediaLinks"})
     //.sort({ date: -1 })
     // .populate('categories', ['body', 'text']);
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


 

router.get('/AboutUs', async (req, res) => {
  try {
    const posts = await Post.find({ body:"about"})
     //.sort({ date: -1 })
     // .populate('categories', ['body', 'text']);
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 

router.get('/aboutCompetition', async (req, res) => {
  try {
    const posts = await Post.find({ body:"aboutCompetition"})
     //.sort({ date: -1 })
     // .populate('categories', ['body', 'text']);
      
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.get('/topicsSide/', async (req, res) => {
  try {
    const posts = await Post.find({Publish:"yes"})
    ;
     
    ;
    res.json(posts);
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
    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username shop_whatsaap shop_email shop_website shop_phone1 shop_phone2 shop_phone3'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},
    // {path:'comments', select: 'user'},
 
   ];
    const post = await Post.findById(req.params.id).populate(populateQuery);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(post);
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
    const post = await Post.findById(req.params.id);
  
    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check user
    // if (post.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'User not authorized' });
    // }
 
    await post.remove();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});
 
// @route    PUT api/posts/like/:id
// @desc     Like a post
// @access   Private
router.put('/like/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    // if (
    //   post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    // ) {
    //   return res.status(400).json({ msg: 'Post already liked' });
    // }

    post.likes.unshift({ user: req.params.id });

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/posts/unlike/:id
// @desc     Like a post
// @access   Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    // Get remove index
    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    PUT api/posts/click/:id
// @desc     Click a post
// @access   Private
router.put('/click/:id', async (req, res) => {
  try { 
    const post = await Post.findById(req.params.id);
    post.clicks.unshift({ post: req.params.id });
    await post.save();
    res.json(post.clicks); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  } 
});

// @route    POST api/posts/comment/:id
// @desc     Comment on a post
// @access   Private
router.post(
  '/comment/:id',
  [
    auth,
    [
      check('text', 'Text is required')
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
      const post = await Post.findById(req.params.id);
      const shop = await Shop.findOne({user:user.id});

      const newComment = {
        text: req.body.text,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        // avatar: shop.shop_img,
        user: req.user.id
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


// @route    DELETE api/posts/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Pull out comment
    const comment = post.comments.find(
      comment => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // Get remove index
    const removeIndex = post.comments
      .map(comment => comment.id)
      .indexOf(req.params.comment_id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
// @route    GET api/posts/userposts/:user
// @desc     Get posts by user ID
// @access   Public


router.get('/up/up/:id', async (req, res) => {
 
  try {
    const upee = await Post.find({_id:req.params.id});
    res.json(upee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
  
 

//************************************************************************ */

router.post('/update/:id', async (req, res) => {


    try {
      const pp = await Post.findById(req.params.id)
      pp._id = req.body._id;
      pp.Main_paragraph = req.body.Main_paragraph;
      pp.title = req.body.title;

       
   
      await pp.save();

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});





//***********************Activate*********************************************
router.post('/activatePost/:id', async (req, res) => {
  try {
    const pp = await Post.findById(req.params.id)
    // pp._id = req.body._id;
    pp.activation = req.body.activation;
    await pp.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//******************************************************************** */



// @route    GET api/posts/topics
// @desc     Get all topics 
// @access   public 
//----------------------------------------
router.get('/public/:Categoryid', async (req, res) => {
  try {
    const posts = await Post.find({ Categoryid: req.params.Categoryid,Publish:"yes"})
    .sort({ date: -1 })
    .populate('categories', ['c_name']);
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


 

// @route    PUT api/posts/five_stars/:id
// @desc     five_stars a post
// @access   Private
router.put('/five_stars/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.five_stars.filter(five_star => five_star.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'Post already liked' });
    }
 
    post.five_stars.unshift({ user: req.user.id, rate:'5'  });

    await post.save();

    res.json(post.five_stars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  } 
});
 


// @route    PUT api/posts/four_stars/:id
// @desc     four_stars a post
// @access   Private
router.put('/four_stars/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.four_stars.filter(four_star => four_star.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'four_star already ' });
    }

    post.four_stars.unshift({ user: req.user.id, rate:'4'  });

    await post.save();

    res.json(post.four_stars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  } 
});


// @route    PUT api/posts/three_stars/:id
// @desc     three_stars a post
// @access   Private
router.put('/three_stars/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.three_stars.filter(three_star => three_star.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'three_stars already ' });
    }

    post.three_stars.unshift({ user: req.user.id, rate:'3' });

    await post.save();

    res.json(post.three_stars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  } 
});



// @route    PUT api/posts/three_stars/:id
// @desc     three_stars a post
// @access   Private
router.put('/two_stars/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.two_stars.filter(two_star => two_star.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'three_stars already ' });
    }

    post.two_stars.unshift({ user: req.user.id, rate:'2'  });

    await post.save();

    res.json(post.two_stars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  } 
});


 

// @route    PUT api/posts/three_stars/:id
// @desc     three_stars a post
// @access   Private
router.put('/one_stars/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.one_stars.filter(one_star => one_star.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'one_stars already ' });
    }

    post.one_stars.unshift({ user: req.user.id , rate:'1'});

    await post.save();

    res.json(post.one_stars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  } 
});







// Post.find().all('five_stars', ['dog', 'cat', 'ferret']);




// // @route    PUT api/posts/like/:id
// // @desc     Like a post
// // @access   Private
// router.put('/views/:id', async (req, res) => {
//   try { 
//     const post = await Post.findById(req.params.id);
 
 
//     post.views.unshift({ click: 'ok'});

//     await post.save();

//     res.json(post.views);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });


 
 

router.get('/postsofshop/:username', async (req, res) => {
  try {

    const user = await User.findOne({username:req.params.username});
 
    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},
   ];
    const posts = await Post.find({user:user._id}).sort({ premium:-1,date:-1 }).populate(populateQuery);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
 
////////////////////////////////////المنشورات التي تظهر في متجر المستخدم////////////////////////////////////////
router.get('/postsofshop/:username/:market_code', async (req, res) => {
  try {
 
    const user = await User.findOne({username:req.params.username});

    var populateQuery =
    [
    {path:'shop', select: 'shop_name shop_logo_img shop_description username'},
    {path:'user', select: 'first_name last_name username'},
    {path:'market', select: 'm_AR_name m_EN_name m_code'},
    {path:'category', select: 'c_AR_name c_EN_name c_code'},
    {path:'city', select: 'city_AR_name city_EN_name city_code'},
    {path:'country', select: 'country_AR_name country_EN_name country_code'},
    {path:'purpose', select: 'p_AR_name p_EN_name p_code p_description'},
   ];

    const posts = await Post.find({user:user._id,market_code:req.params.market_code}).sort({ premium:-1,date:-1 }).populate(populateQuery);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
