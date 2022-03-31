import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import Moment from 'react-moment';
import { connect } from 'react-redux';
//import { addLike, removeLike, deletePost } from '../../actions/post';
 
const MarketItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  market: { _id, m_AR_name,m_EN_name, m_code, m_description, m_image , user, date },
  showActions
}) => (
    <div class="main-list">
    <div colspan="2">
    <a class="list-title" href="#">
    {m_AR_name}  </a>
    </div>
    
      <div>
      <p class="list-details"><span className="redColor">Category:</span>Electonics | <span className="redColor">Description:</span>asd s;ldksm sdsdlkmsd  lkmsd </p>
      <p class="list-button">
      <button class="Action-button-update">  <i class="fa fa-database fa-1x"></i> Update </button> 
      <button class="Action-button-open">  <i class="fa fa-eye fa-1x"></i>  </button> 
      <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button>
      </p>
      </div> 
  </div>
);

MarketItem.defaultProps = {
  showActions: true
};

MarketItem.propTypes = {
  market: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  //addLike: PropTypes.func.isRequired,
  //removeLike: PropTypes.func.isRequired,
  //deletePost: PropTypes.func.isRequired,
  //showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
 null
)(MarketItem);
