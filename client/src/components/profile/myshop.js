import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import FollowUpForm from '../followups/FollowUpForm';
import RatingForm from '../ratings/RatingForm';
 
import { deleteFollowup } from '../../actions/followup';
import { addClick } from '../../actions/post';
import cover from './default-cover.jpg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Alert from '../layout/Alert';
import { setAlert } from '../../actions/alert';
import Spinner from '../layout/Spinner';
import ConfirmButton from "./ConfirmButton";

import noimg from './noimg.jpg';

const formatter = new Intl.NumberFormat('en',{
  
  style:'decimal',
  // signDisplay:'always',
  useGrouping:true,
  notation:'compact'

});
 

 const Myshop = ({setAlert,match,deleteFollowup,loading,addClick}) => {

  
 
  const [userShop,setuserShop]= useState([])

  const [Display,setDisplay]= useState('FollowButtons')
  const [IfUserFollow,setIfUserFollow]= useState([])
  const [UserFollowing,setUserFollowing]= useState([])
  const [UserFollowers,setUserFollowers]= useState([])
  
 
    const [shop,setShop]= useState([])
    const [shopImg,setImg]= useState([])

    const [posts,setPosts]= useState([])
    const [user,setUser]= useState([])
    const [visible,setVisible]= useState(12)
    const currentResults = posts.slice(0,visible);

 
 
 
  
 
    const loadMore = async e => {
      setVisible(visible+10)
    } 
 
    const hideButton = async e => {
      setDisplay('UNFollowButtons')
    }
 
    const showButton = async e => {
      setDisplay('FollowButtons')
    }
    
    const UnFollow = async e => {
      window.alert('delet function')
    }

    
    



    useEffect(() => {

        axios.get('/api/shops/'+match.params.username)
          .then(res => {
            setShop(res.data)
          })
          .catch((err) => {
            console.log(err);
          })


          axios.get('/api/shops/image/'+match.params.username)
          .then(res => {
            setImg(res.data)
          })
          .catch((err) => {
            console.log(err);
          })


 

          axios.get('/api/posts/postsofshop/'+match.params.username)
          .then(res => {
            setPosts(res.data)
          })
          .catch((err) => {
            console.log(err);
          })



          axios.get('/api/followups/doyoufollow/'+match.params.username)
          .then(res => {
            setIfUserFollow(res.data)
          })
          .catch((err) => {
            console.log(err);
          })


          axios.get('/api/followups/userfollowing/'+match.params.username)
          .then(res => {
            setUserFollowing(res.data)
          })
          .catch((err) => {
            console.log(err);
          })


          axios.get('/api/followups/userfollowers/'+match.params.username)
          .then(res => {
            setUserFollowers(res.data)
          })
          .catch((err) => {
            console.log(err);
          })

 
          axios.get('/api/shops/usershop')
          .then(res => {
            console.log(res);
            setuserShop(res.data)
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
      
      
      }, [IfUserFollow]);
 
      
     
  
     return  loading ? (
      <Spinner/>
    ) : (
      <div className="aqle3-main" >
      <div className="mainword2">
      <Navbar />
  
         {shop
            .map(shop => (
            <center> 
            <div className="shop">
            <div className="shop-img-container">
            {shop.shop_img ?(
                <img  src={shop.shop_img} />
              ):(
          <img  src={cover} />
              )}  
              </div>



  <div className='rank'> 
 
  {/* //////////////////////////////////////المتابعة////////////////////////////////// */}

  {userShop ?(
     <Fragment>


   {user.username === shop.username ?( 
  <Fragment>
        <></>
        </Fragment>
            ):(
              <Fragment>
              {IfUserFollow.following_user === ''&&(
          <FollowUpForm following_user={shop.username}  following_shop={shop._id} />
          )}

          
  </Fragment>
)}

 
  {IfUserFollow.following_user && (
  <Fragment>


{user.username === shop.username ?(
  <Fragment>
<a href="/ar/dashboard/shops/edit"> 
<button className="FollowButtons"> 
تعديل 
</button>
 </a>
 </Fragment>
):(
<Fragment>
  {Display==='FollowButtons'&&(
    <button className="FollowButtons"  onMouseMove={hideButton}   >  انت متابع له  </button> 
    )}
  </Fragment>
)}
           
  
 
 
             {Display==='UNFollowButtons'&&(
            <button className="UNFollowButtons" onMouseLeave={showButton}   onClick={() => deleteFollowup(IfUserFollow._id)} > الغاء المتابعة  </button> 
          
            // <ConfirmButton onMouseLeave={showButton}
            // dialog={[" الغاء المتابعة", "هل أنت متأكد ؟", "مرة أخرى للحذف"]}
            // action={() => deleteFollowup(IfUserFollow._id)}
            //   />
          )} 


   


         </Fragment>
            )}

 


{user.username === shop.username &&(
           
            <a href="/ar/dashboard/shops/edit"> 
            <button className="Action-button-plus"> 
            تعديل 
            </button>
             </a>
             
            )}  

  {/* <Link to="/ar/dashboard/posts/Addpost" className="Action-button-plus">  <i className="fa fa-star fa-1x"></i> تقييم </Link> */}
  </Fragment>
   ):(
    <a href='/ar/dashboard/create-shop'> <button className="Action-button-followup">  فتح متجر  </button>  </a>

    )}
{/* ///////////////////////////////////////نهاية المتابعة//////////////////////////////////////// */}



  </div>
 
{/* ///////////////////////////////////////نهاية المتابعة//////////////////////////////////////// */}

<div className='contact'> 
<i class="fa fa-envelope fa-1x" aria-hidden="true"></i> {shop.shop_email}  <br/>
<i class="fa fa-whatsapp fa-1x" aria-hidden="true"></i> {shop.shop_whatsaap} <br/>
<i class="fa fa-mobile fa-1x" aria-hidden="true"></i> {shop.shop_phone1}<br/>
<i class="fa fa-phone fa-1x" aria-hidden="true"></i> {shop.shop_phone2}<br/>
<i class="fa fa-phone fa-1x" aria-hidden="true"></i> {shop.shop_phone3}<br/> 
</div>
 

 
        
            <div className="smallimg">
            {shop.shop_logo_img ?(
                <img  src={shop.shop_logo_img} />
              ):(
          <img  src={cover} />
              )} 
            <center> 
            <h2> <span className='check'>  <i class="fa fa-check-circle fa-2x" aria-hidden="true"></i> </span> @{shop.username}</h2>
            <h1>{shop.shop_name}</h1>
            </center>
            </div> 
            <center>
             
            <Link to={`/shops/${match.params.username}/following`}> <button className="Purposebtn" >  ({formatter.format(UserFollowing.length)})  يتابع  </button> </Link>
            <Link to={`/shops/${match.params.username}/followers`}> <button className="Purposebtn" >  ({formatter.format(UserFollowers.length)})المتابِعين  </button> </Link>
            <Link to={`/shops/${match.params.username}/followers`}> <button className="Purposebtn" >   ({formatter.format(shop.clicks.length)}) زيارات  </button> </Link>



            
{/* ///////////////////////////////////////بداية التقيم //////////////////////////////////////// */}
 
 
<RatingForm the_target_shop_username={shop.username}  the_target_shop={shop._id}  />
 
 


            </center>
            
            <p>{shop.shop_description}</p>
           

            <a href={`/shops/${match.params.username}/cars`}> <button className='Purposebtn'>   سيارات  </button></a>
            <a href={`/shops/${match.params.username}/properties`}> <button className='Purposebtn'>   عقارات  </button></a>
            <a href={`/shops/${match.params.username}/jobs`}> <button className='Purposebtn'>   وظائف  </button></a>
            <a href={`/shops/${match.params.username}/services`}> <button className='Purposebtn'>   خدمات  </button></a>
            <a href={`/shops/${match.params.username}/classifieds`}> <button className='Purposebtn'>   سلع  </button></a>

            <a href={`/shops/${match.params.username}/electronics`}> <button className='Purposebtn'>   إلكترونيات  </button></a>
            <a href={`/shops/${match.params.username}/animals`}> <button className='Purposebtn'>   حيوانات  </button></a>
            <a href={`/shops/${match.params.username}/furniture`}> <button className='Purposebtn'>   اثاث  </button></a>
            <a href={`/shops/${match.params.username}/personal-items`}> <button className='Purposebtn'>   مستلزمات شخصية  </button></a>
            <a href={`/shops/${match.params.username}/food-drinks`}> <button className='Purposebtn'>   أطعمة ومشروبات  </button></a>

 
          

 {/* <ConfirmButton onMouseLeave={showButton}
            dialog={[" الغاء المتابعة", "هل أنت متأكد ؟", "مرة أخرى للحذف"]}
            action={() => deleteFollowup(IfUserFollow._id)}
              /> */}
 
         {/* <button className="FollowButtons"   >   </button> */}

        
        
        
         
            </div> 

           
            </center> 
            ))}  
        	

 
  {posts.length <= 0 ?(
  <Fragment>
   <center>   <h1 className='noPostsExist'> ... </h1> </center>
  </Fragment>
 
):(
<Fragment> 


{posts.length > 0 &&(

  <Fragment>



<center> 
<div className='posts-shop-frame'>
{currentResults
  
 .map(post => ( 
   <div className="card"> 
  {post.image ?(  

  <Link to={`/posts/${post._id}`}  onClick={() => addClick(post._id)} > <img src={post.image} /> </Link>
  ):(
   <Link  to={`/posts/${post._id}`} onClick={() => addClick(post._id)} > <img src={shopImg.shop_img} /> </Link>
  )}     
 
 <h1>{post.title}0000000000000 444444444444444</h1>
 <Link  to={`/posts/${post._id}`} > <button onClick={() => addClick(post._id)} className='profileButtons'> 
 
 {formatter.format(post.clicks.length)}
 {'  '}
  <i class="fa fa-eye" aria-hidden="true"></i>   </button> </Link>
 </div> 
 
 ))} 





{visible < posts.length && (
  <center> 
  <button   onClick={loadMore} 
  className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد  </button> 
   </center>
  )}



 </div>
 </center>
 </Fragment>
)}


</Fragment>
)}


            </div> 
            </div> 
             )}
 
 

 Myshop.propTypes = {
  deleteFollowup: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  addClick: PropTypes.func.isRequired,
  
};
  
export default connect(
  null,
  { setAlert,deleteFollowup,addClick }
)(Myshop);
 