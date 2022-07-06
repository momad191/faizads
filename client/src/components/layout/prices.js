import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom';  
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';
 
const Prices=({match}) =>{
 
  const Lang = match.params.lang;
  const [t, i18next] = useTranslation()

return (
<Fragment> 
      { i18next.language === 'ar' &&(<Navbar />)}
      { i18next.language === 'en' &&(<NavbarEnglish />)}

      <div className="aqle3-main"  >
      <div className="mainword2">

  { i18next.language === 'ar'&&(

<Fragment> 
<center>
 <div className="main-pricing" >
 <div className="pricing-title">  اختر الباقة الإعلانية المناسبة لك  </div>
 <div className="pricing-title"> خطط مثالية لانتشار أعمالك وتوسيع نطاق أهدافك  </div>
 <div className="loginSmalltitle">  شراء الباقة  لمرة واحدة فقط ولمدة محددة بدون التزام شهري ‏  </div>

 



 <div className="columns">
  <ul className="price">
    <li className="header"> <i class="fa fa-free" aria-hidden="true"></i> مجانية</li>
    <li className="grey">00.00$</li>
      <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> مدة الإعلان تصل إلى 20 يوم  </li>
    <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> عدد الإعلانات  (2) </li>
    <li> <span className="notFeatures"> <i class="fa fa-window-close fa-2x" aria-hidden="true"></i> </span> تميز الإعلان </li>
     <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> صفحة الإعلانات الخاصة    </li> 
     <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   للتجربة   </li> 
     <li className="grey"><Link to="/membership/prices/free" className="button-pricing">اشترك</Link></li>
  </ul>
</div>

 



<div className="columns">
  <ul className="price">
    <li className="bronze">البرونزية</li>
    <li className="grey">$ 11.00 / شهر واحد</li>
      <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> مدة الإعلان تصل إلى 30 يوم  </li>
    <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> عدد الإعلانات  (غير محدود) </li>
    <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> تميز الإعلان </li>
     <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> صفحة الإعلانات الخاصة    </li> 
     <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   بداية حالمة   </li> 
    <li className="grey"><Link to="/membership/prices/bronze" className="button-pricing">اشترك</Link></li>
  </ul>
</div>
 
<div className="columns">
  <ul className="price">
    <li className="silver">الفضية</li>
    <li className="grey">$ 21.00 / شهر واحد </li>
     {/* <li> اضافة رابط قناة يوتيوب </li>
    <li>اضافة رابط فيس بوك</li>
    <li>اضافة رابط تويتر</li>
    <li>  اضافة رابط انستغرام </li> */}
     <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>مدة الإعلان تصل إلى 60 يوم  </li>
    {/* <li> مدة الاعلان 10 ايام  </li>
    <li> مدة الاعلان 25 يوم  </li>
    <li>  مدة الاعلان 30 يوم </li> */}
    {/* <li>  مدة الاعلان 60 يوم </li> */}
    <li><span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>  عدد الإعلانات  ( غير محدود  ) </li>
    <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> تميز الإعلان </li>
    <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>  صفحة الإعلانات الخاصة    </li>
    <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   الأكثر طلبا   </li>
    <li className="grey"><Link to="/membership/prices/silver" className="button-pricing">اشترك</Link></li>
  </ul>
</div>





<div className="columns">
  <ul className="price">
    <li className="gold">الذهبية</li>
    <li className="grey">$ 31.00 / شهر واحد </li>
     {/* <li> اضافة رابط قناة يوتيوب </li>
    <li>اضافة رابط فيس بوك</li>
    <li>اضافة رابط تويتر</li>
    <li>  اضافة رابط انستغرام </li> */}
    <li><span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>  مدة الإعلان تصل إلى 120 يوم </li>
    <li><span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>  عدد الإعلانات  ( غير محدود) </li>

    {/* <li> مدة الاعلان 10 ايام  </li>
    <li> مدة الاعلان 25 يوم  </li>
    <li>  مدة الاعلان 30 يوم </li>
    <li>  مدة الاعلان 60 يوم </li> */}

    <li><span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>  تميز الإعلان </li>
    <li><span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>  صفحة الإعلانات الخاصة    </li>
    <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   مثالية  للمحترفين   </li>
    <li className="grey"><Link to="/membership/prices/golden" className="button-pricing">اشترك</Link></li>
  </ul>
</div>
 

 

{/* <div className="columns">
  <ul className="price">
    <li className="header"> <i class="fa fa-rocket" aria-hidden="true"></i> الخاصة</li>
    <li className="grey">تواصل معنا</li>
    <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> جميع المميزات الذهبية</li>
    <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   متجر الكتروني متطور   </li>
    <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   مثالية للوكالات والمحترفين   </li>
    <li className="grey"><Link to="/ar/membership/prices/special" className="button-pricing">تواصل معنا <i class="fa fa-envelope" aria-hidden="true"></i></Link></li>
  </ul>
</div> */}


</div>


  


</center>
</Fragment>
  )}

{i18next.language === 'en'&&(
////////////////////////////////////ENGLISH//////////////////////////////////////
<Fragment> 
<center>
 <div className="main-pricing" >
 <div className="pricing-title"> Choose the appropriate advertising package for you  </div>
 <div className="pricing-title"> Perfect plans to spread your business and expand your goals  </div>
 <div className="loginSmalltitle">One-time purchase of the package for a specified period without a monthly commitment </div>



 <div className="columns">
  <ul className="price">
    <li className="header">  Free</li>
    <li className="grey">$ 00.00 / For Month </li>
      <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> Advertisement period is up to 20 days  </li>
    <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> Number of Ads (2) </li>
    <li> <span className="notFeatures"> <i class="fa fa-window-close fa-2x" aria-hidden="true"></i> </span> Advertising Excellence </li>
     <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> Your public ads page    </li> 
     <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   To Try   </li> 
    <li className="grey"><Link to="/membership/prices/free" className="button-pricing">Subscribe   </Link></li>
  </ul>
</div>


   

<div className="columns">
  <ul className="price">
    <li className="bronze">Bronze</li>
    <li className="grey">$ 11.00 / For Month </li>
      <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> Advertisement period is up to 30 days  </li>
    <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> Number of Ads (Unlimited) </li>
    <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> Advertising Excellence </li>
     <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> Your public ads page    </li> 
     <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   Dreamy start   </li> 
    <li className="grey"><Link to="/membership/prices/bronze" className="button-pricing">Subscribe</Link></li>
  </ul>
</div>
 
<div className="columns">
  <ul className="price">
    <li className="silver">Silver</li>
    <li className="grey">$ 21.00 / For Month </li>
      <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>Advertisement period is up to 60 days  </li>
    {/* <li> مدة الاعلان 10 ايام  </li>
    <li> مدة الاعلان 25 يوم  </li>
    <li>  مدة الاعلان 30 يوم </li> */}
    {/* <li>  مدة الاعلان 60 يوم </li> */}
    <li><span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> Number of ads (Unlimited) </li>
    <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> Advertising Excellence </li>
    <li> <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>  Your public ads page    </li>
    <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   The Most wanted   </li>
    <li className="grey"><Link to="/membership/prices/silver" className="button-pricing">Subscribe</Link></li>
  </ul>
</div>





<div className="columns">
  <ul className="price">
    <li className="gold">golden</li>
    <li className="grey">$ 31.00 / For Month</li>
     <li><span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>  Advertisement period up to 120 days </li>
    <li><span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>  Number of ads (Unlimited) </li>
    <li><span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>  Advertising Excellence </li>
    <li><span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>  Your public ads page    </li>
    <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   Perfect for professionals   </li>
    <li className="grey"><Link to="/membership/prices/golden" className="button-pricing">Subscribe</Link></li>
  </ul>
</div>
 



{/* <div className="columns">
  <ul className="price">
    <li className="header"> <i class="fa fa-rocket" aria-hidden="true"></i> Special</li>
 
    <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span> All golden features</li>
    <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   advanced public ads page   </li>
    <li>  <span className="features"> <i class="fa fa-check-square fa-2x" aria-hidden="true"></i> </span>   Agencies and professionals   </li>
    <li className="grey"><Link to="/en/membership/prices/special" className="button-pricing">Connect with us <i class="fa fa-envelope" aria-hidden="true"></i></Link></li>
  </ul>
</div> */}





 

</div>
</center>
</Fragment>


    
    )}




</div>




</div>
</Fragment>
    )};
 
export default Prices
