import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import moment from 'moment';
import Moment from 'react-moment';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import emptypic from './emptypic.jpg';
//import 'moment/locale/ar'; 


import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
 
export default class MyProfile extends Component {
 
 
  constructor(props) {
  
    super(props);
      
  
    this.onChangeshop_name = this.onChangeshop_name.bind(this);
    this.onChangeshop_type = this.onChangeshop_type.bind(this);
 
    this.onChangeshop_description = this.onChangeshop_description.bind(this);
    // this.onChangeshop_img = this.onChangeshop_img.bind(this);

    this.onChangeyoutube = this.onChangeyoutube.bind(this);
    this.onChangetwitter = this.onChangetwitter.bind(this);
    this.onChangefacebook = this.onChangefacebook.bind(this);
    this.onChangelinkedin = this.onChangelinkedin.bind(this);
    this.onChangeinstagram = this.onChangeinstagram.bind(this);

     
      

    this.onSubmit = this.onSubmit.bind(this);

 

    this.state = {
      // Lang :this.props.match.params.lang,
      _id:'',
      shop_name: '',
      shop_type: '',

      shop_description: '',
      shop_img: '',
      shop_logo_img: '',
      youtube: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
   
    
      loadingshopimg:false,
      loadinglogo:false
      
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
        })   
      })
      .catch(function (error) {
        console.log(error);
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
    }
      
   
    axios.post('/api/shops/updateShop/'+this.state._id,shop);
     window.location = '/ar/dashboard/edit-shop';
    }


  



  render(loading) {
    return (
      <Fragment>
      {i18next.language === 'ar' && ( <Navbar />)}
      {i18next.language === 'en' && (  <NavbarEnglish /> )}
   
 
        <div className="aqle3-main">
        <div className="mainword2">

           
  <div className="mainForm">
  {i18next.language === 'ar' &&(

  
<Fragment>
 
  
        <center> 

        <div class="login-title">   </div>
	 
	    <form className="" onSubmit={this.onSubmit}>
      <div className='shop'>  
      <div class="login-title">  <i class="fa fa-cart fa-1x" aria-hidden="true"></i> معلومات متجرك </div>

      <div class="login-title">    

      <i class="fa fa-link fa-1x" aria-hidden="true"></i>   {'     '}
       <a href={`http://localhost:3000/ar/shops/${this.state.username}`}>  
      {`http://localhost:3000/ar/shops/${this.state.username}`}
         </a>  {'     '} <i class="fa fa-link fa-1x" aria-hidden="true"></i>

         </div>

      <center> 
     
      </center>
 


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
                      <span> loading ....</span>
                     ) : (
                       <Fragment> 
                       <span>
                         {this.state.shop_img ===''?(
                        <label for="file10" className="imageLabel">
                          <div className="shop-img-container1"> 
                     <img src={emptypic} style={{ width: '100%', height:'200px',marginLeft:'0px',borderRadius:'15px'}} />
                   </div>
                     </label>
                         ):(
                          <label for="file10" className="imageLabel">
                             <div className="shop-img-container1"> 
                          <img src={this.state.shop_img} style={{ width: '100%', height:'200px',marginLeft:'0px',borderRadius:'15px'}} />
                          </div>
                          </label>
                          )}
                      {this.state.shop_img &&(
                       <center><div className='removepic' onClick={this.removepic10}> X </div></center>
                         )}
                       <input   type="hidden" name='shop_img' value={this.state.shop_img}  onChange={this.onChangePic10} />
                       </span>
                       </Fragment>
                     )}
                    </div>
                    




                    <div className={this.state.shop_img}>
                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file11"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={this.uploadPic11} />
                     {this.state.loadinglogo ? (
                      <span> loading ....</span>
                     ) : (
                       <Fragment> 
                       <span>
                         {this.state.shop_logo_img ===''?(
                        <label for="file11" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px',borderRadius:'15px'}} />
                     </label>
                         ):(
                          <label for="file11" className="imageLabel">
                          <img src={this.state.shop_logo_img} style={{ width: '249px', height:'167px',marginLeft:'10px',borderRadius:'15px'}} />
                          </label>
                          )}
                      {this.state.shop_logo_img &&(
                       <center><div className='removepic' onClick={this.removepic11}> X </div></center>
                         )}
                       <input   type="hidden" name='shop_logo_img' value={this.state.shop_logo_img}  onChange={this.onChangePic11} />
                       </span>
                       </Fragment>
                     )}
                    </div>
                    


 

   
                <span>1اسم المتجر </span>
                <input className="login-input"
                 type="text" 
                 maxLength='40' 
                 placeholder=""
                 name="shop_name" 
                 value={this.state.shop_name} 
                 onChange={this.onChangeshop_name}
                 >    
                 </input>


                 <span>نوع المتجر </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="shop_type" 
                 value={this.state.shop_type} 
                 onChange={this.onChangeshop_type}
                 >    
                 </input>



                 <span>وصف المتجر </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="shop_description" 
                 value={this.state.shop_description} 
                 onChange={this.onChangeshop_description}
                 >    
                 </input>

  


                 <span>يوتيوب </span>
                <input className="login-input"
                 type="text" 
                 name="youtube" 
                 value={this.state.youtube} 
                 onChange={this.onChangeyoutube}
                 >    
                 </input>



                 <span>تويتر </span>
                <input className="login-input"
                 type="text" 
                 name="twitter" 
                 value={this.state.twitter} 
                 onChange={this.onChangetwitter}
                 >    
                 </input>




                 <span>فيس بوك </span>
                <input className="login-input"
                 type="text" 
                 name="facebook" 
                 value={this.state.facebook} 
                 onChange={this.onChangefacebook}
                 >    
                 </input>


                 <span>linkedin </span>
                <input className="login-input"
                 type="text" 
                 name="linkedin" 
                 value={this.state.linkedin} 
                 onChange={this.onChangelinkedin}
                 >    
                 </input>



                 <span>instagram </span>
                <input className="login-input"
                 type="text" 
                 name="instagram" 
                 value={this.state.instagram} 
                 onChange={this.onChangeinstagram}
                 >    
                 </input>





 

             
  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" >حفظ</button>
 
	 </center>

 

   </div>
	 </form>
     </center>

</Fragment>

)}
 

