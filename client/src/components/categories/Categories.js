import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCategory } from '../../actions/category';
import ConfirmButton from "./ConfirmButton";
import axios from 'axios';
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
import NavbarEnglish from '../layout/NavbarEnglish';
import { useTranslation } from 'react-i18next';
  
  
const Categories = ({loading , deleteCategory}) => {
  const [t, i18next] = useTranslation()
  const [user,setUser]= useState([])

  const [showProperties,setShowProperties]= useState('noneDisplayI')  
  const [showCars,setShowCars]= useState('noneDisplayI') 
  const [showJobs,setShowJobs]= useState('noneDisplayI') 
  const [showServices,setShowServices]= useState('noneDisplayI') 
  const [showClassifieds,setShowClassifieds]= useState('noneDisplayI') 
  const [showElectronics,setShowElectronics]= useState('noneDisplayI') 
  const [showAnimals,setShowAnimals]= useState('noneDisplayI') 
  const [showFurniture,setShowFurniture]= useState('noneDisplayI') 
  const [showPersonalitems,setShowPersonalitems]= useState('noneDisplayI') 
  const [showFooddrinks,setShowFooddrinks]= useState('noneDisplayI') 

  const clickProperties = async e => {
    setShowProperties('displayI');

 
    setShowCars('noneDisplayI');
    setShowJobs('noneDisplayI');
    setShowServices('noneDisplayI');
    setShowClassifieds('noneDisplayI');
    setShowElectronics('noneDisplayI');
    setShowAnimals('noneDisplayI');
    setShowFurniture('noneDisplayI');
    setShowPersonalitems('noneDisplayI');
    setShowFooddrinks('noneDisplayI');
     
  }

  const clickCars = async e => {
    setShowCars('displayI'); 

    setShowProperties('noneDisplayI');
    setShowJobs('noneDisplayI');
    setShowServices('noneDisplayI');
    setShowClassifieds('noneDisplayI');
    setShowElectronics('noneDisplayI');
    setShowAnimals('noneDisplayI');
    setShowFurniture('noneDisplayI');
    setShowPersonalitems('noneDisplayI');
    setShowFooddrinks('noneDisplayI');
  }


  const clickJobs = async e => {
    setShowJobs('displayI'); 

    setShowProperties('noneDisplayI');
    setShowCars('noneDisplayI');
    setShowServices('noneDisplayI');
    setShowClassifieds('noneDisplayI');
    setShowElectronics('noneDisplayI');
    setShowAnimals('noneDisplayI');
    setShowFurniture('noneDisplayI');
    setShowPersonalitems('noneDisplayI');
    setShowFooddrinks('noneDisplayI');
  }

  const clickServices = async e => {
    setShowServices('displayI');
    
    setShowProperties('noneDisplayI');
    setShowCars('noneDisplayI');
    setShowJobs('noneDisplayI');
    setShowClassifieds('noneDisplayI');
    setShowElectronics('noneDisplayI');
    setShowAnimals('noneDisplayI');
    setShowFurniture('noneDisplayI');
    setShowPersonalitems('noneDisplayI');
    setShowFooddrinks('noneDisplayI');
  }


  const clickClassifieds = async e => {
    setShowClassifieds('displayI'); 

    setShowProperties('noneDisplayI');
    setShowCars('noneDisplayI');
    setShowJobs('noneDisplayI');
    setShowServices('noneDisplayI');
    setShowElectronics('noneDisplayI');
    setShowAnimals('noneDisplayI');
    setShowFurniture('noneDisplayI');
    setShowPersonalitems('noneDisplayI');
    setShowFooddrinks('noneDisplayI');
  }



  const clickElectronics = async e => {
    setShowElectronics('displayI'); 

    setShowProperties('noneDisplayI');
    setShowCars('noneDisplayI');
    setShowJobs('noneDisplayI');
    setShowServices('noneDisplayI');
    setShowClassifieds('noneDisplayI');
    setShowAnimals('noneDisplayI');
    setShowFurniture('noneDisplayI');
    setShowPersonalitems('noneDisplayI');
    setShowFooddrinks('noneDisplayI');

  }


  const clickAnimals = async e => {
    setShowAnimals('displayI'); 

    setShowProperties('noneDisplayI');
    setShowCars('noneDisplayI');
    setShowJobs('noneDisplayI');
    setShowServices('noneDisplayI');
    setShowClassifieds('noneDisplayI');
    setShowElectronics('noneDisplayI');
    setShowFurniture('noneDisplayI');
    setShowPersonalitems('noneDisplayI');
    setShowFooddrinks('noneDisplayI');
  }


  const clickFurniture = async e => {
    setShowFurniture('displayI'); 

    setShowProperties('noneDisplayI');
    setShowCars('noneDisplayI');
    setShowJobs('noneDisplayI');
    setShowServices('noneDisplayI');
    setShowClassifieds('noneDisplayI');
    setShowElectronics('noneDisplayI');
    setShowAnimals('noneDisplayI');
    setShowPersonalitems('noneDisplayI');
    setShowFooddrinks('noneDisplayI');
  }



  const clickPersonalitems = async e => {
    setShowPersonalitems('displayI'); 

    setShowProperties('noneDisplayI');
    setShowCars('noneDisplayI');
    setShowJobs('noneDisplayI');
    setShowServices('noneDisplayI');
    setShowClassifieds('noneDisplayI');
    setShowElectronics('noneDisplayI');
    setShowAnimals('noneDisplayI');
    setShowFurniture('noneDisplayI');
    setShowFooddrinks('noneDisplayI');
  }


  const clickFooddrinks = async e => {
    setShowFooddrinks('displayI'); 

    setShowProperties('noneDisplayI');
    setShowCars('noneDisplayI');
    setShowJobs('noneDisplayI');
    setShowServices('noneDisplayI');
    setShowClassifieds('noneDisplayI');
    setShowElectronics('noneDisplayI');
    setShowAnimals('noneDisplayI');
    setShowFurniture('noneDisplayI');
    setShowPersonalitems('noneDisplayI');
  }

  
    const [getProperties,setProperties]= useState([])
    const [getCars,setCars]= useState([])
    const [getJobs,setJobs]= useState([])
    const [getServices,setServices]= useState([])
    const [getClassifieds,setClassifieds]= useState([])


    const [getElectronics,setElectronics]= useState([])
    const [getAnimals,setAnimals]= useState([])
    const [getFurniture,setFurniture]= useState([])
    const [getPersonalitems,setPersonalitems]= useState([])
    const [getFooddrinks,setFooddrinks]= useState([])


    



    
    
    const [visible,setVisible]= useState(20)

    const currentResultsProperties = getProperties.slice(0,visible);
    const currentResultsCars = getCars.slice(0,visible);
    const currentResultsJobs = getJobs.slice(0,visible);
    const currentResultsServices = getServices.slice(0,visible);
    const currentResultsClassifieds = getClassifieds.slice(0,visible);



    const currentResultsElectronics = getElectronics.slice(0,visible);
    const currentResultsAnimals = getAnimals.slice(0,visible);
    const currentResultsFurniture = getFurniture.slice(0,visible);
    const currentResultsPersonalitems = getPersonalitems.slice(0,visible);
    const currentResultsFooddrinks = getFooddrinks.slice(0,visible);

    


    


    const loadMore = async e => {
        setVisible(visible+10)
    }


    useEffect(() => {

      axios.get('/api/auth')
      .then(res => {
        setUser(res.data)
      }) 
      .catch((err) => {
        console.log(err);
      })


        axios.get('/api/categories/properties')
        .then(res => {
          //console.log(res);
          setProperties(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        axios.get('/api/categories/cars')
        .then(res => {
          //console.log(res);
          setCars(res.data)
        })
        .catch((err) => {
          console.log(err);
        })




        axios.get('/api/categories/jobs')
        .then(res => {
          //console.log(res);
          setJobs(res.data)
        })
        .catch((err) => {
          console.log(err);
        })




        axios.get('/api/categories/services')
        .then(res => {
          //console.log(res);
          setServices(res.data)
        })
        .catch((err) => {
          console.log(err);
        })




        axios.get('/api/categories/classifieds')
        .then(res => {
          //console.log(res);
          setClassifieds(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        axios.get('/api/categories/electronics')
        .then(res => {
          //console.log(res);
          setElectronics(res.data)
        })
        .catch((err) => {
          console.log(err);
        })




        axios.get('/api/categories/animals')
        .then(res => {
          //console.log(res);
          setAnimals(res.data)
        })
        .catch((err) => {
          console.log(err);
        })




        axios.get('/api/categories/furniture')
        .then(res => {
          //console.log(res);
          setFurniture(res.data)
        })
        .catch((err) => {
          console.log(err);
        })




        axios.get('/api/categories/personal-items')
        .then(res => {
          //console.log(res);
          setPersonalitems(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        axios.get('/api/categories/food-drinks')
        .then(res => {
          //console.log(res);
          setFooddrinks(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


     
        
 
      }, [user]);




      const CategoriesValid = ( 
        <div>
          
 

        <div className="mainForm">
        <center>
        <div className="dash-title"> {t('categories_management_title')} </div>
 
     
        <Link to="/dashboard/main" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> {t('backButton')} </Link>
        <Link to="/dashboard/categories/Addcategory" className="Action-button-plus-admin">  <i className="fa fa-plus fa-1x"></i> {t('addButton')}   </Link>
        </center>
 
 
  <div onClick={clickProperties} className="Action-button-plus-admin">   {t('categories_properties')}   </div>
  <div onClick={clickCars} className="Action-button-plus-admin">   {t('categories_cars')}   </div>
  <div onClick={clickJobs} className="Action-button-plus-admin">   {t('categories_Jobs')}    </div>
  <div onClick={clickServices} className="Action-button-plus-admin">   {t('categories_Services')}   </div>
  <div onClick={clickClassifieds} className="Action-button-plus-admin">    {t('categories_Classifieds')}   </div>
  <div onClick={clickElectronics} className="Action-button-plus-admin">    {t('categories_Electronics')}   </div>
  <div onClick={clickAnimals} className="Action-button-plus-admin">    {t('categories_Animals')}   </div>
  <div onClick={clickFurniture} className="Action-button-plus-admin">   {t('categories_Furniture')}    </div>
  <div onClick={clickPersonalitems} className="Action-button-plus-admin">   {t('categories_Personalitems')}    </div>
  <div onClick={clickFooddrinks} className="Action-button-plus-admin">   {t('categories_Fooddrinks')}   </div>
 
  


 <div className='' style={{width:'100%',display:'flex'}}>


 {/* /////////////////////////////////////////////// ????????????????//////////////////////////////////////////////// */}
 <div className={showProperties} style={{width:'90%'}}>
  
 <div className="dash-title"> {t('categories_properties')} - {getProperties.length} </div>
 
 
  {currentResultsProperties
   .map(category => (
  
  <center>
  <div class="main-list" key={category._id}>


  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {i18next.language === 'ar'&& category.c_AR_name}
  {i18next.language === 'en'&& category.c_EN_name}    
  </a>
  </div>

 

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">{t('desc_title')}:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

          { i18next.language === 'ar' &&(
            <ConfirmButton
            dialog={["", "???? ?????? ????????????", "?????????? ??????????"]}
            action={() => deleteCategory(category._id)}
              />
          )}

          { i18next.language === 'en' &&(
            <ConfirmButton
            dialog={["", "?are you sure", "Confirm deletion"]}
            action={() => deleteCategory(category._id)}
              />
          )}
           

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getProperties.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
      </center>
  )}

</div>
{/* ///////////////////////////////////////////////?????????? ????????????????//////////////////////////////////////////////// */}










 {/* /////////////////////////////////////////////// ????????????????//////////////////////////////////////////////// */}
 <div className={showCars} style={{width:'88%'}}>
 <div className="dash-title"> {t('categories_cars')} - {getCars.length}</div>

  {currentResultsCars
   .map(category => (
 
  <center>
  <div class="main-list" key={category._id}>


  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {i18next.language === 'ar'&& category.c_AR_name}
  {i18next.language === 'en'&& category.c_EN_name} 
   </a>
  </div>



  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">{t('desc_title')}:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 



         { i18next.language === 'ar' &&(
            <ConfirmButton
            dialog={["", "???? ?????? ????????????", "?????????? ??????????"]}
            action={() => deleteCategory(category._id)}
              />
          )}

          { i18next.language === 'en' &&(
            <ConfirmButton
            dialog={["", "?are you sure", "Confirm deletion"]}
            action={() => deleteCategory(category._id)}
              />
          )}

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getCars.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
      </center>
  )}

</div>

{/* ///////////////////////////////////////////////?????????? ????????????????//////////////////////////////////////////////// */}





 {/* /////////////////////////////////////////////// ??????????????//////////////////////////////////////////////// */}
 <div className={showJobs} style={{width:'88%'}}>
 <div className="dash-title"> {t('categories_Jobs')} - {getJobs.length}</div>

  {currentResultsJobs
   .map(category => (
 
  <center>
  <div class="main-list" key={category._id}>


  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {i18next.language === 'ar'&& category.c_AR_name}
  {i18next.language === 'en'&& category.c_EN_name} 
   </a>
  </div>



  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">{t('desc_title')}:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

       { i18next.language === 'ar' &&(
            <ConfirmButton
            dialog={["", "???? ?????? ????????????", "?????????? ??????????"]}
            action={() => deleteCategory(category._id)}
              />
          )}

          { i18next.language === 'en' &&(
            <ConfirmButton
            dialog={["", "?are you sure", "Confirm deletion"]}
            action={() => deleteCategory(category._id)}
              />
          )}

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getJobs.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
      </center>
  )}

</div>

{/* //////////////////////////////////////////////?????????? ??????????????/////////////////////////////////////////////// */}









 {/* /////////////////////////////////////////////// ??????????????//////////////////////////////////////////////// */}
 <div className={showServices} style={{width:'88%'}}>
 <div className="dash-title"> {t('categories_Services')} - {getServices.length}</div>

  {currentResultsServices
   .map(category => (
 
  <center>
  <div class="main-list" key={category._id}>


  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {i18next.language === 'ar'&& category.c_AR_name}
  {i18next.language === 'en'&& category.c_EN_name} 
   </a>
  </div>



  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">{t('desc_title')}:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

        { i18next.language === 'ar' &&(
            <ConfirmButton
            dialog={["", "???? ?????? ????????????", "?????????? ??????????"]}
            action={() => deleteCategory(category._id)}
              />
          )}

          { i18next.language === 'en' &&(
            <ConfirmButton
            dialog={["", "?are you sure", "Confirm deletion"]}
            action={() => deleteCategory(category._id)}
              />
          )}

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getServices.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
      </center>
  )}

</div>

{/* //////////////////////////////////////////////?????????? ??????????????/////////////////////////////////////////////// */}









 

 {/* ///////////////////////////////////////////?????????? ?????????????????? //////////////////////////////////////////////// */}
 <div className={showClassifieds} style={{width:'88%'}}>
 <div className="dash-title"> {t('categories_Classifieds')} - {getClassifieds.length}</div>

  {currentResultsClassifieds
   .map(category => (
 
  <center>
  <div class="main-list" key={category._id}>


  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {i18next.language === 'ar'&& category.c_AR_name}
  {i18next.language === 'en'&& category.c_EN_name} 
   </a>
  </div>



  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">{t('desc_title')}:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

        { i18next.language === 'ar' &&(
            <ConfirmButton
            dialog={["", "???? ?????? ????????????", "?????????? ??????????"]}
            action={() => deleteCategory(category._id)}
              />
          )}

          { i18next.language === 'en' &&(
            <ConfirmButton
            dialog={["", "?are you sure", "Confirm deletion"]}
            action={() => deleteCategory(category._id)}
              />
          )}

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getClassifieds.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
      </center>
  )}

</div>

{/* //////////////////////////////////////////////?????????? ??????????/////////////////////////////////////////////// */}





 {/* ///////////////////////////////////////////?????????????? //////////////////////////////////////////////// */}
 <div className={showElectronics} style={{width:'88%'}}>
 <div className="dash-title"> {t('categories_Electronics')} - {getElectronics.length}</div>
  {currentResultsElectronics
   .map(category => (
  <center>
  <div class="main-list" key={category._id}>
  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {i18next.language === 'ar'&& category.c_AR_name}
  {i18next.language === 'en'&& category.c_EN_name} 
   </a>
  </div>

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">{t('desc_title')}:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

       { i18next.language === 'ar' &&(
            <ConfirmButton
            dialog={["", "???? ?????? ????????????", "?????????? ??????????"]}
            action={() => deleteCategory(category._id)}
              />
          )}

          { i18next.language === 'en' &&(
            <ConfirmButton
            dialog={["", "?are you sure", "Confirm deletion"]}
            action={() => deleteCategory(category._id)}
              />
          )}

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getElectronics.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
      </center>
  )}

</div>


{/* ///////////////////////////////////////////////?????????? ??????????????//////////////////////////////////////////////// */}





 {/* ///////////////////////////////////////////?????????? ?????????????????? //////////////////////////////////////////////// */}
 <div className={showAnimals} style={{width:'88%'}}>
 <div className="dash-title"> {t('categories_Animals')} - {getAnimals.length}</div>
  {currentResultsAnimals
   .map(category => (
  <center>
  <div class="main-list" key={category._id}>
  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {i18next.language === 'ar'&& category.c_AR_name}
  {i18next.language === 'en'&& category.c_EN_name} 
  
    </a>
  </div>

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">{t('desc_title')}:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

          { i18next.language === 'ar' &&(
            <ConfirmButton
            dialog={["", "???? ?????? ????????????", "?????????? ??????????"]}
            action={() => deleteCategory(category._id)}
              />
          )}

          { i18next.language === 'en' &&(
            <ConfirmButton
            dialog={["", "?are you sure", "Confirm deletion"]}
            action={() => deleteCategory(category._id)}
              />
          )}

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getAnimals.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
      </center>
  )}

</div>


{/* ///////////////////////////////////////////////?????????? ??????????????????//////////////////////////////////////////////// */}






 {/* ///////////////////////////////////////////?????????? ???????????? //////////////////////////////////////////////// */}
 <div className={showFurniture} style={{width:'88%'}}>
 <div className="dash-title"> {t('categories_Furniture')} - {getFurniture.length}</div>
  {currentResultsFurniture
   .map(category => (
  <center>
  <div class="main-list" key={category._id}>
  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {i18next.language === 'ar'&& category.c_AR_name}
  {i18next.language === 'en'&& category.c_EN_name} 
    </a>
  </div>

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">{t('desc_title')}:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

        { i18next.language === 'ar' &&(
            <ConfirmButton
            dialog={["", "???? ?????? ????????????", "?????????? ??????????"]}
            action={() => deleteCategory(category._id)}
              />
          )}

          { i18next.language === 'en' &&(
            <ConfirmButton
            dialog={["", "?are you sure", "Confirm deletion"]}
            action={() => deleteCategory(category._id)}
              />
          )}

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getFurniture.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
      </center>
  )}

</div>


{/* ///////////////////////////////////////////////?????????? ????????????//////////////////////////////////////////////// */}







 {/* ///////////////////////////////////////////?????????? ???????????????????? ?????????????? //////////////////////////////////////////////// */}
 <div className={showPersonalitems} style={{width:'88%'}}>
 <div className="dash-title"> {t('categories_Personalitems')} - {getPersonalitems.length}</div>
  {currentResultsPersonalitems
   .map(category => (
  <center>
  <div class="main-list" key={category._id}>
  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {i18next.language === 'ar'&& category.c_AR_name}
  {i18next.language === 'en'&& category.c_EN_name} 
   </a>
  </div>

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">{t('desc_title')}:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

         { i18next.language === 'ar' &&(
            <ConfirmButton
            dialog={["", "???? ?????? ????????????", "?????????? ??????????"]}
            action={() => deleteCategory(category._id)}
              />
          )}

          { i18next.language === 'en' &&(
            <ConfirmButton
            dialog={["", "?are you sure", "Confirm deletion"]}
            action={() => deleteCategory(category._id)}
              />
          )}

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getPersonalitems.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
      </center>
  )}

</div>


{/* ///////////////////////////////////////////////?????????? ???????????????????? ??????????????//////////////////////////////////////////////// */}








 {/* ///////////////////////////////////////////?????????? ?????????? ?????????????? //////////////////////////////////////////////// */}
 <div className={showFooddrinks} style={{width:'88%'}}>
 <div className="dash-title"> {t('categories_Fooddrinks')} - {getFooddrinks.length}</div>
  {currentResultsFooddrinks
   .map(category => (
  <center>
  <div class="main-list" key={category._id}>
  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {i18next.language === 'ar'&& category.c_AR_name}
  {i18next.language === 'en'&& category.c_EN_name} 
   </a>
  </div>

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

    
    <div>
	<p class="list-details"><span className="redColor">{t('desc_title')}:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

         { i18next.language === 'ar' &&(
            <ConfirmButton
            dialog={["", "???? ?????? ????????????", "?????????? ??????????"]}
            action={() => deleteCategory(category._id)}
              />
          )}

          { i18next.language === 'en' &&(
            <ConfirmButton
            dialog={["", "?are you sure", "Confirm deletion"]}
            action={() => deleteCategory(category._id)}
              />
          )}

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getFooddrinks.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> {t('moreButton')} </button> 
      </center>
  )}

</div>


{/* ///////////////////////////////////////////////?????????? ?????????? ??????????????//////////////////////////////////////////////// */}


 

           </div>
        </div>
        </div>

    )

 
const notValidPage =(
  <Fragment>
         <center> 
       <Spinner />
      </center>
  </Fragment>
)
  
    return(
      <div className="aqle3-main">
      <div className="mainword2">
      {i18next.language === 'ar'&&(<Navbar />)}
      {i18next.language === 'en'&&(<NavbarEnglish />)}
    {user.validity === "super" || user.validity === "admin"  ?  CategoriesValid : notValidPage}
    </div>
    </div>
    );
}
 


Categories.propTypes = {
    //getMarkets: PropTypes.func.isRequired,
    //market: PropTypes.object.isRequired,
    deleteCategory: PropTypes.func.isRequired,
  };


  const mapStateToProps = state => ({
    category: state.category
  });


    
  export default connect(
    mapStateToProps,
    {deleteCategory}
  )(Categories);

 
