import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import MyProfile from '../auth/MyProfile';
import users from '../auth/users'; 
import EditUser from '../auth/EditUser';
 
import RegisterByRef from '../auth/RegisterByRef';
import CreateAccount from '../auth/create-account';
import VisualCode from '../auth/VisualCode';
import affiliate from '../layout/affiliate';
  
 import Login from '../auth/Login';

import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import CreateShop from '../profile-forms/CreateShop';
  
import EditShop from '../profile-forms/EditShop';
import Editoo from '../profile-forms/Editoo';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Shops';
import Shops from '../profiles/Shops'; 
import ShopsandMarket from '../profile/ShopsandMarket';
import myshop from '../profile/myshop';
import followers from '../followups/followers'; 
import following from '../followups/following'; 

import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import AdminPosts from '../posts/AdminPosts';
import userPosts from '../posts/userPosts';
import Post from '../post/Post';
import onepost from '../posts/onepost';

import Addpost from '../posts/Addpost';
import AddPremiumPost from '../posts/AddPremiumPost';
import editPost from '../posts/editPost';
import homePage from '../posts/homePage';
import mainPage from '../posts/mainPage';
import mainCity from '../posts/mainCity';
import mainMarket from '../posts/mainMarket';
 
import mainPurpose from '../posts/mainPurpose';
import mainCategory from '../posts/mainCategory';
 
    
import editPostActivate from '../posts/editPostActivate';


import searchPost from '../posts/searchPost';
import searchAdminPost from '../posts/searchAdminPost';
 
 
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';


import reputations from '../pages/Reputations';
import about from '../pages/about';
import registrationMethod from '../pages/registrationMethod';
import howItWorks from '../pages/howItWorks';
 

import privacy from '../pages/privacy';
import terms from '../pages/terms';
import contact from '../pages/contact';
import webinars from '../pages/webinars';
import WebinarsRegistration from '../pages/WebinarsRegistration';


import Markets from '../markets/Markets';
import Addmarket from '../markets/Addmarket';
import editMarket from '../markets/edit-market';


import Categories from '../categories/Categories';
import Addcategory from '../categories/Addcategory';
import editCategory from '../categories/editCategory';
import displayCategoryItems from '../posts/displayCategoryItems';

 
 
import Questions from '../questions/Questions';
import Addquestion from '../questions/Addquestion';
import editQuestion from '../questions/editQuestion';

import Products from '../products/Products';
import Addproduct from '../products/Addproduct';
import productApp from '../products/productApp';
 
 

import Addcountry from '../countries/addCountry';
import countries from '../countries/countries';
import editCountry from '../countries/editCountry';
import editCity from '../countries/editCity';
import addCity from '../countries/addCity';

 
import addReset from '../auth/addReset'
import addRegister from '../auth/addRegister'
import addRegisterRef from '../auth/addRegisterRef'

import Reset from '../auth/Reset'
import NewPassword from '../auth/Newpassword'
import emailSendingComfirmation from '../auth/emailSendingComfirmation'
import emailSendingRegistration from '../auth/emailSendingRegistration'


import topRanked from '../posts/topRanked';

import prices from '../layout/prices';
import membershipGolden from '../layout/membership-golden';
import membershipSilver from '../layout/membership-silver';
import membershipBronze from '../layout/membership-bronze';
import membershipSpecial from '../layout/membership-special';
import membershipFree from '../layout/membership-free';
 
import profitRequest from '../requests/RequestForm';
import requests from '../requests/requests';


import chat from '../messages/Chat';
import chats from '../messages/Chats';

import success from '../layout/success';
import cancel from '../layout/cancel';


import Addpurpose from '../purposes/Addpurpose';
import EditPurpose from '../purposes/EditPurpose';


import Addmembershiptype from '../membershiptypes/Addmembershiptype';
import EditMembershipType from '../membershiptypes/EditMembershipType';

// import Singup from '../Singup/index';
// import Login from '../Login/index';
// import EmailVerify from "../EmailVerify/index";


