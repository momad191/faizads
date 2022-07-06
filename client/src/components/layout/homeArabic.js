import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import { Fragment } from 'react';
import { deletePost } from '../../actions/post';
import ConfirmButton from "./ConfirmButton";
 
import greenFace from './greenFace.png';
import redFace from './redFace.png';
import yallowFace from './yallowFace.png';
import map from './map.png';
 

import Navbar from './Navbar';
import NavbarEnglish from './NavbarEnglish';
import { Translation } from 'react-i18next';
import i18next from 'i18next';
 

const Exercise = props => (
 
<Fragment>  
<div class="MainListHomeCover">
  <center> 
<div className="main-list-home" key={props.exercise._id}>

<div>
    {props.exercise.image ? (
      <a target="_blank" href={`/posts/${props.exercise._id}#/${props.exercise.body}/${props.exercise.title}`}  > <img className='image-in-list-home' src={props.exercise.image}  /></a>
      ):(
  
          <a target="_blank" href={`/posts/${props.exercise._id}#/${props.exercise.body}/${props.exercise.title}`}  > <img className='image-in-list-home' src={greenFace}  /></a>
          )}
     </div>






 {props.exercise.premium === 'yes' &&(

<Link to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-premium">   مميز    <i className="fa fa-star fa-1x"></i></button> </Link>

)}


  <Link to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   {props.exercise.category_code}  <i className="fa fa-list fa-1x"></i></button> </Link>
  {/* <Link to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   {props.exercise.market_code}  <i className="fa fa-list fa-1x"></i></button> </Link> */}




     <center>
      {props.exercise.premium === 'no' &&(
        <div className='title-in-list-home'>
        <a className='title-in-list-home'  target="_blank" href={`/posts/${props.exercise._id}#/${props.exercise.body}/${props.exercise.title}`}  >    
         {props.exercise.title}  
         </a>
        </div>
      )}


        {props.exercise.premium === 'yes' &&(
        <div className='title-in-list-premium-home'>
        <a className='title-in-list-premium-home'  target="_blank" href={`/posts/${props.exercise._id}#/${props.exercise.body}/${props.exercise.title}`}  >    
         {props.exercise.title}  
         </a>
        </div>
      )}
</center>



  <div className='section-list'>
 
      <div>


<center>
 <p className="list-button">





 {/* <Link to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">  <Moment format='YYYY/MM/DD'>{props.exercise.date}</Moment>  <i className="fa fa-calendar fa-1x"></i></button> </Link> */}

 


 
 
  </p>
  </center>


        

 
          
      {/* <p className="list-details">  <span className="redColor">التصنيف :</span>{props.exercise.category_code} | <span className="redColor">السوق :</span>{props.exercise.market_code} | <span className="redColor">تفاصيل الإعلان :</span>{props.exercise.title} </p> */}

     
  
    


 
    


      </div> 

      </div>
  </div>
 
 
  </center> 
  </div>
    </Fragment>

) 

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    
    this.handleSelectCountriesToHide = this.handleSelectCountriesToHide.bind(this)
    this.handleSelectCountriesToShow = this.handleSelectCountriesToShow.bind(this)

    // Asia

    this.handleSelectAsiaToHide = this.handleSelectAsiaToHide.bind(this)
    this.handleSelectAsiaToShow = this.handleSelectAsiaToShow.bind(this)

    // Africa
    this.handleSelectAfricaToHide = this.handleSelectAfricaToHide.bind(this)
    this.handleSelectAfricaToShow = this.handleSelectAfricaToShow.bind(this)

    // Europe

    this.handleSelectEuropeToHide = this.handleSelectEuropeToHide.bind(this)
    this.handleSelectEuropeToShow = this.handleSelectEuropeToShow.bind(this)

    // Australia
    this.handleSelectAustraliaToHide = this.handleSelectAustraliaToHide.bind(this)
    this.handleSelectAustraliaToShow = this.handleSelectAustraliaToShow.bind(this)

    // NorthAmarica

    this.handleSelectNorthAmaricaToHide = this.handleSelectNorthAmaricaToHide.bind(this)
    this.handleSelectNorthAmaricaToShow = this.handleSelectNorthAmaricaToShow.bind(this)

    // SouthAmerica

    this.handleSelectSouthAmericaToHide = this.handleSelectSouthAmericaToHide.bind(this)
    this.handleSelectSouthAmericaToShow = this.handleSelectSouthAmericaToShow.bind(this)




    this.handleSelectAll = this.handleSelectAll.bind(this)
    this.handleSelectCars = this.handleSelectCars.bind(this)
    this.handleSelectProperties = this.handleSelectProperties.bind(this)
    this.handleSelectJobs = this.handleSelectJobs.bind(this)
    this.handleSelectServices = this.handleSelectServices.bind(this)
    this.handleSelectClassifieds = this.handleSelectClassifieds.bind(this)
   
 
 
    this.deleteExercise = this.deleteExercise.bind(this)
    this.loadMore = this.loadMore.bind(this);
  
    this.state = {
      countries:[],
      Asia:[],
      Africa:[],
      Europe:[],
      Australia:[],
      NorthAmarica:[],
      SouthAmerica:[],

      cities:[],
      allCategory:[],
      classifiedsCategory:[],
      servicesCategory:[],
      jobsCategory:[],
      propertiesCategory:[],
      carsCategory:[],

      exercises: [],
      search:"",
      searchByMarket:"",
      searchByPurpose:"",
      searchByCategory_code:"",
      searchByCity_code:"",
      searchByCountry:"",
      loading:"",
      auth:'',
      user:"",
      visible:1000,  
      likes:'',
      id:'',
      showAll:true,
      showCars:false,
      showProperties:false,
      showJobs:false,
      showServices:false,
      showClassifieds:false,

      showCountries:false,
      showAsia:false,
      showAfrica:false,
      showEurope:false,
      showAustralia:false,
      showNorthAmarica:false,
      showSouthAmerica:false,
  
      
    };

    this.handlePageClick = this.handlePageClick.bind(this); }
 

  searchChanged = event => {
    this.setState({ search: event.target.value })
}


