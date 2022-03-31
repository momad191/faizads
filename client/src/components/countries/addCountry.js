import React, { Fragment,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCountry } from '../../actions/country';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
const Addcountry = ({setAlert, addCountry}) => {
  
    const [country_image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        country_AR_name: '',
        country_EN_name:'',
        country_code: '',
        country_description: ''
      });
 
      const { country_AR_name, country_EN_name ,country_code,country_description } = formData;

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
           
            } else {
              
            addCountry({country_AR_name,country_EN_name,country_code, country_description, country_image});
             setAlert('Country added', 'success');
            }
          };



      const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'magazine')
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




    
    return (
 

        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">


        <Alert />
        
        <div class="login-title"> <i class="fa fa-plus-circle"></i> اضافة دولة جديدة للنظام </div>
    
 

        <center> 
	 
	    <form className="login-form" onSubmit={e => onSubmit(e)}>
	 
                <span>اسم الدولة باللغة العربية </span>
                <input className="FormCover"
                 type="text" 
                 placeholder=""
                 name="country_AR_name" 
                 value={country_AR_name} 
                 onChange={e => onChange(e)}
                 />



                <span>اسم الدولة باللغة الانجليزية </span>
                <input className="FormCover"
                 type="text" 
                 placeholder=""
                 name="country_EN_name" 
                 value={country_EN_name} 
                 onChange={e => onChange(e)}
                 />

                <span>رمز الدولة </span>
                <input className="FormCover"
                 type="text" 
                 placeholder=""
                 name="country_code" 
                 value={country_code} 
                 onChange={e => onChange(e)}
                 />


                <span>الوصف </span>
                <textarea className="FormCover"  
                 placeholder=""
                 name="country_description" 
                 value={country_description} 
                 onChange={e => onChange(e)}
                 />


                        <span>ارفع الصورة </span>
                        <input 
                          className="FormCover"
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
                    <button className="Formbutton"  type="submit" name="" >اضافة</button>

                    <Alert />
                
                    </center>
                    </form>
                    </center>


  



        </div>
        </div>
        </div>

    )
}
 
  

Addcountry.propTypes = {
    addCountry: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addCountry }
  )(Addcountry);
