import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCategory } from '../../actions/category';
import { setAlert } from '../../actions/alert';
import axios from 'axios';
import Navbar from '../layout/Navbar';

const Addcategory = ({setAlert,addCategory}) => {
   

  const [markets11,setMarkets11]= useState([])
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
      market_id:'',
      market_code:'',
      c_AR_name: '',
      c_EN_name: '',
      c_code: '',
      c_description: ''
    
      });

      const { market_id, market_code, c_AR_name, c_EN_name, c_code, c_description } = formData;

      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
 
      const onChangeimage = e => {
        setImage({ image: e.target.files[0] });
        };



      const onSubmit = async e => {
        e.preventDefault();
         addCategory({ market_id, market_code, c_AR_name, c_EN_name, c_code, c_description,image});
         setAlert('category added', 'success');
        
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


      useEffect(()=>{
      
        axios.get('/api/markets')
        .then(res => {
          console.log(res);
        setMarkets11(res.data)
        })
        .catch((err) => {
          console.log(err);
        })
     
     
        // axios.get('/api/categories/sumsub')
        // .then(res => {
        //   console.log(res);
        // setSubCategory22(res.data)
        // })
        // .catch((err) => {
        //   console.log(err);
        // })
      
    },[markets11])



    const removepic = ()=>{
      setImage('')
      }


    return (
          
                  
        
                <div className="aqle3-main">
                <div className="mainword2">
                  <Navbar />
                <div className="mainForm">
                <center> 
                <div class="login-title">  اضافة تصنيف رئيسي جديد <i class="fa fa-plus-circle"></i></div>
 
                <Link to="/ar/dashboard/categories" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> رجوع </Link>
                </center>
         
                <center> 
             
                <form className="login-form" onSubmit={e => onSubmit(e)}>
                <div className='FormCover'>  

                <div className=''>
                <span>السوق كود </span>
                <select className="login-input" 
                 
                  name="market_code" 
                  value={market_code} 
                  onChange={e => onChange(e)}
                  > 
                  <option value='nothing chosen'> اختر السوق الذي تود ان تضيف له تصنيف </option>
                  {markets11.map(catego=>(
                  <option required value={catego.m_code}> {catego.m_code} </option>
                    ))}

                  </select>
                  </div>


  
                <div className=''>
                <span> اي دي السوق </span>
                <select className="login-input" 
                
                  name="market_id" 
                  value={market_id} 
                  onChange={e => onChange(e)}
                  > 
                  <option value='nothing chosen'> اختر السوق الذي تود ان تضيف له تصنيف </option>
                  {markets11.map(catego=>(
                  <option required value={catego._id}> {catego.m_AR_name} </option>
                    ))}

                  </select>
                  </div>


              
                <div className=''>
                <span>اسم التصنيف عربي </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="c_AR_name" 
                 value={c_AR_name} 
                 onChange={e => onChange(e)}
                 />
                 </div>



                 <div className=''>
                <span>اسم التصنيف انجليزي </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="c_EN_name" 
                 value={c_EN_name} 
                 onChange={e => onChange(e)}
                 />
                 </div>



                 <div className=''>
                <span>رمز التصنيف </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="c_code" 
                 value={c_code} 
                 onChange={e => onChange(e)}
                 />
                 </div>



                <div className=''>
                 <span>الوصف </span>
                 <textarea className="login-input"  
                 placeholder=""
                 name="c_description" 
                 value={c_description} 
                 onChange={e => onChange(e)}

                 />
                  </div>


                    <div className=''>
                    <span>ارفع صورة  </span>
                        <input 
                          className="login-input"
                          placeholder=""
                          type="file"
                          name="file"
                          //value={image} 
                          onChange={uploadImage} />
                           </div>


                        {loading ? (
                          <h3>Loading...</h3>
                        ) : (
                          <Fragment>
                            <div>
                            {image &&(
                          <img src={image} style={{ width: '30%', height:'30%',marginBottom:''}} />
                            )}
                        {image &&(
                       <center><div className='removepic' onClick={removepic}> X </div></center>
                         )} 
                          <input   type="hidden" name='image' value={image}  onChange={onChangeimage} />
                          </div>
                          </Fragment>

                        )}


                {/* <input className="Forminput" 
                type="file"  
                placeholder="image"
                name="c_image" 
                value={c_image} 
                onChange={e => onChange(e)}
                
                />  */}
         
        
                
              <center>
             <button className="Formbutton"  type="submit" name="" >اضافة</button>
         
             </center>
             </div>
             </form>
             </center>
        
 
                </div>
                </div>
                </div>
        
    
    )
}




Addcategory.propTypes = {
    addCategory: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addCategory }
  )(Addcategory);
