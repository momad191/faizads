import React, { Fragment, useEffect ,useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';  
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

import MessageItem from './SubMessageItem';

import SubMessageForm from './SubMessageForm';
import SubMessageItem from './SubMessageItem';
 


import { getMessage } from '../../actions/message';
  
import { logout } from '../../actions/auth';
   
const Message = ({  auth, auth: { isAuthenticated, user }, getMessage, message: { message, loading }, match }) => {


  useEffect(() => {
    getMessage(match.params.id);
   }, [getMessage]);

  return loading || message === null ? (
    <Spinner />
  ) : (
    <Fragment>
 
      <MessageItem message={message} match={match} showActions={false} />
   
            
      {isAuthenticated ?(
        <Fragment>
      <SubMessageForm messageId={message._id} />

      <center> 
      <div className=''>
        {message.submessages.map(submessage => (
          <SubMessageItem key={submessage._id} submessage={submessage} messageId={submessage._id} />
        ))}
      </div> 
      </center> 


      </Fragment>
      ):(
        <Fragment>
        <center> <h1>dddd</h1></center> 
        </Fragment>
      )}
      

     
 

 
      
    </Fragment>
  );
};

Message.propTypes = {
  getMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  message: state.message,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getMessage,logout }
)(Message);
