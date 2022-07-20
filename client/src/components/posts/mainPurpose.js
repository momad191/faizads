import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/ar';
import { Fragment } from 'react';
import { deletePost } from '../../actions/post';
import ConfirmButton from "./ConfirmButton";
 
import noimg from './noimg.png';
import greenFace from './greenFace.png';
import redFace from './redFace.png';
import yallowFace from './yallowFace.png';
 
import addLike from '../../actions/post';
import addClick from '../../actions/post';

import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
import { Translation } from 'react-i18next';
import i18next from 'i18next';
import Spinner from '../../components/layout/Spinner'
  

const formatter = new Intl.NumberFormat('en',{
 
  style:'decimal',
  // signDisplay:'always',
  useGrouping:true,
  notation:'compact'

});

 
const Exercise = props => (
 
  <Fragment>  
  <div class="card">
    <center> 
     
  <div className="" key={props.exercise._id}>
  
    
  <div>
      {props.exercise.image ? (
        <Fragment>
        <Link onClick={() => props.addClick(props.exercise._id)} target="_blank" to={`/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}/${props.exercise.purpose_code}/posts/${props.exercise._id}`}  > <img className='image-in-list-home' src={props.exercise.image}  /></Link>
        </Fragment>
        ):(
          <Fragment>
             <Link onClick={() => props.addClick(props.exercise._id)} target="_blank" to={`/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}/${props.exercise.purpose_code}/posts/${props.exercise._id}`}  > <img className='image-in-list-home' src={noimg}  /></Link>
             </Fragment>
          )}
  
  
  
  
        </div>
  
   
    
  
       <center>
        {props.exercise.premium === 'no' &&(
          <div className='title-in-list-home'>
          <Link onClick={() => props.addClick(props.exercise._id)} className='title-in-list-home'  target="_blank" to={`/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}/${props.exercise.purpose_code}/posts/${props.exercise._id}`} >    
           {props.exercise.title}  
           </Link>
          </div>
        )}
  
   
  
   
          {props.exercise.premium === 'yes' &&(
          <div className='title-in-list-premium-home'>
          <Link  onClick={() => props.addClick(props.exercise._id)} className='title-in-list-premium-home'  target="_blank" to={`/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}/${props.exercise.purpose_code}/posts/${props.exercise._id}`} >    
          <button className="button-in-list-home-premium"> <i className="fa fa-star fa-1x"></i> </button>
           {props.exercise.title}  
           </Link>
          </div>
        )} 
  </center>
  
  
  {/* {props.exercise.premium === 'yes' &&(
  
  <Link onClick={() => props.addClick(props.exercise._id)} to={`/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}/${props.exercise.purpose_code}/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-premium">   مميز    <i className="fa fa-star fa-1x"></i> </button> </Link>
  
  )}  */}
  
  
  {/* <Link  onClick={() => props.addClick(props.exercise._id)} to={`/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}/${props.exercise.purpose_code}/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none',width:'100%'}} >   <button className="Action-button-status">   {props.exercise.market.m_AR_name}  <i className="fa fa-list fa-1x"></i></button> </Link> */}
  
  
  <button className="button-in-list-home-small"> 
  {formatter.format(props.exercise.clicks.length) }  <i class="fa fa-eye" aria-hidden="true"></i>  
  </button>
  
  
  
  <button className="button-in-list-home-small"> 
  
   {i18next.language === 'ar' && props.exercise.city.city_AR_name}
   {i18next.language === 'en' && props.exercise.city.city_EN_name}
  
  <i class="fa fa-map-marker" aria-hidden="true"></i> 
  </button>
  
  
  <button className="button-in-list-home-small">
    {formatter.format(props.exercise.comments.length) } {' '}<i class="fa fa-comments" aria-hidden="true"></i>   
    </button>
  
  
   
     <Link onClick={() => props.shopClick(props.exercise.shop._id)} to={`/shops/${props.exercise.user.username}`} target="_blank"> 
    <button className="button-in-list-home-big">
    {props.exercise.user.username} <i class="fa fa-home" aria-hidden="true"></i> 
    </button>
    </Link> 
   
  
  <button className="button-in-list-home-small">
  
    {moment(props.exercise.date).startOf('minut').fromNow()}  {' '}   <i class="fa fa-clock-o" aria-hidden="true"></i>  
    </button>
  
    <button className="button-in-list-home-small">
    {i18next.language==='ar'&& <>ينتهي</>} {' '} 
    {i18next.language==='en'&& <>Expire </>}{' '} 
     {moment(props.exercise.expired).endOf('day').fromNow()}  {' '}  <i class="fa fa-hourglass-end" aria-hidden="true"></i>   
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
  
   
  
  ////////////////////////////////////////الشكل العرضي //////////////////////////////////////
   
  const Exercise2 = props => (
   
    <Fragment>  
    <div style={{width:'80%'}} className="main-list">
  
   
          {props.exercise.premium === 'no' &&(
            <div className='title-in-list'>
            <Link onClick={() => props.addClick(props.exercise._id)} className='title-in-list'  target="_blank" to={`/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}/${props.exercise.purpose_code}/posts/${props.exercise._id}`} >    
             {props.exercise.title}   
             </Link>
            </div>
          )}
    
     
            {props.exercise.premium === 'yes' &&(
            <div className='title-in-list-premium'>
            <Link  onClick={() => props.addClick(props.exercise._id)} className='title-in-list-premium'  target="_blank" to={`/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}/${props.exercise.purpose_code}/posts/${props.exercise._id}`} >    
            اعلان مميز  <i className="fa fa-star fa-1x"></i> {' '} / {props.exercise.title}       
             </Link>
            </div>
          )} 
    
    
   
     
      
      <div className='section-list'> 
    <div className="" key={props.exercise._id}>
    <Link onClick={() => props.addClick(props.exercise._id)} target="_blank" to={`/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}/${props.exercise.purpose_code}/posts/${props.exercise._id}`}  > 
    </Link>
     
    <div>
        {props.exercise.image ? (
          <Link  onClick={() => props.addClick(props.exercise._id)} target="_blank" to={`/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}/${props.exercise.purpose_code}/posts/${props.exercise._id}`}  > <img className='image-in-list' src={props.exercise.image}  /></Link>
          ):(
      
              <Link  onClick={() => props.addClick(props.exercise._id)} target="_blank" to={`/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}/${props.exercise.purpose_code}/posts/${props.exercise._id}`}  > <img className='image-in-list' src={noimg}  /></Link>
              )}
         </div>
    
    
    </div>
    {/* //////////////////section list end ///////// */}
    
    
    <div className="list-details" style={{marginTop:'20px'}}>
  
    {props.exercise.Main_paragraph} </div>
  
  {/* ////////////////////end of list////////////////////////////////////// */}
  
      </div>
  
        
  <center> 
    <div className='section-list'> 
  
  
    <Link onClick={() => props.shopClick(props.exercise.shop._id)} to={`/shops/${props.exercise.user.username}`} target="_blank"> 
    <button className="button-in-list-home-small">
    <i class="fa fa-home fa-1x" aria-hidden="true"></i>   
    </button>
    </Link> 
  
  
    <Link  onClick={() => props.addClick(props.exercise._id)} to={`/main/${props.exercise.country_code}/${props.exercise.city_code}/${props.exercise.market_code}`} target="_blank" style={{textDecoration:'none'}} >   <button className="button-in-list-home-small" >  
     {i18next.language === 'ar' &&  props.exercise.market.m_AR_name} 
     {i18next.language === 'en' &&  props.exercise.market.m_EN_name} 
     {' '}
     <i className="fa fa-list fa-1x"></i>
      </button> </Link>
    
    
   
  
  
   
    <button className="button-in-list-home-small">
   
    {moment(props.exercise.date).startOf('minut').fromNow()}{' '} 
    <i class="fa fa-clock-o" aria-hidden="true"></i> 
    </button>
  
  
  
    <button className="button-in-list-home-small" >
    {i18next.language==='ar'&& <>ينتهي</>} {' '} 
    {i18next.language==='en'&& <>Expire </>}{' '} 
    {moment(props.exercise.expired).endOf('day').fromNow()} {' '}  
    <i class="fa fa-hourglass-end" aria-hidden="true"></i>  
    </button>
    
  
  
    <button className="button-in-list-home-small" >
     
    {formatter.format(props.exercise.comments.length) } {' '} 
    <i class="fa fa-comments" aria-hidden="true"></i>
    </button>
  
  
    <Link> 
    <button className="button-in-list-home-small" > 
     {i18next.language === 'ar' && props.exercise.city.city_AR_name}  
     {i18next.language === 'en' && props.exercise.city.city_EN_name} 
     <i class="fa fa-map-marker" aria-hidden="true"></i> 
     </button>
    </Link>
  
  
    <Link > 
    <button className="button-in-list-home-small" >
    <i class="fa fa-eye" aria-hidden="true"></i>  {formatter.format(props.exercise.clicks.length) }  
    </button>
    </Link>
  
    </div>
    </center>
      
  
  
   
  
  
  
  
  
  
      </div>
        </Fragment>
    
    ) 
    
  
 



////////////////////////////////////////العرض العرضي //////////////////////////////////////






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

    this.showLarg = this.showLarg.bind(this);
    this.showList = this.showList.bind(this);


    this.showmenulist = this.showmenulist.bind(this);

    this.showmenulist2 = this.showmenulist2.bind(this);

    this.state = {
      oneCountryInfo:[],
      oneCity:[],
      oneMarket:[],
      countries:[],
      cities:[],
      markets:[],
      carsCategory:[],
      classifiedsCategory:[],
      servicesCategory:[],
      jobsCategory:[],
      propertiesCategory:[],
      categories:[],

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
      visible:20,
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
      showCities:false,

      menulist:true,
      menulist2:false,

      larg:'displayI',
      list:'noneDisplayI',
      showStyleLarge:'showStyleSelected',
      showStyleList:'showStyle'

   
      
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
    axios.get('/api/posts/homePage/'+ this.props.match.params.id +'/'+ this.props.match.params.city +'/'+ this.props.match.params.market_code +'/'+ this.props.match.params.purpose_code)
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

      axios.get('/api/countries/onecityinfo/'+this.props.match.params.id+'/'+this.props.match.params.city)
      .then(response => {
        this.setState({ oneCity: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 

 
 
      axios.get('/api/markets/onemarket/'+this.props.match.params.market_code)
      .then(response => {
        this.setState({ oneMarket: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 




      axios.get('/api/countries/cityByCode/'+this.props.match.params.id)
      .then(response => {
        this.setState({ oneCityInfo: response.data })

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
 

      axios.get('/api/markets')
      .then(response => {
        this.setState({ markets: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 


 
 

 
      axios.get('/api/categories/'+this.props.match.params.market_code)
      .then(response => {
        this.setState({ categories: response.data })

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
  addClick(id) {

   axios.put('/api/posts/click/'+id)
   .then(response => {
    console.log(response.data)
  });
};

   // shop click
   shopClick(id) {

    axios.put('/api/shops/click/'+id)
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
 
oneCountryName(){
  return  this.state.oneCountryInfo
  .map(country => {
      // return <option value={country.country_code}> {country.country_AR_name}  </option>
      if(i18next.language==='ar'){
        let ccode= country.country_AR_name
        return  ccode; 
      }

      if(i18next.language==='en'){
        let ccode= country.country_EN_name
        return  ccode; 
      }
     
   })
}

oneCountrycode(){
  return  this.state.oneCountryInfo
  .map(country => {
      // return <option value={country.country_code}> {country.country_AR_name}  </option>
      let ccode= country.country_code
      return  ccode; 
   })
}



oneCityName(){
  return  this.state.oneCity
  .map(city => {
      // return <option value={country.country_code}> {country.country_AR_name}  </option>
      if(i18next.language === 'ar'){
        let cityName= city.city_AR_name
        return  cityName; 
      }

      if(i18next.language === 'en'){
        let cityName= city.city_EN_name
        return  cityName; 
      }
     
   })
}



oneMarketName(){
  return  this.state.oneMarket
  .map(market => {
      // return <option value={country.country_code}> {country.country_AR_name}  </option>
      if(i18next.language === 'ar'){
        let marketName = market.m_AR_name
        return  marketName; 
      }
      if(i18next.language === 'en'){
        let marketName = market.m_EN_name
        return  marketName; 
      }
     
   })
}



cityList(){
  return  this.state.cities
  .map(city => {
    //   return <option value={city.city_code}> {city.city_AR_name}  </option>

    if(i18next.language === 'ar'){
      return <Link 
      to={`${this.oneCountryName()}/${city.city_code}/`} 
      className="categoryListButton">
      {city.city_AR_name} <img src={city.city_image} width='30px' height='20px' />
       </Link>
    }

    if(i18next.language === 'en'){
      return <Link 
      to={`${this.oneCountryName()}/${city.city_code}/`} 
      className="categoryListButton">
      {city.city_EN_name} <img src={city.city_image} width='30px' height='20px' />
       </Link>
    }
      
   })

}

 

allMarketsList(){
  return  this.state.markets
  .map(market => {
      return <Link 
      to={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${market.m_code}/for-sale/${market.m_code}`} 
      className="categoryListButton">
      {market.m_AR_name} 
       </Link>
   })

}


allCategoriesList(){
  return  this.state.categories
  .map(category => {
    if(i18next.language === 'ar'){
      return <Link 
      to={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/for-sale/${category.c_code}`} 
      className="categoryListButton">
      {category.c_AR_name} 
     
       </Link>}

  if(i18next.language === 'en'){
  return <Link 
  to={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/for-sale/${category.c_code}`} 
  className="categoryListButton">
  {category.c_EN_name} 
 
   </Link>}


   })

}



allCategoriesListCars(){
  return  this.state.carsCategory
  .map(category => {
    
      return <Link 
      to={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/for-sale/${category.c_code}`} 
      className="categoryListButton">
       <img src={category.image} style={{width:'80px',height:'80px',float:'none'}} />  
       </Link>
   }) 

}




allCategoriesListJobs(){
  return  this.state.categories
  .map(category => {
    if(i18next.language === 'ar'){
      return <Link 
      to={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/vacancies/${category.c_code}`} 
      className="categoryListButton">
      {category.c_AR_name} 
     
       </Link>}

  if(i18next.language === 'en'){
  return <Link 
  to={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/vacancies/${category.c_code}`} 
  className="categoryListButton">
  {category.c_EN_name} 
 
   </Link>}


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
      return post.purpose_code.toLowerCase().indexOf(this.state.searchByPurpose.toLowerCase())>=0

    })

 
    .filter(post=>{
      return post.category_code.toLowerCase().indexOf(this.state.searchByCategory_code.toLowerCase())>=0

    })



    .filter(post=>{
      return post.country_code.toLowerCase().indexOf(this.state.searchByCountry.toLowerCase())>=0

    })
 

    .filter(post=>{
      return post.city_code.toLowerCase().indexOf(this.state.searchByCity.toLowerCase())>=0

    })

 

    .map(currentexercise => {
      return <Exercise exercise={currentexercise} auth={this.state.auth} deleteExercise={this.deleteExercise} addClick={this.addClick} shopClick={this.shopClick}  removeLike={this.removeLike} key={currentexercise._id}/>;
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



  
  
    ///////////////////////////////////////////////////////////////////////////////////

    exerciseList2() {
    
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
        return post.purpose_code.toLowerCase().indexOf(this.state.searchByPurpose.toLowerCase())>=0
  
      })
  
   
      .filter(post=>{
        return post.category_code.toLowerCase().indexOf(this.state.searchByCategory_code.toLowerCase())>=0
  
      })
  
  
  
      .filter(post=>{
        return post.country_code.toLowerCase().indexOf(this.state.searchByCountry.toLowerCase())>=0
  
      })
   
  
      .filter(post=>{
        return post.city_code.toLowerCase().indexOf(this.state.searchByCity.toLowerCase())>=0
  
      })
  
   
  
      .map(currentexercise => {
        return <Exercise2 exercise={currentexercise} auth={this.state.auth} deleteExercise={this.deleteExercise} addClick={this.addClick} shopClick={this.shopClick}  removeLike={this.removeLike} key={currentexercise._id}/>;
      })
    }
  
    //////////////////////////////////////////////////////////////////////////////////






  loadMore() {
    this.setState({
      visible:this.state.visible+20
    })
  }


  showLarg() {
    this.setState({
      larg:'displayI',
      list:'noneDisplayI',
      showStyleLarge:'showStyleSelected',
      showStyleList:'showStyle'
    })
  }
  
  showList() {
    this.setState({
      list:'displayI',
      larg:'noneDisplayI',
      showStyleLarge:'showStyle',
      showStyleList:'showStyleSelected'
    })
  }


  showmenulist(){
    this.setState({
      menulist:false,
      menulist2:true,
    })
  }
  showmenulist2(){
    this.setState({
      menulist2:false,
      menulist:true,
    })
  }



  render() {
   
    {i18next.language === 'ar' && moment.locale('ar'); }
    {i18next.language === 'en' && moment.locale('en'); }
    {i18next.language === 'fr' && moment.locale('fr'); }
     
    return (
  
<div className="aqle3-main">
<div className="mainword2">
   
      {i18next.language === 'ar'&&(<Navbar />)}
      {i18next.language === 'en'&&(<NavbarEnglish />)}

 
 {/* ////////////////////////////////////////القائمةللكل ////////////////////////////////////// */}
 {i18next.language === 'ar'&&(
  <Fragment> 
 <div className="mainword-section-list-right">
<Fragment> 
 <div id="mySidenav"   className='sideNavHome'>
 <center> 
 { this.state.menulist===true&&(
 <button className="categoryListButtonTop" onClick={this.showmenulist}>  
  <Translation>{t => <>{t('categoriesButton')}</>}</Translation>{' '}
  <i class="fa fa-arrow-circle-o-up fa-2x" aria-hidden="true"></i></button>
 )}
   
 { this.state.menulist2===true&&(
 <button className="categoryListButtonTop" onClick={this.showmenulist2}>  
 <Translation>{t => <>{t('categoriesButton')}</>}</Translation>{' '}
 <i class="fa fa-arrow-circle-o-down fa-2x" aria-hidden="true"></i></button>
 )} 
 </center>

 { this.state.menulist===true&&(
   <Fragment> 
 {this.props.match.params.market_code != 'cars'&& this.props.match.params.market_code != 'jobs' &&(
   this.allCategoriesList()
 )}

{this.props.match.params.market_code === 'cars'&&(
   this.allCategoriesListCars()
 )}


{this.props.match.params.market_code === 'jobs'&&(
   this.allCategoriesListJobs()
 )}
  
</Fragment>
)}

</div>
</Fragment>
  </div>
 
  </Fragment>
  )}



 

{i18next.language === 'en'&&(
  <Fragment> 
 <div className="mainword-section-list-left">
<Fragment> 
 <div id="mySidenav"   className='sideNavHome'>
 <center> 
 { this.state.menulist===true&&(
 <button className="categoryListButtonTop" onClick={this.showmenulist}>  
  <Translation>{t => <>{t('categoriesButton')}</>}</Translation>{' '}
  <i class="fa fa-arrow-circle-o-up fa-2x" aria-hidden="true"></i></button>
 )}
   
 { this.state.menulist2===true&&(
 <button className="categoryListButtonTop" onClick={this.showmenulist2}>  
 <Translation>{t => <>{t('categoriesButton')}</>}</Translation>{' '}
 <i class="fa fa-arrow-circle-o-down fa-2x" aria-hidden="true"></i></button>
 )} 
 </center>

 { this.state.menulist===true&&(
   <Fragment> 
 {this.props.match.params.market_code != 'cars'&& this.props.match.params.market_code != 'jobs' &&(
   this.allCategoriesList()
 )}

{this.props.match.params.market_code === 'cars'&&(
   this.allCategoriesListCars()
 )}


{this.props.match.params.market_code === 'jobs'&&(
   this.allCategoriesListJobs()
 )}
  
</Fragment>
)}

</div>
</Fragment>
  </div>
 
  </Fragment>
  )}


{/* //////////////////////////////////////////////////////انتهاء القائمة الجانبية ///////////////////////////////////////////// */}


 
 {/* //////////////////////////////////////////////////////القائمة الاساسية - اللغة والاقسام الرئيسية للموقع ///////////////////////////////////////////// */}

      <div className="mainword-section-left">
      <div className="dash-title">  </div>
      <center>
      <ul class="breadcrumb">
      <li><Link to="/"><Translation>{t => <>{t('Countries_of_the_world')}</>}</Translation></Link></li>
      <li><Link to={`/main/${this.props.match.params.id}`} > {this.oneCountryName()}</Link></li>
      <li><Link to={`/main/${this.props.match.params.id}/${this.props.match.params.city}`} > {this.oneCityName()}</Link></li>
      <li>{this.oneMarketName()}</li>
       
    </ul>
 

    {this.props.match.params.market_code === 'jobs' ?(
   <Fragment>

<div style={{width:'100%'}}> 
   {this.props.match.params.purpose_code === 'vacancies'?(
    <a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/vacancies/`} > <button className='PurposebtnON'>   
    <Translation>{t => <>{t('vacanciesButton')}</>}</Translation>
      </button></a>
    ):(
   <a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/vacancies`} > <button className='Purposebtn'>   
   <Translation>{t => <>{t('vacanciesButton')}</>}</Translation>
     </button></a>
    )}
   
   
    
   {this.props.match.params.purpose_code === 'seeking-work'?(
    <a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/seeking-work/`} > <button className='PurposebtnON'>   
    <Translation>{t => <>{t('seeking-workButton')}</>}</Translation>
      </button></a>
    ):(
   <a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/seeking-work`} > <button className='Purposebtn'>   
   <Translation>{t => <>{t('seeking-workButton')}</>}</Translation>
     </button></a>
    )}
    </div>
     </Fragment>
      
    ):(
      <Fragment>

  
<div style={{width:'100%'}}> 

    {this.props.match.params.purpose_code === 'ask-rent'?(
    <a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/ask-rent/`} > <button className='PurposebtnON'>   
      <Translation>{t => <>{t('ask-rentButton')}</>}</Translation>
      </button></a>
    ):(
   <a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/ask-rent`} > <button className='Purposebtn'>  
    <Translation>{t => <>{t('ask-rentButton')}</>}</Translation>
     </button></a>
    )}
    
    {this.props.match.params.purpose_code === 'ask-buy'?(
    <a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/ask-buy`} > <button className='PurposebtnON'>   
     <Translation>{t => <>{t('ask-buyButton')}</>}</Translation>
    </button></a>
    ):(
  <a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/ask-buy`} > <button className='Purposebtn'>  
  <Translation>{t => <>{t('ask-buyButton')}</>}</Translation>
  </button></a>
    )}






{this.props.match.params.purpose_code === 'rental'?(
 <a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/rental`} > <button className='PurposebtnON'>   
  <Translation>{t => <>{t('rentalButton')}</>}</Translation>
   </button></a>
):(
<a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/rental`} > <button className='Purposebtn'>  
<Translation>{t => <>{t('rentalButton')}</>}</Translation>
  </button></a>
)}
   
    

{this.props.match.params.purpose_code === 'for-sale'?(   
<a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/for-sale`} > <button className='PurposebtnON'>  
<Translation>{t => <>{t('for-saleButton')}</>}</Translation>
  </button></a>
   ):(
<a href={`/main/${this.props.match.params.id}/${this.props.match.params.city}/${this.props.match.params.market_code}/for-sale`} > <button className='Purposebtn'>  
<Translation>{t => <>{t('for-saleButton')}</>}</Translation>
  </button></a>

   )}


</div>
 
</Fragment>

)}

<div style={{width:'100%'}}> 
 <button  onClick={this.showLarg} className={this.state.showStyleLarge}> <i class="fa fa-th-large fa-1x" aria-hidden="true"></i> </button>
 <button  onClick={this.showList} className={this.state.showStyleList}> <i class="fa fa-th-list fa-1x" aria-hidden="true"></i> </button>
 </div> 


 
  
{this.state.larg === 'displayI'&&(
   
   this.state.exercises.length < 1  ?(
     <Spinner/>
   ):(
     this.exerciseList()
   )
 
  )}
 
 
 {this.state.list === 'displayI'&&(
   this.state.exercises.length < 1  ?(
     <Spinner/>
   ):(
     
      this.exerciseList2()
 
     
   )
  )}
 
      </center>
      </div>



      {this.state.visible < this.state.exercises.length && (
        <center>  
        <button className='loadMorebtn'
         onClick={this.loadMore}> <i class="fa fa-arrow-down fa-0x"></i> 
         <Translation>{t => <>{t('moreButton')}</>}</Translation>
          </button>
          </center>
      )}  

       

      </div>
      </div>
    )
  }
}
