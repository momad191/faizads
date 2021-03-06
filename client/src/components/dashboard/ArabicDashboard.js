import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import Spinner from '../layout/Spinner'; 
import DashboardActionsArabic from './DashboardActionsArabic'; 
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import RequestForm from '../requests/RequestForm';      
import moment from 'moment';
import Moment from 'react-moment';  
// import 'moment/locale/ar';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  loading,
 
 
  // auth: { user },
  // profile: { profile, loading }
}) => {


  moment.locale('ar');
  
  // const [oneShop,setOneShop]= useState([])
  const [userShop,setuserShop]= useState([])

  const [subscription,setSubscription]= useState([])
  const [user,setUser]= useState([])
  const [userPosts,setUserPosts]= useState([])
  // const [userPostsInToday,setUserPostsInToday]= useState([])
  
 
  const [userRef,setUserRef]= useState([])
  const [visible,setVisible]= useState(10)
  const [RefToPay,setRefToPay]= useState([])


  const RefToPayResults = RefToPay.slice(0,visible);


  const loadMore = async e => {
    setVisible(visible+10)

}

  // const [OndemandAmount,setOndemandAmount]= useState([])
  const [visibleAllRequest,setVisibleAllRequest]= useState(10)
  const [allRequest,setAllRequest]= useState([])

  const allRequestResults = allRequest.slice(0,visibleAllRequest);

  const loadMoreRequests = async e => {
    setVisibleAllRequest(visibleAllRequest+10)

}

 
  const [ProfitCompleteRequest,setProfitCompleteRequest]= useState([])
  const [CheckInRequest,setCheckInRequest]= useState([])


  const [lastrequest,setLastRequest]= useState([])

  let totalpaidamounts =0;
  ProfitCompleteRequest.forEach(p=>{
    totalpaidamounts += p.amount;
    })

 
  let totalRequestedToPay =0;
  
  allRequest.forEach(p=>{
    totalRequestedToPay += p.amount;
    
    })

    
  const profit = (RefToPay.length*4) - (totalRequestedToPay);
 
    

  const myref = user.name;
  useEffect(() => {
  

    axios.get('/api/shops/usershop')
    .then(res => {
      console.log(res);
      setuserShop(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
 

    axios.get('/api/subscriptions/lastsubscription')
    .then(res => {
      console.log(res);
      setSubscription(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    axios.get('/api/auth')
    .then(res => {
      console.log(res);
      setUser(res.data)
    })
    .catch((err) => {
      console.log(err);
    }) 

 
 
    axios.get('/api/posts/userposts')
    .then(res => {
      //console.log(res);
      setUserPosts(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

 
    // axios.get('/api/posts/userPostsInToday')
    // .then(res => {
    //   //console.log(res);
    //   setUserPostsInToday(res.data)
    // })
    // .catch((err) => {
    //   console.log(err);
    // })


    axios.get('/api/auth/ref')
    .then(res => {
      //console.log(res);
      setUserRef(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

  

    axios.get('/api/subscriptions/refToPayaffiliate')
    .then(res => {
      //console.log(res);
      setRefToPay(res.data)
    })
    .catch((err) => {
      console.log(err);
    })



    // axios.get('/api/auth/OndemandAmount')
    // .then(res => {
    //   //console.log(res);
    //   setOndemandAmount(res.data)
    // })
    // .catch((err) => {
    //   console.log(err);
    // })

    

    axios.get('/api/profitrequests/allrequests')
    .then(res => {
      //console.log(res);
      setAllRequest(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

 
  
    axios.get('/api/profitrequests/complete')
    .then(res => {
      //console.log(res);
      setProfitCompleteRequest(res.data)
    })
    .catch((err) => {
      console.log(err);
    })



    axios.get('/api/profitrequests/checkin')
    .then(res => {
      //console.log(res);
      setCheckInRequest(res.data)
    })
    .catch((err) => {
      console.log(err);
    })




    axios.get('/api/profitrequests/lastrequest')
    .then(res => {
   
      setLastRequest(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

     

  }, []);


  return loading  ? (
    <Spinner />
  ) : (
    <Fragment>

 
        {/* <Navbar /> */}
     
 
     


      <div className="aqle3-main" >
      <div className="mainword2">
      <div className="mainForm">
 
 
<div className="login-title"></div>
{moment(subscription.membership_renewal_expiry_date).isBefore(Date.now()) ?(
   <Fragment>
  
 <center> 
 
   <Link to='/membership/prices' className="Dash-button-end-subscription">
 ?????????? ?????????????? ????????
</Link>

   </center>
 </Fragment>
):( 
  <Fragment>
{subscription.membership_class === 'golden' &&(
  <Fragment>
<center>
      <Link className="Dash-button-gold">   <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment>  : ?????????? ??????  </Link>
      <Link className="Dash-button-gold ">  <i className="fa fa-user fa-0x"></i> ?????????? ??????????  </Link>
      <Link className="Dash-button-gold ">  {subscription.user.first_name && subscription.user.first_name}  { subscription.user.last_name && subscription.user.last_name} </Link>
</center>
</Fragment>
)} 




{subscription.membership_class === 'silver' &&(
  <Fragment>
<center>
      <Link className="Dash-button-silver">   <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment>  : ?????????? ??????  </Link>
      <Link className="Dash-button-silver">  <i className="fa fa-user fa-0x"></i> ?????????? ????????  </Link>
      <Link className="Dash-button-silver">   {subscription.user.first_name && subscription.user.first_name}  { subscription.user.last_name && subscription.user.last_name}  </Link>
</center>
</Fragment>
)}


 


{subscription.membership_class === 'bronze' &&(
  <Fragment>
<center>
      <Link className="Dash-button-bronze">   <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment>  : ?????????? ??????  </Link>
      <Link className="Dash-button-bronze">  <i className="fa fa-user fa-0x"></i> ?????????? ??????????????  </Link>
      <Link className="Dash-button-bronze">   {subscription.user.first_name && subscription.user.first_name}  { subscription.user.last_name && subscription.user.last_name}  </Link>
</center>
</Fragment>
)}



{subscription.membership_class === 'special' &&(
  <Fragment>
<center>
      <Link className="Dash-button-special">   <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment>  : ?????????? ??????  </Link>
      <Link className="Dash-button-special">  <i className="fa fa-user fa-0x"></i> ?????????? ????????  </Link>
      <Link className="Dash-button-special">  {subscription.user.first_name && subscription.user.first_name}  { subscription.user.last_name && subscription.user.last_name}  </Link>

</center>
</Fragment>
)}

 

{subscription.membership_class === 'free' &&(
  <Fragment>
<center>
      <Link className="Dash-button-special">   <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment>  : ?????????? ??????  </Link>
      <Link className="Dash-button-special ">  <i className="fa fa-user fa-0x"></i> ?????????? ????????????  </Link>
      <Link className="Dash-button-special ">  {subscription.user.first_name && subscription.user.first_name}  { subscription.user.last_name && subscription.user.last_name}  </Link>
</center>
</Fragment>
)} 

 
 
{subscription.membership_class === '' &&(
  <Fragment>
<center>
<Link to='/membership/prices' className="Dash-button-special ">  <i className="fa fa-rocket fa-0x"></i> ???????? ???????? ???????? ??????????  </Link>
<Link className="Dash-button-special "> ?????????? {user.first_name && user.first_name}  { user.last_name && user.last_name}  </Link>
</center>
</Fragment>
)}  

 
</Fragment>
 
)}
    
   
<center>  
{userShop ?(
<Fragment> 
<Link to='/ar/dashboard/shops/edit' > <button className="Dash-button-open">  ?????????? ????????????   </button>  </Link>
<Link to={`/shops/${user.username}`} target="_blank" > <button className="Dash-button"> <i class="fa fa-external-link-square fa-0x" aria-hidden="true"></i> ??????????????   </button>  </Link>
</Fragment>
  ):(
  <Link to='/dashboard/create-shop'> <button className="Dash-button">  ?????? ????????  </button>  </Link>
 )}


 




 
 

      <div className="info-nav">
      <div className="DashBoxTitle" >?????????????? </div>
      <center>
      {/* <div className="Dash-button">  ({subscription.available_ads}): ?????? ?????????????????? ?????????????? ???????? ????????????????   <i class="fa fa-buysellads fa-2x" aria-hidden="true"></i>  </div> */}
      <div className="Dash-button">  ({userPosts && userPosts.length}):  ??????????????      <i class="fa fa-bullhorn fa-2x" aria-hidden="true"></i> </div>
      {/* <div className="Dash-button">  ({subscription.available_ads - userPosts.length }) :???????? ?????????????????? ?????????????? ???????? <i class="fa fa-buysellads fa-2x" aria-hidden="true"></i> </div> */}
      <div className="Dash-button">  ({userRef && userRef.length}): ?????? ?????????? ?????????????? <i class="fa fa-users fa-2x" aria-hidden="true"></i> </div>
      
      {/* <div className="Dash-button">  ({userPostsInToday.length}): ?????? ?????????????????? ???????????????? ?????????? <i class="fa fa-calendar-check-o fa-2x" aria-hidden="true"></i> </div> */}

      </center>

       </div>
      </center>


 

   
  
{user.username ?(
<DashboardActionsArabic />
):(
    <Spinner />
)}


   

 
 
      
 {/* //////////////////////////////////////start of affiliate /////////////////////////////////// */}
 {user.username ?(
  
<Fragment>
 
      <center> 
      <div className="affiliate-nav">
      <div className="affiliateTitle" >?????????????? ????????????????  </div>

<table>
  <tr>
   
   <th>       <i class="fa fa-link fa-1x" aria-hidden="true"></i>   {'   '}
       {user.username ?(<>
       <a href={`https://faizads.com/user/createAccount/${user.username}`}> 
      {`https://faizads.com/user/createAccount/${user.username}`}
         </a> </> ):(<>loading ...</> )}
 
         {'   '}
       <i class="fa fa-link fa-1x" aria-hidden="true"></i> </th>
       <th> ???????????? ?????????? ????   </th>
  </tr>

<tr>
<th>
   ({RefToPay.length})
  </th>
  <th>
     ?????????????? ???????????????? ???? ?????????? 
  </th>
</tr>

 
 
<tr>
<th>
  
    (${profit})
   {' '}
   {profit >= 12 &&
   <RequestForm userId={user._id} amout11={profit} />
   } 

  </th>
  <th>
    ???????????? ?????????????? 
  </th>
</tr>
  

<tr>
<th>
  ( ${lastrequest.amount} ) 
  
  </th>
  <th>
  ( ?????? ???????? ???? ???????? ?????????????? ?????????????? )
  </th>
</tr>
 


 
<tr>
<th>
   {CheckInRequest.length}
  </th>
  <th>
 ( ?????????? ???? ?????????? ???????????????? ?????????? )
  </th>
</tr>


<tr>
<th>
   {ProfitCompleteRequest.length}
  </th>
  <th>
    ?????????? ???? ?????????? ????     
  </th>
</tr>


<tr>
<th>
   (${totalpaidamounts})
  </th>
  <th>
    ?????????? ?????????????? ???????? ???? ?????????????? ????????????     
  </th>
</tr>



 







  
</table>
        
   

       </div>
      </center>




      <center> 
      <div className="affiliate-nav">
 
     <center> <div className="affiliateTitle" >  ?????????? ?????????? ????????????  : </div>   </center>

   <table id="myTable">
  <tr>
    <th >????????????</th>
    <th >????????????</th>
    <th>??????????  ?????????? </th>
  
  </tr>
 
  
  {allRequestResults
   .map(post => (
       <Fragment>
  <tr key={post._id}>
  <td className='membersList'>{post.status ==='check-in'?(
   <>???????? ??????????????</>
  ):(
    <> ??????????</>
  )}</td>
    <td className='membersList'>${post.amount}</td>
    <td className='membersList'><Moment format='YYYY/MM/DD'>{post.date}</Moment>    </td>
  
  </tr>
      </Fragment>
        ))}


</table>



 
   
 
{visibleAllRequest < allRequest.length && (
    <center> 
  <button   onClick={loadMoreRequests} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> ????????????  </button> 
       </center>
  )}



        </div>
        </center>





      <center> 
      <div className="affiliate-nav">
 
     <center> <div className="affiliateTitle" >?????????????? ???????????????? ???? ??????????:  </div>   </center>

   <table id="myTable">
  <tr>
    <th >?????? ??????????????</th>
    <th >??????????????</th>
    <th>??????????</th>
  </tr>

  
  {RefToPayResults
   .map(post => (
       <Fragment>
   {post.membership_class === 'bronze'&&(
  <tr className='bronze-text'>
    
  <td className='membersList'>
{post.membership_class === 'bronze'&&(<h1 className='bronze-text'> ??????????????</h1> )}
{post.membership_class === 'golden'&&(<h1 className='gold-text'> ??????????</h1> )}
{post.membership_class === 'silver'&&(<h1 className='silver-text'> ????????</h1> )}
{post.membership_class === 'special'&&(<> ????????</> )}
{post.membership_class === 'free'&&(<> ????????????</> )}
  </td>
    <td className='membersList'><Moment format='YYYY/MM/DD'>{post.membership_renewal_date}</Moment></td>
    <td className='membersList'>{post.first_name}  {post.last_name}   </td>
  </tr>
  )}

  



{post.membership_class === 'golden'&&(
  <tr className='gold-text'>
    
  <td className='membersList'>
{post.membership_class === 'bronze'&&(<h1 className='bronze-text'> ??????????????</h1> )}
{post.membership_class === 'golden'&&(<h1 className='gold-text'> ??????????</h1> )}
{post.membership_class === 'silver'&&(<h1 className='silver-text'> ????????</h1> )}
{post.membership_class === 'special'&&(<> ????????</> )}
{post.membership_class === 'free'&&(<> ????????????</> )}
  </td>
    <td className='membersList'><Moment format='YYYY/MM/DD'>{post.membership_renewal_date}</Moment></td>
    <td className='membersList'>{post.first_name}  {post.last_name}   </td>
  </tr>
  )}



{post.membership_class === 'silver'&&(
  <tr className='silver-text'>
    
  <td className='membersList'>
{post.membership_class === 'bronze'&&(<h1 className='bronze-text'> ??????????????</h1> )}
{post.membership_class === 'golden'&&(<h1 className='gold-text'> ??????????</h1> )}
{post.membership_class === 'silver'&&(<h1 className='silver-text'> ????????</h1> )}
{post.membership_class === 'special'&&(<> ????????</> )}
{post.membership_class === 'free'&&(<> ????????????</> )}
  </td>
    <td className='membersList'><Moment format='YYYY/MM/DD'>{post.membership_renewal_date}</Moment></td>
    <td className='membersList'>{post.first_name}  {post.last_name}   </td>
  </tr>
  )}

      </Fragment>
        ))}
<tr>
 
 <td>(${profit}) </td> 
 <td>???????????? ?????????????? </td>
 <td></td>
 </tr>

</table>



 
   

       {/* <div className='comments'>
        {user.profitRequests.map(p => (
          <p key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>   */}


  

{visible < RefToPay.length && (
    <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-0x"></i> ?????? ????????????  </button> 
       </center>
  )}



        </div>
        </center>

        </Fragment>
 ):(
<Spinner />
 )}
         
      
    
  {/* //////////////////////////////////////End of affiliate /////////////////////////////////// */}

{/*       
      {profile === null ? (
        <Fragment>
          <DashboardActions />
           
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus' /> Delete My Account
            </button>
          </div>
           
        </Fragment>
      ) : (
        <Fragment>
          <p></p>
          <div className="login-title">  ???? ?????? ???????????? ???????? ???????? ?????????? ?????? ?????????????????? </div>

          <center>
          <Link to='/create-profile' className="Dash-button">  <i className="fa fa-user-plus fa-2x"></i> ?????????? ????????  </Link>
        </center>
        
  
          
        </Fragment>
      )} */}


      </div>
      </div>
      </div>
    </Fragment>

  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
 