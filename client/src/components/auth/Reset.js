import React, { Fragment,Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
       

 
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        email: '',
        Lang:this.props.match.params.lang,
    }
  }
  
  componentDidMount() {
    axios.get('/api/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({

          // avatar: response.data.avatar,
          // name: response.data.name, 
          email: response.data.email
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('/api/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

   

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

 
  
  onSubmit(e) {
    e.preventDefault();

    const user = {      
      email: this.state.email
    }
  
    // console.log(user);

    axios.post('/api/auth/resetpassword', user)
    .then(res => console.log(res.data));

   window.location = '/user/emailSendingComfirmation';
  }
 
  render() {
    return (

      <Fragment>

{this.state.Lang === 'ar'?(
        <Navbar />
      ):(
      <NavbarEnglish />
      )}

  <div className="aqle3-main" >
  <div className="mainword2">
  <div className="mainForm">

 
  {this.state.Lang === 'ar'?(
       
   
  <center>
 <form role="form" className="login-form"  encType="multipart/form-data" onSubmit={this.onSubmit}>   
 <div className='FormCover'>   
 <div className="login-title"> استعادة كلمة المرور </div>                            
<input type="text" className="login-input" placeholder=" البريد الالكتروني " aria-describedby="basic-addon1" autocomplete="off"
 name='email'
 value={this.state.email}
 onChange={this.onChangeemail}
 style={{color:'#000',fontWeight:'bold',float:'right',direction:'rtl'}}
 required
/> 

<button className="Formbutton"  type='submit' value='Login' >ارسل</button>
</div>
</form>
</center>


):(
  



  <center>
  <form role="form" className="login-form"  encType="multipart/form-data" onSubmit={this.onSubmit}>   
  <div className='FormCover'>   
  <div className="login-title"> Restore password </div>                            
 <input type="text" className="login-input" placeholder=" Email " aria-describedby="basic-addon1" autocomplete="off"
  name='email'
  value={this.state.email}
  onChange={this.onChangeemail}
  style={{color:'#000',fontWeight:'bold',float:'right',direction:'rtl'}}
  required
 /> 
 
 <button className="Formbutton"  type='submit' value='Login' >Send</button>
 </div>
 </form>
 </center>


  )}



</div>   
  </div>
  </div>
     
     </Fragment>

    )
  }
}
