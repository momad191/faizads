import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import Spinner from '../layout/Spinner';
import FollowUpForm from '../followups/FollowUpForm2';
import { deleteFollowup } from '../../actions/followup';



const Following = ({match,loading,
}) => {

    const [user,setUser]= useState([])
    const [userShop,setuserShop]= useState([])

    const [shopInfo,setShopInfo]= useState([])

     
 
    const [Display,setDisplay]= useState('FollowButtons')
    const [IfUserFollow,setIfUserFollow]= useState([])
    const [UserFollowing,setUserFollowing]= useState([])
    const [UserFollowers,setUserFollowers]= useState([])
 
    const [visible,setVisible]= useState(10)
    const currentResults = UserFollowing.slice(0,visible);
    const loadMore = async e => {
      setVisible(visible+10)
    } 


    const hideButton = async e => {
      setDisplay('UNFollowButtons')
    }
 
    const showButton = async e => {
      setDisplay('FollowButtons')
    }


    const checkiffollowerornot = (username) => {
     
      axios.get('/api/followups/doyoufollow/'+username)
      .then(res => {
        setIfUserFollow(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

    }


    useEffect(() => {
  

        // axios.get('/api/followups/doyoufollow/'+match.params.username)
        // .then(res => {
        //   setIfUserFollow(res.data)
        // })
        // .catch((err) => {
        //   console.log(err);
        // })


        axios.get('/api/followups/userfollowing/'+match.params.username)
        .then(res => {
          setUserFollowing(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


        axios.get('/api/followups/userfollowers/'+match.params.username)
        .then(res => {
          setUserFollowers(res.data)
        })
        .catch((err) => {
          console.log(err);
        })

 
     


        axios.get('/api/shops/'+match.params.username)
        .then(res => {
          console.log(res);
          setuserShop(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


        axios.get('/api/shops/shopinfo/'+match.params.username)
        .then(res => {
          console.log(res);
          setShopInfo(res.data)
          
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

    }, [UserFollowing]);

    return    (
     
       
<Fragment> 
<Navbar />
<center> 
<div className='posts-shop-frame'>
 

<div className='followUp-frame'> 
<Link to={`/shops/${match.params.username}`}> <button className="toBackAccount" >    
<i class="fa fa-arrow-left fa-1x" aria-hidden="true"></i>  @ {match.params.username} / {shopInfo.shop_name}
  </button> </Link>
 </div>

<div className='followUp-frame'> 
<Link to={`/shops/${match.params.username}/following`}> <button className="toFollowUpBtnON" >  ({UserFollowing.length})    يتابع  </button> </Link>
<Link to={`/shops/${match.params.username}/followers`}> <button className="toFollowUpBtn">   ({UserFollowers.length})   المتابِعين  </button> </Link>
</div>

  


 {UserFollowing.length <= 0 ?(
  <h1> ... </h1>
 ):(
  <Fragment>

            
{UserFollowing.length > 0  &&(


  <Fragment>
 

<center> 
<div > 

{currentResults
  
 .map(shop => ( 
 

  <Link  to={`/shops/${shop.following_shop.username}`} className="shoplist bg-light" key={shop.following_shop._id}>
 
  <img
    className="round-img"
    src={shop.following_shop.shop_logo_img}
    alt=""
  />
  <div className='shoplistinfo1'>
  <Link to={`/shops/${shop.following_shop.username}`}> <h1> {shop.following_shop.shop_name} </h1> </Link>
    <h2> @{shop.following_shop.username}</h2>
  </div>


  <div className='shoplistinfo3'>
  {shop.following_shop.shop_description}
  </div>



  {/* //////////////////////////////////////المتابعة////////////////////////////////// */}
  <div className='shoplistinfo2'>

  {userShop ?(
     <Fragment>

   {user.username === shop.following_shop.username ?(
     <Fragment>
    <a href="/ar/dashboard/shops/edit"> 
    <button className="Action-button-followup"> 
    تعديل 
    </button>
    </a>
    </Fragment>
   ):(
    <Fragment>
    <Link to={`/ar/shops/${shop.following_shop.username}`}> 
    <button className="Action-button-followup"> 
    زيارة المتجر 
    </button>
     </Link>
     </Fragment>
   )}


  </Fragment>
   ):(
    <a href='/ar/dashboard/create-shop'> <button className="Action-button-plus">  فتح متجر  </button>  </a>

    )}

    
  </div>

{/* ///////////////////////////////////////نهاية المتابعة//////////////////////////////////////// */}



 
</Link> 
 
 ))} 



{visible < UserFollowing.length && (
  <center> 
  <button   onClick={loadMore} 
  className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد  </button> 
   </center>
  )}
 


 </div>
 </center>
 </Fragment>
)}


</Fragment>
  )} 
  </div>
  </center>
  </Fragment>


      
    )
}

export default Following
