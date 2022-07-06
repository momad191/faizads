import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProfitRequest } from '../../actions/profitrequest';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
     
const RequestForm = ({setAlert,addProfitRequest}) => {

  const [t, i18next] = useTranslation()
  const [ShowButton,setShowButton]= useState('showButton11')

  const [AlertEnglish,setAlertEnglish]= useState('')
  
   
  const [RefToPay,setRefToPay]= useState([])
  const [ProfitCompleteRequest,setProfitCompleteRequest]= useState([])

  let total =0;
  ProfitCompleteRequest.forEach(p=>{
     total += p.amount;
    })

  const profit = (RefToPay.length*4) - (total);
  // const [markets11,setMarkets11]= useState([])
  //   const [image, setImage] = useState('')
  //   const [loading, setLoading] = useState(false)

  const amount = profit;
    // const [formData, setFormData] = useState({
    //   amount: '',
    //   });

      // const { amount } = formData;

      // const onChange = e =>
      // setFormData({ ...formData, [e.target.name]: e.target.value });
 
  
      const onSubmit = async e => {
        e.preventDefault();
        addProfitRequest({ amount});
         setAlert('تم تقديم الطلب');
         setAlertEnglish('The request has been submitted');
        
      };

      const hideButton = async e => {
        setShowButton('hideButton11')
    
    }


      useEffect(()=>{


        axios.get('/api/subscriptions/refToPayaffiliate')
        .then(res => {
          //console.log(res);
          setRefToPay(res.data)
        })
        .catch((err) => {
          console.log(err);
        })



        axios.get('/api/profitrequests/complete')
        .then(res => {
          //console.log(res);
          setProfitCompleteRequest(res.data)
        })
        .catch((err) => {
          console.log(err);
        })


      
        // axios.get('/api/markets')
        // .then(res => {
        //   console.log(res);
        // setMarkets11(res.data)
        // })
        // .catch((err) => {
        //   console.log(err);
        // })
     
     
 
      
    },[])


    return (
          
                  
        
                <div className="aqle3-main">
                <div className="mainword2">
                <div className="mainForm">
      
                {/* <div class="login-title"> <i class="fa fa-plus-circle"></i> اضافة تصنيف رئيسي جديد </div> */}
         
          
                <center> 
             
                <form className="login-form" onSubmit={e => onSubmit(e)}>
 
    
                {/* <div className=''>
                 <span>المبلغ </span> 
                <input className="FormCover"
                 type="text" 
                 placeholder=""
                 name="amount" 
                 value={profit} 
                // onChange={e => onChange(e)}
                 />
                 </div> */}
 
                 
              <center>
                {i18next.language === 'ar' && (
                  <Alert />
                )}

          {i18next.language === 'en' && (
                 <h1>{AlertEnglish}</h1>
                )}
                 
             

              <div className={ShowButton}> 
             <button className="Formbutton" onClick={hideButton}   type="submit" name="" >
              {i18next.language === 'ar'&& ( 
                <>سحب الارباح</>
              )}

              {i18next.language === 'en'&& ( 
                <>profit withdrawal</>
              )}
             

             </button>
             </div>

             </center>
             </form>
             </center>
        
 
                </div>
                </div>
                </div>
        
    
    )
}




RequestForm.propTypes = {
  addProfitRequest: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { setAlert,addProfitRequest }
  )(RequestForm);
