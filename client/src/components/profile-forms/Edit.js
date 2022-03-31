import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import moment from 'moment';
import Moment from 'react-moment';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import emptypic from './emptypic.jpg';
import emptypic1 from './emptypic1.jpg';
//import 'moment/locale/ar'; 

export default class MyProfile extends Component {
 

  constructor(props) {
  
    super(props);
      
  
    this.onChangeshop_name = this.onChangeshop_name.bind(this);
    this.onChangeshop_type = this.onChangeshop_type.bind(this);
 
    this.onChangeshop_description = this.onChangeshop_description.bind(this);


    this.onChangeyoutube = this.onChangeyoutube.bind(this);
    this.onChangetwitter = this.onChangetwitter.bind(this);
    this.onChangefacebook = this.onChangefacebook.bind(this);
    this.onChangelinkedin = this.onChangelinkedin.bind(this);
    this.onChangeinstagram = this.onChangeinstagram.bind(this);


    this.onChangeshop_email = this.onChangeshop_email.bind(this);
    this.onChangeshop_website = this.onChangeshop_website.bind(this);
    this.onChangeshop_whatsaap = this.onChangeshop_whatsaap.bind(this);
    this.onChangeshop_phone1 = this.onChangeshop_phone1.bind(this);
    this.onChangeshop_phone2 = this.onChangeshop_phone2.bind(this);
    this.onChangeshop_phone3 = this.onChangeshop_phone3.bind(this);

     
      

    this.onSubmit = this.onSubmit.bind(this);

 

    this.state = {
      Lang :this.props.match.params.lang,
      _id:'',
      shop_name: '',
      shop_type: '',
      

      shop_description: '',
      shop_img: '',
      shop_logo_img:'',
      youtube: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',

      shop_email: '',
      shop_website: '',
      shop_whatsaap: '',
      shop_phone1: '',
      shop_phone2: '',
      shop_phone3: '',
    
      markets:[],
      loadingshopimg:false,
      loadinglogo:false,
      alert:''
      
    }
  } 
     
