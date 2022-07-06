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
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';
    
 
const Country = ({loading , deleteCountry}) => {
    const [t, i18next] = useTranslation()
    const [user,setUser]= useState([])
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

      axios.get('/api/auth')
      .then(res => {
        setUser(res.data)
      }) 
      .catch((err) => {
        console.log(err);
      })


        axios.get('/api/countries')
        .then(res => {
          console.log(res);
          setCountries(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


      }, [getCountries]);


     const CountriesValid = (
       
    
     

        <div className="mainForm">
        <center>
      
      <div className="dash-title"> <i class="fa fa-globe" aria-hidden="true"></i>  {t('country_management_title')} </div>
      <Link to="/dashboard/main" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> {t('backButton')} </Link>
      <Link to="/dashboard/Addcountry" className="Action-button-plus-admin">  <i className="fa fa-plus fa-1x"></i> {t('addButton')} </Link>
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
    <div className="title-in-list" >
      {i18next.language === 'ar'&& country.country_AR_name}
      {i18next.language === 'en'&& country.country_EN_name}
       </div>
    </div>

  
    {country.country_image && (
    <img src={country.country_image} style={{ width: '120px', height:'80px',marginTop:'10px'}} />
    )}

     
      <div>
       <center> 
      <p class="list-details"><span className="redColor">{t('desc_title')}:</span>{country.country_description}||<span className="redColor">{t('code_title')}:</span>{country.country_code}</p>
       </center>
      <p class="list-button">
      <Link to={`/dashboard/addCity/${country._id}`}  style={{textDecoration:'none'}}>   <button  className="Action-button-status"> {t('addCity')}  <i class="fa fa-plus fa-1x"></i>  </button> </Link>
      <button className="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
      <Link to={`/dashboard/editCountry/${country._id}`}  style={{textDecoration:'none'}}>   <button  className="Action-button-status"> {t('editCountry')} <i class="fa fa-edit fa-1x"></i>    </button> </Link>

            <ConfirmButton
            dialog={["", "?Are you sure", "Confirm deletion"]}
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

      {user.validity === "super" || user.validity === "admin"  ?  CountriesValid : notValidPage}
      </div>
      </div>
      );
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
 