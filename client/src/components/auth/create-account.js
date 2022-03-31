import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import moment from 'moment';

const  freeDate= moment();
freeDate.add(5,'days') 




const Exercise = props => (
   
  
 

  <div className='notusernames'>  {props.exercise.name} - </div>
 
 
   
 

)
export default class EditPost extends Component {
 
  constructor(props) {
    super(props);
    // this.onChangeid = this.onChangeid.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeusername = this.onChangeusername.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangepassword2 = this.onChangepassword2.bind(this);
    this.onChangeVisual_Code = this.onChangeVisual_Code.bind(this);


     

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        
      exercises: [],
      search:"",

      msg:'',
      msgName:'',
      msgUsername:'',
      msgEmail:'',
      msgPassword:'',
      msgPassword2:'',
      msgVisual_Code:'',

      name:'',
      username:"",
      email:'',
      password:'',
      password2:'',
      Visual_Code_show:'67900',

      country_name:[],
      country_code:[],
      city:[],
      state:[],
      postal:[],
      latitude:[],
      longitude:[],
      IPv4:[],

       
    }
  }
    
  componentDidMount() {


    axios.get('/api/auth/allusers')
    .then(response => {
      this.setState({ exercises: response.data })

    })
    .catch((error) => {
      console.log(error);
    })


    // axios.get('/api/posts/'+this.props.match.params.id)
    //   .then(response => {
    //     this.setState({
    //       _id: response.data._id,
    //       activation: response.data.activation,
    //     })   
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })



      axios.get('https://geolocation-db.com/json/297364b0-2bc6-11ec-a8a6-1fc54772a803')
      .then(response => {
        this.setState({
           country_name: response.data.country_name,
           country_code: response.data.country_code,
           city: response.data.city,
           state: response.data.state,
           postal: response.data.postal,
           latitude: response.data.latitude,
           longitude: response.data.longitude,
           IPv4: response.data.IPv4,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    
       
    

  }

 

  searchChanged = event => {
    this.setState({ search: event.target.value,
    
    
    })
}
   

//   onChangeid(e) {
//     this.setState({
//       _id: e.target.value
//     })
//   }

 

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeusername(e) {
    this.setState({
      username: e.target.value
    })
  }


  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

 

  onChangepassword(e) {
    this.setState({
      password: e.target.value
    })
  }


  onChangepassword2(e) {
    this.setState({
      password2: e.target.value
    })
  }



  onChangeVisual_Code(e) {
    this.setState({
    Visual_Code: e.target.value
    })
  }






  






  
  onSubmit(e) {
    e.preventDefault();

    const currentUserId = this.props.match.params.id;
    const pp = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      Visual_Code: this.state.Visual_Code,

      country_name:this.state.country_name,
      country_code:this.state.country_code,
      city:this.state.city,
      state:this.state.state,
      postal:this.state.postal,
      latitude:this.state.latitude,
      longitude:this.state.longitude,
      IPv4:this.state.IPv4,


       validity:'normal',
       shopname:'',
       shopstatus:'closed',
       ref:this.props.match.params.id,
       membership_class:'free',
       available_ads:2,
       membership_renewal_date: Date.now(),
       membership_renewal_expiry_date: freeDate,

    }
   
    if (this.state.password !== this.state.password2) {
        this.setState({ msg:'كلمة المرورغير مطابقة'})
      } 
  else if (this.state.name === '') {
        this.setState({ msgName:'الرجاء ادخال الاسم '})
      }

      else if (this.state.username === '') {
        this.setState({ msgUsername:'الرجاء ادخال اسم المستخدم '})
      }

      else if (this.state.email === '') {
        this.setState({ msgEmail:'الرجاء ادخال البريد الإلكتروني '})
      }

  

      else if (this.state.password === '') {
        this.setState({ msgPassword:'الرجاء ادخال كلمة المرور'})
      }

      else if (this.state.password2 === '') {
        this.setState({ msgPassword2:'الرجاء ادخال كلمة المرور'})
      }

      else if (this.state.Visual_Code !== this.state.Visual_Code_show) {
        this.setState({ msgVisual_Code:'الرمز المرئي غير مطابق'})
      }
else{
    axios.post('/api/users', pp)
   

   window.location = '/dashboard';
      }
  }

 

  exerciseList() {
    
    const { exercises } = this.state;
    return  exercises

    .filter(user=>{
      return user.name.indexOf(this.state.username)>=0

    })

    .map(currentexercise => {
      
      return <Exercise exercise={currentexercise}  key={currentexercise._id}/>;
    })
  }

 
  render() {
   
    return (
       
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm" >
        
  
             <center>
                <form className="login-form" onSubmit={this.onSubmit} >

               
                <div className='FormCover'>
                <div class="login-title">  حساب جديد </div>


   {/* <input className="login-input" type='text' placeholder="البحث " onChange={this.searchChanged} value={this.state.search}/> */}
  
  

       

   <span className="login-text"> الاسم الكامل </span>
                <input
                 className="login-input"
                type="text" 
                 name="name" 
                 value={this.state.name} 
                 onChange={this.onChangename}
                 autocomplete="off"
                 />

{this.state.msgName ==='' ? (
   <Fragment>
   <p className=""> {this.state.msgName}</p>
   </Fragment>
 ):(
   <Fragment>
<p className="alert-danger"> {this.state.msgName}</p>
</Fragment>

 )}




   <span className="login-text"> اسم المستخدم </span>
                <input
                 className="login-input"
                type="text" 
                 name="username" 
                 value={this.state.username} 
                 onChange={this.onChangeusername}
                 autocomplete="off"
                 />


   {this.state.username === ''?(
      <></>
   ):(
     <Fragment>
<div className='notusernames'> اسماء غير متاحة </div>
<div style={{overflow:'hidden',height:'20px',display:'flex'}} >
{this.exerciseList()}  
  </div>
  </Fragment>
   )}


{this.state.msgUsername ==='' ? (
   <Fragment>
   <p className=""> {this.state.msgUsername}</p>
   </Fragment>
 ):(
   <Fragment>
<p className="alert-danger"> {this.state.msgUsername}</p>
</Fragment>

 )}


  
 






              
 







<span className="login-text"> البريد الالكتروني </span>
                <input
                 className="login-input"
                type="text" 
                 name="email" 
                 value={this.state.email} 
                 onChange={this.onChangeemail}
                 autocomplete="off"
                 />
{this.state.msgEmail ==='' ? (
   <Fragment>
   <p className=""> {this.state.msgEmail}</p>
   </Fragment>
 ):(
   <Fragment>
<p className="alert-danger"> {this.state.msgEmail}</p>
</Fragment>

 )}




<span className="login-text"> كلمة المرور </span>
                <input
                 className="login-input"
                type="password" 
                 name="password" 
                 value={this.state.password} 
                 onChange={this.onChangepassword}
                 autocomplete="off"
                 />

{this.state.msgPassword ==='' ? (
   <Fragment>
   <p className=""> {this.state.msgPassword}</p>
   </Fragment>
 ):(
   <Fragment>
<p className="alert-danger"> {this.state.msgPassword}</p>
</Fragment>

 )}

<span className="login-text"> تأكيد كلمة المرور </span>
                <input
                 className="login-input"
                type="password" 
                 name="password2" 
                 value={this.state.password2} 
                 onChange={this.onChangepassword2}
                 autocomplete="off"
                 />
 
 {this.state.msg !=='' ? (
   <Fragment>
   <p className="alert-danger"> {this.state.msg}</p>
   </Fragment>
 ):(
   <Fragment>
<p className=""> {this.state.msg}</p>
</Fragment>

 )}


{this.state.msgPassword2 !=='' ? (
   <Fragment>
   <p className="alert-danger"> {this.state.msgPassword2}</p>
   </Fragment>
 ):(
   <Fragment>
<p className=""> {this.state.msgPassword2}</p>
</Fragment>

 )}
                 

                <span className="login-text"> الرمز المرئي </span>
               <center> <p className="alert-VisualCode"> {this.state.Visual_Code_show}  </p> </center>
                <input
                 className="login-input"
                 placeholder='تأكيد الرمز المرئي'
                 type="text" 
                 name="Visual_Code" 
                 value={this.state.Visual_Code} 
                 onChange={this.onChangeVisual_Code}
                 autocomplete="off"
                 />
 
      
       
 {this.state.msgVisual_Code !== '' ? (
   <Fragment>
   <p className="alert-danger"> {this.state.msgVisual_Code}</p>
   </Fragment>
 ):(
   <Fragment>
<p className=""> {this.state.msgVisual_Code}</p>
</Fragment>

 )}


                
             <center>  <button     type="submit" className="Formbutton">تسجيل </button>  </center>


               </div>
               
                </form>  
                </center>
               
          </div>  
          </div> 
          </div> 

    )
  }
}