  componentDidMount() {
    axios.get('/api/shops/usershop')
      .then(response => {
        this.setState({
          _id: response.data._id,
          username: response.data.username,
          shop_name: response.data.shop_name,
          shop_type: response.data.shop_type,
          shop_description: response.data.shop_description,
          shop_img: response.data.shop_img,
          shop_logo_img: response.data.shop_logo_img,
          youtube: response.data.youtube,
          twitter: response.data.twitter,
          facebook: response.data.facebook,
          linkedin: response.data.linkedin,
          instagram: response.data.instagram,

          shop_email: response.data.shop_email,
          shop_website: response.data.shop_website,
          shop_whatsaap: response.data.shop_whatsaap,
          shop_phone1: response.data.shop_phone1,
          shop_phone2: response.data.shop_phone2,
          shop_phone3: response.data.shop_phone3,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

       
 
      axios.get('/api/markets')
      .then(response => {
        
        this.setState({
          markets: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

   

  onChangeshop_name(e) {
    this.setState({
        shop_name: e.target.value
    })
  }


  onChangeshop_type(e) {
    this.setState({
        shop_type: e.target.value
    })
  }


  onChangeshop_description(e) {
    this.setState({
        shop_description: e.target.value
    })
  }



  onChangeshop_img(e) {
    this.setState({
        shop_img: e.target.value
    })
  }

  onChangeshop_logo_img(e) {
    this.setState({
      shop_logo_img: e.target.value
    })
  }

  

  onChangeyoutube(e) {
    this.setState({
        youtube: e.target.value
    })
  }


  onChangetwitter(e) {
    this.setState({
        twitter: e.target.value
    })
  }



  onChangefacebook(e) {
    this.setState({
        facebook: e.target.value
    })
  }



  onChangelinkedin(e) {
    this.setState({
        linkedin: e.target.value
    })
  }


  onChangeinstagram(e) {
    this.setState({
        instagram: e.target.value
    })
  }


  onChangeshop_email(e) {
    this.setState({
      shop_email: e.target.value
    })
  }


  onChangeshop_website(e) {
    this.setState({
      shop_website: e.target.value
    })
  }


  onChangeshop_whatsaap(e) {
    this.setState({
      shop_whatsaap: e.target.value
    })
  }


  onChangeshop_phone1(e) {
    this.setState({
      shop_phone1: e.target.value
    })
  }


  onChangeshop_phone2(e) {
    this.setState({
      shop_phone2: e.target.value
    })
  }

  onChangeshop_phone3(e) {
    this.setState({
      shop_phone3: e.target.value
    })
  }

 
  

  uploadPic10 = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'magazine')
    this.setState({
      loadingshopimg:true
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
        shop_img: file.secure_url,
        loadingshopimg:false
      })
  }


   removepic10 = ()=>{
    this.setState({
        shop_img:'',
      })
    }
 
 




    uploadPic11 = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'magazine')
      this.setState({
        loadinglogo:true
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
        shop_logo_img: file.secure_url,
        loadinglogo:false
        })
    }
  
  
     removepic11 = ()=>{
      this.setState({
        shop_logo_img:'',
        })
      }

 
  async onSubmit(e) {
  e.preventDefault();

    const shop = {
        shop_name:this.state.shop_name ,
        shop_type: this.state.shop_type ,
        shop_description: this.state.shop_description ,
        shop_img: this.state.shop_img ,
        shop_logo_img: this.state.shop_logo_img ,
        youtube: this.state.youtube ,
        twitter: this.state.twitter ,
        facebook: this.state.facebook ,
        linkedin: this.state.linkedin ,
        instagram: this.state.instagram ,


        shop_email: this.state.shop_email ,
        shop_website: this.state.shop_website ,
        shop_whatsaap: this.state.shop_whatsaap ,
        shop_phone1: this.state.shop_phone1 ,
        shop_phone2: this.state.shop_phone2 ,
        shop_phone3: this.state.shop_phone3 ,
    }
      
   if(this.state.shop_type ===''){
    
    this.setState({
      alert:'نوع المتجر ضروري'
    })
       
   }else{

    axios.post('/api/shops/updateShop/'+this.state._id,shop);
    window.location = '/ar/dashboard/shops/edit';

   }

    }


  

    // allMarketsList(){
    //     this.state.markets
    //   .map(market =>(

    //      <option value={market.m_code}> {market.m_AR_name}  </option>
         
    //    ))
    
    // }



  render(loading) {
    return (
      <Fragment>
         
      <Navbar />
    
   
 
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">

           
  <div className="">
 

  
<Fragment>
 
  
        <center> 

	 
	    <form className="" onSubmit={this.onSubmit}>
      <div className='shop'>  
 
    <div class="login-title">    

      <i class="fa fa-link fa-1x" aria-hidden="true"></i>   {'     '}
       <a href={`http://localhost:3000/shops/${this.state.username}`}>  
      {`http://localhost:3000/shops/${this.state.username}`}
         </a>  {'     '} <i class="fa fa-link fa-1x" aria-hidden="true"></i>

         </div> 

   
 

      <div className=""> 
                 <div className={this.state.shop_img}>
                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file10"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={this.uploadPic10} />
                     {this.state.loadingshopimg ? (
                      <div style={{width:'200px',height:'200px'}}> loading ....</div> 
                     ) : (
                       <Fragment> 
                      
                       <span>
                         {this.state.shop_img ===''?(
                        <label for="file10" className="imageLabel">
                          <div className="shop-img-container1"> 
                     <img src={emptypic}  style={{ height:'200px',width:'100%'}} />
                     </div>
                     </label>
                         ):(
                          <label for="file10" className="imageLabel">
                            <div className="shop-img-container1"> 
                          <img src={this.state.shop_img} style={{ height:'200px',width:'100%'}} />
                          </div>
                          </label>
                          )} 
                      
                       <input   type="hidden" name='shop_img' value={this.state.shop_img}  onChange={this.onChangePic10} />
                       </span>
                        
                       </Fragment>
                     )}
                    </div>
                 </div>




                 <div className=""> 
                 <div className={this.state.shop_logo_img}>
                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file11"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={this.uploadPic11} />
                     {this.state.loadinglogo ? (
                     <div style={{width:'200px',height:'200px'}}> loading ....</div> 
                     ) : (
                       <Fragment> 
                         
                       <span>
                         {this.state.shop_logo_img ===''?(
                        <label for="file11" className="imageLabel">
                       <div className="smallimg1"> 
                     <img src={emptypic1}  />
                     </div>
                     </label>
                         ):(
                          <label for="file11" className="imageLabel">
                             <div className="smallimg1"> 
                          <img src={this.state.shop_logo_img}  />
                          </div>
                          </label>
                          )} 
                      
                       <input   type="hidden" name='shop_logo_img' value={this.state.shop_logo_img}  onChange={this.onChangePic11} />
                       </span>
                      
                       </Fragment>
                     )}
                    </div>
                 </div>

<center> 
 
<div className="login-form" > 
 
                <span className='login-text'>اسم المتجر </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="shop_name" 
                 value={this.state.shop_name} 
                 onChange={this.onChangeshop_name}
                 >    
                 </input>

  
                 <span className='login-text'>نوع المتجر </span>

                <select className="login-input"
                 type="text" 
                 placeholder=""
                 name="shop_type" 
                 value={this.state.shop_type} 
                 onChange={this.onChangeshop_type}
                 >   
              <option className="login-input" value=''> لم تحدد نوع السوق المستهدفة </option>
               
              {this.state.markets.map(market=>(
                  <option  className="optiontitleinput" required value={market.m_code}> {market.m_AR_name}  </option>
                    ))}
                 </select>



                <span className='login-text'> وصف مختصر للمتجر </span>
                <input className="login-input"
                 type="text" 
                 placeholder="150 حرف"
                 name="shop_description" 
                 value={this.state.shop_description} 
                 onChange={this.onChangeshop_description}
                 maxlength="150"
                 >    
                 </input>

  


                 <span className='login-text'>يوتيوب </span>
                <input className="login-input"
                 type="text" 
                 name="youtube" 
                 value={this.state.youtube} 
                 onChange={this.onChangeyoutube}
                 >    
                 </input>



                 <span className='login-text'>تويتر </span>
                <input className="login-input"
                 type="text" 
                 name="twitter" 
                 value={this.state.twitter} 
                 onChange={this.onChangetwitter}
                 >    
                 </input>




                 <span className='login-text'>فيس بوك </span>
                <input className="login-input"
                 type="text" 
                 name="facebook" 
                 value={this.state.facebook} 
                 onChange={this.onChangefacebook}
                 >    
                 </input>


                 <span className='login-text'>linkedin </span>
                <input className="login-input"
                 type="text" 
                 name="linkedin" 
                 value={this.state.linkedin} 
                 onChange={this.onChangelinkedin}
                 >    
                 </input>



                 <span className='login-text'>instagram </span>
                <input className="login-input"
                 type="text" 
                 name="instagram" 
                 value={this.state.instagram} 
                 onChange={this.onChangeinstagram}
                 >    
                 </input>



                 <span className='login-text'> البريد الإلكتروني </span>
                <input className="login-input"
                 type="text" 
                 name="shop_email" 
                 value={this.state.shop_email} 
                 onChange={this.onChangeshop_email}
                 >    
                 </input>




                 <span className='login-text'> الموقع الإلكتروني </span>
                <input className="login-input"
                 type="text" 
                 name="shop_website" 
                 value={this.state.shop_website} 
                 onChange={this.onChangeshop_website}
                 >    
                 </input>




                 <span className='login-text'> للتواصل عبر الواتس اب </span>
                <input className="login-input"
                 type="text" 
                 name="shop_whatsaap" 
                 value={this.state.shop_whatsaap} 
                 onChange={this.onChangeshop_whatsaap}
                 >    
                 </input>



                 <span className='login-text'> الهاتف 1 </span>
                <input className="login-input"
                 type="text" 
                 name="shop_phone1" 
                 value={this.state.shop_phone1} 
                 onChange={this.onChangeshop_phone1}
                 >    
                 </input>



                 <span className='login-text'> الهاتف 2 </span>
                <input className="login-input"
                 type="text" 
                 name="shop_phone2" 
                 value={this.state.shop_phone2} 
                 onChange={this.onChangeshop_phone2}
                 >    
                 </input>


 

                 <span className='login-text'> الهاتف 3 </span>
                <input className="login-input"
                 type="text" 
                 name="shop_phone3" 
                 value={this.state.shop_phone3} 
                 onChange={this.onChangeshop_phone3}
                 >    
                 </input>










 

             
  	  
	  <center>
      {this.state.alert === '' ?(
    <div className=''> {this.state.alert} </div>

      ):(

        <div className='alert-danger'> {this.state.alert} </div>

      )}

	 <button className="Formbutton"  type="submit" name="" >حفظ</button>
 
	 </center>

     </div>
     </center>
   </div>
	 </form>
     </center>

</Fragment>


 



 


 
        </div>
        </div>
        </div>
        </div>


 
 
        </Fragment>
 
        )
    }
}
