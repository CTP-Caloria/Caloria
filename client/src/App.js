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



// function Navigation(props) {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
//         <Link className="navbar-brand" to="/">Logo</Link>

//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="responsive-navbar-nav">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//       <div id="navbar" className="collapse navbar-collapse">
//           <ul className="navbar-nav mr-auto">
            
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/home">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/search">
//                 Search
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/calorie-journal">
//                 Calorie Journal
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/recipe-box">
//                 Recipe Box 
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/create-recipe">
//                 Create Recipe
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/about-us">
//                 About Us
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/recipe">
//                 Recipe
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/food">
//                 Food
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/profile">
//                 Profile
//               </NavLink>

//             </li>
//             <li className="nav-item"><AuthButton /></li>
//           </ul>
//         </div>
//     </nav>
//   );
// }


class App extends React.Component {




  render() {
    return (
      <Router>
        <Navigation />
        <div className="container-fluid mt-4">
          <div className="row justify-content-center">
            <Switch>
              <Route path="/posts/new" component={CreatePage} />
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
