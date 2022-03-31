import React, { Fragment, useEffect ,useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import Moment from 'react-moment';
import { register } from '../../actions/auth';
import { addvisual } from '../../actions/auth';
    
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
  
import { addSubscription } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
   
 
import PropTypes from 'prop-types';
import axios from 'axios';
import { Input } from 'postcss';
     
const Register = ({ setAlert ,register,addvisual, isAuthenticated, match }) => {

  const  freeDate= moment();
  freeDate.add(5,'days') 


  const [search,setSearch]= useState("")
  
  const [visualCode,setVisualCode]= useState([])
  const [userInfo,setUserInfo]= useState([])
  // const [alert,setAlert]= useState('')
  const [geolocation,setgeolocation]= useState([])

  const country_name = geolocation.country_name;
  const country_code = geolocation.country_code;
  const city = geolocation.city;
  const state = geolocation.state;
  const postal = geolocation.postal;
  const latitude = geolocation.latitude;
  const longitude = geolocation.longitude;
  const IPv4 = geolocation.IPv4;
  const validity='normal';
  const shopname = '';
  const shopstatus='closed'; 
  const ref = match.params.id;
  const membership_class = 'free';
  const Payment_status ='no'
  const available_ads = 2;
  const membership_renewal_date = Date.now();
  const membership_renewal_expiry_date = freeDate;
 const visualCodeShow = visualCode.visual_code+1;

 const Lang = match.params.lang;
 

 
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username:'',
    email: '',
    password: '',
    password2: '',
    Visual_Code:''

  }); 
  
  const { first_name,last_name,username, email, password, password2, Visual_Code} = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


   
   
  const onSubmit = async e => {
    e.preventDefault();
    if (first_name === '') { 
      setAlert('الاسم الأول مطلوب');
    }
    else if (last_name === '') { 
      setAlert('الاسم الاخير مطلوب');
    }
    else if (username === '') { 
      setAlert('اسم المستخدم مطلوب');
    }
    else if (email === '') { 
      setAlert('البريد الالكتروني مطلوب');
    }
    else if (password === '') { 
      setAlert('كلمة المرور مطلوبة');
    }

    else if (password !== password2) { 
      setAlert('كلمة المرور غير مطابقة');
    }

    else if (Visual_Code === '') { 
      setAlert('الرمز المرئي مطلوب');
    }

    else if (Visual_Code !== visualCodeShow.toString()) { 
      setAlert('الرمز المرئي غير مطابق');
    }
     
    
     else{
       register({ first_name,last_name,username, email, password,validity,country_name,country_code, city, state, postal, latitude, longitude, IPv4, shopname, shopstatus, ref, membership_class,Payment_status,available_ads,membership_renewal_date, membership_renewal_expiry_date,Visual_Code });
       addvisual({Visual_Code});
    }
  };


    
  useEffect(() => {

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

 


 }, []);



  // if (isAuthenticated && Lang === 'ar') {
  //   return <Redirect to='/ar/dashboard/main' />;
  // } 

  // if (isAuthenticated && Lang === 'en') {
  //   return <Redirect to='/en/dashboard/main' />;
  // } 

  
  
 
  return (
    <Fragment>
      {Lang === 'ar'?(
        <Navbar />
      ):(
      <NavbarEnglish />
      )}
       
     <div className="aqle3-main" >
      <div className="mainword2">
      <div className="mainForm">

   
     
      
      
      {/* <div className="loginSmalltitle" >
        <i className='fa fa-user' />  
      </div> */}
 {Lang === 'ar'?(
 <Fragment> 

      <center> 
      <form className="login-form" onSubmit={e => onSubmit(e)}>
      <div className='FormCover'> 
      {Lang === 'ar' ?(
      <div className="login-title"> حساب جديد  </div>
      ):(
     <div className="login-title"> New Account  </div>
      )}   




      <div className=''>
         


    

      <div className='' style={{width:'100%',display:'flex',direction:'rtl'}}>

         <div className='' style={{width:'50%'}}>
       
          <span className="login-text">  الاسم الأول    </span>
        
         
          <input
           className="login-input"
            type='text'
            placeholder=''
            name='first_name'
            value={first_name}
            onChange={e => onChange(e)}
          />
           </div>



          <div className='' style={{width:'50%',marginRight:'10px'}}>
          <span className="login-text">  الاسم الاخير    </span>
          <input
           className="login-input"
            type='text'
            placeholder=''
            name='last_name'
            value={last_name}
            onChange={e => onChange(e)}
          />
           </div>


     



           </div>
         
        

           <div className=''>
      <span className="login-text">  أدخل معرفا  فريدًا لهذا الحساب    </span>
      <div className="identity-text">  
        <ul> 
          <li> من 5 إلى 10 أحرف</li>
          <li> أبجدي رقمي</li>
          <li> لا مسافات أو علامات ترقيم</li>
            
        </ul>
      </div> 
          <input
           className="login-input"
            type='text'
            placeholder='nazim191:مثال'
            name='username'
            value={username}
            onChange={e => onChange(e)}
          />
           </div>
 
 {username === ''?(
      <></>
   ):(
     <Fragment>
 <div className='notusernamestitle'>  </div>
 <div style={{overflow:'hidden',height:'',display:'flex'}} >
  
   {userInfo
.filter(post=>{
  return post.username.indexOf(username)>=0
})
.map(post => {
  return  <h1 className='notusernames'> {post.username} -</h1>;
})}

</div>

</Fragment>
   )}

        <div className=''>
        <span className="login-text"> البريد الالكتروني </span>
          <input
            className="login-input"
            type='email'
            placeholder=''
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          </div>
         
          </div>
          
          {/* <p className="smallText">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </p> */}
    
       
    <div className='' style={{width:'100%',display:'flex',direction:'rtl'}}>


       <div className='' style={{width:'50%'}}>
        <span className="login-text"> كلمة المرور </span>
          <input
            className="login-input"
            type='password'
            placeholder=''
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
          </div>



          <div className='' style={{width:'50%',marginRight:'10px'}}>
          <span className="login-text"> تأكيد كلمة المرور </span>
          <input
            className="login-input"
            type='password'
            placeholder=''
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
          </div>





          </div>

 
    
          
   
          <div className=''>
            <img src=''/>
         
            <span className="login-text"> الرمز المرئي </span>
           <center> <p className="alert-VisualCode">{visualCodeShow}</p> </center>
          <input
            className="login-input"
            type='text'
            placeholder='ادخل الرمز المرئي'
            name='Visual_Code'
            value={Visual_Code}
            onChange={e => onChange(e)}
          />
          </div>



          <div className=''>
           
   
          <input
            className="login-input"
            type='hidden'
            // name='Visual_Code'
            value={ref}
            // onChange={e => onChange(e)}
          />
          </div>

   

<p className='login-alert'> {alert} </p>
</div>
   
        
       <Alert />
        <button className="Formbutton" type='submit'> تسجيل </button>
        
      </form>
      </center>

      <div className="loginSmalltitle">
  لدي حساب <Link to='/ar/user/login'>دخول</Link>
 </div>

      </Fragment>
 ):(




  <Fragment> 

  <center> 
  <form className="login-form" onSubmit={e => onSubmit(e)}>
  <div className='FormCover'> 

 <div className="login-title"> New Account  </div>
  




  <div className=''>
     




  <div className='' style={{width:'100%',display:'flex',direction:'ltr'}}>

     <div className='' style={{width:'50%'}}>
   
      <span className="login-text">  First name    </span>
    
     
      <input
       className="login-input"
        type='text'
        placeholder=''
        name='first_name'
        value={first_name}
        onChange={e => onChange(e)}
      />
       </div>



      <div className='' style={{width:'50%',marginLeft:'10px'}}>
      <span className="login-text">  Last name    </span>
      <input
       className="login-input"
        type='text'
        placeholder=''
        name='last_name'
        value={last_name}
        onChange={e => onChange(e)}
      />
       </div>


 



       </div>
     
     

       <div className=''>
       <span className="login-text">  Enter a unique name for this account    </span>
      <div className="identity-text-english">  
        <ul> 
          <li> 5-10 characters</li>
          <li> Alphanumeric </li>
          <li> No spaces or punctuation</li>
        </ul>
      </div> 
      <input
       className="login-input"
        type='text'
        placeholder='example:fahad191'
        name='username'
        value={username}
        onChange={e => onChange(e)}
        autoComplete='off'
      />
       </div>

{username === ''?(
  <></>
):(
 <Fragment>
<div className='notusernamestitle'>   </div>
<div style={{overflow:'hidden',height:'',display:'flex'}} >

{userInfo
.filter(post=>{
return post.username.indexOf(username)>=0
})
.map(post => {
return  <h1 className='notusernames'> {post.username} -</h1>;
})}

</div>

</Fragment>
)}

    <div className=''>
    <span className="login-text"> Email </span>
      <input
        className="login-input"
        type='email'
        placeholder=''
        name='email'
        value={email}
        onChange={e => onChange(e)}
      />
      </div>
     
      </div>
      
      {/* <p className="smallText">
        This site uses Gravatar so if you want a profile image, use a
        Gravatar email
      </p> */}

   
<div className='' style={{width:'100%',display:'flex',direction:'ltr'}}>


   <div className='' style={{width:'50%'}}>
    <span className="login-text"> Password </span>
      <input
        className="login-input"
        type='password'
        placeholder=''
        name='password'
        value={password}
        onChange={e => onChange(e)}
      />
      </div>



      <div className='' style={{width:'50%',marginLeft:'10px'}}>
      <span className="login-text"> confirm password </span>
      <input
        className="login-input"
        type='password'
        placeholder=''
        name='password2'
        value={password2}
        onChange={e => onChange(e)}
      />
      </div>





      </div>



      

      <div className=''>
        <img src=''/>
     
        <span className="login-text"> visual code </span>
       <center> <p className="alert-VisualCode">{visualCodeShow}</p> </center>
      <input
        className="login-input"
        type='text'
        placeholder='Enter the visual code'
        name='Visual_Code'
        value={Visual_Code}
        onChange={e => onChange(e)}
      />
      </div>



      <div className=''>
       

      <input
        className="login-input"
        type='hidden'
        // name='Visual_Code'
        value={ref}
        // onChange={e => onChange(e)}
      />
      </div>



<p className='login-alert'> {alert} </p>
</div>

    
   <Alert />
    <button className="Formbutton" type='submit'> Register </button>
    
  </form>
  </center>


  <div className="loginSmalltitle">
  I have an account <Link to='/en/user/login'>Login</Link>
 </div>
 
  </Fragment>
  
  )}
     
    

      </div>
      </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  addvisual: PropTypes.func.isRequired,
  
  isAuthenticated: PropTypes.bool
};
  
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
 
export default connect(
  mapStateToProps,
  { setAlert,register,addvisual }
)(Register);
