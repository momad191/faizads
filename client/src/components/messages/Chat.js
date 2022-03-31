import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import Spinner from '../layout/Spinner';
import MessageItem from './MessageItem';
import SubMessageItem from './SubMessageItem';
import Chats from './Chats';
import SubChatForm from './SubChatForm';
 
 
 
const Chat = ({loading,match }) => {
  const [subMessages,setSubMessages]= useState([])
  const [messages,setMessages]= useState([])
  const [visible,setVisible]= useState(10)

  const currentResults = messages.slice(0,visible);

  const [user,setUser]= useState([])
  
  

  useEffect(() => {
    axios.get('/api/messages/incoming') 
    .then(res => {
      //console.log(res);
      setMessages(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

   

    axios.get('/api/messages/submsgs/'+match.params.id)
    .then(res => {
      //console.log(res);
      setSubMessages(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    axios.get('/api/auth')
    .then(res => {
      console.log(res);
      setUser(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

 
  },[subMessages,messages]);


return (
  <> 
  <Navbar />
<center>  
<div className="aqle3-main">
 
<div className="chat-container">  
 <div className="chat-top">   
<div className=''> <i class="fa fa-weixin" aria-hidden="true"></i> المحادثات  </div> 
</div>

<div className="chat-flex"> 
{/* /////start chat-right/////// */}
<div className="chat-right"> 
<div  className='chat-title'>اخر محادثات</div> 
<Chats />
</div>
{/* /////end chat-right/////// */}
 

{/* /////start chat-left/////// */}
<div className="chat-left"> 
<div className="chat-left-inside"> 


<div className="chat-left-replies"> 


{/* 
 {subMessages.map(msg =>(
  <Fragment>
 {msg.from_user._id !=user._id &&(
   <Fragment> 
<div className='hisMSG-container'>
<div  className='hisMSG'  key={msg._id}>
{msg.text} <br/>
{msg.date} 
</div>
</div>
</Fragment> 
 )}

  {msg.from_user._id === user._id &&(
  <Fragment> 
<div className='yourMSG-container'>
<div  className='yourMSG'  key={msg._id}>
{msg.text} <br/>
{msg.date} 
</div>
</div>
</Fragment> 

 )} 
   
  </Fragment> 
 ))}   
 */}




 


 {subMessages.length < 0 ? (
               <h4>لا يوجد رسائل</h4>
              ) : (
                
                <Fragment>
                {subMessages.map(sm => (
                  <SubMessageItem
                    key={sm._id}
                    sm={sm}
                  />
                ))}
              </Fragment> 

              )} 


</div>
 
  

 

</div>
<SubChatForm  msgId={match.params.id} />
</div>

{/* /////end chat-left/////// */}



</div>
{/* /////end flex/////// */}



</div>
</div>
</center>
</>
);

} ;




Chat.propTypes = {
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
 
)(Chat);

 