import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMembershiptype } from '../../actions/membershiptype'; 
import { setAlert } from '../../actions/alert';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';

import { deleteMembershiptype } from '../../actions/membershiptype';

import ConfirmButton from "./ConfirmButton";

   
const Addmembershiptype = ({setAlert, addMembershiptype,deleteMembershiptype}) => {
 
    const [user,setUser]= useState([])
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
      m_t_AR_name: '',
      m_t_EN_name:'',
      m_t_code: '',
      m_t_description:'',
      

      });

      const { m_t_AR_name,m_t_EN_name,m_t_code,m_t_description} = formData;

      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

  
 

        const onSubmit = async e => {
            e.preventDefault();
            addMembershiptype({m_t_AR_name,m_t_EN_name,m_t_code,m_t_description});
             setAlert('membership type  added', 'success');
            
          };

 
          const [getPurposes,setPurposes]= useState([])
          const [visible,setVisible]= useState(20)
          const currentResults = getPurposes.slice(0,visible);


          const loadMore = async e => {
            setVisible(visible+10) 
           }
    


          useEffect(() => {


            axios.get('/api/auth')
            .then(res => {
              setUser(res.data)
            }) 
            .catch((err) => {
              console.log(err);
            })


            axios.get('/api/membershiptypes')
            .then(res => {
              console.log(res);
              setPurposes(res.data)
            })
            .catch((err) => {
              console.log(err);
            })
    
    
          }, [getPurposes,user]);


    
    const AddmembershiptypeValid = (
        <div>
        <div>
          
        <div className="mainForm">

        <div class="login-title"> <i class="fa fa-plus-circle"></i> ?????????? ?????? ?????????? ???????? </div>
        <Link to="/dashboard/main" class="login-title" style={{textDecoration:'none',marginLeft:'10px'}}>  <i className="fa fa-arrow-left fa-1x"></i> ???????? </Link>

    
  

        <center> 
	 
	    <form className="login-form" onSubmit={e => onSubmit(e)}>
      <div className='FormCover'>  
                <span>?????? ?????????????? ???????????? ?????????????? </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="m_t_AR_name" 
                 value={m_t_AR_name} 
                 onChange={e => onChange(e)}
                 />



              <span>?????? ?????????????? ???????????????????? </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="m_t_EN_name" 
                 value={m_t_EN_name} 
                 onChange={e => onChange(e)}
                 />



                <span>?????? ?????????????? </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="m_t_code" 
                 value={m_t_code} 
                 onChange={e => onChange(e)}
                 />



                <span>?????? ?????????????? </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="m_t_description" 
                 value={m_t_description} 
                 onChange={e => onChange(e)}
                 />
 



   

  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" >??????????</button>










 
	 </center>
   </div>
	 </form>
     </center>


  



        </div>
 









     
        {getPurposes.length <1?(
<Spinner />
 ):(
 
 currentResults
//filter(market=>{

//     return market.m_name.indexOf(search)>=0

//   })
 .map(purpose => (
     <Fragment>
     
        {/* <MarketItem key={market._id} market={market} /> */}
         
        <center>
    <div class="dash-list" key={purpose._id}>

  

    <div className="title-in-list">
    {purpose.m_t_AR_name}  
    </div>
 
      <div>
      <p class="list-details"> <span className="redColor">?????????? ????????:</span>{purpose.m_t_AR_name} </p>
      <p class="list-details"> <span className="redColor">?????????? ??????????????:</span>{purpose.m_t_EN_name} </p>
      <p class="list-details"> <span className="redColor">??????????:</span>{purpose.m_t_code} </p>
      <p class="list-details"> <span className="redColor">??????????:</span>{purpose.m_t_description} </p>


      <p class="list-button">
      <a href={`/dashboard/EditMembershipType/${purpose._id}`}  style={{textDecoration:'none'}} >   <button  className="Action-button-status">  <i class="fa fa-edit fa-1x"></i>   </button> </a>

      

            <ConfirmButton
            dialog={["", "???? ?????? ?????????? ??", "?????????? ??????????"]}
            action={() => deleteMembershiptype(purpose._id)}
              />
       </p>
      </div> 
  </div>
  </center>

  
     </Fragment>
      )))}




  {/* onClick={() => loadMore()} */}
  {visible < getPurposes.length && (
    <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> ???????????? </button> 
      </center>
  )}






        </div>

            
        </div>
    )
 


    const notValidPage =(
      <Fragment>
             <center> 
           <Spinner />
          </center>
      </Fragment>
    )
      
        return(
          <div className="aqle3-main">
          <div className="mainword2">
          <Navbar />
        {user.validity === "super" || user.validity === "admin"  ?  AddmembershiptypeValid : notValidPage}
        </div>
        </div>
        );


}
 
 

Addmembershiptype.propTypes = {
    addMembershiptype: PropTypes.func.isRequired,
    deleteMembershiptype: PropTypes.func.isRequired,
  
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addMembershiptype,deleteMembershiptype}
  )(Addmembershiptype);
