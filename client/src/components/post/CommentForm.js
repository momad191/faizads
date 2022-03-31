import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
 
const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  
  return (
    <center>
     
    <div className='main-about'>
    
    <div style={{display:'flex'}}>
      <form
        className='mainForm' 
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      > 
        <input
         className="Formcomments"
          name='text'
          placeholder='اكتب تعليق عن الإعلان'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
         
        <button className="Commentbutton" type='submit'  >  إرسال  <i class="fa fa-paper-plane" aria-hidden="true"></i> </button>
        
      </form>
    </div>
    </div>
    
    </center>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
