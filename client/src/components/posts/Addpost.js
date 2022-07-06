import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import Spinner from '../layout/Spinner'; 
import Alert from '../layout/Alert';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';
import emptypic from './emptypic.jpg';
import moment from 'moment';
import Moment from 'react-moment';
const noneDisplayI = 'noneDisplayI';
const displayI = 'displayI';


   
const Addpost = ({ addPost ,setAlert ,waiting}) => {

  



  const [t, i18next] = useTranslation()
  const [finish,setFinish]= useState('displayI')
  

  const [userShop,setuserShop]= useState([])

  const [alertWarning,setAlertWarning]= useState('')
  const [alertSuccess,setAlertSuccess]= useState('')

  const [alertWarningEnglish,setAlertWarningEnglish]= useState('')
  const [alertSuccessEnglish,setAlertSuccessEnglish]= useState('')

  const [user,setUser]= useState([])
  const country_code = user.country_code;
  const [userPosts,setUserPosts]= useState([])
  
  //For coutries group
  const [AsiaGroup,setAsiaGroup]= useState([])
  const [AfricaGroup,setAfricaGroup]= useState([])
  const [EuropeGroup,setEuropeGroup]= useState([])
  const [AustraliaGroup,setAustraliaGroup]= useState([])
  const [SouthAmericaGroup,setSouthAmericaGroup]= useState([])
  const [NorthAmaricaGroup,setNorthAmaricaGroup]= useState([])
  const [MiddleEastGroup,setMiddleEastGroup]= useState([])






  

// For APIS
const [subscription,setSubscription]= useState([])

    const [markets,setMarkets]= useState([])
    const [cars,setCar]= useState([])
    const [properties,setProperties]= useState([])
    const [jobs,setJobs]= useState([])
    const [services,setServices]= useState([])
    const [classifieds,setClassifieds]= useState([])

    const [electronics,setElectronics]= useState([])
    const [animals,setAnimals]= useState([])
    const [furniture,setFurniture]= useState([])
    const [personalitems,setPersonalitems]= useState([])
    const [fooddrinks,setFooddrinks]= useState([])



    const [countries,setCountries]= useState([])
    const [cities,setCities]= useState([])

    const [country_code11,setcountryCode]= useState('')


    const [citySA,setcitySA]= useState([])
    const [cityEG,setcityEG]= useState([])
    const [cityTN,setcityTN]= useState([])
    const [cityAE,setcityAE]= useState([])
    const [cityJO,setcityJO]= useState([])
    const [citySD,setcitySD]= useState([])
    const [cityBH,setcityBH]= useState([])
    const [cityDZ,setcityDZ]= useState([])
    const [cityIQ,setcityIQ]= useState([])
    const [cityKW,setcityKW]= useState([])
    const [cityMA,setcityMA]= useState([])
    const [cityYE,setcityYE]= useState([])
    const [cityOM,setcityOM]= useState([])
    const [cityQA,setcityQA]= useState([])
    const [cityLB,setcityLB]= useState([])




    const [showStatus1,setShowStatus1]= useState('hidepic1')
    const [showStatus2,setShowStatus2]= useState('hidepic1')
    const [showStatus3,setShowStatus3]= useState('hidepic1')
    const [showStatus4,setShowStatus4]= useState('hidepic1')
    const [showStatus5,setShowStatus5]= useState('hidepic1')
    const [showStatus6,setShowStatus6]= useState('hidepic1')
    const [showStatus7,setShowStatus7]= useState('hidepic1')
    const [showStatus8,setShowStatus8]= useState('hidepic1')
    const [showStatus9,setShowStatus9]= useState('hidepic1')
    const [showStatus10,setShowStatus10]= useState('hidepic1')

      const optionShowStatus1= ()=>{
      setShowStatus1('showPic1')
        }


        const optionShowStatus2= ()=>{
          setShowStatus2('showPic2')
          }


          const optionShowStatus3= ()=>{
            setShowStatus3('showPic3')
            }



            const optionShowStatus4= ()=>{
              setShowStatus4('showPic4')
              }


              const optionShowStatus5 = ()=>{
                setShowStatus5('showPic5')
                }


                const optionShowStatus6 = ()=>{
                  setShowStatus6('showPic6')
                  }


                  const optionShowStatus7 = ()=>{
                    setShowStatus7('showPic7')
                    }



                    const optionShowStatus8 = ()=>{
                      setShowStatus8('showPic8')
                      }


                      
                    const optionShowStatus9 = ()=>{
                      setShowStatus9('showPic9')
                      }


                      const optionShowStatus10 = ()=>{
                        setShowStatus10('showPic10')
                        }




                        const removepic10 = ()=>{
                          setPic10('')
                          }

                          const removepic9 = ()=>{
                            setPic9('')
                            }


                            const removepic8 = ()=>{
                              setPic8('')
                              }

                              const removepic7 = ()=>{
                                setPic7('')
                                }

                                const removepic6 = ()=>{
                                  setPic6('')
                                  }

                                  const removepic5 = ()=>{
                                    setPic5('')
                                    }

                                    const removepic4 = ()=>{
                                      setPic4('')
                                      }

                                      const removepic3 = ()=>{
                                        setPic3('')
                                        }

                                        const removepic2 = ()=>{
                                          setPic2('')
                                          }

                                          const removepic1 = ()=>{
                                            setPic1('')
                                            }

                                            const removepic0 = ()=>{
                                              setImage('')
                                              }
                        
    
    //const [subcategories22,setSubCategory22]= useState([])
  
     
  useEffect(()=>{


   

  axios.get('/api/shops/usershop')
    .then(res => {
      console.log(res);
      setuserShop(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    axios.get('/api/subscriptions/lastsubscription')
    .then(res => {
      console.log(res);
      setSubscription(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

      
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



      axios.get('/api/categories/electronics')
      .then(res => {
        console.log(res);
        setElectronics(res.data)
      })
      .catch((err) => {
        console.log(err);
      })




      axios.get('/api/categories/animals')
      .then(res => {
        console.log(res);
        setAnimals(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

      



      axios.get('/api/categories/furniture')
      .then(res => {
        console.log(res);
        setFurniture(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

      
   
   
      axios.get('/api/categories/personal-items')
      .then(res => {
        console.log(res);
        setPersonalitems(res.data)
      })
      .catch((err) => {
        console.log(err);
      })




      axios.get('/api/categories/food-drinks')
      .then(res => {
        console.log(res);
        setFooddrinks(res.data)
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

 
 

      axios.get('/api/countries/homeCities/sa')
      .then(res => {
        console.log(res);
        setcitySA(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

      axios.get('/api/countries/homeCities/sa')
      .then(res => {
        console.log(res);
        setcitySA(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

      axios.get('/api/countries/homeCities/eg')
      .then(res => {
        console.log(res);
        setcityEG(res.data)
      })
      .catch((err) => {
        console.log(err);
      })


      axios.get('/api/countries/homeCities/tn')
      .then(res => {
        console.log(res);
        setcityTN(res.data)
      })
      .catch((err) => {
        console.log(err);
      })


      axios.get('/api/countries/homeCities/ae')
      .then(res => {
        console.log(res);
        setcityAE(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/countries/homeCities/jo')
      .then(res => {
        console.log(res);
        setcityJO(res.data)
      })
      .catch((err) => {
        console.log(err);
      })




      axios.get('/api/countries/homeCities/sd')
      .then(res => {
        console.log(res);
        setcitySD(res.data)
      })
      .catch((err) => {
        console.log(err);
      })




      axios.get('/api/countries/homeCities/bh')
      .then(res => {
        console.log(res);
        setcityBH(res.data)
      })
      .catch((err) => {
        console.log(err);
      })




      axios.get('/api/countries/homeCities/dz')
      .then(res => {
        console.log(res);
        setcityDZ(res.data)
      })
      .catch((err) => {
        console.log(err);
      })




      axios.get('/api/countries/homeCities/iq')
      .then(res => {
        console.log(res);
        setcityIQ(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/countries/homeCities/kw')
      .then(res => {
        console.log(res);
        setcityKW(res.data)
      })
      .catch((err) => {
        console.log(err);
      })




      axios.get('/api/countries/homeCities/ma')
      .then(res => {
        console.log(res);
        setcityMA(res.data)
      })
      .catch((err) => {
        console.log(err);
      })





      axios.get('/api/countries/homeCities/ye')
      .then(res => {
        console.log(res);
        setcityYE(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/countries/homeCities/om')
      .then(res => {
        console.log(res);
        setcityOM(res.data)
      })
      .catch((err) => {
        console.log(err);
      })




      axios.get('/api/countries/homeCities/qa')
      .then(res => {
        console.log(res);
        setcityQA(res.data)
      })
      .catch((err) => {
        console.log(err);
      })




      axios.get('/api/countries/homeCities/lb')
      .then(res => {
        console.log(res);
        setcityLB(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

  


      axios.get('/api/auth')
      .then(res => {
        console.log(res);
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err);
      })


      axios.get('/api/posts/userposts')
      .then(res => {
        //console.log(res);
        setUserPosts(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/countries/middle-east')
      .then(res => {
        //console.log(res);
        setMiddleEastGroup(res.data)
      })
      .catch((err) => {
        console.log(err);
      })


      axios.get('/api/countries/Asia')
      .then(res => {
        //console.log(res);
        setAsiaGroup(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/countries/Africa')
      .then(res => {
        //console.log(res);
        setAfricaGroup(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/countries/Europe')
      .then(res => {
        //console.log(res);
        setEuropeGroup(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/countries/Australia')
      .then(res => {
        //console.log(res);
        setAustraliaGroup(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/countries/NorthAmarica')
      .then(res => {
        //console.log(res);
        setNorthAmaricaGroup(res.data)
      })
      .catch((err) => {
        console.log(err);
      })



      axios.get('/api/countries/SouthAmerica')
      .then(res => {
        //console.log(res);
        setSouthAmericaGroup(res.data)
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

  const [optionElectronics, setmyoptionElectronics] = useState(displayI);
  const [optionAnimals, setmyoptionAnimals] = useState(displayI);
  const [optionFurniture, setmyoptionFurniture] = useState(displayI);
  const [optionPersonalitems, setmyoptionPersonalitems] = useState(displayI);
  const [optionFooddrinks, setmyoptionFooddrinks] = useState(displayI);





//The begining
  const optionFirst1 = async e => {
    setmyoptionCars(displayI);
    setmyoptionProperties(displayI);
    setmyoptionJobs(displayI);
    setmyoptionServices(displayI);
    setmyoptionClassifieds(displayI);
    setmyoptionElectronics(displayI);
    setmyoptionAnimals(displayI);
    setmyoptionFurniture(displayI);
    setmyoptionPersonalitems(displayI);
    setmyoptionFooddrinks(displayI);


    setmyoptionSubCars(noneDisplayI);
    setmyoptionSubProperties(noneDisplayI);
    setmyoptionSubJobs(noneDisplayI);
    setmyoptionSubServices(noneDisplayI);
    setmyoptionSubClassifieds(noneDisplayI);
    setmyoptionSubElectronics(noneDisplayI);
    setmyoptionSubAnimals(noneDisplayI);
    setmyoptionSubFurniture(noneDisplayI);
    setmyoptionSubPersonalitems(noneDisplayI);
    setmyoptionSubFooddrinks(noneDisplayI);

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

    setmyoptionElectronics(noneDisplayI);
    setmyoptionAnimals(noneDisplayI);
    setmyoptionFurniture(noneDisplayI);
    setmyoptionPersonalitems(noneDisplayI);
    setmyoptionFooddrinks(noneDisplayI);


    setmyoptionSubProperties(noneDisplayI);
    setmyoptionSubJobs(noneDisplayI);
    setmyoptionSubServices(noneDisplayI);
    setmyoptionSubClassifieds(noneDisplayI);
    setmyoptionSubElectronics(noneDisplayI);
    setmyoptionSubAnimals(noneDisplayI);
    setmyoptionSubFurniture(noneDisplayI);
    setmyoptionSubPersonalitems(noneDisplayI);
    setmyoptionSubFooddrinks(noneDisplayI);
  };


  //Properties Market
  const optionProperties1 = async e => {
   
    setmyoptionProperties(displayI);
    setmyoptionSubProperties(displayI);

    setmyoptionCars(noneDisplayI);
    setmyoptionJobs(noneDisplayI);
    setmyoptionServices(noneDisplayI);
    setmyoptionClassifieds(noneDisplayI);
    setmyoptionElectronics(noneDisplayI);
    setmyoptionAnimals(noneDisplayI);
    setmyoptionFurniture(noneDisplayI);
    setmyoptionPersonalitems(noneDisplayI);
    setmyoptionFooddrinks(noneDisplayI);
    setmyoptionSubCars(noneDisplayI);
    setmyoptionSubJobs(noneDisplayI);
    setmyoptionSubServices(noneDisplayI);
    setmyoptionSubClassifieds(noneDisplayI);
    setmyoptionSubElectronics(noneDisplayI);
    setmyoptionSubAnimals(noneDisplayI);
    setmyoptionSubFurniture(noneDisplayI);
    setmyoptionSubPersonalitems(noneDisplayI);
    setmyoptionSubFooddrinks(noneDisplayI);
  };




  //Job Market
  const optionJobs1 = async e => {
  
    setmyoptionJobs(displayI);
    setmyoptionSubJobs(displayI);

    setmyoptionProperties(noneDisplayI);
    setmyoptionCars(noneDisplayI);
    setmyoptionServices(noneDisplayI);
    setmyoptionClassifieds(noneDisplayI);
    setmyoptionElectronics(noneDisplayI);
    setmyoptionAnimals(noneDisplayI);
    setmyoptionFurniture(noneDisplayI);
    setmyoptionPersonalitems(noneDisplayI);
    setmyoptionFooddrinks(noneDisplayI);
    setmyoptionSubProperties(noneDisplayI);
    setmyoptionSubCars(noneDisplayI);
    setmyoptionSubServices(noneDisplayI);
    setmyoptionSubClassifieds(noneDisplayI);
    setmyoptionSubElectronics(noneDisplayI);
    setmyoptionSubAnimals(noneDisplayI);
    setmyoptionSubFurniture(noneDisplayI);
    setmyoptionSubPersonalitems(noneDisplayI);
    setmyoptionSubFooddrinks(noneDisplayI);
  };


//Services Market
  const optionServices1 = async e => {
  
    setmyoptionServices(displayI);
    setmyoptionSubServices(displayI);

    setmyoptionJobs(noneDisplayI);
    setmyoptionProperties(noneDisplayI);
    setmyoptionCars(noneDisplayI);
    setmyoptionClassifieds(noneDisplayI);
    setmyoptionElectronics(noneDisplayI);
    setmyoptionAnimals(noneDisplayI);
    setmyoptionFurniture(noneDisplayI);
    setmyoptionPersonalitems(noneDisplayI);
    setmyoptionFooddrinks(noneDisplayI);
    setmyoptionSubJobs(noneDisplayI);
    setmyoptionSubProperties(noneDisplayI);
    setmyoptionSubCars(noneDisplayI);
    setmyoptionSubClassifieds(noneDisplayI);
    setmyoptionSubElectronics(noneDisplayI);
    setmyoptionSubAnimals(noneDisplayI);
    setmyoptionSubFurniture(noneDisplayI);
    setmyoptionSubPersonalitems(noneDisplayI);
    setmyoptionSubFooddrinks(noneDisplayI);
  };



  //Classifieds Market
  const optionClassifieds1 = async e => {
  
    
    setmyoptionClassifieds(displayI);
    setmyoptionSubClassifieds(displayI);

    setmyoptionServices(noneDisplayI);
    setmyoptionJobs(noneDisplayI);
    setmyoptionProperties(noneDisplayI);
    setmyoptionCars(noneDisplayI);
    setmyoptionElectronics(noneDisplayI);
    setmyoptionAnimals(noneDisplayI);
    setmyoptionFurniture(noneDisplayI);
    setmyoptionPersonalitems(noneDisplayI);
    setmyoptionFooddrinks(noneDisplayI);
    setmyoptionSubServices(noneDisplayI);
    setmyoptionSubJobs(noneDisplayI);
    setmyoptionSubProperties(noneDisplayI);
    setmyoptionSubCars(noneDisplayI);
    setmyoptionSubElectronics(noneDisplayI);
    setmyoptionSubAnimals(noneDisplayI);
    setmyoptionSubFurniture(noneDisplayI);
    setmyoptionSubPersonalitems(noneDisplayI);
    setmyoptionSubFooddrinks(noneDisplayI);
 
  };



    //Electronics Market
    const optionElectronics1 = async e => {
      setmyoptionElectronics(displayI);
      setmyoptionSubElectronics(displayI);  
      
      setmyoptionServices(noneDisplayI);
      setmyoptionJobs(noneDisplayI);
      setmyoptionProperties(noneDisplayI);
      setmyoptionCars(noneDisplayI);
      setmyoptionClassifieds(noneDisplayI);
      setmyoptionAnimals(noneDisplayI);
      setmyoptionFurniture(noneDisplayI);
      setmyoptionPersonalitems(noneDisplayI);
      setmyoptionFooddrinks(noneDisplayI);
  
  
  
      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubCars(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);
      setmyoptionSubAnimals(noneDisplayI);
      setmyoptionSubFurniture(noneDisplayI);
      setmyoptionSubPersonalitems(noneDisplayI);
      setmyoptionSubFooddrinks(noneDisplayI);
   
    };
  
  
  
  
  
  
    //Animals Market
    const optionAnimals1 = async e => {
      setmyoptionAnimals(displayI);
      setmyoptionSubAnimals(displayI);
       
      
      setmyoptionServices(noneDisplayI);
      setmyoptionJobs(noneDisplayI);
      setmyoptionProperties(noneDisplayI);
      setmyoptionCars(noneDisplayI);
      setmyoptionClassifieds(noneDisplayI);
      setmyoptionElectronics(noneDisplayI);
      setmyoptionFurniture(noneDisplayI);
      setmyoptionPersonalitems(noneDisplayI);
      setmyoptionFooddrinks(noneDisplayI);
  
  
  
      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubCars(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);
      setmyoptionSubElectronics(noneDisplayI); 
      setmyoptionSubFurniture(noneDisplayI);
      setmyoptionSubPersonalitems(noneDisplayI);
      setmyoptionSubFooddrinks(noneDisplayI);
   
    };
  
  
  
  
  
  
  
    //Furniture Market
    const optionFurniture1 = async e => {
      
      setmyoptionFurniture(displayI);
      setmyoptionSubFurniture(displayI);
       
      
      setmyoptionServices(noneDisplayI);
      setmyoptionJobs(noneDisplayI);
      setmyoptionProperties(noneDisplayI);
      setmyoptionCars(noneDisplayI);
      setmyoptionClassifieds(noneDisplayI);
      setmyoptionElectronics(noneDisplayI);
      setmyoptionAnimals(noneDisplayI);
      setmyoptionPersonalitems(noneDisplayI);
      setmyoptionFooddrinks(noneDisplayI);
  
  
  
      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubCars(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);
      setmyoptionSubElectronics(noneDisplayI); 
      setmyoptionSubAnimals(noneDisplayI);
      setmyoptionSubPersonalitems(noneDisplayI);
      setmyoptionSubFooddrinks(noneDisplayI);
   
    };
  
  
  
  
  
  
  
    //Personalitems Market
    const optionPersonalitems1 = async e => {
      
      setmyoptionPersonalitems(displayI);
      setmyoptionSubPersonalitems(displayI);
      
       
      
      setmyoptionServices(noneDisplayI);
      setmyoptionJobs(noneDisplayI);
      setmyoptionProperties(noneDisplayI);
      setmyoptionCars(noneDisplayI);
      setmyoptionClassifieds(noneDisplayI);
      setmyoptionElectronics(noneDisplayI);
      setmyoptionAnimals(noneDisplayI);
      setmyoptionFurniture(noneDisplayI);
      setmyoptionFooddrinks(noneDisplayI);
  
  
  
      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubCars(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);
      setmyoptionSubElectronics(noneDisplayI); 
      setmyoptionSubAnimals(noneDisplayI);
      setmyoptionSubFurniture(noneDisplayI);
      setmyoptionSubFooddrinks(noneDisplayI);
   
    };
  
  
  
  
   
  
    //Fooddrinks Market
    const optionFooddrinks1 = async e => {
      
     setmyoptionFooddrinks(displayI);
     setmyoptionSubFooddrinks(displayI);
      
      setmyoptionServices(noneDisplayI);
      setmyoptionJobs(noneDisplayI);
      setmyoptionProperties(noneDisplayI);
      setmyoptionCars(noneDisplayI);
      setmyoptionClassifieds(noneDisplayI);
      setmyoptionElectronics(noneDisplayI);
      setmyoptionAnimals(noneDisplayI);
      setmyoptionFurniture(noneDisplayI);
      setmyoptionPersonalitems(noneDisplayI);
  
      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubCars(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);
      setmyoptionSubElectronics(noneDisplayI); 
      setmyoptionSubAnimals(noneDisplayI);
      setmyoptionSubFurniture(noneDisplayI);
      setmyoptionSubPersonalitems(noneDisplayI);
   
    };
  
  
  
    


  ////////////////////////////////////////-----------Categories on the markets-------------/////////////////////////////////////////
    // For Sub WorkFlow 
    const [optionSubFirst, setmyoptionSubFirst] = useState(displayI);
    const [optionSubCars, setmyoptionSubCars] = useState(noneDisplayI);
    const [optionSubProperties, setmyoptionSubProperties] = useState(noneDisplayI);
    const [optionSubJobs, setmyoptionSubJobs] = useState(noneDisplayI);
    const [optionSubServices, setmyoptionSubServices] = useState(noneDisplayI);
    const [optionSubClassifieds, setmyoptionSubClassifieds] = useState(noneDisplayI);

    const [optionSubElectronics, setmyoptionSubElectronics] = useState(noneDisplayI);
    const [optionSubAnimals, setmyoptionSubAnimals] = useState(noneDisplayI);
    const [optionSubFurniture, setmyoptionSubFurniture] = useState(noneDisplayI);
    const [optionSubPersonalitems, setmyoptionSubPersonalitems] = useState(noneDisplayI);
    const [optionSubFooddrinks, setmyoptionSubFooddrinks] = useState(noneDisplayI);


 

//Sub Cars
    const optionSubCars1 = async e => {
      setmyoptionSubCars(displayI);
      setmyoptionCountry(displayI);

      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);
      setmyoptionSubElectronics(noneDisplayI); 
      setmyoptionSubAnimals(noneDisplayI);
      setmyoptionSubFurniture(noneDisplayI);
      setmyoptionSubPersonalitems(noneDisplayI);
      setmyoptionSubFooddrinks(noneDisplayI);

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
      setmyoptionSubElectronics(noneDisplayI); 
      setmyoptionSubAnimals(noneDisplayI);
      setmyoptionSubFurniture(noneDisplayI);
      setmyoptionSubPersonalitems(noneDisplayI);
      setmyoptionSubFooddrinks(noneDisplayI);
    };
  
  


    //Sub Jobs
    const optionSubJobs1 = async e => {
      setmyoptionSubJobs(displayI);
      setmyoptionCountry(displayI);

      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubCars(noneDisplayI);
      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);
      setmyoptionSubElectronics(noneDisplayI); 
      setmyoptionSubAnimals(noneDisplayI);
      setmyoptionSubFurniture(noneDisplayI);
      setmyoptionSubPersonalitems(noneDisplayI);
      setmyoptionSubFooddrinks(noneDisplayI);
    };
  
  
  

    //Sub Services 
    const optionSubServices1 = async e => {
      setmyoptionSubServices(displayI);
      setmyoptionCountry(displayI);
      
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubCars(noneDisplayI);
      setmyoptionSubClassifieds(noneDisplayI);
      setmyoptionSubElectronics(noneDisplayI); 
      setmyoptionSubAnimals(noneDisplayI);
      setmyoptionSubFurniture(noneDisplayI);
      setmyoptionSubPersonalitems(noneDisplayI);
      setmyoptionSubFooddrinks(noneDisplayI);
    };
  
  
  


    //Sub Classifieds
    const optionSubClassifieds1 = async e => {
      setmyoptionSubClassifieds(displayI);
      setmyoptionCountry(displayI);

      setmyoptionSubServices(noneDisplayI);
      setmyoptionSubJobs(noneDisplayI);
      setmyoptionSubProperties(noneDisplayI);
      setmyoptionSubCars(noneDisplayI);
      setmyoptionSubElectronics(noneDisplayI); 
      setmyoptionSubAnimals(noneDisplayI);
      setmyoptionSubFurniture(noneDisplayI);
      setmyoptionSubPersonalitems(noneDisplayI);
      setmyoptionSubFooddrinks(noneDisplayI);
   
    };




    
 //Sub Electronics
 const optionSubElectronics1 = async e => {
      
  setmyoptionSubElectronics(displayI); 
  setmyoptionCountry(displayI);

  setmyoptionSubServices(noneDisplayI);
  setmyoptionSubJobs(noneDisplayI);
  setmyoptionSubProperties(noneDisplayI);
  setmyoptionSubCars(noneDisplayI);
  setmyoptionSubClassifieds(noneDisplayI);
  
  setmyoptionSubAnimals(noneDisplayI);
  setmyoptionSubFurniture(noneDisplayI);
  setmyoptionSubPersonalitems(noneDisplayI);
  setmyoptionSubFooddrinks(noneDisplayI);

};







//Sub Animals
const optionSubAnimals1 = async e => {
  
  setmyoptionSubAnimals(displayI);
  setmyoptionCountry(displayI);

  setmyoptionSubServices(noneDisplayI);
  setmyoptionSubJobs(noneDisplayI);
  setmyoptionSubProperties(noneDisplayI);
  setmyoptionSubCars(noneDisplayI);
  setmyoptionSubClassifieds(noneDisplayI);
  setmyoptionSubElectronics(noneDisplayI); 
  
  setmyoptionSubFurniture(noneDisplayI);
  setmyoptionSubPersonalitems(noneDisplayI);
  setmyoptionSubFooddrinks(noneDisplayI);

};






//Sub Furniture
const optionSubFurniture1 = async e => {
  
  setmyoptionSubFurniture(displayI);
  setmyoptionCountry(displayI);

  setmyoptionSubServices(noneDisplayI);
  setmyoptionSubJobs(noneDisplayI);
  setmyoptionSubProperties(noneDisplayI);
  setmyoptionSubCars(noneDisplayI);
  setmyoptionSubClassifieds(noneDisplayI);
  setmyoptionSubElectronics(noneDisplayI); 
  setmyoptionSubAnimals(noneDisplayI);
  
  setmyoptionSubPersonalitems(noneDisplayI);
  setmyoptionSubFooddrinks(noneDisplayI);

};







//Sub Personalitems
const optionSubPersonalitems1 = async e => {
  
  setmyoptionSubPersonalitems(displayI);
  setmyoptionCountry(displayI);

  setmyoptionSubServices(noneDisplayI);
  setmyoptionSubJobs(noneDisplayI);
  setmyoptionSubProperties(noneDisplayI);
  setmyoptionSubCars(noneDisplayI);
  setmyoptionSubClassifieds(noneDisplayI);
  setmyoptionSubElectronics(noneDisplayI); 
  setmyoptionSubAnimals(noneDisplayI);
  setmyoptionSubFurniture(noneDisplayI);
  
  setmyoptionSubFooddrinks(noneDisplayI);

};







//Sub Fooddrinks
const optionSubFooddrinks1 = async e => {

  setmyoptionSubFooddrinks(displayI);
  setmyoptionCountry(displayI);

  setmyoptionSubServices(noneDisplayI);
  setmyoptionSubJobs(noneDisplayI);
  setmyoptionSubProperties(noneDisplayI);
  setmyoptionSubCars(noneDisplayI);
  setmyoptionSubClassifieds(noneDisplayI);
  setmyoptionSubElectronics(noneDisplayI); 
  setmyoptionSubAnimals(noneDisplayI);
  setmyoptionSubFurniture(noneDisplayI);
  setmyoptionSubPersonalitems(noneDisplayI);
  

};





    //Work Flow For Country
    const [optionCountry, setmyoptionCountry] = useState(noneDisplayI);
    const [optionCity, setmyoptionCity] = useState(noneDisplayI);


    const optionCountry1 = async e => {
      setmyoptionCountry(displayI);
      // setmyoptionContact(displayI);
      setmyoptionCity(displayI);
      setcountryCode(country_code); 
   
    };

    const optionCity1 =  async e => {
      setmyoptionContact(displayI);
    }



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

          const [MiddleEastSelection, setmyMiddleEastSelection] = useState(displayI);
          const [AustraliaSelection, setmyAustraliaSelection] = useState(displayI);
          const [AfricaSelection, setmyAfricaSelection] = useState(displayI);
          const [EuropeSelection, setmyEuropeSelection] = useState(displayI);
          const [SouthAmericaSelection, setmySouthAmericaSelection] = useState(displayI);
          const [NorthAmaricaSelection, setmyNorthAmaricaSelection] = useState(displayI);
          const [AsiaSelection, setmyAsiaSelection] = useState(displayI);






          

          
          const [MiddleEast, setmyMiddleEastOption] = useState(noneDisplayI);
          const MiddleEastOption = async e => {

            setmyMiddleEastOption(displayI);
            setmyAustraliaOption(noneDisplayI);
            setmyAsiaOption(noneDisplayI);
            setmyEuropeOption(noneDisplayI);
            setmyAfricaOption(noneDisplayI);
            setmyNorthAmaricaOption(noneDisplayI);
            setmySouthAmericaOption(noneDisplayI);


            setmyMiddleEastSelection(displayI);
            setmyAustraliaSelection(noneDisplayI);
            setmyAsiaSelection(noneDisplayI);
            setmyEuropeSelection(noneDisplayI);
            setmyAfricaSelection(noneDisplayI);
            setmyNorthAmaricaSelection(noneDisplayI);
            setmySouthAmericaSelection(noneDisplayI);

          };

          const [Australia, setmyAustraliaOption] = useState(noneDisplayI);
          const AustraliaOption = async e => {
            setmyAustraliaOption(displayI);

            setmyMiddleEastOption(noneDisplayI);
            setmyAsiaOption(noneDisplayI);
            setmyEuropeOption(noneDisplayI);
            setmyAfricaOption(noneDisplayI);
            setmyNorthAmaricaOption(noneDisplayI);
            setmySouthAmericaOption(noneDisplayI);


            setmyMiddleEastSelection(noneDisplayI);
            setmyAustraliaSelection(displayI);
            setmyAsiaSelection(noneDisplayI);
            setmyEuropeSelection(noneDisplayI);
            setmyAfricaSelection(noneDisplayI);
            setmyNorthAmaricaSelection(noneDisplayI);
            setmySouthAmericaSelection(noneDisplayI);

          };

          const [Asia, setmyAsiaOption] = useState(noneDisplayI);
          const AsiaOption = async e => {
            setmyAsiaOption(displayI);

            setmyMiddleEastOption(noneDisplayI);
            setmyAustraliaOption(noneDisplayI);
            setmyEuropeOption(noneDisplayI);
            setmyAfricaOption(noneDisplayI);
            setmyNorthAmaricaOption(noneDisplayI);
            setmySouthAmericaOption(noneDisplayI);


            setmyMiddleEastSelection(noneDisplayI);
            setmyAustraliaSelection(noneDisplayI);
            setmyAsiaSelection(displayI);
            setmyEuropeSelection(noneDisplayI);
            setmyAfricaSelection(noneDisplayI);
            setmyNorthAmaricaSelection(noneDisplayI);
            setmySouthAmericaSelection(noneDisplayI);

          };


          const [Europe, setmyEuropeOption] = useState(noneDisplayI);
          const EuropeOption = async e => {
            setmyEuropeOption(displayI);

            setmyMiddleEastOption(noneDisplayI);
            setmyAustraliaOption(noneDisplayI);
            setmyAsiaOption(noneDisplayI);
            setmyAfricaOption(noneDisplayI);
            setmyNorthAmaricaOption(noneDisplayI);
            setmySouthAmericaOption(noneDisplayI);


            setmyMiddleEastSelection(noneDisplayI);
            setmyAustraliaSelection(noneDisplayI);
            setmyAsiaSelection(noneDisplayI);
            setmyEuropeSelection(displayI);
            setmyAfricaSelection(noneDisplayI);
            setmyNorthAmaricaSelection(noneDisplayI);
            setmySouthAmericaSelection(noneDisplayI);

          };


          const [Africa, setmyAfricaOption] = useState(noneDisplayI);
          const AfricaOption = async e => {
            setmyAfricaOption(displayI);

            setmyMiddleEastOption(noneDisplayI);
            setmyAustraliaOption(noneDisplayI);
            setmyAsiaOption(noneDisplayI);
            setmyEuropeOption(noneDisplayI);
            setmyNorthAmaricaOption(noneDisplayI);
            setmySouthAmericaOption(noneDisplayI);



            setmyMiddleEastSelection(noneDisplayI);
            setmyAustraliaSelection(noneDisplayI);
            setmyAsiaSelection(noneDisplayI);
            setmyEuropeSelection(noneDisplayI);
            setmyAfricaSelection(displayI);
            setmyNorthAmaricaSelection(noneDisplayI);
            setmySouthAmericaSelection(noneDisplayI);

          };


          const [NorthAmarica, setmyNorthAmaricaOption] = useState(noneDisplayI);
          const NorthAmaricaOption = async e => {
            setmyNorthAmaricaOption(displayI);


            setmyMiddleEastOption(noneDisplayI);
            setmyAustraliaOption(noneDisplayI);
            setmyAsiaOption(noneDisplayI);
            setmyEuropeOption(noneDisplayI);
            setmyAfricaOption(noneDisplayI);
            setmySouthAmericaOption(noneDisplayI);


            setmyMiddleEastSelection(noneDisplayI);
            setmyAustraliaSelection(noneDisplayI);
            setmyAsiaSelection(noneDisplayI);
            setmyEuropeSelection(noneDisplayI);
            setmyAfricaSelection(noneDisplayI);
            setmyNorthAmaricaSelection(displayI);
            setmySouthAmericaSelection(noneDisplayI);

          };


          const [SouthAmerica, setmySouthAmericaOption] = useState(noneDisplayI);
          const SouthAmericaOption = async e => {
            setmySouthAmericaOption(displayI);

            setmyMiddleEastOption(noneDisplayI);
            setmyAustraliaOption(noneDisplayI);
            setmyAsiaOption(noneDisplayI);
            setmyEuropeOption(noneDisplayI);
            setmyAfricaOption(noneDisplayI);
            setmyNorthAmaricaOption(noneDisplayI);


            setmyMiddleEastSelection(noneDisplayI);
            setmyAustraliaSelection(noneDisplayI);
            setmyAsiaSelection(noneDisplayI);
            setmyEuropeSelection(noneDisplayI);
            setmyAfricaSelection(noneDisplayI);
            setmyNorthAmaricaSelection(noneDisplayI);
            setmySouthAmericaSelection(displayI);

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




 //Back to Electronics
 const optionSubBackElectronics = async e => {
  setmyoptionSubElectronics(displayI);
  
  setmyoptionCountry(noneDisplayI);
  setmyoptionContact(noneDisplayI);
  setmyoptionDetails(noneDisplayI);
  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);
};







 //Back to Animals
 const optionSubBackAnimals = async e => {
  setmyoptionSubAnimals(displayI);
  
  setmyoptionCountry(noneDisplayI);
  setmyoptionContact(noneDisplayI);
  setmyoptionDetails(noneDisplayI);
  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);
};







 //Back to Furniture
 const optionSubBackFurniture = async e => {
  setmyoptionSubFurniture(displayI);
  
  setmyoptionCountry(noneDisplayI);
  setmyoptionContact(noneDisplayI);
  setmyoptionDetails(noneDisplayI);
  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);
};






 //Back to Personalitems
 const optionSubBackPersonalitems = async e => {
  setmyoptionSubPersonalitems(displayI);
  
  setmyoptionCountry(noneDisplayI);
  setmyoptionContact(noneDisplayI);
  setmyoptionDetails(noneDisplayI);
  setmyoptionEnglishDetails(noneDisplayI);
  setmyoptionImages(noneDisplayI);
  setmyoptionSubmit(noneDisplayI);
};





 //Back to Fooddrinks
 const optionSubBackFooddrinks = async e => {
  setmyoptionSubFooddrinks(displayI);
  
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
  setmyoptionCity(noneDisplayI);
  


  setmyMiddleEastSelection(displayI);
  setmyAustraliaSelection(displayI);
  setmyAsiaSelection(displayI);
  setmyEuropeSelection(displayI);
  setmyAfricaSelection(displayI);
  setmyNorthAmaricaSelection(displayI);
  setmySouthAmericaSelection(displayI);





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
  
     
     
    const [DurationStyle10,setDurationStyle10] = useState('FormbuttonDuration')
    const [DurationStyle20,setDurationStyle20] = useState('FormbuttonDuration')
    const [DurationStyle30,setDurationStyle30] = useState('FormbuttonDuration')
    const [DurationStyle60,setDurationStyle60] = useState('FormbuttonDuration')
    const [DurationStyle90,setDurationStyle90] = useState('FormbuttonDuration')
    const [DurationStyle120,setDurationStyle120] = useState('FormbuttonDuration')
    const [DurationStyle000,setDurationStyle000] = useState('FormbuttonDuration')
  

    const [expired,setExpired] = useState('')
    const [duration, setDuration] = useState()
    const [image, setImage] = useState('')
    const [pic1, setPic1] = useState('')
    const [pic2, setPic2] = useState('')
    const [pic3, setPic3] = useState('')
    const [pic4, setPic4] = useState('')
    const [pic5, setPic5] = useState('')
    const [pic6, setPic6] = useState('')
    const [pic7, setPic7] = useState('')
    const [pic8, setPic8] = useState('')
    const [pic9, setPic9] = useState('')
    const [pic10, setPic10] = useState('')
  
    const [loading, setLoading] = useState(false)
     
      const [formData, setFormData] = useState({
        title:'',
        title_English:'',
        purpose_code:'',
        price:'',
        currency:'',
        writer:'',
        activation:'no',
        premium:'no',

        category_code:'',
        category_name:'',

        market_code:'',
        market_name:'',

      //  country_code:'',
        city_code:'',

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
        //duration:'',
        //expired:''

        
        

  
   
               
            });
            const {
                  title,
                  title_English,
                  purpose_code,
                  price,
                  currency,
                  writer,
                  P_Img,
                  activation,
                  premium,

                  category_code,
                  category_name,

                  market_code,
                  market_name,

                //  country_code,
                  city_code,
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
                  //duration,
                  //expired
                 
                
  
             
 
  
          
          
          
  
                  
            } = formData;
   
            const onChange = e =>
            setFormData({ ...formData, [e.target.name]: e.target.value });
  
            const onselect = e =>
            setFormData({ ...formData, [e.target.id]: e.target.value });
  
   
  
                    const onChangeimage = e => {
                      setImage({ image: e.target.files[0] });
                      };

                      const onChangeDuration10 = async e => {
                       let m= moment();
                       m.add(10,'days')   
                        setExpired(m.toString());
                        setDurationStyle10('selectedDuration')

                        setDurationStyle20('FormbuttonDuration')
                        setDurationStyle30('FormbuttonDuration')
                        setDurationStyle60('FormbuttonDuration')
                        setDurationStyle90('FormbuttonDuration')
                        setDurationStyle120('FormbuttonDuration')
                        setDurationStyle000('FormbuttonDuration')

                        };

                        const onChangeDuration20 = async e => {
                          let m= moment();
                          m.add(20,'days')   
                           setExpired(m.toString());
                           setDurationStyle20('selectedDuration')

                           
                           setDurationStyle10('FormbuttonDuration')
                           setDurationStyle30('FormbuttonDuration')
                           setDurationStyle60('FormbuttonDuration')
                           setDurationStyle90('FormbuttonDuration')
                           setDurationStyle120('FormbuttonDuration')
                           setDurationStyle000('FormbuttonDuration')
                          };



                          const onChangeDuration30 = async e => {
                            let m= moment();
                            m.add(30,'days')   
                             setExpired(m.toString());
                             setDurationStyle30('selectedDuration')

                            
                             setDurationStyle10('FormbuttonDuration')
                             setDurationStyle20('FormbuttonDuration')
                             setDurationStyle60('FormbuttonDuration')
                             setDurationStyle90('FormbuttonDuration')
                             setDurationStyle120('FormbuttonDuration')
                             setDurationStyle000('FormbuttonDuration')
                            };



                            const onChangeDuration60 = async e => {
                              let m= moment();
                              m.add(60,'days')   
                               setExpired(m.toString());
                               setDurationStyle60('selectedDuration')
                               
                               setDurationStyle10('FormbuttonDuration')
                               setDurationStyle20('FormbuttonDuration')
                               setDurationStyle30('FormbuttonDuration')
                               setDurationStyle90('FormbuttonDuration')
                               setDurationStyle120('FormbuttonDuration')
                               setDurationStyle000('FormbuttonDuration')
                              };



                              const onChangeDuration90 = async e => {
                                let m= moment();
                                m.add(90,'days')   
                                 setExpired(m.toString());
                                 setDurationStyle90('selectedDuration')
                                 
                                 setDurationStyle10('FormbuttonDuration')
                                 setDurationStyle20('FormbuttonDuration')
                                 setDurationStyle30('FormbuttonDuration')
                                 setDurationStyle60('FormbuttonDuration')
                                 setDurationStyle120('FormbuttonDuration')
                                 setDurationStyle000('FormbuttonDuration')
                                };



                                const onChangeDuration120 = async e => {
                                  let m= moment();
                                  m.add(120,'days')   
                                   setExpired(m.toString());
                                   setDurationStyle120('selectedDuration')
                                   
                                   setDurationStyle10('FormbuttonDuration')
                                   setDurationStyle20('FormbuttonDuration')
                                   setDurationStyle30('FormbuttonDuration')
                                   setDurationStyle60('FormbuttonDuration')
                                   setDurationStyle90('FormbuttonDuration')
                                   setDurationStyle000('FormbuttonDuration')
                                  };




                                  const onChangeDuration000 = async e => {
                                     let m= moment();
                                     m.add(365,'days')   
                                     setExpired(m.toString());
                                     setDurationStyle000('selectedDuration')
                                     
                                     setDurationStyle10('FormbuttonDuration')
                                     setDurationStyle20('FormbuttonDuration')
                                     setDurationStyle30('FormbuttonDuration')
                                     setDurationStyle60('FormbuttonDuration')
                                     setDurationStyle90('FormbuttonDuration')
                                     setDurationStyle120('FormbuttonDuration')
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

                if (title === '') {

                  
                  setAlertWarning('الرجاء كتابة عنوان لإعلانك');
                  setAlertWarningEnglish('Please write a title for your ad');
                  
                  
                } else if(purpose_code === '' ){
                  setAlertWarning('الرجاء تحديد الغرض من الإعلان');
                  setAlertWarningEnglish('Please specify the purpose of the advertisement');
               
                }
                else if(category_code === '' ){
                  setAlertWarning('الرجاء اختيار التصنيف');
                  setAlertWarningEnglish('Please select a category');
               
                }
                
                else if(Main_paragraph === '' ){
                  setAlertWarning('الرجاء كتابة تفاصيل الإعلان');
                  setAlertWarningEnglish('Please write the details of the advertisement');
               
                }
                else if(country_code === ''  ){
                  setAlertWarning('الرجاء اختيار الدولة');
                  setAlertWarningEnglish('Please select a country');
               
             
              }
              else if(city_code === ''  ){
                setAlertWarning('الرجاء اختيار المدينة');
                setAlertWarningEnglish('Please select a city');
             
              }
                else {
  
              addPost({ 
             
                 title,
                 title_English,
                 purpose_code,
                 price,
                 currency,
                  writer,
                  activation,
                  premium,
                  category_code,
                  category_name,

                  market_code,
                  market_name,
                  country_code,
                  city_code,
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
                  //duration,
                 expired,

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

            setAlertSuccess('تم حفظ الإعلان')
            setAlertSuccessEnglish('Ad saved')
            setFinish(noneDisplayI)

          }
          };
            
    
  
          const uploadImage = async e => {
            const files = e.target.files
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'faizads')
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
            data.append('upload_preset', 'faizads')
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
                      data.append('upload_preset', 'faizads')
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
                                          data.append('upload_preset', 'faizads')
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
                      data.append('upload_preset', 'faizads')
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
                                          data.append('upload_preset', 'faizads')
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
                      data.append('upload_preset', 'faizads')
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
                                          data.append('upload_preset', 'faizads')
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
                      data.append('upload_preset', 'faizads')
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
                                          data.append('upload_preset', 'faizads')
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
                      data.append('upload_preset', 'faizads')
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
  
                    const subscriptionEnd = (
                      <Fragment>
                           <Link to='/membership/prices' className="Dash-button-end-subscription">
                            {t('Addpost_msg_warning_no_plan')}
                          </Link>
                      </Fragment>
                    );
 
         const adFormation = (
        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">

        <center>         
  
 
        <Alert />
       
       
         
     
     
        <form className="login-form" onSubmit={e => onSubmit(e)}>
        
      
        
        <div className="new-ad-title"> {t('Addpost_title')} </div>
        {/* left Side */}
      <div className='FormCover'>



  
  <div className={optionFirst} onClick={optionFirst1}>
  <div  className="topadtitleinput">  {t('Addpost_market_title')}   <i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
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
  <div  className="radioinput"> {t('Addpost_market_Cars')} <i class="fa fa-car fa-2x" aria-hidden="true"></i>
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
  <div  className="radioinput"> {t('Addpost_market_Properties')}  <i class="fa fa-home fa-2x" aria-hidden="true"></i>
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
  <div  className="radioinput"> {t('Addpost_market_Jobs')}  <i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>
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
  <div  className="radioinput"> {t('Addpost_market_Services')}  <i class="fa fa-handshake-o fa-2x" aria-hidden="true"></i>
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
  <div  className="radioinput"> {t('Addpost_market_Classifieds')}  <i class="fa fa-opencart fa-2x" aria-hidden="true"></i>
  <input className="radioinput"  type="radio" id="market5" name='market_code'  value='classifieds'  onChange={e => onChange(e)} 
   onClick={optionClassifieds1}
  />
  <span class="checkmark"></span>
  </div> 
  </label>
  </center> 
  </div>





  <div className={optionElectronics}>
  <center> 
  <label className="container11" for='market6'>  
  <div  className="radioinput"> {t('Addpost_market_Electronics')}   <i class="fa fa-television fa-2x" aria-hidden="true"></i> <i class="fa fa-mobile" aria-hidden="true"></i>
  <input className="radioinput"  type="radio" id="market6" name='market_code'  value='electronics'  onChange={e => onChange(e)} 
   onClick={optionElectronics1}
  />
  <span class="checkmark"></span>
  </div> 
  </label>
  </center> 
  </div>





  <div className={optionAnimals}>
  <center> 
  <label className="container11" for='market7'>  
  <div  className="radioinput"> {t('Addpost_market_Animals')}   
  <input className="radioinput"  type="radio" id="market7" name='market_code'  value='animals'  onChange={e => onChange(e)} 
   onClick={optionAnimals1}
  />
  <span class="checkmark"></span>
  </div> 
  </label>
  </center> 
  </div>




  <div className={optionFurniture}>
  <center> 
  <label className="container11" for='market8'>  
  <div  className="radioinput"> {t('Addpost_market_Furniture')}    
  <input className="radioinput"  type="radio" id="market8" name='market_code'  value='furniture'  onChange={e => onChange(e)} 
   onClick={optionFurniture1}
  />
  <span class="checkmark"></span>
  </div> 
  </label>
  </center> 
  </div>




  <div className={optionPersonalitems}>
  <center> 
  <label className="container11" for='market9'>  
  <div  className="radioinput"> {t('Addpost_market_Personalitems')}    
  <input className="radioinput"  type="radio" id="market9" name='market_code'  value='personal-items'  onChange={e => onChange(e)} 
   onClick={optionPersonalitems1}
  />
  <span class="checkmark"></span>
  </div> 
  </label>
  </center> 
  </div>

  
  

  <div className={optionFooddrinks}>
  <center> 
  <label className="container11" for='market10'>  
  <div  className="radioinput"> {t('Addpost_market_Fooddrinks')}   
  <input className="radioinput"  type="radio" id="market10" name='market_code'  value='food-drinks'  onChange={e => onChange(e)} 
   onClick={optionFooddrinks1}
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
                  name="purpose_code" 
                  value={purpose_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubCars1}
                  > 
                  <option className="optiontitleinput" value='nothing chosen'>{t('Addpost_purpose_title')}</option>
                
                  <option className="optiontitleinput" required value='for-sale'>  {t('Addpost_purpose_car_for_sale')}  </option>
                  <option className="optiontitleinput" required value='rental'> {t('Addpost_purpose_car_rental')}  </option>
                  <option className="optiontitleinput" required value='ask-buy'> {t('Addpost_purpose_car_ask-buy')}  </option>
                  <option className="optiontitleinput" required value='ask-rent'> {t('Addpost_purpose_car_ask-rent')}  </option>
                   

                  </select>

                  <div  className="topadtitleinput" onClick={optionSubBackCar}>  {t('Addpost_car_type')}    <i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>   
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubCars1}
                  > 
                  <option className="optiontitleinput" value='nothing chosen'> {t('chose')} </option>
                  {cars.map(car=>(
          
                    <option  className="optiontitleinput" required value={car.c_code}> 
                    {i18next.language === 'ar' && car.c_AR_name} 
                    {i18next.language === 'en' && car.c_EN_name} 
                    </option>
                    
                 

                    ))}

                  </select>

                  </div>



                  
                  <div className={optionSubProperties}>
                  <select className="topadtitleinput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="purpose_code" 
                  value={purpose_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubProperties1}
                  > 
                  <option className="optiontitleinput" value='nothing chosen'> {t('Addpost_purpose_title')} </option>
                  <option className="optiontitleinput" required value='rental'>  {t('Addpost_purpose_Properties_rental')}  </option>
                  <option className="optiontitleinput" required value='for-sale'>  {t('Addpost_purpose_Properties_for_sale')}  </option>
                  <option className="optiontitleinput" required value='ask-buy'> {t('Addpost_purpose_Properties_ask-buy')}  </option>
                  <option className="optiontitleinput" required value='ask-rent'> {t('Addpost_purpose_Properties_ask-rent')}   </option>
                  </select>

                  <div  className="topadtitleinput" onClick={optionSubBackProperties}>   {t('Addpost_property_type')}    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubProperties1}
                  > 
                  <option className="optiontitleinput" value='nothing chosen'> {t('chose')}  </option>
                  {properties.map(property=>(
                  <option className="optiontitleinput" required value={property.c_code}> 
                  {i18next.language ==='ar' && property.c_AR_name} 
                  {i18next.language ==='en' && property.c_EN_name} 
                  </option>
                    ))}
                  </select>
                  </div>



                  <div className={optionSubJobs}>

                  <select className="topadtitleinput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="purpose_code" 
                  value={purpose_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubJobs1}
                  > 
                  <option  className="optiontitleinput" value='nothing chosen'>{t('Addpost_purpose_title')}</option>
                
                  <option  className="optiontitleinput" required value='vacancies'> الاعلان عن وظيفة شاغرة  </option>
                  <option  className="optiontitleinput" required value='seeking-work'> الاعلان للبحث عن وظيفة   </option>
                  </select>




                  <div  className="topadtitleinput" onClick={optionSubBackJobs}>    {t('Addpost_job_type')}    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubJobs1}
                  > 
                  <option className="optiontitleinput" value='nothing chosen'>{t('chose')} </option>
                  {jobs.map(job=>(
                  <option className="optiontitleinput"  required value={job.c_code}> 
                  {i18next.language ==='ar' && job.c_AR_name} 
                  {i18next.language ==='en' && job.c_EN_name} 
                  </option>
                    ))}
                  </select>
                  </div>


                  <div className={optionSubServices}>
                  <div  className="topadtitleinput" onClick={optionSubBackServices}>  {t('Addpost_service_type')}   <i class="fa fa-pencil-square-o" aria-hidden="true"></i> </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubServices1}
                  > 
                  <option className="optiontitleinput"  value='nothing chosen'>{t('chose')} </option>
                  {services.map(service=>(
                  <option className="optiontitleinput"  required value={service.c_code}>
                  {i18next.language === 'ar' && service.c_AR_name} 
                  {i18next.language === 'en' && service.c_EN_name} 

                  </option>
                    ))}
                  </select>
                  </div>





                  <div className={optionSubClassifieds}>



                  <select className="topadtitleinput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="purpose_code" 
                  value={purpose_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubClassifieds1}
                  > 
                  <option className="optiontitleinput" value='nothing chosen'> {t('Addpost_purpose_title')} </option>
                  <option className="optiontitleinput" required value='rental'> {t('Addpost_purpose_Classifieds_rental')}  </option>
                  <option className="optiontitleinput" required value='for-sale'> {t('Addpost_purpose_Classifieds_for_sale')}  </option>
                  <option className="optiontitleinput" required value='ask-buy'> {t('Addpost_purpose_Classifieds_ask-buy')}   </option>
                  <option className="optiontitleinput" required value='ask-rent'> {t('Addpost_purpose_Classifieds_ask-rent')}   </option>
                  </select>


                  <div  className="topadtitleinput" onClick={optionSubBackClassifieds}>  {t('Addpost_classified_type')}    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>  </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubClassifieds1}
                  > 
                  <option  className="optiontitleinput" value='nothing chosen'>{t('chose')} </option>
                  {classifieds.map(classify=>(
                  <option  className="optiontitleinput" required value={classify.c_code}>
                  {i18next.language === 'ar' && classify.c_AR_name} 
                  {i18next.language === 'en' && classify.c_EN_name} 
                     </option>
                    ))}
                  </select>
                  </div>






                  <div className={optionSubElectronics}>


                  <select className="topadtitleinput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="purpose_code" 
                  value={purpose_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubElectronics1}
                  > 
                  <option className="optiontitleinput" value='nothing chosen'>{t('Addpost_purpose_title')} </option>
                  <option className="optiontitleinput" required value='rental'> {t('Addpost_purpose_Electronics_rental')}   </option>
                  <option className="optiontitleinput" required value='for-sale'> {t('Addpost_purpose_Electronics_for_sale')} </option>
                  <option className="optiontitleinput" required value='ask-buy'> {t('Addpost_purpose_Electronics_ask-buy')}  </option>
                  <option className="optiontitleinput" required value='ask-rent'> {t('Addpost_purpose_Electronics_ask-rent')}  </option>
                  </select>

                  <div  className="topadtitleinput" onClick={optionSubBackElectronics}>   {t('Addpost_electronic_type')}     <i class="fa fa-pencil-square-o" aria-hidden="true"></i>  </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubElectronics1}
                  > 
                  <option  className="optiontitleinput" value='nothing chosen'>{t('chose')} </option>
                  {electronics.map(electronic=>(
                  <option  className="optiontitleinput" required value={electronic.c_code}>
                     {i18next.language === 'ar' && electronic.c_AR_name} 
                     {i18next.language === 'en' && electronic.c_EN_name} 
                     </option>
                    ))}
                  </select>
                  </div>





                  <div className={optionSubAnimals}>

                  <select className="topadtitleinput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="purpose_code" 
                  value={purpose_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubAnimals1}
                  > 
                  <option className="optiontitleinput" value='nothing chosen'>{t('Addpost_purpose_title')}</option>
                  <option className="optiontitleinput" required value='for-sale'> {t('Addpost_purpose_Animals_for_sale')}  </option>
                  <option className="optiontitleinput" required value='ask-buy'> {t('Addpost_purpose_Animals_ask-buy')}  </option>
                  </select>

                  <div  className="topadtitleinput" onClick={optionSubBackAnimals}>   {t('Addpost_animal_type')}    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>  </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubAnimals1}
                  > 
                  <option  className="optiontitleinput" value='nothing chosen'>{t('chose')} </option>
                  {animals.map(animal=>(
                  <option  className="optiontitleinput" required value={animal.c_code}> 
                  {i18next.language === 'ar' && animal.c_AR_name} 
                  {i18next.language === 'en' && animal.c_EN_name}
                  </option>
                    ))}
                  </select>
                  </div>





                  <div className={optionSubFurniture}>

                  <select className="topadtitleinput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="purpose_code" 
                  value={purpose_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubFurniture1}
                  > 
                  <option className="optiontitleinput" value='nothing chosen'>{t('Addpost_purpose_title')}</option>
                  <option className="optiontitleinput" required value='for-sale'> {t('Addpost_purpose_Furniture_for_sale')}  </option>
                  <option className="optiontitleinput" required value='ask-buy'> {t('Addpost_purpose_Furniture_ask-buy')}   </option>
                  </select>

                  <div  className="topadtitleinput" onClick={optionSubBackFurniture}> {t('Addpost_furniture_type')} <i class="fa fa-pencil-square-o" aria-hidden="true"></i>  </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubFurniture1}
                  > 
                  <option  className="optiontitleinput" value='nothing chosen'>{t('chose')} </option>
                  {furniture.map(furniture=>(
                  <option  className="optiontitleinput" required value={furniture.c_code}> 
                  {i18next.language === 'ar' && furniture.c_AR_name} 
                  {i18next.language === 'en' && furniture.c_EN_name} 
                  </option>
                    ))}
                  </select>
                  </div>





                  <div className={optionSubPersonalitems}>

                  <select className="topadtitleinput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="purpose_code" 
                  value={purpose_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubPersonalitems1}
                  > 
                  <option className="optiontitleinput" value='nothing chosen'>{t('Addpost_purpose_title')}</option>
                  <option className="optiontitleinput" required value='for-sale'> {t('Addpost_purpose_PersonalItems_for_sale')}  </option>
                  <option className="optiontitleinput" required value='ask-buy'> {t('Addpost_purpose_PersonalItems_ask-buy')}   </option>
                  </select>


                  <div  className="topadtitleinput" onClick={optionSubBackPersonalitems}>  {t('Addpost_personalItems_type')}    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>  </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubPersonalitems1}
                  > 
                  <option  className="optiontitleinput" value='nothing chosen'>{t('chose')} </option>
                  {personalitems.map(personalitem=>(
                  <option  className="optiontitleinput" required value={personalitem.c_code}>
                   {i18next.language === 'ar' && personalitem.c_AR_name}
                   {i18next.language === 'en' && personalitem.c_EN_name}
                   </option>
                    ))}
                  </select>
                  </div>




                  <div className={optionSubFooddrinks}>

                  <select className="topadtitleinput" 
                   style={{width:'100%',marginLeft:'0%',textAlign:'center'}}
                  name="purpose_code" 
                  value={purpose_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubFooddrinks1}
                  > 
                  <option className="optiontitleinput" value='nothing chosen'>{t('Addpost_purpose_title')}</option>
                  <option className="optiontitleinput" required value='for-sale'> {t('Addpost_purpose_FoodDrinks_for_sale')}  </option>
                  <option className="optiontitleinput" required value='ask-buy'> {t('Addpost_purpose_FoodDrinks_ask-buy')}  </option>
                  </select>

                  <div  className="topadtitleinput" onClick={optionSubBackFooddrinks}>  {t('Addpost_foodDrink_type')}    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>  </div>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="category_code" 
                  value={category_code} 
                  onChange={e => onChange(e)}
                  onClick={optionSubFooddrinks1}
                  > 
                  <option  className="optiontitleinput" value='nothing chosen'>{t('chose')} </option>
                  {fooddrinks.map(fooddrink=>(
                  <option  className="optiontitleinput" required value={fooddrink.c_code}> 
                  {i18next.language === 'ar' && fooddrink.c_AR_name} 
                  {i18next.language === 'en' && fooddrink.c_EN_name} 
                  </option>
                    ))}
                  </select>
                  </div>

</div>

 

                  
                  

                  

  <div className={optionCountry}>

   
 
        <center> 
        <div  className="topadtitleinput" onClick={optionSubBackCountry}> your ad will be published in {user.country_code}   <i class="fa fa-globe" aria-hidden="true"> </i> </div>
        
        <center> <div  className="Formbutton" onClick={optionDetailsNext}> <i class="fa fa-arrow-down" aria-hidden="true"></i> {t('Addpost_next_step')}  </div> </center>


  

  {/* <div className={EuropeSelection}> <div className='radioinputCountry' onClick={EuropeOption}> {t('Addpost_country_Europe')} </div> </div>
  <div className={AsiaSelection}> <div className='radioinputCountry' onClick={AsiaOption}> {t('Addpost_country_Asia')}</div></div>
   <div className={AfricaSelection}> <div className='radioinputCountry' onClick={AfricaOption}> {t('Addpost_country_Africa')}</div></div>
  <div className={AustraliaSelection}> <div className='radioinputCountry' onClick={AustraliaOption}> {t('Addpost_country_Australia')}</div></div>
  <div className={NorthAmaricaSelection}> <div className='radioinputCountry' onClick={NorthAmaricaOption}> {t('Addpost_country_NorthAmarica')}</div></div>
  <div className={SouthAmericaSelection}> <div className='radioinputCountry' onClick={SouthAmericaOption}> {t('Addpost_country_SouthAmerica')}</div></div>
  <div className={MiddleEastSelection}> <div className='radioinputCountry' onClick={MiddleEastOption}> {t('Addpost_country_MiddleEast')}</div></div>  */}

                  <div className={MiddleEast}> 
                  <h1>{t('Addpost_country_MiddleEast')}</h1>
                 <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="country_code" 
                  value={country_code}
                  onChange={e => onChange(e)}
                  onClick={optionCountry1}
                  >  
                  <option className="optiontitleinput" value='nothing chosen'>{t('Addpost_country_type')} </option>
                  {MiddleEastGroup.map(country=>(
                  <option className="optiontitleinput" required value={country.country_code}> 
                  {i18next.language === 'ar' && country.country_AR_name} 
                  {i18next.language === 'en' && country.country_EN_name} 
                  </option>
                    ))}
                  </select>
                  </div>



                  <div className={SouthAmerica}> 
                  <h1> {t('Addpost_country_SouthAmerica')} </h1>
                 <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="country_code" 
                  value={country_code}
                  onChange={e => onChange(e)}
                  onClick={optionCountry1}
                  >  
                  <option className="optiontitleinput" value='nothing chosen'>{t('Addpost_country_type')} </option>
                  {SouthAmericaGroup.map(country=>(
                                      <option className="optiontitleinput" required value={country.country_code}> 
                                      {i18next.language === 'ar' && country.country_AR_name} 
                                      {i18next.language === 'en' && country.country_EN_name} 
                                      </option>
                    ))}
                  </select>
                  </div>



                  <div className={NorthAmarica}> 
                  <h1> {t('Addpost_country_NorthAmarica')} </h1>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="country_code" 
                  value={country_code}
                  onChange={e => onChange(e)}
                  onClick={optionCountry1}
                  >  
                  <option className="optiontitleinput" value='nothing chosen'>{t('Addpost_country_type')} </option>
                  {NorthAmaricaGroup.map(country=>(
                                      <option className="optiontitleinput" required value={country.country_code}> 
                                      {i18next.language === 'ar' && country.country_AR_name} 
                                      {i18next.language === 'en' && country.country_EN_name} 
                                      </option>
                    ))}
                  </select>
                  </div>




                  <div className={Africa}> 
                  <h1> {t('Addpost_country_Africa')} </h1>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="country_code" 
                  value={country_code}
                  onChange={e => onChange(e)}
                  onClick={optionCountry1}
                  >  
                  <option className="optiontitleinput" value='nothing chosen'>{t('Addpost_country_type')} </option>
                  {AfricaGroup.map(country=>(
                                      <option className="optiontitleinput" required value={country.country_code}> 
                                      {i18next.language === 'ar' && country.country_AR_name} 
                                      {i18next.language === 'en' && country.country_EN_name} 
                                      </option>
                    ))}
                  </select>
                  </div>




                  <div className={Europe}> 
                  <h1> {t('Addpost_country_Europe')}  </h1>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="country_code" 
                  value={country_code}
                  onChange={e => onChange(e)}
                  onClick={optionCountry1}
                  >  
                  <option className="optiontitleinput" value='nothing chosen'> {t('Addpost_country_type')} </option>
                  {EuropeGroup.map(country=>(
                                      <option className="optiontitleinput" required value={country.country_code}> 
                                      {i18next.language === 'ar' && country.country_AR_name} 
                                      {i18next.language === 'en' && country.country_EN_name} 
                                      </option>
                    ))}
                  </select>
                  </div>





                  <div className={Asia}> 
                  <h1> {t('Addpost_country_Asia')} </h1>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="country_code" 
                  value={country_code}
                  onChange={e => onChange(e)}
                  onClick={optionCountry1}
                  >  
                  <option className="optiontitleinput" value='nothing chosen'> {t('Addpost_country_type')} </option>
                  {AsiaGroup.map(country=>(
                                      <option className="optiontitleinput" required value={country.country_code}> 
                                      {i18next.language === 'ar' && country.country_AR_name} 
                                      {i18next.language === 'en' && country.country_EN_name} 
                                      </option>
                    ))}
                  </select>
                  </div>




                  <div className={Australia}> 
                  <h1> {t('Addpost_country_Australia')} </h1>
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="country_code" 
                  value={country_code}
                  onChange={e => onChange(e)}
                  onClick={optionCountry1}
                  >  
                  <option className="optiontitleinput" value='nothing chosen'> {t('Addpost_country_type')} </option>
                  {AustraliaGroup.map(country=>(
                                      <option className="optiontitleinput" required value={country.country_code}> 
                                      {i18next.language === 'ar' && country.country_AR_name} 
                                      {i18next.language === 'en' && country.country_EN_name} 
                                      </option>
                     ))}
                  </select>
                  </div>

  


<div> 
                  <select className="Forminput" 
                   style={{width:'100%',marginLeft:'0%', textAlign:'center'}}
                  name="city_code" 
                  value={city_code}
                  onChange={e => onChange(e)}
                  onClick={optionCity1}
                 
                  >  
                  <option className="optiontitleinput" value='nothing chosen'> {t('Addpost_city_type')} </option>
 

                  {user.country_code === 'SA' &&(
                   citySA.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                  )}


                  {user.country_code === 'EG' &&(
                   cityEG.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                       ))
                  )}


                 {user.country_code === 'TN' &&(
                   cityTN.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                  )}


                 {user.country_code === 'AE' &&(
                   cityAE.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                  )}


               {user.country_code === 'JO' &&(
                   cityJO.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                  )}



                  
                 {user.country_code === 'SD' &&(
                   citySD.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                  )}



                {user.country_code === 'BH' &&(
                   cityBH.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                  )}
 


                {user.country_code === 'DZ' &&(
                   cityDZ.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                  )}


                {user.country_code === 'IQ' &&(
                   cityIQ.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>

                    ))
                  )}


                {user.country_code === 'KW' &&(
                   cityKW.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                  )}



                  {user.country_code === 'MA' &&(
                   cityMA.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                  )}



                  {user.country_code === 'YE' &&(
                   cityYE.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                   )}



                 {user.country_code === 'OM' &&(
                   cityOM.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                   )}



                {user.country_code === 'QA' &&(
                   cityQA.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                   )}


              {user.country_code === 'LB' &&(
                   cityLB.map(city=>(
                    <option  className="optiontitleinput" required value={city.city_code}> 
                    {i18next.language === 'ar'&& city.city_AR_name}
                    {i18next.language === 'en'&& city.city_EN_name}
                     </option>
                      ))
                   )}






                  
                  </select>
                  </div>
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


 


<div className={optionContact}>
{/*   
<div  className="topadtitleinput" onClick={optionSubBackContact}>  ماهي طريقة التواصل المفضلة لهذا الإعلان؟      <i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>

                    <center> 
                    <div style={{display:'flex',alignItems:'center'}}> 
                    <div  className={contactinput}   onClick={Mobileyes}> أقبل الجوال     <i class="fa fa-mobile" aria-hidden="true"></i></div> 
                    <div  className={contactinput}  onClick={Mobileno}> لا أقبل الجوال     <i class="fa fa-mobile" aria-hidden="true"></i></div> 
                    </div>
                    </center>
                    <div className={optionContactMobile}>
                    <input className="Forminput"
                    style={{height:''}}
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
                    style={{height:''}}
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
                    style={{height:''}}
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
                    style={{height:''}}
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
          <span className='field-Text'> رابط خاص بموقعك أو صفحة الخدمة التي تقدمها</span>
            <input className="Forminput"
                style={{height:''}}
                 type="text" 
                 placeholder="ادخل رابط موقعك"
                 autocomplete="off"
                 name='websitelink'
                 value={websitelink}
                 onChange={e => onChange(e)}
                 />
                 </div>
  */}

  <center> <div  className="Formbutton" onClick={optionDetailsNext}> <i class="fa fa-arrow-down" aria-hidden="true"></i> {t('Addpost_next_step')}  </div> </center>


  </div>

 


                  <div className={optionDetails}>
                  <div  className="topadtitleinput" onClick={optionSubBackDetails} >  {t('Addpost_add_details')}  </div>

                  <span className='field-Text'>  {t('Addpost_add_title')}   </span>
                    <input className="Forminput"
                    style={{height:''}}
                    placeholder={t('Addpost_add_title_placeholder')}
                    type="text" 
                    autocomplete="off"
                    name='title'
                    value={title}
                    onChange={e => onChange(e)}
                    maxlength="120" 
                  
                    />


                  <span className='field-Text'> {t('Addpost_add_description')} </span>
                   <textarea className="Forminput"
                    style={{height:'120px',direction:'rtl',textAlign:'center'}}
                    placeholder={t('Addpost_add_description_placeholder')}
                    type="text" 
                    autocomplete="off"
                    name='Main_paragraph'
                    value={Main_paragraph}
                    onChange={e => onChange(e)}
                    maxlength="400" 
                    minlength="100"
                 
                    />

 
{/* <span className='field-Text'> السعر </span> */}
                    <input className="Priceinput"
                    placeholder={t('Addpost_price')}
                    type="number" 
                    autocomplete="off"
                    name='price'
                    value={price}
                    onChange={e => onChange(e)}
                 
                    />


            

               <select className="Priceinput" 
                
                  name="currency" 
                  value={currency}
                  onChange={e => onChange(e)}
                  >  
                  {i18next.language === 'ar' &&(
                  <Fragment> 
                  <option className="optiontitleinput" value='nothing chosen'>اختر العملة </option>
                  <option className="optiontitleinput" value='SAR'> ريال سعودي  </option>
                  <option className="optiontitleinput" value='AED'> درهم إماراتي  </option>
                  <option className="optiontitleinput" value='OMR'>  ريال عماني </option>
                  <option className="optiontitleinput" value='JOD'>  دينار أردني </option>
                  <option className="optiontitleinput" value='EGP'>  جنيه مصري </option>
                  <option className="optiontitleinput" value='IQD'> دينار عراقي  </option>
                  <option className="optiontitleinput" value='DZD'>  دينار جزائري </option>
                  <option className="optiontitleinput" value='BHD'>  دينار بحريني </option>
                  <option className="optiontitleinput" value='KWD'>  دينار كويتي </option>
                  <option className="optiontitleinput" value='LBP'>  ليرة لبنانية </option>
                  <option className="optiontitleinput" value='QAR'> ريال قطري  </option>
                  <option className="optiontitleinput" value='SYP'>  ليرة سورية </option>
                  <option className="optiontitleinput" value='SDG'>  جنيه سوداني </option>
                  <option className="optiontitleinput" value='TND'>  دينار تونسي </option>
                  <option className="optiontitleinput" value='YER'>  ريال يمني </option>
                  <option className="optiontitleinput" value='FDJ'>  فرنك جيبوتي </option>
                  <option className="optiontitleinput" value='KMF'>  فرنك قمري </option>
                  <option className="optiontitleinput" value='LYD'>  دينار ليبي </option>
                  <option className="optiontitleinput" value='MAD'> درهم مغربي  </option>
                  <option className="optiontitleinput" value='MRO'> أوقية موريتانية  </option>
                  <option className="optiontitleinput" value='SOS'>  شلن صومالي </option>
                  {/* <option className="optiontitleinput" value='dollar'>شيكل إسرائيلي  </option> */}
                  <option className="optiontitleinput" value='EUR'> اليورو  </option>
                  <option className="optiontitleinput" value='AUD'> الدولار الأسترالي  </option>
                  <option className="optiontitleinput" value='GBP '> الجنيه الأسترليني  </option>
                  <option className="optiontitleinput" value='JPY '>  الين الياباني </option>
                  <option className="optiontitleinput" value='USD'> الدولار الأمريكي  </option>
                  <option className="optiontitleinput" value='NZD'> الدولار النيوزيلندي  </option>
                  <option className="optiontitleinput" value='CHF'> الفرنك السويسري  </option>
                  <option className="optiontitleinput" value='CAD'>  الدولار الكندي </option>
                  <option className="optiontitleinput" value='CNY'>  رنمينبي الصين    </option>
                  <option className="optiontitleinput" value='RUB'>  الروبل الروسي </option>
                  <option className="optiontitleinput" value='MXN'>  البيزو المكسيكي </option>
                  <option className="optiontitleinput" value='BRL'> الريال البرازيلي  </option>
                  <option className="optiontitleinput" value='CLP'>  البيزو التشيلي </option>
                  <option className="optiontitleinput" value='INR'>  روبية هندية </option>
                  <option className="optiontitleinput" value='HKD'>  دولار هونج كوند </option>
                  <option className="optiontitleinput" value='SEK'>    الكرونة السويدية </option>
                  <option className="optiontitleinput" value='KRW'>   وون كوري جنوبي </option>
                  <option className="optiontitleinput" value='KPW'>    وون كوري شمالي</option>
                  <option className="optiontitleinput" value='SGD'>  الدولار السنغافوري </option>
                  <option className="optiontitleinput" value='NOK'>  الكرونا النرويجية </option>
                  <option className="optiontitleinput" value='ZAR'>  الراند الجنوب أفريقي </option>
                  <option className="optiontitleinput" value='TRY'>  الليرة التركية </option>
                  </Fragment>
                  )}

{i18next.language === 'en' &&(

  <Fragment>
        <option value="USD" selected="selected" label="US dollar">USD</option>
    <option value="EUR" label="Euro">EUR</option>
    <option value="JPY" label="Japanese yen">JPY</option>
    <option value="GBP" label="Pound sterling">GBP</option>
    <option disabled>──────────</option>
    <option value="AED" label="United Arab Emirates dirham">AED</option>
    <option value="AFN" label="Afghan afghani">AFN</option>
    <option value="ALL" label="Albanian lek">ALL</option>
    <option value="AMD" label="Armenian dram">AMD</option>
    <option value="ANG" label="Netherlands Antillean guilder">ANG</option>
    <option value="AOA" label="Angolan kwanza">AOA</option>
    <option value="ARS" label="Argentine peso">ARS</option>
    <option value="AUD" label="Australian dollar">AUD</option>
    <option value="AWG" label="Aruban florin">AWG</option>
    <option value="AZN" label="Azerbaijani manat">AZN</option>
    <option value="BAM" label="Bosnia and Herzegovina convertible mark">BAM</option>
    <option value="BBD" label="Barbadian dollar">BBD</option>
    <option value="BDT" label="Bangladeshi taka">BDT</option>
    <option value="BGN" label="Bulgarian lev">BGN</option>
    <option value="BHD" label="Bahraini dinar">BHD</option>
    <option value="BIF" label="Burundian franc">BIF</option>
    <option value="BMD" label="Bermudian dollar">BMD</option>
    <option value="BND" label="Brunei dollar">BND</option>
    <option value="BOB" label="Bolivian boliviano">BOB</option>
    <option value="BRL" label="Brazilian real">BRL</option>
    <option value="BSD" label="Bahamian dollar">BSD</option>
    <option value="BTN" label="Bhutanese ngultrum">BTN</option>
    <option value="BWP" label="Botswana pula">BWP</option>
    <option value="BYN" label="Belarusian ruble">BYN</option>
    <option value="BZD" label="Belize dollar">BZD</option>
    <option value="CAD" label="Canadian dollar">CAD</option>
    <option value="CDF" label="Congolese franc">CDF</option>
    <option value="CHF" label="Swiss franc">CHF</option>
    <option value="CLP" label="Chilean peso">CLP</option>
    <option value="CNY" label="Chinese yuan">CNY</option>
    <option value="COP" label="Colombian peso">COP</option>
    <option value="CRC" label="Costa Rican colón">CRC</option>
    <option value="CUC" label="Cuban convertible peso">CUC</option>
    <option value="CUP" label="Cuban peso">CUP</option>
    <option value="CVE" label="Cape Verdean escudo">CVE</option>
    <option value="CZK" label="Czech koruna">CZK</option>
    <option value="DJF" label="Djiboutian franc">DJF</option>
    <option value="DKK" label="Danish krone">DKK</option>
    <option value="DOP" label="Dominican peso">DOP</option>
    <option value="DZD" label="Algerian dinar">DZD</option>
    <option value="EGP" label="Egyptian pound">EGP</option>
    <option value="ERN" label="Eritrean nakfa">ERN</option>
    <option value="ETB" label="Ethiopian birr">ETB</option>
    <option value="EUR" label="EURO">EUR</option>
    <option value="FJD" label="Fijian dollar">FJD</option>
    <option value="FKP" label="Falkland Islands pound">FKP</option>
    <option value="GBP" label="British pound">GBP</option>
    <option value="GEL" label="Georgian lari">GEL</option>
    <option value="GGP" label="Guernsey pound">GGP</option>
    <option value="GHS" label="Ghanaian cedi">GHS</option>
    <option value="GIP" label="Gibraltar pound">GIP</option>
    <option value="GMD" label="Gambian dalasi">GMD</option>
    <option value="GNF" label="Guinean franc">GNF</option>
    <option value="GTQ" label="Guatemalan quetzal">GTQ</option>
    <option value="GYD" label="Guyanese dollar">GYD</option>
    <option value="HKD" label="Hong Kong dollar">HKD</option>
    <option value="HNL" label="Honduran lempira">HNL</option>
    <option value="HRK" label="Croatian kuna">HRK</option>
    <option value="HTG" label="Haitian gourde">HTG</option>
    <option value="HUF" label="Hungarian forint">HUF</option>
    <option value="IDR" label="Indonesian rupiah">IDR</option>
    <option value="ILS" label="Israeli new shekel">ILS</option>
    <option value="IMP" label="Manx pound">IMP</option>
    <option value="INR" label="Indian rupee">INR</option>
    <option value="IQD" label="Iraqi dinar">IQD</option>
    <option value="IRR" label="Iranian rial">IRR</option>
    <option value="ISK" label="Icelandic króna">ISK</option>
    <option value="JEP" label="Jersey pound">JEP</option>
    <option value="JMD" label="Jamaican dollar">JMD</option>
    <option value="JOD" label="Jordanian dinar">JOD</option>
    <option value="JPY" label="Japanese yen">JPY</option>
    <option value="KES" label="Kenyan shilling">KES</option>
    <option value="KGS" label="Kyrgyzstani som">KGS</option>
    <option value="KHR" label="Cambodian riel">KHR</option>
    <option value="KID" label="Kiribati dollar">KID</option>
    <option value="KMF" label="Comorian franc">KMF</option>
    <option value="KPW" label="North Korean won">KPW</option>
    <option value="KRW" label="South Korean won">KRW</option>
    <option value="KWD" label="Kuwaiti dinar">KWD</option>
    <option value="KYD" label="Cayman Islands dollar">KYD</option>
    <option value="KZT" label="Kazakhstani tenge">KZT</option>
    <option value="LAK" label="Lao kip">LAK</option>
    <option value="LBP" label="Lebanese pound">LBP</option>
    <option value="LKR" label="Sri Lankan rupee">LKR</option>
    <option value="LRD" label="Liberian dollar">LRD</option>
    <option value="LSL" label="Lesotho loti">LSL</option>
    <option value="LYD" label="Libyan dinar">LYD</option>
    <option value="MAD" label="Moroccan dirham">MAD</option>
    <option value="MDL" label="Moldovan leu">MDL</option>
    <option value="MGA" label="Malagasy ariary">MGA</option>
    <option value="MKD" label="Macedonian denar">MKD</option>
    <option value="MMK" label="Burmese kyat">MMK</option>
    <option value="MNT" label="Mongolian tögrög">MNT</option>
    <option value="MOP" label="Macanese pataca">MOP</option>
    <option value="MRU" label="Mauritanian ouguiya">MRU</option>
    <option value="MUR" label="Mauritian rupee">MUR</option>
    <option value="MVR" label="Maldivian rufiyaa">MVR</option>
    <option value="MWK" label="Malawian kwacha">MWK</option>
    <option value="MXN" label="Mexican peso">MXN</option>
    <option value="MYR" label="Malaysian ringgit">MYR</option>
    <option value="MZN" label="Mozambican metical">MZN</option>
    <option value="NAD" label="Namibian dollar">NAD</option>
    <option value="NGN" label="Nigerian naira">NGN</option>
    <option value="NIO" label="Nicaraguan córdoba">NIO</option>
    <option value="NOK" label="Norwegian krone">NOK</option>
    <option value="NPR" label="Nepalese rupee">NPR</option>
    <option value="NZD" label="New Zealand dollar">NZD</option>
    <option value="OMR" label="Omani rial">OMR</option>
    <option value="PAB" label="Panamanian balboa">PAB</option>
    <option value="PEN" label="Peruvian sol">PEN</option>
    <option value="PGK" label="Papua New Guinean kina">PGK</option>
    <option value="PHP" label="Philippine peso">PHP</option>
    <option value="PKR" label="Pakistani rupee">PKR</option>
    <option value="PLN" label="Polish złoty">PLN</option>
    <option value="PRB" label="Transnistrian ruble">PRB</option>
    <option value="PYG" label="Paraguayan guaraní">PYG</option>
    <option value="QAR" label="Qatari riyal">QAR</option>
    <option value="RON" label="Romanian leu">RON</option>
    <option value="RSD" label="Serbian dinar">RSD</option>
    <option value="RUB" label="Russian ruble">RUB</option>
    <option value="RWF" label="Rwandan franc">RWF</option>
    <option value="SAR" label="Saudi riyal">SAR</option>
    <option value="SEK" label="Swedish krona">SEK</option>
    <option value="SGD" label="Singapore dollar">SGD</option>
    <option value="SHP" label="Saint Helena pound">SHP</option>
    <option value="SLL" label="Sierra Leonean leone">SLL</option>
    <option value="SLS" label="Somaliland shilling">SLS</option>
    <option value="SOS" label="Somali shilling">SOS</option>
    <option value="SRD" label="Surinamese dollar">SRD</option>
    <option value="SDP" label="Sudanese pound">SSP</option>
    <option value="SSP" label="South Sudanese pound">SSP</option>
    <option value="STN" label="São Tomé and Príncipe dobra">STN</option>
    <option value="SYP" label="Syrian pound">SYP</option>
    <option value="SZL" label="Swazi lilangeni">SZL</option>
    <option value="THB" label="Thai baht">THB</option>
    <option value="TJS" label="Tajikistani somoni">TJS</option>
    <option value="TMT" label="Turkmenistan manat">TMT</option>
    <option value="TND" label="Tunisian dinar">TND</option>
    <option value="TOP" label="Tongan paʻanga">TOP</option>
    <option value="TRY" label="Turkish lira">TRY</option>
    <option value="TTD" label="Trinidad and Tobago dollar">TTD</option>
    <option value="TVD" label="Tuvaluan dollar">TVD</option>
    <option value="TWD" label="New Taiwan dollar">TWD</option>
    <option value="TZS" label="Tanzanian shilling">TZS</option>
    <option value="UAH" label="Ukrainian hryvnia">UAH</option>
    <option value="UGX" label="Ugandan shilling">UGX</option>
    <option value="USD" label="United States dollar">USD</option>
    <option value="UYU" label="Uruguayan peso">UYU</option>
    <option value="UZS" label="Uzbekistani soʻm">UZS</option>
    <option value="VES" label="Venezuelan bolívar soberano">VES</option>
    <option value="VND" label="Vietnamese đồng">VND</option>
    <option value="VUV" label="Vanuatu vatu">VUV</option>
    <option value="WST" label="Samoan tālā">WST</option>
    <option value="XAF" label="Central African CFA franc">XAF</option>
    <option value="XCD" label="Eastern Caribbean dollar">XCD</option>
    <option value="XOF" label="West African CFA franc">XOF</option>
    <option value="XPF" label="CFP franc">XPF</option>
    <option value="ZAR" label="South African rand">ZAR</option>
    <option value="ZMW" label="Zambian kwacha">ZMW</option>
    <option value="ZWB" label="Zimbabwean bonds">ZWB</option>

  </Fragment>
)}









 
          
                  </select>

  

                  <p> {t('Addpost_period')} </p>

                <div className={DurationStyle10}
                 onClick={onChangeDuration10}
                 >
                   {t('Addpost_10_days')} 
                 </div>


                 <div className={DurationStyle20}
                 onClick={onChangeDuration20}
                 >
                    {t('Addpost_20_days')}  
                 </div>


                 {(subscription.membership_class === 'golden' || subscription.membership_class === 'silver'|| subscription.membership_class === 'bronze' || subscription.membership_class === 'special') &&(
                <Fragment>
                 <div className={DurationStyle30}
                 onClick={onChangeDuration30}
                 >
                    {t('Addpost_30_days')}  
                 </div>
                 </Fragment>
                 )}

              {(subscription.membership_class === 'golden' ||subscription.membership_class === 'silver' || subscription.membership_class === 'special') &&(
                <Fragment>
                 <div className={DurationStyle60}
                 onClick={onChangeDuration60}
                 >
                   {t('Addpost_60_days')}  
                 </div>
                 </Fragment>
              )}


              {(subscription.membership_class === 'golden' || subscription.membership_class === 'special') &&(
              <Fragment>
                 <div className={DurationStyle90}
                 onClick={onChangeDuration90}
                 >
                    {t('Addpost_90_days')}  
                 </div>
                 </Fragment>
              )}


              {(subscription.membership_class === 'golden' || subscription.membership_class === 'special') &&(
              <Fragment>
                 <div className={DurationStyle120}
                 onClick={onChangeDuration120}
                 >
                    {t('Addpost_120_days')}  
                 </div>
                 </Fragment>
                )}

  
                {(subscription.membership_class === 'special') &&(
                  <Fragment>
                 <div className={DurationStyle000}
                 onClick={onChangeDuration000}
                 >
                    {t('Addpost_365_days')}   
                 </div>
                 </Fragment>
                )}







                 
                 
 

              <p> {t('Addpost_Expiry_date')} </p>
                <input className="Forminput"
                 maxlength="66"
                 type="text" 
                 placeholder=""
                 autocomplete="off"
                 name='expired'
                 value={expired}
                 onChange={e => onChange(e)}
                 />



                 {/* <div  className="topadtitleinput" onClick={optionSubBackEnglishDetails} > هل تريد نشر الإعلان باللغة الإنجليزية ؟ </div> */}

                 {/* <center> <div  className="Formbutton" onClick={optionEnglishDetailsNext}>  نعم  </div> </center> */}
                 <center> <div  className="Formbutton" onClick={optionImagesNext}>  {t('Addpost_next_step')}  </div> </center>

                 </div>


                    <div className={optionEnglishDetails}>

                    <span className='field-text'> {t('Addpost_add_title_english')} </span>
                    <input className="Forminput"
                   
                    placeholder={t('Addpost_add_title_english_placeholder')}
                    type="text" 
                    autocomplete="off"
                    name='title_English'
                    value={title_English}
                    onChange={e => onChange(e)}
                    maxlength="100" 
                   
                    />

                    <span className='field-text'>  {t('Addpost_add_description_english')}  </span>
                   <textarea className="Forminput"
                    style={{height:'120px',direction:'ltr',textAlign:'left'}}
                    placeholder={t('Addpost_add_description_english_placeholder')}
                    type="text" 
                    autocomplete="off"
                    name='Main_English_paragraph'
                    value={Main_English_paragraph}
                    onChange={e => onChange(e)}
                    onClick={optionEnglishDetails1}
                    maxlength="400"
                    minlength="100"
                  
                    />


              <center> <div  className="Formbutton" onClick={optionImagesNext}>  {t('Addpost_next_step')}  </div> </center>


                    </div>


 


 


                      <div className={optionImages}>
                      <div  className="topadtitleinput" onClick={optionSubBackImages } >   {t('Addpost_add_pictures_title')}   </div>
                   

               {/* <span> رابط الفيديو في اليوتيوب (للعضوية الذهبية) </span>
                <input className="Forminput"
                
                 type="text" 
                 placeholder=""
                 autocomplete="off"
                 name='video'
                 value={video}
                 onChange={e => onChange(e)}
                 /> */}
<div> {t('Addpost_add_main_pictures')} </div>

                       {/* add image */}

                       {/* <label  className="imageLabel" for="file0">
                       <img src={emptypic} />
                       </label> */}
                     
                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file0"
                       type="file"
                       name="file"
                      //  value={emptypic} 
                       onChange={uploadImage} />

 


                     {loading ? (
                        <span> loading ....</span>
                     ) : (
                       <Fragment>
                          
                        
                         <span> 
                         
                        
                         {image ===''?(
                        <label for="file0" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                     </label>
                         ):(
                          <label for="file0" className="imageLabel">
                          <img src={image} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                          </label>
                          )}

                      {image &&(
                       <center><div className='removepic' onClick={removepic0}> X </div></center>
                         )}

                        
                        <input   type="hidden" name='image' value={image}  onChange={onChangeimage} />
                      
                       
                       </span>
                       </Fragment>
                     )}
                    
                 



                      {/* add pic1 */}
                      <center> <div  className="Formbutton" onClick={optionShowStatus1}> <i class="fa fa-plus-circle" aria-hidden="true"></i> {t('Addpost_add_other_picture')}  </div> </center>

                       <div className={showStatus1}>
                       {/* <label  className="imageLabel" for="file1">
                       <img src={emptypic} />
                       </label> */}
                     
                      <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file1"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic1} />


                     {loading ? (
                        <span> loading ....</span>
                     ) : (
                       <Fragment>
                         <span>

                         {pic1 ===''?(
                        <label for="file1" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                     </label>
                         ):(
                          <label for="file1" className="imageLabel">
                          <img src={pic1} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                          </label>
                          )}

                      {pic1 &&(
                       <center><div className='removepic' onClick={removepic1}> X </div></center>
                         )}
                       </span>
                       </Fragment>
                     )}


<center> <div  className="Formbutton" onClick={optionShowStatus2}> <i class="fa fa-plus-circle" aria-hidden="true"></i>  {t('Addpost_add_other_picture')}  </div> </center>


                  </div>





                        {/* add pic2 */}

                        <div className={showStatus2}>
                        {/* <label  className="imageLabel" for="file2">
                       <img src={emptypic} />
                       </label> */}

                      <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file2"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic2} />


                     {loading ? (
                        <span> loading ....</span>
                     ) : (
                       <Fragment>
                         <span>
 
                         {pic2 ===''?(
                        <label for="file2" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                     </label>
                         ):(
                          <label for="file2" className="imageLabel">
                          <img src={pic2} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                          </label>
                          )}

                      {pic2 &&(
                       <center><div className='removepic' onClick={removepic2}> X </div></center>
                         )}
                       </span>
                       </Fragment>
                     )}

<center> <div  className="Formbutton" onClick={optionShowStatus3}> <i class="fa fa-plus-circle" aria-hidden="true"></i>  {t('Addpost_add_other_picture')}   </div> </center>


  </div>



                        {/* add pic3 */}


                        <div className={showStatus3}>
                        {/* <label  className="imageLabel" for="file3">
                       <img src={emptypic} />
                       </label> */}

                        <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file3"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic3} />


                     {loading ? (
                       <span> loading ....</span>
                     ) : (
                       <Fragment>
                         <span>
                 
                         {pic3 ===''?(
                        <label for="file3" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                     </label>
                         ):(
                          <label for="file3" className="imageLabel">
                          <img src={pic3} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                          </label>
                          )}

                      {pic3 &&(
                       <center><div className='removepic' onClick={removepic10}> X </div></center>
                         )}
                       </span>
                       </Fragment>
                     )}

<center> <div  className="Formbutton" onClick={optionShowStatus4}> <i class="fa fa-plus-circle" aria-hidden="true"></i>  {t('Addpost_add_other_picture')}   </div> </center>
 

                    </div>




                      {/* add pic4 */}
                      <div className={showStatus4}>
                      {/* <label  className="imageLabel" for="file4">
                       <img src={emptypic} />
                       </label> */}


                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file4"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic4} />


                     {loading ? (
                       <span> loading ....</span>
                     ) : (
                       <Fragment>
                         <span>
                       
                         {pic4 ===''?(
                        <label for="file4" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                     </label>
                         ):(
                          <label for="file4" className="imageLabel">
                          <img src={pic4} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                          </label>
                          )}

                      {pic4 &&(
                       <center><div className='removepic' onClick={removepic4}> X </div></center>
                         )}
                       </span>
                       </Fragment>
                     )}

<center> <div  className="Formbutton" onClick={optionShowStatus5}> <i class="fa fa-plus-circle" aria-hidden="true"></i>  {t('Addpost_add_other_picture')}   </div> </center>


                    </div>





                        {/* add pic5 */}
                        <div className={showStatus5}>
                        {/* <label  className="imageLabel" for="file5">
                       <img src={emptypic} />
                       </label> */}


                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file5"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic5} />


                     {loading ? (
                       <span> loading ....</span>
                     ) : (
                       <Fragment>
                        <span>
  
                        {pic5 ===''?(
                        <label for="file5" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                     </label>
                         ):(
                          <label for="file5" className="imageLabel">
                          <img src={pic5} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                          </label>
                          )}

                      {pic5 &&(
                       <center><div className='removepic' onClick={removepic5}> X </div></center>
                         )}
                       </span>
                       </Fragment>
                     )}

<center> <div  className="Formbutton" onClick={optionShowStatus6}> <i class="fa fa-plus-circle" aria-hidden="true"></i>  {t('Addpost_add_other_picture')}   </div> </center>


                    </div>




                       {/* add pic6 */}
                       <div className={showStatus6}>
                       {/* <label  className="imageLabel" for="file6">
                       <img src={emptypic} />
                       </label> */}


                      <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file6"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic6} />


                     {loading ? (
                        <span> loading ....</span>
                     ) : (
                       <Fragment>
                       <span>
                    
                       {pic6 ===''?(
                        <label for="file6" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                     </label>
                         ):(
                          <label for="file6" className="imageLabel">
                          <img src={pic6} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                          </label>
                          )}

                      {pic6 &&(
                       <center><div className='removepic' onClick={removepic6}> X </div></center>
                         )}
                       </span>
                       </Fragment>
                     )}

<center> <div  className="Formbutton" onClick={optionShowStatus7}> <i class="fa fa-plus-circle" aria-hidden="true"></i>  {t('Addpost_add_other_picture')}   </div> </center>

                  </div>





                       {/* add pic7 */}
                       <div className={showStatus7}>
                       {/* <label  className="imageLabel" for="file7">
                       <img src={emptypic} />
                       </label> */}


                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file7"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic7} />


                     {loading ? (
                       <span> loading ....</span>
                     ) : (
                       <Fragment>
                         <span>
                     
                         {pic7 ===''?(
                        <label for="file7" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                     </label>
                         ):(
                          <label for="file7" className="imageLabel">
                          <img src={pic7} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                          </label>
                          )}

                      {pic7 &&(
                       <center><div className='removepic' onClick={removepic7}> X </div></center>
                         )}
                       </span>
                       </Fragment>
                     )}

<center> <div  className="Formbutton" onClick={optionShowStatus8}> <i class="fa fa-plus-circle" aria-hidden="true"></i>  {t('Addpost_add_other_picture')}   </div> </center>

                    </div>




                        {/* add pic8 */}
                        <div className={showStatus8}>
                        {/* <label  className="imageLabel" for="file8">
                       <img src={emptypic} />
                       </label> */}


                        <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file8"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic8} />


                     {loading ? (
                       <span> loading ....</span>
                     ) : (
                       <Fragment>
                       <span>
                     
                       {pic8 ===''?(
                        <label for="file8" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                     </label>
                         ):(
                          <label for="file8" className="imageLabel">
                          <img src={pic8} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                          </label>
                          )}

                      {pic8 &&(
                       <center><div className='removepic' onClick={removepic8}> X </div></center>
                         )}
                       </span>
                       </Fragment>
                     )}

<center> <div  className="Formbutton" onClick={optionShowStatus9}> <i class="fa fa-plus-circle" aria-hidden="true"></i>  {t('Addpost_add_other_picture')}   </div> </center>

                    </div>





                       {/* add pic9 */}

                       <div className={showStatus9}>

                       {/* <label  className="imageLabel" for="file9">
                       <img src={emptypic} />
                       </label> */}


                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file9"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic9} />


                     {loading ? (
                       <span> loading ....</span>
                     ) : (
                       <Fragment>
                       <span>

                       {pic9 ===''?(
                        <label for="file9" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                     </label>
                         ):(
                          <label for="file9" className="imageLabel">
                          <img src={pic9} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                          </label>
                          )}

                      {pic9 &&(
                       <center><div className='removepic' onClick={removepic9}> X </div></center>
                         )}

                       
                        <input   type="hidden" name='pic9' value={pic9}  onChange={onChangePic9} />
                     
                       </span>
                       </Fragment>
                     )}
  <center> <div  className="Formbutton" onClick={optionShowStatus10}> <i class="fa fa-plus-circle" aria-hidden="true"></i>  {t('Addpost_add_other_picture')}    </div> </center>

                    </div>



                        {/* add pic10 */}
                        <div className={showStatus10}>
                        {/* <label  className="imageLabel" for="file10">
                       <img src={emptypic} />
                       </label> */}


                       <input  
                       className="ChoseImginput"
                       placeholder="Upload an image"
                       id="file10"
                       type="file"
                       name="file"
                       //value={m_image} 
                       onChange={uploadPic10} />


                     {loading ? (
                      <span> loading ....</span>
                     ) : (
                       <Fragment>
                       <span>

                         {pic10 ===''?(
                        <label for="file10" className="imageLabel">
                     <img src={emptypic} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                     </label>
                         ):(
                          <label for="file10" className="imageLabel">
                          <img src={pic10} style={{ width: '249px', height:'167px',marginLeft:'10px'}} />
                          </label>
                          )}

                      {pic10 &&(
                       <center><div className='removepic' onClick={removepic10}> X </div></center>
                         )}

                       <input   type="hidden" name='pic10' value={pic10}  onChange={onChangePic10} />
                      
                      
                       </span>
                       </Fragment>
                     )}
                    </div>


                     





                  <center> <div  className="Formbutton" onClick={optionSubmit1}>   {t('Addpost_continue')}  </div> </center>
                  {i18next.language === 'ar' &&(
                  <span className='smallText'> نرجو منك مراجعة نص الإعلان والتأكد من معلومات التواصل قبل ‏النشر، لا يمكن تعديل الإعلان بعد نشره </span>
                  )}

                {i18next.language === 'en' &&(
                  <span className='smallText'>  
                  We kindly ask you to review the text of the advertisement and make sure of the contact information before publishing, the advertisement cannot be modified after it has been published
                    </span>
                  )}

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

 
    {/* <Link to='/prices' className="Dash-button-end-subscription"> 
    لا تستطيع نشر الإعلان لقد تعديت العدد المتاح لك  
    </Link> */}
 

 
  <center> 
  <div className={finish}>  
    <button  type="submit" className="Formbutton"> {t('Addpost_Publish')}  </button>
    </div>
    </center>
  


</div>

    {/* <Alert /> */}


    {alertWarning !== '' && i18next.language === 'ar' &&(
      <div className={finish}>  
      <div className='alert-warning'> 
      {alertWarning}
        </div>   
        </div>   
    )}


{alertWarningEnglish !== '' && i18next.language === 'en' &&(
      <div className={finish}>  
      <div className='alert-warning'> 
      {alertWarningEnglish}
        </div>   
        </div>   
    )}


{alertSuccess !== '' && i18next.language === 'ar' &&(
     <div className='alert-success'> 
     {alertSuccess}
       </div>   
    )}


{alertSuccessEnglish !== '' && i18next.language === 'en' &&(
     <div className='alert-success'> 
     {alertSuccessEnglish}
       </div>   
    )}




 
    </div>

          </form>
           
          
          </center>

         
        </div>
        </div>
        
        </div>

        
    );


  

    return waiting  ? (
      <Spinner />
    ) : (
      <Fragment>
      {i18next.language === 'ar'&&(<Navbar />)}
      {i18next.language === 'en'&&(<NavbarEnglish />)}
      <center> 
        
  {userShop ?(
<Fragment>  
      
 {moment(subscription.membership_renewal_expiry_date).isBefore(Date.now()) ? subscriptionEnd:adFormation}
 
 </Fragment>     
   ):(
    <Link to='/dashboard/create-shop'> <button className="Dash-button">  {t('Addpost_msg_warning_no_shop')}  </button>  </Link>
   )}
        
        </center>
      </Fragment>
    );
}


 

Addpost.propTypes = {
    addPost: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { addPost, setAlert}
  )(Addpost);