searchChangedByMarket = event => {
  this.setState({ searchByMarket: event.target.value })

   
}



searchChangedByPurpose = event => {
  this.setState({ searchByPurpose: event.target.value })
}



searchChangedByCategory_code = event => {
  this.setState({ searchByCategory_code: event.target.value })
}



searchChangedByCountry = event => {
  this.setState({
    searchByCountry: event.target.value,
    showCountries:false
  
  
  })
}



handlePageClick = (e) => {
  const selectedPage = e.selected;
  const offset = selectedPage * this.state.perPage;

  this.setState({
      currentPage: selectedPage,
      offset: offset
  }, () => {
      this.receivedData()
  });

};



handleSelectCountriesToHide = event => {
  this.setState({
   
    showCountries:false,
  });
};

handleSelectCountriesToShow = event => {
  this.setState({
    showCountries:true,
    showAsia:false,
    showAfrica:false,
    showNorthAmarica:false,
    showSouthAmerica:false,
    showEurope:false,
    showAustralia:false,



  });
};


handleSelectAsiaToHide = event => {
  this.setState({
   
    showAsia:false,
  });
};

handleSelectAsiaToShow = event => {
  this.setState({
    showAsia:true,
    showCountries:false,
    showAfrica:false,
    showNorthAmarica:false,
    showSouthAmerica:false,
    showEurope:false,
    showAustralia:false,
  });
};


handleSelectAfricaToHide = event => {
  this.setState({
   
    showAfrica:false,
  });
};

handleSelectAfricaToShow = event => {
  this.setState({
    showAfrica:true,

    showCountries:false,
    showAsia:false,
    showNorthAmarica:false,
    showSouthAmerica:false,
    showEurope:false,
    showAustralia:false,
  });
};


handleSelectEuropeToHide = event => {
  this.setState({
   
    showEurope:false,
  });
};

handleSelectEuropeToShow = event => {
  this.setState({
    showEurope:true,
    showCountries:false,
    showAsia:false,
    showAfrica:false,
    showNorthAmarica:false,
    showSouthAmerica:false,
    showAustralia:false,
  });
};


handleSelectAustraliaToHide = event => {
  this.setState({
   
    showAustralia:false,
  });
};

