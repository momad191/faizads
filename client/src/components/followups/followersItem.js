import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';
import moment from 'moment';
import 'moment/locale/ar';
  
  
const FollowersItem = ({
  shopID,
  follower: { _id,shop_username,target_shop_to_follow},
  auth,
  deleteFollower,
    
}) => (
  <div className="input-group form-group" style={{ borderRight:'5px solid #E01E5A',borderBottom:'5px solid #000',borderRadius:'3%'}}>
 
    <div>
      <p >{_id}</p>

      <p >{shop_username}</p>

      <p >{target_shop_to_follow}</p>
      
      
     
 
    </div>
    </div>
       
    

 

);

FollowersItem.propTypes = {
  shopID: PropTypes.string.isRequired,
  followers: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteFollower: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(FollowersItem);
