import React, { Fragment, useEffect ,useState } from 'react';

  
import ShopsArabic from './ShopsArabic';
import ShopsEnglish from './ShopsEnglish';
const Shops = ({match}) => {
  const Lang = match.params.lang;
   
  return ( 

    <Fragment>
    {Lang === 'ar'?(
   <ShopsArabic />
 ):(
 <ShopsEnglish />
 )}
    </Fragment>
  )
}
 
export default Shops
