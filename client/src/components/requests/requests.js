import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
//import MarketItem from './MarketItem';
//import MarketForm from './PostForm';
import { editProfitrequest } from '../../actions/profitrequest';
import EditProfitrequestForm from './EditProfitrequestForm';  
 
// import ConfirmButton from "./ConfirmButton";
import axios from 'axios';
   
   
const Requests = ({loading , editProfitrequest}) => {

    const [user,setUser]= useState([])
    const [getRequests,setRequests]= useState([])
    const [Allcheckin,setAllcheckin]= useState([])
    const [Allcomplete,setAllcomplete]= useState([])

    const [visible,setVisible]= useState(20)
    const [visibleCheckin,setVisibleCheckin]= useState(20)
    const [visibleComplete,setVisibleComplete]= useState(20)
    //const [search,setSearch]= useState('')

    const currentResults = getRequests.slice(0,visible);
    const currentResultsCheckin = Allcheckin.slice(0,visibleCheckin);
    const currentResultsComplete = Allcomplete.slice(0,visibleComplete);

    // const onChange = e =>
    // setSearch({ search: e.target.value });
    const loadMore = async e => {
        setVisible(visible+10)
    }
    const loadMoreCheckin = async e => {
      setVisibleCheckin(visibleCheckin+10)
  }
  const loadMoreComplete = async e => {
      setVisibleComplete(visibleComplete+10)
  }



  const [showComplete,setShowComplete]= useState('noneDisplayI') 
  const [showCheckin,setShowCheckin]= useState('noneDisplayI') 
  const [showAll,setShowAll]= useState('displayI') 

  const clickComplete = async e => {
    setShowComplete('displayI'); 
    setShowCheckin('noneDisplayI'); 
    setShowAll('noneDisplayI');
  }
  const clickCheckin = async e => {
    setShowCheckin('displayI'); 
    setShowComplete('noneDisplayI');
    setShowAll('noneDisplayI');
  }

  const clickAll = async e => {
    setShowAll('displayI');
    setShowCheckin('noneDisplayI'); 
    setShowComplete('noneDisplayI');
    
  }
  
    useEffect(() => {

      axios.get('/api/auth')
      .then(res => {
        setUser(res.data)
      }) 
      .catch((err) => {
        console.log(err);
      })
      
      
        axios.get('/api/profitrequests/all')
        .then(res => {
          console.log(res);
          setRequests(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        axios.get('/api/profitrequests/allcheckin')
        .then(res => {
          console.log(res);
          setAllcheckin(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        axios.get('/api/profitrequests/allcomplete')
        .then(res => {
          console.log(res);
          setAllcomplete(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


      }, [getRequests,user]);


      const RequestsValid = ( 
       
     
  
         
        <div className="mainForm">
  
      <center>
        <div className="dash-title"><i class="fa fa-usd fa-1x"></i> إدارة طلبات الأرباح  <i class="fa fa-usd fa-1x"></i> </div>
        <Link to="/ar/dashboard/main" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> رجوع </Link>
  
        {showComplete === 'noneDisplayI'?(
        <div  onClick={clickComplete} className="Action-button-plus-admin">  مكتملة (تم الدفع) </div>
        ):(
          <div  onClick={clickComplete} className="Action-button-plus-admin-active">   مكتملة (تم الدفع) </div>
        )}

        {showCheckin === 'noneDisplayI'?(
                <div  onClick={clickCheckin}className="Action-button-plus-admin">   قيد الانتظار </div>
        ):(
          <div  onClick={clickCheckin}className="Action-button-plus-admin-active">   قيد الانتظار </div>
        )}


{showAll === 'noneDisplayI'?(
  <div  onClick={clickAll}className="Action-button-plus-admin">   كل الطلبات </div>
):(
  <div  onClick={clickAll}className="Action-button-plus-admin-active">   كل الطلبات </div>

)}

 </center>


{/* /////////////////////////////////complete//////////////////////////////////// */}
 <div className={showComplete}>
   <Fragment> 
     
   {Allcomplete.length <1?(
<Spinner />
 ):(
 
  currentResultsComplete.map(req => (
     <Fragment>
      <div className={showComplete}  >  
    <center>
    <div class="dash-list" key={req._id}>
    {req.status === 'check-in'&&( <div className="title-in-list">{req.user.username} ({req.status})  </div>)}
    {req.status === 'complete'&&( <div className="title-in-list-complete">{req.user.username} ({req.status}) 
    {'   '}<i class="fa fa-check-circle fa-4x" aria-hidden="true"></i>
    </div>)}


      <div>

        <Link  to={`/dashboard/users/editUser/${req._id}`}  style={{color:'#000',textDecoration:'none',float:'right',marginRight:'20px'}} > <i class="fa fa-user fa-3x"></i> </Link>

      <p class="list-details"> <span className="redColor">الاسم: </span>{req.user.first_name}  {req.user.last_name} | <span className="redColor">البريد الالكتروني: </span>{req.user.email} 
      
      </p>
      <p class="list-details">
       <span className="redColor">حالة الطلب: </span>{req.status} 
       <span className="redColor">مبلغ الطلب: </span>{req.amount} 
        </p>
       <p class="list-details"> <span className="redColor"> الحالة: </span>{req.status}  <EditProfitrequestForm userId={req._id} status={req.status} />  </p> 
      
 
      <p class="list-button">
 
             {/* <ConfirmButton
            dialog={["", "هل انت متأكد ؟", "تأكيد الحذف"]}
            action={() => deleteMarket(req._id)}
              />   */}
 
      {/* <button
      onClick={() => deleteMarket(market._id)}
      class="Action-button-delete">  <i class="fa fa-close fa-1x"></i> 
       </button> */}

      </p>
      </div> 
  </div>
  </center>

  </div>
     </Fragment>
      )))}


  {/* onClick={() => loadMore()} */}
  {visibleComplete < Allcomplete.length && (
    <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}


</Fragment>
 </div>
{/* ///////////////////////////////////End complete////////////////////////////////// */}










{/* /////////////////////////////////checkin//////////////////////////////////// */}

 <div className={showCheckin}>
 <Fragment>

 {Allcheckin.length <1?(
<Spinner />
 ):(
 
  currentResultsCheckin.map(req => (
     <Fragment>
      <div className={showCheckin}  >  
    <center>
    <div class="dash-list" key={req._id}>
    {req.status === 'check-in'&&( <div className="title-in-list">{req.user.username} ({req.status})  </div>)}
    {req.status === 'complete'&&( <div className="title-in-list-complete">{req.user.username} ({req.status}) 
    {'   '}<i class="fa fa-check-circle fa-4x" aria-hidden="true"></i>
    </div>)}


      <div>

        <Link  to={`/dashboard/users/editUser/${req._id}`}  style={{color:'#000',textDecoration:'none',float:'right',marginRight:'20px'}} > <i class="fa fa-user fa-3x"></i> </Link>

      <p class="list-details"> <span className="redColor">الاسم: </span>{req.user.first_name}  {req.user.last_name} | <span className="redColor">البريد الالكتروني: </span>{req.user.email} 
      
      </p>
      <p class="list-details">
       <span className="redColor">حالة الطلب: </span>{req.status} 
       <span className="redColor">مبلغ الطلب: </span>{req.amount} 
        </p>
       <p class="list-details"> <span className="redColor"> الحالة: </span>{req.status}  <EditProfitrequestForm userId={req._id} status={req.status} />  </p> 
      
 
      <p class="list-button">
 
             {/* <ConfirmButton
            dialog={["", "هل انت متأكد ؟", "تأكيد الحذف"]}
            action={() => deleteMarket(req._id)}
              />   */}
 
      {/* <button
      onClick={() => deleteMarket(market._id)}
      class="Action-button-delete">  <i class="fa fa-close fa-1x"></i> 
       </button> */}

      </p>
      </div> 
  </div>
  </center>

  </div>
     </Fragment>
      )))}


  {/* onClick={() => loadMore()} */}
  {visibleCheckin < Allcheckin.length && (
    <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</Fragment>
 </div>
{/* /////////////////////////////////End checkin//////////////////////////////////// */}



{/* /////////////////////////////////All//////////////////////////////////// */}
<div className={showAll}>
<Fragment> 
 {getRequests.length <1?(
<Spinner />
 ):(
 
 currentResults.map(req => (
     <Fragment>
      <div className={showAll}  >  
    <center>
    <div class="dash-list" key={req._id}>
    {req.status === 'check-in'&&( <div className="title-in-list">{req.user.username} ({req.status})  </div>)}
    {req.status === 'complete'&&( <div className="title-in-list-complete">{req.user.username} ({req.status}) 
    {'   '}<i class="fa fa-check-circle fa-4x" aria-hidden="true"></i>
    </div>)}


      <div>

        <Link  to={`/dashboard/users/editUser/${req._id}`}  style={{color:'#000',textDecoration:'none',float:'right',marginRight:'20px'}} > <i class="fa fa-user fa-3x"></i> </Link>

      <p class="list-details"> <span className="redColor">الاسم: </span>{req.user.first_name}  {req.user.last_name} | <span className="redColor">البريد الالكتروني: </span>{req.user.email} 
      
      </p>
      <p class="list-details">
       <span className="redColor">حالة الطلب: </span>{req.status} 
       <span className="redColor">مبلغ الطلب: </span>{req.amount} 
        </p>
       <p class="list-details"> <span className="redColor"> الحالة: </span>{req.status}  <EditProfitrequestForm userId={req._id} status={req.status} />  </p> 
      
 
      <p class="list-button">
 
             {/* <ConfirmButton
            dialog={["", "هل انت متأكد ؟", "تأكيد الحذف"]}
            action={() => deleteMarket(req._id)}
              />   */}
 
      {/* <button
      onClick={() => deleteMarket(market._id)}
      class="Action-button-delete">  <i class="fa fa-close fa-1x"></i> 
       </button> */}

      </p>
      </div> 
  </div>
  </center>

  </div>
     </Fragment>
      )))}


  {/* onClick={() => loadMore()} */}
  {visible < getRequests.length && (
    <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</Fragment>
 </div>
{/* /////////////////////////////////End All//////////////////////////////////// */}






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
      <Navbar />

      {user.validity === "super"   ?  RequestsValid : notValidPage}
      </div>
      </div>
      );
  
  
  }
 


Requests.propTypes = {
    //getMarkets: PropTypes.func.isRequired,
    //market: PropTypes.object.isRequired,
    deleteMarket: PropTypes.func.isRequired,
    editProfitrequest: PropTypes.func.isRequired,

    
  };
  
  const mapStateToProps = state => ({
    user: state.market
  });
  
  export default connect(
    mapStateToProps,
    {editProfitrequest}
  )(Requests);
  