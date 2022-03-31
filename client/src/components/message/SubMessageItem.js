import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteSubMessage } from '../../actions/message';
     
const SubMessageItem = ({
  messageId,
  message: { _id, message,toUser, from_user, date,user },
  auth,
  deleteMessage
}) => (
  <center>  
    <div className='main-about'>  
  <div className='main-list'>
    <div>
      {/* <Link to={`/shops/${toUser}`}>
        {avatar ?(
          <img className='round-img' src={avatar} alt='' />
        ):(
          <i class="fa fa-home fa-3x round-img" aria-hidden="true"></i>
        )}
          
      </Link> */}
    </div>
    <div> 
    <div className='comments-title-username'>{toUser}@ </div>
    <div className='comments-title-name'>{from_user} {from_user}</div>
   
      <p className='about-title'>{message}</p>
    
      <p className='comments-title-name'>
     
       التاريخ <Moment format='YYYY/MM/DD'>{date}</Moment>
       
     

      </p>
    
    </div>

    {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteSubMessage(messageId, _id)}
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

SubMessageItem.propTypes = {
  messageId: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteSubMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteSubMessage }
)(SubMessageItem);
