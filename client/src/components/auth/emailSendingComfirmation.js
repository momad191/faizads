import React, { Component, Fragment } from 'react';
import axios from 'axios';
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
    // this.onChangeemail = this.onChangeemail.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {

       // L_Img: '',
        
        email: '',
        Lang:this.props.match.params.lang,
    }
  }
  
  componentDidMount() {

    // axios.get('/api/users/'+this.props.match.params.id)
    //   .then(response => {
    //     this.setState({

    //       avatar: response.data.avatar,
    //       name: response.data.name, 
    //       email: response.data.email
          
    //     })   
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })

    // axios.get('/api/users/')
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
      email: e.target.value
    })
  }

  
 


   

 

  // onChangeL_Img(e) {
  //   this.setState({ L_Img: e.target.files[0] });
  // }
  
  // onSubmit(e) {
  //   e.preventDefault();

  //   const user = {
 
      
  //     email: this.state.email
      

  //   }
 
  //   console.log(user);

  //   axios.post('/api/auth/reset-password', user)
  //   .then(res => console.log(res.data));

  //  window.location = '/emailSendingComfirmation';
  // }
 
  render() {
    return (
 <Fragment> 
{i18next.language === 'ar'&&(<Navbar />)}
{i18next.language === 'en'&&(<NavbarEnglish />)}


 <div className="aqle3-main" >
 <div className="mainword2">
 <div className="mainForm">

 <center>
 {i18next.language === 'ar'&&(
   <Fragment> 

<br/>  <br/>  <br/> 
        {/* <div className="login-title"> The message has been sent to your email  </div>   */}
        
        <div className="login-title">  <i class="fa fa-envelope-square fa-3x" aria-hidden="true"></i> </div> 

        <div className="login-title">  قم بمراجعة بريدك الإلكتروني  </div> 

        <div className="login-title">  لقد تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني بنجاح  </div> 


   </Fragment>
 
      )} 

{i18next.language === 'en'&&(
        <Fragment> 
          <br/>  <br/>  <br/> 
        {/* <div className="login-title"> The message has been sent to your email  </div>   */}
        
        <div className="login-title">  <i class="fa fa-envelope-square fa-3x" aria-hidden="true"></i> </div> 

        <div className="login-title">   Check your email  </div> 

        <div className="login-title">  A password reset link has been sent to your email successfully </div> 
        </Fragment>

      )}

 
</center>

</div>   
</div>
</div>          
                

  </Fragment>

    )
  }
}
