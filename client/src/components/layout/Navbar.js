import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import ff from './ttt.jpg';
import { useTranslation } from 'react-i18next';
 
import axios from 'axios';
 

const mySidenav0 = 'sidenavnone';
const sidenav = 'sidenav';


 
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  const [t, i18next] = useTranslation()

  const [mySidenav, setmySidenav] = useState(mySidenav0)

  const [categories11,setCategory11]= useState([])
 
  const openMenu = async e => {
 
    setmySidenav(sidenav);
  };

  

  const closeMenu = async e => {
 
    setmySidenav(mySidenav0);
  };




  
  useEffect(() => {
   
    axios.get('/api/categories/public')
    .then(res => {
      console.log(res);
    setCategory11(res.data)
    })
    .catch((err) => {
      console.log(err);
    })




  }, [categories11]);

  
   
 
  const authLinks = (
 
        <ul className="topnav">
        <div className="logoContent">
        <Link to='/'>
        <img className="logo" src={ff}/>
        </Link>
        </div>
<div id="mySidenav"   className={mySidenav}>
 <center> 
 <button onClick={closeMenu} className="closebtn">&times;</button>
 


 {/* {categories11.map(catego=>(
<Fragment> 
  <a href={`/displayCategoryItems/${catego._id}#/${catego.c_name}`} > 
 <span><img className="" src={catego.image} style={{width:'50px' , height:'50px', marginRight:'20px'}}/></span>
 {catego.c_name} </a> 
  </Fragment>
 ))} */}
 <Link to='/shops'>المتاجر {' '} <i class="fa fa-shopping-cart" aria-hidden="true"></i> </Link>
 <Link to='/dashboard/MyProfile'> الملف الشخصي  {' '} <i class="fa fa-user" aria-hidden="true"></i> </Link>
 <Link to='/dashboard/posts'>   أضف إعلانك   <i class="fa fa-plus" aria-hidden="true"></i> </Link>
 <Link to='/dashboard/main'> <i class="fa fa-cog" aria-hidden="true"></i> {' '}  لوحة التحكم </Link>
 <Link to='/membership/prices'>   العضويات  {' '} <i className="fa fa-rocket fa-1x"></i>  </Link>
 </center>
</div>
 
      {/* <li className="left">
      <Link to='/'>
        <img src={ss} width="60px" height="40px"/>
        </Link>
        </li> */} 

      <li className="">
        <Link to='/dashboard/MyProfile'>
          الملف الشخصي
          {' '} <i class="fa fa-user" aria-hidden="true"></i> 
          </Link>
      </li>
      {/* <li className="">
        <Link to='/ar/dashboard/chats'>
          الرسائل
          {' '} <i class="fa fa-envelope" aria-hidden="true"></i>  
          </Link>
      </li> */}
      <li className="">
        <Link to='/dashboard/posts'>أضف إعلانك  
        {' '} <i class="fa fa-plus" aria-hidden="true"></i>
        </Link>
        
      </li>
      <li className="">
        <Link to='/dashboard/main'>
        <span className='hide-sm'>  لوحة التحكم</span>
        {' '}<i class="fa fa-cog" aria-hidden="true"></i> 
           
        </Link>
      </li>
      <li className="">
      <Link to='/membership/prices'> 
          <span className='hide-sm'>العضويات </span>
          {' '}<i className="fa fa-rocket fa-1x"></i> 
        </Link>

      </li>


      <li className="">
        <Link to='/shops'>
          المتاجر
          {' '} <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
      </li>  
      
  
      <li>
      <button className="buttonNav" onClick={openMenu}>  &#9776;   </button>
      </li>

  
     <li className="">
     {i18next.language === 'ar' && <Link  onClick={()=>{i18next.changeLanguage('en')}}> 
          <span className='hide-sm'>{t('lang')} </span>
          {' '}<i className="fa fa-globe fa-1x"></i> 
        </Link>}

        {i18next.language === 'en' && <Link  onClick={()=>{i18next.changeLanguage('ar')}}> 
          <span className='hide-sm'>{t('lang')} </span>
          {' '}<i className="fa fa-globe fa-1x"></i> 
        </Link>}

      </li>
      
  
  
      <li className=" ">
        <Link className="LogoutColor" onClick={logout} to='/'>
          
          <span className=''><i class="fa fa-power-off" aria-hidden="true"></i></span>
          {' '} <i className='fas fa-sign-out-alt' />
        </Link>
      </li> 

 

 {/* <div className="listdownArabic">
  <li><a><i class="fa fa-language fa-3x" ></i>
      </a></li>
  <div class="listdownArabic-content">
    <Link to="/en/dashboard/main">English</Link>
    <Link to="/ar/dashboard/main">عربي</Link> 
  </div>
  </div>  */}

    </ul>
  );
 
  const guestLinks = (
    <ul className="topnav">

        <div className="logoContent">
        <Link to='/'>
        <img className="logo" src={ff}/>
        </Link>
        </div>


        
 
<button className="buttonNav" onClick={openMenu}>  &#9776;   </button>
 

<div id="mySidenav"   className={mySidenav}>
 <center> 
 <button onClick={closeMenu} className="closebtn">&times;</button>
 </center>
 {/* {categories11.map(catego=>(

<Fragment> 

<a href={`/displayCategoryItems/${catego._id}#/${catego.c_name}`} > 
<span><img className="" src={catego.image} style={{width:'50px' , height:'50px', marginRight:'20px'}}/></span>
{catego.c_name} </a>

</Fragment>

 ))} */}

 <Link to='/user/createAccount'>انشئ حساب   <i class="fa fa-user-plus fa-1x" ></i> {' '} </Link>
 <Link to='/user/login'> الدخول   <i class="fa fa-sign-in" aria-hidden="true"></i> {' '}</Link>
 <Link to='/membership/prices'>   العضويات   <i className="fa fa-rocket fa-1x"></i> {' '}</Link>
 <Link to='/shops'>  المتاجر    <i class="fa fa-shopping-cart" aria-hidden="true"></i>{' '}</Link>
 {i18next.language === 'ar' && <Link  onClick={()=>{i18next.changeLanguage('en')}}> 
 <span className='hide-sm'>{t('lang')} </span>
 {' '}<i className="fa fa-globe fa-1x"></i> 
 </Link>}

  {i18next.language === 'en' && <Link  onClick={()=>{i18next.changeLanguage('ar')}}> 
  <span className='hide-sm'>{t('lang')} </span>
  {' '}<i className="fa fa-globe fa-1x"></i> 
  </Link>}

 
</div>

    
 
    <li className="">
        <Link to='/user/createAccount'>
          <span className='hide-sm'>انشئ حساب </span>
          {' '}<i class="fa fa-user-plus fa-1x" ></i> 
          </Link>
      </li>
 
 
      <li className="">
        <Link to='/user/login'> 
        <span className='hide-sm'>الدخول </span>
        {' '}<i class="fa fa-sign-in" aria-hidden="true"></i> 
        </Link>
      </li>

 
      <li className="">
        <Link to='/membership/prices'>
          <span className='hide-sm'>العضويات </span>
          {' '}<i className="fa fa-rocket fa-1x"></i> 
        </Link>

        <Link to='/shops'>
          المتاجر
          {' '}<i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>

          

      </li>
      <li className="">
     {i18next.language === 'ar' && <Link  onClick={()=>{i18next.changeLanguage('en')}}> 
          <span className='hide-sm'>{t('lang')} </span>
          {' '}<i className="fa fa-globe fa-1x"></i> 
        </Link>}

        {i18next.language === 'en' && <Link  onClick={()=>{i18next.changeLanguage('ar')}}> 
          <span className='hide-sm'>{t('lang')} </span>
          {' '}<i className="fa fa-globe fa-1x"></i> 
        </Link>}

      </li>

      
 {/* <div className="listdownArabic">
  <li><a><i class="fa fa-language fa-3x" ></i>
      </a></li>
  <div class="listdownArabic-content">
    <Link to="/en">English</Link>
    <Link to="/ar">Arabic</Link>
  </div>
  </div>  */}



    </ul>





  );
 
  return (
    <Fragment>
    <center> 
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
      </center>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
 
export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