handleSelectAustraliaToShow = event => {
  this.setState({
    showAustralia:true,
    showCountries:false,
    showAsia:false,
    showAfrica:false,
    showNorthAmarica:false,
    showSouthAmerica:false,
    showEurope:false,
  });
};


handleSelectNorthAmaricaToHide = event => {
  this.setState({
   
    showNorthAmarica:false,
  });
};

handleSelectNorthAmaricaToShow = event => {
  this.setState({
    showNorthAmarica:true,
    showAsia:false,
    showCountries:false,
    showAfrica:false,
    showSouthAmerica:false,
    showEurope:false,
    showAustralia:false,
  });
};



handleSelectSouthAmericaToHide = event => {
  this.setState({
   
    showSouthAmerica:false,
  });
};

handleSelectSouthAmericaToShow = event => {
  this.setState({
    showSouthAmerica:true,
    showNorthAmarica:false,
    showAsia:false,
    showCountries:false,
    showAfrica:false,
    showEurope:false,
    showAustralia:false,
  });
};

 

handleSelectAll = event => {
  this.setState({
    showAll:true,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showServices:false,
    showClassifieds:false,
    searchByMarket:'',
    searchByCategory_code:'',
    searchByPurpose: '',
    search:'',
    

  });
};


handleSelectCars = event => {
  this.setState({
    showCars:true,
    showProperties:false,
    showJobs:false,
    showServices:false,
    showClassifieds:false,
    showAll:false,
    searchByMarket:'cars',
    searchByCategory_code:'',
    searchByPurpose: '',
    search:'',
    

  });
};


handleSelectProperties = event => {
  this.setState({
    showProperties:true,
    showCars:false,
    showJobs:false,
    showServices:false,
    showClassifieds:false,
    showAll:false,
   searchByMarket:'properties',
   searchByCategory_code:'',
   searchByPurpose: ''
});
};



handleSelectJobs = event => {
  this.setState({
    showJobs:true,
    showCars:false,
    showProperties:false,
    showServices:false,
    showClassifieds:false,
    showAll:false,
    searchByMarket:'jobs',
    searchByCategory_code:'',
    searchByPurpose: ''
  });
};


handleSelectServices = event => {
  this.setState({
    showServices:true,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showClassifieds:false,
    showAll:false,
    searchByMarket:'services',
    searchByCategory_code:'',
    searchByPurpose: ''
  });
};

