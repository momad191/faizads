import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Moment from 'react-moment';
//import MarketItem from './MarketItem';
//import MarketForm from './PostForm';
import { addLike, removeLike, deletePost } from '../../actions/post';
import ConfirmButton from "./ConfirmButton";
import axios from 'axios';
        
  
const Post = ({loading , addLike,auth,
  removeLike, 
  deletePost,
  match,
  likes,
  length
}) => {


    const [getPost,setPost]= useState([])
    const [visible,setVisible]= useState(1)
    const [showLike,setShowLike]= useState(true)
    // const [search,setSearch]= useState('')

   
  

    //  const searchChanged = async e =>
    //  setSearch({ search: e.target.value });

    
  
 
    const loadMore = async e => {
      setVisible(visible+10)

  }

    useEffect(() => {
        axios.get('/api/posts/'+match.params.id)
        .then(res => {
          //console.log(res);
          setPost(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


      }, [getPost]);


      return loading ? (
        <Spinner />
      ) : (
        <div>
        
  
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">
 
        <div className="dash-title"> Products </div>
      <Link to="/Addpost" className="Action-button-plus">  <i className="fa fa-plus fa-1x"></i> Add New </Link>
      <Link to="/searchPost" className="Action-button-plus">  <i className="fa fa-search fa-1x"></i> search </Link>
    
    
     {/* <input style={{width:'80%'}}  className="Forminput" type='text' placeholder="product title" onChange={searchChanged} value={search}/> */}

 

 
  
 

  
      <Fragment>
         {/* <MarketItem key={market._id} market={market} /> */}
          
 
     <div className="main-list" key={getPost._id}>
     <div colspan="2">
     <a  className="list-title" target="_blank" href={`/onepost/${getPost._id}#/${getPost.body}/${getPost.title}`} style={{textDecoration:'none'}} >    
     {getPost.title}  </a>
     </div>
      
       <div>
       {getPost.image && (
       <a target="_blank" href={`/onepost/${getPost._id}#/${getPost.body}/${getPost.title}`} style={{color:'#fff',textDecoration:'none'}} > <img src={getPost.image} style={{ width: '150px', height:'100px',marginBottom:''}} /></a>
       )}
 
 
 
   <div style={{width:'100%'}}>   
   
  
 
     
 
     <Link
     onClick={() => removeLike(getPost._id)}
     type='button'
     className='btn btn-primary'
     style={{width:'auto',fontSize:'17px'}}
   >  
     <i  style={{width:'auto',color:'darkblue'}} className='fa fa-thumbs-down' />
   </Link>
 
 
 
 
 
 
     
 
 <Link 
             onClick={() => addLike(getPost._id)}
             type='button'
             className='btn btn-primary'
             style={{width:'auto',fontSize:'15px'}}
           >
             <i  style={{width:'auto',color:'yellow'}} className='fa fa-star fa-2x' />
 
  
              {' '}
   
             {/* {getPost.likes.length > 0 && (
               <span className=''>{getPost.likes.length}</span>
             )} */}
 
             
           </Link> 
  
           
           
          </div>
           
       <p className="list-details"> <span className="redColor">user :</span>{getPost.name} | <span className="redColor">Category :</span>{getPost.CategoryName} | <span className="redColor">Description :</span>{getPost.short} </p>
      
       <p style={{color:"#000",fontSize:"15px"}} className='post-date'>
         Posted on <Moment format='YYYY/MM/DD'>{getPost.date}</Moment>
       </p>
 
       <p className="list-button">
 
       
       <Link to={`/onepost/${getPost._id}`} style={{textDecoration:'none'}} >   <button className="Action-button-open">        <i className="fa fa-eye fa-1x"></i></button> </Link>
  
 {!auth.loading && getPost.user === auth.user._id && (
 <Fragment> 
 <button  className="Action-button-update"><Link to={`/editPost/${getPost._id}`} style={{color:'#fff',textDecoration:'none'}} >   <i className="fa fa-database fa-1x"></i> Update </Link> </button> 
  
 
             <ConfirmButton
             dialog={["", "Are You Sure?", "Once more to delete"]}
             action={() => deletePost(getPost._id)}
               />
   </Fragment>
 )}
 
       {/* <button
       onClick={() => deleteMarket(market._id)}
       class="Action-button-delete">  <i class="fa fa-close fa-1x"></i> 
        </button> */}
 
       </p>
 
 
       
 

 
 
         
 
  
 
 
       </div> 
   </div>
 
 
 
      </Fragment>
     


 

 

        </div>
        </div>
        </div>


        </div>
    )
}
 


Post.propTypes = {
    //getMarkets: PropTypes.func.isRequired,
    //market: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
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
    { addLike, removeLike, deletePost }
  )(Post);
