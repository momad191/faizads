import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashboardActionsArabic = () => {

  const [user,setUser]= useState([])

  axios.get('/api/auth')
  .then(res => {
    console.log(res);
    setUser(res.data)
  }) 
  .catch((err) => {
    console.log(err);
  })

  return (
    
    <>    


      <center> 
<ul className="Dash-nav">
{user.validity}
<div className="DashBoxTitle" > البدء بالترويج لخدماتك ومنتجاتك  </div>
<center>
  <li className="left"><Link to='/ar/dashboard/posts'> <i className="fa fa-bullhorn fa-2x"></i>   منشوراتك </Link></li>
 {/* <li className="left"><Link to='/questions'> <i className="fa fa-question-circle fa-2x"></i>  Questions </Link></li> */}
 
 <li className="left"><Link to='/ar/dashboard/categories'> <i className="fa fa-cubes fa-2x"></i>  التصنيفات الفرعية </Link></li>
 <li className="left"><Link to='/ar/dashboard/markets'> <i className="fa fa-credit-card-alt fa-2x"></i>  الاسواق </Link></li>  
 <li className="left"><Link to='/ar/dashboard/countries'> <i className="fa fa-globe fa-2x"></i>  الدول </Link></li>
 <li className="left"><Link to='/ar/dashboard/questions'> <i className="fa fa-pie-chart fa-2x"></i>  تقارير </Link></li>
 <li className="left"><Link to='/ar/dashboard/users'> <i className="fa fa-users fa-2x"></i>  ادارة المستخدمين </Link></li>
 

 </center>
</ul> 
</center>
 
    
  



    


 
 
 



  


  

    </>
  );
};

export default DashboardActionsArabic;
