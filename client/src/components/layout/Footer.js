	  import React, { Fragment } from 'react';
    import { Link } from 'react-router-dom';
    
      const Footer = () => {
		return (
		  <Fragment>
 <footer className="myFooter">

 <center>
<div className='vertical-menu-wrapper'>
 
  <ul className='vertical-menu'> 
  <li>  <div className='vertical-menu-active'>  العضوية</div> </li>
  <li> <a href="/register">انشاء حساب </a> </li>
  <li> <a href="/login">دخول الأعضاء</a> </li>
  <li> <a href="/prices">باقات العضوية</a> </li>
  <li> <a href="/">طريقة التسجيل</a> </li>
  </ul>
 


  <ul className='vertical-menu'>
  <li>   <div className='vertical-menu-active'> الشركة</div> </li>
  <li>  <a href="/about">من نحن </a></li>
  <li>  <a href="/contact">الوظائف</a> </li>
  <li>  <a href="/privacy">سياسة الخصوصية</a> </li>
  <li>  <a href="/terms">شروط الاستخدام</a></li>
  </ul>
 



  <ul className='vertical-menu'>
  <li>  <div className='vertical-menu-active'> التسويق بالعمولة</div> </li>
  <li>  <a href="#">آلية عمل الموقع</a> </li>
  <li>  <a href="#">احتساب العمولات</a> </li>
  <li>  <a href="#">طرق الترويج</a> </li>
  <li>  <a href="#">عروض خاصة</a> </li>
  </ul>
  

</div>
</center>
			

<footer className="myFooter2">
 <div className="copyrighttext">  
				© 2020-2021 Momadco.com Classifieds Aggregator - All Rights Reserved.
				 </div>
   				 </footer>
   </footer>
		 
		  </Fragment>
		);
	  };

 
 

    

export default Footer;
 