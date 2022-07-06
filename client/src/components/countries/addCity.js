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
      
 
    this.onChangecity_AR_name = this.onChangecity_AR_name.bind(this);
    this.onChangecity_EN_name = this.onChangecity_EN_name.bind(this);
    this.onChangecity_code = this.onChangecity_code.bind(this);
    this.onChangecity_description = this.onChangecity_description.bind(this);
    this.onChangecity_image = this.onChangecity_image.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      countryid:'',
      country_AR_name:'',
      country_EN_name:'',
      country_image:'',
      country_code:'',
      country_code_upper_case:'',

      city_AR_name: '',
      city_EN_name: '',
      city_code: '',
      city_description:'',
      city_image:'',
      loading:false,

      citiesList:[],
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
            countryid: response.data._id,
            country_AR_name: response.data.country_AR_name,
            country_EN_name: response.data.country_EN_name,
            country_image:response.data.country_image,
            country_code: response.data.country_code,
            country_code_upper_case:response.data.country_code_upper_case
        })   
      })
      .catch(function (error) {
        console.log(error);
      })


 

      axios.get('/api/countries/cities/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            citiesList: response.data,
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
 
  onSubmit(e) {
    e.preventDefault();

    const contact = {
        countryid: this.state.countryid,
        country_code:this.state.country_code,
        country_code_upper_case:this.state.country_code_upper_case,

        city_AR_name: this.state.city_AR_name,
        city_EN_name: this.state.city_EN_name,
        city_code: this.state.city_code,
        city_description: this.state.city_description,
        city_image: this.state.city_image
    }
   
 
    axios.post('/api/countries/cities/', contact)
    .then(res => console.log(res.data));
     window.location = '/dashboard/addCity/'+ this.props.match.params.id;
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





  citiesList(){
    return  this.state.citiesList
    .map(city => {
      // return <option value={classifiedsCategory.c_code}> {classifiedsCategory.c_AR_name}  </option>
     if(i18next.language === 'ar'){
      return <Fragment> 
      <h1> || {city.city_AR_name} || </h1> 
      <Link to={`/dashboard/editCity/${city._id}`}>  تعديل </Link>
      </Fragment>

     }

     if(i18next.language === 'en'){
      return <Fragment> 
      <h1> || {city.city_EN_name} || </h1> 
      <Link to={`/dashboard/editCity/${city._id}`}>  تعديل </Link>
      </Fragment>

     }

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
 
       {i18next.language === 'ar'&&(
        <div className="dash-title">          
       (   <img src={this.state.country_image}  style={{ width: '60px', height:'40px',marginRight:'10px'}} /> {this.state.country_AR_name}  )
       
        </div>
        )}


       {i18next.language === 'en'&&(
        <div className="dash-title">          
       (    <img src={this.state.country_image}  style={{ width: '60px', height:'40px',marginRight:'10px'}} /> {this.state.country_EN_name} )
       
        </div>
        )}


    <center> 
    <Link to="/dashboard/countries" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i>  
    <Translation>{t => <>{t('backButton')}</>}</Translation>
     </Link>
    </center>


  <div class="city-title"> <i class="fa fa-plus"></i>  <Translation>{t => <>{t('addCity')}</>}</Translation> </div>






 <center> 



 
 
	 
	        <form  onSubmit={this.onSubmit}>

          <div className="city-form-cover">
              <div className="city-form">

                <span className="cityForminput"> <Translation>{t => <>{t('country_code')}</>}</Translation>  </span>
                <input className="cityForminput"
                 type="text" 
                 placeholder="country"
                 name="country_code" 
                 value={this.state.country_code} 
                 autocomplete="off"
                
                 >    
                 </input>

                 <span className="cityForminput"> <Translation>{t => <>{t('country_code_upper_case')}</>}</Translation>  </span>
                <input className="cityForminput"
                 type="text" 
                 name="country_code_upper_case" 
                 value={this.state.country_code_upper_case} 
                 autocomplete="off"
                 >    
                 </input>

                 

                 <span className="cityForminput">   <Translation>{t => <>{t('country_ar_name')}</>}</Translation>  </span>
                <input className="cityForminput"
                 type="text" 
                 placeholder=""
                 name="city_AR_name" 
                 value={this.state.city_AR_name} 
                 onChange={this.onChangecity_AR_name}
                 autocomplete="off"
                 >    
                 </input>
              </div>


              <div className="city-form">
                 <span className="cityForminput">  <Translation>{t => <>{t('country_en_name')}</>}</Translation>  </span>
                 <input className="cityForminput"
                 type="text" 
                 placeholder=""
                 name="m_EN_name" 
                 value={this.state.city_EN_name} 
                 onChange={this.onChangecity_EN_name}
                 autocomplete="off"
                 >    
                 </input>


                 <span className="cityForminput">  <Translation>{t => <>{t('city_code')}</>}</Translation>  </span>
                <input className="cityForminput"
                 type="text" 
                 placeholder=""
                 name="city_code" 
                 value={this.state.city_code} 
                 onChange={this.onChangecity_code}
                 autocomplete="off"
                 />

              </div>


              <div className="city-form">
              <span className="cityForminput">  <Translation>{t => <>{t('country_description')}</>}</Translation> </span>
                <input className="cityForminput"  
                 placeholder=""
                 name="city_description" 
                 value={this.state.city_description} 
                 onChange={this.onChangecity_description}     
                 autocomplete="off"
                 />

</div> 
</div>
<div className="city-form-widly">

                        <input 
                          className="cityForminput"
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
                            {this.state.city_image && (
                          <img src={this.state.city_image}  style={{ width: '20%', height:'20%',marginBottom:''}} />
                            )}
                          <input   type="hidden" name='image' value={this.state.city_image}  onChange={this.onChangecity_image} />
                          </div>
                          </Fragment>

                        )} 


</div>


  	  
	  <center>
	 <button className="CountryFormbutton"  type="submit" name="" >
   <Translation>{t => <>{t('addButton')}</>}</Translation>
   </button>
 
   
 
	 </center>
	 </form>
     </center>
 


         <center>
         
          <div className="about-title">  <Translation>{t => <>{t('city_list')}</>}</Translation>   </div>
           {this.citiesList()}
         
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
