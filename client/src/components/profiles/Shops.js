import React, { Fragment, useEffect ,useState } from 'react';
import { useTranslation } from 'react-i18next';
  
import ShopsArabic from './ShopsArabic';
import ShopsEnglish from './ShopsEnglish';
const Shops = ({match}) => {
  const Lang = match.params.lang;
  const [t, i18next] = useTranslation()
  return ( 
 
    <Fragment>
    {Lang === 'ar' || i18next.language === 'ar' ?(
   <ShopsArabic />
 ):(
 <ShopsEnglish />
 )}
    </Fragment>
  )
}
 
export default Shops
