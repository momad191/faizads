import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "./api/contacts";
import ContactList from "./ContactList";
import axios from 'axios';
import { addLike, removeLike, deletePost } from '../../actions/post';
//import Header from "./Header";
//import AddContact from "./AddContact";
//import ContactDetail from "./ContactDetail";
//import EditContact from "./EditContact";

const ProductApp = () => {

    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    //RetrieveContacts
    const retrieveContacts = async () => {
        const response = await  axios.get('/api/posts');
        return response.data;
    };





    const addContactHandler = async (contact) => {
        console.log(contact);
        const request = {
          id: uuid(),
          ...contact,
        };
    
        const response = await api.post("/contacts", request);
        console.log(response);
        setContacts([...contacts, response.data]);
      };
    
      const updateContactHandler = async (contact) => {
        const response = await api.put(`/contacts/${contact.id}`, contact);
        const { id, name, email } = response.data;
        setContacts(
          contacts.map((contact) => {
            return contact.id === id ? { ...response.data } : contact;
          })
        );
      };
    
      const removeContactHandler = async (id) => {
        await api.delete(`/contacts/${id}`);
        const newContactList = contacts.filter((contact) => {
          return contact.id !== id;
        });
    
        setContacts(newContactList);
      };
    
      const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm !== "") {
          const newContactList = contacts.filter((contact) => {
            return Object.values(contact)
              .join(" ")
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          });
          setSearchResults(newContactList);
        } else {
          setSearchResults(contacts);
        }
      };
    
      useEffect(() => {
        // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        // if (retriveContacts) setContacts(retriveContacts);
        const getAllCOntacts = async () => {
          const AllContacts = await retrieveContacts();
          if (AllContacts) setContacts(AllContacts);
        };
    
        getAllCOntacts();
      }, []);
    
      useEffect(() => {
        //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
      }, [contacts]);




    return (
        <>
      
     
          <ContactList
           
            contacts={searchTerm.length < 1 ? contacts : searchResults}
            getContactId={removeContactHandler}
            term={searchTerm}
            searchKeyword={searchHandler}
          />
     
    

 

    

      </>
    )
}

export default ProductApp
