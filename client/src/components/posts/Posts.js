import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PostsArabic from './PostsArabic'
import PostsEnglish from './PostsEnglish'
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
 
export const Posts = ({match}) => {
  const Lang = match.params.lang;
  const [t, i18next] = useTranslation()
  return (
<div> 
  

{i18next.language === 'ar'&&( <Fragment>  <Navbar /> <PostsArabic /> </Fragment>)}


{i18next.language === 'en'&&( <Fragment> <NavbarEnglish /> <PostsEnglish /> </Fragment> )}


</div>

  )
}
  
  
export default Posts