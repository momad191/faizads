import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';
  
const CommentItem = ({
  postId,
  comment: { _id, text,username, first_name,last_name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <center>  
    <div className='main-about'>  
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
     
       التاريخ <Moment format='YYYY/MM/DD'>{date}</Moment>
       
     

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
  </div> 
  </center>
);

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
