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
import NavbarEnglish from '../../components/layout/NavbarEnglish';

const noneDisplayI = 'noneDisplayI';
const displayI = 'displayI';
      
  
const PostsEnglish = ({loading , addLike,auth,five_stars,
  removeLike, 
  deletePost,
  addFiveStars, addFourStars, addThreeStars, addTwoStars,addOneStars,
}) => {

 
  
  // const [getfivestarsuser,setgetfivestarsuser]= useState([])

    const [getPosts,setPosts]= useState([])
    const [get5sum,setget5sum]= useState([])
    const [get4sum,setget4sum]= useState([])
    const [get3sum,setget3sum]= useState([])


    const [activationComplete,setgetactivationComplete]= useState([])
    const [activationNo,setgetactivationNo]= useState([])
    const [premiumComplete,setgetpremiumComplete]= useState([])


    
    
    
    // const [getAuth,setAuth]= useState([])
    // const [getVote,setVoting]= useState([])

    const [visible,setVisible]= useState(10)
    const [showLike,setShowLike]= useState(true)
    // const [search,setSearch]= useState('')

    const currentResults = getPosts.slice(0,visible);
    const currentactivationComplete = activationComplete.slice(0,visible);
    const currentactivationNo = activationNo.slice(0,visible);
    const currentPremiumComplete = premiumComplete.slice(0,visible);

    
 

    //  const searchChanged = async e =>
    //  setSearch({ search: e.target.value });

    
    const [showModal ,setShowModal]= useState(true)
    const [hideModal  ,setHideModal]= useState(true)


    const loadMore = async e => {
        setVisible(visible+10)

    }



    const [optionAll, setmyoptionAll] = useState(displayI);
    const optionoptionAll1 = async e => {
      setmyoptionAll(displayI);

      setmyoptionPremium(noneDisplayI);
      setmyoptionActive(noneDisplayI);
      setmyoptionActiveWait(noneDisplayI);
    }



    const [optionPremium, setmyoptionPremium] = useState(noneDisplayI);
    const optionPremium1 = async e => {
      setmyoptionPremium(displayI);

      setmyoptionAll(noneDisplayI);
      setmyoptionActive(noneDisplayI);
      setmyoptionActiveWait(noneDisplayI);
    }



    const [optionActive, setmyoptionActive] = useState(noneDisplayI);
    const optionActive1 = async e => {
      setmyoptionActive(displayI);

      setmyoptionAll(noneDisplayI);
      setmyoptionPremium(noneDisplayI);
      setmyoptionActiveWait(noneDisplayI);
    }


    const [optionActiveWait, setmyoptionActiveWait] = useState(noneDisplayI);
    const optionActiveWait1 = async e => {
      setmyoptionActiveWait(displayI);

      setmyoptionAll(noneDisplayI);
      setmyoptionPremium(noneDisplayI);
      setmyoptionActive(noneDisplayI);
    }



    useEffect(() => {
      
        axios.get('/api/posts')
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


 

        axios.get('/api/posts/activationComplete')
        .then(res => {
          //console.log(res);
          setgetactivationComplete(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        axios.get('/api/posts/activationNo')
        .then(res => {
          //console.log(res);
          setgetactivationNo(res.data)
        })
        .catch((err) => {
          console.log(err);
        })




        axios.get('/api/posts/premiumComplete')
        .then(res => {
          //console.log(res);
          setgetpremiumComplete(res.data)
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




     
     const showModal1 = async e => {
      setShowModal(true)
      };

     
        const hideModal1 = async e => {
        setHideModal(false)
      };

     
      return loading ? (
        <Spinner/>
      ) : (
        <div>
        
        <NavbarEnglish />
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">
  
 
      <center>
        <div className="dash-title"> Your Ads </div>
        {/* <Link to="/dashboard/posts/AddPremiumPost" className="Action-button-plus">  <i className="fa fa-star fa-1x"></i> أضف إعلان مميز </Link> */}
        <Link to="/en/dashboard/posts/Addpost" className="Action-button-add-ads">  <i className="fa fa-plus fa-1x"></i> Add an ad </Link>
        <Link to="/en/dashboard/posts/searchPost" className="Action-button-add-ads">  <i className="fa fa-search fa-1x"></i> Search </Link>
        </center>

 
      <center>
      <div className='statistics'> 
      <center> <div className="button-statistics" onClick={optionoptionAll1}> All ads <span>({getPosts.length}) </span>  </div></center>
      </div>
      </center>

      <center>
      <div className='statistics'> 
      <center> <div className="button-statistics1" onClick={optionActive1}>   <i className="fa fa-check fa-1x"></i>  Activated  :{activationComplete.length}  </div></center>
      <center> <div className="button-statistics2" onClick={optionActiveWait1}>  <i className="fa fa-circle-o-notch fa-1x"></i> Waiting for activation :{activationNo.length}  </div></center>
      {/* <center> <div className="button-statistics3" onClick={optionPremium1}>   <i className="fa fa-star fa-1x"></i>   عدد الاعلانات المميزة  :{premiumComplete.length}  </div></center> */}

      </div>
      </center>



{ getPosts.length < 1 &&
<Fragment> 

<Spinner/>
<div className="dash-title"> Start promoting your service or products 

 
 </div>

</Fragment>
}



{/* //start All   ----------------------------------*/}     
     
<center>
    <div className={optionAll}> 

 {currentResults
   
  

 .map(post => (
     <Fragment>
         
        
      
<center>
    <div className="main-list" key={post._id}>

      

      {post.premium === 'no' &&(
        <div className='title-in-list'>
        <a className='title-in-list'  target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`}  >    
         {post.title}  
         </a>
        </div>
      )}


        {post.premium === 'yes' &&(
        <div className='title-in-list-premium'>
        <a className='title-in-list-premium'  target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`}  >    
         {post.title}  
         </a>
        </div>
      )}


  <div className='section-list'>
    <div>
    {post.image ? (
      <a target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={post.image}  /></a>
      ):(
  
        <a target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={greenFace}  /></a>
      )}
</div>

  
     
      <div>

        
 
 
          
      <p className="list-details"> <span className="redColor">user :</span>{post.name} | <span className="redColor">category :</span>{post.category_code} | <span className="redColor">market :</span>{post.market_code} </p>
     <p className="list-details"> {post.Main_paragraph}</p>
 
      {/* {getVote.post_id === post._id &&  getVote.user === getAuth._id   ? (

      <h1>no</h1>
        ):(
      <h1>yes</h1>
        )
        } */}


 
 

    

<p className="list-button">



{post.premium === 'no' &&(

<Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   Normal ad    <i className="fa fa-circle-o-notch fa-1x"></i></button> </Link>

)}

 
{post.premium === 'yes' &&(

<Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-premium">   premium ad     <i className="fa fa-star fa-1x"></i></button> </Link>

)}




      {post.activation === 'no' && (

      <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">     Waiting for activation     <i className="fa fa-circle-o-notch fa-1x"></i></button> </Link>
  
      )}
      
      {post.activation === 'yes' && (

        <Link to={`/en/dashboard/posts/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-active">   Activated     <i className="fa fa-check fa-1x"></i></button> </Link>

      )}






      <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   Posted on <Moment format='YYYY/MM/DD'>{post.date}</Moment>  <i className="fa fa-calendar fa-1x"></i></button> </Link>




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
<Link to={`/dashboard/posts/editPost/${post._id}`}  style={{textDecoration:'none'}} > <button  className="Action-button-status" >  Edit Post <i className="fa fa-edit fa-1x"></i></button>   </Link> 


<Link to={`/dashboard/posts/editPostActivate/${post._id}`}   style={{textDecoration:'none'}} > <button  className="Action-button-status" >  Activation <i className="fa fa-edit fa-1x"></i></button>   </Link> 

 
            <ConfirmButton
            dialog={[" ", "Are you sure", "confirm deletion"]}
            action={() => deletePost(post._id)}
              />




  </Fragment>
)}


 

      {/* <button
      onClick={() => deleteMarket(market._id)}
      class="Action-button-delete">  <i class="fa fa-close fa-1x"></i> 
       </button> */}

      </p>


 

{/*   
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
</div> */}


         


        

 


      </div> 

      </div>
  </div>

  </center>

     </Fragment>
      ))}









  {/* onClick={() => loadMore()} */}
  {visible < getPosts.length && (
    <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> More  </button> 
       </center>
  )}

        </div>
        </center>
  {/* //End All   ----------------------------------*/}     



  </div>






     {/* //Active  ----------------------------------*/}
 <center>
    <div className={optionActive}> 

   
   


    {currentactivationComplete
   
  

   .map(post => (
       <Fragment>
           
          
        
  <center>
      <div className="main-list" key={post._id}>
  
      {post.premium === 'no' &&(
        <div className='title-in-list'>
        <a className='title-in-list'  target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`}  >    
         {post.title}  
         </a>
        </div>
      )}


        {post.premium === 'yes' &&(
        <div className='title-in-list-premium'>
        <a className='title-in-list-premium'  target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`}  >    
         {post.title}  
         </a>
        </div>
      )}
  
    <div className='section-list'>
      <div>
      {post.image ? (
        <a target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={post.image}  /></a>
        ):(
    
          <a target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={greenFace}  /></a>
        )}
  </div>
  
    
       
        <div>
  
          
  
   
            
        <p className="list-details"> <span className="redColor">المستخدم :</span>{post.name} | <span className="redColor">التصنيف :</span>{post.CategoryName} | <span className="redColor">تفاصيل الإعلان :</span>{post.Main_paragraph} </p>
       
  
        {/* {getVote.post_id === post._id &&  getVote.user === getAuth._id   ? (
  
        <h1>no</h1>
          ):(
        <h1>yes</h1>
          )
          } */}
  
  
   
   
  
      
  
        <p className="list-button">
  
        {post.activation === 'no' &&(
  
        <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   في انتظار التفعيل     <i className="fa fa-circle-o-notch fa-1x"></i></button> </Link>
    
        )}

       {post.activation === 'yes' && (
  
          <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-active">   تم التفعيل     <i className="fa fa-check fa-1x"></i></button> </Link>
  
        )}
  
  
  
  {post.premium === 'no' &&(
  
  <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   Normal ad    <i className="fa fa-circle-o-notch fa-1x"></i></button> </Link>
  
  )}
  
  
  {post.premium === 'yes' &&(
  
  <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-premium">   Premium ad     <i className="fa fa-star fa-1x"></i></button> </Link>
  
  )}
  
  
        <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   نشر بتاريخ <Moment format='YYYY/MM/DD'>{post.date}</Moment>  <i className="fa fa-calendar fa-1x"></i></button> </Link>
  
  
  
  
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
  
  <Link to={`/dashboard/posts/editPost/${post._id}`}  target="_blank" style={{textDecoration:'none'}} > <button  className="Action-button-status" >   Edit Post <i className="fa fa-edit fa-1x"></i></button>   </Link> 
  
   
              <ConfirmButton
              dialog={[" ", "هل أنت متأكد ؟", "مرة أخرى للحذف"]}
              action={() => deletePost(post._id)}
                />
  
  
  
  
    </Fragment>
  )}
  
  
   
  
        {/* <button
        onClick={() => deleteMarket(market._id)}
        class="Action-button-delete">  <i class="fa fa-close fa-1x"></i> 
         </button> */}
  
        </p>
  
  
   
  
  {/*   
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
  </div> */}
  
  
           
  
  
          
  
   
  
  
        </div> 
  
        </div>
    </div>
  
    </center>
  
       </Fragment>
        ))}
  
  
  
  
  
  
  
  
  
    {/* onClick={() => loadMore()} */}
    {visible < activationComplete.length && (
      <center> 
    <button   onClick={loadMore} 
        className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد  </button> 
         </center>
    )}

 
    </div>
    </center>




  {/* //Active waiting  ----------------------------------*/}
 <center>
    <div className={optionActiveWait}> 
  

    {currentactivationNo
   
  

   .map(post => (
       <Fragment>
           
          
        
  <center>
      <div className="main-list" key={post._id}>
  
      {post.premium === 'no' &&(
        <div className='title-in-list'>
        <a className='title-in-list'  target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`}  >    
         {post.title}  
         </a>
        </div>
      )}


        {post.premium === 'yes' &&(
        <div className='title-in-list-premium'>
        <a className='title-in-list-premium'  target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`}  >    
         {post.title}  
         </a>
        </div>
      )}

  
    <div className='section-list'>
      <div>
      {post.image ? (
        <a target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={post.image}  /></a>
        ):(
    
          <a target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={greenFace}  /></a>
        )}
  </div>
  
    
       
        <div>
  
          
  
   
            
        <p className="list-details"> <span className="redColor">المستخدم :</span>{post.name} | <span className="redColor">التصنيف :</span>{post.CategoryName} | <span className="redColor">تفاصيل الإعلان :</span>{post.Main_paragraph} </p>
       
  
        {/* {getVote.post_id === post._id &&  getVote.user === getAuth._id   ? (
  
        <h1>no</h1>
          ):(
        <h1>yes</h1>
          )
          } */}
  
  
   
   
  
      
  
        <p className="list-button">
  
        {post.activation === 'no' && (
  
        <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   في انتظار التفعيل     <i className="fa fa-circle-o-notch fa-1x"></i></button> </Link>
    
        )}

        {post.activation === 'yes' && (
  
          <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-active">   Activated     <i className="fa fa-check fa-1x"></i></button> </Link>
  
        )}
  
  
  
  {post.premium === 'no' &&(
  
  <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   normal ad     <i className="fa fa-circle-o-notch fa-1x"></i></button> </Link>
  
  )}
  
  
  {post.premium === 'yes' &&(
  
  <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-premium">   premium ad     <i className="fa fa-star fa-1x"></i></button> </Link>
  
  )}
  
  
        <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   نشر بتاريخ <Moment format='YYYY/MM/DD'>{post.date}</Moment>  <i className="fa fa-calendar fa-1x"></i></button> </Link>
  
  
  
  
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
  
  <Link to={`/dashboard/posts/editPost/${post._id}`}  target="_blank" style={{textDecoration:'none'}} > <button  className="Action-button-status" >   Edit Post <i className="fa fa-edit fa-1x"></i></button>   </Link> 
  
   
              <ConfirmButton
              dialog={[" ", "هل أنت متأكد ؟", "مرة أخرى للحذف"]}
              action={() => deletePost(post._id)}
                />
  
  
  
  
    </Fragment>
  )}
  
  
   
  
        {/* <button
        onClick={() => deleteMarket(market._id)}
        class="Action-button-delete">  <i class="fa fa-close fa-1x"></i> 
         </button> */}
  
        </p>
  
  
   
  
  {/*   
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
  </div> */}
  
  
           
  
  
          
  
   
  
  
        </div> 
  
        </div>
    </div>
  
    </center>
  
       </Fragment>
        ))}
  
  
  
  
  
  
  
  
  
    {/* onClick={() => loadMore()} */}
    {visible < activationNo.length && (
      <center> 
    <button   onClick={loadMore} 
        className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد  </button> 
         </center>
    )}




 
    </div>
    </center>


{/* //premium  ----------------------------------*/}
    <center>
    <div className={optionPremium}> 
    
       



    {currentPremiumComplete
   
  

   .map(post => (
       <Fragment>
           
          
        
  <center>
      <div className="main-list" key={post._id}>
  
      {post.premium === 'no' &&(
        <div className='title-in-list'>
        <a className='title-in-list'  target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`}  >    
         {post.title}  
         </a>
        </div>
      )}


        {post.premium === 'yes' &&(
        <div className='title-in-list-premium'>
        <a className='title-in-list-premium'  target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`}  >    
         {post.title}  
         </a>
        </div>
      )}
  
    <div className='section-list'>
      <div>
      {post.image ? (
        <a target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={post.image}  /></a>
        ):(
    
          <a target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={greenFace}  /></a>
        )}
  </div>
  
    
       
        <div>
  
          
  
   
            
        <p className="list-details"> <span className="redColor">المستخدم :</span>{post.name} | <span className="redColor">التصنيف :</span>{post.CategoryName} | <span className="redColor">تفاصيل الإعلان :</span>{post.Main_paragraph} </p>
       
  
        {/* {getVote.post_id === post._id &&  getVote.user === getAuth._id   ? (
  
        <h1>no</h1>
          ):(
        <h1>yes</h1>
          )
          } */}
  
  
   
   
  
      
  
        <p className="list-button">
  
        {post.activation === 'no' && (
  
        <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   في انتظار التفعيل     <i className="fa fa-circle-o-notch fa-1x"></i></button> </Link>
    
        )}

        {post.activation === 'yes' && (
  
          <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-active">   تم التفعيل     <i className="fa fa-check fa-1x"></i></button> </Link>
  
        )}
  
  
  
  {post.premium === 'no' &&(
  
  <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   عادي     <i className="fa fa-circle-o-notch fa-1x"></i></button> </Link>
  
  )}
  
  
  {post.premium === 'yes' &&(
  
  <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-premium">   مميز     <i className="fa fa-star fa-1x"></i></button> </Link>
  
  )}
  
  
        <Link to={`/posts/${post._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   نشر بتاريخ <Moment format='YYYY/MM/DD'>{post.date}</Moment>  <i className="fa fa-calendar fa-1x"></i></button> </Link>
  
  
  
  
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
  
  <Link to={`/dashboard/posts/editPost/${post._id}`}  target="_blank" style={{textDecoration:'none'}} > <button  className="Action-button-status" >   Edit Post <i className="fa fa-edit fa-1x"></i></button>   </Link> 
  
   
              <ConfirmButton
              dialog={[" ", "هل أنت متأكد ؟", "مرة أخرى للحذف"]}
              action={() => deletePost(post._id)}
                />
  
  
  
  
    </Fragment>
  )}
  
  
   
  
        {/* <button
        onClick={() => deleteMarket(market._id)}
        class="Action-button-delete">  <i class="fa fa-close fa-1x"></i> 
         </button> */}
  
        </p>
  
  
   
  
  {/*   
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
  </div> */}
  
  
           
  
  
          
  
   
  
  
        </div> 
  
        </div>
    </div>
  
    </center>
  
       </Fragment>
        ))}
  
  
  
  
  
  
  
  
  
    {/* onClick={() => loadMore()} */}
    {visible < premiumComplete.length && (
      <center> 
    <button   onClick={loadMore} 
        className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد  </button> 
         </center>
    )}






    
    </div>
    </center>


        </div>
        </div>


        </div>
       
    )
}
 


PostsEnglish.propTypes = {
 
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
  )(PostsEnglish);