handleSelectClassifieds = event => {
  this.setState({
    showClassifieds:true,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showServices:false,
    showAll:false,
    searchByMarket:'classifieds',
    searchByCategory_code:'',
    searchByPurpose: ''
  });
};









 
 
 
 
  componentDidMount() {
    axios.get('/api/posts/')
      .then(response => {
        this.setState({ exercises: response.data })
 
      })
      .catch((error) => {
        console.log(error);
      })
 
 
      axios.get('/api/auth/')
      .then(response => {
        this.setState({ auth: response.data })

      })
      .catch((error) => {
        console.log(error);
      })


  
      axios.get('/api/countries/middle-east')
      .then(response => {
        this.setState({ countries: response.data })
      }) 
      .catch((error) => {
        console.log(error);
      }) 


      axios.get('/api/countries/Asia')
      .then(response => {
        this.setState({ Asia: response.data })
      }) 
      .catch((error) => {
        console.log(error);
      }) 



      axios.get('/api/countries/Africa')
      .then(response => {
        this.setState({ Africa: response.data })
      }) 
      .catch((error) => {
        console.log(error);
      }) 



      axios.get('/api/countries/Europe')
      .then(response => {
        this.setState({ Europe: response.data })
      }) 
      .catch((error) => {
        console.log(error);
      }) 



      axios.get('/api/countries/Australia')
      .then(response => {
        this.setState({ Australia: response.data })
      }) 
      .catch((error) => {
        console.log(error);
      }) 



      axios.get('/api/countries/NorthAmarica')
      .then(response => {
        this.setState({ NorthAmarica: response.data })
      }) 
      .catch((error) => {
        console.log(error);
      }) 

 

      axios.get('/api/countries/SouthAmerica')
      .then(response => {
        this.setState({ SouthAmerica: response.data })
      }) 
      .catch((error) => {
        console.log(error);
      }) 

  
    //   axios.get('/api/countries/homeCities/'+this.props.match.params.id)
    //   .then(response => {
    //     this.setState({ cities: response.data })

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   }) 
 

 
      axios.get('/api/categories')
      .then(response => {
        this.setState({ allCategory: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 


 
      axios.get('/api/categories/cars')
      .then(response => {
        this.setState({ carsCategory: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 



      axios.get('/api/categories/properties')
      .then(response => {
        this.setState({ propertiesCategory: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 




      axios.get('/api/categories/jobs')
      .then(response => {
        this.setState({ jobsCategory: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 



      axios.get('/api/categories/services')
      .then(response => {
        this.setState({ servicesCategory: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 

    


      axios.get('/api/categories/classifieds')
      .then(response => {
        this.setState({ classifiedsCategory: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 

  }

  deleteExercise(id) {
    axios.delete('/api/posts/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }
 
 

  // Add like
 addLike(id) {

   axios.put('/api/posts/like/'+id)
   .then(response => {
    console.log(response.data)
  });

  
};



// Remove like
removeLike(id) {

  axios.put('/api/posts/unlike/'+id)
  .then(response => {
   console.log(response.data)
 });

 
};

 
 
countryList(){
  return  this.state.countries
  .map(country => {
   
  
    return <Link  to={`/main/${country.country_code}`}  
    onClick={this.searchChangedByCountry}
    value={country.country_code}

    className="categoryListButton">
    {country.country_AR_name} <img src={country.country_image} width='30px' height='20px' />
     </Link>
    


   })
}



AsiaList(){
  return  this.state.Asia
  .map(country => {
      // return <option value={country.country_code}> {country.country_AR_name}  </option>
   
        return <Link to={`/main/${country.country_code}`}  
        onClick={this.searchChangedByCountry}
        value={country.country_code}
        className="categoryListButton">
        {country.country_AR_name}
         <img src={country.country_image} width='30px' height='20px' />
         </Link>
     
  
   })
}


AfricaList(){
  return  this.state.Africa
  .map(country => {


 
    return <Link to={`/main/${country.country_code}`}  
    onClick={this.searchChangedByCountry}
    value={country.country_code}

    className="categoryListButton">
    {country.country_AR_name} <img src={country.country_image} width='30px' height='20px' />
     </Link>
    

   })
}



EuropeList(){
  return  this.state.Europe
  .map(country => {


 
    return <Link to={`/main/${country.country_code}`}  
    onClick={this.searchChangedByCountry}
    value={country.country_code}
    className="categoryListButton">
    {country.country_AR_name} <img src={country.country_image} width='30px' height='20px' />
     </Link>
    

   })
}




AustraliaList(){
  return  this.state.Australia
  .map(country => {
    
    return <Link to={`/main/${country.country_code}`}  
    onClick={this.searchChangedByCountry}
    value={country.country_code}
    className="categoryListButton">
    {country.country_AR_name} <img src={country.country_image} width='30px' height='20px' />
     </Link>
    

   })
}



NorthAmaricaList(){
  return  this.state.NorthAmarica
  .map(country => {
 
    return <Link to={`/main/${country.country_code}`}  
    onClick={this.searchChangedByCountry}
    value={country.country_code}
    className="categoryListButton">
    {country.country_AR_name} <img src={country.country_image} width='30px' height='20px' />
     </Link>
    

   })
}



SouthAmericaList(){
  return  this.state.SouthAmerica
  .map(country => {
     return <Link to={`/main/${country.country_code}`}  
    onClick={this.searchChangedByCountry}
    value={country.country_code}

    className="categoryListButton">
    {country.country_AR_name} <img src={country.country_image} width='30px' height='20px' />
     </Link>
   })
}


cityList(){
  return  this.state.cities
  .map(city => {
      return <option value={city.city_code}> {city.city_AR_name}  </option>

   })

}



allCategoryList(){
  return  this.state.allCategory
  .map(allCategory => {
    //  return <option value={carsCategory.c_code}> {carsCategory.c_AR_name}  </option>
    return <button 
    value={this.state.searchByCategory_code}
    onClick={this.searchChangedByCategory_code}
    // value={allCategory.c_code} 
    className="categoryListButton">
    {allCategory.c_AR_name}
     </button>

   })
 
}


carsCategoryList(){
  return  this.state.carsCategory
  .map(carsCategory => {
    //  return <option value={carsCategory.c_code}> {carsCategory.c_AR_name}  </option>
    return <button 
    value={this.state.searchByCategory_code}
    onClick={this.searchChangedByCategory_code}
    // value={carsCategory.c_code} 
    className="categoryListButton">
    {carsCategory.c_AR_name}
     </button>

   })

}

 


propertiesCategoryList(){
  return  this.state.propertiesCategory
  .map(propertiesCategory => {
    // return <option value={propertiesCategory.c_code}> {propertiesCategory.c_AR_name}  </option>
    return <button 
    value={this.state.searchByCategory_code}
    onClick={this.searchChangedByCategory_code}
    // value={propertiesCategory.c_code} 
    className="categoryListButton">{propertiesCategory.c_AR_name}
     </button>
   })
}



jobsCategoryList(){
  return  this.state.jobsCategory
  .map(jobsCategory => {
    // return <option value={jobsCategory.c_code}> {jobsCategory.c_AR_name}  </option>

    return <button 
    value={this.state.searchByCategory_code}
    onClick={this.searchChangedByCategory_code}
    // value={jobsCategory.c_code} 
    className="categoryListButton">{jobsCategory.c_AR_name}
     </button>

   })
}




servicesCategoryList(){
  return  this.state.servicesCategory
  .map(servicesCategory => {
    // return <option value={servicesCategory.c_code}> {servicesCategory.c_AR_name}  </option>

    return <button 
    value={this.state.searchByCategory_code}
    onClick={this.searchChangedByCategory_code}
    // value={servicesCategory.c_code} 
    className="categoryListButton">{servicesCategory.c_AR_name}
     </button>


   })
}



classifiedsCategoryList(){
  return  this.state.classifiedsCategory
  .map(classifiedsCategory => {
    // return <option value={classifiedsCategory.c_code}> {classifiedsCategory.c_AR_name}  </option>
 
 
    return <button 
    value={this.state.searchByCategory_code}
    onClick={this.searchChangedByCategory_code}
    // value={classifiedsCategory.c_code} 
    className="categoryListButton">{classifiedsCategory.c_AR_name}
     </button>


  })
}



   
  exerciseList() {
    
    const { exercises, currentPage, todosPerPage,visible } = this.state;
    const currentTodos = exercises.slice(0,visible);
    return  currentTodos

 
    .filter(post=>{
      return post.Main_paragraph.toLowerCase().indexOf(this.state.search.toLowerCase())>=0

    })

    .filter(post=>{
      return post.market_code.toLowerCase().indexOf(this.state.searchByMarket.toLowerCase())>=0

    })


    .filter(post=>{
      return post.purpose.toLowerCase().indexOf(this.state.searchByPurpose.toLowerCase())>=0

    })

 
    .filter(post=>{
      return post.category_code.toLowerCase().indexOf(this.state.searchByCategory_code.toLowerCase())>=0

    })



    .filter(post=>{
      return post.country.toLowerCase().indexOf(this.state.searchByCountry.toLowerCase())>=0

    })

 

    .map(currentexercise => {
      return <Exercise exercise={currentexercise} auth={this.state.auth} deleteExercise={this.deleteExercise} addLike={this.addLike}  removeLike={this.removeLike} key={currentexercise._id}/>;
    })
  }



  // exerciseListByMarket() {
    

  //   const { exercises, currentPage, todosPerPage,visible } = this.state;
  //   const currentTodos = exercises.slice(0,visible);
  //   return  currentTodos

 
  //   .filter(post=>{
  //     return post.market_code.toLowerCase().indexOf(this.state.searchByMarket.toLowerCase())>=0

  //   })
 

 

  //   .map(currentexercise => {
  //     return <Exercise exercise={currentexercise} auth={this.state.auth} deleteExercise={this.deleteExercise} addLike={this.addLike}  removeLike={this.removeLike} key={currentexercise._id}/>;
  //   })
  // }



  loadMore() {
    this.setState({
      visible:this.state.visible+500
    })
  }




  render() {
   
  
     
    return (
      
     
      
      <div className="aqle3-main">
      <div className="mainword2">


  
{i18next.language === 'ar'&&(<Navbar />)}
{i18next.language === 'en'&&(<NavbarEnglish />)}
 
 

 <div className="dash-title"> أسواق عالمية    </div>

 <center> <div className="details-title">  لانتشار أعمالك وتوسيع نطاق أهدافك   </div></center>

 <center> <div className="details-title" style={{width:'80%'}}>  
 بيع - شراء - عرض للإيجار- بحث عن إيجار - وظائف شاغرة -  بحث عن عمل - ‏عرض خدمات - أعمال - شراكة  ‏ 
 </div></center>

    

      {/* <center>  <div class="progress-bar"   data-label="Loading..."></div></center> */}

 
 
 

 

 
 {/* //////////////////////////////////////////////////////القائمة الاساسية - اللغة والاقسام الرئيسية للموقع ///////////////////////////////////////////// */}

      <div className="mainword-section-left">

      <div className="dash-title">  </div>


 
             <center>
   
            

                

                  


                






                




                 
 
    {/* ////////////////////////////////////////قائمة الأسواق الأساسية/////////////////////////////////////////////////////             */}

 
    

</center>
 

 </div>







<div class="rt-container">
          <div class="col-rt-12">
              <div class="Scriptcontent">
               
            {/* <!-- partial:index.partial.html --> */}
<div class="distribution-map">
    <img src={map} alt="" />



     
 
{ this.state.showCountries === false &&( 
                  <button className="map-point" style={{top:'55%',left:'50%'}} onClick={this.handleSelectCountriesToShow}>
                     الشرق الأوسط
                   <i className="fa fa-globe" aria-hidden="true"></i> </button>
                   )}
 
 

   
        
        
       
                   
                  

                  { this.state.showCountries === true &&(
                  <>
                
                 <button  className="map-point" style={{top:'55%',left:'50%'}} onClick={this.handleSelectCountriesToHide}> الشرق الأوسط <i className="fa fa-arrow-up" aria-hidden="true"></i> </button>
               
          <button  className="map-point" style={{top:'55%',left:'50%'}} onClick={this.handleSelectCountriesToHide}> الشرق الأوسط <i className="fa fa-arrow-up" aria-hidden="true"></i> </button>

                

 
                 
                  <div id="myDropdown" className="dropdown-content" style={{top:'55%',left:'50%'}}>
 

                  {this.countryList()} 
                  </div>
                  </>
                    )}
                    
                
                {/* ////////////////////////////////////////////Afriica///////////////////////////////////////////////////// */}

 
                  { this.state.showAfrica === false &&( 
                  <button  className="map-point" style={{top:'65%',left:'50%'}} onClick={this.handleSelectAfricaToShow}> افريقيا <i className="fa fa-globe" aria-hidden="true"></i> </button>
                  )}

                  { this.state.showAfrica === true &&(
                  <>
                 <button  className="map-point" style={{top:'65%',left:'50%'}} onClick={this.handleSelectAfricaToHide}> افريقيا <i className="fa fa-arrow-up" aria-hidden="true"></i> </button>

                  <div id="myDropdown" className="dropdown-content" style={{top:'65%',left:'50%'}}>
 

                  {this.AfricaList()} 
                  </div>
                  </>
                    )}


             
             
{/* ////////////////////////////////////////////Asia///////////////////////////////////////////////////// */}

 
                  { this.state.showAsia === false &&( 
                  <button   className="map-point" style={{top:'45%',left:'70%'}}  onClick={this.handleSelectAsiaToShow}> آسيا <i className="fa fa-globe" aria-hidden="true"></i> </button>
                  )}




                  { this.state.showAsia === true &&(
                  <>
                 <button   className="map-point" style={{top:'45%',left:'70%'}}  onClick={this.handleSelectAsiaToHide}> آسيا <i className="fa fa-arrow-up" aria-hidden="true"></i> </button>

                  <div id="myDropdown" className="dropdown-content" style={{top:'45%',left:'70%'}}>
 

                  {this.AsiaList()} 
                  </div>
                  </>
                    )}


                    
  {/* ////////////////////////////////////////////ُAusralia///////////////////////////////////////////////////// */}

 
                  { this.state.showAustralia === false &&( 
                  <button  className="map-point" style={{top:'75%',left:'80%'}} onClick={this.handleSelectAustraliaToShow}> استراليا <i className="fa fa-globe" aria-hidden="true"></i> </button>
                  )}

                  { this.state.showAustralia === true &&(
                  <>
                 <button  className="map-point" style={{top:'75%',left:'80%'}} onClick={this.handleSelectAustraliaToHide}> استراليا <i className="fa fa-arrow-up" aria-hidden="true"></i> </button>

                  <div id="myDropdown" className="dropdown-content" style={{top:'75%',left:'80%'}}>
 

                  {this.AustraliaList()} 
                  </div>
                  </>
                    )}


                  


        
                        
{/* ////////////////////////////////////////////ُEurope///////////////////////////////////////////////////// */}

 
                  { this.state.showEurope === false &&( 
                  <button   className="map-point" style={{top:'40%',left:'50%'}} onClick={this.handleSelectEuropeToShow}> اوروبا <i className="fa fa-globe" aria-hidden="true"></i> </button>
                  )}

                  { this.state.showEurope === true &&(
                  <>
                 <button  className="map-point" style={{top:'40%',left:'50%'}} onClick={this.handleSelectEuropeToHide}> اوروبا <i className="fa fa-arrow-up" aria-hidden="true"></i> </button>

                  <div id="myDropdown" className="dropdown-content" style={{top:'40%',left:'50%'}}>
 

                  {this.EuropeList()} 
                  </div>
                  </>
                    )}




        
  {/* ////////////////////////////////////////////ُSouthAmerica///////////////////////////////////////////////////// */}

 
                  { this.state.showSouthAmerica === false &&( 
                  <button  className="map-point" style={{top:'70%',left:'25%'}} onClick={this.handleSelectSouthAmericaToShow}> امريكا الجنوبية <i className="fa fa-globe" aria-hidden="true"></i> </button>
                  )}

                  { this.state.showSouthAmerica === true &&(
                  <> 
                 <button  className="map-point" style={{top:'70%',left:'25%'}}  onClick={this.handleSelectSouthAmericaToHide}> امريكا الجنوبية <i className="fa fa-arrow-up" aria-hidden="true"></i> </button>

                  <div id="myDropdown" className="dropdown-content" style={{top:'70%',left:'25%'}}>
 
 
                  {this.SouthAmericaList()} 
                  </div>
                  </>
                    )}

  
              
          
            {/* ////////////////////////////////////////////ُNorthAmarica///////////////////////////////////////////////////// */}

 
                  { this.state.showNorthAmarica === false &&( 
                  <button className="map-point" style={{top:'44%',left:'20%'}} onClick={this.handleSelectNorthAmaricaToShow}> امريكا لشمالية <i className="fa fa-globe" aria-hidden="true"></i> </button>
                  )}

                  { this.state.showNorthAmarica === true &&(
                  <>
                 <button  className="map-point" style={{top:'44%',left:'20%'}} onClick={this.handleSelectNorthAmaricaToHide}> امريكا الشمالية <i className="fa fa-arrow-up" aria-hidden="true"></i> </button>

                  <div id="myDropdown" className="dropdown-content" style={{top:'44%',left:'20%'}} >
  

                  {this.NorthAmaricaList()} 
                  </div>
                  </>
                    )}


              


 
</div>

{/* <!-- partial --> */}
           
    		</div>
		</div>
    </div>
 
{/* {this.exerciseList()} */}


<center>

{/* 
<div className="dash-title"> منصة واحدة ... إمكانات غير محدودة‏   </div>
 <div className="details-title" style={{width:'80%'}}>    
 نتطلع لأن نكون شريكًا عالميًا موثوقًا به لكل من يتطلع إلى النمو عبر الإنترنت.‏
  </div>

 <br/> <br/> <br/>

<div className="dash-title"> ابدأ بثقة   </div>
<div className="details-title" style={{width:'80%'}}>    
لا يجب أن يكون نشاطك التجاري عبر الإنترنت أمرًا معقدًا. في اعلانات فائز ، نقدم ‏أدوات وأفكار تجارة إلكترونية موثوقة ومبتكرة، وسوقًا عالميًا تابعًا، ودعمًا رائدًا في ‏الصناعة - وكل ما تحتاجه للبناء بثقة لتحقيق اهدافك وزيادة ارباحك
 </div> */}


 <br/> <br/> <br/>

<div className="dash-title"> يمكنك الاعلان عن كل شيء والنشر لعملاء محتملين في جميع انحاء العالم ‏  </div>
 <center> 
 <div className='vertical-menu-wrapper-home'>
 <button className='vertical-menu-active-home'>  سيارات</button> 
 <button className='vertical-menu-active-home'>  عقارات</button> 
  <button className='vertical-menu-active-home'>  وظائف </button>
 <button className='vertical-menu-active-home'>  خدمات </button>
 <button className='vertical-menu-active-home'>  سلع  </button>
 <button className='vertical-menu-active-home'>  الكترونيات </button>
 <button className='vertical-menu-active-home'>  حيوانات </button>
 <button className='vertical-menu-active-home'>  اثاث </button>
 <button className='vertical-menu-active-home'>  مستلزمات شخصية </button>
 <button className='vertical-menu-active-home'>  اطعمة ومشروبات  </button>
  </div>
  </center>







  <div className="dash-title"> نشارك الإعلانات على منصات التواصل الاجتماعية ‏  </div>
 <center> 
 <div className='vertical-menu-wrapper-home'>
 <button className='vertical-menu-active-home'>  فيس بوك</button> 
 <button className='vertical-menu-active-home'>  تويتر</button> 
  <button className='vertical-menu-active-home'>  انستغرام </button>
 <button className='vertical-menu-active-home'>  يوتيوب </button>
 <button className='vertical-menu-active-home'>  لنكد ان </button>
  </div>
  </center>
{/* <br/><br/><br/><br/>

<div className="dash-title"> أدوات تجارة إلكترونية قوية </div>
  <div className='vertical-menu-wrapper-home'>
 
  <div className="details-title" style={{width:'80%'}}>
     تعمل أدواتنا وخدماتنا على تقليل حاجز الدخول وتسهيل توسيع نطاق عملك عبر ‏الإنترنت.‏  </div>
</div>
<ul className='breadcrumb'>
  <li > 	ادارة ونشر الاعلانات </li>
  <li  > 	التسويق والترويج لهذة المنصة بالعمولة عن طريق روابط أعضاء شركاء ‏ومسوقين ‏ </li>
  <li  > 	برنامج المميزات والعضويات </li>
</ul>



<br/><br/><br/><br/>


<div className="dash-title"> سوق منتسبة واسعة النطاق </div>
  <div className='vertical-menu-wrapper-home'>
 
  <div className="details-title" style={{width:'80%'}}>
  نقوم بتوصيل أكثر من 100000 بائع ومسوق للوصول إلى ملايين العملاء في جميع ‏أنحاء العالم.‏     
     </div>
</div>
<ul className='breadcrumb'>
  <li > 	سوق المنتجات الشفاف </li>
   <li  > 	 أفضل العروض أداء </li>
</ul>


<br/><br/><br/><br/>




<div className="dash-title"> دعم وتعليم رائد في صناعة الإعلانات </div>
  <div className='vertical-menu-wrapper-home'>
 
  <div className="details-title" style={{width:'80%'}}>
  نحن ندعم نموك الشخصي والتجاري بكل ما نقوم به       </div>
</div>
<ul className='breadcrumb'>
  <li> 	إدارة الحساب الشخصي </li>
  <li>  أحداث صناعة الاعلانات الحصرية </li>
</ul>



<br/><br/><br/><br/>

 
 

<div className="dash-title"> طريقك إلى النجاح عبر الإنترنت يبدأ من هنا   </div>
  <div className='vertical-menu-wrapper-home'>
 
  <div className="details-title" style={{width:'80%'}}>
  سواء كنت تبحث عن بدء نشاطك التجاري أو توسيع نطاقه   ، يمكن أن يساعدك فريق ‏اعلانات فائز انضم إلى آلاف البائعين وأكثر من 100000 من الشركاء يحققون النجاح ‏على منصة اعلانات فائز
  </div>
</div>
  */}


 </center>







 






      </div>
      </div>

   
      
      
    )
  }
}
