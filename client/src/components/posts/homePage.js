import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import { Fragment } from 'react';
import { deletePost } from '../../actions/post';
import ConfirmButton from "./ConfirmButton";
 
import noimg from './noimg.jpg';
import greenFace from './greenFace.png';
import redFace from './redFace.png';
import yallowFace from './yallowFace.png';
  
import addLike from '../../actions/post';
import addClick from '../../actions/post';




const Exercise = props => (
 
<Fragment>  
<div class="MainListHomeCover">
  <center> 
   
<div className="main-list-home" key={props.exercise._id}>
<Link onClick={() => props.addClick(props.exercise._id)} target="_blank" to={`${props.exercise.country_code}/posts/${props.exercise._id}`}  > 
  
   
</Link>

<div>
    {props.exercise.image ? (
      <Link onClick={() => props.addClick(props.exercise._id)} target="_blank" to={`/${props.exercise.country_code}/posts/${props.exercise._id}`}  > <img className='image-in-list-home' src={props.exercise.image}  /></Link>
      ):(
  
          <Link onClick={() => props.addClick(props.exercise._id)} target="_blank" to={`/posts/${props.exercise._id}`}  > <img className='image-in-list-home' src={noimg}  /></Link>
          )}
     </div>

 




 {props.exercise.premium === 'yes' &&(

<Link onClick={() => props.addClick(props.exercise._id)} to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-premium">   مميز    <i className="fa fa-star fa-1x"></i></button> </Link>

)}


  <Link  onClick={() => props.addClick(props.exercise._id)} to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   {props.exercise.category_code}  <i className="fa fa-list fa-1x"></i></button> </Link>
  {/* <Link to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   {props.exercise.market_code}  <i className="fa fa-list fa-1x"></i></button> </Link> */}




     <center>
      {props.exercise.premium === 'no' &&(
        <div className='title-in-list-home'>
        <Link onClick={() => props.addClick(props.exercise._id)} className='title-in-list-home'  target="_blank" to={`/posts/${props.exercise._id}`}  >    
         {props.exercise.title}  
         </Link>
        </div>
      )}


        {props.exercise.premium === 'yes' &&(
        <div className='title-in-list-premium-home'>
        <Link  onClick={() => props.addClick(props.exercise._id)} className='title-in-list-premium-home'  target="_blank" to={`/posts/${props.exercise._id}`}  >    
         {props.exercise.title}  
         </Link>
        </div>
      )}
</center>
<button className="Action-button-status"> 
<i class="fa fa-eye" aria-hidden="true"></i>  {props.exercise.clicks.length}
</button>
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
    
    
    this.handleSelectCitiesToShow = this.handleSelectCitiesToShow.bind(this)

    this.handleSelectCitiesToHide = this.handleSelectCitiesToHide.bind(this)


    this.handleSelectCountriesToHide = this.handleSelectCountriesToHide.bind(this)
    this.handleSelectCountriesToShow = this.handleSelectCountriesToShow.bind(this)
    this.handleSelectAll = this.handleSelectAll.bind(this)
    this.handleSelectCars = this.handleSelectCars.bind(this)
    this.handleSelectProperties = this.handleSelectProperties.bind(this)
    this.handleSelectJobs = this.handleSelectJobs.bind(this)
    this.handleSelectServices = this.handleSelectServices.bind(this)
    this.handleSelectClassifieds = this.handleSelectClassifieds.bind(this)
   
 

    this.deleteExercise = this.deleteExercise.bind(this)
    this.loadMore = this.loadMore.bind(this);

    this.state = {
      oneCountryInfo:[],
      countries:[],
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
      searchByCountry:"",
      searchByCity:'',
      loading:"",
      auth:'',
      user:"",
      visible:1000,
      likes:'',
      clicks:'',
      id:'',
      showAll:true,
      showCars:false,
      showProperties:false,
      showJobs:false,
      showServices:false,
      showClassifieds:false,
      showCountries:false,
      showCities:false

  
      
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
    searchByCity: '',
    showCountries:false
  
  
  })
}
 

searchChangedByCity = event => {
  this.setState({
    searchByCity: event.target.value,

  
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
  });
};






handleSelectCitiesToHide = event => {
  this.setState({
   
    showCities:false,
  });
};

