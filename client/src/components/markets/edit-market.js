import React, { Component ,Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import Spinner from '../layout/Spinner';
import { Translation } from 'react-i18next';
import i18next from 'i18next';
 
export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
       
  
    this.onChangem_AR_name = this.onChangem_AR_name.bind(this);
    this.onChangem_EN_name = this.onChangem_EN_name.bind(this);
    this.onChangem_code = this.onChangem_code.bind(this);
    this.onChangem_fontawesome_class = this.onChangem_fontawesome_class.bind(this);
    this.onChangem_description = this.onChangem_description.bind(this);
    this.onChangem_image = this.onChangem_image.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      m_AR_name: '',
      m_EN_name: '',
      m_code: '',
      m_fontawesome_class:'',
      m_description:'',
      m_image:'',
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


    axios.get('/api/markets/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          m_AR_name: response.data.m_AR_name,
          m_EN_name: response.data.m_EN_name,
          m_code: response.data.m_code,
          m_fontawesome_class: response.data.m_fontawesome_class,
          m_description: response.data.m_description,
          m_image: response.data.m_image
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

 

  }

   

  onChangem_AR_name(e) {
    this.setState({
      m_AR_name: e.target.value
    })
  }



  onChangem_EN_name(e) {
    this.setState({
      m_EN_name: e.target.value
    })
  }

  onChangem_code(e) {
    this.setState({
      m_code: e.target.value
    })
  }
 

  onChangem_fontawesome_class(e) {
    this.setState({
      m_fontawesome_class: e.target.value
    })
  }

  
 
  
  onChangem_description(e) {
    this.setState({
        m_description: e.target.value
    })
  }
 
 

  onChangem_image(e) {
    this.setState({
      m_image: e.target.files[0]
    })
  }
 
  onSubmit(e) {
    e.preventDefault();

    const market = {
      m_AR_name: this.state.m_AR_name,
      m_EN_name: this.state.m_EN_name,
      m_code: this.state.m_code,
      m_fontawesome_class: this.state.m_fontawesome_class,
      m_description: this.state.m_description,
      m_image: this.state.m_image
    }
   
 
    axios.post('/api/markets/update/'+ this.props.match.params.id, market)
    .then(res => console.log(res.data));
     window.location = '/dashboard/markets';
    }



   uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'faizmarkets')
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
        m_image: file.secure_url,
        loading:false
      })
  }



  render(loading) {
    return (

        <div>
        <div>

        {i18next.language === 'ar'&&(<Navbar />)}
        {i18next.language === 'en'&&(<NavbarEnglish />)}
                  

        <div className="aqle3-main">
        <div className="mainword2">
       
        {this.state.users.validity === "super" || this.state.users.validity === "admin" ?(

        <div className="mainForm">

        <div class="login-title"><i class="fa fa-edit"></i><Translation>{t => <>{t('editMarket')}</>}</Translation>   </div>
        <center><Link to="/dashboard/markets" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> <Translation>{t => <>{t('backButton')}</>}</Translation> </Link></center>

 

        <center> 
	 
	    <form className="login-form" onSubmit={this.onSubmit}>
      <div className='FormCover'> 
	 
 
      <span> <Translation>{t => <>{t('market_ar_name')}</>}</Translation>  </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="m_AR_name" 
                 value={this.state.m_AR_name} 
                 onChange={this.onChangem_AR_name}
                 >    
                 </input>


 <span> <Translation>{t => <>{t('market_en_name')}</>}</Translation>  </span>
                 <input className="login-input"
                 type="text" 
                 placeholder="الاسم باللغة الانجليزية "
                 name="m_EN_name" 
                 value={this.state.m_EN_name} 
                 onChange={this.onChangem_EN_name}
                 >    
                 </input>


 <span> <Translation>{t => <>{t('market_code')}</>}</Translation>  </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="m_code" 
                 value={this.state.m_code} 
                 onChange={this.onChangem_code}
                 />




<Translation>{t => <>{t('fontawesome')}</>}</Translation>
                <input className="login-input"
                 type="text" 
                 placeholder="fontawesome"
                 name="m_fontawesome_class" 
                 value={this.state.m_fontawesome_class} 
                 onChange={this.onChangem_fontawesome_class}
                 />



<span> <Translation>{t => <>{t('market_description')}</>}</Translation>  </span>
                <textarea className="login-input"  
                 placeholder="الوصف"
                 name="m_description" 
                 value={this.state.m_description} 
                 onChange={this.onChangem_description}

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
                          <img src={this.state.m_image}  style={{ width: '20%', height:'20%',marginBottom:''}} />
                            )}
                          <input   type="hidden" name='image' value={this.state.m_image}  onChange={this.onChangem_image} />
                          </div>
                          </Fragment>

                        )} 



  

  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" >
   <Translation>{t => <>{t('save')}</>}</Translation>
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
