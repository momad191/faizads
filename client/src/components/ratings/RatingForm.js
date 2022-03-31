import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRating } from '../../actions/rating';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert'; 
import axios from 'axios';
       
const RatingForm = ({setAlert,addRating,the_target_shop_username,the_target_shop,rating_value}) => {

      const [ShowButton,setShowButton]= useState('showButton11')

      const [star1,setStar1]= useState('fa fa-star fa-3x')
      const [star2,setStar2]= useState('fa fa-star fa-3x')
      const [star3,setStar3]= useState('fa fa-star fa-3x')
      const [star4,setStar4]= useState('fa fa-star fa-3x')
      const [star5,setStar5]= useState('fa fa-star fa-3x')

      const [successAlert,setSuccessAlert]= useState('')

      const onSubmit5 = async e => {
        e.preventDefault();
        rating_value='5'
        addRating({the_target_shop_username,the_target_shop,rating_value});
        setSuccessAlert('شكرا لتقييم المتجر')
       };


      const onSubmit4 = async e => {
        e.preventDefault();
        rating_value='4'
        addRating({the_target_shop_username,the_target_shop,rating_value});
        setSuccessAlert('شكرا لتقييم المتجر')
      };



      const onSubmit3 = async e => {
        e.preventDefault();
        rating_value='3'
        addRating({the_target_shop_username,the_target_shop,rating_value});
        setSuccessAlert('شكرا لتقييم المتجر')
      };




      const onSubmit2 = async e => {
        e.preventDefault();
        rating_value='2'
        addRating({the_target_shop_username,the_target_shop,rating_value});
        setSuccessAlert('شكرا لتقييم المتجر')
      };



      const onSubmit1 = async e => {
        e.preventDefault();
        rating_value='1'
        addRating({the_target_shop_username,the_target_shop,rating_value});
        setSuccessAlert('شكرا لتقييم المتجر')
      };
  
      const hideButton = async e => {
        setShowButton('hideButton11')
    }



    const OneStar = async e => {
      setStar1('fa fa-star fa-3x starChecked')
      setStar2('fa fa-star fa-3x ')
      setStar3('fa fa-star fa-3x ')
      setStar4('fa fa-star fa-3x ')
      setStar5('fa fa-star fa-3x ')
    }
    const OneLeave = async e => {
      setStar1('fa fa-star fa-3x ')
      setStar2('fa fa-star fa-3x ')
      setStar3('fa fa-star fa-3x ')
      setStar4('fa fa-star fa-3x ')
      setStar5('fa fa-star fa-3x ')
    }


    const TwoStar = async e => {
      setStar1('fa fa-star fa-3x starChecked')
      setStar2('fa fa-star fa-3x starChecked')
      setStar3('fa fa-star fa-3x ')
      setStar4('fa fa-star fa-3x ')
      setStar5('fa fa-star fa-3x ')
    }
    const TwoLeave = async e => {
      setStar1('fa fa-star fa-3x ')
      setStar2('fa fa-star fa-3x ')
      setStar3('fa fa-star fa-3x ')
      setStar4('fa fa-star fa-3x ')
      setStar5('fa fa-star fa-3x ')
    }


    const ThreeStar = async e => {
      setStar1('fa fa-star fa-3x starChecked')
      setStar2('fa fa-star fa-3x starChecked')
      setStar3('fa fa-star fa-3x starChecked')
      setStar4('fa fa-star fa-3x ')
      setStar5('fa fa-star fa-3x ')
    }
    const ThreeLeave = async e => {
      setStar1('fa fa-star fa-3x ')
      setStar2('fa fa-star fa-3x ')
      setStar3('fa fa-star fa-3x ')
      setStar4('fa fa-star fa-3x ')
      setStar5('fa fa-star fa-3x ')
    }



    const FourStar = async e => {
      setStar1('fa fa-star fa-3x starChecked')
      setStar2('fa fa-star fa-3x starChecked')
      setStar3('fa fa-star fa-3x starChecked')
      setStar4('fa fa-star fa-3x starChecked')
      setStar5('fa fa-star fa-3x ')
    }
    const FourLeave = async e => {
      setStar1('fa fa-star fa-3x ')
      setStar2('fa fa-star fa-3x ')
      setStar3('fa fa-star fa-3x ')
      setStar4('fa fa-star fa-3x ')
      setStar5('fa fa-star fa-3x ')
    }


    const FiveStar = async e => {
      setStar1('fa fa-star fa-3x starChecked')
      setStar2('fa fa-star fa-3x starChecked')
      setStar3('fa fa-star fa-3x starChecked')
      setStar4('fa fa-star fa-3x starChecked')
      setStar5('fa fa-star fa-3x starChecked')
    }
    const FiveLeave = async e => {
      setStar1('fa fa-star fa-3x ')
      setStar2('fa fa-star fa-3x ')
      setStar3('fa fa-star fa-3x ')
      setStar4('fa fa-star fa-3x ')
      setStar5('fa fa-star fa-3x ')
    }



      useEffect(()=>{
 
      
    },[])


    return (
          
                  
        
                <div className="">
                <div className="">


                <center> 
                <h1>تقييم المتجر</h1>
                <div style={{display:'flex',direction:'rtl' }}>
 
              
                {successAlert !==''&&(
                <center> <div  className='alert-info'> 
                {successAlert}
                </div></center> 
                )}
               
                <form className="formRating" onSubmit={e => onSubmit5(e)}>
                <div className={ShowButton}> 
                <button className="starBtn" onClick={hideButton}    onMouseMove={FiveStar} onMouseLeave={FiveLeave} type="submit" name="" >
                <span  className={star5} ></span>
                </button>
                </div>
                </form>
            
        
 

              
                <form className="formRating" onSubmit={e => onSubmit4(e)}>
                <div className={ShowButton}> 
                <button className="starBtn" onClick={hideButton}   onMouseMove={FourStar} onMouseLeave={FourLeave} type="submit" name="" >
                <span className={star4}  ></span>
                </button>
                </div>
                </form>




                <form className="formRating" onSubmit={e => onSubmit3(e)}>
                <div className={ShowButton}> 
                <button className="starBtn" onClick={hideButton}   onMouseMove={ThreeStar}  onMouseLeave={ThreeLeave} type="submit" name="" >
                <span className={star3}></span>
                </button>
                </div>
                </form>




                <form className="formRating" onSubmit={e => onSubmit2(e)}>
                <div className={ShowButton}> 
                <button className="starBtn" onClick={hideButton}  onMouseMove={TwoStar}  onMouseLeave={TwoLeave} type="submit" name="" >
                <span className={star2} ></span>
                </button>
                </div>
                </form>



                <form className="formRating" onSubmit={e => onSubmit1(e)}>
                <div className={ShowButton}> 
                <button className="starBtn" onClick={hideButton}  onMouseMove={OneStar}  onMouseLeave={OneLeave}  type="submit" name="" >
                <span className={star1}></span>
                </button>
                </div>
                
                </form>

 
                 </div>
 
                 </center>

                </div>
                </div>
        
    
    )
}




RatingForm.propTypes = {
    addRating: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addRating }
  )(RatingForm);
