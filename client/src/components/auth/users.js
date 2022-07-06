import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish'; 
import { useTranslation } from 'react-i18next';
import axios from 'axios';
//import MarketItem from './MarketItem';
//import MarketForm from './PostForm';
import { editValidity } from '../../actions/auth'; 
import ValidityForm from './ValidityForm';  
   
// import ConfirmButton from "./ConfirmButton";
 
    
   
const Users = ({loading , editValidity}) => {
     const [t, i18next] = useTranslation()
    const [user,setUser]= useState([])
    const [getUsers,setUsers]= useState([])
    const [visible,setVisible]= useState(20)
    //const [search,setSearch]= useState('')

     

    const currentResults = getUsers.slice(0,visible);


    // const onChange = e =>
    // setSearch({ search: e.target.value });
    const [formData, setFormData] = useState({
   
      username:'',
      email:''
   
  
    }); 
    
    const { username,email} = formData;
  
    const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });


    const loadMore = async e => {
        setVisible(visible+10)

    }


    const [ShowByUsername,setShowByUsername]= useState(true)
    const [ShowByEmail,setShowByEmail]= useState(false)

    const ShowUsername = async e => {
      setShowByUsername(true)
      setShowByEmail(false)
       
  }
  const ShowEmail = async e => {
    setShowByUsername(false)
    setShowByEmail(true)
     
}

    useEffect(() => {

      axios.get('/api/auth')
      .then(res => {
        setUser(res.data)
      }) 
      .catch((err) => {
        console.log(err);
      })


        axios.get('/api/users/allusers')
        .then(res => {
          console.log(res);
          setUsers(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


      }, [getUsers,user]);


     const UsersValid =(
       
     
  
     
        <div className="mainForm">
  
      <center>
        <div className="dash-title"> <i class="fa fa-users fa-1x"></i> {t('users_management_title')}  </div>
        <Link to="/dashboard/main" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> {t('backButton')} </Link>
  
        {ShowByUsername === false &&(
        <button onClick={ShowUsername} className="Action-button-plus-admin"> {t('user_search_by_username')}  <i className="fa fa-users fa-1x"></i>  </button>
        )}

        {ShowByEmail === false &&(
        <button onClick={ShowEmail} className="Action-button-plus-admin"> {t('user_search_by_email')}  <i className="fa fa-envelope fa-1x"></i>  </button>
        )}
        {ShowByUsername === true &&(
          <center>  
          <input
        style={{width:'40%'}}
           className="ForminputSearch"
            type='text'
            placeholder={t('user_search_by_username')}
            name='username'
            value={username}
            onChange={e => onChange(e)}
          />
      <span><button className='loadMorebtnSearch'
      onClick={loadMore}>{t('user_search')} <i class="fa fa-search fa-1x"></i>  </button></span>
     </center> 
 )}


{ShowByEmail === true &&(
     <center>  
          <input
        style={{width:'40%'}}
           className="ForminputSearch"
            type='text'
            placeholder={t('user_search_by_email')}
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
      <span><button className='loadMorebtnSearch'
      onClick={loadMore}> {t('user_search')} <i class="fa fa-search fa-1x"></i>  </button></span>
     </center> 
     )}


      </center>

  


 {getUsers.length <1?(
<Spinner />
 ):(
 currentResults
 .filter(user=>{
  return user.username.indexOf(username)>=0
})

.filter(user=>{
  return user.email.indexOf(email)>=0
})
 .map(user => ( 
     <Fragment>
     
        {/* <MarketItem key={market._id} market={market} /> */}
         
        <center>
    <div class="dash-list" key={user._id}>

  

    <div className="title-in-list">
    <a className="title-in-list" href={user.name}>
    {user.name}  </a>
   
    </div>
 

    {/* {market.m_image && (
    <img src={market.m_image} style={{ width: '120px', height:'80px',marginBottom:''}} />
    )} */}

     
      <div>
      
      
     
   
  
        <Link  to={`/dashboard/users/editUser/${user._id}`}  style={{color:'#000',textDecoration:'none',float:'right',marginRight:'20px'}} > <i class="fa fa-user fa-3x"></i> </Link>

      <p class="list-details"> <span className="redColor">{t('user_name')} </span>{user.first_name}  {user.last_name} | <span className="redColor"> {t('user_email')} </span>{user.email}   </p>
      <p class="list-details"> <span className="redColor"> {t('user_validity')}  </span>{user.validity}  <ValidityForm userId={user._id} validity={user.validity} />  </p>
      
 
      <p class="list-button">
      <button className="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
      <Link to={`/dashboard/users/editUser/${user._id}`}  style={{textDecoration:'none'}}>   <button  className="Action-button-status">  <i class="fa fa-edit fa-1x"></i>   </button> </Link>

            {/* <ConfirmButton
            dialog={["", "هل انت متأكد ؟", "تأكيد الحذف"]}
            action={() => deleteMarket(user._id)}
              /> */}
 
      {/* <button
      onClick={() => deleteMarket(market._id)}
      class="Action-button-delete">  <i class="fa fa-close fa-1x"></i> 
       </button> */}

      </p>
      </div> 
  </div>
  </center>

  
     </Fragment>
      )))}




  {/* onClick={() => loadMore()} */}
  {visible < getUsers.length && (
    <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
      </center>
  )}

        </div>

    )

  

    const notValidPage =(
      <Fragment>
             <center> 
           <Spinner />
          </center>
      </Fragment>
    )
      
        return(
          <div className="aqle3-main">
          <div className="mainword2">
          {i18next.language === 'ar'&&(<Navbar />)}
          {i18next.language === 'en'&&(<NavbarEnglish />)}
        {user.validity === "super" ?  UsersValid : notValidPage}
        </div>
        </div>
        );

} 
 


Users.propTypes = {
    //getMarkets: PropTypes.func.isRequired,
    //market: PropTypes.object.isRequired,
    deleteMarket: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = state => ({
    user: state.market
  });
  
  export default connect(
    mapStateToProps,
    {editValidity}
  )(Users);
  