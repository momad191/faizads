import React, { Fragment ,useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import greenFace from './greenFace.png';
import noimg from './noimg.jpg';
 
import { getRating } from '../../actions/rating';
import { addClick } from '../../actions/shop';

 

const formatter = new Intl.NumberFormat('en',{
 
  style:'decimal',
  // signDisplay:'always',
  useGrouping:true,
  notation:'compact'

});

 

    
export const ShopsArabic = ({loading,match ,addClick}) => {



  
  const [shops,setShops]= useState([])
  const [visible,setVisible]= useState(18)
  const currentResults = shops.slice(0,visible);

  const loadMore = async e => {
  setVisible(visible+18)
} 

 
const [larg,setLarg]= useState('displayI')
const [list,setList]= useState('noneDisplayI')

const [showStyleLarge,setshowStyleLarge]= useState('showStyleSelected')
const [showStyleList,setshowStyList]= useState('showStyle')


// const [description,setDescription]= useState('noneDisplayI')
// const showDescription = async e => { 
//   setDescription('displayI')
 
// };
// const hideDescription = async e => { 
//   setDescription('noneDisplayI')
// };

  const showLarg = async e => { 
    setLarg('displayI')
    setList('noneDisplayI')
    setshowStyleLarge('showStyleSelected')
    setshowStyList('showStyle')
  };
 
  const showList = async e => {
    setList('displayI')
    setLarg('noneDisplayI')
    
    setshowStyList('showStyleSelected')
    setshowStyleLarge('showStyle')
  };


 
useEffect(() => {
 
  axios.get('/api/shops')
    .then(res => {
      setShops(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

 

 
 

}, []);

  return (
      <Fragment> 
    <Navbar />
    <div className="aqle3-main">
    <div className="mainword2">

      
 <div style={{width:'99%',marginLeft:'1%'}}>

 <div className="dash-title"> المتاجر </div>

<center> 
 <div style={{width:'100%'}}> 
 <button  onClick={showLarg} className={showStyleLarge}> <i class="fa fa-th-large fa-1x" aria-hidden="true"></i> </button>
 <button  onClick={showList} className={showStyleList}> <i class="fa fa-th-list fa-1x" aria-hidden="true"></i> </button>
 </div>
 </center>


{/* //////////////////////////////////////////////العرض الكبير//////////////////////////////////////////// */}

 {larg === 'displayI'&&(
   <Fragment>

 

{shops.length < 1 ?(
  <Fragment>
    <Spinner/>
  </Fragment>

):(
    
  currentResults.map(shop => ( 
    <Fragment> 
 
  <div className="card">
  {shop.shop_img ?(
  <Link onClick={() => addClick(shop._id)} to={`/shops/${shop.user.username}`}>  <img src={shop.shop_img} /> </Link>

  ):(
 <Link onClick={() => addClick(shop._id)} to={`/shops/${shop.user.username}`}>   <img src={noimg} /> </Link>

  )}
 
<h1>{shop.shop_name}</h1>

 <div ><p className='descrip-shop'>{shop.shop_description}</p></div>

<Link onClick={() => addClick(shop._id)} to={`/shops/${shop.user.username}`}    >
  <button className='profileButtons'> 
 {formatter.format(shop.clicks.length) } 
 {'  '}
 <i class="fa fa-eye fa-0x" aria-hidden="true"></i> 
</button> </Link>
</div> 
 
 </Fragment> 

)
))}
    
 

   
{visible < shops.length && (
    <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد  </button> 
       </center>
  )}

</Fragment>
    )}


{/* //////////////////////////////////////////////نهاية العرض الكبير //////////////////////////////////////////// */}


{/* //////////////////////////////////////////////العرض القوائم //////////////////////////////////////////// */}

{list === 'displayI'&&(
   <Fragment>

 

{shops.length < 1 ?(
  <Fragment>
    <Spinner/>
  </Fragment>

):(
 
  currentResults.map(shop => ( 
    <Fragment> 
     
     <center> 
  <div style={{width:'80%'}} className="main-list">

  <div className='title-in-list'>
  <Link onClick={() => addClick(shop._id)} className='title-in-list'  target="_blank" to={`/shops/${shop.user.username}`} >    
  {shop.shop_name} 
      </Link>


    </div>
 

    <div className='section-list'> 

  {shop.shop_img ?(
  <Link onClick={() => addClick(shop._id)} to={`/shops/${shop.user.username}`}>  <img className='image-in-list' src={shop.shop_img}   /> </Link>

  ):(
 <Link onClick={() => addClick(shop._id)} to={`/shops/${shop.user.username}`}>   <img className='image-in-list' src={noimg}   /> </Link>

  )}

<div className="list-details" style={{marginTop:'20px'}}> 
 
<h1 className="list-details"> {shop.shop_description}   </h1>  </div>

{/* <p className='descrip-shop' > </p> */}


</div>

 

<div className='section-list'> 
<Link onClick={() => addClick(shop._id)} to={`/shops/${shop.user.username}`}    >
  <button className='Action-button-status'  style={{width:'',marginBottom:'10px'}} > 
  <i class="fa fa-eye fa-0x" aria-hidden="true"></i> 
  {'  '}
 {formatter.format(shop.clicks.length) } 
</button> </Link>

 

<Link onClick={() => addClick(shop._id)} to={`/shops/${shop.user.username}`}    >
  <button className='Action-button-status'  style={{width:'',marginBottom:'10px'}} > 
  {shop.shop_name} 
</button> </Link>


{shop.shop_website &&(
<a target="_blank"  href={shop.shop_website} >
  <button className='Action-button-status'  style={{width:'',marginBottom:'10px'}} > 
الموقع الالكتروني
</button> </a>
)}

</div>
  
</div> 
</center>
 </Fragment> 
)
))}
   
 

   
{visible < shops.length && (
    <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد  </button> 
       </center>
  )}

</Fragment>
    )}

{/* ////////////////////////////////////////////نهاية عرض القوائم///////////////////////////////////////////////// */}




    </div>
  

    </div>
    </div>
    </Fragment>
  )
}



 
ShopsArabic.propTypes = {
  getRating: PropTypes.func.isRequired,
  addClick: PropTypes.func.isRequired,

  
};


export default connect(
  null,
  { getRating,addClick }
)(ShopsArabic);

 
 
