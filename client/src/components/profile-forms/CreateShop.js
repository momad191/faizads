import React, { Fragment, useEffect ,useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateShopEnglish from '../../components/profile-forms/CreateShopEnglish';
import CreateShopArabic from '../../components/profile-forms/CreateShopArabic';


const CreateShop = ({match,isAuthenticated}) => {
  const Lang = match.params.lang;



  // if (isAuthenticated) {
  //   return <Redirect to='/en/dashboard/main' />;
  // }

  return (
    <div>
      {Lang === 'ar' ?(
   <CreateShopArabic />
 
      ):(

<CreateShopEnglish />

      )}

      
    </div>
  )
}



CreateShop.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  addvisual: PropTypes.func.isRequired,
  
  isAuthenticated: PropTypes.bool
};
  
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
 
export default connect(
  mapStateToProps,
 null
)(CreateShop);

 
