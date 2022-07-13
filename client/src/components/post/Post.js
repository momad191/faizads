import React, { Fragment, useEffect ,useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';   
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';
import { getPost } from '../../actions/post';

import { logout } from '../../actions/auth';
   
const Post = ({  auth, auth: { isAuthenticated, user }, getPost, post: { post, loading }, match }) => {
 

  useEffect(() => {
    getPost(match.params.id);
   }, [getPost]);


 

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>

   
  

 
      <PostItem post={post} match={match} showActions={false} />
 
            
      {isAuthenticated ?(
        <Fragment>
      <CommentForm postId={post._id} />

      <center> 
      <div className=''>
        {post.comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div> 
      </center> 


      </Fragment>
      ):(
        <Fragment>
        <center> <h1>dddd</h1></center> 
        </Fragment>
      )}
      

     
 

 
      
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
 
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPost,logout }
)(Post);
