const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 
  const VotingSchema = new Schema({
  

  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },    

  post_id: {
    type: Schema.Types.ObjectId,
    ref: 'posts'
  },  
  
  post_title: {
    type: String,
    ref: 'posts'
  }, 

 
  rank: {
    type: String,
     
  },
 

  voting_tatus: {
    type: String,
    default:'done'
  },
 
    
 
  name: {
    type: String
  },
  avatar: {
    type: String
  },
 
  date: {
    type: Date,
    default: Date.now
  }
});



module.exports = Voting = mongoose.model('voting', VotingSchema);
