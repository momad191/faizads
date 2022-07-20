import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
import { Translation } from 'react-i18next';
import i18next from 'i18next';
 
export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
        

    //this.onChangeL_Img = this.onChangeL_Img.bind(this);
   // this.onChangename = this.onChangename.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangeresetToken = this.onChangeresetToken.bind(this);

    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

       // L_Img: '',
        r_email:'',
        r_status:'',
        password: '',
        email:'',
        resetToken:''
    }
  }
 
  componentDidMount() {
    axios.get('/api/auth/resetinfo/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          r_email: response.data.r_email,
          r_status: response.data.r_status,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    // axios.get('/api/auth/'+this.props.match.params.id)
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.username),
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

  }

  onChangeemail(e) {
    this.setState({
      email: this.state.r_email
    })
  }

  onChangepassword(e) {
    this.setState({
      password: e.target.value
    })
  }


  onChangeresetToken(e) {
    this.setState({
      resetToken: e.target.value
    })
  }
  
 


   

 

  // onChangeL_Img(e) {
  //   this.setState({ L_Img: e.target.files[0] });
  // }
  
  onSubmit(e) {
    e.preventDefault();

    const user = {
     // L_Img: this.state.L_Img,
      email: this.state.email,
      password: this.state.password,
      // resetToken: this.state.resetToken
    }
  
    // console.log(user);
 
    axios.post('/api/auth/new-password/'+this.props.match.params.id, user)
    .then(res => console.log(res.data));

   window.location = '/';
  }
 
  render() {
    return (


      <Fragment>
      {i18next.language === 'ar'&&(<Navbar />)}
      {i18next.language === 'en'&&(<NavbarEnglish />)}
 

       <div className="aqle3-main" >
      <div className="mainword2">

      {this.state.r_status === 'closed'&&(
       <Fragment> 
        <center> 
       <h1 className="login-text"> 
       <Translation>{t => <>{t('linkWasSentBefore')}</>}</Translation>
        </h1>

       <h1 className="login-text">   </h1>
       <Translation>{t => <>{t('linkToSendAgain')}</>}</Translation>
        
        <a className="loginSmalltitle" href="/user/forgot-password">
        <Translation>{t => <>{t('SendAgain')}</>}</Translation>
           </a> 
        </center> 

       </Fragment>
 
     )}

{this.state.r_status === 'open'&&(
    <Fragment> 
      <div className="mainForm">
     <center> 
      <div className='FormCover' style={{width:'50%'}}> 

      <div className="login-title">  {this.state.r_email}       إعادة تعيين كلمة المرور  </div>  

 

        <form role="form"    encType="multipart/form-data" onSubmit={this.onSubmit}>
 
                            <div >
                            <span className="login-text">  البريد الالكتروني    </span>
                               <input type="text"  className="login-input"    autocomplete="off"
                                name='email'
                                value={this.state.email}
                                onChange={this.onChangeemail}
                                style={{width:'100%'}} 
                                required
                             />
                       
                           </div>


                           
                           <div  style={{width:'100%'}} >
                           <span className="login-text">   كلمة المرور    </span>
                          <input type="password"  className="login-input"    autocomplete="off"
                          name='password'
                          value={this.state.password}
                          onChange={this.onChangepassword}
                          style={{width:'100%'}} 
                          required
                          />
                          
                          </div>
    
  


      <div className="">
      {/* <label className="form-label">reset Token</label> */}
      {/* <input  className="form-contact" placeholder="" type="hidden" value={this.state.resetToken} onChange={this.onChangeresetToken} required/> */}
      </div>
 
 
      <button className="Formbutton" type="submit"  >أرسل</button>


 
     </form>
     </div>
     </center>

    </div>

</Fragment>
)}
    </div>
    </div>  
     </Fragment>


    )
  }
}
