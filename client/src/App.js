import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // NavLink,
  // Link
} from 'react-router-dom';
import RecipePage from './pages/RecipePage';
import AboutUsPage from './pages/AboutUsPage';
import CalorieJournalPage from './pages/CalorieJournalPage';
import SearchPage from './pages/SearchPage';
import CreatePage from './pages/CreatePage';
import Home from './pages/Home';
import RecipeBoxPage from './pages/RecipeBoxPage';
import FoodPage from './pages/FoodPage';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import jwt_decode from "jwt-decode";
// import API from "./utils/api";
// import AuthButton from './components/AuthButton';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div>
          <div className="row justify-content-center">
            <Switch>
              <Route path="/create-recipe" component={CreatePage} />
              <Route path="/recipe/:id" component={RecipePage} />
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/calorie-journal" component={CalorieJournalPage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/" exact={true} component={Home} />
              <Route path="/recipe-box" component={RecipeBoxPage}/>
              <Route path="/posts/:id" component={FoodPage}/>
              <Route path="/profile" component={Profile} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={RegisterPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
