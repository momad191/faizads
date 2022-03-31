import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { addLike, removeLike, deletePost } from '../../actions/post';
const ContactList = (props) => {
  const inputEl = useRef("");
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
      
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div>
        
  
    <div className="aqle3-main">
    <div className="mainword2">
    <div className="mainForm">

    <div className="dash-title"> Products </div>
    <Link to="/Addpost" className="Action-button-plus">  <i className="fa fa-plus fa-1x"></i> Add New </Link>
    <Link to="/searchPost" className="Action-button-plus">  <i className="fa fa-search fa-1x"></i> search </Link>

         <center> 
          <input
          style={{width:'80%'}}  
          className="Forminput"
            ref={inputEl}
            type="text"
            placeholder="search product"
            value={props.term}
            onChange={getSearchTerm}
          />
          </center>
        
       
    
      <div>
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts available"}
      </div>



    </div>
    </div>
    </div>
    </div>
  );
};

export default ContactList;