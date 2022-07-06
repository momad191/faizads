import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
import Spinner from '../layout/Spinner';
import { Translation } from 'react-i18next';
import i18next from 'i18next';

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
       

    //this.onChangeL_Img = this.onChangeL_Img.bind(this);
   // this.onChangename = this.onChangename.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
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

    //       // avatar: response.data.avatar,
    //       name: response.data.name, 
    //       email: response.data.email
          
    //     })   
    //   })
    //   .catch(function (error) {
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

 <div className='alert-info'>

 لقد تم إرسال رسالة على عنوان  بريدك الالكتروني تحتوي على الخطوة الثانية والأخيرة لإتمام عملية إنشاء حسابك. نرجو منك تفقد صندوق بريدك الإلكتروني 
</div>

   </Fragment>
 
      )}

  {i18next.language === 'en'&&(
        <Fragment> 
          <br/>  <br/>  <br/> 
        {/* <div className="login-title"> The message has been sent to your email  </div>   */}
        
        <div className="login-title">  <i class="fa fa-envelope-square fa-3x" aria-hidden="true"></i> </div> 

        <div className="login-title">   Check your email  </div> 

         
        <div className='alert-info'>
        A message has been sent to your email address containing the second and final step to complete the process of creating your account. Please check your email inbox
        </div>
        
        
        
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
