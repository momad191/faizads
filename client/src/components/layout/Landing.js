import React, { Fragment, useEffect ,useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
 
import axios from 'axios';

 
import morjan from './morjan.png';
import cars1 from './cars1.png';
import realestat from './real-estate.png';
import jobs1 from './jobs1.png'
import miscellaneous1 from './miscellaneous1.png'
import servicecs1 from './servicecs1.png'
 




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
   <div className="mainword2">
   <div className="login-title">  موقع الإعلانات الأول في العالم    </div> 

    <div className="smalhometitle">   للإعلان عن || <span> خدمات </span> ||  <span> وظائف  </span> ||  <span> منتجات </span>  || <span> شركات </span> || هنا يمكنك البحث والتجربة والتقييم </div> 
  


  
 
{/* <center>
   <img className="" src={morjan}/>
   </center> */}


 


<center>
<div className="categories">
<ul className="middlenav"><Link to='/register'> عقارات <img src={realestat} alt="Avatar" style={{width:'60px',height:'60px'}}/></Link></ul>
<li> <a href='#'>عقارات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) شقق  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) محلات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) فلل ومنازل  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) مطاعم ومقاهي  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) اراضي  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
</div>
</center>




<center>
<div className="categories">
<ul className="middlenav"><Link to='/register'> وظائف <img src={jobs1} alt="Avatar" style={{width:'60px',height:'60px'}}/></Link></ul>
<li> <a href='#'>وظائف  <img src={jobs1} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) سياحة ومطاعم  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) سائق  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) مبيعات وتسويق  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) عمال  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) حسابات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
</div>
</center>






<center>
<div className="categories">
<ul className="middlenav"><Link to='/register'> منوعات <img src={miscellaneous1} alt="Avatar" style={{width:'60px',height:'60px'}}/></Link></ul>
<li> <a href='#'>منوعات  <img src={miscellaneous1} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) أنظمة أمن وحماية  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) الكترونيات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) مواد غذائية  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) مفروشات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) أجهزة منزلية  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
</div>
</center>







<center>
<div className="categories">
<ul className="middlenav"><Link to='/register'> سيارات <img src={cars1} alt="Avatar" style={{width:'60px',height:'60px'}}/></Link></ul>
<li> <a href='#'>سيارات  <img src={cars1} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) سياحة  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) سائق  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) مهندس  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) عمال  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) حسابات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
</div>
</center>




<center>
<div className="categories">
<ul className="middlenav"><Link to='/register'> خدمات <img src={servicecs1} alt="Avatar" style={{width:'60px',height:'60px'}}/></Link></ul>
<li> <a href='#'>خدمات  <img src={servicecs1} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) دروس خصوصية  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) تاكسي وتوصيل  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) مقاولات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) استقدام عمالة  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) المباني والمنازل  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) خدمات الصيانة  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) نقل العفش  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) أعمال واستثمار  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) خدمات عامة  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) خدمات تنظيف  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) تخليص معاملات   <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) دعاية واعلان  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) قروض  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) مهارات وتدريب  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) خدمات احترافيه  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) ضريبة ومال  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) خدمات زراعية  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) انترنت  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) مكافحة الحشرات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) طبخ منزلي  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) تأجير سيارات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) خدمات السيارات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) اتصالات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) صحة وجمال  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) تنظيم حفلات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) ترجمة  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) حواسيب  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) ممتلكات  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) محاماة وقانون  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) خدمات عقارية  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) شحن  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) سياحة وسفر  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) موارد بشرية  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) حراسة وامن  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>
<li> <a href='#'>(212) تسلية  <img src={realestat} alt="Avatar" style={{width:'30px',height:'30px'}}/> </a></li>

</div>
</center>
 




   









   </div>
   </div>

 
   </Fragment>



     
  );
};


 

export default Landing;
