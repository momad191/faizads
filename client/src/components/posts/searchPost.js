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

        

 
          
      <p className="list-details"> <span className="redColor">المستخدم :</span>{props.exercise.name} | <span className="redColor">التصنيف :</span>{props.exercise.category_code} | <span className="redColor">السوق :</span>{props.exercise.market_code} | <span className="redColor">تفاصيل الإعلان :</span>{props.exercise.Main_paragraph} </p>

     
  
    

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

 


 {!props.auth.loading && props.exercise.user === props.auth._id && (
<Fragment> 

<Link to={`/editPost/${props.exercise._id}`}  style={{textDecoration:'none'}} > <button  className="Action-button-status" >  تعديل النشر <i className="fa fa-edit fa-1x"></i></button>   </Link> 

<Link to={`/editPostActivate/${props.exercise._id}`}   style={{textDecoration:'none'}} > <button  className="Action-button-status" >  تفعيل الإعلان <i className="fa fa-edit fa-1x"></i></button>   </Link> 

 
            <ConfirmButton
            dialog={[" ", "هل أنت متأكد ؟", "مرة أخرى للحذف"]}
            action={() => deletePost(props.exercise._id)}
              />




  </Fragment>
)}
 
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
    searchByMarket:'cars'});
};


handleSelectProperties = event => {
  this.setState({
    showProperties:true,
    showCars:false,
    showJobs:false,
    showServices:false,
    showClassifieds:false,
  searchByMarket:'properties'});
};



handleSelectJobs = event => {
  this.setState({
    showJobs:true,
    showCars:false,
    showProperties:false,
    showServices:false,
    showClassifieds:false,
    searchByMarket:'jobs'});
};


handleSelectServices = event => {
  this.setState({
    showServices:true,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showClassifieds:false,
    searchByMarket:'services'});
};

handleSelectClassifieds = event => {
  this.setState({
    showClassifieds:true,
    showCars:false,
    showProperties:false,
    showJobs:false,
    showServices:false,
    searchByMarket:'classifieds'});
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
    return <option value={carsCategory.c_code}> {carsCategory.c_AR_name}  </option>
   })
}


propertiesCategoryList(){
  return  this.state.propertiesCategory
  .map(propertiesCategory => {
    return <option value={propertiesCategory.c_code}> {propertiesCategory.c_AR_name}  </option>
   })
}



jobsCategoryList(){
  return  this.state.jobsCategory
  .map(jobsCategory => {
    return <option value={jobsCategory.c_code}> {jobsCategory.c_AR_name}  </option>
   })
}




servicesCategoryList(){
  return  this.state.servicesCategory
  .map(servicesCategory => {
    return <option value={servicesCategory.c_code}> {servicesCategory.c_AR_name}  </option>
   })
}



classifiedsCategoryList(){
  return  this.state.classifiedsCategory
  .map(classifiedsCategory => {
    return <option value={classifiedsCategory.c_code}> {classifiedsCategory.c_AR_name}  </option>
   })
}


