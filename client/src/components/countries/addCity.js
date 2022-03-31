import React, { Component ,Fragment } from 'react';
import axios from 'axios';

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
      country_image:'',
      country_code:'',

      city_AR_name: '',
      city_EN_name: '',
      city_code: '',
      city_description:'',
      city_image:'',
      loading:false,

      citiesList:[]
      
    }
  }
  
  componentDidMount() {


    axios.get('/api/countries/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            countryid: response.data._id,
            country_AR_name: response.data.country_AR_name,
            country_image:response.data.country_image,
            country_code: response.data.country_code,
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
        city_AR_name: this.state.city_AR_name,
        city_EN_name: this.state.city_EN_name,
        city_code: this.state.city_code,
        city_description: this.state.city_description,
        city_image: this.state.city_image
    }
   
 
    axios.post('/api/countries/cities/', contact)
    .then(res => console.log(res.data));
     window.location = '/addCity/'+ this.props.match.params.id;
    }
 


   uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'magazine')
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
   
   
      return <h1> || {city.city_AR_name} || </h1>
  
  
    })
  }

  render(loading) {
    return (

        <div>
 

<div>
           
 
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">

        
        <div class="login-title">   
       
        ( {this.state.country_AR_name}   <img src={this.state.country_image}  style={{ width: '60px', height:'40px',marginRight:'10px'}} /> )
        </div>
        <div class="city-title"> <i class="fa fa-plus"></i>   إضافة المدن  </div>
        <center> 





	 
	        <form  onSubmit={this.onSubmit}>

          <div className="city-form-cover">
              <div className="city-form">

                <span> رمز الدولة </span>
                <input className="cityForminput"
                 type="text" 
                 placeholder="الدولة"
                 name="country_code" 
                 value={this.state.country_code} 
                 autocomplete="off"
                
                 >    
                 </input>


                 <span>  ادخل اسم المدينة </span>
                <input className="cityForminput"
                 type="text" 
                 placeholder="اسم المدينة باللغة العربية"
                 name="city_AR_name" 
                 value={this.state.city_AR_name} 
                 onChange={this.onChangecity_AR_name}
                 autocomplete="off"
                 >    
                 </input>
              </div>


              <div className="city-form">
                 <span> ادخل اسم المدينة بالانجليزي </span>
                 <input className="cityForminput"
                 type="text" 
                 placeholder="اسم المدينة باللغة الانجليزية "
                 name="m_EN_name" 
                 value={this.state.city_EN_name} 
                 onChange={this.onChangecity_EN_name}
                 autocomplete="off"
                 >    
                 </input>


                 <span> رمز المدينة </span>
                <input className="cityForminput"
                 type="text" 
                 placeholder="رمز المدينة"
                 name="city_code" 
                 value={this.state.city_code} 
                 onChange={this.onChangecity_code}
                 autocomplete="off"
                 />

              </div>


              <div className="city-form">
              <span> وصف مختصر او ملاحظة </span>
                <input className="cityForminput"  
                 placeholder="الوصف"
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
	 <button className="CountryFormbutton"  type="submit" name="" >اضافة المدينة</button>
 
	 </center>
	 </form>
     </center>



         <center>
         
          <h1 className="about-title"> قائمة المدن المضافة   </h1>
          {this.citiesList()}
     
         </center>

        </div>
        </div>
        </div>


        </div>

            
        </div>
 
 
 
        )
    }
}
