import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPurpose } from '../../actions/purpose'; 
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
import { deletePurpose } from '../../actions/purpose';
import ConfirmButton from "./ConfirmButton";

import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';
     
const Addpurpose = ({setAlert, addPurpose,deletePurpose}) => {
    const [t, i18next] = useTranslation()
    const [user,setUser]= useState([])
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
      p_AR_name: '',
      p_EN_name:'',
      p_code:'',
      p_description:'',

      });

      const { p_AR_name,p_EN_name,p_code,p_description} = formData;

      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

  


        const onSubmit = async e => {
            e.preventDefault();
            addPurpose({p_AR_name,p_EN_name,p_code,p_description});
             setAlert('purpose added', 'success');
            
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



            axios.get('/api/purposes')
            .then(res => {
              console.log(res);
              setPurposes(res.data)
            })
            .catch((err) => {
              console.log(err);
            })
    
    
          }, [getPurposes,user]);


    
    const AddPurposeValid =(
        <div>
        <div>
           
        <div className="mainForm">

        
        <div class="login-title"> <i class="fa fa-plus-circle"></i> {t('purposes_management_title')} </div>
        <Link to="/dashboard/main" class="login-title" style={{textDecoration:'none',marginLeft:'10px'}}>  <i className="fa fa-arrow-left fa-1x"></i> {t('backButton')} </Link>

    
 

        <center> 
	 
	    <form className="login-form" onSubmit={e => onSubmit(e)}>
      <div className='FormCover'>  
                <span>{t('purposes_AR_name')} </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="p_AR_name" 
                 value={p_AR_name} 
                 onChange={e => onChange(e)}
                 />



              <span>{t('purposes_EN_name')} </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="p_EN_name" 
                 value={p_EN_name} 
                 onChange={e => onChange(e)}
                 />



                <span>{t('purposes_code')} </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="p_code" 
                 value={p_code} 
                 onChange={e => onChange(e)}
                 />



                 <span>{t('purposes_description')} </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="p_description" 
                 value={p_description} 
                 onChange={e => onChange(e)}
                 />
 



   

  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" >{t('addButton')}</button>










 
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
    {i18next.language === 'ar' && purpose.p_AR_name}  
    {i18next.language === 'en' && purpose.p_EN_name}  
    </div>
 
 
  
       
      <div>
      <p class="list-details"> <span className="redColor">{t('purposes_AR_name')}: </span>{purpose.p_AR_name} </p>
      <p class="list-details"> <span className="redColor"> {t('purposes_EN_name')}: </span>{purpose.p_EN_name} </p>
      <p class="list-details"> <span className="redColor"> {t('purposes_code')}</span>{purpose.p_code} </p>
      <p class="list-details"> <span className="redColor"> {t('purposes_description')}</span>{purpose.p_description} </p>
      <p class="list-button">
      <a href={`/dashboard/EditPurpose/${purpose._id}`}  style={{textDecoration:'none'}} >   <button  className="Action-button-status">  <i class="fa fa-edit fa-1x"></i>   </button> </a>

       {i18next.language === 'ar' && (
          <ConfirmButton
          dialog={["", "هل انت متأكد ؟", "تأكيد الحذف"]}
          action={() => deletePurpose(purpose._id)}
            />
       )}


          {i18next.language === 'en' && (
          <ConfirmButton
          dialog={["", "?are you sure", "Confirm the deletion"]}
          action={() => deletePurpose(purpose._id)}
            />
       )}
           
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
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
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
      {i18next.language === 'ar'&&(<Navbar />)}
      {i18next.language === 'en'&&(<NavbarEnglish />)}

      <Alert />
     { user.validity === "super" || user.validity === "admin"  ?  AddPurposeValid : notValidPage }
      </div>
      </div>
      );

}
 
 

Addpurpose.propTypes = {
  addPurpose: PropTypes.func.isRequired,
  deletePurpose: PropTypes.func.isRequired,
  
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addPurpose,deletePurpose}
  )(Addpurpose);