{i18next.language === 'en' &&(
  ///////////////////////ENGLISH/////////////////////
  
  <Fragment>
 
  
        <center> 

        <div class="login-title">   </div>
	 
	    <form className="" onSubmit={this.onSubmit}>
      <div className='shop'>  
      <div class="login-title">  <i class="fa fa-user fa-1x" aria-hidden="true"></i> Store information  </div>

      <div class="login-title">    

<i class="fa fa-link fa-1x" aria-hidden="true"></i>   {'     '}
 <a href={`http://localhost:3000/ar/shops/${this.state.shop_url}`}>  
{`http://localhost:3000/ar/shops/${this.state.shop_url}`}
   </a>  {'     '} <i class="fa fa-link fa-1x" aria-hidden="true"></i>

   </div>


      <center> 
     
      </center>




      
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
                      <span> loading ....</span>
                     ) : (
                       <Fragment> 
                       <span>
                         {this.state.shop_img ===''?(
                        <label for="file10" className="imageLabel">
                           <div className="shop-img-container1"> 
                     <img src={emptypic} style={{ width: '100%', height:'200px',marginLeft:'0px',borderRadius:'15px'}} />
                    </div>
                     </label>
                         ):(
                          <label for="file10" className="imageLabel">
                             <div className="shop-img-container1"> 
                          <img src={this.state.shop_img} style={{ width: '100%', height:'200px',borderRadius:'15px'}} />
                          </div>
                          </label>
                          )}
                      {this.state.shop_img &&(
                       <center><div className='removepic' onClick={this.removepic10}> X </div></center>
                         )}
                       <input   type="hidden" name='shop_img' value={this.state.shop_img}  onChange={this.onChangePic10} />
                       </span>
                       </Fragment>
                     )}
                    </div>
                    

                <span>Store name </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="shop_name" 
                 value={this.state.shop_name} 
                 onChange={this.onChangeshop_name}
                 >    
                 </input>


                 <span>Shop type </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="shop_type" 
                 value={this.state.shop_type} 
                 onChange={this.onChangeshop_type}
                 >    
                 </input>

 

 


                 <span>description </span>
                <input className="login-input"
                 type="text" 
                 placeholder=""
                 name="shop_description" 
                 value={this.state.shop_description} 
                 onChange={this.onChangeshop_description}
                 >    
                 </input>



             




                 <span>youtube </span>
                <input className="login-input"
                 type="text" 
                 name="youtube" 
                 value={this.state.youtube} 
                 onChange={this.onChangeyoutube}
                 >    
                 </input>



                 <span>twitter </span>
                <input className="login-input"
                 type="text" 
                 name="twitter" 
                 value={this.state.twitter} 
                 onChange={this.onChangetwitter}
                 >    
                 </input>




                 <span>facebook </span>
                <input className="login-input"
                 type="text" 
                 name="facebook" 
                 value={this.state.facebook} 
                 onChange={this.onChangefacebook}
                 >    
                 </input>


                 <span>Linkedin </span>
                <input className="login-input"
                 type="text" 
                 name="linkedin" 
                 value={this.state.linkedin} 
                 onChange={this.onChangelinkedin}
                 >    
                 </input>



                 <span>Instagram </span>
                <input className="login-input"
                 type="text" 
                 name="instagram" 
                 value={this.state.instagram} 
                 onChange={this.onChangeinstagram}
                 >    
                 </input>


  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" >Save</button>
 
	 </center>




 
  


   </div>
	 </form>
     </center>

</Fragment>

  )} 
 
 



 



        </div>
        </div>
        </div>


 
 
        </Fragment>
 
        )
    }
}
