import React, { Fragment,useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addQuestion } from '../../actions/question';
import { setAlert } from '../../actions/alert';
import axios from 'axios';

const Addquestion = ({setAlert, addQuestion}) => {
 
  const [categories,setCategories]= useState([])
  useEffect(()=>{
      
    axios.get('/api/categories')
    .then(res => {
      console.log(res);
      setCategories(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  
},[categories])


    const [q_image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        q_title: '',
        q_category: '',
        q_description: '',
        q_category_id:''
      });
 
      const { q_title ,q_category_id, q_category, q_description } = formData;


      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

      const onChangeimage = e => {
        setImage({ q_image: e.target.files[0] });
        };


        const onSubmit = async e => {
            e.preventDefault();
            addQuestion({q_title,q_category_id, q_category, q_description, q_image});
             setAlert('Question added', 'success');
            
          };


          const uploadImage = async e => {
            const files = e.target.files
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'magazine')
            setLoading(true)
            const res = await fetch(
              'https://api.cloudinary.com/v1_1/momad191/image/upload',
              {
                method: 'POST',
                body: data
              }
            )
            const file = await res.json()
        
            setImage(file.secure_url)
            setLoading(false)
          }




    return (
        <div>
 

<div>
          

        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">

        <div class="login-title"> <i class="fa fa-plus-circle"></i>  Ask a Question about any online product or service you searching for </div>
 

        <center> 
	 
	    <form className="Login-form" onSubmit={e => onSubmit(e)}>
	 
               <input className="Forminput"
                 type="text" 
                 placeholder="market Name"
                 name="q_title" 
                 value={q_title} 
                 onChange={e => onChange(e)}
                 />
 
        <select className="Formselect"  
        name="q_category_id" 
        value={q_category_id} 
        onChange={e => onChange(e)}
        > 
        <option>chose category </option>
       
        {categories.map(catego=>(
                  <option required value={catego._id}> {catego.c_name} </option>
                    ))}
 
        </select>

  
                 

		  <select className="Formselect"  
        name="q_category" 
        value={q_category} 
        onChange={e => onChange(e)}
        > 
        <option>chose category </option>
       
        {categories.map(catego=>(
                  <option required value={catego.c_name}> {catego.c_name} </option>
                    ))}
 
        </select>



             <textarea className="Formtextarea"  
                 placeholder="Description"
                 name="q_description" 
                 value={q_description} 
                 onChange={e => onChange(e)}

                 />




                          <input 
                          className="Forminput"
                          placeholder="Upload an image"
                          type="file"
                          name="file"
                          //value={m_image} 
                          onChange={uploadImage} />


                        {loading ? (
                          <h3>Loading...</h3>
                        ) : (
                          <Fragment>
                            <div>
                          <img src={q_image} style={{ width: '30%', height:'30%',marginBottom:''}} />
                          <input   type="hidden" name='q_image' value={q_image}  onChange={onChangeimage} />
                          </div>
                          </Fragment>

                        )}


  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" >Add</button>
 
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
 

Addquestion.propTypes = {
    addQuestion: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addQuestion }
  )(Addquestion);