const Routes = () => {
  return (
    <section className='container'>
     

     {/* <Alert /> */}
     

      <Switch>
      
      <Route exact path='/payment/success' component={success} />
      <Route exact path='/payment/cancel' component={cancel} />

  
        <Route exact path='/company/reputations' component={reputations} />

        <Route exact path='/company/about' component={about} />
        <Route exact path='/:lang/company/about' component={about} />

        <Route exact path='/user/registrationMethod' component={registrationMethod} />
        <Route exact path='/:lang/user/registrationMethod' component={registrationMethod} />

        <Route exact path='/affiliate/howItWorks' component={howItWorks} />
        <Route exact path='/:lang/affiliate/howItWorks' component={howItWorks} />
        
        

        <Route exact path='/company/terms' component={terms} />
        <Route exact path='/:lang/company/terms' component={terms} />

        <Route exact path='/company/privacy' component={privacy} />
        <Route exact path='/:lang/company/privacy' component={privacy} />

        <Route exact path='/company/contact' component={contact} />
        <Route exact path='/:lang/company/contact' component={contact} />

        <Route exact path='/company/webinars' component={webinars} />
        <Route exact path='/company/WebinarsRegistration' component={WebinarsRegistration} />
        {/* <Route exact path='/FileUpload' component={FileUpload} /> */}
        


        {/* <Route exact path='/UploadProductPage' component={UploadProductPage} /> */}
        {/* <Route exact path='/:lang/user/register' component={Register} />
        <Route exact path='/user/register' component={Register} /> */}
        <PrivateRoute exact path='/dashboard/MyProfile' component={MyProfile} />
        <PrivateRoute exact path='/:lang/dashboard/MyProfile' component={MyProfile} />

        <PrivateRoute exact path='/:lang/dashboard/users' component={users} />
        <PrivateRoute exact path='/dashboard/users' component={users} />

        <PrivateRoute exact path='/:lang/dashboard/users/editUser/:id' component={EditUser} />
        <PrivateRoute exact path='/dashboard/users/editUser/:id' component={EditUser} />
        
        

        

        <Route exact path='/user/Register/:id' component={Register} />
        <Route exact path='/:lang/user/Register/:id' component={Register} />
        <Route exact path='/RegisterByRef/:id' component={RegisterByRef} />
        <Route exact path='/CreateAccount' component={CreateAccount} />
        <Route exact path='/CreateAccount/:id' component={CreateAccount} />
        <PrivateRoute exact path='/user/VisualCode' component={VisualCode} />
        <Route exact path='/affiliate' component={affiliate} />
        
          
        
        <Route exact path='/:lang/user/login' component={Login} />
        <Route exact path='/user/login' component={Login} />

        <Route exact path='/shops' component={Shops} />
        <Route exact path='/:lang/shops' component={Shops} />
        

 

        <Route exact path='/:lang/shops/:username' component={myshop} />
        <Route exact path='/shops/:username' component={myshop} />

        <Route exact path='/shops/:username/followers' component={followers} />
        <Route exact path='/:lang/shops/:username/followers' component={followers} />

        <Route exact path='/shops/:username/following' component={following} />
        <Route exact path='/:lang/shops/:username/following' component={following} />
        

        <Route exact path='/shops/:username/:market_code' component={ShopsandMarket} />



        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/dashboard/main' component={Dashboard} />
        <PrivateRoute exact path='/:lang/dashboard/main' component={Dashboard} />

        <PrivateRoute exact path='/dashboard/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/dashboard/create-shop' component={CreateShop} />
        <PrivateRoute exact path='/:lang/dashboard/create-shop' component={CreateShop} />


     

        
 

        {/* <PrivateRoute exact path='/dashboard/edit-shop' component={EditShop} />
        <PrivateRoute exact path='/:lang/dashboard/edit-shop' component={EditShop} /> */}

        <PrivateRoute exact path='/dashboard/shops/edit' component={Editoo} />
        <PrivateRoute exact path='/:lang/dashboard/shops/edit' component={Editoo} />
        

        


        
        <PrivateRoute exact path='/dashboard/edit-profile' component={EditProfile} />

        {/* <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />  */}
 
        <PrivateRoute exact path='/:lang/dashboard/posts' component={Posts} />
        <PrivateRoute exact path='/dashboard/posts' component={Posts} />


        <PrivateRoute exact path='/:lang/dashboard/AdminPosts' component={AdminPosts} />
        <PrivateRoute exact path='/dashboard/AdminPosts' component={AdminPosts} />

 
        

        <PrivateRoute exact path='/userPosts' component={userPosts} />

        <Route exact path='/posts/:id' component={Post} />
        <Route exact path='/:country/:city/:market/:purpose_code/posts/:id' component={Post} />
  
        <PrivateRoute exact path='/onepost/:id' component={onepost} />

        <Route exact path='/displayCategoryItems/:id' component={displayCategoryItems} />


        

        

 
  {/* affiliate section */}

        <PrivateRoute exact path='/dashboard/posts/Addpost' component={Addpost} />
        <PrivateRoute exact path='/dashboard/posts/AddPremiumPost' component={AddPremiumPost} /> 
        <PrivateRoute exact path='/dashboard/posts/editPost/:id' component={editPost} />

        <PrivateRoute exact path='/:lang/dashboard/posts/Addpost' component={Addpost} />
        <PrivateRoute exact path='/:lang/dashboard/posts/AddPremiumPost' component={AddPremiumPost} /> 
        <PrivateRoute exact path='/:lang/dashboard/posts/editPost/:id' component={editPost} />



        <Route exact path='/home/:id' component={homePage} />
        <Route exact path='/main/:id' component={mainPage} />
        <Route exact path='/main/:id/:city' component={mainCity} />
        <Route exact path='/main/:id/:city/:market_code' component={mainMarket} />
 
 
        <Route exact path='/main/:id/:city/:market_code/:purpose_code' component={mainPurpose} />
        
        <Route exact path='/main/:id/:city/:market_code/:purpose_code/:category_code' component={mainCategory} />
       
        <Route exact path='/main/:country/:city/:market_code/:purpose_code/:category_code/posts/:id' component={Post} />

 
        
        
        <PrivateRoute exact path='/dashboard/posts/editPostActivate/:id' component={editPostActivate} />
        <PrivateRoute exact path='/dashboard/posts/searchPost' component={searchPost} />
 

        <PrivateRoute exact path='/:lang/dashboard/posts/editPostActivate/:id' component={editPostActivate} />
        <PrivateRoute exact path='/:lang/dashboard/posts/searchPost' component={searchPost} />


        <PrivateRoute exact path='/dashboard/posts/searchAdminPost' component={searchAdminPost} />
        <PrivateRoute exact path='/:lang/dashboard/posts/searchAdminPost' component={searchAdminPost} />


        
        

        <PrivateRoute exact path='/dashboard/markets' component={Markets} />
        <PrivateRoute exact path='/dashboard/Addmarket' component={Addmarket} />
        <PrivateRoute exact path='/dashboard/editMarket/:id' component={editMarket} />

        <PrivateRoute exact path='/:lang/dashboard/markets' component={Markets} />
        <PrivateRoute exact path='/:lang/dashboard/Addmarket' component={Addmarket} />
        <PrivateRoute exact path='/:lang/dashboard/editMarket/:id' component={editMarket} />


         

        
        <PrivateRoute exact path='/dashboard/categories' component={Categories} />
        <PrivateRoute exact path='/dashboard/categories/Addcategory' component={Addcategory} />
        <PrivateRoute exact path='/dashboard/categories/editCategory/:id' component={editCategory} />


        <PrivateRoute exact path='/:lang/dashboard/categories' component={Categories} />
        <PrivateRoute exact path='/:lang/dashboard/categories/Addcategory' component={Addcategory} />
        <PrivateRoute exact path='/:lang/dashboard/categories/editCategory/:id' component={editCategory} />

        



        

 
        

        
        <PrivateRoute exact path='/questions' component={Questions} />
        <PrivateRoute exact path='/Addquestion' component={Addquestion} />
        <PrivateRoute exact path='/editQuestion/:id' component={editQuestion} />

        

        
        <PrivateRoute exact path='/products' component={Products} />
        <PrivateRoute exact path='/Addproduct' component={Addproduct} />
        <PrivateRoute exact path='/productApp' component={productApp} />

 

 

        <PrivateRoute exact path='/dashboard/Addcountry' component={Addcountry} />
        <PrivateRoute exact path='/dashboard/countries' component={countries} />
        <PrivateRoute exact path='/dashboard/editCountry/:id' component={editCountry} />
        <PrivateRoute exact path='/dashboard/editCity/:id' component={editCity} />
        <PrivateRoute exact path='/dashboard/addCity/:id' component={addCity} />


        <PrivateRoute exact path='/:lang/dashboard/Addcountry' component={Addcountry} />
        <PrivateRoute exact path='/:lang/dashboard/countries' component={countries} />
        <PrivateRoute exact path='/:lang/dashboard/editCountry/:id' component={editCountry} />
        <PrivateRoute exact path='/:lang/dashboard/addCity/:id' component={addCity} />


          
   
        <Route exact path='/user/createAccount/:ref' component={addRegisterRef} />
        <Route exact path='/user/createAccount' component={addRegister} />

        <Route exact path='/user/forgot-password' component={addReset} />
        <Route exact path='/user/Reset' component={Reset} />
        <Route exact path='/user/NewPassword' component={NewPassword} />
        <Route exact path='/user/NewPassword/:id' component={NewPassword} />
        <Route exact path='/user/emailSendingComfirmation' component={emailSendingComfirmation} />
        <Route exact path='/user/emailSendingRegistration' component={emailSendingRegistration} />


        


        <Route exact path='/:lang/user/createAccount/:ref' component={addRegisterRef} />
        <Route exact path='/:lang/user/createAccount' component={addRegister} />
        <Route exact path='/:lang/user/forgot-password' component={addReset} />
        <Route exact path='/:lang/user/Reset' component={Reset} />
        <Route exact path='/:lang/user/NewPassword' component={NewPassword} />
        <Route exact path='/:lang/user/NewPassword/:id' component={NewPassword} />
        <Route exact path='/:lang/user/emailSendingComfirmation' component={emailSendingComfirmation} />
        <Route exact path='/:lang/user/emailSendingRegistration' component={emailSendingRegistration} />


 
        <Route exact path='/topRanked' component={topRanked} />

        <Route exact path='/membership/prices' component={prices} />
        <Route exact path='/:lang/membership/prices' component={prices} />

        <PrivateRoute exact path='/membership/prices/golden' component={membershipGolden} />
        <PrivateRoute exact path='/membership/prices/silver' component={membershipSilver} />
        <PrivateRoute exact path='/membership/prices/bronze' component={membershipBronze} />
        <PrivateRoute exact path='/membership/prices/special' component={membershipSpecial} />
        <PrivateRoute exact path='/membership/prices/free' component={membershipFree} />
        

        <PrivateRoute exact path='/:lang/membership/prices/golden' component={membershipGolden} />
        <PrivateRoute exact path='/:lang/membership/prices/silver' component={membershipSilver} />
        <PrivateRoute exact path='/:lang/membership/prices/bronze' component={membershipBronze} />
        <PrivateRoute exact path='/:lang/membership/prices/special' component={membershipSpecial} />
        <PrivateRoute exact path='/:lang/membership/prices/free' component={membershipFree} />

           
        <PrivateRoute exact path='/profitRequest' component={profitRequest} />
        <PrivateRoute exact path='/ar/dashboard/requests' component={requests} />



        
        

        {/* <PrivateRoute exact path='/:lang/dashboard/chat' component={chat} />
        <PrivateRoute exact path='/dashboard/chat' component={chat} /> */}
        <PrivateRoute exact path='/:lang/dashboard/chat/:id' component={chat} />
        <PrivateRoute exact path='/dashboard/chat/:id' component={chat} />
 


        <PrivateRoute exact path='/:lang/dashboard/chats' component={chats} />
        <PrivateRoute exact path='/dashboard/chats' component={chats} />
        
        
        <PrivateRoute exact path='/dashboard/Addpurpose' component={Addpurpose} />
        <PrivateRoute exact path='/:lang/dashboard/Addpurpose' component={Addpurpose} />

        <PrivateRoute exact path='/dashboard/EditPurpose/:id' component={EditPurpose} />

        
        <PrivateRoute exact path='/dashboard/Addmembershiptype' component={Addmembershiptype} />
        <PrivateRoute exact path='/:lang/dashboard/Addmembershiptype' component={Addmembershiptype} />
        <PrivateRoute exact path='/dashboard/EditMembershipType/:id' component={EditMembershipType} />

        
        
  
        {/* <Route exact path='/user/Singup' component={Singup} />
        <Route exact path='/:lang/user/Singup' component={Singup} />

        <Route path="/users/:id/verify/:token" component={EmailVerify} />
        <Route path="/:lang/users/:id/verify/:token" component={EmailVerify} /> */}

        






        <Route component={NotFound} />
       
        
      
       

        

      </Switch>
    </section>
  );
};

export default Routes;
