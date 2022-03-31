import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCategory } from '../../actions/category';
import ConfirmButton from "./ConfirmButton";
import axios from 'axios';
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
  
  
const Categories = ({loading , deleteCategory}) => {

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
        
 
      }, []);




      return loading ? (
        <Spinner />
      ) : ( 
        <div>
          
 
        <div className="aqle3-main">
        <div className="mainword2">
        <Navbar />
        <div className="mainForm">
        <center>
        <div className="dash-title"> التصنيفات الاساسية </div>
        <Link to="/ar/dashboard/main" className="Action-button-plus-admin">  <i className="fa fa-arrow-left fa-1x"></i> رجوع </Link>
        <Link to="/dashboard/categories/Addcategory" className="Action-button-plus-admin">  <i className="fa fa-plus fa-1x"></i> اضافة   </Link>
        </center>

  <div onClick={clickProperties} className="Action-button-plus-admin">   عقارات   </div>
  <div onClick={clickCars} className="Action-button-plus-admin">   سيارات   </div>
  <div onClick={clickJobs} className="Action-button-plus-admin">   وظائف   </div>
  <div onClick={clickServices} className="Action-button-plus-admin">   خدمات   </div>
  <div onClick={clickClassifieds} className="Action-button-plus-admin">   سلع خرى   </div>
  <div onClick={clickElectronics} className="Action-button-plus-admin">   الالكترونيات   </div>
  <div onClick={clickAnimals} className="Action-button-plus-admin">   حيوانات   </div>
  <div onClick={clickFurniture} className="Action-button-plus-admin">   اثاث   </div>
  <div onClick={clickPersonalitems} className="Action-button-plus-admin">   مستلزمات شخصية   </div>
  <div onClick={clickFooddrinks} className="Action-button-plus-admin">   أطعمة ومشروبات   </div>



 <div className='' style={{width:'100%',display:'flex'}}>


 {/* /////////////////////////////////////////////// العقارات//////////////////////////////////////////////// */}
 <div className={showProperties} style={{width:'80%'}}>
  
 <div className="dash-title"> العقارات ( {getProperties.length})</div>

 
  {currentResultsProperties
   .map(category => (
 
  <center>
  <div class="main-list" key={category._id}>


  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {category.c_AR_name}  </a>
  </div>

 

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">وصف:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/ar/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

    <ConfirmButton
            dialog={["", "هل أنت متأكد؟", "تأكيد الحذف"]}
            action={() => deleteCategory(category._id)}
              />

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getProperties.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</div>
{/* ///////////////////////////////////////////////نهاية العقارات//////////////////////////////////////////////// */}










 {/* /////////////////////////////////////////////// السيارات//////////////////////////////////////////////// */}
 <div className={showCars} style={{width:'88%'}}>
 <div className="dash-title"> السيارات ( {getCars.length})</div>

  {currentResultsCars
   .map(category => (
 
  <center>
  <div class="main-list" key={category._id}>


  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {category.c_AR_name}  </a>
  </div>



  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">وصف:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/ar/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

    <ConfirmButton
            dialog={["", "هل أنت متأكد؟", "تأكيد الحذف"]}
            action={() => deleteCategory(category._id)}
              />

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getCars.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</div>

{/* ///////////////////////////////////////////////نهاية السيارات//////////////////////////////////////////////// */}





 {/* /////////////////////////////////////////////// الوظائف//////////////////////////////////////////////// */}
 <div className={showJobs} style={{width:'88%'}}>
 <div className="dash-title"> الوظائف ( {getJobs.length})</div>

  {currentResultsJobs
   .map(category => (
 
  <center>
  <div class="main-list" key={category._id}>


  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {category.c_AR_name}  </a>
  </div>



  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">وصف:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/ar/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

    <ConfirmButton
            dialog={["", "هل أنت متأكد؟", "تأكيد الحذف"]}
            action={() => deleteCategory(category._id)}
              />

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getJobs.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</div>

{/* //////////////////////////////////////////////نهاية الوظائف/////////////////////////////////////////////// */}









 {/* /////////////////////////////////////////////// الخدمات//////////////////////////////////////////////// */}
 <div className={showServices} style={{width:'88%'}}>
 <div className="dash-title"> الخدمات ( {getServices.length})</div>

  {currentResultsServices
   .map(category => (
 
  <center>
  <div class="main-list" key={category._id}>


  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {category.c_AR_name}  </a>
  </div>



  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">وصف:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/ar/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

    <ConfirmButton
            dialog={["", "هل أنت متأكد؟", "تأكيد الحذف"]}
            action={() => deleteCategory(category._id)}
              />

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getServices.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</div>

{/* //////////////////////////////////////////////نهاية الخدمات/////////////////////////////////////////////// */}









 

 {/* ///////////////////////////////////////////السلع والمنتجات //////////////////////////////////////////////// */}
 <div className={showClassifieds} style={{width:'88%'}}>
 <div className="dash-title"> سلع ( {getClassifieds.length})</div>

  {currentResultsClassifieds
   .map(category => (
 
  <center>
  <div class="main-list" key={category._id}>


  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {category.c_AR_name}  </a>
  </div>



  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">وصف:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/ar/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

    <ConfirmButton
            dialog={["", "هل أنت متأكد؟", "تأكيد الحذف"]}
            action={() => deleteCategory(category._id)}
              />

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getClassifieds.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</div>

{/* //////////////////////////////////////////////نهاية السلع/////////////////////////////////////////////// */}





 {/* ///////////////////////////////////////////الاجهزة //////////////////////////////////////////////// */}
 <div className={showElectronics} style={{width:'88%'}}>
 <div className="dash-title"> سوق الأجهزة ( {getElectronics.length})</div>
  {currentResultsElectronics
   .map(category => (
  <center>
  <div class="main-list" key={category._id}>
  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {category.c_AR_name}  </a>
  </div>

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">وصف:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/ar/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

    <ConfirmButton
            dialog={["", "هل أنت متأكد؟", "تأكيد الحذف"]}
            action={() => deleteCategory(category._id)}
              />

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getElectronics.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</div>


{/* ///////////////////////////////////////////////نهاية الاجهزة//////////////////////////////////////////////// */}





 {/* ///////////////////////////////////////////بداية الحيوانات //////////////////////////////////////////////// */}
 <div className={showAnimals} style={{width:'88%'}}>
 <div className="dash-title"> الحيوانات والمواشي والطيور ( {getAnimals.length})</div>
  {currentResultsAnimals
   .map(category => (
  <center>
  <div class="main-list" key={category._id}>
  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {category.c_AR_name}  </a>
  </div>

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">وصف:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/ar/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

    <ConfirmButton
            dialog={["", "هل أنت متأكد؟", "تأكيد الحذف"]}
            action={() => deleteCategory(category._id)}
              />

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getAnimals.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</div>


{/* ///////////////////////////////////////////////نهاية الحيوانات//////////////////////////////////////////////// */}






 {/* ///////////////////////////////////////////بداية الاثاث //////////////////////////////////////////////// */}
 <div className={showFurniture} style={{width:'88%'}}>
 <div className="dash-title"> الاثاث ( {getFurniture.length})</div>
  {currentResultsFurniture
   .map(category => (
  <center>
  <div class="main-list" key={category._id}>
  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {category.c_AR_name}  </a>
  </div>

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">وصف:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/ar/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

    <ConfirmButton
            dialog={["", "هل أنت متأكد؟", "تأكيد الحذف"]}
            action={() => deleteCategory(category._id)}
              />

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getFurniture.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</div>


{/* ///////////////////////////////////////////////نهاية الاثاث//////////////////////////////////////////////// */}







 {/* ///////////////////////////////////////////بداية المستلزمات الشخصية //////////////////////////////////////////////// */}
 <div className={showPersonalitems} style={{width:'88%'}}>
 <div className="dash-title"> مستلزمات شخصية ( {getPersonalitems.length})</div>
  {currentResultsPersonalitems
   .map(category => (
  <center>
  <div class="main-list" key={category._id}>
  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {category.c_AR_name}  </a>
  </div>

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">وصف:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/ar/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

    <ConfirmButton
            dialog={["", "هل أنت متأكد؟", "تأكيد الحذف"]}
            action={() => deleteCategory(category._id)}
              />

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getPersonalitems.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</div>


{/* ///////////////////////////////////////////////نهاية المستلزمات الشخصية//////////////////////////////////////////////// */}








 {/* ///////////////////////////////////////////بداية الاكل والشراب //////////////////////////////////////////////// */}
 <div className={showFooddrinks} style={{width:'88%'}}>
 <div className="dash-title"> اطعمة ومشروبات ( {getFooddrinks.length})</div>
  {currentResultsFooddrinks
   .map(category => (
  <center>
  <div class="main-list" key={category._id}>
  <div className="title-in-list">
  <a class="title-in-list" href="#">
  {category.c_AR_name}  </a>
  </div>

  {category.image && (
  <img src={category.image} style={{ width: '120px', height:'80px',marginBottom:''}} />
  )}

   
    <div>
	<p class="list-details"><span className="redColor">وصف:</span>{category.c_description} </p>


	<p class="list-button">
  <button class="Action-button-status">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<Link to={`/ar/dashboard/categories/editCategory/${category._id}`} style={{textDecoration:'none'}}> <button class="Action-button-status">     <i className="fa fa-edit fa-1x"></i>   </button> </Link> 

    <ConfirmButton
            dialog={["", "هل أنت متأكد؟", "تأكيد الحذف"]}
            action={() => deleteCategory(category._id)}
              />

	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
</center>
 ))}



{visible < getFooddrinks.length && (
  <center> 
  <button   onClick={loadMore} 
      className="loadMorebtn">  <i class="fa fa-arrow-down fa-1x"></i> المزيد </button> 
      </center>
  )}

</div>


{/* ///////////////////////////////////////////////نهاية الاكل والشراب//////////////////////////////////////////////// */}












</div>
        </div>
        </div>
        </div>


        </div>
    )
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

 
