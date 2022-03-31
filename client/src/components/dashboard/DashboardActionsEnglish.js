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
    <center> 
    <ul className="Dash-nav">
      {user.validity}
    <div className="DashBoxTitle" > Start Promot your services and products  </div>
    <center>
      <li className="left"><Link to='/en/dashboard/posts'> <i className="fa fa-bullhorn fa-2x"></i>   Publications </Link></li>
 
      <li className="left"><Link to='/en/dashboard/categories'> <i className="fa fa-cubes fa-2x"></i>   Categories </Link></li>
     <li className="left"><Link to='/en/dashboard/markets'> <i className="fa fa-credit-card-alt fa-2x"></i>  Markets </Link></li>  
     <li className="left"><Link to='/en/dashboard/countries'> <i className="fa fa-globe fa-2x"></i>  Countries </Link></li>
     <li className="left"><Link to='/en/dashboard/questions'> <i className="fa fa-pie-chart fa-2x"></i>  Reports </Link></li>
     <li className="left"><Link to='/en/membership/prices'> <i className="fa fa-level-up fa-2x"></i>  Upgrade  </Link></li>
 
     </center>
    </ul>
    </center>
 



  


  

    </>
  );
};

export default DashboardActionsEnglish;
