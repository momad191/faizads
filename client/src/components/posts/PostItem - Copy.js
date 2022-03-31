import React, { Fragment ,useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { addLike, removeLike, deletePost, addFiveStars, addFourStars, addThreeStars, addTwoStars, addOneStars } from '../../actions/post';
  
import { addVote } from '../../actions/addVote';
import { setAlert } from '../../actions/alert';
import { getPost } from '../../actions/post';
import axios from 'axios';

import greenFace from './greenFace.png';
import redFace from './redFace.png';
import yallowFace from './yallowFace.png';
import Navbar from '../../components/layout/Navbar';

import ReportForm from '../reports/ReportForm';

const noneRating = 'noneRating';
const displayRating = 'displayRating';

           
const PostItem = ({
  addLike,
  addVote,
  addFiveStars, addFourStars, addThreeStars, addTwoStars,addOneStars,
  removeLike,
  deletePost,
  auth,
  auth: { isAuthenticated },
  match,

 
  
  post: { _id ,CategoryName,category,shop,market,title,country,city,country_code,city_code,affiliate_Url,price,currency,image,short,Main_paragraph,video, name, avatar, user, likes,five_stars,four_stars,three_stars,two_stars,one_stars, comments, date,
  
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7,
    title8,
    title9,
    title10,
    title11,
    title12,
    title13,
    title14,
    title15,
    title16,
    title17,
    title18,
    title19,
    title20,
    title21,
    title22,
    title23,
    title24,
    title25,
    title26,
    title27,
    title28,
    title29,
    title30,

    Paragraph1,
    Paragraph2,
    Paragraph3,
    Paragraph4,
    Paragraph5,
    Paragraph6,
    Paragraph7,
    Paragraph8,
    Paragraph9,
    Paragraph10,
    Paragraph11,
    Paragraph12,
    Paragraph13,
    Paragraph14,
    Paragraph15,
    Paragraph16,
    Paragraph17,
    Paragraph18,
    Paragraph19,
    Paragraph20,
    Paragraph21,
    Paragraph22,
    Paragraph23,
    Paragraph24,
    Paragraph25,
    Paragraph26,
    Paragraph27,
    Paragraph28,
    Paragraph29,
    Paragraph30,


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
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
    pic16,
    pic17,
    pic18,
    pic19,
    pic20,
    pic21,
    pic22,
    pic23,
    pic24,
    pic25,
    pic26,
    pic27,
    pic28,
    pic29,
    pic30,


    link1,
    link2,
    link3,
    link4,
    link5,
    link6,
    link7,
    link8,
    link9,
    link10,
    link11,
    link12,
    link13,
    link14,
    link15,
    link16,
    link17,
    link18,
    link19,
    link20,
    link21,
    link22,
    link23,
    link24,
    link25,
    link26,
    link27,
    link28,
    link29,
    link30,



    lt1,
    lt2,
    lt3,
    lt4,
    lt5,
    lt6,
    lt7,
    lt8,
    lt9,
    lt10,
    lt11,
    lt12,
    lt13,
    lt14,
    lt15,
    lt16,
    lt17,
    lt18,
    lt19,
    lt20,
    lt21,
    lt22,
    lt23,
    lt24,
    lt25,
    lt26,
    lt27,
    lt28,
    lt29,
    lt30,

    pros1,
    pros2,
    pros3,
    pros4,
    pros5,


    cons1,
    cons2,
    cons3,
    cons4,
    cons5






  
  },
  
}) =>{
     //////////////////////////////////////////////images control///////////////////////////////////////////////////
     const [selectpic0, setselectpic0] = useState('displayI');
     const [selectpic1, setselectpic1] = useState('noneDisplayI');
     const [selectpic2, setselectpic2] = useState('noneDisplayI');
     const [selectpic3, setselectpic3] = useState('noneDisplayI');
     const [selectpic4, setselectpic4] = useState('noneDisplayI');
     const [selectpic5, setselectpic5] = useState('noneDisplayI');
     const [selectpic6, setselectpic6] = useState('noneDisplayI');
     const [selectpic7, setselectpic7] = useState('noneDisplayI');
     const [selectpic8, setselectpic8] = useState('noneDisplayI');
     const [selectpic9, setselectpic9] = useState('noneDisplayI');
     const [selectpic10, setselectpic10] = useState('noneDisplayI');
     const [selectpic11, setselectpic11] = useState('noneDisplayI');
     const [selectpic12, setselectpic12] = useState('noneDisplayI');


     const optionselectpic0 = async e => {
          setselectpic0('displayI');
          setselectpic1('noneDisplayI');
          setselectpic2('noneDisplayI');
          setselectpic3('noneDisplayI');
          setselectpic4('noneDisplayI');
          setselectpic5('noneDisplayI');
          setselectpic6('noneDisplayI');
          setselectpic7('noneDisplayI');
          setselectpic8('noneDisplayI');
          setselectpic9('noneDisplayI');
          setselectpic10('noneDisplayI');


        }

     const optionselectpic1 = async e => {
          setselectpic1('displayI');

          setselectpic0('noneDisplayI');
          setselectpic2('noneDisplayI');
          setselectpic3('noneDisplayI');
          setselectpic4('noneDisplayI');
          setselectpic5('noneDisplayI');
          setselectpic6('noneDisplayI');
          setselectpic7('noneDisplayI');
          setselectpic8('noneDisplayI');
          setselectpic9('noneDisplayI');
          setselectpic10('noneDisplayI');


        }

        const optionselectpic2 = async e => {
          setselectpic2('displayI');

          setselectpic0('noneDisplayI');
          setselectpic1('noneDisplayI');
          setselectpic3('noneDisplayI');
          setselectpic4('noneDisplayI');
          setselectpic5('noneDisplayI');
          setselectpic6('noneDisplayI');
          setselectpic7('noneDisplayI');
          setselectpic8('noneDisplayI');
          setselectpic9('noneDisplayI');
          setselectpic10('noneDisplayI');


        }

        const optionselectpic3 = async e => {
          setselectpic3('displayI');

          setselectpic0('noneDisplayI');
          setselectpic1('noneDisplayI');
          setselectpic2('noneDisplayI');
          setselectpic4('noneDisplayI');
          setselectpic5('noneDisplayI');
          setselectpic6('noneDisplayI');
          setselectpic7('noneDisplayI');
          setselectpic8('noneDisplayI');
          setselectpic9('noneDisplayI');
          setselectpic10('noneDisplayI');


        }

        const optionselectpic4 = async e => {
          setselectpic4('displayI');

          setselectpic0('noneDisplayI');
          setselectpic1('noneDisplayI');
          setselectpic2('noneDisplayI');
          setselectpic3('noneDisplayI');
          setselectpic5('noneDisplayI');
          setselectpic6('noneDisplayI');
          setselectpic7('noneDisplayI');
          setselectpic8('noneDisplayI');
          setselectpic9('noneDisplayI');
          setselectpic10('noneDisplayI');


        }

        const optionselectpic5 = async e => {
          setselectpic5('displayI');

          setselectpic0('noneDisplayI');
          setselectpic1('noneDisplayI');
          setselectpic2('noneDisplayI');
          setselectpic3('noneDisplayI');
          setselectpic4('noneDisplayI');
          setselectpic6('noneDisplayI');
          setselectpic7('noneDisplayI');
          setselectpic8('noneDisplayI');
          setselectpic9('noneDisplayI');
          setselectpic10('noneDisplayI');


        }

        const optionselectpic6 = async e => {
          setselectpic6('displayI');

          setselectpic0('noneDisplayI');
          setselectpic1('noneDisplayI');
          setselectpic2('noneDisplayI');
          setselectpic3('noneDisplayI');
          setselectpic4('noneDisplayI');
          setselectpic5('noneDisplayI');
          setselectpic7('noneDisplayI');
          setselectpic8('noneDisplayI');
          setselectpic9('noneDisplayI');
          setselectpic10('noneDisplayI');


        }

        const optionselectpic7 = async e => {
          setselectpic7('displayI');

          setselectpic0('noneDisplayI');
          setselectpic1('noneDisplayI');
          setselectpic2('noneDisplayI');
          setselectpic3('noneDisplayI');
          setselectpic4('noneDisplayI');
          setselectpic5('noneDisplayI');
          setselectpic6('noneDisplayI');
          setselectpic8('noneDisplayI');
          setselectpic9('noneDisplayI');
          setselectpic10('noneDisplayI');


        }

        const optionselectpic8 = async e => {
          setselectpic8('displayI');

          setselectpic0('noneDisplayI');
          setselectpic1('noneDisplayI');
          setselectpic2('noneDisplayI');
          setselectpic3('noneDisplayI');
          setselectpic4('noneDisplayI');
          setselectpic5('noneDisplayI');
          setselectpic6('noneDisplayI');
          setselectpic7('noneDisplayI');
          setselectpic9('noneDisplayI');
          setselectpic10('noneDisplayI');


        }

        const optionselectpic9 = async e => {
          setselectpic9('displayI');

          setselectpic0('noneDisplayI');
          setselectpic1('noneDisplayI');
          setselectpic2('noneDisplayI');
          setselectpic3('noneDisplayI');
          setselectpic4('noneDisplayI');
          setselectpic5('noneDisplayI');
          setselectpic6('noneDisplayI');
          setselectpic7('noneDisplayI');
          setselectpic8('noneDisplayI');
          setselectpic10('noneDisplayI');


        }

        const optionselectpic10 = async e => {
          setselectpic10('displayI');

          setselectpic0('noneDisplayI');
          setselectpic1('noneDisplayI');
          setselectpic2('noneDisplayI');
          setselectpic3('noneDisplayI');
          setselectpic4('noneDisplayI');
          setselectpic5('noneDisplayI');
          setselectpic6('noneDisplayI');
          setselectpic7('noneDisplayI');
          setselectpic8('noneDisplayI');
          setselectpic9('noneDisplayI');


        }

       
 

     ///////////////////////////////////////contact control/////////////////////////////////////////////////

     const [optionContactphone1, setmyoptionContact1] = useState('noneDisplayI');
     const [optionContactphone2, setmyoptionContact2] = useState('noneDisplayI');
     const [optionContactwhatsaap, setmyoptionContactwhatsaap] = useState('noneDisplayI');
     const [optionContactemail, setmyoptionContactemail] = useState('noneDisplayI');
     const [optionContactwebsite, setmyoptionContactwebsite] = useState('noneDisplayI');
     const [optionContactreport, setmyoptionContactreport] = useState('noneDisplayI');
     
     const optionContact1 = async e => {
          setmyoptionContact1('displayI');
          setmyoptionContact2('noneDisplayI');
          setmyoptionContactwhatsaap('noneDisplayI');
          setmyoptionContactemail('noneDisplayI');
          setmyoptionContactwebsite('noneDisplayI');
          setmyoptionContactreport('noneDisplayI');
     }

     const optionContact2 = async e => {
          setmyoptionContact2('displayI');

          setmyoptionContact1('noneDisplayI');
          setmyoptionContactwhatsaap('noneDisplayI');
          setmyoptionContactemail('noneDisplayI');
          setmyoptionContactwebsite('noneDisplayI');
          setmyoptionContactreport('noneDisplayI');
     }
     const optionContact3 = async e => {
          setmyoptionContactwhatsaap('displayI');

          setmyoptionContact1('noneDisplayI');
          setmyoptionContact2('noneDisplayI');
          setmyoptionContactemail('noneDisplayI');
          setmyoptionContactwebsite('noneDisplayI');
          setmyoptionContactreport('noneDisplayI');
     }
     const optionContact4 = async e => {
          setmyoptionContactemail('displayI');
          setmyoptionContact1('noneDisplayI');
          setmyoptionContact2('noneDisplayI');
          setmyoptionContactwhatsaap('noneDisplayI');
          setmyoptionContactwebsite('noneDisplayI');
          setmyoptionContactreport('noneDisplayI');
     }
     const optionContact5 = async e => {
          setmyoptionContactwebsite('displayI');

          setmyoptionContactemail('noneDisplayI');
          setmyoptionContact1('noneDisplayI');
          setmyoptionContact2('noneDisplayI');
          setmyoptionContactwhatsaap('noneDisplayI');
          setmyoptionContactreport('noneDisplayI');

         
     }

     const optionContact6 = async e => {
          setmyoptionContactreport('displayI');

          setmyoptionContactwebsite('noneDisplayI');
          setmyoptionContactemail('noneDisplayI');
          setmyoptionContact1('noneDisplayI');
          setmyoptionContact2('noneDisplayI');
          setmyoptionContactwhatsaap('noneDisplayI');
         
     }
 

     const [displayInputs1, toggleInputs1] = useState(false);

     const [myoption5, setmyoption5] = useState(displayRating)
     const [myoption4, setmyoption4] = useState(displayRating)
     const [myoption3, setmyoption3] = useState(displayRating)


     const [myoption55, setmyoption55] = useState(noneRating)
     const [myoption44, setmyoption44] = useState(noneRating)
     const [myoption33, setmyoption33] = useState(noneRating)

    


     const option6 = async e => {
          setmyoption5(displayRating);
          setmyoption4(displayRating);
          setmyoption3(displayRating);
   


          setmyoption55(noneRating);
          setmyoption44(noneRating);
          setmyoption33(noneRating);

        };


     const option5 = async e => {
          setmyoption5(displayRating);
          setmyoption4(noneRating);
          setmyoption3(noneRating);


          setmyoption55(displayRating);
          setmyoption44(noneRating);
          setmyoption33(noneRating);

        };


        const option4 = async e => {
          setmyoption5(noneRating);
          setmyoption4(displayRating);
          setmyoption3(noneRating);


          setmyoption55(noneRating);
          setmyoption44(displayRating);
          setmyoption33(noneRating);
       

        };

        const option3 = async e => {
          setmyoption5(noneRating);
          setmyoption4(noneRating);
          setmyoption3(displayRating);
      



          setmyoption55(noneRating);
          setmyoption44(noneRating);
          setmyoption33(displayRating);





          
        };



    
        const [get5s,setget5s]= useState([])
        const [get4s,setget4s]= useState([])
        const [get3s,setget3s]= useState([])
        

 
     
     
     const [getrr,setarr]= useState([])
     const [getpp,setpp]= useState([])

     const [getAuth,setAuth]= useState([])

     const [voting,setVoting]= useState([])
     
    

     

       const [loading, setLoading] = useState(false)
     
      const [formData, setFormData] = useState({
          post_id:_id,
          post_title:title,
          rank:''

      })
 
      const { post_id, post_title, rank,} = formData;

      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });


      const onSubmit = async e => {
          e.preventDefault();
          addVote({ post_id, post_title, rank });
          
        };


        
  
        


  useEffect(() => {
    getPost(match.params.id);

 
    axios.get('/api/posts')
        .then(res => {
          //console.log(res);
          setpp(res.data)
        })
        .catch((err) => {
          console.log(err);
        })

        axios.get('/api/auth')
        .then(res => {
          //console.log(res);
          setAuth(res.data)
        })
        .catch((err) => {
          console.log(err);
        })




     //    axios.get('/api/votings/'+match.params.id)
     //    .then(res => {
     //      //console.log(res);
          
     //      setVoting(res.data)
     //    })
     //    .catch((err) => {
     //      console.log(err);
     //    })

 

        axios.get('/api/posts/get5s/'+match.params.id)
        .then(res => {
          //console.log(res);
          setget5s(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


        axios.get('/api/posts/get4s/'+match.params.id)
        .then(res => {
          //console.log(res);
          setget4s(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        axios.get('/api/posts/get3s/'+match.params.id)
        .then(res => {
          //console.log(res);
          setget3s(res.data)
        })
        .catch((err) => {
          console.log(err);
        })
        




  },[getPost]);

 
  const sumstars = five_stars.length+four_stars.length+three_stars.length;

  const fiveSrtarPercent= (five_stars.length / sumstars)* 100;
  const Five=  fiveSrtarPercent.toPrecision(4);


  const fourSrtarPercent= (four_stars.length / sumstars) * 100;
  const Four=  fourSrtarPercent.toPrecision(4);


  const threeSrtarPercent= (three_stars.length / sumstars) * 100;
  const Three=  threeSrtarPercent.toPrecision(4);


//   const twoSrtarPercent= two_stars.length / sumstars * 100;
//   const Two=  twoSrtarPercent.toPrecision(2);

//   const oneSrtarPercent= one_stars.length / sumstars * 100;
//   const One =  oneSrtarPercent.toPrecision(2);




  return (

  <>
 
     <Navbar />
       <div className="aqle3-main">
       <div className="mainword2">
       <center> 
       <div className="main-about" >

       <div>
       
       <div className="post-title"> {title} </div>
       <div  className="main-pic">
            
      <div className={selectpic0}><img className="detail-picture" alt={title} src={image} /></div> 
      <div className={selectpic1}><img className="detail-picture" alt={title} src={pic1} /></div> 
      <div className={selectpic2}><img className="detail-picture" alt={title} src={pic2} /></div> 
      <div className={selectpic3}><img className="detail-picture" alt={title} src={pic3} /></div> 
      <div className={selectpic4}><img className="detail-picture" alt={title} src={pic4} /></div>
      <div className={selectpic5}><img className="detail-picture" alt={title} src={pic5} /></div> 
      <div className={selectpic6}><img className="detail-picture" alt={title} src={pic6} /></div> 
      <div className={selectpic7}><img className="detail-picture" alt={title} src={pic7} /></div> 
      <div className={selectpic8}><img className="detail-picture" alt={title} src={pic8} /></div> 
      <div className={selectpic9}><img className="detail-picture" alt={title} src={pic9} /></div> 
      <div className={selectpic10}><img className="detail-picture" alt={title} src={pic10} /></div> 
       
      

 
      
       <div style={{display:'flex',marginTop:'-40px', alignItems: 'center'}}>
       <center>
       {image &&(<button className='forPic1' onClick={optionselectpic0}> . </button> )}
       {pic1 &&(<button className='forPic1' onClick={optionselectpic1}> . </button>)}
       {pic2 &&(<button className='forPic1' onClick={optionselectpic2}> . </button>)}
       {pic3 &&(<button className='forPic1' onClick={optionselectpic3}> . </button>)}
       {pic4 &&(<button className='forPic1' onClick={optionselectpic4}> . </button>)}
       {pic5 &&(<button className='forPic1' onClick={optionselectpic5}> . </button>)}
       {pic6 &&(<button className='forPic1' onClick={optionselectpic6}> . </button>)}
       {pic7 &&(<button className='forPic1' onClick={optionselectpic7}> . </button>)}
       {pic8 &&(<button className='forPic1' onClick={optionselectpic8}> . </button>)}
       {pic9 &&(<button className='forPic1' onClick={optionselectpic9}> . </button>)}
       {pic10 &&(<button className='forPic1' onClick={optionselectpic10}>.</button>)}
       </center>
     </div>
    

       </div>
       

       <div className="pic-slider-container"> 
       <button className="pic-slider-smal"> {shop.shop_name} <i class="fa fa-bullhorn fa-1x" aria-hidden="true"></i></button>
       <button className="pic-slider-smal"> {market.m_AR_name}  <i class="fa fa-th-large fa-1x" aria-hidden="true"></i> </button>
       <button className="pic-slider-smal"> {category.c_AR_name}  <i class="fa fa-list fa-1x" aria-hidden="true"></i>  </button>
       <button className="pic-slider-smal"> {country.country_AR_name} - {city.city_AR_name} <i class="fa fa-map-marker fa-1x" aria-hidden="true"></i>   </button>
        </div>
        <div className="post-Main_paragraph"> {Main_paragraph} </div>
       </div>
 

       <div style={{display:'flex',border:'1px solid #add8e6'}}> 
       <button className="post-contact-button" onClick={optionContact1}> <i class="fa fa-mobile" aria-hidden="true"></i> <span> الجوال</span>  </button>
       <button className="post-contact-button" onClick={optionContact2}> <i class="fa fa-phone" aria-hidden="true"></i> <span> الهاتف</span>  </button>
       <button className="post-contact-button" onClick={optionContact3}> <i class="fa fa-whatsapp" aria-hidden="true"></i> <span> تواصل</span> </button>
       <button className="post-contact-button" onClick={optionContact4}> <i class="fa fa-envelope" aria-hidden="true"></i> <span> مراسلة</span>  </button>
       <button className="post-contact-button" onClick={optionContact5}> <i class="fa fa-globe" aria-hidden="true"></i> <span> الموقع</span>  </button>
       <button className="post-report-button"  onClick={optionContact6}> <i class="fa fa-flag" aria-hidden="true"></i> <span> ابلاغ</span>  </button>
       </div>

       <div className={optionContactphone1}> 
       <a className="post-contact-show" href={`tel:${shop.shop_phone1}`}> 
       <i class="fa fa-mobile" aria-hidden="true"></i>  {shop.shop_phone1} 
        </a>
        </div>

        <div className={optionContactphone2}> 
       <a className="post-contact-show" href={`tel:${shop.shop_phone2}`}> 
       <i class="fa fa-phone" aria-hidden="true"></i>  {shop.shop_phone2} 
        </a>
        </div>

        <div className={optionContactwhatsaap}> 
       <a className="post-contact-show" href={`https://api.whatsapp.com/send?phone=${shop.shop_whatsaap}&text=هلا`}> 
       <i class="fa fa-whatsapp" aria-hidden="true"></i>  {shop.shop_whatsaap} 
        </a>
        </div>


        <div className={optionContactemail}> 
       <a className="post-contact-show" href={`${shop.shop_email}`}> 
       <i class="fa fa-envelope" aria-hidden="true"></i>  {shop.shop_email} 
        </a>
        </div>


        <div className={optionContactwebsite}> 
       <a className="post-contact-show" href={`${shop.shop_website}`}> 
       <i class="fa fa-globe" aria-hidden="true"></i>  {shop.shop_website} 
        </a>
        </div>


        <div className={optionContactreport}> 
        {isAuthenticated ?(
        <Fragment>
        <div className="post-contact-show" >    
         <ReportForm r_username={shop.username}   />
        </div>
         </Fragment>
        ):(
          <Fragment>
      <> </>
          </Fragment>

        )}
        </div>
        

        <button className="button-buy"> <i class="fa fa-arrow-left" aria-hidden="true"></i> <span> اشتري الان</span>  </button>

       {/* <button className="button-buy"> <i class="fa fa-arrow-left" aria-hidden="true"></i> <span> اشتري الان</span>  </button> */}

       
       <center> 
 
 {/* <div className="consprops-paragraph">

<ul className="ul-product-details">
<h2> <span className="redColor">  Pros </span></h2>    
<hr className="newLine" />
<li> <i class="fa fa-thumbs-o-up"/>  {pros1} </li>
<li> <i class="fa fa-thumbs-o-up"/>  {pros2}</li>
<li> <i class="fa fa-thumbs-o-up"/>  {pros3}</li>
<li> <i class="fa fa-thumbs-o-up"/>  {pros4}</li>
<li> <i class="fa fa-thumbs-o-up"/>  {pros5}</li>
</ul>

      
<ul className="ul-product-details">
 <h1> <span className="redColor"> Cons </span></h1>
 <hr className="newLine" />
<li> <i class="fa fa-thumbs-o-down"/>  {cons1} </li>
<li> <i class="fa fa-thumbs-o-down"/>  {cons2} </li>
<li> <i class="fa fa-thumbs-o-down"/>  {cons3} </li>
<li> <i class="fa fa-thumbs-o-down"/>  {cons4} </li>
<li> <i class="fa fa-thumbs-o-down"/>  {cons5} </li>
 
</ul>

</div> */}



{video &&(
  <a  href={video}  target="_blank"  className="button-video-display">  Product Video <i  className="fa fa-youtube-play fa-1x" aria-hidden="true"></i> </a>
)}
  

  {/* <a href={affiliate_Url} className="button-details" target="_blank"  > Offer Price </a> */}
          
          {/* <a href={affiliate_Url} className="button-buy" target="_blank"  > Try Now </a> */}


{/* ///////////////////////////////////start rating//////////////////////////////////////////// */}


{(get5s.length > 0) || (get4s.length > 0)  || (get3s.length > 0) ?(
 

//   { voting.post_id === _id   && voting.user === auth.user._id ?(

<Fragment>  
 

 {get5s.length > 0 &&(
      <Fragment>
           <p className="details-title"> Your Feedback
          <img  src={greenFace} style={{width:'50px',height:'40px'}}/>  </p>
          
      </Fragment>
)} 




{ get4s.length > 0 &&(
      <Fragment>
           <p className="details-title"> Your Feedback
          <img  src={yallowFace} style={{width:'20px',height:'20px'}}/> Thank You  </p>
          
      </Fragment>
)} 





{ get3s.length > 0 &&(
      <Fragment>
           <p className="details-title"> Your Feedback
          <img  src={redFace} style={{width:'40px',height:'30px'}}/> Thank You  </p>
          
      </Fragment>
)} 




 

<div className='' style={{display:'flex',alignContent:'center', width:'100%'}}>


{/* /////////////////////////////////////////////////five/////////////////////////////////////////////////// */}


{five_stars.length > three_stars.length && five_stars.length> four_stars.length ?(

<button className='Action-button-update' style={{backgroundColor:'#195905'}}>
<img  src={greenFace} />
{Five} %
</button>

     ):(

 <button className='Action-button-update' style={{paddingTop:'',textAlign:'center'}}>
<img  src={greenFace} />
{Five} %
</button>
 
     )}





{/* /////////////////////////////////////////////////four/////////////////////////////////////////////////// */}

{four_stars.length > three_stars.length && four_stars.length> five_stars.length?(

<button className='Action-button-update' style={{backgroundColor:'#ffcc33'}}>
<img  src={yallowFace} />
<span>{Four} %</span>
</button>

):(
     <button className='Action-button-update'>
     <img  src={yallowFace} />
     <span>{Four} %</span>
     </button>
)}

{/* /////////////////////////////////////////////////four/////////////////////////////////////////////////// */}


 

{three_stars.length > four_stars.length && three_stars.length > five_stars.length ?(

<button className='Action-button-update' style={{backgroundColor:'#7b1113'}}>
<img  src={redFace} />
<span>{Three} %</span>
</button>

):(

     <button className='Action-button-update' style={{paddingTop:''}}>
     <img  src={redFace} />
     <span>{Three} %</span>
     </button>

)}





</div>
 
</Fragment>

):(

 
<Fragment> 
                   
 
  <form className="Login-form" style={{display:'flex', width:'100%'}} onSubmit={e => onSubmit(e)}>
 {/* <button onClick={() => addLike(_id)} >like</button> */}
 {/* {onmousemove =() => addLike(_id)} */}
 
               <input className="Forminput"
                style={{height:'2px',width:'10%' ,display:'none'}}
                 type="text" 
                 placeholder="rank"
                 autocomplete="off"
                 name='rank'
                 value={rank}
                 onChange={e => onChange(e)}
                 />
 
 
          <div style={{display:'flex', width:'100%'}}>
 
            {/* ///////////////////////////////////rating 5 stars//////////////////////////////////////////// */}

            {/* <p className="torate">How satisfied are you with this product?</p> */}

              <div className={myoption5}>
              <label  style={{fontSize:'26px'}} for='rank1'>
              <img  src={greenFace}  style={{cursor:'pointer'}} />
              </label>  
               
              <input className=""  type="radio" id='rank1'
              style={{backgroundColor:'#cacaca',color:'',marginBottom:'',width:'45px',height:'45px',display:'none',cursor:'pointer'}} 
              name='rank'
               value='5'
               onChange={e => onChange(e)}
               onClick={option5}
               
              /> 
           
             <div className={myoption55}>
             <button   type="submit" onClick={() => addFiveStars(_id)} className='Action-button-open' style={{width:'100%'}}>Send feedback</button>
             <button   type="reset"  onClick={option6} className='Action-button-open' style={{width:'100%'}}>&times; Not Sure</button>

             </div>

            </div>


{/* ///////////////////////////////////rating 4 stars//////////////////////////////////////////// */}

 

              <div className={myoption4} >
              <label  style={{fontSize:'24px'}} for='rank2'>
              <img  src={yallowFace}  style={{cursor:'pointer'}} />
               </label>  
               <input className=""  type="radio" id='rank2'
              style={{backgroundColor:'#cacaca',color:'',marginBottom:'',width:'45px',height:'45px',display:'none',cursor:'pointer'}} 
               name='rank'
               value='4'
               onChange={e => onChange(e)}
               //onClick={() => addFourStars(_id)}
               onClick={option4}
              />
               
              <div className={myoption44}>
             <button   type="submit" onClick={() => addFourStars(_id)} className='Action-button-open' style={{width:'100%'}}>Send feedback</button>
             <button   type="reset"  onClick={option6} className='Action-button-open' style={{width:'100%'}}>&times; Not Sure</button>

             </div>

              </div>


              {/* ///////////////////////////////////rating 3 stars//////////////////////////////////////////// */}

          
              <div className={myoption3} >
              <label  style={{fontSize:'24px'}} for='rank3'>
              <img  src={redFace} style={{cursor:'pointer'}} />
               </label>  
               <input className=""  type="radio" id='rank3'
              style={{backgroundColor:'#cacaca',color:'',marginBottom:'',width:'45px',height:'45px', display:'none',cursor:'pointer'}} 
               name='rank'
               value='3'
               onChange={e => onChange(e)}
               //onClick={() => addThreeStars(_id)}
               onClick={option3}
              /> 
              
              <div className={myoption33}>
             <button   type="submit" onClick={() => addThreeStars(_id)} className='Action-button-open' style={{width:'100%'}}>Send feedback</button>
             <button   type="reset"  onClick={option6} className='Action-button-open' style={{width:'100%'}}>&times; Not Sure</button>
             </div>
              </div>


 




            </div>

            </form>
          
   </Fragment>

)}

  
  
   
 
  


   


         




  



 </center> 

{/* /////////////////////////////////////////////////////////plus1//////////////////////////////////////////////////////// */}
 
{title1 && (
<button style={{backgroundColor:'#007bb8',fontSize:'22px',width:'100%'}}
  onClick={() => toggleInputs1(!displayInputs1)}
  type='button'
  className='momadbtn'
>
More Details <i class="fa fa-arrow-down fa-1x"></i>
</button>
)}


{displayInputs1 && (
  <Fragment>
       <>




 {title1 && (
      <h1  className="details-title" style={{fontSize:'24px',textAlign:'center',fontWeight:'bold',color:'#000',direction:''}} > 
       {title1} </h1>
      )}

 <div style={{width:'100%',display:''}}>


      
     <div  style={{width:'100%'}}>
     {pic1 && (
      <img  className="detail-picture" alt={title1}
      src={pic1} 
      alt={title1}
      style={{width:'100%',height:'',marginBottom:'10px'}}/>
       )}
      </div>




 
<div style={{width:'100%'}}>
      {Paragraph1 && (
      <p className="about-paragraph">
      {Paragraph1}          		
      </p>
      )}


      {link1 && (
      <p> 
       <a href={link1}
       target="_blank"
       style={{float:'',fontsize:'24px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt1}</a>
       </p>
      )}
     </div>


 </div>
    
   {/* /////////////////////////////////////////////////////////plus2//////////////////////////////////////////////////////// */}

   {title2 && (
      <h2  className="details-title" style={{fontSize:'24px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title2} </h2>
      )}

 <div style={{width:'100%',display:''}}>


 
<div style={{width:'100%'}}>
      {Paragraph2 && (
      <p className="about-paragraph">
      {Paragraph2}          		
      </p>
      )}


      {link2 && (
      <p> 
       <a href={link2}
       target="_blank"
       style={{float:'',fontsize:'24px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt2}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic2 && (
      <img  className="detail-picture" alt={title1}
      src={pic2} 
      alt={title2}
      style={{width:'100%',height:'',marginBottom:'10px'}}/>
       )}
      </div>


 </div>




   {/* /////////////////////////////////////////////////////////plus3//////////////////////////////////////////////////////// */}
   {title3 && (
      <h3  className="details-title" style={{fontSize:'24px',textAlign:'center',fontWeight:'bold',color:'#000',direction:''}} > 
       {title3} </h3>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph3 && (
      <p className="about-paragraph">
      {Paragraph3}          		
      </p>
      )}


      {link3 && (
      <p> 
       <a href={link3}
       target="_blank"
       style={{float:'',fontsize:'34px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt3}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic3 && (
      <img  className="detail-picture" alt={title3}
      src={pic3} 
      alt={title3}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>




   {/* /////////////////////////////////////////////////////////plus4//////////////////////////////////////////////////////// */}

   {title4 && (
      <h4  className="details-title" style={{fontSize:'24px',textAlign:'center',fontWeight:'bold',color:'#000',direction:''}} > 
       {title4} </h4>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph4 && (
      <p className="about-paragraph">
      {Paragraph4}          		
      </p>
      )}


      {link4 && (
      <p> 
       <a href={link4}
       target="_blank"
       style={{float:'',fontsize:'44px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt4}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic4 && (
      <img  className="detail-picture" alt={title4}
      src={pic4} 
      alt={title4}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>





 {/* /////////////////////////////////////////////////////////plus5//////////////////////////////////////////////////////// */}
 
{title5 && (
      <h5  className="details-title" style={{fontSize:'24px',textAlign:'center',fontWeight:'bold',color:'#000',direction:''}} > 
       {title5} </h5>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph5 && (
      <p className="about-paragraph">
      {Paragraph5}          		
      </p>
      )}


      {link5 && (
      <p> 
       <a href={link5}
       target="_blank"
       style={{float:'',fontsize:'55px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt5}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic5 && (
      <img  className="detail-picture" alt={title5}
      src={pic5} 
      alt={title5}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>





 {/* /////////////////////////////////////////////////////////plus6//////////////////////////////////////////////////////// */}
 
{title6 && (
      <h6  className="details-title" style={{fontSize:'24px',textAlign:'center',fontWeight:'bold',color:'#000',direction:''}} > 
       {title6} </h6>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph6 && (
      <p className="about-paragraph">
      {Paragraph6}          		
      </p>
      )}


      {link6 && (
      <p> 
       <a href={link6}
       target="_blank"
       style={{float:'',fontsize:'66px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt6}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic6 && (
      <img  className="detail-picture" alt={title6}
      src={pic6} 
      alt={title6}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>




 {/* /////////////////////////////////////////////////////////plus7//////////////////////////////////////////////////////// */}
 
{title7 && (
      <h1  className="details-title" style={{fontSize:'24px',textAlign:'center',fontWeight:'bold',color:'#000',direction:''}} > 
       {title7} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph7 && (
      <p className="about-paragraph">
      {Paragraph7}          		
      </p>
      )}


      {link7 && (
      <p> 
       <a href={link7}
       target="_blank"
       style={{float:'',fontsize:'17px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt7}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic7 && (
      <img  className="detail-picture" alt={title7}
      src={pic7} 
      alt={title7}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>






{/* /////////////////////////////////////////////////////////plus8//////////////////////////////////////////////////////// */}
 
{title8 && (
      <h8  className="details-title" style={{fontSize:'24px',textAlign:'center',fontWeight:'bold',color:'#000',direction:''}} > 
       {title8} </h8>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph8 && (
      <p className="about-paragraph">
      {Paragraph8}          		
      </p>
      )}


      {link8 && (
      <p> 
       <a href={link8}
       target="_blank"
       style={{float:'',fontsize:'88px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt8}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic8 && (
      <img  className="detail-picture" alt={title8}
      src={pic8} 
      alt={title8}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>




 {/* /////////////////////////////////////////////////////////plus9//////////////////////////////////////////////////////// */}
 
{title9 && (
      <h1  className="details-title" style={{fontSize:'24px',textAlign:'center',fontWeight:'bold',color:'#000',direction:''}} > 
       {title9} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph9 && (
      <p className="about-paragraph">
      {Paragraph9}          		
      </p>
      )}


      {link9 && (
      <p> 
       <a href={link9}
       target="_blank"
       style={{float:'',fontsize:'99px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt9}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic9 && (
      <img  className="detail-picture" alt={title9}
      src={pic9} 
      alt={title9}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>





 {/* /////////////////////////////////////////////////////////plus10//////////////////////////////////////////////////////// */}
 
{title10 && (
      <h10  className="details-title" style={{fontSize:'24px',textAlign:'center',fontWeight:'bold',color:'#000',direction:''}} > 
       {title10} </h10>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph10 && (
      <p className="about-paragraph">
      {Paragraph10}          		
      </p>
      )}


      {link10 && (
      <p> 
       <a href={link10}
       target="_blank"
       style={{float:'',fontsize:'1010px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt10}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic10 && (
      <img  className="detail-picture" alt={title10}
      src={pic10} 
      alt={title10}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>




{/* /////////////////////////////////////////////////////////plus11//////////////////////////////////////////////////////// */}
 
{title11 && (
      <h1  className="details-title" style={{fontSize:'19px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title11} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph11 && (
      <p className="about-paragraph">
      {Paragraph11}          		
      </p>
      )}


      {link11 && (
      <p> 
       <a href={link11}
       target="_blank"
       style={{float:'',fontsize:'19px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt11}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic11 && (
      <img  className="detail-picture" alt={title11}
      src={pic11} 
      alt={title11}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>






 {/* /////////////////////////////////////////////////////////plus12//////////////////////////////////////////////////////// */}
 
{title12 && (
      <h1  className="details-title" style={{fontSize:'19px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title12} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph12 && (
      <p className="about-paragraph">
      {Paragraph12}          		
      </p>
      )}


      {link12 && (
      <p> 
       <a href={link12}
       target="_blank"
       style={{float:'',fontsize:'19px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt12}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic12 && (
      <img  className="detail-picture" alt={title12}
      src={pic12} 
      alt={title12}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>





 {/* /////////////////////////////////////////////////////////plus13//////////////////////////////////////////////////////// */}
 
{title13 && (
      <h1  className="details-title" style={{fontSize:'19px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title13} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph13 && (
      <p className="about-paragraph">
      {Paragraph13}          		
      </p>
      )}


      {link13 && (
      <p> 
       <a href={link13}
       target="_blank"
       style={{float:'',fontsize:'19px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt13}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic13 && (
      <img  className="detail-picture" alt={title13}
      src={pic13} 
      alt={title13}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>




 {/* /////////////////////////////////////////////////////////plus14//////////////////////////////////////////////////////// */}
 
{title14 && (
      <h1  className="details-title" style={{fontSize:'19px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title14} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph14 && (
      <p className="about-paragraph">
      {Paragraph14}          		
      </p>
      )}


      {link14 && (
      <p> 
       <a href={link14}
       target="_blank"
       style={{float:'',fontsize:'19px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt14}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic14 && (
      <img  className="detail-picture" alt={title14}
      src={pic14} 
      alt={title14}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>






{/* /////////////////////////////////////////////////////////plus15//////////////////////////////////////////////////////// */}
 
{title15 && (
      <h1  className="details-title" style={{fontSize:'19px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title15} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph15 && (
      <p className="about-paragraph">
      {Paragraph15}          		
      </p>
      )}


      {link15 && (
      <p> 
       <a href={link15}
       target="_blank"
       style={{float:'',fontsize:'19px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt15}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic15 && (
      <img  className="detail-picture" alt={title15}
      src={pic15} 
      alt={title15}
      style={{width:'100%',height:'',marginBottom:'15px'}}/>
       )}
      </div>
 </div>







 {/* /////////////////////////////////////////////////////////plus16//////////////////////////////////////////////////////// */}
 
{title16 && (
      <h1  className="details-title" style={{fontSize:'19px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title16} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph16 && (
      <p className="about-paragraph">
      {Paragraph16}          		
      </p>
      )}


      {link16 && (
      <p> 
       <a href={link16}
       target="_blank"
       style={{float:'',fontsize:'19px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt16}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic16 && (
      <img  className="detail-picture" alt={title16}
      src={pic16} 
      alt={title16}
      style={{width:'100%',height:'',marginBottom:'16px'}}/>
       )}
      </div>
 </div>





 {/* /////////////////////////////////////////////////////////plus17//////////////////////////////////////////////////////// */}
 
{title17 && (
      <h1  className="details-title" style={{fontSize:'19px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title17} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph17 && (
      <p className="about-paragraph">
      {Paragraph17}          		
      </p>
      )}


      {link17 && (
      <p> 
       <a href={link17}
       target="_blank"
       style={{float:'',fontsize:'19px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt17}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic17 && (
      <img  className="detail-picture" alt={title17}
      src={pic17} 
      alt={title17}
      style={{width:'100%',height:'',marginBottom:'17px'}}/>
       )}
      </div>
 </div>






 {/* /////////////////////////////////////////////////////////plus18//////////////////////////////////////////////////////// */}
 
{title18 && (
      <h1  className="details-title" style={{fontSize:'19px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title18} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph18 && (
      <p className="about-paragraph">
      {Paragraph18}          		
      </p>
      )}


      {link18 && (
      <p> 
       <a href={link18}
       target="_blank"
       style={{float:'',fontsize:'19px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt18}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic18 && (
      <img  className="detail-picture" alt={title18}
      src={pic18} 
      alt={title18}
      style={{width:'100%',height:'',marginBottom:'18px'}}/>
       )}
      </div>
 </div>







 {/* /////////////////////////////////////////////////////////plus19//////////////////////////////////////////////////////// */}
 
{title19 && (
      <h1  className="details-title" style={{fontSize:'19px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title19} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph19 && (
      <p className="about-paragraph">
      {Paragraph19}          		
      </p>
      )}


      {link19 && (
      <p> 
       <a href={link19}
       target="_blank"
       style={{float:'',fontsize:'19px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt19}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic19 && (
      <img  className="detail-picture" alt={title19}
      src={pic19} 
      alt={title19}
      style={{width:'100%',height:'',marginBottom:'19px'}}/>
       )}
      </div>
 </div>






 {/* /////////////////////////////////////////////////////////plus20//////////////////////////////////////////////////////// */}
 
{title20 && (
      <h1  className="details-title" style={{fontSize:'20px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title20} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph20 && (
      <p className="about-paragraph">
      {Paragraph20}          		
      </p>
      )}


      {link20 && (
      <p> 
       <a href={link20}
       target="_blank"
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt20}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic20 && (
      <img  className="detail-picture" alt={title20}
      src={pic20} 
      alt={title20}
      style={{width:'100%',height:'',marginBottom:'20px'}}/>
       )}
      </div>
 </div>








 {/* /////////////////////////////////////////////////////////plus21//////////////////////////////////////////////////////// */}
 
{title21 && (
      <h1  className="details-title" style={{fontSize:'21px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title21} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph21 && (
      <p className="about-paragraph">
      {Paragraph21}          		
      </p>
      )}


      {link21 && (
      <p> 
       <a href={link21}
       target="_blank"
       style={{float:'',fontsize:'21px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt21}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic21 && (
      <img  className="detail-picture" alt={title21}
      src={pic21} 
      alt={title21}
      style={{width:'100%',height:'',marginBottom:'21px'}}/>
       )}
      </div>
 </div>






 {/* /////////////////////////////////////////////////////////plus22//////////////////////////////////////////////////////// */}
 
{title22 && (
      <h1  className="details-title" style={{fontSize:'22px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title22} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph22 && (
      <p className="about-paragraph">
      {Paragraph22}          		
      </p>
      )}


      {link22 && (
      <p> 
       <a href={link22}
       target="_blank"
       style={{float:'',fontsize:'22px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt22}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic22 && (
      <img  className="detail-picture" alt={title22}
      src={pic22} 
      alt={title22}
      style={{width:'100%',height:'',marginBottom:'22px'}}/>
       )}
      </div>
 </div>







 {/* /////////////////////////////////////////////////////////plus23//////////////////////////////////////////////////////// */}
 
{title23 && (
      <h1  className="details-title" style={{fontSize:'23px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title23} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph23 && (
      <p className="about-paragraph">
      {Paragraph23}          		
      </p>
      )}


      {link23 && (
      <p> 
       <a href={link23}
       target="_blank"
       style={{float:'',fontsize:'23px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt23}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic23 && (
      <img  className="detail-picture" alt={title23}
      src={pic23} 
      alt={title23}
      style={{width:'100%',height:'',marginBottom:'23px'}}/>
       )}
      </div>
 </div>







 {/* /////////////////////////////////////////////////////////plus24//////////////////////////////////////////////////////// */}
 
{title24 && (
      <h1  className="details-title" style={{fontSize:'24px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title24} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph24 && (
      <p className="about-paragraph">
      {Paragraph24}          		
      </p>
      )}


      {link24 && (
      <p> 
       <a href={link24}
       target="_blank"
       style={{float:'',fontsize:'24px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt24}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic24 && (
      <img  className="detail-picture" alt={title24}
      src={pic24} 
      alt={title24}
      style={{width:'100%',height:'',marginBottom:'24px'}}/>
       )}
      </div>
 </div>






 {/* /////////////////////////////////////////////////////////plus25//////////////////////////////////////////////////////// */}
 
{title25 && (
      <h1  className="details-title" style={{fontSize:'25px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title25} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph25 && (
      <p className="about-paragraph">
      {Paragraph25}          		
      </p>
      )}


      {link25 && (
      <p> 
       <a href={link25}
       target="_blank"
       style={{float:'',fontsize:'25px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt25}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic25 && (
      <img  className="detail-picture" alt={title25}
      src={pic25} 
      alt={title25}
      style={{width:'100%',height:'',marginBottom:'25px'}}/>
       )}
      </div>
 </div>





{/* /////////////////////////////////////////////////////////plus26//////////////////////////////////////////////////////// */}
 
{title26 && (
      <h1  className="details-title" style={{fontSize:'26px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title26} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph26 && (
      <p className="about-paragraph">
      {Paragraph26}          		
      </p>
      )}


      {link26 && (
      <p> 
       <a href={link26}
       target="_blank"
       style={{float:'',fontsize:'26px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt26}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic26 && (
      <img  className="detail-picture" alt={title26}
      src={pic26} 
      alt={title26}
      style={{width:'100%',height:'',marginBottom:'26px'}}/>
       )}
      </div>
 </div>









 {/* /////////////////////////////////////////////////////////plus27//////////////////////////////////////////////////////// */}
 
{title27 && (
      <h1  className="details-title" style={{fontSize:'27px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title27} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph27 && (
      <p className="about-paragraph">
      {Paragraph27}          		
      </p>
      )}


      {link27 && (
      <p> 
       <a href={link27}
       target="_blank"
       style={{float:'',fontsize:'27px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt27}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic27 && (
      <img  className="detail-picture" alt={title27}
      src={pic27} 
      alt={title27}
      style={{width:'100%',height:'',marginBottom:'27px'}}/>
       )}
      </div>
 </div>









 {/* /////////////////////////////////////////////////////////plus28//////////////////////////////////////////////////////// */}
 
{title28 && (
      <h1  className="details-title" style={{fontSize:'28px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title28} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph28 && (
      <p className="about-paragraph">
      {Paragraph28}          		
      </p>
      )}


      {link28 && (
      <p> 
       <a href={link28}
       target="_blank"
       style={{float:'',fontsize:'28px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt28}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic28 && (
      <img  className="detail-picture" alt={title28}
      src={pic28} 
      alt={title28}
      style={{width:'100%',height:'',marginBottom:'28px'}}/>
       )}
      </div>
 </div>









 {/* /////////////////////////////////////////////////////////plus29//////////////////////////////////////////////////////// */}
 
{title29 && (
      <h1  className="details-title" style={{fontSize:'29px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title29} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph29 && (
      <p className="about-paragraph">
      {Paragraph29}          		
      </p>
      )}


      {link29 && (
      <p> 
       <a href={link29}
       target="_blank"
       style={{float:'',fontsize:'29px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt29}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic29 && (
      <img  className="detail-picture" alt={title29}
      src={pic29} 
      alt={title29}
      style={{width:'100%',height:'',marginBottom:'29px'}}/>
       )}
      </div>
 </div>










 {/* /////////////////////////////////////////////////////////plus30//////////////////////////////////////////////////////// */}
 
{title30 && (
      <h1  className="details-title" style={{fontSize:'30px',textAlign:'left',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {title30} </h1>
      )}

 <div style={{width:'100%',display:''}}>

 
<div style={{width:'100%'}}>
      {Paragraph30 && (
      <p className="about-paragraph">
      {Paragraph30}          		
      </p>
      )}


      {link30 && (
      <p> 
       <a href={link30}
       target="_blank"
       style={{float:'',fontsize:'30px',fontWeight:'bold',color:'blue',textDecoration:'none'}}
       > {lt30}</a>
       </p>
      )}
     </div>


     <div  style={{width:'100%'}}>
     {pic30 && (
      <img  className="detail-picture" alt={title30}
      src={pic30} 
      alt={title30}
      style={{width:'100%',height:'',marginBottom:'30px'}}/>
       )}
      </div>
 </div>



 <button style={{backgroundColor:'#007bb8',fontSize:'22px',width:'100%'}}
  onClick={() => toggleInputs1(!displayInputs1)}
  type='button'
  className='momadbtn'
>
Less Details  <i class="fa fa-arrow-up fa-1x"></i>
</button>

 
</>
</Fragment>
)}

















 


    </div>
    </center> 
    </div>
    </div>
  </>



 

  // <div className='post bg-white p-1 my-1'>
  //   <div>
  //     <Link to={`/profile/${user}`}>
  //       <img className='round-img' src={avatar} alt='' />
  //       <h4>{name}</h4>
  //     </Link>
  //   </div>
  //   <div>
  //     <p className='my-1'>{title}</p>
  //     <p className='post-date'>
  //       Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
  //     </p>


  //     {showActions && (
  //       <Fragment>
  //         <button
  //           onClick={() => addLike(_id)}
  //           type='button'
  //           className='btn btn-light'
  //         >
  //           <i className='fas fa-thumbs-up' />{' '}
  //           <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
  //         </button>
  //         <button
  //           onClick={() => removeLike(_id)}
  //           type='button'
  //           className='btn btn-light'
  //         >
  //           <i className='fas fa-thumbs-down' />
  //         </button>
  //         <Link to={`/posts/${_id}`} className='btn btn-primary'>
  //           Discussion{' '}
  //           {comments.length > 0 && (
  //             <span className='comment-count'>{comments.length}</span>
  //           )}
  //         </Link>
  //         {!auth.loading && user === auth.user._id && (
  //           <button
  //             onClick={() => deletePost(_id)}
  //             type='button'
  //             className='btn btn-danger'
  //           >
  //             <i className='fas fa-times' />
  //           </button>
  //         )}
  //       </Fragment>
  //     )}
  //   </div>
  // </div>

  )
};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  
  addLike: PropTypes.func.isRequired,

  addFiveStars: PropTypes.func.isRequired,
  addFourStars: PropTypes.func.isRequired,
  addThreeStars: PropTypes.func.isRequired,
  addTwoStars: PropTypes.func.isRequired,
  addOneStars: PropTypes.func.isRequired,
  addVote: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost, addFiveStars, addFourStars, addThreeStars, addTwoStars,addOneStars ,addVote,logout }
)(PostItem);
