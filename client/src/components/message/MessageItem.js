import React, { Fragment ,useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import { deleteMessage} from '../../actions/message';
import { getMessage } from '../../actions/message';
import axios from 'axios';
 
import Navbar from '../../components/layout/Navbar';
import MessageForm from '../messages/MessageForm';
           
const MessageItem = ({
    deleteMessage,
  auth: { isAuthenticated },
  match,
  message: { _id ,from_user,toUser,text, submessages, date},
  
}) =>{

     const [loading, setLoading] = useState(false)
     
      const [formData, setFormData] = useState({
        //   post_id:_id,
        //   post_title:title,
        //   rank:''

      })
 
      const { post_id, post_title, rank,} = formData;

      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });


      const onSubmit = async e => {
          e.preventDefault();
        //   addVote({ post_id, post_title, rank });
          
        };


        
  
        


  useEffect(() => {
    getMessage(match.params.id);
 
    // axios.get('/api/messages')
    //     .then(res => {
    //       //console.log(res);
    //       setMessages(res.data)
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })

        // axios.get('/api/auth')
        // .then(res => {
        //   //console.log(res);
        //   setAuth(res.data)
        // })
        // .catch((err) => {
        //   console.log(err);
        // })






  },[getMessage]);

 





  return (

  <>
 
     <Navbar />
       <div className="aqle3-main">
       <div className="mainword2">
       <center> 
       <div className="main-about" >

        {_id}
        {text}
        {date}
        {toUser}
        {from_user}

 


    </div>
    </center> 
    </div>
    </div>
  </>


  )
};

MessageItem.defaultProps = {
  showActions: true
};

MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
  deleteMessage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,


};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {deleteMessage}
)(MessageItem);
