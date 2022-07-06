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
 
        <ul className="topnavEN">
        <div className="logoContentEN">
        <Link to='/'>
        <img className="logo" src={ff}/>
        </Link>
        </div>
         <div id="mySidenav"   className={mySidenav}>
 <center> 
 <button onClick={closeMenu} className="closebtn">&times;</button>
 </center>
 {categories11.map(catego=>(
<Fragment> 

 <a href={`/displayCategoryItems/${catego._id}#/${catego.c_name}`} > 
 <span><img className="" src={catego.image} style={{width:'50px' , height:'50px', marginRight:'20px'}}/></span>
 {catego.c_name} </a>
 
 </Fragment>
 ))} 
</div> 
      {/* <li className="left">
      <Link to='/'>
        <img src={ss} width="60px" height="40px"/>
        </Link>
        </li> */}
      <li className="">
        <Link to='/dashboard/MyProfile'>
        <i class="fa fa-user" aria-hidden="true"></i> 
        {' '}Profile</Link>
      </li>
      {/* <li className="">
        <Link to='/dashboard/chats'>
         <i class="fa fa-envelope" aria-hidden="true"></i>  
         {' '} Inbox
         
          </Link>
      </li> */}
 

<li className="">
        <Link to='/dashboard/posts'>
        <i class="fa fa-plus" aria-hidden="true"></i>{' '}
          <span className='hide-sm'>Add Your Ads</span>
        </Link>
      </li>


      <li className="">
        <Link to='/dashboard/main'>
        <i class="fa fa-cog" aria-hidden="true"></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li className="">
      <Link to='/membership/prices'>
        <i className="fa fa-rocket fa-1x"></i> {' '}
          <span className='hide-sm'>Membership </span>
        </Link>

      </li>

      <li className="">
        <Link to='/shops'>
         <i class="fa fa-shopping-cart" aria-hidden="true"></i>
         {' '} Shops
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
      
      <li className=" ">
        <Link className="LogoutColor" onClick={logout} to='/'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className=''><i class="fa fa-power-off" aria-hidden="true"></i></span>
        </Link>
      </li> 

      <li>
      <button className="buttonNavEN" onClick={openMenu}>  &#9776;   </button>
      </li>
 
 
 

    </ul>
  );
 
  const guestLinks = (
    
    <ul className="topnavEN">

        <div className="logoContentEN">
        <Link to='/'>
        <img className="logo" src={ff}/>
        </Link>
        </div>

 
 
        
 
<button className="buttonNav" onClick={openMenu}>  &#9776;   </button>
 

<div id="mySidenav"   className={mySidenav}>
 <center> 
 <button onClick={closeMenu} className="closebtn">&times;</button>
 </center>
 {categories11.map(catego=>(

<Fragment> 

<a href={`/displayCategoryItems/${catego._id}#/${catego.c_name}`} > 
<span><img className="" src={catego.image} style={{width:'50px' , height:'50px', marginRight:'20px'}}/></span>
{catego.c_name} </a>

</Fragment>

 ))}
</div>




 
      
 
    <li className="">
        <Link to='/user/createAccount'>
        <i class="fa fa-user-plus fa-1x" ></i> {' '}
          <span className='hide-sm'>  Create Account </span>
          </Link>
      </li>


      <li className="">
        <Link to='/user/login'> 
        <i class="fa fa-sign-in" aria-hidden="true"></i> {' '}
        
        <span className='hide-sm'>Login </span>
        </Link>
      </li>
 
  
      <li className="">
        <Link to='/membership/prices'>

        <i className="fa fa-rocket fa-1x"></i> {' '}
          <span className='hide-sm'>Memberships </span>
        </Link>


 
        <Link to='/shops'>
         <i class="fa fa-shopping-cart" aria-hidden="true"></i>
         {' '} Shops
        
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
