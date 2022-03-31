import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSubMessage } from '../../actions/message';
 
const SubMessageForm = ({ messageId, addSubMessage }) => {
  const [text, setText] = useState('');
  
  return (
    <center>
     
    <div className='main-about'>
    
    <div style={{display:'flex'}}>
      <form
        className='mainForm' 
        onSubmit={e => {
          e.preventDefault();
          addSubMessage(messageId, { text });
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

SubMessageForm.propTypes = {
  addSubMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { addSubMessage }
)(SubMessageForm);
 