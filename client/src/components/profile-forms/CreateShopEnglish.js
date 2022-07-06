import React, { Fragment, useEffect ,useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import Moment from 'react-moment';
import { createShop } from '../../actions/shop'; 
import { addvisual } from '../../actions/auth';
   
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
  
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
  
import emptypic from './emptypic.jpg';
import emptypic1 from './emptypic1.jpg';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Input } from 'postcss';
 

const noneDisplayI = 'noneDisplayI';
const displayI = 'displayI';
     
const CreateShopEnglish = ({ setAlert ,createShop , isAuthenticated }) => {

  const [gostart,setgostart]= useState(displayI)

  // const [shopInfo,setShopInfo]= useState([])
  const [userShop,setuserShop]= useState([])
  const [user, setUser] = useState([])
 
 
	const [markets11,setMarkets11]= useState([])


	const [shop_img, setPic10] = useState('')

	const onChangePic10 = e => {
		setPic10({ shop_img: e.target.files[0] });
		};

		const removepic10 = ()=>{
			setPic10('')
			}
 

      const [shop_logo_img, setPic11] = useState('')
      const onChangePic11 = e => {
        setPic10({ shop_logo_img: e.target.files[0] });
        };
    
        const removepic11 = ()=>{
          setPic11('')
          }
          




	const [loadingshopimg, setLoadingShopImg] = useState(false)
  const [loadinglogo, setLoadingLogo] = useState(false)

  const [search,setSearch]= useState("")
  
  const [visualCode,setVisualCode]= useState([])
  const [userInfo,setUserInfo]= useState([])
  // const [alert,setAlert]= useState('')
  const [geolocation,setgeolocation]= useState([])

  const shop_country_name = geolocation.country_name;
  const shop_country_code = geolocation.country_code;
  const shop_status='open'; 

 

 
 

 
  const [formData, setFormData] = useState({
    shop_name: '',
    shop_type: '',
    shop_description:'',
	  shop_img:'',
    shop_logo_img:'',
    youtube:'',
    twitter:'',
    facebook:'',
    linkedin:'',
    instagram:'',

    shop_email:'',
    shop_website:'',
    shop_whatsaap:'',
    shop_mobile:'',
    shop_phone1:'',
    shop_phone2:'',
    shop_phone3:'',
   
	// shop_status:'',
	// shop_country_code:'',
	// shop_country_name:'',
  }); 
  const {shop_name,shop_type,shop_description,youtube,twitter,facebook,linkedin,instagram,shop_email,shop_website,shop_whatsaap,shop_mobile,shop_phone1,shop_phone2,shop_phone3} = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = async e => {
      e.preventDefault();
      if (shop_name === '') { 
        setAlert('Shop name is required ');
      }
      else if(shop_img === '') { 
        setAlert('No cover photo set');
      }
      else if(shop_logo_img === '') { 
        setAlert('Not set logo'); 
      }
       else{
      createShop({shop_name,shop_type,shop_description,shop_img,shop_logo_img,shop_status,shop_country_code,shop_country_name,youtube,twitter,facebook,linkedin,instagram,shop_email,shop_website,shop_mobile,shop_whatsaap,shop_phone1,shop_phone2,shop_phone3 });   
      setAlert('Shop created');
      window.location= `/dashboard/main/`
    } 
    };

  const onSubmit2 = async e => {
    e.preventDefault(); 
		createShop({shop_name,shop_type,shop_description,shop_img,shop_logo_img,shop_status,shop_country_code,shop_country_name,youtube,twitter,facebook,linkedin,instagram,shop_email,shop_website,shop_mobile,shop_whatsaap,shop_phone1,shop_phone2,shop_phone3 });   
    window.location= `/dashboard/shops/edit`
  };


    const gocreate= ()=>{
      createShop({shop_name,shop_type,shop_description,shop_img,shop_logo_img,shop_status,shop_country_code,shop_country_name,youtube,twitter,facebook,linkedin,instagram,shop_email,shop_website,shop_mobile,shop_whatsaap,shop_phone1,shop_phone2,shop_phone3 });   
    window.location= `/dashboard/shops/edit`
      setgostart(noneDisplayI)
    }

  useEffect(() => {



    // axios.get('/api/shops/allshops')
    // .then(res => {
    //   setShopInfo(res.data)
    // })
    // .catch((err) => {
    //   console.log(err);
    // })

 
    axios.get('/api/shops/usershop')
    .then(res => {
      console.log(res);
      setuserShop(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    axios.get('https://geolocation-db.com/json/297364b0-2bc6-11ec-a8a6-1fc54772a803')
    .then(res => {
      setgeolocation(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
 
 
    axios.get('/api/auth/allusers')
    .then(res => {
      setUserInfo(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

 
    axios.get('/api/auth/visualcodeshow')
    .then(res => {
      setVisualCode(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

 
	axios.get('/api/markets')
	.then(res => {
	  console.log(res);
	setMarkets11(res.data)
	})
	.catch((err) => {
	  console.log(err);
	})



  axios.get('/api/auth')
  .then(res => {
    console.log(res);
    setUser(res.data)
  })
  .catch((err) => {
    console.log(err);
  })


 }, []);


 




 const uploadPic10 = async e => {
	const files = e.target.files
	const data = new FormData()
	data.append('file', files[0])
	data.append('upload_preset', 'faizshops')
	setLoadingShopImg(true)
	const res = await fetch(
	  'https://api.cloudinary.com/v1_1/momad191/image/upload',
	  {
		method: 'POST',
		body: data
	  }
	)
	const file = await res.json()

	setPic10(file.secure_url)
	setLoadingShopImg(false)
  }





  const uploadPic11 = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'faizshops')
    setLoadingLogo(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/momad191/image/upload',
      {
      method: 'POST',
      body: data
      }
    )
    const file = await res.json()
  
    setPic11(file.secure_url)
    setLoadingLogo(false)
    }


     

    // if (userShop) {
    //   return <Redirect to='/ar/dashboard/shops/edit' />;
    // }else{
    //   return <Redirect to='/ar/dashboard/create-shop' />;
    // }
 
   
 
  const CreateShop1 = (

    
    <Fragment>
  
       

 
      

    
 




 
       
     <div className="aqle3-main" >
      <div className="mainword2">
      <div className="mainForm">
   
   
	  <center> 
 
     
        
   <div className="new-ad-title"> Set up your shop </div>

    <form className="" onSubmit={e => onSubmit(e)}>
	  <div className='shop'> 
     
      <div className="">
	                 <div className={shop_img}>
                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file10"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic10} />
                     {loadingshopimg ? (
                      <div style={{width:'200px',height:'200px'}}> loading ....</div> 
                     ) : (
                       <Fragment> 
                       <span>
                         {shop_img ===''?(
                        <label for="file10" className="imageLabel">
                           <div className="shop-img-container1"> 
                     <img src={emptypic} style={{ height:'200px',width:'100%'}} />
                     </div> 
                     </label>
                         ):(
                          <label for="file10" className="imageLabel">
                            <div className="shop-img-container1"> 
                          <img src={shop_img} style={{  height:'200px',width:'100%'}} />
                          </div>
                          </label>
                          )}
                      {shop_img &&(
                       <center><div className='removepic' onClick={removepic10}> X </div></center>
                         )}
                       <input   type="hidden" name='shop_img' value={shop_img}  onChange={onChangePic10} />
                       </span>
                       </Fragment>
                     )}
                    </div>
                    </div>

               




                    <div className="">
                    <div className={shop_logo_img}>
                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file11"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic11} />
                     {loadinglogo ? (
                      <span> loading ....</span>
                     ) : (
                       <Fragment>  
                       <span>
                         {shop_logo_img ===''?(
                        <label for="file11" className="imageLabel">
                       <div className="smallimg1"> 
                     <img src={emptypic1}  />
                     </div>
                     </label>
                         ):(
                          <label for="file11" className="imageLabel">
                            <div className="smallimg1"> 
                          <img src={shop_logo_img} />
                          </div>
                          </label>
                          )}
                      {shop_logo_img &&(
                       <center><div className='removepic' onClick={removepic11}> X </div></center>
                         )}
                       <input   type="hidden" name='shop_logo_img' value={shop_logo_img}  onChange={onChangePic11} />
                       </span>
                       </Fragment>
                     )}
                    </div>
                    </div>
 
<center> 
<div className="login-form" > 
  
	  <span className="login-text">  Shop name    </span>
		<input
		 className="login-input"
		  type='text'
      maxLength='60'
		  placeholder='Example: Sunrise Store'
		  name='shop_name'
		  value={shop_name}
		  onChange={e => onChange(e)}
		/>



				{/* <div className=''>
                <span className='login-text'>Shop type  </span>
                <select 
				className="login-input"
                 
                  name="shop_type" 
                  value={shop_type} 
                  onChange={e => onChange(e)}
                  > 
                  <option selected="selected" value='cars'> What market would you like to advertise in? </option>
                  {markets11.map(catego=>(
                  <option required value={catego.m_code}> {catego.m_EN_name} </option>
                    ))}
                  </select>
                  </div> */}



<span className="login-text">   Description (150 Character)   </span>
		<textarea
		 className="login-input-textarea"
		  type='text'
		  placeholder='Example: a shop that sells flowers, plants and gardening tools'
		  name='shop_description'
		  value={shop_description}
		  onChange={e => onChange(e)}
      maxLength='150'
		/>

 
<span className="login-text">  YouTube     </span>
		<input
		 className="login-input"
		  type='text'
		  placeholder='https://www.youtube.com/c/your_channel_url'
		  name='youtube'
		  value={youtube}
		  onChange={e => onChange(e)}
		/>




<span className="login-text">  Twitter     </span>
		<input
		 className="login-input"
		  type='text'
		  placeholder='https://twitter.com/your_acccount_name'
		  name='twitter'
		  value={twitter}
		  onChange={e => onChange(e)}
		/>



<span className="login-text">  Facebook page or group of your shop     </span>
		<input
		 className="login-input"
		  type='text'
		  placeholder='https://www.facebook.com/your_acccount_name'
		  name='facebook'
		  value={facebook}
		  onChange={e => onChange(e)}
		/>




<span className="login-text">  Linkedin account     </span>
		<input
		 className="login-input"
		  type='text'
		  placeholder='https://www.linkedin.com/in/your_acccount_name/'
		  name='linkedin'
		  value={linkedin}
		  onChange={e => onChange(e)}
		/>



<span className="login-text">  Instagram account    </span>
		<input
		 className="login-input"
		  type='text'
		  placeholder='https://www.instagram.com/your_acccount_name/'
		  name='instagram'
		  value={instagram}
		  onChange={e => onChange(e)}
		/>



<span className="login-text">  Email     </span>
		<input
		 className="login-input"
		  type='text'
		  placeholder='example@example.com'
		  name='shop_email'
		  value={shop_email}
		  onChange={e => onChange(e)}
		/>



<span className="login-text">  Website     </span>
		<input
		 className="login-input"
		  type='text'
		  placeholder='www.example.com'
		  name='shop_website'
		  value={shop_website}
		  onChange={e => onChange(e)}
		/>



<span className="login-text">  Whatsapp </span>
		<input
		 className="login-input"
		  type='number'
		  placeholder='+4415XXXXXXXX'
		  name='shop_whatsaap'
		  value={shop_whatsaap}
		  onChange={e => onChange(e)}
		/>



<span className="login-text">  Mobile     </span>
		<input
		 className="login-input"
		  type='number'
		  placeholder='+4415XXXXXXXX'
		  name='shop_mobile'
		  value={shop_mobile}
		  onChange={e => onChange(e)}
		/>

  

<span className="login-text">  Phone1 (optional)   </span>
		<input
		 className="login-input"
		  type='number'
		  placeholder='+4415XXXXXXXX'
		  name='shop_phone1'
		  value={shop_phone1}
		  onChange={e => onChange(e)}
		/>



<span className="login-text">  Phone2 (optional)     </span>
		<input
		 className="login-input"
		  type='number'
		  placeholder='+4415XXXXXXXX'
		  name='shop_phone2'
		  value={shop_phone2}
		  onChange={e => onChange(e)}
		/>



<span className="login-text">  Phone3 (optional)     </span>
		<input
		 className="login-input"
		  type='number'
		  placeholder='+4415XXXXXXXX'
		  name='shop_phone3'
		  value={shop_phone3}
		  onChange={e => onChange(e)}
		/>

<center>   <div className="alert-info" >  <Alert /> </div> </center>  
	 <button className="Formbutton" type='submit'> Create </button>
   </div>
   </center>

</div>
	 </form>
  </center>

 


      </div>
      </div>
      </div>
    </Fragment>
  );

const EditShop1 =(
  <Fragment>
 
  <div className="new-ad-title"> You already have a shop that you can update  </div>
 <center> <Link className='Action-button-status' to='/dashboard/shops/edit'>Update your shop</Link> </center>
  </Fragment>
)

   

return(
  userShop ? EditShop1: CreateShop1
)

};

CreateShopEnglish.propTypes = {
  setAlert: PropTypes.func.isRequired,
  createShop: PropTypes.func.isRequired,  
  isAuthenticated: PropTypes.bool
};
  
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
  
export default connect(
  mapStateToProps,
  { setAlert,createShop }
)(CreateShopEnglish);
