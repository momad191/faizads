import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import Navbar from '../../components/layout/Navbar';
export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.onChangeid = this.onChangeid.bind(this);
    this.onChangeActivation = this.onChangeActivation.bind(this);


    

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      _id: '',
      activation:'',

      
    }
  }
    
  componentDidMount() {
    axios.get('/api/posts/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          _id: response.data._id,
          activation: response.data.activation,


          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    
       
    

  }

 

   

  onChangeid(e) {
    this.setState({
      _id: e.target.value
    })
  }

 
  onChangeActivation(e) {
    this.setState({
      activation: e.target.value
    })
  }






  






  
  onSubmit(e) {
    e.preventDefault();

    const currentUserId = this.props.match.params.id;
    const pp = {
      _id: this.state._id,
      activation: this.state.activation,
    }
   
  
    axios.post('/api/posts/activatePost/'+ currentUserId, pp)
   

   window.location = '/ar/dashboard/posts/';
  }




 
  render() {
   
    return (
      <> 
      <Navbar />
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm" >
        
               
         
         
              
             <center>
                <form className="login-form" onSubmit={this.onSubmit} >

                <div class="login-title">   تفعيل الإعلان </div>
                <div className='FormCover'>
        

 
                
                <input 
                className="Forminput"
                maxlength="66"
                 type="hidden" 
                 name="_id" 
                 value={this.state._id} 
                 onChange={this.onChangeid}
                 />

       

                <span>  </span>
                <input
                 className="Forminput"
                type="hidden" 
                 name="activation" 
                 value={this.state.activation} 
                 onChange={this.onChangeActivation}
                 autocomplete="off"
                 />
 


                   <span> </span>
                   <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%'}}
                   name="activation" 
                   value={this.state.activation} 
                  onChange={this.onChangeActivation}
                   > 
                  <option value='yes'> تفعيل </option>
                  <option value='no'> عدم تفعيل </option>
                  
                  </select>

 



      
                
             <center>  <button     type="submit" className="Formbutton">تفعيل </button>  </center>


               </div>
               
                </form>  
                </center>
               
          </div>  
          </div> 
          </div> 
          </>
    )
  }
}
