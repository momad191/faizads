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
     
const CreateShopArabic = ({ setAlert ,createShop , isAuthenticated }) => {

  const [gostart,setgostart]= useState(displayI)

  const [shopInfo,setShopInfo]= useState([])
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
        setAlert('اسم المتجر ضروري ');
      }else if(shop_type === '') { 
        setAlert('نوع المتجر ضروري اختر السوق  المستهدفة ');
      }
      else if(shop_img === '') { 
        setAlert('لم تعيين صورة غلاف للمتجر');
      }
      else if(shop_logo_img === '') { 
        setAlert('لم تعيين شعار للمتجر');
      }
       else{
      createShop({shop_name,shop_type,shop_description,shop_img,shop_logo_img,shop_status,shop_country_code,shop_country_name,youtube,twitter,facebook,linkedin,instagram,shop_email,shop_website,shop_mobile,shop_whatsaap,shop_phone1,shop_phone2,shop_phone3 });   
       
    }
    };

  const onSubmit2 = async e => {
    e.preventDefault(); 
		createShop({shop_name,shop_type,shop_description,shop_img,shop_logo_img,shop_status,shop_country_code,shop_country_name,youtube,twitter,facebook,linkedin,instagram,shop_email,shop_website,shop_mobile,shop_whatsaap,shop_phone1,shop_phone2,shop_phone3 });   
    window.location= `/ar/dashboard/shops/edit`
  };


    const gocreate= ()=>{
      createShop({shop_name,shop_type,shop_description,shop_img,shop_logo_img,shop_status,shop_country_code,shop_country_name,youtube,twitter,facebook,linkedin,instagram,shop_email,shop_website,shop_mobile,shop_whatsaap,shop_phone1,shop_phone2,shop_phone3 });   
    window.location= `/ar/dashboard/shops/create-shop`
    //   setgostart(noneDisplayI)
    }


    const cancel= ()=>{
      createShop({shop_name,shop_type,shop_description,shop_img,shop_logo_img,shop_status,shop_country_code,shop_country_name,youtube,twitter,facebook,linkedin,instagram,shop_email,shop_website,shop_mobile,shop_whatsaap,shop_phone1,shop_phone2,shop_phone3 });   
    window.location= `/ar/dashboard/main`
    //   setgostart(noneDisplayI)
    }
  useEffect(() => {



    axios.get('/api/shops/allshops')
    .then(res => {
      setShopInfo(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

 
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
	data.append('upload_preset', 'magazine')
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
    data.append('upload_preset', 'magazine')
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
    // }
 
 
  return (

    
    <Fragment>
  
        <Navbar />

 


 
       
     <div className="aqle3-main" >
      <div className="mainword2">
      <div className="mainForm">
   
   
	  <center> 
 ff
    <div className="" >
    <div className="login-title"> هل تريد ان تقوم باعداد متجرك الان؟    </div>
    <button className="Formbutton"    onClick={cancel} style={{marginRight:'1%'}}> لاحقا </button>
    <button className="Formbutton"  onClick={gocreate}> نعم </button>
      </div>
     
 

  </center>

 


      </div>
      </div>
      </div>
    </Fragment>
  );
};

CreateShopArabic.propTypes = {
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
)(CreateShopArabic);
