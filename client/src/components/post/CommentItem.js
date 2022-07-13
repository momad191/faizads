import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment'; 
import moment from 'moment';
import 'moment/locale/ar';
import { deleteComment } from '../../actions/post';
import { useTranslation } from 'react-i18next';

  
const CommentItem = ({
  
  postId,
  comment: { _id, text,username, first_name,last_name, avatar, user, date },
  auth,
  deleteComment
}) =>{

  const [t, i18next] = useTranslation()

  {i18next.language === 'ar' && moment.locale('ar'); }
  {i18next.language === 'en' && moment.locale('en'); }
  {i18next.language === 'fr' && moment.locale('fr'); }

return(
  <center>  
   
  <div className='main-list'>
    <div>
      <Link to={`/shops/${username}`}>
        {avatar ?(
          <img className='round-img' src={avatar} alt='' />
        ):(
          <i class="fa fa-home fa-3x round-img" aria-hidden="true"></i>
        )}
         
      </Link>
    </div>
    <div> 
    <div className='comments-title-username'>{username}@ </div>
    <div className='comments-title-name'>{first_name} {last_name}</div>
   
      <p className='about-title'>{text}</p>
    
      <p className='comments-title-name'>
     {i18next.language === 'ar' && (
      <Fragment>
        <center> 
         التاريخ<Moment format='YYYY/MM/DD'>{date}</Moment> 
         </center>
      </Fragment>
     )}

{i18next.language === 'en' && (
      <Fragment>
        <center>
       Date: <Moment format='YYYY/MM/DD'>{date}</Moment>
         </center>
      </Fragment>
     )}
       
     

      </p>
    
    </div>

    {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(postId, _id)}
          type='button'
          className='Action-button-delete-comment-ar'
        >
          <i className='fa fa-trash' />
        </button>
      )}

  </div>
  
  </center>
);
}

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
