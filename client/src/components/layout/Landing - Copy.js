import React, { Fragment, useEffect ,useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
 
import axios from 'axios';

 
import faces from './faces.png';
import Clients from './Clients-734x700.jpg';


 const Landing = ({loading}) => {

 

  const [getPosts,setPosts]= useState([])
  const [visible,setVisible]= useState(10)
  const currentResults = getPosts.slice(0,visible);

  const loadMore = async e => {
    setVisible(visible+10) }

 

  // if (isAuthenticated) {
  //   return <Redirect to='/dashboard' />;
  // }
  
 

  useEffect(() => {
    axios.get('/api/posts/public')
    .then(res => {
      //console.log(res);
      setPosts(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
 
  }, [getPosts]);


  
  return loading ? (
    <Spinner />
  ) : (



 <Fragment> 
  <div className="aqle3-main">



  

  


   {/* <center> <div style={{width:'100%'}}>   <h1> welcome </h1>   </div> </center>  */}

   
 

   <div className="main-destination-show" style={{border:'none'}} >
     
    <img className="imgStart" src={Clients} />
     <div className="login-title">  Boost Satisfaction with the most powerful customer feedback system </div> 
     <div className="login-title"> <img src={faces} />  </div>
     <center>
     <button className="buttonStart" >  Get started   </button> 
     </center>
     </div>





     <div className="main-destination-show" style={{border:'none'}} >
       <img className="imgStartFloatRight" src={Clients} />
       <div className="login-title">  95% of customers want to give their feedback </div>  
       </div>

 



   <div className="mainword2">
   <div className="login-title">  Latest feedbacks   </div> 


    {currentResults
  
  
   .map(post => (

    <Fragment> 

   


     <Link to={`/posts/${post._id}#/${post.body}/${post.title}`} >
     <div className="main-destination-click" >
		   <img src={post.image} alt="Avatar" />
     <Link to={`/posts/${post._id}#/${post.body}/${post.title}`} >   <h1>  {post.title} </h1></Link>
     <p className="list-details">   <span className="redColor">Category :</span>{post.CategoryName}  </p>
 
		  {/* <center> <Link to={`/posts/${post._id}#/${post.body}/${post.title}`}   style={{color:'#fff',textDecoration:'none'}} > <button class="button-details" >   <i className="fa fa-arrow-up fa-1x"></i> Details  </button> </Link> </center>
		 <p> {post.short}</p> */}

		</div>
    </Link> 
    
    </Fragment>
  ))}
 
{visible < getPosts.length && (

  <center>
    <div className='' style={{width:'100%'}}>
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> loadMore </button> 
      </div>
      </center>
  )}


 
 

 

  


   </div>
   </div>

 
   </Fragment>



     
  );
};


 

export default Landing;
