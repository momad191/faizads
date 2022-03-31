import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
//import MarketItem from './MarketItem';
//import MarketForm from './PostForm';
import { deleteMarket } from '../../actions/market';
import ConfirmButton from "./ConfirmButton";
import axios from 'axios';
  
 
const Markets = ({loading , deleteMarket}) => {
    const [getMarkets,setMarkets]= useState([])
    const [visible,setVisible]= useState(20)
    //const [search,setSearch]= useState('')

    const currentResults = getMarkets.slice(0,visible);


    // const onChange = e =>
    // setSearch({ search: e.target.value });


    const loadMore = async e => {
        setVisible(visible+10)

    }


    useEffect(() => {
        axios.get('/api/markets')
        .then(res => {
          console.log(res);
          setMarkets(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


      }, [getMarkets]);


      return loading ? (
        <Spinner />
      ) : (
       
    
  
        <div className="aqle3-main">
        <div className="mainword2">
          <Navbar />
        <div className="mainForm">
  
      <center>
        <div className="dash-title"> الأسواق </div>
        <Link to="/ar/dashboard/main" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> رجوع </Link>
      <Link to="/ar/dashboard/Addmarket" className="Action-button-plus-admin">  <i className="fa fa-plus fa-1x"></i> اضافة </Link>

      </center>
  
 {getMarkets.length <1?(
<Spinner />
 ):(
 
 currentResults
//filter(market=>{

//     return market.m_name.indexOf(search)>=0

//   })
 .map(market => (
     <Fragment>
     
        {/* <MarketItem key={market._id} market={market} /> */}
         
        <center>
    <div class="dash-list" key={market._id}>

  

    <div className="title-in-list">
    <a className="title-in-list" href={market.m_code}>
    {market.m_AR_name}  </a>
   
    <i className={market.m_fontawesome_class} aria-hidden="true"></i>
    </div>
 

    {market.m_image && (
    <img src={market.m_image} style={{ width: '120px', height:'80px',marginBottom:''}} />
    )}

     
      <div>
      <p class="list-details"> <span className="redColor">الوصف:</span>{market.m_description} </p>
      <p class="list-button">
      <button className="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
      <Link to={`/dashboard/editMarket/${market._id}`}  style={{textDecoration:'none'}}>   <button  className="Action-button-status">  <i class="fa fa-edit fa-1x"></i>   </button> </Link>

            <ConfirmButton
            dialog={["", "هل انت متأكد ؟", "تأكيد الحذف"]}
            action={() => deleteMarket(market._id)}
              />

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
  {visible < getMarkets.length && (
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
 


Markets.propTypes = {
    //getMarkets: PropTypes.func.isRequired,
    //market: PropTypes.object.isRequired,
    deleteMarket: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = state => ({
    market: state.market
  });
  
  export default connect(
    mapStateToProps,
    {deleteMarket}
  )(Markets);
