import React, { Fragment, useEffect ,useState } from 'react';
import EnglishDashboard from './EnglishDashboard';
import ArabicDashboard from './ArabicDashboard';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
 
  
export const Dashboard = ({match}) => {
  const [t, i18next] = useTranslation()
  const Lang = match.params.lang;
  return (
    <div>

  
{i18next.language === 'ar'&&(
     <Fragment> 
      
     <Navbar />
     <ArabicDashboard />
     </Fragment>
     )}

{i18next.language === 'en'&&(
     <Fragment>
     <NavbarEnglish />
     <EnglishDashboard />
     </Fragment>
     )}
      
    </div>
  )
}



export default Dashboard;