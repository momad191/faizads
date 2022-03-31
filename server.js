const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
 
const app = express();
  
//Connect Database
connectDB();


// Init Middelware
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded(
  //  {extended:false}
//));
app.use(cors());
app.use('/public',express.static('public'));

//this is allow us to get data in reques.body
app.use(express.json({ extended:false }));
 
//Define Routes

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/categories', require('./routes/api/categories'));
app.use('/api/markets', require('./routes/api/markets'));
app.use('/api/questions', require('./routes/api/questions'));
app.use('/api/votings', require('./routes/api/votings'));
app.use('/api/countries', require('./routes/api/countries'));
app.use('/api/visualcodes', require('./routes/api/visualcodes'));
 
app.use('/api/profitrequests', require('./routes/api/profitrequests'));
app.use('/api/subscriptions', require('./routes/api/subscriptions'));
app.use('/api/shops', require('./routes/api/shops'));
app.use('/api/followups', require('./routes/api/followups'));
app.use('/api/ratings', require('./routes/api/ratings'));
app.use('/api/reports', require('./routes/api/reports'));
app.use('/api/messages', require('./routes/api/messages'));


   
 
  


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


  const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => console.log(`server started on port ${PORT}`));


 app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
  });
  
  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });
  




 