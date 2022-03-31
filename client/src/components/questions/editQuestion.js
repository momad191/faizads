import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
 
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class EditQuestion extends Component {
  constructor(props) {
    super(props);
     
 
    this.onChangeq_title = this.onChangeq_title.bind(this);
    this.onChangeq_category = this.onChangeq_category.bind(this);
    this.onChangeq_category_id = this.onChangeq_category_id.bind(this);
    this.onChangeq_description = this.onChangeq_description.bind(this);
    this.onChangeq_image = this.onChangeq_image.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        q_title: '',
        q_category: '',
        q_category_id: '',
        q_description:'',
        q_image:'',
        loading:false,
        categories: [],
        categories_Names: [],
      
    }
  }
  
  componentDidMount() {
    axios.get('/api/questions/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            q_title: response.data.q_title,
            q_category: response.data.q_category,
            q_category_id: response.data.q_category_id,          
            q_description: response.data.q_description,
            q_image: response.data.q_image
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })



      axios.get('/api/categories/')
      .then(response => {
        this.setState({ 
          categories: response.data
        
        })

      })
      .catch((error) => {
        console.log(error);
      })

 

  }

   

  onChangeq_title(e) {
    this.setState({
        q_title: e.target.value
    })
  }

  onChangeq_category(e) {
    this.setState({
        q_category: e.target.value
    })
  }

  onChangeq_category_id(e) {
    this.setState({
        q_category_id: e.target.value
    })
  }
 
 

  onChangeq_description(e) {
    this.setState({
        q_description: e.target.value
    })
  }
 
 

  onChangeq_image(e) {
    this.setState({
        q_image: e.target.files[0]
    })
  }
 
  onSubmit(e) {
    e.preventDefault();

    const contact = {
        q_title: this.state.q_title,
        q_category: this.state.q_category,
        q_description: this.state.q_description,
        q_image: this.state.q_image
    }
   
 
    axios.post('/api/questions/update/'+ this.props.match.params.id, contact)
    .then(res => console.log(res.data));

   window.location = '/questions';
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
        q_image: file.secure_url,
        loading:false
      })


    
  }




  categoriesList() {
    return this.state.categories
    .map(currentcategories => {
       return <option value= {currentcategories._id}>
                       {currentcategories.c_name}
                      </option>
    })
  }
  categories_NamesList() {
    return this.state.categories
    .map(currentcategories => {
       return <option value= {currentcategories.c_nmae}>
                       {currentcategories.c_name}
                      </option>
    })
  }

  

  render(loading) {
    return (

        <div>
 

<div>
          

        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">

        <div class="login-title"> <i class="fa fa-edit"></i> Edit the Question </div>
 
  
        <center> 
	 
	    <form className="Login-form" onSubmit={this.onSubmit}>
	 
                <input className="Forminput"
                 type="text" 
                 placeholder="market Name"
                 name="q_title" 
                 value={this.state.q_title} 
                 onChange={this.onChangeq_title}
                 >
                    
                 </input>
    

                
                 
                    <select className="Formselect"  
                        name="category" 
                        value={this.state.q_category_id} 
                        onChange={this.onChangeq_category_id}
                        > 
                        <option>chose category </option>
                    
                        { this.categoriesList() }
                
                        </select>


                        <select className="Formselect"  
                        name="category" 
                        value={this.state.q_category} 
                        onChange={this.onChangeq_category}
                        > 
                        <option>chose category name </option>
                    
                        { this.categories_NamesList() }
                
                        </select>

 
                        
                {/* <input className="Forminput"
                 type="text" 
                 placeholder="category"
                 name="q_category" 
                 value={this.state.q_category} 
                 onChange={this.onChangeq_category}
                 /> */}



                <textarea className="Formtextarea"  
                 placeholder="Description"
                 name="q_description" 
                 value={this.state.q_description} 
                 onChange={this.onChangeq_description}

                 />



                        <input 
                          className="Forminput"
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
                            {this.state.q_image && (
                          <img src={this.state.q_image}  style={{ width: '20%', height:'20%',marginBottom:''}} />
                            )}
                          <input   type="hidden" name='image' value={this.state.q_image}  onChange={this.onChangeq_image} />
                          </div>
                          </Fragment>

                        )} 



  

  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" >Edit</button>
 
	 </center>
	 </form>
     </center>


 



        </div>
        </div>
        </div>


        </div>

            
        </div>
 
 
 
        )
    }
}
