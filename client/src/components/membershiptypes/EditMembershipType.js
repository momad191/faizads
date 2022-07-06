import React, { Component ,Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import Spinner from '../layout/Spinner';
 
export default class EditMembershipType extends Component {
  constructor(props) {
    super(props);
     
   
    this.onChangem_t_AR_name = this.onChangem_t_AR_name.bind(this);
    this.onChangem_t_EN_name = this.onChangem_t_EN_name.bind(this);
    this.onChangem_t_code = this.onChangem_t_code.bind(this);
    this.onChangem_t_description = this.onChangem_t_description.bind(this);


    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      m_t_AR_name: '',
      m_t_EN_name: '',
      m_t_code:'',
      m_t_description:'',
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


    axios.get('/api/membershiptypes/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            m_t_AR_name: response.data.m_t_AR_name,
            m_t_EN_name: response.data.m_t_EN_name,
            m_t_code: response.data.m_t_code,
            m_t_description: response.data.m_t_description,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }

   

  onChangem_t_AR_name(e) {
    this.setState({
        m_t_AR_name: e.target.value
    })
  }



  onChangem_t_EN_name(e) {
    this.setState({
        m_t_EN_name: e.target.value
    })
  }




  onChangem_t_code(e) {
    this.setState({
      m_t_code: e.target.value
    })
  }

  onChangem_t_description(e) {
    this.setState({
      m_t_description: e.target.value
    })
  }
 
  
 
  

  onSubmit(e) {
    e.preventDefault();
    const purpose11 = {
        m_t_AR_name: this.state.m_t_AR_name,
        m_t_EN_name: this.state.m_t_EN_name,
        m_t_code: this.state.m_t_code,
        m_t_description: this.state.m_t_description,
    }
    axios.post('/api/membershiptypes/update/'+ this.props.match.params.id, purpose11)
    .then(res => console.log(res.data));
     window.location = '/dashboard/Addmembershiptype';
    }





  render(loading) {
    return (

        <div>
 

<div>
           

        <div className="aqle3-main">
        <div className="mainword2">
        <Navbar />
        {this.state.users.validity === "super" || this.state.users.validity === "admin" ?(

        <div className="mainForm">

        <div class="login-title"> تعديل نوع العضوية <i class="fa fa-edit"></i>  </div>
        <Link to="/ar/dashboard/Addmembershiptype" class="login-title" style={{textDecoration:'none',marginLeft:'10px'}}>  <i className="fa fa-arrow-left fa-1x"></i> رجوع </Link>

        <center> 
	 
	    <form className="login-form" onSubmit={this.onSubmit}>
      <div className='FormCover'> 
	 

                <span>نوع العضوية باللغة العربية </span>
                <input className="login-input"
                 type="text" 
                 placeholder="نوع العضوية العربي"
                 name="m_t_AR_name" 
                 value={this.state.m_t_AR_name} 
                 onChange={this.onChangem_t_AR_name}
                 >    
                 </input>


                 <span>نوع العضوية بالانجليزي </span>
                 <input className="login-input"
                 type="text" 
                 placeholder="نوع العضوية بالانجليزي "
                 name="m_t_EN_name" 
                 value={this.state.m_t_EN_name} 
                 onChange={this.onChangem_t_EN_name}
                 >    
                 </input>



                 <span>رمز العضوية </span>
                 <input className="login-input"
                 type="text" 
                 placeholder="رمز العضوية "
                 name="m_t_code" 
                 value={this.state.m_t_code} 
                 onChange={this.onChangem_t_code}
                 >    
                 </input>



                 <span>وصف العضوية </span>
                 <input className="login-input"
                 type="text" 
                 placeholder="وصف العضوية "
                 name="m_t_description" 
                 value={this.state.m_t_description} 
                 onChange={this.onChangem_t_description}
                 >    
                 </input>

  
  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" >تعديل</button>
 
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
