import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Moment from 'react-moment';
  
import { addLike, removeLike, deletePost, addFiveStars , addFourStars, addThreeStars, addTwoStars, addOneStars } from '../../actions/post';

import ConfirmButton from "./ConfirmButton";
import axios from 'axios';

import greenFace from './greenFace.png';
import redFace from './redFace.png';
import yallowFace from './yallowFace.png';
      
  
const Posts = ({loading , addLike,auth,five_stars,
  removeLike, 
  deletePost,
  addFiveStars, addFourStars, addThreeStars, addTwoStars,addOneStars,
}) => {

 
  
  // const [getfivestarsuser,setgetfivestarsuser]= useState([])

    const [getPosts,setPosts]= useState([])
    const [get5sum,setget5sum]= useState([])
    const [get4sum,setget4sum]= useState([])
    const [get3sum,setget3sum]= useState([])

    
    
    // const [getAuth,setAuth]= useState([])
    // const [getVote,setVoting]= useState([])

    const [visible,setVisible]= useState(1)
    const [showLike,setShowLike]= useState(true)
    // const [search,setSearch]= useState('')

    const currentResults = getPosts.slice(0,visible);


    //  const searchChanged = async e =>
    //  setSearch({ search: e.target.value });

    
  


    const loadMore = async e => {
        setVisible(visible+10)

    }



 




    useEffect(() => {
        axios.get('/api/posts/userposts')
        .then(res => {
          //console.log(res);
          setPosts(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        axios.get('/api/posts/get5sumUser')
        .then(res => {
          //console.log(res);
          setget5sum(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        axios.get('/api/posts/get4sumUser')
        .then(res => {
          //console.log(res);
          setget4sum(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        axios.get('/api/posts/get3sumUser')
        .then(res => {
          //console.log(res);
          setget3sum(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        // axios.get('/api/posts/getfivestarsuser')
        // .then(res => {
        //   //console.log(res);
        //   setgetfivestarsuser(res.data)
        // })
        // .catch((err) => {
        //   console.log(err);
        // })

 

        // axios.get('/api/votings')
        // .then(res => {
        //   //console.log(res);
        //   setVoting(res.data)
        // })
        // .catch((err) => {
        //   console.log(err);
        // })




        // axios.get('/api/auth')
        // .then(res => {
        //   //console.log(res);
        //   setAuth(res.data)
        // })
        // .catch((err) => {
        //   console.log(err);
        // })




      },[getPosts]);


     
      return loading ? (
        <Spinner/>
      ) : (
        <div>
        
  
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">



        <div className='profile-exp bg-white p-2'>
         
      

           
             
                   
                
            
            </div>

           
 
        <div className="dash-title"> Products </div>
        <Link to="/Addpost" className="Action-button-plus">  <i className="fa fa-plus fa-1x"></i> Add New </Link>
        <Link to="/searchPost" className="Action-button-plus">  <i className="fa fa-search fa-1x"></i> search </Link>
    
      <center>
      <div className='statistics'> 
      <center> <div className="button-statistics"> Number of Posts: <span>{ getPosts.length} </span> </div></center>
      </div>

      <div className='statistics'> 
      <center> <div className="button-statistics">   <img  src={greenFace} style={{width:'55px',height:'50px'}}  />  positive  :{get5sum.length}  </div></center>
      <center> <div className="button-statistics">   <img  src={yallowFace} style={{width:'55px',height:'50px'}} />  neutral   :{get4sum.length}  </div></center>
      <center> <div className="button-statistics">   <img  src={redFace} style={{width:'50px',height:'50px'}} />     negative  :{get3sum.length}  </div></center>

      </div>
      </center>

 

{ getPosts.length < 1 &&
<Fragment> 
 
<Spinner/>
<div className="dash-title"> Start promote products and get feedbacks ...

 
 </div>

</Fragment>
}
         


 {currentResults
   
  

 .map(post => (
     <Fragment>
         
        
      

    <div className="main-list" key={post._id}>
    <div colspan="2">
    <a  className="list-title" target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{textDecoration:'none'}} >    
    {post.title}  </a>
    </div>
     
      <div>
      {post.image && (
      <a target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img src={post.image} style={{ width: '150px', height:'100px',marginBottom:''}} /></a>
      )}



 
          
      <p className="list-details"> <span className="redColor">user :</span>{post.name} | <span className="redColor">Category :</span>{post.CategoryName} | <span className="redColor">Description :</span>{post.short} </p>
     

      {/* {getVote.post_id === post._id &&  getVote.user === getAuth._id   ? (

      <h1>no</h1>
        ):(
      <h1>yes</h1>
        )
        } */}



 

      <p style={{color:"#000",fontSize:"15px"}} className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{post.date}</Moment>
      </p>

      <p className="list-button">

      
      <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-open">        <i className="fa fa-eye fa-1x"></i></button> </Link>




      {/* <button
            onClick={() => addLike(post._id)}
            type='button'
            className='Action-button-update'
          >
            <i className='fa fa-thumbs-up' />{' '}
            
          </button>
          <span>{post.likes.length > 0 && <span>{post.likes.length}</span>}</span>


          <button
            onClick={() => removeLike(post._id)}
            type='button'
            className='Action-button-update'
          >
            <i className='fa fa-thumbs-down' />
          </button> */}




          {!auth.loading && post.user === auth.user._id && (
<Fragment> 

<button  className="Action-button-edit"> <Link to={`/editPost/${post._id}`}  target="_blank"  >   <i className="fa fa-edit fa-1x"></i>  </Link> </button> 

 
            <ConfirmButton
            dialog={["", "Are You Sure?", "Once more to delete"]}
            action={() => deletePost(post._id)}
              />




  </Fragment>
)}


 

      {/* <button
      onClick={() => deleteMarket(market._id)}
      class="Action-button-delete">  <i class="fa fa-close fa-1x"></i> 
       </button> */}

      </p>


 

  
<div className='' style={{display:'flex',alignContent:'center', width:'40%'}}>




<button className='Action-button-update' >
<img  src={greenFace} />
{post.five_stars.length} 
</button>






<button className='Action-button-update' >
<img  src={yallowFace} />
<span>{post.four_stars.length} </span>
</button>


  


<button className='Action-button-update'>
<img  src={redFace} />
<span>{post.three_stars.length}</span>
</button>
</div>


         


        

 


      </div> 
  </div>



     </Fragment>
      ))}


 
 

  {/* onClick={() => loadMore()} */}
  {visible < getPosts.length && (
    <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> loadMore </button> 
       </center>
  )}

        </div>
        </div>
        </div>


        </div>
    )
}
 


Posts.propTypes = {
 
    deletePost: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    addFiveStars: PropTypes.func.isRequired,
    addFourStars: PropTypes.func.isRequired,
    addThreeStars: PropTypes.func.isRequired,
    addTwoStars: PropTypes.func.isRequired,
    addOneStars: PropTypes.func.isRequired,

    removeLike: PropTypes.func.isRequired,
    showActions: PropTypes.bool,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  
  };
  
  const mapStateToProps = state => ({
    market: state.market,
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { addLike, removeLike, deletePost, addFiveStars, addFourStars, addThreeStars, addTwoStars,addOneStars }
  )(Posts);
