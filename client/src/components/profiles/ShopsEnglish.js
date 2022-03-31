import React, { Fragment ,useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import NavbarEnglish from '../layout/NavbarEnglish';
import noimg from './noimg.jpg';

import { getRating } from '../../actions/rating';
import { addClick } from '../../actions/shop';

const formatter = new Intl.NumberFormat('en',{
 
  style:'decimal',
  // signDisplay:'always',
  useGrouping:true,
  notation:'compact'

});

   
const ShopsEnglish = ({loading,addClick}) => {

  const [shops,setShops]= useState([])
  const [visible,setVisible]= useState(18)
  const currentResults = shops.slice(0,visible);

  const loadMore = async e => {
  setVisible(visible+18)
} 
 
useEffect(() => {

  axios.get('/api/shops')
    .then(res => {
      setShops(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


}, []);

  return  ( 
      <Fragment> 
    <NavbarEnglish />
    <div className="aqle3-main">
    <div className="mainword2">

     
 <div style={{width:'99%',marginLeft:'1%'}}>

 <div className="dash-title"> Shops </div>

 

 {shops.length < 1 ?(
  <Fragment>
    <Spinner/>
  </Fragment>

):(
currentResults.map(shop => ( 
  <div className="card">

{shop.shop_img ?(
  <Link onClick={() => addClick(shop._id)} to={`/ar/shops/${shop.username}`}>  <img src={shop.shop_img} /> </Link>

  ):(
 <Link onClick={() => addClick(shop._id)} to={`/ar/shops/${shop.username}`}>   <img src={noimg} /> </Link>

  )}

<h1>{shop.shop_name}</h1>
<p className='descrip-shop'>{shop.shop_description}</p>
<Link onClick={() => addClick(shop._id)} to={`/ar/shops/${shop.username}`}> 
<button className='profileButtons'>    
{formatter.format(shop.clicks.length) } 
 {'  '}
 <i class="fa fa-eye fa-0x" aria-hidden="true"></i> 
 </button> </Link>
</div> 

)
))}



   
{visible < shops.length && (
    <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> More  </button> 
       </center>
  )}
       
    </div>
    

    </div>
    </div>
    </Fragment>
  )
}
 


ShopsEnglish.propTypes = {
  getRating: PropTypes.func.isRequired,
  addClick: PropTypes.func.isRequired,

  
};


export default connect(
  null,
  { getRating,addClick }
)(ShopsEnglish);


 
