import React from 'react'

import HomeArabic from './homeArabic';
import HomeEnglish from './homeEnglish';

const home = ({match}) => {
  const Lang = match.params.lang;
  return (
    <div>
      
      {Lang === 'ar'?(
<HomeArabic />
      ):(
<HomeEnglish />

      )}

    </div>
  )
}
  
export default home
