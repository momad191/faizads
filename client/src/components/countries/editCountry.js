import React, { Component ,Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import Spinner from '../layout/Spinner';
import { Translation } from 'react-i18next';
import i18next from 'i18next';

export default class EditCountry extends Component {
  constructor(props) {
    super(props);
     
 
    this.onChangecountry_AR_name = this.onChangecountry_AR_name.bind(this);
    this.onChangecountry_EN_name = this.onChangecountry_EN_name.bind(this);
    this.onChangecountry_code = this.onChangecountry_code.bind(this);
    this.onChangecountry_code_upper_case = this.onChangecountry_code_upper_case.bind(this);
    this.onChangecountry_description = this.onChangecountry_description.bind(this);
    this.onChangecountry_image = this.onChangecountry_image.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      country_AR_name: '',
      country_EN_name: '',
      country_code: '',
      country_code_upper_case:'',
      country_description:'',
      country_image:'',
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



    axios.get('/api/countries/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            country_AR_name: response.data.country_AR_name,
            country_EN_name: response.data.country_EN_name,
            country_code: response.data.country_code,
            country_code_upper_case: response.data.country_code_upper_case,
            country_description: response.data.country_description,
            country_image: response.data.country_image
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

 

  }

   

  onChangecountry_AR_name(e) {
    this.setState({
        country_AR_name: e.target.value
    })
  }



  onChangecountry_EN_name(e) {
    this.setState({
        country_EN_name: e.target.value
    })
  }

  onChangecountry_code(e) {
    this.setState({
        country_code: e.target.value
    })
  }

  onChangecountry_code_upper_case(e) {
    this.setState({
      country_code_upper_case: e.target.value
    })
  }
 

  
  
  
  onChangecountry_description(e) {
    this.setState({
        country_description: e.target.value
    })
  }
 
 

  onChangecountry_image(e) {
    this.setState({
        country_image: e.target.files[0]
    })
  }
 
  onSubmit(e) {
    e.preventDefault();

    const contact = {
        country_AR_name: this.state.country_AR_name,
        country_EN_name: this.state.country_EN_name,
        country_code: this.state.country_code,
        country_code_upper_case: this.state.country_code_upper_case,
        country_description: this.state.country_description,
        country_image: this.state.country_image
    }
   
 
    axios.post('/api/countries/update/'+ this.props.match.params.id, contact)
    .then(res => console.log(res.data));
     window.location = '/dashboard/editCountry/'+ this.props.match.params.id;
    }



   uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'faizcountries')
    this.setState({
        loading:true
      })
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/momad191/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

     
    this.setState({
        country_image: file.secure_url,
        loading:false
      })


    
  }



  render(loading) {
    return (

        <div>
        <div>
        {i18next.language === 'ar'&&(
          <Navbar />
          )}


          {i18next.language === 'en'&&(
          <NavbarEnglish />
          )}
           

        <div className="aqle3-main">
        <div className="mainword2">
 
        {this.state.users.validity === "super" || this.state.users.validity === "admin" ?(

        <div className="mainForm">

        <div className="dash-title"> <i class="fa fa-edit"></i> 
        <Translation>{t => <>{t('editCountry')}</>}</Translation>
         </div>


         <center> 
    
        <Link to="/ar/dashboard/countries" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i>  
        <Translation>{t => <>{t('backButton')}</>}</Translation>
         </Link>
        </center>
 

        <center> 
	   
	    <form className="login-form" onSubmit={this.onSubmit}>
      <div className='FormCover'>  

<span> <Translation>{t => <>{t('country_ar_name')}</>}</Translation>  </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="country_AR_name" 
                 value={this.state.country_AR_name} 
                 onChange={this.onChangecountry_AR_name}
                 >    
                 </input>



<span> <Translation>{t => <>{t('country_en_name')}</>}</Translation>  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=" "
                 name="m_EN_name" 
                 value={this.state.country_EN_name} 
                 onChange={this.onChangecountry_EN_name}
                 >    
                 </input>


<span> <Translation>{t => <>{t('country_code')}</>}</Translation>  </span>
                <input className="login-input"
                 type="text" 
                 placeholder="رمز الدولة"
                 name="country_code" 
                 value={this.state.country_code} 
                 onChange={this.onChangecountry_code}
                 />

<span> <Translation>{t => <>{t('country_code_upper_case')}</>}</Translation>  </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="country_code_upper_case" 
                 value={this.state.country_code_upper_case} 
                 onChange={this.onChangecountry_code_upper_case}
                 />




<span> <Translation>{t => <>{t('country_description')}</>}</Translation>  </span>
                <textarea className="login-input"  
                 placeholder=""
                 name="country_description" 
                 value={this.state.country_description} 
                 onChange={this.onChangecountry_description}

                 />



                        <input 
                          className="login-input"
                          placeholder="Upload an image"
                          type="file"
                          name="file"
                          //value={m_image} 
                          onChange={this.uploadImage} />


                        {loading ? (
                          <h3>Loading...</h3>
                        ) : (
                          <Fragment>
                            <div>
                            {this.state.m_image && (
                          <img src={this.state.country_image}  style={{ width: '20%', height:'20%',marginBottom:''}} />
                            )}
                          <input   type="hidden" name='image' value={this.state.country_image}  onChange={this.onChangecountry_image} />
                          </div>
                          </Fragment>

                        )} 



  
 
  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" >
   <span> <Translation>{t => <>{t('save')}</>}</Translation>  </span>
   </button>
 
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
