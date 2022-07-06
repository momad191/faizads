import React, { Fragment, useEffect ,useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateShopEnglish from '../../components/profile-forms/CreateShopEnglish';
import CreateShopArabic from '../../components/profile-forms/CreateShopArabic';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
 
const CreateShop = ({match,isAuthenticated}) => {

  const [t, i18next] = useTranslation()
  const Lang = match.params.lang;

 
 
  

  return (
    <div>
      {i18next.language  === 'ar' &&(
      <> 
      <Navbar /> <CreateShopArabic />
      </>
      )}
      {i18next.language  === 'en' &&(
        <> 
       <NavbarEnglish /><CreateShopEnglish />
       </>
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

 
