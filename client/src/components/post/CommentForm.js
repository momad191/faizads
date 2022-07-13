import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

import { useTranslation } from 'react-i18next';
import Spinner from '../layout/Spinner';
 
const CommentForm = ({ postId, addComment }) => {

  const [t, i18next] = useTranslation()
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

      {i18next.language === 'ar' &&(
        <Fragment> 
        <input
         className="Formcomments"
          name='text'
          placeholder={t('postItems_comment_form_writeComment')}
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
         
        <button className="Commentbutton" type='submit'  >  
        {t('postItems_comment_form_sendComment')} {' '}
          <i class="fa fa-paper-plane" aria-hidden="true"></i> 
          </button>
          </Fragment>
      )}


 

{i18next.language === 'en' &&(
        <Fragment> 

<button className="CommentbuttonENglish" type='submit'  >  
        {t('postItems_comment_form_sendComment')} {' '}
          <i class="fa fa-paper-plane" aria-hidden="true"></i> 
          </button>

        <input
         className="FormcommentsEnglish"
          name='text'
          placeholder={t('postItems_comment_form_writeComment')}
          value={text}
          onChange={e => setText(e.target.value)}
          required
        /> 
         
    

          </Fragment>
      )}
        
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
