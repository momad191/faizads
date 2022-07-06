import React from 'react'
import AdminPostsArabic from './AdminPostsArabic'
import AdminPostsEnglish from './AdminPostsEnglish'
export const AdminPosts = ({match}) => {
  const Lang = match.params.lang;
  return (
    <div> 
    {Lang === 'ar'?(
<AdminPostsArabic />
      ):(
<AdminPostsEnglish />

      )}
    </div>
  )
}
  
 
export default AdminPosts