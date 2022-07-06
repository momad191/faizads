import React, { Component ,Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import Spinner from '../layout/Spinner';
import { Translation } from 'react-i18next';
import i18next from 'i18next';
 
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
 
export default class EditCategory extends Component {
  constructor(props) {
    super(props);
     
    this.onChangemarket_id = this.onChangemarket_id.bind(this);
    this.onChangemarket_code = this.onChangemarket_code.bind(this);
    this.onChangec_AR_name = this.onChangec_AR_name.bind(this);
    this.onChangec_EN_name = this.onChangec_EN_name.bind(this);
    this.onChangec_code = this.onChangec_code.bind(this);
    this.onChangec_description = this.onChangec_description.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        market_id:'',
        market_code:'',
        c_AR_name: '',
        c_EN_name:'',
        c_code:'',
        c_description:'',
        image:'',
        loading:false,
        newmarkets:[],
        newmarkets_id:[],
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


    axios.get('/api/categories/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          market_id: response.data.market_id,
          market_code: response.data.market_code,
          c_AR_name: response.data.c_AR_name,
          c_EN_name: response.data.c_EN_name,
          c_code: response.data.c_code,
          c_description: response.data.c_description,
          image: response.data.image
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  
      axios.get('/api/markets')
      .then(response => {
        this.setState({ newmarkets: response.data })

      })
      .catch((error) => {
        console.log(error);
      })




      axios.get('/api/markets')
      .then(response => {
        this.setState({ newmarkets_id: response.data })

      })
      .catch((error) => {
        console.log(error);
      })

  }



  onChangemarket_id(e) {
    this.setState({
      market_id: e.target.value
    })
  }


  onChangemarket_code(e) {
    this.setState({
      market_code: e.target.value
    })
  }


  onChangec_AR_name(e) {
    this.setState({
      c_AR_name: e.target.value
    })
  }


  onChangec_EN_name(e) {
    this.setState({
      c_EN_name: e.target.value
    })
  }


  onChangec_code(e) {
    this.setState({
      c_code: e.target.value
    })
  }

 
 

  onChangec_description(e) {
    this.setState({
        c_description: e.target.value
    })
  }
 
 

  onChangeimage(e) {
    this.setState({
      image: e.target.files[0]
    })
  }
 
  onSubmit(e) {
    e.preventDefault();

    const pp = {
      market_id : this.state.market_id,
      market_code : this.state.market_code,
      c_AR_name: this.state.c_AR_name,
      c_EN_name: this.state.c_EN_name,
      c_code: this.state.c_code,
      c_description: this.state.c_description,
      image: this.state.image
    }
   
      axios.post('/api/categories/update/'+ this.props.match.params.id, pp)
      .then(res => console.log(res.data));

      window.location = '/ar/dashboard/categories/';
      }


   uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'faizcategories')
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
        image: file.secure_url,
        loading:true
      })


    
  }


 

  newmarkets() {
    return this.state.newmarkets
    .map(market => {
       return <option value= {market.m_code}>
                       {market.m_AR_name}
                      </option>
    })
  }


  newmarket_id() {
    return this.state.newmarkets_id
    .map(market => {
       return <option value= {market._id}>
                       {market.m_AR_name}
                      </option>
    })
  }



  render(loading) {
    return (

        <div className="aqle3-main">
        <div className="mainword2">
        {i18next.language === 'ar'&&(<Navbar />)}
        {i18next.language === 'en'&&(<NavbarEnglish />)}
         
        {this.state.users.validity === "super" || this.state.users.validity === "admin" ?(

        <div className="mainForm">

        <div class="login-title"> <i class="fa fa-edit"></i> <Translation>{t => <>{t('editCategory')}</>}</Translation> </div>
        <center> 
        <Link to="/dashboard/categories" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> <Translation>{t => <>{t('backButton')}</>}</Translation>  </Link>
        </center>
 

        <center> 
	 
	    <form className="login-form" onSubmit={this.onSubmit}>
      <div className='FormCover'>  

                 <div className=''>
                  <span><Translation>{t => <>{t('market_code')}</>}</Translation></span>
                  <select className="login-input" 
                 
                  name="market_id" 
                  value={this.state.market_id} 
                  onChange={this.onChangemarket_id}
                  > 
                  <option value='nothing chosen'> choose </option>
                  { this.newmarket_id() }       
                  </select>
                  </div>

 

	 
                  <div className=''>
                  <span> <Translation>{t => <>{t('market_code')}</>}</Translation> </span>
                  <select className="login-input" 
                
                  name='market_code'
                  value={this.state.market_code} 
                  onChange={this.onChangemarket_code}
                  > 
                  <option value='nothing chosen'> choose </option>
                  { this.newmarkets() }       
                  </select>
                  </div>


                 <input className="login-input"
                 type="hidden" 
                 placeholder=""
                 name="market_id" 
                 value={this.state.market_id} 
                 onChange={this.onChangemarket_id}
                 >  
                 </input>

  
 
                <span> <Translation>{t => <>{t('category_ar_name')}</>}</Translation> </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="c_AR_name" 
                 value={this.state.c_AR_name} 
                 onChange={this.onChangec_AR_name}
                 >
                 </input>



                 <span><Translation>{t => <>{t('category_en_name')}</>}</Translation>  </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="c_EN_name" 
                 value={this.state.c_EN_name} 
                 onChange={this.onChangec_EN_name}
                 >
                 </input>





                <span><Translation>{t => <>{t('category_code')}</>}</Translation>  </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="c_code" 
                 value={this.state.c_code} 
                 onChange={this.onChangec_code}
                 >
                 </input>

 


                 <span><Translation>{t => <>{t('category_description')}</>}</Translation>  </span>
                <textarea className="login-input"  
                 placeholder=""
                 name="c_description" 
                 value={this.state.c_description} 
                 onChange={this.onChangec_description}

                 />


                        <span><Translation>{t => <>{t('upload_picture')}</>}</Translation>  </span>
                        <input 
                          className="login-input"
                          placeholder=""
                          type="file"
                          name="file"
                          //value={m_image} 
                          onChange={this.uploadImage} />


                        {loading ? (
                          <h3>Loading...</h3>
                        ) : (
                          <Fragment>
                            <div>
                            {this.state.image && (
                          <img src={this.state.image}  style={{ width: '20%', height:'20%',marginBottom:''}} />
                            )}
                          <input   type="hidden" name='image' value={this.state.image}  onChange={this.onChangeimage} />
                          </div>
                          </Fragment>

                        )} 



  

  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" > <Translation>{t => <>{t('save')}</>}</Translation></button>
 
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


 
 
 
        )
    }
}
