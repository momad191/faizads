import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import Navbar from '../../components/layout/Navbar';

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.onChangeid = this.onChangeid.bind(this);
    this.onChangeMain_paragraph = this.onChangeMain_paragraph.bind(this);
    this.onChangetitle = this.onChangetitle.bind(this);


    

    

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      _id: '',
      Main_paragraph:'',
      title:''
      
    }
  }
      
  componentDidMount() {
    axios.get('/api/posts/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          _id: response.data._id,
          Main_paragraph: response.data.Main_paragraph,
          title: response.data.title

          
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

 

  onChangeMain_paragraph(e) {
    this.setState({
      Main_paragraph: e.target.value
    })
  }





  onChangetitle(e) {
    this.setState({
      title: e.target.value
    })
  }

 
  
  onSubmit(e) {
    e.preventDefault();

    const currentUserId = this.props.match.params.id;
    const pp = {
      _id: this.state._id,
      Main_paragraph: this.state.Main_paragraph,
      title:  this.state.title,
    }
   
  
    axios.post('/api/posts/update/'+ currentUserId, pp)
   

   window.location = '/ar/dashboard/posts';
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

                <div class="login-title"> <i class="fa fa-edit"></i> تعديل الإعلان </div>
                <div className='FormCover'>
        


                
                <input 
                className="Forminput"
                maxlength="66"
                 type="hidden" 
                 name="_id" 
                 value={this.state._id} 
                 onChange={this.onChangeid}
                 />


                <span className="list-details">العنوان </span>
                 <input 
                className="Forminput"
                maxlength="66"
                 type="text" 
                 name="title" 
                 value={this.state.title} 
                 onChange={this.onChangetitle}
                 />

       
 
              <span className="list-details">الإعلان </span>
                <textarea 
                className="Forminput"
               
                rows='10'
                maxlength="66"
                 name="Main_paragraph" 
                 value={this.state.Main_paragraph} 
                 onChange={this.onChangeMain_paragraph}
                 />











 

      
                
             <center>  <button     type="submit" className="Formbutton">تعديل </button>  </center>


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
