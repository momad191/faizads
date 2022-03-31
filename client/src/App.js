import React, { Fragment, useEffect ,useState } from 'react';
import { BrowserRouter as Router, Route, Switch,useParams  } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import NavbarEnglish from './components/layout/NavbarEnglish';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Home from './components/layout/home';
  
import Routes from './components/routing/Routes';
 
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
 
const App = () => {



  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
 

 

  return (
    <Provider store={store}>
      <Router>
        <Fragment>

       

     
          {/* <Navbar /> */}
         
         
           
          <Switch>
            <Route exact path='/:lang' component={Home} />
            <Route exact path='/' component={Home} />
           
            <Route component={Routes} />
           
            
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
