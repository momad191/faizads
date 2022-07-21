
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
const Shop = require('../../models/Shop');
 
const nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  auth: {
    user: "project.2",
    pass: "secret.2"
  }
});
   
   
// @route    POST api/users
// @desc     Register user
// @access   Public
router.post( 
  '/',
  [
    check('first_name', 'Name is required')
      .not()
      .isEmpty(),
      check('last_name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res ,next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { first_name,last_name,username, email, password,validity,country_code,country_name,city,state,postal,latitude,longitude,IPv4,shopname,shopstatus,membership_class,Payment_status,available_ads,membership_renewal_date, membership_renewal_expiry_date,Visual_Code} = req.body;
    

    try {
        //see if username  exists
        let usernameCheck = await User.findOne({ username });
        if (usernameCheck) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'The username you chose already exists...try another' }] });
        }


        //see if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'The email you chose already exists...try another' }] });
      }

      //Get User Gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
 
      user = new User({
        first_name,
        last_name,
        username,
        email,
        password,
        gravatar,
        validity,
        country_name, 
        country_code, 
        city, 
        state, 
        postal, 
        latitude, 
        longitude,
        IPv4,
        shopname,
        shopstatus,
        ref,
        membership_class,
        Payment_status,
        available_ads,
        membership_renewal_date,
        membership_renewal_expiry_date,
        Visual_Code
      });

 
      //encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
  
      user.save();
      res.json(user);

      const payload = {
        user: {
          id: user.id
        }
      };
 
      //return jsonwebtoken
    
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

 
  
    //   transport.sendMail({
    //     to:user.email,
    //     from:"noreply@faizads.com",
    //     subject:" شكرا لتسجيلك بموقع إعلانات فائز",
    //     html:`
    //     <p>اضغط على الرابط التالي لتنشيط حسابك   </p>
    //     <h5>اضغط هنا <a href="http://localhost:3000/user/activate/${user.email}">الرابط</a> لتغيير كلمة المرور</h5>
    //     <p>Thank you </p>
    //     ` 
    // })

   
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
  





// @route    POST api/users/:ref
// @desc     Register user
// @access   Public
router.post(
  '/:ref',
  [ 
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res ,next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { first_name,last_name,username, email, password,validity,country_code,country_name,city,state,postal,latitude,longitude,IPv4,shopname,shopstatus,r_ref,membership_class,Payment_status,available_ads,membership_renewal_date, membership_renewal_expiry_date,Visual_Code} = req.body;
    

    try {

      const Rref = await User.findOne({ username:r_ref });
        //see if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      //Get User Gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
 
      user = new User({
        first_name,
        last_name,
        username,
        email,
        password,
        gravatar,
        validity,
        country_name, 
        country_code, 
        city, 
        state, 
        postal, 
        latitude, 
        longitude,
        IPv4,
        shopname,
        shopstatus,
        ref:Rref._id,
        membership_class,
        Payment_status,
        available_ads,
        membership_renewal_date,
        membership_renewal_expiry_date,
        Visual_Code

      });

 
      //encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      user.save();

      const payload = {
        user: {
          id: user.id,
          username:user.username
        }
      }; 
  
      //return jsonwebtoken
    
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
 


 
// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    const user = await User.find({name:req.params.id});
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
  
 
  
// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/ref', async (req, res) => {
  try {
    const users = await User.find().sort({});
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
 
   
module.exports = router;


 