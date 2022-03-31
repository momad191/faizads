import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';
 
import cover from './default-cover.jpg';
 const ShopsandMarket = ({match}) => {


    const [shop,setShop]= useState([])
    const [shopImg,setImg]= useState([])

    const [posts,setPosts]= useState([])

    const [visible,setVisible]= useState(20)
    const currentResults = posts.slice(0,visible);

 
    const loadMore = async e => {
      setVisible(visible+10)
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




          axios.get('/api/posts/postsofshop/'+match.params.username+'/'+match.params.market_code)
          .then(res => {
            setPosts(res.data)
          })
          .catch((err) => {
            console.log(err);
          })
      
      
      }, []);
 
  
     return (
      <div className="aqle3-main" >
      <div className="mainword2">
 
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
  <Link to="/ar/dashboard/posts/Addpost" className="Action-button-plus">  <i className="fa fa-star fa-1x"></i> تقييم </Link>

            </div>
            <div className='edit'> 
 <Link to="/ar/dashboard/posts/Addpost" className="Action-button-plus">  <i className="fa fa-edit fa-1x"></i> تعديل </Link>
            </div>

  <div className='contact'> 
<i class="fa fa-envelope fa-1x" aria-hidden="true"></i> {shop.shop_email}  <br/>
<i class="fa fa-whatsapp fa-1x" aria-hidden="true"></i> {shop.shop_whatsaap} <br/>
<i class="fa fa-mobile fa-1x" aria-hidden="true"></i> {shop.shop_phone1}<br/>
<i class="fa fa-phone fa-1x" aria-hidden="true"></i> {shop.shop_phone2}<br/>
<i class="fa fa-phone fa-1x" aria-hidden="true"></i> {shop.shop_phone3}<br/> 
</div>


            <div className="smallimg">
            {shop.shop_img ?(
                <img  src={shop.shop_img} />
              ):(
          <img  src={cover} />
              )} 
            <center> 
            <h2> <span className='check'>  <i class="fa fa-check-circle" aria-hidden="true"></i> </span> @{shop.username}</h2>
            <h1>{shop.shop_name}</h1>
            </center>
            </div> 
              
            <p>{shop.shop_description}</p>
 
            {match.params.market_code === 'cars'?( 
            <a href={`/shops/${match.params.username}/cars`}> <button className='PurposebtnON'>   سيارات  </button></a>
            ):(
            <a href={`/shops/${match.params.username}/cars`}> <button className='Purposebtn'>   سيارات  </button></a>
            )}
            
            {match.params.market_code === 'properties'?( 
            <a href={`/shops/${match.params.username}/properties`}> <button className='PurposebtnON'>   عقارات  </button></a>
            ):(
              <a href={`/shops/${match.params.username}/properties`}> <button className='Purposebtn'>   عقارات  </button></a>
            )}
           

           {match.params.market_code === 'jobs'?( 
            <a href={`/shops/${match.params.username}/jobs`}> <button className='PurposebtnON'>   وظائف  </button></a>
           ):(
            <a href={`/shops/${match.params.username}/jobs`}> <button className='Purposebtn'>   وظائف  </button></a>
           )}
           

           {match.params.market_code === 'services'?( 
            <a href={`/shops/${match.params.username}/services`}> <button className='PurposebtnON'>   خدمات  </button></a>
           ):(

            <a href={`/shops/${match.params.username}/services`}> <button className='Purposebtn'>   خدمات  </button></a>

           )}
           
           

           {match.params.market_code === 'classifieds'?( 
            <a href={`/shops/${match.params.username}/classifieds`}> <button className='PurposebtnON'>   سلع  </button></a>
           ):(
            <a href={`/shops/${match.params.username}/classifieds`}> <button className='Purposebtn'>   سلع  </button></a>
           )}



          {match.params.market_code === 'electronics'?( 
            <a href={`/shops/${match.params.username}/electronics`}> <button className='PurposebtnON'>   إلكترونيات  </button></a>
           ):(
            <a href={`/shops/${match.params.username}/electronics`}> <button className='Purposebtn'>   إلكترونيات  </button></a>
           )}




          {match.params.market_code === 'animals'?( 
            <a href={`/shops/${match.params.username}/animals`}> <button className='PurposebtnON'>   حيوانات  </button></a>
           ):(
            <a href={`/shops/${match.params.username}/animals`}> <button className='Purposebtn'>   حيوانات  </button></a>
           )}




          {match.params.market_code === 'furniture'?( 
            <a href={`/shops/${match.params.username}/furniture`}> <button className='PurposebtnON'>   اثاث  </button></a>
           ):(
            <a href={`/shops/${match.params.username}/furniture`}> <button className='Purposebtn'>   اثاث  </button></a>
           )}



         {match.params.market_code === 'personal-items'?( 
            <a href={`/shops/${match.params.username}/personal-items`}> <button className='PurposebtnON'>   مستلزمات شخصية  </button></a>
           ):(
            <a href={`/shops/${match.params.username}/personal-items`}> <button className='Purposebtn'>   مستلزمات شخصية  </button></a>
           )}



          {match.params.market_code === 'food-drinks'?( 
            <a href={`/shops/${match.params.username}/food-drinks`}> <button className='PurposebtnON'>   أطعمة ومشروبات  </button></a>
           ):(
            <a href={`/shops/${match.params.username}/food-drinks`}> <button className='Purposebtn'>   أطعمة ومشروبات  </button></a>
           )}
 
   

            {/* <a href={`/ar/shops/${shop.username}`}> <button className='profileButtons'>  متابعة  </button> </a> */}
            </div> 
            </center> 
            ))}  
        	

{posts.length <0 ?(
  <Fragment>
    <h1> لا توجد منشورات</h1>
  </Fragment>

):(
  <Fragment>



<center> 
<div className='posts-shop-frame'>
{currentResults
  
 .map(post => ( 
   <div className="card">
  {post.image ?(

  <a href={`/posts/${post._id}`}> <img src={post.image} /> </a>
  ):(
    <a href={`/posts/${post._id}`}> <img src={shopImg.shop_img} /> </a>
  )}   

 <h1>{post.title}</h1>
 <a href={`/posts/${post._id}`}> <button className='profileButtons'>  <i class="fa fa-eye" aria-hidden="true"></i>   </button> </a>
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








            </div> 
            </div> 
             )}
 
 export default ShopsandMarket
 