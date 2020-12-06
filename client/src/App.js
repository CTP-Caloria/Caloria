import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import RecipePage from './pages/RecipePage';
import DisplayMyRecipePage from './pages/DisplayMyRecipePage';
import AboutUsPage from './pages/AboutUsPage';
import CalorieJournalPage from './pages/CalorieJournalPage';
import SearchPage from './pages/SearchPage';
import CreatePage from './pages/CreatePage';
import Home from './pages/Home';
import RecipeBoxPage from './pages/RecipeBoxPage';
import FoodPage from './pages/FoodPage';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';
import NavigationLogout from './components/NavigationLogout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import auth from './services/auth'
import './App.css';

class App extends React.Component {
  state = {
  isAuthenticated: false,
}

componentDidMount() {
  auth.initialize()
    .then((req) => {
      console.log(req);
      this.setState({
        isAuthenticated: true,
      })
    })   
}

  render() {
    if(auth.isAuthenticated) {
      return (
        <Router>
          
          <Navigation />
          <div className="container-fluid mt-4">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/create-recipe" component={CreatePage} />
                <Route path="/recipe/:id" component={RecipePage} />
                <Route path="/displaymyrecipe/:id" component={DisplayMyRecipePage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/calorie-journal" component={CalorieJournalPage}/>
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
    else{
      return(
        <Router>
        
        <NavigationLogout/>
        <div className="container-fluid mt-4">
          <div className="row justify-content-center">
            <Switch>
              <Route path="/create-recipe" component={CreatePage} />
              <Route path="/recipe/:id" component={RecipePage} />
              <Route path="/displaymyrecipe/:id" component={DisplayMyRecipePage} />
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/calorie-journal" component={CalorieJournalPage}/>
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
}


export default App;
