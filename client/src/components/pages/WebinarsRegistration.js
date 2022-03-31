import React, { Fragment } from 'react';

 
const WebinarsRegistration = () => {
  return (
    <Fragment>

<h1 class="middle text-primary"><i class="fas fa-star"></i>  Webinars Registeration</h1>


<form class="form" action="create-profile.html">
 
     <div class="form-group">
 <span>Surname*</span>
       <input type="text"  class="form-contact"  name="name" required />
     </div>
 
 
 <div class="form-group">
 <span>Given(first)name *</span>
       <input type="text"  class="form-contact"  name="name" required />
     </div>
 
 
 <div class="form-group">
  <span>Title *</span>
       <select type="select"   name="channel" required > 
   <option>Select Title </option>
   <option>Mr / Miss / Mrs </option>
   <option>Dr</option>
   <option>Prof</option>
   <option>Other</option>

   </select>
     </div>
 
 
 <div class="form-group">
  <span>Gender *</span>
       <select type="select"   name="channel" required > 
   <option>Select Gender </option>
   <option>Male </option>
   <option>Female</option>
   </select>
     </div>
 
 
 
     <div class="form-group">
   <span>Email</span>
       <input type="email"   name="email" />
      
     </div>
 
 
 <div class="form-group">
 <span>Website</span>
       <input type="text"   name="email" />
     </div>
 
 
 <div class="form-group">
 <span>Phone with country code</span>
       <input type="text"   name="email" />
     </div>
 
 
 <div class="form-group">
 <span>Academic affiliation *</span>
       <input type="text"   name="email" />
     </div>
 
 
 <div class="form-group">
 <span>Country of Residence *</span>
       <input type="text"   name="email" />
     </div>
 

 
  <div class="form-group">
 <span>Nationality</span>
       <input type="text"   name="name" required />
     </div>
 
 
 
  <div class="form-group">
 <span>Key academic credentials (e.g. professional responsibilities, major awards, previous academic affiliations etc.)</span>
       <input type="text"   name="name" required />
     </div>
 
 
 <div class="form-group">
 <span>Research Field *</span>
     <select type="select"   name="channel" required > 
 <option>Select Research Field  </option>
 <option>Natural sciences </option>
 <option>Medicine </option>
 <option>Engineering</option>
 <option> Law</option>
 <option>Economics </option>
 <option> international Relations / politics </option>
 <option>Other arts and humanities </option>
 <option>Other  </option>
   </select>
     </div>
 
 
 
 
  <div class="form-group">
 <span>Specialization (e.g. Cancer Biology, Contract Law etc.) *</span>
       <input type="text"   name="name" required />
     </div>
 
 
  <div class="form-group">
 <span> Potential talk title *</span>
       <input type="text"   name="name" required />
     </div>
 
 
 <div class="form-group">
 <span> Any other information you would like to share </span>
       <input type="text"   name="name" required />
     </div>
 
 
 <div class="form-group">
 <span> Is there any specific time that would be most suitable for us to contact you and/or for the webinar itself? </span>
       <input type="text"   name="name" required />
     </div>


 

     <input type="submit" class="btn btn-primary" value="Send" />
   </form>


 

    </Fragment>
  );
};






export default WebinarsRegistration;
