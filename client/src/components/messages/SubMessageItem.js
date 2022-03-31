import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import moment from 'moment'; 
// import 'moment/locale/ar';
import axios from 'axios';
import { deleteSubMessage } from '../../actions/message';
import Spinner from '../layout/Spinner';

const SubMessageItem = ({
  messageId,
  sm: { _id, text,msgId, from_user, date },
  auth,
  deleteMessage
}) => {
  
  const [user,setUser]= useState([])

  useEffect(() => {
 
    axios.get('/api/auth')
    .then(res => {
      console.log(res);
      setUser(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

 
  },[user]);
  
  return(
    <>  
  
 {from_user._id != user._id ?(
   <Fragment> 
     
<div className='hisMSG-container'>
<div  className='hisMSG'  key={_id}>
{text} <br/>
<div className='hisMSG-time'> 
 
{moment(date).startOf('minut').fromNow()} 
</div>
</div>
</div>
</Fragment> 
  ):(



 
   <Fragment> 
     
<div className='yourMSG-container'>
<div  className='yourMSG'  key={_id}>
{text} <br/>
<div className='hisMSG-time'>  

{moment(date).startOf('minut').fromNow()} 
</div>
</div>
</div>
</Fragment> 
  )}
 

    {/* {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteSubMessage(messageId, _id)}
          type='button'
          className='Action-button-delete-comment-ar'
        >
          <i className='fa fa-trash' />
        </button>
      )}  */}

 
  </> 
   );
    };

SubMessageItem.propTypes = {
  messageId: PropTypes.string.isRequired,
  mm: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteSubMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
//   { deleteSubMessage }
)(SubMessageItem);
