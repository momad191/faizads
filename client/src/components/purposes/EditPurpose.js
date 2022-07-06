import React, { Component ,Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import Spinner from '../layout/Spinner';
import { Translation } from 'react-i18next';
import i18next from 'i18next';
 
export default class EditPurpose extends Component {
  constructor(props) {
    super(props);
     
   
    this.onChangep_AR_name = this.onChangep_AR_name.bind(this);
    this.onChangep_EN_name = this.onChangep_EN_name.bind(this);
    this.onChangep_code = this.onChangep_code.bind(this);
    this.onChangep_description = this.onChangep_description.bind(this);


    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      p_AR_name: '',
      p_EN_name: '',
      p_code: '',
      p_description: '',
      loading:false,
      users:[]
    }
  }
  
  componentDidMount() {

    axios.get('/api/auth')
    .then(response => {
      this.setState({
          users: response.data,
      })   
    })
    .catch((err) => {
      console.log(err);
    })


    axios.get('/api/purposes/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          p_AR_name: response.data.p_AR_name,
          p_EN_name: response.data.p_EN_name,
          p_code: response.data.p_code,
          p_description: response.data.p_description,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

 

  }

   

  onChangep_AR_name(e) {
    this.setState({
      p_AR_name: e.target.value
    })
  }



  onChangep_EN_name(e) {
    this.setState({
      p_EN_name: e.target.value
    })
  }


  onChangep_code(e) {
    this.setState({
      p_code: e.target.value
    })
  }


  onChangep_description(e) {
    this.setState({
      p_description: e.target.value
    })
  }


 

  
 
  

  onSubmit(e) {
    e.preventDefault();
    const purpose11 = {
      p_AR_name: this.state.p_AR_name,
      p_EN_name: this.state.p_EN_name,
      p_code: this.state.p_code,
      p_description: this.state.p_description,
    }
    axios.post('/api/purposes/update/'+ this.props.match.params.id, purpose11)
    .then(res => console.log(res.data));
     window.location = '/dashboard/Addpurpose';
    }





  render(loading) {
    return (

        <div>
 

<div>
           

        <div className="aqle3-main">
        <div className="mainword2">
        {i18next.language === 'ar'&&(<Navbar />)}
        {i18next.language === 'en'&&(<NavbarEnglish />)}

          {this.state.users.validity === "super" || this.state.users.validity === "admin" ?(

        <div className="mainForm">

        <div class="login-title"><i class="fa fa-edit"></i><Translation>{t => <>{t('purpose_edit_title')}</>}</Translation> </div>
        <Link to="/ar/dashboard/Addpurpose" class="login-title" style={{textDecoration:'none',marginLeft:'10px'}}>  <i className="fa fa-arrow-left fa-1x"></i> <Translation>{t => <>{t('backButton')}</>}</Translation> </Link>

        <center> 
	 
	    <form className="login-form" onSubmit={this.onSubmit}>
      <div className='FormCover'> 
	 

                 <span><Translation>{t => <>{t('purposes_AR_name')}</>}</Translation> </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="p_AR_name" 
                 value={this.state.p_AR_name} 
                 onChange={this.onChangep_AR_name}
                 >    
                 </input>


                 <span><Translation>{t => <>{t('purposes_EN_name')}</>}</Translation> </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="p_EN_name" 
                 value={this.state.p_EN_name} 
                 onChange={this.onChangep_EN_name}
                 >    
                 </input>


                 <span><Translation>{t => <>{t('purposes_code')}</>}</Translation> </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="p_code" 
                 value={this.state.p_code} 
                 onChange={this.onChangep_code}
                 >    
                 </input>

                 <span><Translation>{t => <>{t('purposes_description')}</>}</Translation> </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="p_description" 
                 value={this.state.p_description} 
                 onChange={this.onChangep_description}
                 >    
                 </input>


  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" ><Translation>{t => <>{t('save')}</>}</Translation></button>
 
	 </center>
   </div>
	 </form>
     </center>


 



        </div>



):(
  <center> 
  <Spinner />
 </center>
          
  )}

        </div>
        </div>


        </div>
        </div>
        )
    }
}
