import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
//import MarketItem from './MarketItem';
//import MarketForm from './PostForm';
import { editValidity } from '../../actions/auth';

import ValidityForm from './ValidityForm';  
 
// import ConfirmButton from "./ConfirmButton";
import axios from 'axios';
   
   
const Users = ({loading , editValidity}) => {
    const [getUsers,setUsers]= useState([])
    const [visible,setVisible]= useState(20)
    //const [search,setSearch]= useState('')

     

    const currentResults = getUsers.slice(0,visible);


    // const onChange = e =>
    // setSearch({ search: e.target.value });


    const loadMore = async e => {
        setVisible(visible+10)

    }


    useEffect(() => {
        axios.get('/api/users/allusers')
        .then(res => {
          console.log(res);
          setUsers(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


      }, [getUsers]);


      return loading ? (
        <Spinner />
      ) : (
       
    
  
        <div className="aqle3-main">
        <div className="mainword2">
          <Navbar />
        <div className="mainForm">
  
      <center>
        <div className="dash-title"> المستخدمين   <i class="fa fa-users fa-1x"></i> </div>
        <Link to="/ar/dashboard/main" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> رجوع </Link>
 
      </center>
  
 {getUsers.length <1?(
<Spinner />
 ):(
 
 currentResults
//filter(market=>{

//     return market.m_name.indexOf(search)>=0

//   })
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

      <p class="list-details"> <span className="redColor">الاسم: </span>{user.first_name}  {user.last_name} | <span className="redColor">البريد الالكتروني: </span>{user.email}   </p>
      <p class="list-details"> <span className="redColor"> الصلاحية: </span>{user.validity}  <ValidityForm userId={user._id} validity={user.validity} />  </p>
      
 
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
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

        </div>
        </div>
        </div>


      
    )
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
  