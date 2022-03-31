import React, { Component ,Fragment } from 'react';
import axios from 'axios';

export default class EditCountry extends Component {
  constructor(props) {
    super(props);
     
 
    this.onChangecountry_AR_name = this.onChangecountry_AR_name.bind(this);
    this.onChangecountry_EN_name = this.onChangecountry_EN_name.bind(this);
    this.onChangecountry_code = this.onChangecountry_code.bind(this);
    this.onChangecountry_description = this.onChangecountry_description.bind(this);
    this.onChangecountry_image = this.onChangecountry_image.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      country_AR_name: '',
      country_EN_name: '',
      country_code: '',
      country_description:'',
      country_image:'',
      loading:false
      
    }
  }
  
  componentDidMount() {
    axios.get('/api/countries/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            country_AR_name: response.data.country_AR_name,
            country_EN_name: response.data.country_EN_name,
            country_code: response.data.country_code,
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
        country_description: this.state.country_description,
        country_image: this.state.country_image
    }
   
 
    axios.post('/api/countries/update/'+ this.props.match.params.id, contact)
    .then(res => console.log(res.data));
     window.location = '/editCountry/'+ this.props.match.params.id;
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
        country_image: file.secure_url,
        loading:false
      })


    
  }



  render(loading) {
    return (

        <div>
 

<div>
           

        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">

        <div class="login-title"> <i class="fa fa-edit"></i> تعديل الدولة </div>
 

        <center> 
	 
	    <form className="login-form" onSubmit={this.onSubmit}>
	 
                <input className="FormCover"
                 type="text" 
                 placeholder="اسم الدولة باللغة العربية"
                 name="country_AR_name" 
                 value={this.state.country_AR_name} 
                 onChange={this.onChangecountry_AR_name}
                 >    
                 </input>


                 <input className="FormCover"
                 type="text" 
                 placeholder="اسم الدولة باللغة الانجليزية "
                 name="m_EN_name" 
                 value={this.state.country_EN_name} 
                 onChange={this.onChangecountry_EN_name}
                 >    
                 </input>


                <input className="FormCover"
                 type="text" 
                 placeholder="رمز الدولة"
                 name="country_code" 
                 value={this.state.country_code} 
                 onChange={this.onChangecountry_code}
                 />



                <textarea className="FormCover"  
                 placeholder="الوصف"
                 name="country_description" 
                 value={this.state.country_description} 
                 onChange={this.onChangecountry_description}

                 />



                        <input 
                          className="FormCover"
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
	 <button className="Formbutton"  type="submit" name="" >تعديل</button>
 
	 </center>
	 </form>
     </center>


 



        </div>
        </div>
        </div>


        </div>

            
        </div>
 
 
 
        )
    }
}
