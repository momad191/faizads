import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FollowUpForm from '../followups/FollowUpForm';
import RatingForm from '../ratings/RatingForm';
 
import { deleteFollowup } from '../../actions/followup';
import { addClick } from '../../actions/post';
import cover from './default-cover.jpg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Alert from '../layout/Alert';
import { setAlert } from '../../actions/alert';
import ConfirmButton from "./ConfirmButton";


import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';

import noimg from './noimg.jpg';
 

import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/en-gb';


const formatter = new Intl.NumberFormat('en',{
  
  style:'decimal',
  // signDisplay:'always',
  useGrouping:true,
  notation:'compact'

});


 const ShopsandMarket = ({match}) => {

    const [t, i18next] = useTranslation()
    const [shop,setShop]= useState([])
    const [shopImg,setImg]= useState([])

    const [posts,setPosts]= useState([])

    const [visible,setVisible]= useState(20)
    const currentResults = posts.slice(0,visible);



    
    const [larg,setLarg]= useState('displayI')
    const [list,setList]= useState('noneDisplayI')
    
    const [showStyleLarge,setshowStyleLarge]= useState('showStyleSelected')
    const [showStyleList,setshowStyList]= useState('showStyle')

    

    const showLarg = async e => { 
      setLarg('displayI')
      setList('noneDisplayI')
      setshowStyleLarge('showStyleSelected')
      setshowStyList('showStyle')
    };
   
    const showList = async e => {
      setList('displayI')
      setLarg('noneDisplayI')
      setshowStyList('showStyleSelected')
      setshowStyleLarge('showStyle')
    };
  
 

 
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
 


// shop click
 const shopClick=(id)=> {
  axios.put('/api/shops/click/'+id)
  .then(response => {
   console.log(response.data)
 });
};


{i18next.language === 'ar' && moment.locale('ar'); }
{i18next.language === 'en' && moment.locale('en'); }
{i18next.language === 'fr' && moment.locale('fr'); }
  
     return (
      <div className="aqle3-main" >
      <div className="mainword2">

      {i18next.language === 'ar'&&(<Navbar />)}
      {i18next.language === 'en'&&(<NavbarEnglish />)}
 
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
  <Link to="/ar/dashboard/posts/Addpost" className="Action-button-plus">  <i className="fa fa-star fa-1x"></i> 
  {t('shops_rating')} 
   </Link>

            </div>
            <div className='edit'> 
 <Link to="/ar/dashboard/posts/Addpost" className="Action-button-plus">  <i className="fa fa-edit fa-1x"></i> 
 {t('shops_edit')}
  </Link>
            </div>

 


            <div className="smallimg">
            {shop.shop_img ?(
                <img  src={shop.shop_img} />
              ):(
          <img  src={cover} />
              )} 
            <center> 
            <h2> <span className='check'>  <i class="fa fa-check-circle" aria-hidden="true"></i> </span> @{shop.user.username}</h2>
            <h1>{shop.shop_name}</h1>
            </center>
            </div> 
              
            <p>{shop.shop_description}</p>


  <div className='contact-for-shop'> 
  {shop.shop_email &&( <><i class="fa fa-envelope fa-1x" aria-hidden="true"></i> {shop.shop_email} -</>)} 
  {shop.shop_email &&( <><i class="fa fa-whatsapp fa-1x" aria-hidden="true"></i> {shop.shop_whatsaap} -</>)} 
  {shop.shop_email &&( <><i class="fa fa-mobile fa-1x" aria-hidden="true"></i> {shop.shop_phone1} -</>)} 
  {shop.shop_email &&( <><i class="fa fa-phone fa-1x" aria-hidden="true"></i> {shop.shop_phone2} -</>)} 
  {shop.shop_email &&( <><i class="fa fa-phone fa-1x" aria-hidden="true"></i> {shop.shop_phone3} </>)} 

 </div>

           <Link to={`/shops/${match.params.username}`}> <button className='Purposebtn-home'>    
           <i className="fa fa-home fa-2x"></i>
            </button></Link>

            {match.params.market_code === 'cars'?( 
            <Link to={`/shops/${match.params.username}/cars`}> <button className='PurposebtnON'>    {t('categories_cars')}   </button></Link>
            ):(
            <Link to={`/shops/${match.params.username}/cars`}> <button className='Purposebtn'>    {t('categories_cars')}   </button></Link>
            )}
            
            {match.params.market_code === 'properties'?( 
            <Link to={`/shops/${match.params.username}/properties`}> <button className='PurposebtnON'>   {t('categories_properties')}  </button></Link>
            ):(
              <Link to={`/shops/${match.params.username}/properties`}> <button className='Purposebtn'>   {t('categories_properties')}  </button></Link>
            )}
           

           {match.params.market_code === 'jobs'?( 
            <Link to={`/shops/${match.params.username}/jobs`}> <button className='PurposebtnON'>   {t('categories_Jobs')}  </button></Link>
           ):(
            <Link to={`/shops/${match.params.username}/jobs`}> <button className='Purposebtn'>   {t('categories_Jobs')}  </button></Link>
           )}
           

           {match.params.market_code === 'services'?( 
            <Link to={`/shops/${match.params.username}/services`}> <button className='PurposebtnON'>    {t('categories_Services')}   </button></Link>
           ):(

            <Link to={`/shops/${match.params.username}/services`}> <button className='Purposebtn'>    {t('categories_Services')}   </button></Link>

           )}
           
           

           {match.params.market_code === 'classifieds'?( 
            <Link to={`/shops/${match.params.username}/classifieds`}> <button className='PurposebtnON'>    {t('categories_Classifieds')}  </button></Link>
           ):(
            <Link to={`/shops/${match.params.username}/classifieds`}> <button className='Purposebtn'>    {t('categories_Classifieds')}  </button></Link>
           )}



          {match.params.market_code === 'electronics'?( 
            <Link to={`/shops/${match.params.username}/electronics`}> <button className='PurposebtnON'>    {t('categories_Electronics')}   </button></Link>
           ):(
            <Link to={`/shops/${match.params.username}/electronics`}> <button className='Purposebtn'>    {t('categories_Electronics')}   </button></Link>
           )}




          {match.params.market_code === 'animals'?( 
            <Link to={`/shops/${match.params.username}/animals`}> <button className='PurposebtnON'>   {t('categories_Animals')}  </button></Link>
           ):(
            <Link to={`/shops/${match.params.username}/animals`}> <button className='Purposebtn'>   {t('categories_Animals')}  </button></Link>
           )}




          {match.params.market_code === 'furniture'?( 
            <Link to={`/shops/${match.params.username}/furniture`}> <button className='PurposebtnON'>    {t('categories_Furniture')}   </button></Link>
           ):(
            <Link to={`/shops/${match.params.username}/furniture`}> <button className='Purposebtn'>    {t('categories_Furniture')}   </button></Link>
           )}



         {match.params.market_code === 'personal-items'?( 
            <Link to={`/shops/${match.params.username}/personal-items`}> <button className='PurposebtnON'>    {t('categories_Personalitems')}   </button></Link>
           ):(
            <Link to={`/shops/${match.params.username}/personal-items`}> <button className='Purposebtn'>    {t('categories_Personalitems')}   </button></Link>
           )}



          {match.params.market_code === 'food-drinks'?( 
            <Link to={`/shops/${match.params.username}/food-drinks`}> <button className='PurposebtnON'>   {t('categories_Fooddrinks')}  </button></Link>
           ):(
            <Link to={`/shops/${match.params.username}/food-drinks`}> <button className='Purposebtn'>   {t('categories_Fooddrinks')}  </button></Link>
           )}
 
   

            {/* <Link to={`/ar/shops/${shop.username}`}> <button className='profileButtons'>  متابعة  </button> </Link> */}
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


<center> 
 <div style={{width:'100%'}}> 
 <button  onClick={showLarg} className={showStyleLarge}> <i class="fa fa-th-large fa-1x" aria-hidden="true"></i> </button>
 <button  onClick={showList} className={showStyleList}> <i class="fa fa-th-list fa-1x" aria-hidden="true"></i> </button>
 </div>
 </center>
 
{/* //////////////////////////////////////////////start of larg shap//////////////////////////////////////////// */}
 {larg === 'displayI'&&(
   <Fragment> 
{currentResults
  
 .map(post => ( 
   <div className="card"> 
  {post.image ?(  

  <Link to={`/posts/${post._id}`}  onClick={() => addClick(post._id)}  target="_blank"> <img src={post.image} /> </Link>
  ):(
   <Link  to={`/posts/${post._id}`} onClick={() => addClick(post._id)}  target="_blank"> <img src={shopImg.shop_img} /> </Link>
  )}     
  
 <h1>{post.title}</h1>
 <Link  to={`/posts/${post._id}`} target="_blank"> <button onClick={() => addClick(post._id)} className='button-in-list-home-small'> 
 
 {formatter.format(post.clicks.length)}
 {'  '}
  <i class="fa fa-eye" aria-hidden="true"></i>   </button> </Link>


  <button className="button-in-list-home-small"> 
 {post.city.city_AR_name} <i class="fa fa-map-marker" aria-hidden="true"></i> 
</button>


<button className="button-in-list-home-small">
  {formatter.format(post.comments.length) } {' '} <i class="fa fa-comments" aria-hidden="true"></i>   
  </button>



  <button className="button-in-list-home-small">
  {moment(post.date).startOf('minut').fromNow()}  {' '}   <i class="fa fa-clock-o" aria-hidden="true"></i>  
  </button>

  <button className="button-in-list-home-small">
  
  ينتهي {moment(post.expired).endOf('day').fromNow()}  {' '}  <i class="fa fa-hourglass-end" aria-hidden="true"></i>   
  </button>



 </div> 
 
 ))} 





{visible < posts.length && (
  <center> 
  <button   onClick={loadMore} 
  className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد  </button> 
   </center>
  )}


</Fragment>
)}
{/* //////////////////////////////////////////////end of larg shap//////////////////////////////////////////// */}




 
{/* //////////////////////////////////////////////العرض القوائم //////////////////////////////////////////// */}

{list === 'displayI'&&(
   <Fragment> 
{currentResults
  
 .map(post => ( 
   <center> 
  <div style={{width:'100%'}} className="main-list">

{post.premium === 'no' &&(
          <div className='title-in-list'>
          <Link onClick={() => addClick(post._id)} className='title-in-list'  target="_blank" to={`/${post.country_code}/${post.city_code}/${post.market_code}/${post.purpose_code}/posts/${post._id}`} >    
           {post.title}   
           </Link>
          </div>
        )}


{post.premium === 'yes' &&(
          <div className='title-in-list-premium'>
          <Link  onClick={() => addClick(post._id)} className='title-in-list-premium'  target="_blank" to={`/${post.country_code}/${post.city_code}/${post.market_code}/${post.purpose_code}/posts/${post._id}`} >    
          اعلان مميز  <i className="fa fa-star fa-1x"></i> {' '} / {post.title}       
           </Link>
          </div>
        )} 





<div className='section-list'> 
  <div className="" key={post._id}>
  <Link onClick={() => addClick(post._id)} target="_blank" to={`/${post.country_code}/${post.city_code}/${post.market_code}/${post.purpose_code}/posts/${post._id}`}  > 
  </Link>
   
  <div>
      {post.image ? (
        <Link  onClick={() => addClick(post._id)} target="_blank" to={`/${post.country_code}/${post.city_code}/${post.market_code}/${post.purpose_code}/posts/${post._id}`}  > <img className='image-in-list' src={post.image}  /></Link>
        ):(
    
            <Link  onClick={() => addClick(post._id)} target="_blank" to={`/${post.country_code}/${post.city_code}/${post.market_code}/${post.purpose_code}/posts/${post._id}`}  > <img className='image-in-list' src={noimg}  /></Link>
            )}
       </div>
  
  
  </div>
  {/* //////////////////section list end ///////// */}
  
  
  <div className="list-details" style={{marginTop:'20px'}}>

  {post.Main_paragraph} </div>

{/* ////////////////////end of list////////////////////////////////////// */}

    </div>

      

  <div className='section-list'> 


  {/* <Link onClick={() => shopClick(post.shop._id)} to={`/ar/shops/${post.shop.username}`} target="_blank"> 
  <button className="button-in-list-home-big">
  <i class="fa fa-home fa-1x" aria-hidden="true"></i>   
  </button>
  </Link>  */}


  <Link  onClick={() => addClick(post._id)} to={`/main/${post.country_code}/${post.city_code}/${post.market_code}`} target="_blank" style={{textDecoration:'none'}} >   <button className="button-in-list-home-small" >  <i className="fa fa-list fa-1x"></i>  {post.market.m_AR_name}  </button> </Link>
  
  
 


 
  <button className="button-in-list-home-small">
  <i class="fa fa-clock-o" aria-hidden="true"></i> {' '} 
  {moment(post.date).startOf('minut').fromNow()}   
  </button>



  <button className="button-in-list-home-small" >
  <i class="fa fa-hourglass-end" aria-hidden="true"></i> ينتهي {' '} 
  {moment(post.expired).endOf('day').fromNow()}   
  </button>
  


  <button className="button-in-list-home-small" >
  <i class="fa fa-comments" aria-hidden="true"></i> {' '} 
  {formatter.format(post.comments.length) } 
  </button>


  <Link> 
  <button className="button-in-list-home-small" > 
  <i class="fa fa-map-marker" aria-hidden="true"></i>  {post.city.city_AR_name}  
   </button>
  </Link>


  <Link > 
  <button className="button-in-list-home-small" >
  <i class="fa fa-eye" aria-hidden="true"></i>  {formatter.format(post.clicks.length) }  
  </button>
  </Link>

  </div>

    



 


 </div> 
 </center>
 ))} 





{visible < posts.length && (
  <center> 
  <button   onClick={loadMore} 
  className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد  </button> 
   </center>
  )}


</Fragment>
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
 
 export default ShopsandMarket
 