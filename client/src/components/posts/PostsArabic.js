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
import noimg from './emptypic2.jpg';


import redFace from './redFace.png';
import yallowFace from './yallowFace.png';
import Navbar from '../../components/layout/Navbar';


const noneDisplayI = 'noneDisplayI';
const displayI = 'displayI';
      
  
const PostsArabic = ({loading ,match, addLike,auth,five_stars,
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
        
        <Navbar />

          
   
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">
 

      <center>
        <div className="dash-title"> إعلاناتك </div>
        {/* <Link to="/dashboard/posts/AddPremiumPost" className="Action-button-plus">  <i className="fa fa-star fa-1x"></i> أضف إعلان مميز </Link> */}
        <Link to="/ar/dashboard/posts/Addpost" className="Action-button-add-ads">  <i className="fa fa-plus fa-1x"></i> أضف إعلان </Link>
        <Link to="/ar/dashboard/posts/searchPost" className="Action-button-add-ads">  <i className="fa fa-search fa-1x"></i> بحثك </Link>
        </center>


      <center>
      <div className='statistics'> 
      <center> <div className="button-statistics" onClick={optionoptionAll1}> كل الإعلانات: <span>{ getPosts.length} </span> </div></center>
      </div>
      </center>

      <center>
      <div className='statistics'> 
      <center> <div className="button-statistics1" onClick={optionActive1}>   <i className="fa fa-check fa-1x"></i>  تم التفعيل  :{activationComplete.length}  </div></center>
      <center> <div className="button-statistics2" onClick={optionActiveWait1}>  <i className="fa fa-circle-o-notch fa-1x"></i>  في انتظار التفعيل   :{activationNo.length}  </div></center>
      {/* <center> <div className="button-statistics3" onClick={optionPremium1}>   <i className="fa fa-star fa-1x"></i>   عدد الاعلانات المميزة  :{premiumComplete.length}  </div></center> */}

      </div>
      </center>



{ getPosts.length < 1 &&
<Fragment> 

<Spinner/>
<div className="dash-title"> ابدأ بالإعلان عن خدمتك أو سلعتك 

 
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
      <Link   to={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={post.image}  /></Link>
      ):(
  
        <Link   to={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={noimg}  /></Link>
      )}
</div>

   
     
      <div>

        
  
 
          
      <p className="list-details"> <span className="redColor">المستخدم :</span>{post.user.username} | <span className="redColor">التصنيف :</span>{post.category.c_AR_name} | <span className="redColor">السوق :</span>{post.market.m_AR_name}
      
      | <span className="redColor">المتجر :</span>{post.shop.shop_name}
       </p>
     <p className="list-details"> {post.Main_paragraph} </p>
 


<p className="list-button">

{post.premium === 'no' &&(
  <button className="Action-button-status">   عادي     <i className="fa fa-circle-o-notch fa-1x"></i></button> 
)}

 
{post.premium === 'yes' &&(
  <button className="Action-button-status-premium">   مميز     <i className="fa fa-star fa-1x"></i></button> 
)}




      {post.activation === 'no' && (
       <button className="Action-button-status">   في انتظار التفعيل     <i className="fa fa-circle-o-notch fa-1x"></i></button> 
      )}
      
      {post.activation === 'yes' && (
      <button className="Action-button-status-active">   تم التفعيل     <i className="fa fa-check fa-1x"></i></button> 
      )}



   <button className="Action-button-status">   نشر بتاريخ <Moment format='YYYY/MM/DD'>{post.date}</Moment>  <i className="fa fa-calendar fa-1x"></i></button> 

  
 {/* {!auth.loading && post.user === auth.user._id && ( */}
<Fragment> 
<Link to={`/ar/dashboard/posts/editPost/${post._id}`}  style={{textDecoration:'none'}} > <button  className="Action-button-status" >  تعديل النشر <i className="fa fa-edit fa-1x"></i></button>   </Link> 

<Link to={`/ar/dashboard/posts/editPostActivate/${post._id}`}   style={{textDecoration:'none'}} > <button  className="Action-button-status" >  تفعيل الإعلان <i className="fa fa-edit fa-1x"></i></button>   </Link> 

<Link   style={{textDecoration:'none'}} > <button  className="Action-button-status" >  {post.clicks.length} <i className="fa fa-eye fa-1x"></i></button>   </Link> 

 
            <ConfirmButton
            dialog={[" ", "هل أنت متأكد ؟", "مرة أخرى للحذف"]}
            action={() => deletePost(post._id)}
              />

  </Fragment>
 

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
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد  </button> 
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
        <a target="_blank" href={`/posts/${post._id}#/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={post.image}  /></a>
        ):(
    
          <a target="_blank" href={`/posts/${post._id}#/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={noimg}  /></a>
        )}
  </div>
  
    
       
        <div>
  
          
  
   
            
        <p className="list-details"> <span className="redColor">المستخدم :</span>{post.user.username} | <span className="redColor">التصنيف :</span>{post.category.c_AR_name} | <span className="redColor">السوق :</span>{post.market.m_AR_name}
      | <span className="redColor">المتجر :</span>{post.shop.shop_name}
       </p>    
       <p className="list-details"> {post.Main_paragraph} </p>   
  
   
  
  
  
        <p className="list-button">
  
        {post.activation === 'no' &&(
  
        <button className="Action-button-status">   في انتظار التفعيل     <i className="fa fa-circle-o-notch fa-1x"></i></button> 
    
        )}

       {post.activation === 'yes' && (
  
       <button className="Action-button-status-active">   تم التفعيل     <i className="fa fa-check fa-1x"></i></button> 
  
        )}
  
  
  
  {post.premium === 'no' &&(
  
  <button className="Action-button-status">   عادي     <i className="fa fa-circle-o-notch fa-1x"></i></button> 
  
  )}
  
  
  {post.premium === 'yes' &&(
  
  <button className="Action-button-status-premium">   مميز     <i className="fa fa-star fa-1x"></i></button> 
  
  )}
  
  
   <button className="Action-button-status">   نشر بتاريخ <Moment format='YYYY/MM/DD'>{post.date}</Moment>  <i className="fa fa-calendar fa-1x"></i></button> 
  
  
  

  
  
  
  
   {/* {!auth.loading && post.user === auth.user._id && ( */}
  <Fragment> 
  
  <Link to={`/ar/dashboard/posts/editPost/${post._id}`}   style={{textDecoration:'none'}} > <button  className="Action-button-status" >  تعديل النشر <i className="fa fa-edit fa-1x"></i></button>   </Link> 
  

   

   
              <ConfirmButton
              dialog={[" ", "هل أنت متأكد ؟", "مرة أخرى للحذف"]}
              action={() => deletePost(post._id)}
                />
  
  
  
  
    </Fragment>

  </p>
  

  
  
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
    
          <a target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={noimg}  /></a>
        )}
  </div>
  
    
       
        <div>
  
          
  
   
            
        <p className="list-details"> <span className="redColor">المستخدم :</span>{post.user.username} | <span className="redColor">التصنيف :</span>{post.category.c_AR_name} | <span className="redColor">السوق :</span>{post.market.m_AR_name}
      
      | <span className="redColor">المتجر :</span>{post.shop.shop_name}
       </p>  
       <p className="list-details"> {post.Main_paragraph} </p>     
  

      
  
        <p className="list-button">
  
        {post.activation === 'no' && (
  
         <button className="Action-button-status">   في انتظار التفعيل     <i className="fa fa-circle-o-notch fa-1x"></i></button> 
    
        )}

        {post.activation === 'yes' && (
  
         <button className="Action-button-status-active">   تم التفعيل     <i className="fa fa-check fa-1x"></i></button> 
  
        )}
  
  
  
  {post.premium === 'no' &&(
  
  <button className="Action-button-status">   عادي     <i className="fa fa-circle-o-notch fa-1x"></i></button> 
  
  )}
  
  
  {post.premium === 'yes' &&(
  
  <button className="Action-button-status-premium">   مميز     <i className="fa fa-star fa-1x"></i></button> 
  
  )}
  
  
    <button className="Action-button-status">   نشر بتاريخ <Moment format='YYYY/MM/DD'>{post.date}</Moment>  <i className="fa fa-calendar fa-1x"></i></button>

  
  
   {/* {!auth.loading && post.user === auth.user._id && ( */}
  <Fragment> 
  
  <Link to={`/ar/dashboard/posts/editPost/${post._id}`}   style={{textDecoration:'none'}} > <button  className="Action-button-status" >  تعديل النشر <i className="fa fa-edit fa-1x"></i></button>   </Link> 
  
   <Link to={`/ar/dashboard/posts/editPostActivate/${post._id}`}   style={{textDecoration:'none'}} > <button  className="Action-button-status" >  تفعيل الإعلان <i className="fa fa-edit fa-1x"></i></button>   </Link> 

   
              <ConfirmButton
              dialog={[" ", "هل أنت متأكد ؟", "مرة أخرى للحذف"]}
              action={() => deletePost(post._id)}
                />
  
  
  
  
    </Fragment>

        </p>

  
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
    
          <a target="_blank" href={`/posts/${post._id}#/${post.body}/${post.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={noimg}  /></a>
        )}
  </div>
  
    
       
        <div>
  
          
  
   
            
        <p className="list-details"> <span className="redColor">المستخدم :</span>{post.name} | <span className="redColor">التصنيف :</span>{post.CategoryName} | <span className="redColor">تفاصيل الإعلان :</span>{post.Main_paragraph} </p>
       
  
        <p className="list-button">
  
        {post.activation === 'no' && (
  
      <button className="Action-button-status">   في انتظار التفعيل     <i className="fa fa-circle-o-notch fa-1x"></i></button> 
    
        )}

        {post.activation === 'yes' && (
  
      <button className="Action-button-status-active">   تم التفعيل     <i className="fa fa-check fa-1x"></i></button> 
  
        )}
  
  
  
  {post.premium === 'no' &&(
  
   <button className="Action-button-status">   عادي     <i className="fa fa-circle-o-notch fa-1x"></i></button> 
  
  )}
  
  
  {post.premium === 'yes' &&(
  
    <button className="Action-button-status-premium">   مميز     <i className="fa fa-star fa-1x"></i></button> 
  
  )}
  
  
    <button className="Action-button-status">   نشر بتاريخ <Moment format='YYYY/MM/DD'>{post.date}</Moment>  <i className="fa fa-calendar fa-1x"></i></button>
  

   {/* {!auth.loading && post.user === auth.user._id && ( */}
  <Fragment> 
  
  <Link to={`/ar/dashboard/posts/editPost/${post._id}`}   style={{textDecoration:'none'}} > <button  className="Action-button-status" >  تعديل النشر <i className="fa fa-edit fa-1x"></i></button>   </Link> 

  <Link to={`/ar/dashboard/posts/editPostActivate/${post._id}`}   style={{textDecoration:'none'}} > <button  className="Action-button-status" >  تفعيل الإعلان <i className="fa fa-edit fa-1x"></i></button>   </Link> 

   
              <ConfirmButton
              dialog={[" ", "هل أنت متأكد ؟", "مرة أخرى للحذف"]}
              action={() => deletePost(post._id)}
                />
  
  
  
  
    </Fragment>
 
  
        </p>
  
  
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
 


PostsArabic.propTypes = {
 
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
  )(PostsArabic);
