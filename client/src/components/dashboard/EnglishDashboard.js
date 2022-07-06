import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActionsEnglish from './DashboardActionsEnglish';
import { getCurrentShop } from '../../actions/shop';
import RequestForm from '../requests/RequestForm';
import moment from 'moment';
import Moment from 'react-moment';  
// import 'moment/locale/ar';

import NavbarEnglish from '../../components/layout/NavbarEnglish';
const EnglishDashboard = ({
  getCurrentShop,
  deleteAccount,
  loading,
 

  // auth: { user },
  // profile: { profile, loading }
}) => {

  moment.locale('en');

  // const [oneShop,setOneShop]= useState([])
  const [userShop,setuserShop]= useState([])

  const [subscription,setSubscription]= useState([])
  const [user,setUser]= useState([])
  const [userPosts,setUserPosts]= useState([])
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

 
      {/* <NavbarEnglish /> */}
   


      <div className="aqle3-main" >
      <div className="mainword2">
      <div className="mainForm">
 
 
<div className="login-title"></div>
{moment(subscription.membership_renewal_expiry_date).isBefore(Date.now()) ?(
   <Fragment>
  
 <center> 
 
   <Link to='/membership/prices' className="Dash-button-end-subscription">
   Start Choosing Your Plan
</Link>
 
   </center>
 </Fragment>
):( 
  <Fragment>
{subscription.membership_class === 'golden' &&(
  <Fragment>
<center>
      <Link className="Dash-button-gold ">  {subscription.user.first_name}  { subscription.user.last_name} </Link>
      <Link className="Dash-button-gold ">  <i className="fa fa-user fa-0x"></i> Gold Membership  </Link>
      <Link className="Dash-button-gold">  expires on : <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment>    </Link>

</center>
</Fragment>
)} 




{subscription.membership_class === 'silver' &&(
  <Fragment>
<center>
      <Link className="Dash-button-silver">  {subscription.user.first_name}  { subscription.user.last_name}   </Link>
      <Link className="Dash-button-silver">  <i className="fa fa-user fa-0x"></i> Silver Membership  </Link>
      <Link className="Dash-button-silver">  expires on: <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment> </Link>

</center>
</Fragment>
)}


 


{subscription.membership_class === 'bronze' &&(
  <Fragment>
<center>
      <Link className="Dash-button-bronze">  {subscription.user.first_name}  { subscription.user.last_name}  </Link>
      <Link className="Dash-button-bronze">  <i className="fa fa-user fa-0x"></i> Bronze Membership  </Link>
      <Link className="Dash-button-bronze">  expires on : <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment>    </Link>

</center>
</Fragment>
)}



{subscription.membership_class === 'special' &&(
  <Fragment>
<center>

      <Link className="Dash-button-special">  {subscription.user.first_name}  { subscription.user.last_name}   </Link>
      <Link className="Dash-button-special">  <i className="fa fa-user fa-0x"></i> Special membership  </Link>
      <Link className="Dash-button-special"> expires on:  <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment> </Link>

</center>
</Fragment>
)}



{subscription.membership_class === 'free' &&(
  <Fragment>
<center>
 
      <Link className="Dash-button-special ">  {subscription.user.first_name}  { subscription.user.last_name}  </Link>
      <Link className="Dash-button-special ">  <i className="fa fa-user fa-0x"></i> Free Membership  </Link>
      <Link className="Dash-button-special">  expires on: <Moment format='YYYY/MM/DD'>{subscription.membership_renewal_expiry_date}</Moment>  </Link>

</center>
</Fragment>
)} 

 
 
{subscription.membership_class === '' &&(
  <Fragment>
<center>

       <Link className="Dash-button-special "> welcome {user.first_name}  { user.last_name}  </Link>
       <Link to='/prices' className="Dash-button-special ">  <i className="fa fa-rocket fa-0x"></i> Choose Your Plan Now To Get Started  </Link>
</center>
</Fragment>
)} 


</Fragment>
 
)}
    
  
     <center> 

  {userShop ?(
<Fragment> 
<Link to='/en/dashboard/shops/edit' > <button className="Dash-button-open">  Manage your shop   </button>  </Link>
<Link to={`/shops/${user.username}`} target="_blank" > <button className="Dash-button"> <i class="fa fa-external-link-square fa-0x" aria-hidden="true"></i> preview   </button>  </Link>
</Fragment>
  ):(
  <Link to='/dashboard/create-shop'> <button className="Dash-button">  open new shop  </button>  </Link>
 )}



 
      <div className="info-nav">
      <div className="DashBoxTitle" >Statistics </div>
      <center>
      {/* <div className="Dash-button">  <i class="fa fa-buysellads fa-2x" aria-hidden="true"></i>  ads assigned to this subscription:({subscription.available_ads})     </div> */}
      <div className="Dash-button">  <i class="fa fa-bullhorn fa-2x" aria-hidden="true"></i>  Effective Ads:({userPosts.length})   </div>
      {/* <div className="Dash-button">  <i class="fa fa-buysellads fa-2x" aria-hidden="true"></i>  Your remaining ad balance:({subscription.available_ads - userPosts.length })   </div> */}
      <div className="Dash-button">  <i class="fa fa-users fa-2x" aria-hidden="true"></i>  Referral Membership Number:({userRef.length})  </div>
      </center>

       </div>
      </center>




   
  
 


   
      {user.username ?(

      <DashboardActionsEnglish />
      ):(
          <Spinner />
      )}
 

 {/* //////////////////////////////////////start of affiliate /////////////////////////////////// */}
 {user.username ?(
 
 <Fragment>

      <center> 
      <div className="affiliate-nav">
      <div className="affiliateTitle" >Affiliate Marketing  </div>

<table>
  <tr>
  <th> Your link   </th>
   <th>       <i class="fa fa-link fa-1x" aria-hidden="true"></i>   {'   '}
     {user.username ?(<>
       <a href={`http://localhost:3000/user/createAccount/${user.username}`}> 
      {`http://localhost:3000/user/createAccount/${user.username}`}
         </a> </> ):(<>loading ...</> )}  {'   '}
       <i class="fa fa-link fa-1x" aria-hidden="true"></i> 
       </th>
  </tr>

<tr>

<th>
  Paid membership for you 
  </th>
<th>
   ({RefToPay.length})
  </th>
</tr>

 
 
<tr>

<th>
  Your current earnings 
  </th>
<th>
  
    (${profit})
   {' '}
   {profit >= 12 &&
   <RequestForm userId={user._id} amout11={profit} />
   } 

  </th>
 
</tr>
  

<tr>
<th>
  ( The last amount requested is pending transfer )
  </th>
<th>
  ( ${lastrequest.amount} ) 
  
  </th>

</tr>
 


 
<tr>
<th>
 ( Requests are currently on queue )
  </th>
<th>
   {CheckInRequest.length}
  </th>

</tr>


<tr>
<th>
  Requests that have been paid to you     
  </th>
<th>
   {ProfitCompleteRequest.length}
  </th>
</tr>


<tr>
<th>
  Total earnings transferred to your account     
  </th>
<th>
   (${totalpaidamounts})
  </th>
</tr>



 







  
</table>
        
   

       </div>
      </center>




      <center> 
      <div className="affiliate-nav">
 
     <center> <div className="affiliateTitle" >  List of your earnings requests   </div>   </center>

   <table id="myTable">
  <tr>
    <th>Date </th>
    <th >The amount</th>
    <th >Status</th>
  </tr>
 
  
  {allRequestResults
   .map(post => (
       <Fragment>
  <tr key={post._id}>
  <td className='membersList'><Moment format='YYYY/MM/DD'>{post.date}</Moment>    </td>
  <td className='membersList'>${post.amount}</td>
  <td className='membersList'>{post.status ==='check-in'?(
   <>processing</>
  ):(
    <> complete</>
  )}</td>
  
  </tr>
      </Fragment>
        ))}


</table>



 
   
 
{visibleAllRequest < allRequest.length && (
    <center> 
  <button   onClick={loadMoreRequests} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> More  </button> 
       </center>
  )}



        </div>
        </center>





      <center> 
      <div className="affiliate-nav">
 
     <center> <div className="affiliateTitle" >Paid membership for you  </div>   </center>

   <table id="myTable">
  <tr>
  <th>The name</th>
  <th >Date</th>
  <th >Membership type</th>
  
   
  </tr>

  
  {RefToPayResults
   .map(post => (
       <Fragment>
   {post.membership_class === 'bronze'&&(
  <tr className='bronze-text'>
 <td className='membersList'>{post.first_name}  {post.last_name}   </td>
 <td className='membersList'><Moment format='YYYY/MM/DD'>{post.membership_renewal_date}</Moment></td>
  <td className='membersList'>
{post.membership_class === 'bronze'&&(<h1 className='bronze-text'> Bronze</h1> )}
{post.membership_class === 'golden'&&(<h1 className='gold-text'> Golden</h1> )}
{post.membership_class === 'silver'&&(<h1 className='silver-text'> Silver</h1> )}
{post.membership_class === 'special'&&(<> Special</> )}
{post.membership_class === 'free'&&(<> Free</> )}
  </td>
  </tr>
  )}





{post.membership_class === 'golden'&&(
  <tr className='gold-text'>
 <td className='membersList'>{post.first_name}  {post.last_name}   </td>
 <td className='membersList'><Moment format='YYYY/MM/DD'>{post.membership_renewal_date}</Moment></td>
  <td className='membersList'>
{post.membership_class === 'bronze'&&(<h1 className='bronze-text'> Bronze</h1> )}
{post.membership_class === 'golden'&&(<h1 className='gold-text'> Golden</h1> )}
{post.membership_class === 'silver'&&(<h1 className='silver-text'> Silver</h1> )}
{post.membership_class === 'special'&&(<> Special</> )}
{post.membership_class === 'free'&&(<> Free</> )}
  </td>
  </tr>
  )}



{post.membership_class === 'silver'&&(
  <tr className='silver-text'>
 <td className='membersList'>{post.first_name}  {post.last_name}   </td>
 <td className='membersList'><Moment format='YYYY/MM/DD'>{post.membership_renewal_date}</Moment></td>
  <td className='membersList'>
{post.membership_class === 'bronze'&&(<h1 className='bronze-text'> Bronze</h1> )}
{post.membership_class === 'golden'&&(<h1 className='gold-text'> Golden</h1> )}
{post.membership_class === 'silver'&&(<h1 className='silver-text'> Silver</h1> )}
{post.membership_class === 'special'&&(<> Special</> )}
{post.membership_class === 'free'&&(<> Free</> )}
  </td>
  </tr>
  )}

      </Fragment>
        ))}
<tr>
 
<td></td>
 <td>Your current earnings </td>
 <td>(${profit}) </td> 
 
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
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-0x"></i>  More  </button> 
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
          <div className="login-title">  لم تقم باعداد ملفك يرجى اضافة بعض المعلومات </div>

          <center>
          <Link to='/create-profile' className="Dash-button">  <i className="fa fa-user-plus fa-2x"></i> انشيء ملفك  </Link>
        </center>
        
  
          
        </Fragment>
      )} */}


      </div>
      </div>
      </div>
    </Fragment>

  );
};

EnglishDashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getCurrentShop: PropTypes.func.isRequired,

  // deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  shop: PropTypes.object.isRequired
};
 
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  shop: state.shop
});
 
export default connect(
  mapStateToProps,
  { getCurrentShop }
)(EnglishDashboard);
