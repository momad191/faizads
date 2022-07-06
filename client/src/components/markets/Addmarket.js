import React, { Fragment, useEffect ,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMarket } from '../../actions/market';
import { setAlert } from '../../actions/alert';
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';

const Addmarket = ({setAlert, addMarket}) => {
    const [t, i18next] = useTranslation()
    const [user,setUser]= useState([])
    const [m_image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
      m_AR_name: '',
      m_EN_name:'',
      m_code: '',
      m_fontawesome_class:'',
      m_description: ''
      });

      const { m_AR_name,m_EN_name ,m_code, m_fontawesome_class,m_description } = formData;

      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

      const onChangeimage = e => {
        setImage({ m_image: e.target.files[0] });
        };


        const onSubmit = async e => {
            e.preventDefault();
             addMarket({m_AR_name,m_EN_name, m_code,m_fontawesome_class, m_description, m_image});
             setAlert('Market added', 'success');
            
          };

      const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'faizmarkets')
        setLoading(true)
        const res = await fetch(
          'https://api.cloudinary.com/v1_1/momad191/image/upload',
          {
            method: 'POST',
            body: data
          }
        ) 
        const file = await res.json()
    
        setImage(file.secure_url)
        setLoading(false)
      }




      const removepic = ()=>{
        setImage('')
        }

        useEffect(() => {

          axios.get('/api/auth')
          .then(res => {
            setUser(res.data)
          }) 
          .catch((err) => {
            console.log(err);
          })

        }, [user]);
    
const AddMarketValid = (
        <div>
        <div>
          
        <div className="aqle3-main">
        <div className="mainword2">
        {i18next.language === 'ar'&&(<Navbar />)}
        {i18next.language === 'en'&&(<NavbarEnglish />)}
        <div className="mainForm">

        
        <div class="login-title"> <i class="fa fa-plus-circle"></i> {t('addMarket')} </div>
         <center>
         <Link to="/dashboard/markets" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> {t('backButton')} </Link>
         </center>
     
  

        <center> 
	 
	    <form className="login-form" onSubmit={e => onSubmit(e)}>
      <div className='FormCover'>  

                <span>{t('market_ar_name')} </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="m_AR_name" 
                 value={m_AR_name} 
                 onChange={e => onChange(e)}
                 />



               <span>{t('market_en_name')} </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="m_EN_name" 
                 value={m_EN_name} 
                 onChange={e => onChange(e)}
                 />



                <span>{t('market_code')} </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="m_code" 
                 value={m_code} 
                 onChange={e => onChange(e)}
                 />


 
            <span>{t('fontawesome')} </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="m_fontawesome_class" 
                 value={m_fontawesome_class} 
                 onChange={e => onChange(e)}
                 />


                <span>{t('market_description')} </span>
                <textarea className="login-input"  
                 placeholder=""
                 name="m_description" 
                 value={m_description} 
                 onChange={e => onChange(e)}

                 />


                        <span>   {t('upload_picture')} </span>
                        <input 
                          className="login-input"
                          type="file"
                          name="file"
                          //value={m_image} 
                          onChange={uploadImage} />


                        {loading ? (
                          <h3>Loading...</h3>
                        ) : ( 
                          <Fragment>
                            <div>
                           {m_image &&(
                          <img src={m_image} style={{ width: '30%', height:'30%',marginBottom:''}} />
                           )}   

                        {m_image &&(
                       <center><div className='removepic' onClick={removepic}> X </div></center>
                         )} 

                          <input   type="hidden" name='image' value={m_image}  onChange={onChangeimage} />
                          </div>
                          </Fragment>

                        )}



   

  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" >
   {t('save')}
   </button>
 
	 </center>
   </div>
	 </form>
     </center>


  



        </div>
        </div>
        </div>


        </div>

            
        </div>
    )


    const notValidPage =(
      <Fragment>
          <div className="aqle3-main">
            <div className="mainword2">
            {i18next.language === 'ar'&&(<Navbar />)}
            {i18next.language === 'en'&&(<NavbarEnglish />)}
            <center> 
           {/* <h1>Page Not Found</h1>
           <h2>Sorry, this page does not exist</h2> */}
           <Spinner />
          </center>
         </div>
        </div>
      </Fragment>
    )

    return(
      user.validity === "super" || user.validity === "admin"  ?  AddMarketValid : notValidPage
      );


}
 
 

Addmarket.propTypes = {
    addMarket: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addMarket }
  )(Addmarket);
