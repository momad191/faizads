import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import { Fragment } from 'react';
import { deletePost } from '../../actions/post';
import ConfirmButton from "./ConfirmButton";
 
  
import Navbar from '../../components/layout/Navbar';
import NavbarEnglish from '../../components/layout/NavbarEnglish';
import Spinner from '../../components/layout/Spinner';
import { Translation } from 'react-i18next';
import i18next from 'i18next';
  
import greenFace from './greenFace.png';
import redFace from './redFace.png';
import yallowFace from './yallowFace.png';



 
const Exercise = props => (

<Fragment>  
 

       
<center>

    <div className="main-list" key={props.exercise._id}>

      

      {props.exercise.premium === 'no' &&(
        <div className='title-in-list'>
        <a className='title-in-list'  target="_blank" href={`/posts/${props.exercise._id}#/${props.exercise.body}/${props.exercise.title}`}  >    
         {props.exercise.title}  
         </a>
        </div>
      )}


        {props.exercise.premium === 'yes' &&(
        <div className='title-in-list-premium'>
        <a className='title-in-list-premium'  target="_blank" href={`/posts/${props.exercise._id}#/${props.exercise.body}/${props.exercise.title}`}  >    
         {props.exercise.title}  
         </a>
        </div>
      )}


  <div className='section-list'>
    <div>
    {props.exercise.image ? (
      <a target="_blank" href={`/posts/${props.exercise._id}#/${props.exercise.body}/${props.exercise.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={props.exercise.image}  /></a>
      ):(
  
        <a target="_blank" href={`/posts/${props.exercise._id}#/${props.exercise.body}/${props.exercise.title}`} style={{color:'#fff',textDecoration:'none'}} > <img className='image-in-list' src={greenFace}  /></a>
      )}
</div>

  
     
      <div>

        

 
          
      <p className="list-details"> <span className="redColor">المستخدم :</span>{props.exercise.user.username} | <span className="redColor">التصنيف :</span>{props.exercise.category.c_AR_name} | <span className="redColor">السوق :</span>{props.exercise.market.m_AR_name} | <span className="redColor">تفاصيل الإعلان :</span>{props.exercise.Main_paragraph} </p>

     
  
    

      <p className="list-button">



{props.exercise.premium === 'no' &&(

<Link to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   عادي     <i className="fa fa-circle-o-notch fa-1x"></i></button> </Link>

)}


{props.exercise.premium === 'yes' &&(

<Link to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-premium">   مميز     <i className="fa fa-star fa-1x"></i></button> </Link>

)}




      {props.exercise.activation === 'no' && (

      <Link to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   في انتظار التفعيل     <i className="fa fa-circle-o-notch fa-1x"></i></button> </Link>
  
      )}
      
      {props.exercise.activation === 'yes' && (

        <Link to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status-active">   تم التفعيل     <i className="fa fa-check fa-1x"></i></button> </Link>

      )}






      <Link to={`/posts/${props.exercise._id}`} target="_blank" style={{textDecoration:'none'}} >   <button className="Action-button-status">   نشر بتاريخ <Moment format='YYYY/MM/DD'>{props.exercise.date}</Moment>  <i className="fa fa-calendar fa-1x"></i></button> </Link>

 


 

<Link to={`/ar/dashboard/posts/editPost/${props.exercise._id}`}  style={{textDecoration:'none'}} > <button  className="Action-button-status" >  تعديل النشر <i className="fa fa-edit fa-1x"></i></button>   </Link> 

{/* <Link to={`/ar/dashboard/posts/editPostActivate/${props.exercise._id}`}   style={{textDecoration:'none'}} > <button  className="Action-button-status" >  تفعيل الإعلان <i className="fa fa-edit fa-1x"></i></button>   </Link>  */}

 
            <ConfirmButton
            dialog={[" ", "هل أنت متأكد ؟", "مرة أخرى للحذف"]}
            action={() =>props.deleteExercise(props.exercise._id)}
              />



 
 
      </p>

 
   


      </div> 

      </div>
  </div>

  </center>


    </Fragment>

) 

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    
    this.handleSelectCars = this.handleSelectCars.bind(this)
    this.handleSelectProperties = this.handleSelectProperties.bind(this)
    this.handleSelectJobs = this.handleSelectJobs.bind(this)
    this.handleSelectServices = this.handleSelectServices.bind(this)
    this.handleSelectClassifieds = this.handleSelectClassifieds.bind(this)
 
 

    this.deleteExercise = this.deleteExercise.bind(this)
    this.loadMore = this.loadMore.bind(this);

    this.state = {
      electronicsCategory:[],
      animalsCategory:[],
      furnitureCategory:[],
      personalItemsCategory:[],
      foodDrinksCategory:[],

      classifiedsCategory:[],
      servicesCategory:[],
      jobsCategory:[],
      propertiesCategory:[],
      carsCategory:[],
      countries:[],

      exercises: [],
      search:"",
      searchByMarket:"",
      searchByPurpose:"",
      searchByCategory_code:"",
      searchByCountry:"",
      loading:"",
      auth:'',
      user:"",
      visible:0,
      likes:'',
      id:'',

      showCars:false,
      showProperties:false,
      showJobs:false,
      showServices:false,
      showClassifieds:false,
     
      showElectronics:false,
      showAnimals:false,
      showFurniture:false,
      showPersonalItems:false,
      showFoodDrinks:false,
 
        

       
     

     

    
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
  this.setState({ searchByCountry: event.target.value })
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





handleSelectCars = event => {
  this.setState({
    showCars:true,
    showProperties:false,
    showJobs:false,
    showServices:false,
    showClassifieds:false,
    showElectronics:false,
    showAnimals:false,
    showFurniture:false,
    showPersonalItems:false,
    showFoodDrinks:false,
    searchByMarket:'cars'});
};


handleSelectProperties = event => {
  this.setState({
    showProperties:true,
    showCars:false,
    showJobs:false,
    showServices:false,
    showClassifieds:false,
    showElectronics:false,
    showAnimals:false,
    showFurniture:false,
    showPersonalItems:false,
    showFoodDrinks:false,
  searchByMarket:'properties'});
};



handleSelectJobs = event => {
  this.setState({
    showJobs:true,
    showCars:false,
    showProperties:false,
    showServices:false,
    showClassifieds:false,
    showElectronics:false,
    showAnimals:false,
    showFurniture:false,
    showPersonalItems:false,
    showFoodDrinks:false,
    searchByMarket:'jobs'});
};


handleSelectServices = event => {
  this.setState({
    showServices:true,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showClassifieds:false,
    showElectronics:false,
    showAnimals:false,
    showFurniture:false,
    showPersonalItems:false,
    showFoodDrinks:false,
    searchByMarket:'services'});
};

handleSelectClassifieds = event => {
  this.setState({
    showClassifieds:true,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showServices:false,
    showElectronics:false,
    showAnimals:false,
    showFurniture:false,
    showPersonalItems:false,
    showFoodDrinks:false,
    searchByMarket:'classifieds'});
};



handleSelectElectronics = event => {
  this.setState({
    showElectronics:true,
    showClassifieds:false,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showServices:false,
    showAnimals:false,
    showFurniture:false,
    showPersonalItems:false,
    showFoodDrinks:false,
    searchByMarket:'electronics'});
};

handleSelectAnimals = event => {
  this.setState({
    showAnimals:true,
    showClassifieds:false,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showServices:false,
    showElectronics:false,
    showFurniture:false,
    showPersonalItems:false,
    showFoodDrinks:false,
    searchByMarket:'animals'});
};

handleSelectFurniture = event => {
  this.setState({
    showFurniture:true,
    showClassifieds:false,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showServices:false,
    showElectronics:false,
    showAnimals:false,
    showPersonalItems:false,
    showFoodDrinks:false,
    searchByMarket:'furniture'});
};
 
handleSelectPersonalItems = event => {
  this.setState({
    showPersonalItems:true,
    showClassifieds:false,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showServices:false,
    showElectronics:false,
    showAnimals:false,
    showFurniture:false,
    showFoodDrinks:false,
    searchByMarket:'personal-items'});
};
 


handleSelectFoodDrinks = event => {
  this.setState({
    showFoodDrinks:true,
    showClassifieds:false,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showServices:false,
    showElectronics:false,
    showAnimals:false,
    showFurniture:false,
    showPersonalItems:false,
    searchByMarket:'food-drinks'});
};









 

  componentDidMount() {
    axios.get('/api/posts/userposts')
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


      axios.get('/api/categories/electronics')
      .then(response => {
        this.setState({ electronicsCategory: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 



      axios.get('/api/categories/animals')
      .then(response => {
        this.setState({ animalsCategory: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 



      axios.get('/api/categories/furniture')
      .then(response => {
        this.setState({ furnitureCategory: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 



      axios.get('/api/categories/personal-items')
      .then(response => {
        this.setState({ personalItemsCategory: response.data })

      })
      .catch((error) => {
        console.log(error);
      }) 

 


      axios.get('/api/categories/food-drinks')
      .then(response => {
        this.setState({ foodDrinksCategory: response.data })
      })
      .catch((error) => {
        console.log(error);
      }) 
  

      axios.get('/api/countries')
      .then(response => {
        this.setState({ countries: response.data })

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

 
carsCategoryList(){
  return  this.state.carsCategory
  .map(carsCategory => {
    if(i18next.language=== 'ar'){
      return <option value={carsCategory.c_code}> {carsCategory.c_AR_name}  </option>

    }
    if(i18next.language=== 'en'){
      return <option value={carsCategory.c_code}> {carsCategory.c_EN_name}  </option>
    }

   })
}


propertiesCategoryList(){
  return  this.state.propertiesCategory
  .map(propertiesCategory => {
    if(i18next.language === 'ar'){
      return <option value={propertiesCategory.c_code}> {propertiesCategory.c_AR_name}  </option>
    
    }
    if(i18next.language === 'en'){
      return <option value={propertiesCategory.c_code}> {propertiesCategory.c_EN_name}  </option>
    }
   })
}



jobsCategoryList(){
  return  this.state.jobsCategory
  .map(jobsCategory => {
    if(i18next.language === 'ar'){
      return <option value={jobsCategory.c_code}> {jobsCategory.c_AR_name}  </option>

    }
    if(i18next.language === 'en'){
      return <option value={jobsCategory.c_code}> {jobsCategory.c_EN_name}  </option>
       
       }
   })
}




servicesCategoryList(){
  return  this.state.servicesCategory
  .map(servicesCategory => {
    if(i18next.language === 'ar'){
      return <option value={servicesCategory.c_code}> {servicesCategory.c_AR_name}  </option>
    }
    if(i18next.language === 'en'){
      return <option value={servicesCategory.c_code}> {servicesCategory.c_EN_name}  </option>
       }
   })
}



classifiedsCategoryList(){
  return  this.state.classifiedsCategory
  .map(classifiedsCategory => {
    if(i18next.language === 'ar'){
      return <option value={classifiedsCategory.c_code}> {classifiedsCategory.c_AR_name}  </option>
    }
    if(i18next.language === 'en'){
      return <option value={classifiedsCategory.c_code}> {classifiedsCategory.c_EN_name}  </option>
      }
   })
}


electronicsCategoryList(){
  return  this.state.electronicsCategory
  .map(electronicsCategory => {
    if(i18next.language === 'ar'){
      return <option value={electronicsCategory.c_code}> {electronicsCategory.c_AR_name}  </option>
    }
    if(i18next.language === 'en'){
      return <option value={electronicsCategory.c_code}> {electronicsCategory.c_EN_name}  </option>
    }
   })
}



AnimalsCategoryList(){
  return  this.state.animalsCategory
  .map(animalsCategory => {
    if(i18next.language === 'ar'){
      return <option value={animalsCategory.c_code}> {animalsCategory.c_AR_name}  </option>
    }
    if(i18next.language === 'en'){
      return <option value={animalsCategory.c_code}> {animalsCategory.c_EN_name}  </option>
    }
   })
}



FurnitureCategoryList(){
  return  this.state.furnitureCategory
  .map(furnitureCategory => {
    if(i18next.language === 'ar'){
      return <option value={furnitureCategory.c_code}> {furnitureCategory.c_AR_name}  </option>
    }
    if(i18next.language === 'en'){
      return <option value={furnitureCategory.c_code}> {furnitureCategory.c_EN_name}  </option>
    }
   })
}


PersonalItemsCategoryList(){
  return  this.state.personalItemsCategory
  .map(personalItemsCategory => {
    if(i18next.language === 'ar'){
    return <option value={personalItemsCategory.c_code}> {personalItemsCategory.c_AR_name}  </option>
    }
    if(i18next.language === 'en'){
      return <option value={personalItemsCategory.c_code}> {personalItemsCategory.c_EN_name}  </option>
      }
   })
}



FoodDrinksCategoryList(){
  return  this.state.foodDrinksCategory
  .map(foodDrinksCategory => {
    if(i18next.language === 'ar'){
      return <option value={foodDrinksCategory.c_code}> {foodDrinksCategory.c_AR_name}  </option>
    }
    if(i18next.language === 'en'){
      return <option value={foodDrinksCategory.c_code}> {foodDrinksCategory.c_EN_name}  </option>
    }
   })
}


countriesList(){
  return  this.state.countries
  .map(country => {
    if(i18next.language === 'ar'){
      return <option value={country.country_code}> {country.country_AR_name}  </option>
    }
    if(i18next.language === 'en'){
      return <option value={country.country_code}> {country.country_EN_name}  </option>
    }
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
      <div>
         
        {i18next.language === 'ar'&&(<Navbar />)}
        {i18next.language === 'en'&&(<NavbarEnglish />)}
            
  
      <div className="aqle3-main">
      <div className="mainword2">
      <div className="mainForm">
        
      

      <div className="dash-title"> <Translation>{t => <>{t('searchPost_title')}</>}</Translation> </div>
      <Link to="/ar/dashboard/posts" className="loadMorebtn">  <i className="fa fa-arrow-circle-left fa-1x"></i> 
      <Translation>{t => <>{t('searchPost_your_adds')}</>}</Translation>
      </Link>

      <center>
      {/* <Link to="/Addpost" className="Action-button-plus">  <i className="fa fa-plus fa-1x"></i> اضف إعلان جديد </Link>
      <Link to="/AddPremiumPost" className="Action-button-plus">  <i className="fa fa-star fa-1x"></i> اضف اعلان مميز </Link> */}
 
      <button className="Action-button-add-ads" onClick={this.handleSelectCars}> <i class="fa fa-car" aria-hidden="true"></i> <Translation>{t => <>{t('categories_cars')}</>}</Translation> </button>
      <button className="Action-button-add-ads" onClick={this.handleSelectProperties}> <i class="fa fa-home" aria-hidden="true"></i>  <Translation>{t => <>{t('categories_properties')}</>}</Translation> </button>
      <button className="Action-button-add-ads" onClick={this.handleSelectJobs}> <i class="fa fa-briefcase" aria-hidden="true"></i>  <Translation>{t => <>{t('categories_Jobs')}</>}</Translation>  </button>
      <button className="Action-button-add-ads" onClick={this.handleSelectServices}> <i class="fa fa-handshake-o" aria-hidden="true"></i> <Translation>{t => <>{t('categories_Services')}</>}</Translation> </button>
      <button className="Action-button-add-ads" onClick={this.handleSelectClassifieds}> <i class="fa fa-opencart" aria-hidden="true"></i> <Translation>{t => <>{t('categories_Classifieds')}</>}</Translation> </button>

      <button className="Action-button-add-ads" onClick={this.handleSelectElectronics}> <i class="fa fa-opencart" aria-hidden="true"></i> <Translation>{t => <>{t('categories_Electronics')}</>}</Translation> </button>
      <button className="Action-button-add-ads" onClick={this.handleSelectAnimals}> <i class="fa fa-opencart" aria-hidden="true"></i> <Translation>{t => <>{t('categories_Animals')}</>}</Translation> </button>
      <button className="Action-button-add-ads" onClick={this.handleSelectFurniture}> <i class="fa fa-opencart" aria-hidden="true"></i> <Translation>{t => <>{t('categories_Furniture')}</>}</Translation> </button>
      <button className="Action-button-add-ads" onClick={this.handleSelectPersonalItems}> <i class="fa fa-opencart" aria-hidden="true"></i> <Translation>{t => <>{t('categories_Personalitems')}</>}</Translation> </button>
      <button className="Action-button-add-ads" onClick={this.handleSelectFoodDrinks}> <i class="fa fa-opencart" aria-hidden="true"></i> <Translation>{t => <>{t('categories_Fooddrinks')}</>}</Translation> </button>



</center>
 

{/************************* أظهار السيارات للبحث ***************************/}
<center>        
 { this.state.showCars===true&&(
   <Fragment>

 
     <center>  
      <div className='about-title'><Translation>{t => <>{t('searchPost_search_in_cars')}</>}</Translation></div>
     <input style={{width:'40%'}}  className="ForminputSearch" type='text'  onChange={this.searchChanged} value={this.state.search}/>
    
     <span><button className='loadMorebtnSearch'
             onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> 
             <Translation>{t => <>{t('searchButton')}</>}</Translation>
              </button></span>

     </center>  


 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                   value={this.state.searchByPurpose}
                   onChange={this.searchChangedByPurpose}
                  
                  > 
                  {i18next.language === 'ar' &&(
                    <Fragment>
                  <option value=''> اختر الغرض  </option>
                  <option required value='rental'> سيارات للإيجار  </option>
                  <option required value='for-sale'> سيارات للبيع   </option>
                  <option required value='ask-buy'> مطلوب سيارات للشراء    </option>
                  <option required value='ask-rent'> مطلوب سيارات للإيجار   </option>
                    </Fragment>
                  )}


                 {i18next.language === 'en' &&(
                    <Fragment>
                  <option value=''> Choose the purpose  </option>
                  <option required value='rental'> Cars for rent  </option>
                  <option required value='for-sale'> cars for sale   </option>
                  <option required value='ask-buy'> Wanted cars to buy    </option>
                  <option required value='ask-rent'> Wanted cars for rent   </option>
                    </Fragment>
                  )}
                  


                  </select> 


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  {this.carsCategoryList()}
                   
  
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  > 
                  {this.countriesList()}
                 

                  </select>


    

</Fragment>
)}
</center>   
{/* نهاية السيارات  ------------------------------------------------*/}







  

{/************************* أظهار العقارات للبحث ***************************/}
<center>        
 { this.state.showProperties===true&&(
   <Fragment>


     <center>  
     <div className='about-title'><Translation>{t => <>{t('searchPost_search_in_properties')}</>}</Translation></div>
     <input style={{width:'40%'}}  className="ForminputSearch" type='text'  onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> 
       <Translation>{t => <>{t('searchButton')}</>}</Translation>
       </button></span>
     </center>  
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                   value={this.state.searchByPurpose}
                   onChange={this.searchChangedByPurpose}
                  
                  > 
                  {i18next.language === 'ar' && (
                  <Fragment>
                  <option value=''> اختر الغرض  </option>
                  <option required value='rental'> عقارات للإيجار  </option>
                  <option required value='for-sale'> عقارات للبيع   </option>
                  <option required value='ask-buy'> مطلوب عقارات للشراء    </option>
                  <option required value='ask-rent'> مطلوب عقارات للإيجار   </option>                  
                  </Fragment>
                  )}


                {i18next.language === 'en' && (
                  <Fragment>
                  <option value=''> Choose the purpose  </option>
                  <option required value='rental'> Properties for rent  </option>
                  <option required value='for-sale'> Properties for for sale   </option>
                  <option required value='ask-buy'> Wanted properties  to buy    </option>
                  <option required value='ask-rent'> Wanted properties  for rent   </option>                  
                  </Fragment>
                  )}
                  
                  </select> 


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                 {this.propertiesCategoryList()} 
                 </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  > 
                  {this.countriesList()}
                  </select>


    

</Fragment>
)}
</center>   
{/* نهاية العقارات  ------------------------------------------------*/}              






{/************************* أظهار الوظائف للبحث ***************************/}
<center>        
 { this.state.showJobs===true&&(
   <Fragment>


     <center>  
     <div className='about-title'><Translation>{t => <>{t('searchPost_search_in_jobs')}</>}</Translation></div>
     <input style={{width:'40%'}}  className="ForminputSearch" type='text'  onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> 
       <Translation>{t => <>{t('searchButton')}</>}</Translation>
       </button></span>
     </center>  
     
       
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                   value={this.state.searchByPurpose}
                   onChange={this.searchChangedByPurpose}
                  
                  > 
                  {i18next.language === 'ar' &&(
                  <Fragment>
                  <option value=''> كل الأغراض  </option>
                  <option required value='vacancies'> الاعلان عن وظيفة شاغرة  </option>
                  <option required value='seeking-work'> يبحث عن وظيفة   </option>
                  </Fragment>
                  )}
                  {i18next.language === 'en' &&(
                  <Fragment>
                  <option value=''> all purposes  </option>
                  <option required value='vacancies'> Announcing a vacancy  </option>
                  <option required value='seeking-work'> Looking for a job   </option>
                  </Fragment>
                  )}

                  </select> 


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  {this.jobsCategoryList()} 
  
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  > 
                  {this.countriesList()}
                  </select>


    

</Fragment>
)}
</center>   
{/* نهاية الوظائف  ------------------------------------------------*/}  


                






{/************************* أظهار الخدمات للبحث ***************************/}
<center>        
 { this.state.showServices===true&&(
   <Fragment>

      <center>  
    <div className='about-title'><Translation>{t => <>{t('searchPost_search_in_services')}</>}</Translation></div>
     <input style={{width:'40%'}}  className="ForminputSearch" type='text'  onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> 
       <Translation>{t => <>{t('searchButton')}</>}</Translation>
       </button></span>
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


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  {this.servicesCategoryList()} 
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  > 
                  {this.countriesList()}
                  </select>


    

</Fragment>
)}
</center>   
{/* نهاية الخدمات  ------------------------------------------------*/}  





 

{/************************* أظهار المنتجات للبحث ***************************/}
<center>        
 { this.state.showClassifieds===true&&(
   <Fragment>


    <center>  
    <div className='about-title'><Translation>{t => <>{t('searchPost_search_in_classifieds')}</>}</Translation></div>
     <input style={{width:'40%'}}  className="ForminputSearch" type='text'  onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> 
       <Translation>{t => <>{t('searchButton')}</>}</Translation>
       </button></span>
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


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  {this.classifiedsCategoryList()} 
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  >              
                  {this.countriesList()}
                  </select>


    

</Fragment>
)}
</center>   
{/* نهاية المنتجات  ------------------------------------------------*/}  





{/************************* أظهار الاجهزة الالكترونية ***************************/}
<center>        
 { this.state.showElectronics===true&&(
   <Fragment>
    <center>
    <div className='about-title'><Translation>{t => <>{t('searchPost_search_in_electronics')}</>}</Translation></div>  
     <input style={{width:'40%'}}  className="ForminputSearch" type='text'  onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> 
       <Translation>{t => <>{t('searchButton')}</>}</Translation>
       </button></span>
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


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  {this.electronicsCategoryList()} 
  
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  >              
                  {this.countriesList()}
                  </select>


    

</Fragment>
)}
</center>   
{/* /نهاية الالكترونيات//////////////////////////////////////////////////////////////// */}




{/************************* بداية الحيوانات ***************************/}
<center>        
 { this.state.showAnimals===true&&(
   <Fragment>
    <center>  
    <div className='about-title'><Translation>{t => <>{t('searchPost_search_in_animals')}</>}</Translation></div>  
     <input style={{width:'40%'}}  className="ForminputSearch" type='text'  onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> 
       <Translation>{t => <>{t('searchButton')}</>}</Translation>
       </button></span>
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


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  {this.AnimalsCategoryList()} 
  
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  >              
                  {this.countriesList()}
                  </select>


    

</Fragment>
)}
</center>  
{/* /نهاية الحيوانات//////////////////////////////////////////////////////////////// */}

 {/************************* بداية اثاث ***************************/}
<center>        
 { this.state.showFurniture===true&&(
   <Fragment>
    <center>  
    <div className='about-title'><Translation>{t => <>{t('searchPost_search_in_furniture')}</>}</Translation></div>  
     <input style={{width:'40%'}}  className="ForminputSearch" type='text' onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> 
       <Translation>{t => <>{t('searchButton')}</>}</Translation>
       </button></span>
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


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  {this.FurnitureCategoryList()} 
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  >              
                  {this.countriesList()}
                  </select>


    

</Fragment>
)}
</center>   
{/* نهاية الاثاث////////////////////////////////////////////////////////////////////////   */}
  
     


{/************************* بداية المستلزمات الشخصية ***************************/}
<center>        
 { this.state.showPersonalItems===true&&(
   <Fragment>
    <center> 
    <div className='about-title'><Translation>{t => <>{t('searchPost_search_in_personalItems')}</>}</Translation></div>   
     <input style={{width:'40%'}}  className="ForminputSearch" type='text'  onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> 
       <Translation>{t => <>{t('searchButton')}</>}</Translation>
       </button></span>
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


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  {this.PersonalItemsCategoryList()} 
  
                  </select>

                  

                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  >              
                  {this.countriesList()}
                  </select>


    

</Fragment>
)}
</center>   
{/* نهاية المستلزمات الشخصية ///////////////////////////////////////////////////////// */}




{/************************* بداية الاطعمة والمشروبات ***************************/}
<center>        
 { this.state.showFoodDrinks===true&&(
   <Fragment>
    <center>
    <div className='about-title'><Translation>{t => <>{t('searchPost_search_in_foodDrinks')}</>}</Translation></div>     
     <input style={{width:'40%'}}  className="ForminputSearch" type='text'  onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> 
       <Translation>{t => <>{t('searchButton')}</>}</Translation>
       </button></span>
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


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  {this.FoodDrinksCategoryList()} 
                  </select>

                  

                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  >              
                  {this.countriesList()}
                  </select>


    

</Fragment>
)}
</center>  














     {(this.state.search === "") || (this.state.visible < this.state.exercises.length) ?
        (
          <Fragment> 
            <center>
            <h1 className="dash-title">...</h1>
            <button className='loadMorebtn'
             onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> 
              <Translation>{t => <>{t('searchButton')}</>}</Translation>
              </button>
            </center>
         </Fragment>

        ):(

          this.exerciseList()

           
        ) }


        {/* {this.state.visible < this.state.exercises.length && (
        <button className='momadbtn'
         onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> Search </button>
      )} */}

      </div>

      </div>
      </div>
      </div>
      
      
    )
  }
}
