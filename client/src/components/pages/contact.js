import React, { Fragment } from 'react';

const contact = () => {
  return (
    <Fragment>

     
     <h1 class="middle text-primary"><i class="fas fa-star"></i> Contact Us</h1>



<form class="form" action="create-profile.html">

<div class="form-group">
<span>Name</span>
<input type="text"  class="form-contact"  name="name" required />
</div>
<div class="form-group">
<span>Email</span>
<input type="email"   name="email" />
<small class="form-text"
>your Email to send messages </small
>
</div>

<div class="form-group">
<span>Select contact channel*</span>
<select type="select"   name="channel" required > 
<option>Select contact channel</option>
<option>General inquiries</option>
<option>become SRF partner</option>
<option>Relation Team</option>
<option>Tech Geeks</option>
<option>Mentoring</option>


</select>
</div>

<div class="form-group">
<span>Subject</span>
<input type="text"   name="name" required />
</div>


<div class="form-group">
<span>massage</span>
<textarea    name="name" placeholder="massage here" required >

</textarea>

</div>




<input type="submit" class="btn btn-primary" value="Send" />
</form>

   
    </Fragment>
  );
};






export default contact;
