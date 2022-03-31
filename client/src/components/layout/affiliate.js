import React, { Fragment, useEffect ,useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import Moment from 'react-moment';
import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
  

import PropTypes from 'prop-types';
import axios from 'axios';
import { Input } from 'postcss';
     
const Register = ({ setAlert ,register, isAuthenticated, match }) => {

  const  freeDate= moment();
  freeDate.add(5,'days') 


  const [search,setSearch]= useState("")
  
  const [visualCode,setVisualCode]= useState([])
  const [userInfo,setUserInfo]= useState([])
  // const [alert,setAlert]= useState('')
  const [geolocation,setgeolocation]= useState([])

  const country_name = geolocation.country_name;
  const country_code = geolocation.country_code;
  const city = geolocation.city;
  const state = geolocation.state;
  const postal = geolocation.postal;
  const latitude = geolocation.latitude;
  const longitude = geolocation.longitude;
  const IPv4 = geolocation.IPv4;
  const validity='normal';
  const shopname = '';
  const shopstatus='closed';
  const ref = match.params.id;
  const membership_class = 'free';
  const available_ads = 2;
  const membership_renewal_date = Date.now();
  const membership_renewal_expiry_date = freeDate;
 const visualCodeShow = visualCode.visual_code;
 


  const [formData, setFormData] = useState({
    name: '',
    username:'',
    email: '',
    password: '',
    password2: '',
    Visual_Code:''

  }); 
  
  const { name,username, email, password, password2, Visual_Code} = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


   
   
  const onSubmit = async e => {
    e.preventDefault();
    if (name === '') { 
      setAlert('الاسم مطلوب');
    }
    else if (username === '') { 
      setAlert('اسم المستخدم مطلوب');
    }
    else if (email === '') { 
      setAlert('البريد الالكتروني مطلوب');
    }
    else if (password === '') { 
      setAlert('كلمة المرور مطلوبة');
    }

    else if (password !== password2) { 
      setAlert('كلمة المرور غير مطابقة');
    }

    else if (Visual_Code === '') { 
      setAlert('الرمز المرئي مطلوب');
    }

    else if (Visual_Code !== visualCodeShow) { 
      setAlert('الرمز المرئي غير مطابق');
    }
     
    
     else{ register({ name,username, email, password,validity,country_name,country_code, city, state, postal, latitude, longitude, IPv4, shopname, shopstatus, ref, membership_class,available_ads,membership_renewal_date, membership_renewal_expiry_date,Visual_Code });
    }
  };


    
  useEffect(() => {

    axios.get('https://geolocation-db.com/json/297364b0-2bc6-11ec-a8a6-1fc54772a803')
    .then(res => {
      setgeolocation(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
 
 
    axios.get('/api/auth/allusers')
    .then(res => {
      setUserInfo(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    axios.get('/api/auth/visualcodeshow')
    .then(res => {
      setVisualCode(res.data)
    })
    .catch((err) => {
      console.log(err);
    })

 


 }, []);


 



 
  return (
    <Fragment>
     <div className="aqle3-main" >
      <div className="mainword2">
      <div className="mainForm">

   
     
       


      <center> 
      <div className="affiliate-nav">
      <div className="affiliateTitle" >التسويق بالعمولة لموقع أبو فايز  </div>

      <p className="affiliateText">
      إن كنت تعرض إعلانك في موقعنا أو كان لديك موقع أو حسابات في ‏الشبكات الاجتماعية والمنتديات ستتمكن من الاستفادة بالانضمام ‏لبرنامج التسويق بالعمولة وتحقيق دخل أفضل بسهولة. حيث سيدفع ‏لك موقعنا 3$ دولارات مقابل كل مستخدم جديد يسجل عن طريقك ‏بواسطة رابطك الخاص ويشترك في إحدى الباقات المعروضة في ‏الموقع‎.‎      
       </p>


       <div className="affiliateTitle" >لماذا الاشتراك في برنامج التسويق بالعمولة؟  </div>

       <p className="affiliateText">
       <ul className='DashBoxList'>
          <li>
          	يعد‎ ‎موقعنا  الأميز والأفضل للاعلان عن بيع أوشراء أوتاجير ‏الخدمات أوالمنتجات عن طريق الاشتراك بالباقات المميزة للعضوية.‏
           </li>

           <li>
           	إن كنت تعلن عن خدماتك أومنتجاتك، برنامج التسويق بالعمولة ‏سيساعدك على تحقيق دخل أعلى فقط بدعوة أصدقائك وزملائك في ‏العمل  للإعلان معك أيضا عن بيع أو شراء أو تأجير مختلف  ‏الخدمات والمنتجات في موقعنا.‏
           </li>


           <li>
           	ستربح مبلغ ‏‎3‎‏$ دولارات عمولة مقابل كل مستخدم جديد اشترك في  ‏إحدى الباقات المميزة (أي يجب أن يسجل المستخدم عن طريق‎ ‎رابطك الخاص ثم عليه أن يشترك بإحدى الباقات الإعلانية المميزة ‏كي تربح العمولة).‏
            </li>


            <li>
            يقدم موقعنا خدمة الإعلانات للعديد من الخدمات والمنتجات ‏المعروضة للبيع أو المرغوبة للشراء. بإمكانك الإعلان عن اي ‏خدمة أو منتج في اي سوق في أي بلد.‏
            </li>

            <li>
            	‏ ستتمكن من سحب الأرباح التي حققتها عن طريق‎ PayPal ‎فور ‏وصولها 10$ بشكل يومي أو استخدامها لترقية حسابك بالإشتراك ‏باحدى الباقات.‏
            </li>

            <li>
            	لا تعقيدات في الإنضمام إلى برنامجنا التسويقي، ولا تعقيدات في ‏عملية ادارة اعلاناتك ونشرها. ‏
            </li>

 

       </ul>

        </p>
  

        <div className="affiliateTitle" >كيف يمكنني التسويق لهذا الموقع بالعمولة؟  </div>

        <p className="affiliateText">
    <ul className='DashBoxList'>
    <li>
     	بعد التسجيل في الموقع قم بنشر الرابط الخاص بك في موقعك أو إحدى ‏صفحاتك على مواقع التواصل الإجتماعي
    </li>
  
    <li>
    	بإمكانك استخدام‎ ‎البنرات ووضعها في موقعك‎.‎  
      </li>

      <li>
      	كتابة مراجعة عن موقعنا وتوضيح تجربتك معنا‎.‎
      </li>



      <li>
      	القيام بحملات إعلانية لدعم وتعزيز ظهور رابطك الخاص‎.‎
        </li>

 

        <li>
        	هناك طرق مختلفة تعزز عملية التسويق وتزيد من ارباحك‎ ‎لك الحرية في ‏اختيار اي منها وفق الضوابط والشروط والأحكام.‏
        </li>
</ul>

</p>
      <center>
 
       </center>

       </div>
      </center>


    

      </div>
      </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
 
export default connect(
  mapStateToProps,
  { setAlert,register }
)(Register);