countriesList(){
  return  this.state.countries
  .map(country => {
    return <option value={country.country_code}> {country.country_AR_name}  </option>
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
      <div>
        
  
      <div className="aqle3-main">
      <div className="mainword2">
      <div className="mainForm">

      <div className="dash-title">عن ماذا تبحث؟ </div>
      <center>
      {/* <Link to="/Addpost" className="Action-button-plus">  <i className="fa fa-plus fa-1x"></i> اضف إعلان جديد </Link>
      <Link to="/AddPremiumPost" className="Action-button-plus">  <i className="fa fa-star fa-1x"></i> اضف اعلان مميز </Link> */}
 
      <button className="Action-button-plus" onClick={this.handleSelectCars}> <i class="fa fa-car" aria-hidden="true"></i> سيارات </button>
      <button className="Action-button-plus" onClick={this.handleSelectProperties}> <i class="fa fa-home" aria-hidden="true"></i>  عقارات </button>
      <button className="Action-button-plus" onClick={this.handleSelectJobs}> <i class="fa fa-briefcase" aria-hidden="true"></i>  وظائف </button>
      <button className="Action-button-plus" onClick={this.handleSelectServices}> <i class="fa fa-handshake-o" aria-hidden="true"></i> خدمات </button>
      <button className="Action-button-plus" onClick={this.handleSelectClassifieds}> <i class="fa fa-opencart" aria-hidden="true"></i> منتجات </button>


</center>
 

{/************************* أظهار السيارات للبحث ***************************/}
<center>        
 { this.state.showCars===true&&(
   <Fragment>


     <center>  
     <input style={{width:'40%'}}  className="ForminputSearch" type='text' placeholder="البحث في السيارات " onChange={this.searchChanged} value={this.state.search}/>
    
     <span><button className='loadMorebtnSearch'
             onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> ابحث </button></span>

     </center>  


 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                   value={this.state.searchByPurpose}
                   onChange={this.searchChangedByPurpose}
                  
                  > 
                  <option value=''> اختر الغرض  </option>
                  <option required value='rental'> سيارات للإيجار  </option>
                  <option required value='for-sale'> سيارات للبيع   </option>
                  <option required value='ask-buy'> مطلوب سيارات للشراء    </option>
                  <option required value='ask-rent'> مطلوب سيارات للإيجار   </option>
                  </select> 


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  <option value=''> تصنيف السيارات  </option>
                  {this.carsCategoryList()} 
  
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  > 
                  <option value=''> اختر الدولة  </option>
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
     <input style={{width:'40%'}}  className="ForminputSearch" type='text' placeholder="البحث في العقارات " onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> ابحث </button></span>
     </center>  
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                   value={this.state.searchByPurpose}
                   onChange={this.searchChangedByPurpose}
                  
                  > 
                  <option value=''> اختر الغرض  </option>
                  <option required value='rental'> سيارات للإيجار  </option>
                  <option required value='for-sale'> سيارات للبيع   </option>
                  <option required value='ask-buy'> مطلوب سيارات للشراء    </option>
                  <option required value='ask-rent'> مطلوب سيارات للإيجار   </option>
                  </select> 


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  <option value=''> تصنيف العقارات  </option>
                  {this.propertiesCategoryList()} 
  
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  > 
                  <option value='#'> اختر الدولة  </option>
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
     <input style={{width:'40%'}}  className="ForminputSearch" type='text' placeholder="البحث في الوظائف " onChange={this.searchChanged} value={this.state.search}/>
     <span><button className='loadMorebtnSearch'
      onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> ابحث </button></span>
     </center>  
     
       
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                   value={this.state.searchByPurpose}
                   onChange={this.searchChangedByPurpose}
                  
                  > 
                  <option value=''> كل الأغراض  </option>
                  <option required value='vacancies'> الاعلان عن وظيفة شاغرة  </option>
                  <option required value='seeking-work'> يبحث عن وظيفة   </option>
                  </select> 


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  <option value=''> كل الوظائف  </option>
                  {this.jobsCategoryList()} 
  
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  > 
                  <option value='#'> اختر الدولة  </option>
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


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  <option value=''> كل الخدمات  </option>
                  {this.servicesCategoryList()} 
  
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  > 
                  <option value='#'> اختر الدولة  </option>
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


 
 
                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                 
                  value={this.state.searchByCategory_code}
                  onChange={this.searchChangedByCategory_code}
                  > 
                  <option value=''> كل المنتجات  </option>
                  {this.classifiedsCategoryList()} 
  
                  </select>



                  <select className="topadtitleinput" 
                   style={{width:'20%',marginLeft:'0%',textAlign:'center'}}
                  value={this.state.searchByCountry}
                  onChange={this.searchChangedByCountry}
                  > 
                  <option value='#'> اختر الدولة  </option>
             
                  {this.countriesList()}
                  </select>


    

</Fragment>
)}
</center>   
{/* نهاية المنتجات  ------------------------------------------------*/}  





 
    
  
     

     {(this.state.search === "") || (this.state.visible < this.state.exercises.length) ?
        (
          <Fragment> 
            <center>
            <h1 className="dash-title">...</h1>
            <button className='loadMorebtn'
             onClick={this.loadMore}> <i class="fa fa-search fa-1x"></i> ابحث </button>
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
