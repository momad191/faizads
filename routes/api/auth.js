const express = require('express');
const router = express.Router();
const crypto = require('crypto')
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
  
  
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   // port: 587,
//   // secure: false,
//   auth: {
//     user: 'r7al.social@gmail.com',
//     pass: 'R7al2366671911#'
//    // pass: '&U4}a$JKly[j'
//   }
   
// });
var transport = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  auth: {
    user: "project.2",
    pass: "secret.2"
  }
});
 

 
const User = require('../../models/User');
const Visualcode = require('../../models/visualCode');
  
// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
router.get('/oneuser/:id', async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
router.get('/allusers', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
 
  
router.get('/visualcodeshow', async (req, res) => {
  try {
    const visualcode = await Visualcode.findOne({}) .sort({ date: -1 });
    res.json(visualcode);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

  
 


 
router.get('/ref', auth, async (req, res) => {
  try {
    const username = await User.findById(req.user.id).select('-password');
    const user = await User.find({ref:username.username});
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
 

  
// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
 
    const { email, password} = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

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





   

router.post('/resetpassword',(req,res)=>{
  crypto.randomBytes(32,(err,buffer)=>{
      if(err){
          console.log(err)
      }
      
      const token = buffer.toString("hex")
      User.findOne({email:req.body.email})
      .then(user=>{
          if(!user){
              return res.status(422).json({error:"User dont exists with that email"})
          }
          user.resetToken = token
          user.expireToken = Date.now() + 3600000
          user.save().then((result)=>{
            transport.sendMail({
                  to:user.email,
                  from:"example@example.com",
                  subject:" من موقع رحال لاستعادة كلمة المرور ",
                  html:`
                  <p>طلبت استعادة كلمة المرور</p>
                  <h5>اضغط هنا <a href="https://r7al.net/Newpassword/${user._id}">الرابط</a> لتغيير كلمة المرور</h5>
                  <p>Thank you </p>
                  `
              })

            // const msg = {
            //   to:user.email,
            //   from: 'info@aqle3.com', // Use the email address or domain you verified above
            //   subject: 'Sending with Twilio SendGrid is Fun',
            //   text: 'and easy to do anywhere, even with Node.js',
            //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            // };


            // //ES6
            //   sgMail
            //   .send(msg)
            //   .then(() => {}, error => {
            //     console.error(error);

            //     if (error.response) {
            //       console.error(error.response.body)
            //     }
            //   });

              res.json({message:"check your email"})
          })

      })
  })
}) 

 
 
 
 

router.route('/new-password/:id').post((req, res) => {
  const newPassword = req.body.password
  const sentToken = req.body.token
  // User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
  User.findById(req.params.id)
  .then(user=>{
      if(!user){
          return res.status(422).json({error:"Try again session expired"})
      }
      bcrypt.hash(newPassword,12).then(hashedpassword=>{
         user.password = hashedpassword
         user.resetToken = undefined
         user.expireToken = undefined
         user.save().then((saveduser)=>{
             res.json({message:"تم تحديث كلمة المرور بنجاح"})
         })
      })
  }).catch(err=>{
      console.log(err)
  })

})



 

//******************************updateProfile****************************************** */
router.post('/updateProfile/:id',auth, async (req, res) => {
  try {
    const pp = await User.findById(req.params.id);
    pp.first_name = req.body.first_name;
    pp.last_name = req.body.last_name;
    pp.payee_name = req.body.payee_name;
    pp.country_name = req.body.country_name;
    pp.country_code = req.body.country_code;
    pp.phone = req.body.phone;
    pp.address1 = req.body.address1;
    pp.address2 = req.body.address2;
    pp.city = req.body.city;
    pp.state = req.body.state;
    pp.postal = req.body.postal; 
    pp.validity = req.body.validity; 
    await pp.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
  
//**************************edit Validity********************************************** */
router.post('/editValidity/:id', async (req, res) => {
  try {
    const pp = await User.findById(req.params.id);
    pp.validity = req.body.validity; 
    await pp.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//************************************************************************ */

  
router.post('/update/:id',auth, async (req, res) => {
  try {
    const pp = await User.findById(req.params.id).select('-password');
    pp.shopstatus = req.body.shopstatus;
    pp.membership_class = req.body.membership_class;
    pp.Payment_status = req.body.Payment_status;
    pp.available_ads = req.body.available_ads;
    pp.membership_renewal_date = req.body.membership_renewal_date;
    pp.membership_renewal_expiry_date = req.body.membership_renewal_expiry_date;
    await pp.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//************************************************************************ */



// @route    PUT api/auth/profitRequest/:id
// @desc     profitRequest a post
// @access   Private
router.post(
  '/profitRequest/:id',
  [  
    auth,
    [
      check('amount', 'amount is required')
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
     // const post = await Post.findById(req.params.id);

      const newProfitRequest = {
        amount: req.body.amount,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      user.profitRequests.unshift(newProfitRequest);

      await user.save();

      res.json(user.profitRequests);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
  

 

 


module.exports = router;
