import React from 'react'

const Addmarket = () => {
    return (
     
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">

        <div class="login-title"> <i class="fa fa-plus-circle"></i>  Add the new product you want to promote  </div>
 

        <center> 
	 
	    <form className="Login-form">
	 
		<input className="Forminput" type="text" name="name" value="" placeholder="Product Name"/>
        <input className="Forminput" type="text" name="name" value="" placeholder="purchasing Link"/>

		<select className="Formselect"  name="category" value="" > 
        <option>Chose the category </option>
		<option>sport </option>
		<option>house </option>
		<option>beauty </option>
		<option>tourism </option>
        </select>

		<textarea className="Formtextarea"  name="email" value="" placeholder="Description"/>
		<input className="Forminput" type="file" name="email" value="" placeholder="image"/> 
 

  	  
	  <center>
	 <button className="Formbutton"  type="submit" name="" >Add</button>
 
	 </center>
	 </form>
     </center>




        </div>
        </div>
        </div>


    )
}
 
export default Addmarket
