import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { addSubMessage } from '../../actions/message';
// import { deleteComment } from '../../actions/post';
   
const SubChatForm = ({
  addSubMessage,
  msgId,
  // comment: { _id, text,username, first_name,last_name, avatar, user, date },
  // auth,
  // deleteComment
}) => {
 
  const [text, setmessage] = useState('');
  return (
    <div className="chat-left-sending"> 
    <div style={{display:'flex'}}>
    <form
      className='mainFormChat' 
      onSubmit={e => {
        e.preventDefault();
        addSubMessage(msgId, { text ,msgId });
        setmessage('');
      }}
    > 
      <input
       className="FormChat"
        name='text'
        placeholder='اكتب  هنا'
        value={text}
         onChange={e => setmessage(e.target.value)}
         required
      />
       
      <button className="Commentbutton" type='submit'  >  إرسال  <i class="fa fa-paper-plane" aria-hidden="true"></i> </button>
      
    </form>
  </div>
  </div>
   )
    };

SubChatForm.propTypes = {
//   postId: PropTypes.string.isRequired,
//   comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
//   deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
 {addSubMessage}  
//   { deleteComment }
)(SubChatForm);
