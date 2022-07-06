import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
  
   
 
const about = ({match}) => {
  const Lang = match.params.lang;

  return (
    <Fragment>

  {Lang === 'ar'?(
        <Navbar />
      ):(
      <NavbarEnglish />
      )}
 
      <center> 
      <form className="login-form" >   
      <div className='FormCover'>  
      <div className="about-title"> ماهو اعلانات فائز </div>  
 

      <p className='about-paragraph'>
      يتطلب كونك رائدًا في الصناعة فريقًا يحركه الطموح ويبعث الأمل في من ‏حوله ويسهم في نجاحهم وتحقيق تطلعاتهم.‏
      </p>

 
      <p className='about-paragraph'>
      يتميز فريقنا بعدم الوقوف في نقطة واحدة مطلقا مهما واجهتهم التحديات، ‏ويذهبون بطموحهم الى مسافات بعيدة، تعرف على المزيد حول الثقافة والقيم ‏التي تدفعهم للأمام.‏
       </p>


       <p className='about-paragraph'>
       نحن نفخر بكوننا أحد المنصات التي تساعد الأفراد الموهبين واللذين ‏يتطلعون دوما لمساعدة الملايين حول العالم في بناء أعمالهم الحرة.‏
       </p>


       <p className='about-paragraph'>
       تأسس موقعنا والذي تديره وتملكه شركة ‏اعلانات فائز للاعلان والتسويق الالكتروني عام ‏‏2022م، ‏وبخبرتنا الطويلة في مجال تكنلوجيا المعلومات والتسويق الإلكتروني، كنا ‏الفريق المسؤول عن هذه ‏المنصة، ودائما ما نبحث عن مشاريع جديدة ‏لتنفيذها على شبكة الانترنت حيث النمو السريع والفرص ‏الغير محدودة.‏ ‏
         </p>

<h1 className='about-title'> رؤيتنا</h1>
        <p className='about-paragraph'>
        أن نكون في طليعة القيمة الاقتصادية المضافة والمرتبطة بنشاط تجاري ‏واستثماري طويل الأجل ‏ومستدام .‏
</p>


<h1 className='about-title'> قيمنا </h1>
   <ul className='about-paragraph'>
<li>أن نكون الخيار المفضل لشركائنا وعملائنا .‏ </li>
<li>أن نكون بيئة عمل مفضلة ومفتوحة لتنمية الأفراد ونموهم.‏ </li>
<li>أن يكون لنا حضور هادف في المجتمع والنظام البيئي الذي نعمل فيه.‏ </li>
<li>أن نكون مصدرًا فعالًا لخلق قيمة مستدامة ومستمرة.‏ </li>
  </ul>




      </div>  
      </form>

      </center>

     
     
     

      
      
     

         
   
    </Fragment>
  );
};






export default about;
