import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashboardActionsEnglish = () => {

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
 
{/* ///////////////////////////////////super///////////////////////////////// */}

{user.validity === "super" &&(

 
<Fragment>

<center> 
<ul className="Dash-nav"> 
<div className="DashBoxTitle" > Start Promot your services and products  </div>
<center>
  <li className="left"><Link to='/dashboard/posts'>    Publications  <i className="fa fa-bullhorn fa-2x"></i> </Link></li>
  <li className="left"><Link to='/dashboard/users/editUsername'>  Change your username  <i className="fa fa-user-circle-o fa-2x"></i> </Link></li>  

 {/* <li className="left"><Link to='/questions'> <i className="fa fa-question-circle fa-2x"></i>  Questions </Link></li> */}
 
 <li className="left"><Link to='/dashboard/categories'>   Categories <i className="fa fa-cubes fa-2x"></i></Link></li>
 <li className="left"><Link to='/dashboard/markets'>   Markets <i className="fa fa-credit-card-alt fa-2x"></i></Link></li>  
 <li className="left"><Link to='/dashboard/countries'>   Countries <i className="fa fa-globe fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/questions'>   Reports <i className="fa fa-pie-chart fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/users'>   User Management <i className="fa fa-users fa-2x"></i> </Link></li>  
 <li className="left"><Link to='/dashboard/requests'>  Commission management  <i className="fa fa-usd fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/Addpurpose'>   Types of purposes  <i class="fa fa-cogs fa-2x" aria-hidden="true"></i> </Link></li>
 <li className="left"><Link to='/dashboard/Addmembershiptype'>   Memberships types  <i class="fa fa-address-card fa-2x" aria-hidden="true"></i> </Link></li>
 <li className="left"><Link to='/dashboard/AdminPosts'>  Manage all posts  <i className="fa fa-bullhorn fa-2x"></i> </Link></li>  
 </center>
</ul> 
</center>

 
  </Fragment>
 
 
)}


 
    
  


{/* ///////////////////////////////////Admin///////////////////////////////// */}
{user.validity === "admin"&&(
<Fragment>

<center> 
<ul className="Dash-nav"> 
<div className="DashBoxTitle" > Start Promot your services and products  </div>
<center>
<li className="left"><Link to='/dashboard/posts'>    Publications  <i className="fa fa-bullhorn fa-2x"></i> </Link></li>
<li className="left"><Link to='/dashboard/users/editUsername'>  Change your username  <i className="fa fa-user-circle-o fa-2x"></i> </Link></li>  

 {/* <li className="left"><Link to='/questions'> <i className="fa fa-question-circle fa-2x"></i>  Questions </Link></li> */}
 
 <li className="left"><Link to='/dashboard/categories'>   Categories <i className="fa fa-cubes fa-2x"></i></Link></li>
 <li className="left"><Link to='/dashboard/markets'>   Markets <i className="fa fa-credit-card-alt fa-2x"></i></Link></li>  
 <li className="left"><Link to='/dashboard/countries'>   Countries <i className="fa fa-globe fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/questions'>   Reports <i className="fa fa-pie-chart fa-2x"></i> </Link></li>
 {/* <li className="left"><Link to='/dashboard/users'>   ?????????? ???????????????????? <i className="fa fa-users fa-2x"></i> </Link></li>   */}
 {/* <li className="left"><Link to='/dashboard/requests'>  ?????????? ???????????? ??????????????  <i className="fa fa-usd fa-2x"></i> </Link></li> */}
 <li className="left"><Link to='/dashboard/Addpurpose'>   Types of purposes   <i class="fa fa-cogs fa-2x" aria-hidden="true"></i> </Link></li>
 <li className="left"><Link to='/dashboard/Addmembershiptype'>   Memberships types  <i class="fa fa-address-card fa-2x" aria-hidden="true"></i> </Link></li>
 <li className="left"><Link to='/dashboard/AdminPosts'>  Manage all posts  <i className="fa fa-bullhorn fa-2x"></i> </Link></li>  
 </center>
</ul> 
</center>


  </Fragment>
)}




{/* ///////////////////////////////////Normal///////////////////////////////// */}
{user.validity === "normal"&&(
<Fragment>

<center> 
<ul className="Dash-nav"> 
<div className="DashBoxTitle" > Start Promot your services and products  </div>
<center>
  <li className="left"><Link to='/dashboard/posts'>    Publications  <i className="fa fa-bullhorn fa-2x"></i> </Link></li>
  <li className="left"><Link to='/dashboard/users/editUsername'>  Change your username  <i className="fa fa-user-circle-o fa-2x"></i> </Link></li>  
 {/* <li className="left"><Link to='/dashboard/categories'>   ?????????????????? ?????????????? <i className="fa fa-cubes fa-2x"></i></Link></li>
 <li className="left"><Link to='/dashboard/markets'>   ?????????????? <i className="fa fa-credit-card-alt fa-2x"></i></Link></li>  
 <li className="left"><Link to='/dashboard/countries'>   ?????????? <i className="fa fa-globe fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/questions'>   ???????????? <i className="fa fa-pie-chart fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/users'>   ?????????? ???????????????????? <i className="fa fa-users fa-2x"></i> </Link></li>  
 <li className="left"><Link to='/dashboard/requests'>  ?????????? ???????????? ??????????????  <i className="fa fa-usd fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/Addpurpose'>   ??????????   ??????????????  <i class="fa fa-cogs fa-2x" aria-hidden="true"></i> </Link></li>
 <li className="left"><Link to='/dashboard/Addmembershiptype'>   ?????????? ????????????????  <i class="fa fa-address-card fa-2x" aria-hidden="true"></i> </Link></li>
 <li className="left"><Link to='/dashboard/AdminPosts'>  ?????????? ???????? ??????????????????  <i className="fa fa-bullhorn fa-2x"></i> </Link></li>   */}
 </center>
</ul> 
</center>
  </Fragment>
)}

    


 
 
{/* ///////////////////////////////////Marketer///////////////////////////////// */}
{user.validity === "marketer"&&(
<Fragment>

<center> 
<ul className="Dash-nav"> 
<div className="DashBoxTitle" > Start Promot your services and products  </div>
<center>
  <li className="left"><Link to='/dashboard/posts'>    Publications  <i className="fa fa-bullhorn fa-2x"></i> </Link></li>
  <li className="left"><Link to='/dashboard/users/editUsername'>  Change your username  <i className="fa fa-user-circle-o fa-2x"></i> </Link></li>  

 {/* <li className="left"><Link to='/questions'> <i className="fa fa-question-circle fa-2x"></i>  Questions </Link></li> */}
 
 {/* <li className="left"><Link to='/dashboard/categories'>   ?????????????????? ?????????????? <i className="fa fa-cubes fa-2x"></i></Link></li>
 <li className="left"><Link to='/dashboard/markets'>   ?????????????? <i className="fa fa-credit-card-alt fa-2x"></i></Link></li>  
 <li className="left"><Link to='/dashboard/countries'>   ?????????? <i className="fa fa-globe fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/questions'>   ???????????? <i className="fa fa-pie-chart fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/users'>   ?????????? ???????????????????? <i className="fa fa-users fa-2x"></i> </Link></li>  
 <li className="left"><Link to='/dashboard/requests'>  ?????????? ???????????? ??????????????  <i className="fa fa-usd fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/Addpurpose'>   ??????????   ??????????????  <i class="fa fa-cogs fa-2x" aria-hidden="true"></i> </Link></li>
 <li className="left"><Link to='/dashboard/Addmembershiptype'>   ?????????? ????????????????  <i class="fa fa-address-card fa-2x" aria-hidden="true"></i> </Link></li>
 <li className="left"><Link to='/dashboard/AdminPosts'>  ?????????? ???????? ??????????????????  <i className="fa fa-bullhorn fa-2x"></i> </Link></li>   */}
   <li className="left"><Link to='/dashboard/posts'>  My Commissions   <i className="fa fa-usd fa-2x"></i> </Link></li>

 </center>
</ul> 
</center>


  </Fragment>
)}

 
 


 {/* ///////////////////////////////////Agency///////////////////////////////// */}
 {user.validity === "agency"&&(
<Fragment>
 
<center> 
<ul className="Dash-nav"> 
<div className="DashBoxTitle" > Start Promot your services and products  </div>
<center>
  <li className="left"><Link to='/dashboard/posts'>    Publications  <i className="fa fa-bullhorn fa-2x"></i> </Link></li>
  <li className="left"><Link to='/dashboard/users/editUsername'>  Change your username  <i className="fa fa-user-circle-o fa-2x"></i> </Link></li>  

 {/* <li className="left"><Link to='/questions'> <i className="fa fa-question-circle fa-2x"></i>  Questions </Link></li> */}
 
 {/* <li className="left"><Link to='/dashboard/categories'>   ?????????????????? ?????????????? <i className="fa fa-cubes fa-2x"></i></Link></li>
 <li className="left"><Link to='/dashboard/markets'>   ?????????????? <i className="fa fa-credit-card-alt fa-2x"></i></Link></li>  
 <li className="left"><Link to='/dashboard/countries'>   ?????????? <i className="fa fa-globe fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/questions'>   ???????????? <i className="fa fa-pie-chart fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/users'>   ?????????? ???????????????????? <i className="fa fa-users fa-2x"></i> </Link></li>  
 <li className="left"><Link to='/dashboard/requests'>  ?????????? ???????????? ??????????????  <i className="fa fa-usd fa-2x"></i> </Link></li>
 <li className="left"><Link to='/dashboard/Addpurpose'>   ??????????   ??????????????  <i class="fa fa-cogs fa-2x" aria-hidden="true"></i> </Link></li>
 <li className="left"><Link to='/dashboard/Addmembershiptype'>   ?????????? ????????????????  <i class="fa fa-address-card fa-2x" aria-hidden="true"></i> </Link></li>
 <li className="left"><Link to='/dashboard/AdminPosts'>  ?????????? ???????? ??????????????????  <i className="fa fa-bullhorn fa-2x"></i> </Link></li>   */}
   <li className="left"><Link to='/dashboard/posts'>  My Commissions  <i className="fa fa-usd fa-2x"></i> </Link></li>

 </center>
</ul> 
</center>


  </Fragment>
)}




  


  

    </>
  );
};

export default DashboardActionsEnglish;
