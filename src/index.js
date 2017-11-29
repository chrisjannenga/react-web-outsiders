import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


import LandingPage from './components/LandingPage'
import OwnerCreate from './components/OwnerCreate'
import ShopperCreate from './components/ShopperCreate'
import OwnerTwoDashboard from './components/OwnerTwoDashboard'
import OwnerOneDashboard from './components/OwnerOneDashboard'
import OwnerThreeDashboard from './components/OwnerThreeDashboard'
import ShopperOneDashboard from './components/ShopperOneDashboard'
import ShopperTwoDashboard from './components/ShopperTwoDashboard'
import ShopperThreeDashboard from './components/ShopperThreeDashboard'

import CreateSurvey from './components/CreateSurvey'
import AddBusiness from './components/AddBusiness'
import ViewShoppers from './components/ViewShoppers'
import EditOwnerProfile from './components/EditOwnerProfile'
import EditOwnerProfileTwo from './components/EditOwnerProfileTwo'
import EditOwnerProfileThree from './components/EditOwnerProfileThree'
import OwnerOneSurveyView from './components/OwnerOneSurveyView'
import OwnerTwoSurveyView from './components/OwnerTwoSurveyView'
import OwnerThreeSurveyView from './components/OwnerThreeSurveyView'
import Logout from './components/Logout'

import ViewShopperOne from './components/ViewShopperOne'
import ViewShopperTwo from './components/ViewShopperTwo'
import ViewShopperThree from './components/ViewShopperThree'
import ViewShopperFour from './components/ViewShopperFour'
import ViewShopperFive from './components/ViewShopperFive'
import ViewShopperSix from './components/ViewShopperSix'
import ViewShopperSeven from './components/ViewShopperSeven'
import ViewShopperEight from './components/ViewShopperEight'
import ViewShopperNine from './components/ViewShopperNine'
import ViewShopperTen from './components/ViewShopperTen'

import ShopperOneEditProfile from './components/ShopperOneEditProfile'
import ShopperTwoEditProfile from './components/ShopperTwoEditProfile'
import ShopperThreeEditProfile from './components/ShopperThreeEditProfile'

import ViewAllSurveys from './components/ViewAllSurveys'

ReactDOM.render(
  <div>
    <Router>
      <div>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/owners' component={OwnerCreate} />
            <Route exact path='/shoppers' component={ShopperCreate} />
            <Route exact path='/owner/2' component={OwnerTwoDashboard}/>
            <Route exact path='/owner/1' component={OwnerOneDashboard} />
            <Route exact path='/owner/3' component={OwnerThreeDashboard} />
            <Route exact path='/shopper/1' component={ShopperOneDashboard} />
            <Route exact path='/shopper/2' component={ShopperTwoDashboard} />
            <Route exact path='/shopper/3' component={ShopperThreeDashboard} />
            <Route exact path='/createSurvey' component={CreateSurvey} />
            <Route exact path='/addBusiness' component={AddBusiness} />
            <Route exact path='/viewShoppers' component={ViewShoppers} />
            <Route exact path='/activeSurvey' component={OwnerOneSurveyView} />
            <Route exact path='/editOwnerProfile' component={EditOwnerProfile}  />
            <Route exact path='/editOwnerProfile/owner/3' component={EditOwnerProfileThree}  />
            <Route exact path='/logOut' component={Logout} />
            <Route exact path='/owner/1/survey/1' component={OwnerOneSurveyView} />
            <Route exact path='/owner/2/survey/1' component={OwnerTwoSurveyView} />
            <Route exact path='/owner/3/survey/1' component={OwnerThreeSurveyView} />
            <Route exact path='/shopper/1/survey/1' component={OwnerOneSurveyView} />
            <Route exact path='/shopper/2/survey/1' component={OwnerTwoSurveyView} />
            <Route exact path='/shopper/3/survey/1' component={OwnerThreeSurveyView} />
            <Route exact path='/viewShopper/1' component={ViewShopperOne} />
            <Route exact path='/viewShopper/2' component={ViewShopperTwo} />
            <Route exact path='/viewShopper/3' component={ViewShopperThree} />
            <Route exact path='/viewShopper/4' component={ViewShopperFour} />
            <Route exact path='/viewShopper/5' component={ViewShopperFive} />
            <Route exact path='/viewShopper/6' component={ViewShopperSix} />
            <Route exact path='/viewShopper/7' component={ViewShopperSeven} />
            <Route exact path='/viewShopper/8' component={ViewShopperEight} />
            <Route exact path='/viewShopper/9' component={ViewShopperNine} />
            <Route exact path='/viewShopper/10' component={ViewShopperTen} />
            <Route exact path='/shopper/1/editProfile' component={ShopperOneEditProfile} />
            <Route exact path='/shopper/2/editProfile' component={ShopperTwoEditProfile} />
            <Route exact path='/shopper/3/editProfile' component={ShopperThreeEditProfile} />
            <Route exact path='/viewSurveys/all' component={ViewAllSurveys} />
          </div>
    </Router>
  </div>,
    document.getElementById('root'));
registerServiceWorker();
