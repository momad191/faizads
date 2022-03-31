import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Moment from 'react-moment';
import axios from 'axios';
import Navbar from '../layout/Navbar';
 
import MessageItem from './MessageItem';
import SubChatForm from './SubChatForm';
 
 
 
const Chats = ({loading,match }) => {

  const [messages,setMessages]= useState([])
  const [visible,setVisible]= useState(10)

  const currentResults = messages.slice(0,visible);
  

  useEffect(() => {
    axios.get('/api/messages/incoming') 
    .then(res => {
      //console.log(res);
      setMessages(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

  

    // axios.get('/api/messages/'+match.params.id)
    // .then(res => {
    //   //console.log(res);
    //   setMessage(res.data)
    // })
    // .catch((err) => {
    //   console.log(err);
    // })


    

 
  },[]);


return (
  <> 
 
 




 
{/* /////start chat-right/////// */}
 

{/* /////start chat-block/////// */}
  
<div className="chat-right-inside"> 
   { currentResults.map(msg =>  (
    <Fragment>
     
    <div className="chat-right-block" > 
    <a href={`/dashboard/chat/${msg._id}`} key={msg._id}> 
    <div  className='chat-user-title'>
    <i class="fa fa-user" aria-hidden="true"></i> {msg.from_user.first_name}  {msg.from_user.last_name} 
    <span className='chat-date'> <Moment format='YYYY/MM/DD'>{msg.date}</Moment> </span>
    </div>
    <div className='chat-msg'> {msg.text}  </div>
    </a>
    </div>
    
    </Fragment>
    ))}  

  

{/* /////end chat-block/////// */}
   


 </div>
{/* /////end chat-right/////// */}

{/* /////start chat-left/////// */}


{/* /////end chat-left/////// */}






 
</>
);

} ;




Chats.propTypes = {
  // getMessage: PropTypes.func.isRequired,
  // post: PropTypes.object.isRequired,
  // auth: PropTypes.object.isRequired,
 
};

const mapStateToProps = state => ({
   message: state.message,
   messages: state.messages,
  // auth: state.auth
});

export default connect(
  mapStateToProps,
 
)(Chats);

 