import React from 'react'
import HomeArabic from './homeArabic';
import HomeEnglish from './homeEnglish';
import { useTranslation } from 'react-i18next';


const Home = ({match}) => {
  const [t, i18next] = useTranslation()
  const Lang = match.params.lang;
  return (  
    <div>
      
{i18next.language === 'ar'&&(
      <HomeArabic />
     )}

{i18next.language === 'en'&&(
     <HomeEnglish />
     )}
 
 
   

    </div>
  )
}
  
export default Home
