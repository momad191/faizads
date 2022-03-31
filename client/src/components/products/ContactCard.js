import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from "react-router-dom";
import ConfirmButton from "../posts/ConfirmButton";
import { addLike, removeLike, deletePost } from '../../actions/post';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ContactCard = (props) => {
  const { _id, name, title,image,CategoryName,short,user,auth,date,likes,loading } = props.contact;
  return (







    
    <div className="main-list" >
    <div colspan="2">
    <Link  className="list-title" to={`/editPost/${_id}`} style={{textDecoration:'none'}} >    
    {title}  </Link>
    </div>
     
      <div>
      {image && (
      <Link to={`/editPost/${_id}`} style={{color:'#fff',textDecoration:'none'}} > <img src={image} style={{ width: '150px', height:'100px',marginBottom:''}} /></Link>
      )}
      <p className="list-details"> <span className="redColor">user :</span>{name} | <span className="redColor">Category :</span>{CategoryName} | <span className="redColor">Description :</span>{short} </p>
      <p className="list-button">

      
      <button className="Action-button-open">  <i class="fa fa-eye fa-1x"></i>  </button> 



<Fragment> 
<button  className="Action-button-update"><Link to={`/editPost/${_id}`} style={{color:'#fff',textDecoration:'none'}} >   <i class="fa fa-database fa-1x"></i> Update </Link> </button> 

            <ConfirmButton
            dialog={["", "Are You Sure?", "Once more to delete"]}
            action={() => deletePost(_id)}
              />
  </Fragment>


      {/* <button
      onClick={() => deleteMarket(market._id)}
      class="Action-button-delete">  <i class="fa fa-close fa-1x"></i> 
       </button> */}

      </p>

      <p style={{color:"#000",fontSize:"15px"}} className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        
      </p>

 
      


      <Link style={{width:'auto',fontFamily:'Changa',}}
            onClick={() => addLike(_id)}
            type='button'
            className='btn btn-primary'
            style={{width:'auto',fontSize:'17px'}}
          >

        
            <i  style={{width:'auto',color:'yellow'}} className='fa fa-star fa-2x' />
           
 
             {' '}
            {' '}


            {likes.length > 0 && (
              <span className=''>{likes.length}</span>
            )}

            
          </Link> 
      

         


          <Link
            onClick={() => removeLike(_id)}
            type='button'
            className='btn btn-primary'
            style={{width:'auto',fontSize:'17px'}}
          >  
            <i className='fa fa-thumbs-down fa-2x' />
          </Link>

 


      </div> 
  </div>




   



  );
};



ContactCard.propTypes = {
  //getMarkets: PropTypes.func.isRequired,
  //market: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
  market: state.market,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(ContactCard);

