import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import moment from 'moment';

const  freeDate= moment();
freeDate.add(5,'days') 

export default class EditPost extends Component {
 
  constructor(props) {
    super(props);

    this.onChangevisual_code = this.onChangevisual_code.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {   
      msg:'',
      visual_code:'',
    }
  }
    
  componentDidMount() {

  }

 

  onChangevisual_code(e) {
    this.setState({
    visual_code: e.target.value
    })
  }

   
  onSubmit(e) {
    e.preventDefault();

   
    const pp = {
    visual_code: this.state.visual_code,
    }
   
    if (this.state.visual_code === '') {
        this.setState({ msg:'الرجاء ادخال الرمز المرئي'})
      } 
 
else{
    axios.post('/api/visualcodes',pp)
    

   window.location = '/dashboard';
      }
  }




 
  render() {
   
    return (
       
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm" >
        
  
             <center>
                <form className="login-form" onSubmit={this.onSubmit} >

               
                <div className='FormCover'>
                <div class="login-title">  ادخل رمز مرئي جديد </div>

 
                
    

       

            <span className="login-text"> visual_code </span>
                <input
                 className="login-input"
                type="text" 
                 name="visual_code" 
                 value={this.state.visual_code} 
                 onChange={this.onChangevisual_code}
                 autocomplete="off"
                 />

{this.state.msg ==='' ? (
   <Fragment>
   <p className=""> {this.state.msg}</p>
   </Fragment>
 ):(
   <Fragment>
<p className="alert-danger"> {this.state.msg}</p>
</Fragment>

 )}

 
 
                
             <center>  <button     type="submit" className="Formbutton">ادخال </button>  </center>


               </div>
               
                </form>  
                </center>
               
          </div>  
          </div> 
          </div> 

    )
  }
}
