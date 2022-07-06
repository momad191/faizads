import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
//import MarketItem from './MarketItem';
//import MarketForm from './PostForm';
import { deleteMarket } from '../../actions/market';
import ConfirmButton from "./ConfirmButton";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
   
  
const Markets = ({loading , deleteMarket}) => {
    const [t, i18next] = useTranslation()
    const [user,setUser]= useState([])
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

      axios.get('/api/auth')
      .then(res => {
        setUser(res.data)
      }) 
      .catch((err) => {
        console.log(err);
      })


        axios.get('/api/markets')
        .then(res => {
          console.log(res);
          setMarkets(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


      }, [getMarkets, user]);


      const MarketsValid = (
       
    
   

        <div className="mainForm"> 
  
      <center>
        <div className="dash-title"> {t('market_management_title')} </div>
        <Link to="/dashboard/main" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> {t('backButton')} </Link>
      <Link to="/dashboard/Addmarket" className="Action-button-plus-admin">  <i className="fa fa-plus fa-1x"></i> {t('addButton')} </Link>

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
    <div className="title-in-list" >
    {i18next.language === 'ar'&& market.m_AR_name}
    {i18next.language === 'en'&& market.m_EN_name} {' '}
    <i className={market.m_fontawesome_class} aria-hidden="true"></i>
     </div>
   
   
    </div>
 

    {market.m_image && (
    <img src={market.m_image} style={{ width: '120px', height:'80px',marginBottom:''}} />
    )}

      
      <div>
      <p class="list-details">  <span className="redColor"> {t('desc_title')}:</span>{market.m_description}  </p>
      <p class="list-button">
      <button className="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
      <Link to={`/dashboard/editMarket/${market._id}`}  style={{textDecoration:'none'}}>   <button  className="Action-button-status">  <i class="fa fa-edit fa-1x"></i>   </button> </Link>

            <ConfirmButton
            dialog={["", "?are you sure ", "Confirm deletion"]}
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

      {user.validity === "super" || user.validity === "admin"  ?  MarketsValid : notValidPage}
      </div>
      </div>
      );
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
