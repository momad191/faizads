import React, { Fragment, useEffect ,useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
 
import axios from 'axios';

import greenFace from './greenFace.png';
import redFace from './redFace.png';
import yallowFace from './yallowFace.png';






 const DisplayCategoryItems = ({loading ,match}) => {



  const [getPosts,setPosts]= useState([])
  const [visible,setVisible]= useState(10)


  const [categoryName,setCategoryName]= useState([])

 

  

  const currentResults = getPosts.slice(0,visible);

  const loadMore = async e => {
    setVisible(visible+10)

}






  // if (isAuthenticated) {
  //   return <Redirect to='/dashboard' />;
  // }
  
  
 
 


  useEffect(() => {
    axios.get('/api/posts/public/'+match.params.id)
    .then(res => {
      //console.log(res);
      setPosts(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


   

 

    axios.get('/api/categories/getname/'+match.params.id)
    .then(res => {
      console.log(res);
      setCategoryName(res.data)
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



  
   <div className="login-title">  {categoryName.c_name} </div>





 

   
   <Link to='#'> 
     <div className="main-destination-show" >
		   <img src={greenFace} alt="Avatar" />
     <Link to='#'>   <h1>  swww </h1></Link>
     <p className="list-details">   <span className="redColor">Category :</span>sws  </p>
  

  
 

   
<div className='' style={{display:'flex',alignContent:'center', width:''}}>


<button className='Action-button-update' style={{backgroundColor:'#fff',textAlign:'center'}}>
<img  src={greenFace} style={{height:'60%', width:'70%'}} />
3
</button>






<button className='Action-button-update' style={{backgroundColor:'#fff'}}>
<img  src={yallowFace} style={{height:'60%', width:'70%'}}/>
<span>4 </span>
</button>





<button className='Action-button-update' style={{backgroundColor:'#fff'}}>
<img  src={redFace} style={{height:'60%', width:'70%'}} />
<span>5</span>
</button>



</div>



		  {/* <center> <Link to={`/posts/${post._id}#/${post.body}/${post.title}`}   style={{color:'#fff',textDecoration:'none'}} > <button class="button-details" >   <i className="fa fa-arrow-up fa-1x"></i> Details  </button> </Link> </center>
		 <p> {post.short}</p> */}


		</div>
    </Link> 

 
   <div className="mainword2">


    {currentResults
  
  
  .map(post => (

    <Fragment> 

 


<Link to={`/posts/${post._id}#/${post.body}/${post.title}`} >
     <div className="main-destination-click" >
		   <img src={post.image} alt="Avatar" />
     <Link to={`/posts/${post._id}#/${post.body}/${post.title}`} >   <h1>  {post.title} </h1></Link>
     <p className="list-details">   <span className="redColor">Category :</span>{post.CategoryName}  </p>
  

  
 

   
<div className='' style={{display:'flex',alignContent:'center', width:''}}>


<button className='Action-button-update' style={{backgroundColor:'#fff',textAlign:'center'}}>
<img  src={greenFace} style={{height:'60%', width:'70%'}} />
{post.five_stars.length} 
</button>






<button className='Action-button-update' style={{backgroundColor:'#fff'}}>
<img  src={yallowFace} style={{height:'60%', width:'70%'}}/>
<span>{post.four_stars.length} </span>
</button>





<button className='Action-button-update' style={{backgroundColor:'#fff'}}>
<img  src={redFace} style={{height:'60%', width:'70%'}} />
<span>{post.three_stars.length}</span>
</button>



</div>



		  {/* <center> <Link to={`/posts/${post._id}#/${post.body}/${post.title}`}   style={{color:'#fff',textDecoration:'none'}} > <button class="button-details" >   <i className="fa fa-arrow-up fa-1x"></i> Details  </button> </Link> </center>
		 <p> {post.short}</p> */}


		</div>
    </Link> 

    </Fragment>
  ))}

{visible < getPosts.length && (
  <button   onClick={loadMore} 
      className=" momadbtn">  <i class="fa fa-arrow-down fa-1x"></i> loadMore </button> 
  )}





 

  


   </div>
   </div>

 
   </Fragment>



     
  );

 
};


 

export default DisplayCategoryItems;
