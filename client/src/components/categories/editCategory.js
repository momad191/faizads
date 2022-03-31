import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
 
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
        newmarkets_id:[]
        
      
    }
  }
  
  componentDidMount() {
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
        <div className="mainForm">

        <div class="login-title"> <i class="fa fa-edit"></i> تعديل التصنيف </div>
 

        <center> 
	 
	    <form className="login-form" onSubmit={this.onSubmit}>


                 <div className=''>
                  <span>السوق  بال اي دي</span>
                  <select className="FormCover" 
                   style={{width:'100%',marginLeft:'3%'}}
                  name="market_id" 
                  value={this.state.market_id} 
                  onChange={this.onChangemarket_id}
                  > 
                  <option value='nothing chosen'> اختر السوق الذي تود ان تضيف له تصنيف </option>
                  { this.newmarket_id() }       
                  </select>
                  </div>

 

	 
                  <div className=''>
                  <span> بالكود السوق </span>
                  <select className="FormCover" 
                   style={{width:'100%',marginLeft:'3%'}}
                  name='market_code'
                  value={this.state.market_code} 
                  onChange={this.onChangemarket_code}
                  > 
                  <option value='nothing chosen'> اختر السوق الذي تود ان تضيف له تصنيف </option>
                  { this.newmarkets() }       
                  </select>
                  </div>


                 <input className="FormCover"
                 type="hidden" 
                 placeholder=""
                 name="market_id" 
                 value={this.state.market_id} 
                 onChange={this.onChangemarket_id}
                 >  
                 </input>

  

                <span>اسم التصنيف العربي </span>
                <input className="FormCover"
                 type="text" 
                 placeholder=""
                 name="c_AR_name" 
                 value={this.state.c_AR_name} 
                 onChange={this.onChangec_AR_name}
                 >
                 </input>



                 <span>اسم التصنيف الانجليزي </span>
                <input className="FormCover"
                 type="text" 
                 placeholder=""
                 name="c_EN_name" 
                 value={this.state.c_EN_name} 
                 onChange={this.onChangec_EN_name}
                 >
                 </input>





                <span>رمز التصنيف  </span>
                <input className="FormCover"
                 type="text" 
                 placeholder=""
                 name="c_code" 
                 value={this.state.c_code} 
                 onChange={this.onChangec_code}
                 >
                 </input>

 


                 <span>الوصف </span>
                <textarea className="FormCover"  
                 placeholder=""
                 name="c_description" 
                 value={this.state.c_description} 
                 onChange={this.onChangec_description}

                 />


                        <span>رقع الصورة  </span>
                        <input 
                          className="FormCover"
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
	 <button className="Formbutton"  type="submit" name="" > تعديل</button>
 
	 </center>
	 </form>
     </center>


 



        </div>
        </div>
        </div>


 
 
 
        )
    }
}
