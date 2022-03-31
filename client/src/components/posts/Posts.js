import React from 'react'
import PostsArabic from './PostsArabic'
import PostsEnglish from './PostsEnglish'
export const Posts = ({match}) => {
  const Lang = match.params.lang;
  return (
    <div>
    {Lang === 'ar'?(
<PostsArabic />
      ):(
<PostsEnglish />

      )}
    </div>
  )
}
 
 
export default Posts