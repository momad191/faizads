import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
//import MarketItem from './MarketItem';
//import MarketForm from './PostForm';
import { deleteCountry } from '../../actions/country';
import ConfirmButton from "./ConfirmButton";
import axios from 'axios';
  
 
const Country = ({loading , deleteCountry}) => {
    const [getCountries,setCountries]= useState([])
    const [visible,setVisible]= useState(20)
    //const [search,setSearch]= useState('')

    const currentResults = getCountries.slice(0,visible);


    // const onChange = e =>
    // setSearch({ search: e.target.value });


    const loadMore = async e => {
        setVisible(visible+10)

    }
 

    useEffect(() => {
        axios.get('/api/countries')
        .then(res => {
          console.log(res);
          setCountries(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


      }, [getCountries]);


      return loading ? (
        <Spinner />
      ) : (
       
   
  
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">
 
      <center>
        <div className="dash-title"> <i class="fa fa-globe" aria-hidden="true"></i>  ادارة الدول </div>
      <Link to="/Addcountry" className="Action-button-plus">  <i className="fa fa-plus fa-1x"></i> اضافة </Link>
      </center>

 {currentResults
//filter(market=>{

//     return market.m_name.indexOf(search)>=0

//   })
 .map(country => (
     <Fragment>
     
        {/* <MarketItem key={market._id} market={market} /> */}
         
        <center>
    <div class="main-list" key={country._id}>

    <div className="title-in-list">
    <a className="title-in-list" href={country.country_code}>
    {country.country_AR_name}  </a>
    </div>

 
    {country.country_image && (
    <img src={country.country_image} style={{ width: '120px', height:'80px',marginTop:'10px'}} />
    )}

     
      <div>
    
      <p class="list-details"> <span className="redColor">الوصف:</span>{country.country_description}
      
      <span className="redColor">رمز الدولة:</span>{country.country_code}
       </p>
      
      <p class="list-button">
      <Link to={`/addCity/${country._id}`}  style={{textDecoration:'none'}}>   <button  className="Action-button-status">  <i class="fa fa-plus fa-1x"></i>اضافة مدينة   </button> </Link>
      <button className="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
      <Link to={`/editCountry/${country._id}`}  style={{textDecoration:'none'}}>   <button  className="Action-button-status">  <i class="fa fa-edit fa-1x"></i>  تعديل الدولة  </button> </Link>

            <ConfirmButton
            dialog={["", "هل انت متأكد ؟", "تأكيد الحذف"]}
            action={() => deleteCountry(country._id)}
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
      ))}




  {/* onClick={() => loadMore()} */}
  {visible < getCountries.length && (
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
 


Country.propTypes = {
    //getMarkets: PropTypes.func.isRequired,
    //market: PropTypes.object.isRequired,
    deleteCountry: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = state => ({
    country: state.market
  });
  
  export default connect(
    mapStateToProps,
    {deleteCountry}
  )(Country);
 