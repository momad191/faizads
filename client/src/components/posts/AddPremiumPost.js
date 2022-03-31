import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import Spinner from '../layout/Spinner';
import Alert from '../layout/Alert';
import axios from 'axios';
import emptypic from './emptypic.jpg';
 
const noneDisplayI = 'noneDisplayI';
const displayI = 'displayI';
  
const Addpost = ({ addPost ,setAlert}) => {


// For APIS


    const [markets,setMarkets]= useState([])
    const [cars,setCar]= useState([])
    const [properties,setProperties]= useState([])
    const [jobs,setJobs]= useState([])
    const [services,setServices]= useState([])
    const [classifieds,setClassifieds]= useState([])
    const [countries,setCountries]= useState([])


    





    
    //const [subcategories22,setSubCategory22]= useState([])
  
     
  useEffect(()=>{
      
      axios.get('/api/categories/cars')
      .then(res => {
        console.log(res);
        setCar(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/categories/properties')
      .then(res => {
        console.log(res);
        setProperties(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/categories/jobs')
      .then(res => {
        console.log(res);
        setJobs(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/categories/services')
      .then(res => {
        console.log(res);
        setServices(res.data)
      })
      .catch((err) => {
        console.log(err);
      })




      axios.get('/api/categories/classifieds')
      .then(res => {
        console.log(res);
        setClassifieds(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

      

      
   
   
      axios.get('/api/markets')
      .then(res => {
        console.log(res);
      setMarkets(res.data)
      })
      .catch((err) => {
        console.log(err);
      })




      axios.get('/api/countries')
      .then(res => {
        console.log(res);
      setCountries(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
    
  },[])
  

  // For Market WorkFlow 
  const [optionFirst, setmyoptionFirst] = useState(displayI);
  const [optionCars, setmyoptionCars] = useState(displayI);
  const [optionProperties, setmyoptionProperties] = useState(displayI);
  const [optionJobs, setmyoptionJobs] = useState(displayI);
  const [optionServices, setmyoptionServices] = useState(displayI);
  const [optionClassifieds, setmyoptionClassifieds] = useState(displayI);





//The begining
  const optionFirst1 = async e => {
    setmyoptionCars(displayI);
    setmyoptionProperties(displayI);
    setmyoptionJobs(displayI);
    setmyoptionServices(displayI);
    setmyoptionClassifieds(displayI);

    setmyoptionSubCars(noneDisplayI);
    setmyoptionSubProperties(noneDisplayI);
    setmyoptionSubJobs(noneDisplayI);
    setmyoptionSubServices(noneDisplayI);
    setmyoptionSubClassifieds(noneDisplayI);
    setmyoptionCountry(noneDisplayI);
    setmyoptionContact(noneDisplayI);
    setmyoptionDetails(noneDisplayI);
    setmyoptionEnglishDetails(noneDisplayI);
    setmyoptionImages(noneDisplayI);
    setmyoptionSubmit(noneDisplayI);
  };



  //Cars Market 
  const optionCars1 = async e => {
    setmyoptionCars(displayI);
    setmyoptionSubCars(displayI);

    setmyoptionProperties(noneDisplayI);
    setmyoptionJobs(noneDisplayI);
    setmyoptionServices(noneDisplayI);
    setmyoptionClassifieds(noneDisplayI);
    setmyoptionSubProperties(noneDisplayI);
    setmyoptionSubJobs(noneDisplayI);
    setmyoptionSubServices(noneDisplayI);
    setmyoptionSubClassifieds(noneDisplayI);
  };


  //Properties Market
  const optionProperties1 = async e => {
    setmyoptionProperties(displayI);
    setmyoptionSubProperties(displayI);

    setmyoptionCars(noneDisplayI);
    setmyoptionJobs(noneDisplayI);
    setmyoptionServices(noneDisplayI);
    setmyoptionClassifieds(noneDisplayI);
    setmyoptionSubCars(noneDisplayI);
    setmyoptionSubJobs(noneDisplayI);
    setmyoptionSubServices(noneDisplayI);
    setmyoptionSubClassifieds(noneDisplayI);
  };




  //Job Market
  const optionJobs1 = async e => {
    setmyoptionJobs(displayI);
    setmyoptionSubJobs(displayI);

    setmyoptionProperties(noneDisplayI);
    setmyoptionCars(noneDisplayI);
    setmyoptionServices(noneDisplayI);
    setmyoptionClassifieds(noneDisplayI);
    setmyoptionSubProperties(noneDisplayI);
    setmyoptionSubCars(noneDisplayI);
    setmyoptionSubServices(noneDisplayI);
    setmyoptionSubClassifieds(noneDisplayI);
  };


//Services Market
  const optionServices1 = async e => {
    setmyoptionServices(displayI);
    setmyoptionSubServices(displayI);

    setmyoptionJobs(noneDisplayI);
    setmyoptionProperties(noneDisplayI);
    setmyoptionCars(noneDisplayI);
    setmyoptionClassifieds(noneDisplayI);
    setmyoptionSubJobs(noneDisplayI);
    setmyoptionSubProperties(noneDisplayI);
    setmyoptionSubCars(noneDisplayI);
    setmyoptionSubClassifieds(noneDisplayI);
  };



  //Classifieds Market
  const optionClassifieds1 = async e => {
    setmyoptionClassifieds(displayI);
    setmyoptionSubClassifieds(displayI);

    setmyoptionServices(noneDisplayI);
    setmyoptionJobs(noneDisplayI);
    setmyoptionProperties(noneDisplayI);
    setmyoptionCars(noneDisplayI);
    setmyoptionSubServices(noneDisplayI);
    setmyoptionSubJobs(noneDisplayI);
    setmyoptionSubProperties(noneDisplayI);
    setmyoptionSubCars(noneDisplayI);
 
  };


  ////////////////////////////////////////-----------Categories on the markets-------------/////////////////////////////////////////
    // For Sub WorkFlow 
    const [optionSubFirst, setmyoptionSubFirst] = useState(displayI);
    const [optionSubCars, setmyoptionSubCars] = useState(noneDisplayI);
    const [optionSubProperties, setmyoptionSubProperties] = useState(noneDisplayI);
    const [optionSubJobs, setmyoptionSubJobs] = useState(noneDisplayI);
    const [optionSubServices, setmyoptionSubServices] = useState(noneDisplayI);
    const [optionSubClassifieds, setmyoptionSubClassifieds] = useState(noneDisplayI);


 

//Sub Cars
    const optionSubCars1 = async e => {
      setmyoptionSubCars(displayI);
      setmyoptionCountry(displayI);

      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);

      // setmyoptionCountry(noneDisplayI);
      // setmyoptionContact(noneDisplayI);
      // setmyoptionDetails(noneDisplayI);
      // setmyoptionEnglishDetails(noneDisplayI);
      // setmyoptionImages(noneDisplayI);
    };


  
  //Sub Properties
    const optionSubProperties1 = async e => {
      setmyoptionSubProperties(displayI);
      setmyoptionCountry(displayI);

      setmyoptionSubCars(noneDisplayI);
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);
    };
  
  


    //Sub Jobs
    const optionSubJobs1 = async e => {
      setmyoptionSubJobs(displayI);
      setmyoptionCountry(displayI);

      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubCars(noneDisplayI);
      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);
    };
  
  
  

    //Sub Services 
    const optionSubServices1 = async e => {
      setmyoptionSubServices(displayI);
      setmyoptionCountry(displayI);
      
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubCars(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);
    };
  
  
  


    //Sub Classifieds
    const optionSubClassifieds1 = async e => {
      setmyoptionSubClassifieds(displayI);
      setmyoptionCountry(displayI);

      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubCars(noneDisplayI);
   
    };


    //Work Flow For Country
    const [optionCountry, setmyoptionCountry] = useState(noneDisplayI);

    const optionCountry1 = async e => {
      setmyoptionCountry(displayI);
      setmyoptionContact(displayI);
   
    };



     //Work Flow For Contact
     const [optionContact, setmyoptionContact] = useState(noneDisplayI);

     const optionContact1 = async e => {
      setmyoptionContact(displayI);
      // setmyoptionDetails(displayI);
    
     };

    //contact
     const [optionContactMobile, setmyoptionContactMobile] = useState(displayI);
     const [optionContactWhatsapp, setmyoptionContactWhatsapp] = useState(noneDisplayI);
     const [optionContactTelephone, setmyoptionContactTelephone] = useState(noneDisplayI);
     const [optionContactEmail, setmyoptionContactEmail] = useState(noneDisplayI);
     const [optionContactLink, setmyoptionContactLink] = useState(noneDisplayI);

     const [contactinput, setcontactinput] = useState('contactinput');
     const [contactinputWhatsapp, setcontactinputWhatsapp] = useState('contactinput');
     const [contactinputTelephone, setcontactinputTelephone] = useState('contactinput');
     const [contactinputEmail, setcontactinputEmail] = useState('contactinput');
     const [contactinputLink, setcontactinputLink] = useState('contactinput');

     

     
            //contact Mobile
          const Mobileyes = async e => {
            setmyoptionContactMobile(displayI); 
            setcontactinput('contactinputyes'); 
          };

          const Mobileno = async e => {
            setmyoptionContactMobile(noneDisplayI); 
            setcontactinput('contactinputno'); 
          };



           //contact Whatsapp
           const Whatsappyes = async e => {
            setmyoptionContactWhatsapp(displayI); 
            setcontactinputWhatsapp('contactinputWhatsappyes'); 
          };
      
          const Whatsappno = async e => {
            setmyoptionContactWhatsapp(noneDisplayI); 
            setcontactinputWhatsapp('contactinputWhatsappno'); 
          };



                     //contact Telephone
                     const Telephoneyes = async e => {
                      setmyoptionContactTelephone(displayI); 
                      setcontactinputTelephone('contactinputTelephoneyes'); 
                    };
                
                    const Telephoneno = async e => {
                      setmyoptionContactTelephone(noneDisplayI); 
                      setcontactinputTelephone('contactinputTelephoneno'); 
                    };



                    //contact Email
                     const Emailyes = async e => {
                      setmyoptionContactEmail(displayI); 
                      setcontactinputEmail('contactinputEmailyes'); 
                    };
                
                    const Emailno = async e => {
                      setmyoptionContactEmail(noneDisplayI); 
                      setcontactinputEmail('contactinputEmailno');
                    };



                    //contact Link
                     const Linkyes = async e => {
                      setmyoptionContactLink(displayI); 
                      setcontactinputLink('contactinputLinkyes');
                    };
                
                    const Linkno = async e => {
                      setmyoptionContactLink(noneDisplayI); 
                      setcontactinputLink('contactinputLinkno');
                    };




        //Work Flow For Details
        const [optionDetails, setmyoptionDetails] = useState(noneDisplayI);
        const optionDetailsNext = async e => {
          setmyoptionDetails(displayI);
       
        };

        const optionDetails1 = async e => {
          setmyoptionDetails(displayI);
       
        };



           //Work Flow For EnglishDetails1


           const [optionEnglishDetails, setmyoptionEnglishDetails] = useState(noneDisplayI);
           const optionEnglishDetailsNext = async e => {
            setmyoptionEnglishDetails(displayI);
          
           };


           const optionEnglishDetails1 = async e => {
            setmyoptionEnglishDetails(displayI);
          
           };




            //Work Flow For Images
            const [optionImages, setmyoptionImages] = useState(noneDisplayI);

            const optionImagesNext = async e => {
              setmyoptionImages(displayI);
              //setmyoptionEnglishDetails(noneDisplayI);
              

            };


          const optionImages1 = async e => {
            setmyoptionImages(displayI);

          };






               //Work Flow For add pics
               const [optionInputPic0, setmyoptionInputPic0] = useState(displayI);

               const optionInputPic00 = async e => {
                setmyoptionInputPic0(noneDisplayI);
                 
   
               };



          //Work Flow For Submit 
          const [optionSubmit, setmyoptionSubmit] = useState(noneDisplayI);
          const optionSubmit1 = async e => {
            setmyoptionSubmit(displayI);

          };




 // Backs 
 
 //Back to cars
 const optionSubBackCar = async e => {
  setmyoptionSubCars(displayI);

  setmyoptionCountry(noneDisplayI);
  setmyoptionContact(noneDisplayI);
  setmyoptionDetails(noneDisplayI);
  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);
};



 //Back to Properties
const optionSubBackProperties = async e => {
  setmyoptionSubProperties(displayI);
  setmyoptionCountry(noneDisplayI);
  setmyoptionContact(noneDisplayI);
  setmyoptionDetails(noneDisplayI);
  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);
};



 //Back to Jobs
 const optionSubBackJobs = async e => {
  setmyoptionSubJobs(displayI);

  setmyoptionCountry(noneDisplayI);
  setmyoptionContact(noneDisplayI);
  setmyoptionDetails(noneDisplayI);
  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);
};




 //Back to Services
 const optionSubBackServices = async e => {
  setmyoptionSubServices(displayI);
  
  setmyoptionCountry(noneDisplayI);
  setmyoptionContact(noneDisplayI);
  setmyoptionDetails(noneDisplayI);
  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);
};




 //Back to Classifieds
 const optionSubBackClassifieds = async e => {
  setmyoptionSubClassifieds(displayI);
  
  setmyoptionCountry(noneDisplayI);
  setmyoptionContact(noneDisplayI);
  setmyoptionDetails(noneDisplayI);
  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);
};



 //Back to Country
 const optionSubBackCountry = async e => { 
  setmyoptionCountry(displayI);

  setmyoptionContact(noneDisplayI);
  setmyoptionDetails(noneDisplayI);
  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);


};



 //Back to Contact
 const optionSubBackContact = async e => { 
  setmyoptionContact(displayI);
  setmyoptionContactMobile(displayI); 

  setmyoptionContactWhatsapp(noneDisplayI); 
  setmyoptionContactTelephone(noneDisplayI); 
  setmyoptionContactLink(noneDisplayI); 
  setmyoptionContactEmail(noneDisplayI); 



  setmyoptionDetails(noneDisplayI);
  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);

};



//Back to Details
const optionSubBackDetails = async e => { 
  setmyoptionDetails(displayI);

  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);
};

//Back to EnglishDetails
const optionSubBackEnglishDetails = async e => { 
   setmyoptionEnglishDetails(displayI);

  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);
};




//Back to Images
const optionSubBackImages = async e => { 
 setmyoptionImages(displayI);
 setmyoptionSubmit(noneDisplayI);

};




     











  
  const [displayProsConsInputs, toggleProsConsInputs] = useState(false);

    const [displaySocialInputs, toggleSocialInputs] = useState(false);
    const [displayInputs1, toggleInputs1] = useState(false);
    const [displayInputs2, toggleInputs2] = useState(false);
    const [displayInputs3, toggleInputs3] = useState(false);
    const [displayInputs4, toggleInputs4] = useState(false);
    const [displayInputs5, toggleInputs5] = useState(false);
    const [displayInputs6, toggleInputs6] = useState(false);
    const [displayInputs7, toggleInputs7] = useState(false);
    const [displayInputs8, toggleInputs8] = useState(false);
    const [displayInputs9, toggleInputs9] = useState(false);
    const [displayInputs10,toggleInputs10] = useState(false);
    const [displayInputs11,toggleInputs11] = useState(false);
    const [displayInputs12,toggleInputs12] = useState(false);
    const [displayInputs13,toggleInputs13] = useState(false);
    const [displayInputs14,toggleInputs14] = useState(false);
    const [displayInputs15,toggleInputs15] = useState(false);
    const [displayInputs16,toggleInputs16] = useState(false);
    const [displayInputs17,toggleInputs17] = useState(false);
    const [displayInputs18,toggleInputs18] = useState(false);
   
    const [displayInputs19,toggleInputs19] = useState(false);
    const [displayInputs20,toggleInputs20] = useState(false);
    const [displayInputs21,toggleInputs21] = useState(false);
    const [displayInputs22,toggleInputs22] = useState(false);
    const [displayInputs23,toggleInputs23] = useState(false);
    const [displayInputs24,toggleInputs24] = useState(false);
    const [displayInputs25,toggleInputs25] = useState(false);
    const [displayInputs26,toggleInputs26] = useState(false);
    const [displayInputs27,toggleInputs27] = useState(false);
    const [displayInputs28,toggleInputs28] = useState(false);
    const [displayInputs29,toggleInputs29] = useState(false);
    const [displayInputs30,toggleInputs30] = useState(false);
  
   
     
    const [image, setImage] = useState()
    const [pic1, setPic1] = useState()
    const [pic2, setPic2] = useState()
    const [pic3, setPic3] = useState()
    const [pic4, setPic4] = useState()
    const [pic5, setPic5] = useState()
    const [pic6, setPic6] = useState()
    const [pic7, setPic7] = useState()
    const [pic8, setPic8] = useState()
    const [pic9, setPic9] = useState()
    const [pic10, setPic10] = useState()
  
    const [loading, setLoading] = useState(false)
     
      const [formData, setFormData] = useState({
        title:'',
        title_English:'',
        purpose:'',
        writer:'',
        activation:'no',
        premium:'yes',

        category_code:'',
        category_name:'',

        market_code:'',
        market_name:'',

        country:'',
        mobile:'',
        whatsapp:'',
        telephone:'',
        email:'',
        websitelink:'',
        Main_paragraph:'',
        Main_English_paragraph:'',
        video:'',
        Keywords:'', 
        short:'',

  
  
               
            });
            const {
                  title,
                  title_English,
                  purpose,
                  writer,
                  P_Img,
                  activation,
                  premium,

                  category_code,
                  category_name,

                  market_code,
                  market_name,

                  country,
                  //SubName,
                  //Subid,
                  mobile,
                  whatsapp,
                  telephone,
                  email,
                  websitelink,
                  Main_paragraph,
                  Main_English_paragraph,


                  video,
                  Keywords,
                  short,
  
             
 
  
          
          
          
  
                  
            } = formData;
   
            const onChange = e =>
            setFormData({ ...formData, [e.target.name]: e.target.value });
  
            const onselect = e =>
            setFormData({ ...formData, [e.target.id]: e.target.value });
  
   
  
                    const onChangeimage = e => {
                      setImage({ image: e.target.files[0] });
                      };



                    const onChangePic1 = e => {
                      setPic1({ pic1: e.target.files[0] });
                      };

                    const onChangePic2 = e => {
                      setPic2({ pic2: e.target.files[0] });
                      };


                    const onChangePic3 = e => {
                      setPic3({ pic3: e.target.files[0] });
                      };

                    const onChangePic4 = e => {
                      setPic4({ pic4: e.target.files[0] });
                      };

                      const onChangePic5 = e => {
                        setPic5({ pic5: e.target.files[0] });
                      };


                      const onChangePic6 = e => {
                          setPic6({ pic6: e.target.files[0] });
                      };


                      const onChangePic7 = e => {
                        setPic7({ pic7: e.target.files[0] });
                       };


                       const onChangePic8 = e => {
                       setPic8({ pic8: e.target.files[0] });
                        };


                        const onChangePic9 = e => {
                        setPic9({ pic9: e.target.files[0] });
                         };


                        const onChangePic10 = e => {
                         setPic10({ pic10: e.target.files[0] });
                         };
  
              
     
  
             const onSubmit = async e => {
            
                e.preventDefault();

                if (title === '' &&  title_English === '') {
                  setAlert('الرجاء كتابة عنوان لإعلانك','alertMsg-danger');
                  
                  
                } else if(Main_paragraph === '' && Main_English_paragraph === '' ){
                  setAlert('الرجاء كتابة تفاصيل الإعلان','alertMsg-danger');
               
                } else {
  
              addPost({ 
                 title,
                 title_English,
                 purpose,
                  writer,
                  activation,
                  premium,
                  category_code,
                  category_name,

                  market_code,
                  market_name,
                  country,
                  mobile,
                  whatsapp,
                  telephone,
                  email,
                  websitelink,
                  Main_paragraph,
                  Main_English_paragraph,

                  video,
                  Keywords,
                  short,

                  image,
                  pic1,
                  pic2,
                  pic3,
                  pic4,
                  pic5,
                  pic6,
                  pic7,
                  pic8,
                  pic9,
                  pic10,
  
    
            });
          }
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



          // upload pic1 function 

          const uploadPic1 = async e => {
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
        
            setPic1(file.secure_url)
            setLoading(false)
          }



                    // upload pic2 function 

                    const uploadPic2 = async e => {
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
                  
                      setPic2(file.secure_url)
                      setLoading(false)
                    }





                                        // upload pic3 function 

                                        const uploadPic3 = async e => {
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
                                      
                                          setPic3(file.secure_url)
                                          setLoading(false)
                                        }





                   // upload pic4 function 

                    const uploadPic4 = async e => {
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
                  
                      setPic4(file.secure_url)
                      setLoading(false)
                    }







                                        // upload pic5 function 

                                        const uploadPic5 = async e => {
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
                                      
                                          setPic5(file.secure_url)
                                          setLoading(false)
                                        }






                  // upload pic6 function 

                    const uploadPic6 = async e => {
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
                  
                      setPic6(file.secure_url)
                      setLoading(false)
                    }






                                        // upload pic7 function 

                                        const uploadPic7 = async e => {
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
                                      
                                          setPic7(file.secure_url)
                                          setLoading(false)
                                        }





                  // upload pic8 function 

                    const uploadPic8 = async e => {
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
                  
                      setPic8(file.secure_url)
                      setLoading(false)
                    }







                                        // upload pic9 function 

                                        const uploadPic9 = async e => {
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
                                      
                                          setPic9(file.secure_url)
                                          setLoading(false)
                                        }






                   // upload pic10 function 

                    const uploadPic10 = async e => {
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
                  
                      setPic10(file.secure_url)
                      setLoading(false)
                    }
  
 
    return (
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">

        <center>         
   
 
        <Alert />

        <form className="login-form" onSubmit={e => onSubmit(e)}>
        <div className="login-title"> <i className="fa fa-star fa-1x"></i>  أضف إعلان مميز  <i className="fa fa-star fa-1x"></i>  </div>
  {/* left Side */}
  <div className='FormCover'>



  
  <div className={optionFirst} onClick={optionFirst1}>
  <div  className="topadtitleinput">  ماهي السوق التي تريد ان تعلن فيها؟   <i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
 </div>
               {/* {markets.map(market=>(
                  <label className="container11" for='market1'>  
                  <div  className="radioinput"> {market.m_name} 
                  <input className="radioinput"  type="radio" id="market1" name='market_id'  value={market._id}  onChange={e => onChange(e)}  />
                  <span class="checkmark"></span>
                  </div> 
                  </label>
                    ))}  */}


  <div className={optionCars}>
  <center> 
  <label className="container11" for='market1'>  
  <div  className="radioinput"> سوق السيارات 
  <input className="radioinput"  type="radio" id="market1" name='market_code'  value='cars'  onChange={e => onChange(e)} 
  onClick={optionCars1} />
  <span class="checkmark"></span>
  </div> 
  </label>
  </center>
  </div>

 
  <div className={optionProperties}>
  <center> 
  <label className="container11" for='market2'>  
  <div  className="radioinput"> سوق العقارات 
  <input className="radioinput"  type="radio" id="market2" name='market_code'  value='properties'  onChange={e => onChange(e)} 
  onClick={optionProperties1}
  />
  <span class="checkmark"></span>
  </div> 
  </label>
  </center> 
  </div>



  <div className={optionJobs}>
  <center> 
  <label className="container11" for='market3'>  
  <div  className="radioinput"> سوق الوظائف 
  <input className="radioinput"  type="radio" id="market3" name='market_code'  value='jobs'  onChange={e => onChange(e)} 
   onClick={optionJobs1}
  />
  <span class="checkmark"></span>
  </div> 
  </label>
  </center> 
  </div>




  <div className={optionServices}>
  <center> 
  <label className="container11" for='market4'>  
  <div  className="radioinput"> سوق الخدمات 
  <input className="radioinput"  type="radio" id="market4" name='market_code'  value='services'  onChange={e => onChange(e)} 
   onClick={optionServices1}
  />
  <span class="checkmark"></span>
  </div> 
  </label>
  </center> 
  </div>
  


  <div className={optionClassifieds}>
  <center> 
  <label className="container11" for='market5'>  
  <div  className="radioinput"> سلع ومنتجات 
  <input className="radioinput"  type="radio" id="market5" name='market_code'  value='classifieds'  onChange={e => onChange(e)} 
   onClick={optionClassifieds1}
  />
  <span class="checkmark"></span>
  </div> 
  </label>
  </center> 
  </div>



  
  


                {/* <span> عن ماذا تريد أن تعلن ؟ </span>
                <select className="Forminput" 
                  style={{width:'100%',marginLeft:'0%'}}
                  name="market_id" 
                  value={market_id} 
                  onChange={e => onChange(e)}
                  > 
                  <option value='nothing chosen'> السوق </option>
                  {markets11.map(market=>(
                  <option required value={market._id}> {market.m_name} </option>
                    ))}
                  </select> */}

 
                {/* {categories11.map(catego=>(
                  <label className="container11" for='market5'>  
                  <div  className="radioinput"> {catego.c_name} 
                  <input className="radioinput"  type="radio" id="market5" name='market_id'  value={catego._id}  onChange={e => onChange(e)}  />
                  <span class="checkmark"></span>
                  </div> 
                  </label>
                    ))} */}

<div className={optionSubFirst}>

                 <div className={optionSubCars}>

                 

                 <select className="topadtitleinput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="purpose" 
                  value={purpose} 
                  onChange={e => onChange(e)}
                  onClick={optionSubCars1}
                  > 
                  <option value='nothing chosen'> ما الغرض من الإعلان؟ </option>
                
                  <option required value='for-sale'> عرض سيارة للبيع  </option>
                  <option required value='rental'> عرض سيارة للإيجار  </option>

                  <option required value='ask-buy'> أبحث عن سيارة للشراء  </option>
                  <option required value='ask-rent'> أبحث عن سيارة للإيجار  </option>
                   

                  </select>

                  <div  className="topadtitleinput" onClick={optionSubBackCar}>  ماهو نوع السيارة؟    <i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>   
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubCars1}
                  > 
                  <option value='nothing chosen'> اختر التصنيف </option>
                  {cars.map(car=>(
                  <option required value={car.c_code}> {car.c_AR_name}  </option>
                    ))}

                  </select>

                  </div>



                  
                  <div className={optionSubProperties}>


                  <select className="topadtitleinput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="purpose" 
                  value={purpose} 
                  onChange={e => onChange(e)}
                  onClick={optionSubProperties1}
                  > 
                  <option value='nothing chosen'> ما الغرض من الإعلان؟ </option>
                

                  <option required value='rental'> عرض عقار للإيجار  </option>
                  <option required value='for-sale'> عرض عقار للبيع  </option>
                  <option required value='ask-buy'> أبحث عن عقار للشراء  </option>
                  <option required value='ask-rent'> أبحث عن عقار للإيجار  </option>
                   
                  </select>

                  <div  className="topadtitleinput" onClick={optionSubBackProperties}>  ماهو نوع العقار؟   <i class="fa fa-pencil-square-o" aria-hidden="true"></i> </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubProperties1}
                  > 
                  <option value='nothing chosen'> اختر التصنيف  </option>
                  {properties.map(property=>(
                  <option required value={property.c_code}> {property.c_AR_name} </option>
                    ))}
                  </select>
                  </div>



                  <div className={optionSubJobs}>

                  <select className="topadtitleinput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="purpose" 
                  value={purpose} 
                  onChange={e => onChange(e)}
                  onClick={optionSubJobs1}
                  > 
                  <option value='nothing chosen'> ما الغرض من الإعلان؟ </option>
                
                  <option required value='vacancies'> الاعلان عن وظيفة شاغرة  </option>
                  <option required value='seeking-work'> الاعلان للبحث عن وظيفة   </option>
                  </select>




                  <div  className="topadtitleinput" onClick={optionSubBackJobs}>  ماهو نوع الوظيفة؟   <i class="fa fa-pencil-square-o" aria-hidden="true"></i> </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubJobs1}
                  > 
                  <option value='nothing chosen'>اختر التصنيف </option>
                  {jobs.map(job=>(
                  <option required value={job.c_code}> {job.c_AR_name} </option>
                    ))}
                  </select>
                  </div>


                  <div className={optionSubServices}>
                  <div  className="topadtitleinput" onClick={optionSubBackServices}>  ماهو نوع الخدمة؟   <i class="fa fa-pencil-square-o" aria-hidden="true"></i> </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubServices1}
                  > 
                  <option value='nothing chosen'>اختر التصنيف </option>
                  {services.map(service=>(
                  <option required value={service.c_code}> {service.c_AR_name} </option>
                    ))}
                  </select>
                  </div>





                  <div className={optionSubClassifieds}>
                  <div  className="topadtitleinput" onClick={optionSubBackClassifieds}>  اختر تصنيف السلعة أو المنتج؟    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>  </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubClassifieds1}
                  > 
                  <option value='nothing chosen'>اختر التصنيف </option>
                  {classifieds.map(classify=>(
                  <option required value={classify.c_code}> {classify.c_AR_name} </option>
                    ))}
                  </select>
                  </div>

</div>

 

                  
                  

                  

  <div className={optionCountry}>

 
   
                  
                

        <center> 
        <div  className="topadtitleinput" onClick={optionSubBackCountry}>  اختر دولة النشر    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> </div>
  
                 <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="country" 
                  value={country}
                  onChange={e => onChange(e)}
                  onClick={optionCountry1}
                  >  
                  <option value='nothing chosen'>اختر الدولة </option>
                  {countries.map(country=>(
                  <option required value={country.country_code}> {country.country_AR_name} </option>
                    ))}
                  </select>
  

  {/* {countries.map(country=>(
      
  <label className="container11" for={country.country_code}  >  
  <div  className="radioinput"> {country.country_AR_name} 
  <input className="radioinput"  type="checkbox" id={country.country_code} name={country.country_AR_name}   value={country.country_code}  onChange={e => onChange(e)} 
   onClick={optionCountry1}/>
  <span class="checkmark"></span>
  </div> 
  </label>
      ))} */}

  
  </center>

  </div>


{/* 
  <label className="container11" for='country2'>  
  <div  className="radioinput"> الإمارات 
  <input className="radioinput"  type="radio" id="country2" name='country'  value='cars'  onChange={e => onChange(e)}  />
  <span class="checkmark"></span>
  </div> 
  </label>








  <label className="container11" for='country3'>  
  <div  className="radioinput"> السودان 
  <input className="radioinput"  type="radio" id="country3" name='country'  value='cars'  onChange={e => onChange(e)}  />
  <span class="checkmark"></span>
  </div> 
  </label>




  <label className="container11" for='country4'>  
  <div  className="radioinput"> العراق 
  <input className="radioinput"  type="radio" id="country4" name='country'  value='cars'  onChange={e => onChange(e)}  />
  <span class="checkmark"></span>
  </div> 
  </label>



  
  <label className="container11" for='country5'>  
  <div  className="radioinput"> البحرين 
  <input className="radioinput"  type="radio" id="country5" name='country'  value='cars'  onChange={e => onChange(e)}  />
  <span class="checkmark"></span>
  </div> 
  </label>




  <label className="container11" for='country6'>  
  <div  className="radioinput"> الجزائر 
  <input className="radioinput"  type="radio" id="country6" name='country'  value='cars'  onChange={e => onChange(e)}  />
  <span class="checkmark"></span>
  </div> 
  </label>





  <label className="container11" for='country7'>  
  <div  className="radioinput"> البحرين 
  <input className="radioinput"  type="radio" id="country7" name='country'  value='cars'  onChange={e => onChange(e)}  />
  <span class="checkmark"></span>
  </div> 
  </label>



  <label className="container11" for='country8'>  
  <div  className="radioinput"> الأردن 
  <input className="radioinput"  type="radio" id="country8" name='country'  value='cars'  onChange={e => onChange(e)}  />
  <span class="checkmark"></span>
  </div> 
  </label>



  <label className="container11" for='country9'>  
  <div  className="radioinput"> المغرب 
  <input className="radioinput"  type="radio" id="country9" name='country'  value='cars'  onChange={e => onChange(e)}  />
  <span class="checkmark"></span>
  </div> 
  </label>




  <label className="container11" for='country10'>  
  <div  className="radioinput"> قطر 
  <input className="radioinput"  type="radio" id="country10" name='country'  value='cars'  onChange={e => onChange(e)}  />
  <span class="checkmark"></span>
  </div> 
  </label>




  <label className="container11" for='country11'>  
  <div  className="radioinput"> تونس 
  <input className="radioinput"  type="radio" id="country11" name='country'  value='cars'  onChange={e => onChange(e)}  />
  <span class="checkmark"></span>
  </div> 
  </label>



  <label className="container11" for='country12'>  
  <div  className="radioinput">  مصر
  <input className="radioinput"  type="radio" id="country12" name='country'  value='cars'  onChange={e => onChange(e)}  />
  <span class="checkmark"></span>
  </div> 
  </label> */}


<div className={optionContact}>
<div  className="topadtitleinput" onClick={optionSubBackContact}>  ماهي طريقة التواصل المفضلة لهذا الإعلان؟      <i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>

                    <center> 
                    <div style={{display:'flex',alignItems:'center'}}> 
                    <div  className={contactinput}   onClick={Mobileyes}> أقبل الجوال     <i class="fa fa-mobile" aria-hidden="true"></i></div> 
                    <div  className={contactinput}  onClick={Mobileno}> لا أقبل الجوال     <i class="fa fa-mobile" aria-hidden="true"></i></div> 
                    </div>
                    </center>
                    <div className={optionContactMobile}>
                    <input className="Forminput"
                    style={{height:'5px'}}
                    type="number" 
                    placeholder="ادخل رقم الجوال"
                    autocomplete="off"
                    name='mobile'
                    value={mobile}
                    onChange={e => onChange(e)}
                    />
                    </div>





                    <center>
                    <div style={{display:'flex',alignItems:'center'}}> 
                    <div  className={contactinputWhatsapp}   onClick={Whatsappyes}> أقبل الواتساب     <i class="fa fa-whatsapp" aria-hidden="true"></i></div> 
                    <div  className={contactinputWhatsapp}   onClick={Whatsappno}> لا أقبل الواتساب    <i class="fa fa-whatsapp" aria-hidden="true"></i></div> 
                    </div>
                    </center>
                    <div className={optionContactWhatsapp}>
                  
                    <input className="Forminput"
                    style={{height:'5px'}}
                    type="number" 
                    placeholder="ادخل رقم الواتس اب"
                    autocomplete="off"
                    name='whatsapp'
                    value={whatsapp}
                    onChange={e => onChange(e)}
                    maxlength="100"
                    />
                    </div>






                    <center>
                    <div style={{display:'flex',alignItems:'center'}}> 
                    <div  className={contactinputTelephone}  onClick={Telephoneyes}> أقبل التواصل عبر الهاتف الارضي     <i class="fa fa-phone" aria-hidden="true"></i></div> 
                    <div  className={contactinputTelephone}  onClick={Telephoneno}> لا أقبل التواصل عبر الهاتف الارضي    <i class="fa fa-phone" aria-hidden="true"></i></div> 
                    </div>
                    </center>

                    <div className={optionContactTelephone}>
                    
                    <input className="Forminput"
                    style={{height:'5px'}}
                    type="number" 
                    placeholder="ادخل رقم الهاتف "
                    autocomplete="off"
                    name='telephone'
                    value={telephone}
                    onChange={e => onChange(e)}
                    maxlength="100"
                    />
                    </div>





                    <center>
                    <div style={{display:'flex',alignItems:'center'}}> 
                    <div  className={contactinputEmail}  onClick={Emailyes}> أقبل التواصل عبر البريد الالكتروني      <i class="fa fa-envelope" aria-hidden="true"></i></div> 
                    <div  className={contactinputEmail}  onClick={Emailno}>  لا أقبل التواصل عبر البريد الإلكتروني    <i class="fa fa-envelope" aria-hidden="true"></i></div> 
                    </div>
                    </center>
                    <div className={optionContactEmail}>
                 
                    <input className="Forminput"
                    style={{height:'5px'}}
                    type="email" 
                    placeholder="ادخل بريدك الالكتروني"
                    autocomplete="off"
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                   
                    />
                    </div>







                    <center>
                    <div style={{display:'flex',alignItems:'center'}}> 
                    <div  className={contactinputLink}   onClick={Linkyes}> أقبل وضع رابط موقعي لهذا الإعلان     <i class="fa fa-external-link-square" aria-hidden="true"></i> </div> 
                    <div  className={contactinputLink}  onClick={Linkno}>  لا أريد وضع رابط     <i class="fa fa-external-link-square" aria-hidden="true"></i></div> 
                    </div>
                    </center>
                    <div className={optionContactLink}>
<span className='smallText'> رابط خاص بموقعك أو صفحة الخدمة التي تقدمها</span>
            <input className="Forminput"
                style={{height:'5px'}}
                 type="text" 
                 placeholder="ادخل رابط موقعك"
                 autocomplete="off"
                 name='websitelink'
                 value={websitelink}
                 onChange={e => onChange(e)}
                 />
                 </div>


  <center> <div  className="Formbutton" onClick={optionDetailsNext}>  الخطوة التالية  </div> </center>


  </div>



                  <div className={optionDetails}>
                  <div  className="topadtitleinput" onClick={optionSubBackDetails} >  تفاصيل الإعلان  </div>

                  <span className='smallText'> عنوان الإعلان 100 حرف كحد أقصى </span>
                    <input className="Forminput"
                    style={{height:'5px'}}
                    placeholder=""
                    type="text" 
                    autocomplete="off"
                    name='title'
                    value={title}
                    onChange={e => onChange(e)}
                    maxlength="100" 
                    autocomplete="off"
                    />


                  <span className='smallText'> تفاصيل الإعلان باللغة العربية (400 حرف) </span>
                   <textarea className="Forminput"
                    style={{height:'120px',direction:'rtl',textAlign:'right'}}
                    type="text" 
                    autocomplete="off"
                    name='Main_paragraph'
                    value={Main_paragraph}
                    onChange={e => onChange(e)}
                    maxlength="400"
                    minlength="100"
                    autocomplete="off"
                    />


                 <div  className="topadtitleinput" onClick={optionSubBackEnglishDetails} > هل تريد نشر الإعلان باللغة الإنجليزية ؟ </div>

                 <center> <div  className="Formbutton" onClick={optionEnglishDetailsNext}>  نعم  </div> </center>
                 <center> <div  className="Formbutton" onClick={optionImagesNext}>  لا  </div> </center>

                 </div>


                    <div className={optionEnglishDetails}>

                    <span className='smallText'>  عنوان لإعلانك باللغة الإنجليزية 100 حرف محد أقصى </span>
                    <input className="Forminput"
                    style={{height:'5px'}}
                    placeholder=""
                    type="text" 
                    autocomplete="off"
                    name='title_English'
                    value={title_English}
                    onChange={e => onChange(e)}
                    maxlength="100" 
                    autocomplete="off"
                    />

                    <span className='smallText'>  تفاصيل الإعلان باللغة الإنجليزية  (400 حرف) </span>
                   <textarea className="Forminput"
                    style={{height:'120px',direction:'ltr',textAlign:'left'}}
                    type="text" 
                    autocomplete="off"
                    name='Main_English_paragraph'
                    value={Main_English_paragraph}
                    onChange={e => onChange(e)}
                    onClick={optionEnglishDetails1}
                    maxlength="400"
                    minlength="100"
                    autocomplete="off"
                    />


              <center> <div  className="Formbutton" onClick={optionImagesNext}>  الخطوة التالية  </div> </center>


                    </div>



                      <div className={optionImages}>
                      <div  className="topadtitleinput" onClick={optionSubBackImages } >  يمكنك اضافة 10 صور كحد أقصى   </div>
                   

                       {/* add image */}

                       <label  className="imageLabel" for="file0">
                       <img src={emptypic} />
                       </label>
                    
                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file0"
                       type="file"
                       name="file"
                      //  value={emptypic} 
                       onChange={uploadImage} />


                     {loading ? (
                       <Spinner/>
                     ) : (
                       <Fragment>
                          
                        
                         <span> 
                         
                        

                        <label for="file0" className="imageLabel" >
                        <img  src={image} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                       <input   type="hidden" name='image' value={image}  onChange={onChangeimage} />
                       </label>
                       
                       </span>
                       </Fragment>
                     )}
                    




                      {/* add pic1 */}

                      <label  className="imageLabel" for="file1">
                       <img src={emptypic} />
                       </label>
                     
                      <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file1"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic1} />


                     {loading ? (
                       <span>........</span>
                     ) : (
                       <Fragment>
                         <span>
                        <label for="file1" className="imageLabel" >
                       <img src={pic1} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                       <input   type="hidden" name='pic1' value={pic1}  onChange={onChangePic1} />
                       </label>
                       </span>
                       </Fragment>
                     )}
                  





                        {/* add pic2 */}

                        <label  className="imageLabel" for="file2">
                       <img src={emptypic} />
                       </label>

                      <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file2"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic2} />


                     {loading ? (
                       <span>........</span>
                     ) : (
                       <Fragment>
                         <span>
                       <label for="file2" className="imageLabel">
                       <img src={pic2} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                       <input   type="hidden" name='pic2' value={pic2}  onChange={onChangePic2} />
                       </label>
                       </span>
                       </Fragment>
                     )}




                        {/* add pic3 */}

                        <label  className="imageLabel" for="file3">
                       <img src={emptypic} />
                       </label>

                        <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file3"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic3} />


                     {loading ? (
                       <span>........</span>
                     ) : (
                       <Fragment>
                         <span>
                         <label for="file3" className="imageLabel">
                       <img src={pic3} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                       <input   type="hidden" name='pic3' value={pic3}  onChange={onChangePic3} />
                       </label>
                       </span>
                       </Fragment>
                     )}





                      {/* add pic4 */}
                      <label  className="imageLabel" for="file4">
                       <img src={emptypic} />
                       </label>


                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file4"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic4} />


                     {loading ? (
                       <span>........</span>
                     ) : (
                       <Fragment>
                         <span>
                         <label for="file4" className="imageLabel">
                       <img src={pic4} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                       <input   type="hidden" name='pic4' value={pic4}  onChange={onChangePic4} />
                       </label>
                       </span>
                       </Fragment>
                     )}






                        {/* add pic5 */}

                        <label  className="imageLabel" for="file5">
                       <img src={emptypic} />
                       </label>


                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file5"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic5} />


                     {loading ? (
                       <span>........</span>
                     ) : (
                       <Fragment>
                        <span>
                        <label for="file5" className="imageLabel">
                       <img src={pic5} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                       <input   type="hidden" name='pic5' value={pic5}  onChange={onChangePic5} />
                       </label>
                       </span>
                       </Fragment>
                     )}





                       {/* add pic6 */}

                       <label  className="imageLabel" for="file6">
                       <img src={emptypic} />
                       </label>


                      <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file6"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic6} />


                     {loading ? (
                       <span>........</span>
                     ) : (
                       <Fragment>
                       <span>
                       <label for="file6" className="imageLabel">
                       <img src={pic6} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                       <input   type="hidden" name='pic6' value={pic6}  onChange={onChangePic6} />
                       </label>
                       </span>
                       </Fragment>
                     )}






                       {/* add pic7 */}

                       <label  className="imageLabel" for="file7">
                       <img src={emptypic} />
                       </label>


                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file7"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic7} />


                     {loading ? (
                       <span>........</span>
                     ) : (
                       <Fragment>
                         <span>
                         <label for="file7" className="imageLabel">
                       <img src={pic7} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                       <input   type="hidden" name='pic7' value={pic7}  onChange={onChangePic7} />
                       </label>
                       </span>
                       </Fragment>
                     )}





                        {/* add pic8 */}

                        <label  className="imageLabel" for="file8">
                       <img src={emptypic} />
                       </label>


                        <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file8"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic8} />


                     {loading ? (
                       <span>........</span>
                     ) : (
                       <Fragment>
                       <span>
                       <label for="file8" className="imageLabel">
                       <img src={pic8} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                       <input   type="hidden" name='pic8' value={pic8}  onChange={onChangePic8} />
                       </label>
                       </span>
                       </Fragment>
                     )}






                       {/* add pic9 */}


                       <label  className="imageLabel" for="file9">
                       <img src={emptypic} />
                       </label>


                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file9"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic9} />


                     {loading ? (
                       <span>........</span>
                     ) : (
                       <Fragment>
                       <span>
                       <label for="file9" className="imageLabel">
                       <img src={pic9} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                       <input   type="hidden" name='pic9' value={pic9}  onChange={onChangePic9} />
                       </label>
                       </span>
                       </Fragment>
                     )}




                        {/* add pic10 */}

                        <label  className="imageLabel" for="file10">
                       <img src={emptypic} />
                       </label>


                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file10"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic10} />


                     {loading ? (
                       <span>........</span>
                     ) : (
                       <Fragment>
                       <span>
                       <label for="file10" className="imageLabel">
                       <img src={pic10} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                       <input   type="hidden" name='pic10' value={pic10}  onChange={onChangePic10} />
                       </label>
                       </span>
                       </Fragment>
                     )}



                     





                  <center> <div  className="Formbutton" onClick={optionSubmit1}>   استمرار  </div> </center>
                  <span className='smallText'> نرجو منك مراجعة نص الإعلان والتأكد من معلومات التواصل قبل ‏النشر، لا يمكن تعديل الإعلان بعد نشره </span>

                     </div>




{/* 
<div  className="topadtitleinput">  حدد موقعك على الخريطة  </div>

 

               <span> عنوان الإعلان </span>
                <input className="Forminput"
                 maxlength="66"
                 type="text" 
                 placeholder=""
                 autocomplete="off"
                 name='title'
                 value={title}
                 onChange={e => onChange(e)}
                 />


                
                





                <span> رابط الفيديو في اليوتيو (للعضوية الذهبية) </span>
                <input className="Forminput"
                style={{height:'5px'}}
                 type="text" 
                 placeholder=""
                 autocomplete="off"
                 name='video'
                 value={video}
                 onChange={e => onChange(e)}
                 />



                <span> كلمات بحث (عضوية ذهبية) </span>
                <input className="Forminput"
                style={{height:'5px'}}
                 type="text" 
                 placeholder=""
                 autocomplete="off"
                 name='Keywords'
                 value={Keywords}
                 onChange={e => onChange(e)}
                 />



                 




                


                <span>عنوان الرابط(ادارة)</span>
                <input className="Forminput"
                style={{height:'5px'}}
                 type="text" 
                 placeholder=""
                 autocomplete="off"
                 name='body'
                 value={body}
                 onChange={e => onChange(e)}
                 />

 
   */}

    

                

  
               
    


 

                  
              



                {/* <input className="Forminput"
                style={{height:'5px'}}
                 type="text" 
                 placeholder="Category Name"
                 autocomplete="off"
                 name='CategoryName'
                 value={catego.c_name}
                 onChange={e => onChange(e)}
                 /> */}



                 
                {/* <input className="Forminput"
                style={{height:'5px'}}
                 type="text" 
                 placeholder="Sub Name"
                 autocomplete="off"
                 name='SubName'
                 value={SubName}
                 onChange={e => onChange(e)}
                 /> */}



                 
                 {/* <select className="Forminput" 
                 style={{width:'30%',marginLeft:'3%'}}
                  name="Publish" 
                  value={Publish} 
                  onChange={e => onChange(e)}
                  > 
                  <option  value='nothing chosen'>Chose to publish</option>
                  <option value='yes'>Publish </option>
                  <option value='no'>Don't Publish </option>
                  </select> */}





 



{/* righSide */}


            


                


                    {/* <span> وصف مختصر (100 حرف) </span>
                    <input className="Forminput"
                    style={{height:'5px'}}
                    type="text" 
                    placeholder=""
                    autocomplete="off"
                    name='short'
                    value={short}
                    onChange={e => onChange(e)}
                    maxlength="100"
                    /> */}



                





                    

                   

 



 {/* BottomSide */}




 <hr className="addpostLine" />

 <div className={optionSubmit}>
<center> <button  type="submit" className="Formbutton">نشر الإعلان  </button></center>
</div>

    <Alert />

    </div>

          </form>
          </center>

         
        </div>
        </div>
        
        </div>

        
    )
}

 

Addpost.propTypes = {
    addPost: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { addPost, setAlert}
  )(Addpost);
