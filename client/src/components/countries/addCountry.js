import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCountry } from '../../actions/country';  
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import Spinner from '../layout/Spinner';
import { useTranslation } from 'react-i18next';
 
const Addcountry = ({setAlert, addCountry}) => {
    const [t, i18next] = useTranslation()
    const [user,setUser]= useState([])
    const [country_image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        country_AR_name: '',
        country_EN_name:'',
        country_code: '',
        country_code_upper_case:'',
        country_description: ''
      });
 
      const { country_AR_name, country_EN_name ,country_code,country_code_upper_case,country_description } = formData;

      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

      const onChangeimage = e => {
        setImage({ country_image: e.target.files[0] });
        };


        const onSubmit = async e => {
            e.preventDefault();

            if (country_AR_name === '') {
              setAlert('الرجاء ادخال الاسم عربي','alertMsg-danger');
              
                
            }
             
            else if (country_EN_name === '') {
              setAlert('الرجاءء ادخال الاسم انجليزي','alertMsg-danger');
              
              
            }
            else if(country_code === '' ){
              setAlert('الرجاء ادخال رمز الدولة','alertMsg-danger');
           
              
            }
            
            else if(country_code_upper_case === '' ){
              setAlert('الرجاء ادخال رمز الدولة بالأحرف الكبرى','alertMsg-danger');

            }
            else {
              
            addCountry({country_AR_name,country_EN_name,country_code,country_code_upper_case, country_description, country_image});
             setAlert('Country added', 'success');
            }
          };



      const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'faizcountries')
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


      useEffect(() => {
        axios.get('/api/auth')
        .then(res => {
          setUser(res.data)
        }) 
        .catch((err) => {
          console.log(err);
        })

      }, [user]);
    
    const AddCountryValid = (
 
        <div className="mainForm"> 
        <center> 
        <div className="dash-title">{t('addCountry')} </div>
        <Link to="/dashboard/countries" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> {t('backButton')} </Link>
        </center>
 

        <center> 
     
	    <form className="login-form" onSubmit={e => onSubmit(e)}>
      <div className='FormCover'>  
                <span>{t('country_ar_name')} </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="country_AR_name" 
                 value={country_AR_name} 
                 onChange={e => onChange(e)}
                 />



                <span>{t('country_en_name')} </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="country_EN_name" 
                 value={country_EN_name} 
                 onChange={e => onChange(e)}
                 />

                <span>{t('country_code')} </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="country_code" 
                 value={country_code} 
                 onChange={e => onChange(e)}
                 />

            <span>{t('country_code_upper_case')} </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="country_code_upper_case" 
                 value={country_code_upper_case} 
                 onChange={e => onChange(e)}
                 />



                <span>{t('country_description')} </span>
                <textarea className="login-input"  
                 placeholder=""
                 name="country_description" 
                 value={country_description} 
                 onChange={e => onChange(e)}
                 />


                        <span>{t('upload_picture')} </span>
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
                          <img src={country_image} style={{ width: '30%', height:'30%',marginBottom:''}} />
                          <input   type="hidden" name='image' value={country_image}  onChange={onChangeimage} />
                          </div>
                          </Fragment>

                        )}


                    <center>
                    <button className="Formbutton"  type="submit" name="" >
                    <span>{t('save')} </span>
                    </button>

                    <Alert />
                
                    </center>
                    </div>
                    </form>
                    </center>


  



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
      
      {i18next.language === 'ar'&& <Navbar />}
      {i18next.language === 'en'&& <NavbarEnglish />}
      <Alert />
     { user.validity === "super" || user.validity === "admin"  ?  AddCountryValid : notValidPage }
      </div>
      </div>
      );
}
 
  
 
Addcountry.propTypes = {
    addCountry: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addCountry }
  )(Addcountry);
