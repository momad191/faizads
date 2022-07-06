import React, { Component ,Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import Spinner from '../layout/Spinner';
import { Translation } from 'react-i18next';
import i18next from 'i18next';

export default class EditCity extends Component {
  constructor(props) {
    super(props);
     
 
    this.onChangecity_AR_name = this.onChangecity_AR_name.bind(this);
    this.onChangecity_EN_name = this.onChangecity_EN_name.bind(this);
    this.onChangecity_code = this.onChangecity_code.bind(this);
    this.onChangecity_description = this.onChangecity_description.bind(this);
    this.onChangecity_image = this.onChangecity_image.bind(this);

    this.onChangecountry_code = this.onChangecountry_code.bind(this);
    this.onChangecountry_code_upper_case = this.onChangecountry_code_upper_case.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      city_AR_name: '',
      city_EN_name: '',
      city_code: '',
      city_description:'',
      city_image:'',
      country_code:'',
      country_code_upper_case:'',
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



    axios.get('/api/countries/toeditcity/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            city_AR_name: response.data.city_AR_name,
            city_EN_name: response.data.city_EN_name,
            city_code: response.data.city_code,
            city_description: response.data.city_description,
            city_image: response.data.city_image,
            country_code: response.data.country_code,
            country_code_upper_case: response.data.country_code_upper_case
            
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

 

  }

   

  onChangecity_AR_name(e) {
    this.setState({
        city_AR_name: e.target.value
    })
  }




  onChangecity_EN_name(e) {
    this.setState({
        city_EN_name: e.target.value
    })
  } 

  onChangecity_code(e) {
    this.setState({
        city_code: e.target.value
    })
  }


 

  
  
  onChangecity_description(e) {
    this.setState({
        city_description: e.target.value
    })
  }
 
 

  onChangecity_image(e) {
    this.setState({
        city_image: e.target.files[0]
    })
  }
 


  onChangecountry_code_upper_case(e) {
    this.setState({
        country_code_upper_case: e.target.value
    })
  }

  onChangecountry_code(e) {
    this.setState({
        country_code: e.target.value
    })
  }



  onSubmit(e) {
    e.preventDefault();

    const contact = {
        city_AR_name: this.state.city_AR_name,
        city_EN_name: this.state.city_EN_name,
        city_code: this.state.city_code,
        city_description: this.state.city_description,
        city_image: this.state.city_image,

        country_code: this.state.country_code,
        country_code_upper_case: this.state.country_code_upper_case
    }
   
 
    axios.post('/api/countries/cities/update/'+ this.props.match.params.id, contact)
    .then(res => console.log(res.data));
      window.location = '/dashboard/editCity/'+ this.props.match.params.id;
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
        city_image: file.secure_url,
        loading:false
      })


    
  }



  render(loading) {
    return (

        <div>
        <div>
        {i18next.language === 'ar'&&( <Navbar /> )}
        {i18next.language === 'en'&&(<NavbarEnglish />)}
           

        <div className="aqle3-main">
        <div className="mainword2">
 
        {this.state.users.validity === "super" || this.state.users.validity === "admin" ?(

        <div className="mainForm">

        <div className="dash-title"> <i class="fa fa-edit"></i> 
        <Translation>{t => <>{t('editCountry')}</>}</Translation>
         </div>


         <center> 
    
        <Link to={`/dashboard/countries`} className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i>  
        <Translation>{t => <>{t('backButton')}</>}</Translation>
         </Link>
        </center>
 

        <center> 
	   
	    <form className="login-form" onSubmit={this.onSubmit}>
      <div className='FormCover'>  

<span> city_AR_name  </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="city_AR_name" 
                 value={this.state.city_AR_name} 
                 onChange={this.onChangecity_AR_name}
                 >    
                 </input>



<span> city_EN_name  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder=" "
                 name="city_EN_name" 
                 value={this.state.city_EN_name} 
                 onChange={this.onChangecity_EN_name}
                 >    
                 </input>



                 <span> city_code  </span>
                <input className="login-input"
                 type="text" 
            
                 name="city_code" 
                 value={this.state.city_code} 
                 onChange={this.onChangecity_code}
                 />




<span> country_code  </span>
                <input className="login-input"
                 type="text" 
                 
                 name="country_code" 
                 value={this.state.country_code} 
                 onChange={this.onChangecountry_code}
                 />

<span> country_code_upper_case </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="country_code_upper_case" 
                 value={this.state.country_code_upper_case} 
                 onChange={this.onChangecountry_code_upper_case}
                 />




<span>  city_description </span>
                <textarea className="login-input"  
                 placeholder=""
                 name="city_description" 
                 value={this.state.city_description} 
                 onChange={this.onChangecity_description}

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
                          <img src={this.state.city_image}  style={{ width: '20%', height:'20%',marginBottom:''}} />
                            )}
                          <input   type="hidden" name='image' value={this.state.city_image}  onChange={this.onChangecity_image} />
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