handleSelectCitiesToShow = event => {
  this.setState({
  
    showCities:true,
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
    axios.get('/api/posts/homePage/'+this.props.match.params.id)
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



      axios.get('/api/countries/countyByCode/'+this.props.match.params.id)
      .then(response => {
        this.setState({ oneCountryInfo: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 



      axios.get('/api/countries/')
      .then(response => {
        this.setState({ countries: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 


      axios.get('/api/countries/homeCities/'+this.props.match.params.id)
      .then(response => {
        this.setState({ cities: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 
 


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
 
 

  // Add click
  addClick(id) {
   axios.put('/api/posts/click/'+id)
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
      // return <option value={country.country_code}> {country.country_AR_name}  </option>

      return <Link to={`/home/${country.country_code}`}  
      onClick={this.searchChangedByCountry}
      value={country.country_code}
  
      className="categoryListButton">
       <img src={country.country_image} width='30px' height='20px' /> {country.country_AR_name}
       </Link>

   })

}

oneCountryInfo(){
  return  this.state.oneCountryInfo
  .map(country => {
      // return <option value={country.country_code}> {country.country_AR_name}  </option>

      return  <img src={country.country_image} width='30px' height='20px' />
  

   })

}


cityList(){
  return  this.state.cities
  .map(city => {
      return <option value={city.city_code}> {city.city_AR_name}  </option>

      // return <button 
      // onClick={this.searchChangedByCountry}
      // value={city.city_code}
  
      // className="categoryListButton">
      // {city.city_AR_name} <img src={city.city_image} width='30px' height='20px' />
      //  </button>


   })

}



allCategoryList(){
  return  this.state.allCategory
  .map(allCategory => {
    //  return <option value={carsCategory.c_code}> {carsCategory.c_AR_name}  </option>
    return <button 
    value={this.state.searchByCategory_code}
    onClick={this.searchChangedByCategory_code}
    value={allCategory.c_code} 
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
    value={carsCategory.c_code} 
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
    value={propertiesCategory.c_code} 
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
    value={jobsCategory.c_code} 
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
    value={servicesCategory.c_code} 
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
    value={classifiedsCategory.c_code} 
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


    .filter(post=>{
      return post.city.toLowerCase().indexOf(this.state.searchByCity.toLowerCase())>=0

    })

 

    .map(currentexercise => {
      return <Exercise exercise={currentexercise} auth={this.state.auth} deleteExercise={this.deleteExercise} addClick={this.addClick}  removeLike={this.removeLike} key={currentexercise._id}/>;
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


<div className="mainword-section-right">

 


 {/* ////////////////////////////////////////القائمةللكل ////////////////////////////////////// */}
{ this.state.showAll===true&&(
<Fragment> 
 <div id="mySidenav"   className='sideNavHome'>
 <center> 
 <button className="categoryListButtonTop" onClick={this.handleSelectAll}> الكل  <i class="fa fa-list" aria-hidden="true"></i></button>
 </center>
{this.allCategoryList()} 
</div>
</Fragment>
  )}




{/* ////////////////////////////////////////القائمة الجانبية السيارات////////////////////////////////////// */}
{ this.state.showCars===true&&(
<Fragment> 
 <div id="mySidenav"   className='sideNavHome'>
 <center> 
 <button className="categoryListButtonTop" onClick={this.handleSelectCars}> سيارات  <i class="fa fa-car" aria-hidden="true"></i></button>
 </center>
{this.carsCategoryList()} 
</div>
</Fragment>
  )}



  {/* ////////////////////////////////////////القائمة الجانبية العقارات////////////////////////////////////// */}
{ this.state.showProperties===true&&(
<Fragment> 
 <div id="mySidenav"   className='sideNavHome'>
 <center> 
 <button className="categoryListButtonTop" onClick={this.handleSelectProperties}>  العقارات  <i class="fa fa-home" aria-hidden="true"></i></button>
 </center>
{this.propertiesCategoryList()} 
</div>
</Fragment>
  )}



{/* ////////////////////////////////////////القائمة الجانبية وظائف////////////////////////////////////// */}
{ this.state.showJobs === true &&(
<Fragment> 
 <div id="mySidenav"   className='sideNavHome'>
 <center> 
 <button className="categoryListButtonTop" onClick={this.handleSelectJobs}> الوظائف  <i class="fa fa-briefcase" aria-hidden="true"></i></button>
 </center>
{this.jobsCategoryList()} 
</div>
</Fragment>
  )}




  {/* ////////////////////////////////////////القائمة الجانبية خدمات////////////////////////////////////// */}
{ this.state.showServices === true &&(
<Fragment> 
 <div id="mySidenav"   className='sideNavHome'>
 <center> 
 <button className="categoryListButtonTop" onClick={this.handleSelectServices}> الخدمات  <i class="fa fa-handshake-o" aria-hidden="true"></i></button>
 </center>
{this.servicesCategoryList()} 
</div>
</Fragment>
  )}






    {/* ////////////////////////////////////////القائمة الجانبية المنتجات والسلع////////////////////////////////////// */}
{ this.state.showClassifieds === true &&(
<Fragment> 
 <div id="mySidenav"   className='sideNavHome'>
 <center> 
 <button className="categoryListButtonTop" onClick={this.handleSelectClassifieds} > المنتجات  <i class="fa fa-opencart" aria-hidden="true"></i> </button>
 </center>
{this.classifiedsCategoryList()} 
</div>
</Fragment>
  )}

</div>

{/* //////////////////////////////////////////////////////انتهاء القائمة الجانبية ///////////////////////////////////////////// */}


 
 {/* //////////////////////////////////////////////////////القائمة الاساسية - اللغة والاقسام الرئيسية للموقع ///////////////////////////////////////////// */}

      <div className="mainword-section-left">

      <div className="dash-title">  </div>


 
      <center>
      {/* <Link to="/Addpost" className="Action-button-plus">  <i className="fa fa-plus fa-1x"></i> اضف إعلان جديد </Link>
      <Link to="/AddPremiumPost" className="Action-button-plus">  <i className="fa fa-star fa-1x"></i> اضف اعلان مميز </Link> */}
 

                <div style={{width:'100%'}}>

                {/* <select className="topaAdCountryInput" 
                
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  > 
                  <option value='#'> اختر الدولة  </option>
                  {this.countryList()} 
                  </select> */}


                 <select className="topaAdCountryInput" 
                  value={this.state.searchByCity}
                  onChange={this.searchChangedByCity}
                  >  
                     <option value='#'> اختر المدينة  </option>
                     {this.cityList()} 
                  </select> 


 {/* /////////////////////////////////////////المدن زر////////////////////////////////////////// */}


          {/* <div className="dropdown">
                  { this.state.showCities === false &&( 
                  <button  className="dropbtn" onClick={this.handleSelectCitiesToShow}> المدينة { this.oneCountryInfo()} </button>

                 

                  )}

                  { this.state.showCities === true &&(
                  <>
                 <button  className="dropbtn" onClick={this.handleSelectCitiesToHide}> المدينة <i className="fa fa-arrow-up" aria-hidden="true"></i> </button>

                  <div id="myDropdown" className="dropdown-content">
                    
                  {this.cityList()} 
                  </div>
                  </>
                    )}


                  </div>  */}

 {/* /////////////////////////////////////////نهاية قائمة المدن////////////////////////////////////////// */}
            
                





                   <div className="dropdown">
                  { this.state.showCountries === false &&( 
                  <button  className="dropbtn" onClick={this.handleSelectCountriesToShow}> الدولة { this.oneCountryInfo()} </button>

                 

                  )}

                  { this.state.showCountries === true &&(
                  <>
                 <button  className="dropbtn" onClick={this.handleSelectCountriesToHide}> الدولة <i className="fa fa-arrow-up" aria-hidden="true"></i> </button>

                  <div id="myDropdown" className="dropdown-content">
                  {this.countryList()} 
                  </div>
                  </>
                    )}


                  </div> 
                

                  </div>


                 
      
    {/* ////////////////////////////////////////قائمة الأسواق الأساسية/////////////////////////////////////////////////////             */}



    { this.state.showAll===true ?(
      <button className='selectedMarket' onClick={this.handleSelectAll}> <i class="fa fa-list" aria-hidden="true"></i> الكل </button>
      ):(
    <button className='Action-button-plus' onClick={this.handleSelectAll}> <i class="fa fa-list" aria-hidden="true"></i> الكل </button>

      )}

 

      { this.state.showCars===true ?(
      <button className='selectedMarket' onClick={this.handleSelectCars}> <i class="fa fa-car" aria-hidden="true"></i> سيارات  </button>
      ):(
    <button className='Action-button-plus' onClick={this.handleSelectCars}> <i class="fa fa-car" aria-hidden="true"></i> سيارات </button>

      )}


      { this.state.showProperties===true ?(
            <button className="selectedMarket" onClick={this.handleSelectProperties}> <i class="fa fa-home" aria-hidden="true"></i>  عقارات </button>
      ):(
        <button className="Action-button-plus" onClick={this.handleSelectProperties}> <i class="fa fa-home" aria-hidden="true"></i>  عقارات </button>
      )}


{ this.state.showJobs===true ?(
 <button className="selectedMarket" onClick={this.handleSelectJobs}> <i class="fa fa-briefcase" aria-hidden="true"></i>  وظائف </button>
):(
  <button className="Action-button-plus" onClick={this.handleSelectJobs}> <i class="fa fa-briefcase" aria-hidden="true"></i>  وظائف </button>

)}
     

 { this.state.showServices===true ?(
 <button className="selectedMarket" onClick={this.handleSelectServices}> <i class="fa fa-handshake-o" aria-hidden="true"></i> خدمات </button>
 ):(
 <button className="Action-button-plus" onClick={this.handleSelectServices}> <i class="fa fa-handshake-o" aria-hidden="true"></i> خدمات </button>
 )}
      

{ this.state.showClassifieds===true ?(  
  <button className="selectedMarket" onClick={this.handleSelectClassifieds}> <i class="fa fa-opencart" aria-hidden="true"></i> منتجات </button>
 ):(
   <button className="Action-button-plus" onClick={this.handleSelectClassifieds}> <i class="fa fa-opencart" aria-hidden="true"></i> منتجات </button>

 )}

</center>
 

{/************************* - والغرض أظهار السيارات للبحث ***************************/}
<center>        
 { this.state.showCars===true&&(
   <Fragment>


     <center>  
     <input style={{width:'40%'}}  className="ForminputSearch" type='text' placeholder="البحث في السيارات " onChange={this.searchChanged} value={this.state.search}/>
    
     <span><button className='loadMorebtnSearch'
             onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> ابحث </button></span>

     </center>  


     { this.state.searchByPurpose==='rental' ?(
     <button className='PurposebtnON'onClick={this.loadMore} 
        value='rental'
        onClick={this.searchChangedByPurpose}
     > 
     سيارات للإيجار 
     </button>
     ):(
      <button className='Purposebtn'onClick={this.loadMore} 
      value='rental'
      onClick={this.searchChangedByPurpose}
   > 
   سيارات للإيجار 
   </button>
     )}




{ this.state.searchByPurpose==='for-sale' ?(
     <button className='PurposebtnON'onClick={this.loadMore} 
        value='for-sale'
        onClick={this.searchChangedByPurpose}
     >  
     سيارات للبيع 
     </button>
):(

  <button className='Purposebtn'onClick={this.loadMore} 
  value='for-sale'
  onClick={this.searchChangedByPurpose}
>  
سيارات للبيع 
</button>
)}





{ this.state.searchByPurpose==='ask-buy' ?(
     <button className='PurposebtnON'onClick={this.loadMore} 
        value='ask-buy'
        onClick={this.searchChangedByPurpose}
     >   
     مطلوب سيارات للشراء 
     </button>
):(

  <button className='Purposebtn'onClick={this.loadMore} 
  value='ask-buy'
  onClick={this.searchChangedByPurpose}
>   
مطلوب سيارات للشراء 
</button>
)}



{ this.state.searchByPurpose==='ask-rent' ?(
     <button className='PurposebtnON'onClick={this.loadMore} 
        value='ask-rent'
        onClick={this.searchChangedByPurpose}
     >  
     مطلوب سيارات للإيجار 
     </button>
):(
  <button className='Purposebtn'onClick={this.loadMore} 
  value='ask-rent'
  onClick={this.searchChangedByPurpose}
>  
مطلوب سيارات للإيجار 
</button>

)}
 


 

</Fragment>
)}
</center>   
{/* نهاية السيارات  ------------------------------------------------*/}







  

{/************************* أظهار العقارات للبحث ***************************/}
<center>        
 { this.state.showProperties===true&&(
   <Fragment>


     <center>  
     <input style={{width:'40%'}}  className="ForminputSearch" type='text' placeholder="البحث في العقارات " onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> ابحث </button></span>
     </center>  
 
   

   

     { this.state.searchByPurpose==='rental' ?(
     <button className='PurposebtnON'onClick={this.loadMore} 
        value='rental'
        onClick={this.searchChangedByPurpose}
     > 
     عقارات للإيجار 
     </button>
     ):(
      <button className='Purposebtn'onClick={this.loadMore} 
      value='rental'
      onClick={this.searchChangedByPurpose}
   > 
    عقارات للإيجار 
   </button>
     )}




{ this.state.searchByPurpose==='for-sale' ?(
     <button className='PurposebtnON'onClick={this.loadMore} 
        value='for-sale'
        onClick={this.searchChangedByPurpose}
     >  
      عقارات للبيع
     </button>
):(

  <button className='Purposebtn'onClick={this.loadMore} 
  value='for-sale'
  onClick={this.searchChangedByPurpose}
>  
عقارات للبيع 
</button>
)}





{ this.state.searchByPurpose==='ask-buy' ?(
     <button className='PurposebtnON'onClick={this.loadMore} 
        value='ask-buy'
        onClick={this.searchChangedByPurpose}
     >   
     مطلوب عقار للشراء 
     </button>
):(

  <button className='Purposebtn'onClick={this.loadMore} 
  value='ask-buy'
  onClick={this.searchChangedByPurpose}
>   
مطلوب عقار للشراء 
</button>
)}



{ this.state.searchByPurpose==='ask-rent' ?(
     <button className='PurposebtnON'onClick={this.loadMore} 
        value='ask-rent'
        onClick={this.searchChangedByPurpose}
     >  
    مطلوب عقار للإيجار
     </button>
):(
  <button className='Purposebtn'onClick={this.loadMore} 
  value='ask-rent'
  onClick={this.searchChangedByPurpose}
>  
مطلوب عقار للإيجار 
</button>

)}
 

 

</Fragment>
)}
</center>   
{/* نهاية العقارات  ------------------------------------------------*/}              






{/************************* أظهار الوظائف للبحث ***************************/}
<center>        
 { this.state.showJobs===true&&(
   <Fragment>


     <center>  
     <input style={{width:'40%'}}  className="ForminputSearch" type='text' placeholder="البحث في الوظائف " onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> ابحث </button></span>
     </center>  
     
       
 
                  {/* <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                   value={this.state.searchByPurpose}
                   onChange={this.searchChangedByPurpose}
                  
                  > 
                  <option value=''> كل الأغراض  </option>
                  <option required value='vacancies'> الاعلان عن وظيفة شاغرة  </option>
                  <option required value='seeking-work'> يبحث عن وظيفة   </option>
                  </select>  */}


{ this.state.searchByPurpose==='vacancies' ?(
     <button className='PurposebtnON'onClick={this.loadMore} 
        value='vacancies'
        onClick={this.searchChangedByPurpose}
     >  
    الاعلان عن وظيفة شاغرة
     </button>
):(
  <button className='Purposebtn'onClick={this.loadMore} 
  value='vacancies'
  onClick={this.searchChangedByPurpose}
>  
الاعلان عن وظيفة شاغرة 
</button>

)}







{ this.state.searchByPurpose==='seeking-work' ?(
     <button className='PurposebtnON'onClick={this.loadMore} 
        value='seeking-work'
        onClick={this.searchChangedByPurpose}
     >  
    يبحث عن وظيفة
     </button>
):(
  <button className='Purposebtn'onClick={this.loadMore} 
  value='seeking-work'
  onClick={this.searchChangedByPurpose}
>  
يبحث عن وظيفة 
</button>

)}





 
</Fragment>
)}
</center>   
{/* نهاية الوظائف  ------------------------------------------------*/}  


                






{/************************* أظهار الخدمات للبحث ***************************/}
<center>        
 { this.state.showServices===true&&(
   <Fragment>

      <center>  
     <input style={{width:'40%'}}  className="ForminputSearch" type='text' placeholder="البحث في الخدمات  " onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> ابحث </button></span>
     </center> 
 
                  {/* <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                   value={this.state.searchByPurpose}
                   onChange={this.searchChangedByPurpose}
                  
                  > 
                  <option value=''> كل الأغراض  </option>
                  <option required value='rental'> خدمات شراء  </option>
                  <option required value='for-sale'> خدمات بيع   </option>
                  </select>  */}

</Fragment>
)}
</center>   
{/* نهاية الخدمات  ------------------------------------------------*/}  





 

{/************************* أظهار المنتجات للبحث ***************************/}
<center>        
 { this.state.showClassifieds===true&&(
   <Fragment>


    <center>  
     <input style={{width:'40%'}}  className="ForminputSearch" type='text' placeholder="البحث في المنتجات" onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> ابحث </button></span>
     </center> 
     
 
                  {/* <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                   value={this.state.searchByPurpose}
                   onChange={this.searchChangedByPurpose}
                  
                  > 
                  <option value=''> كل الأغراض  </option>
                  <option required value='rental'> خدمات شراء  </option>
                  <option required value='for-sale'> خدمات بيع   </option>
                  </select>  */}



</Fragment>
)}
</center>   
{/* نهاية المنتجات  ------------------------------------------------*/}  

</div>


 
{this.exerciseList()}





  
     

     {/* {(this.state.search === "") || (this.state.visible < this.state.exercises.length) ?
        (
          <Fragment> 
            <center>
            <h1 className="dash-title">...</h1>
            <button className='loadMorebtn'
             onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> ابحث </button>
            </center>
         </Fragment>

        ):(

        <> </>

          
        ) }  */}





         {/* {this.state.visible < this.state.exercises.length && (
           
        <button className='momadbtn'
         onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> المزيد </button>
      )}  */}









      </div>
      </div>

   
      
      
    )
  }
}
