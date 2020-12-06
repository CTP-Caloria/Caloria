import React from 'react';
import { Link } from 'react-router-dom';

function SearchField(props) {
    return (
        <div className="col-12 mt-5 mb-4">
            <input 
                className="form-control input-large" 
                type="text" 
                onChange={ props.changed } 
                value={ props.value } 
                placeholder="Search..."
            />
        </div>
        
      );
  }

function DisplayMeal(props){
    return (
        <div className="card my-3 box col-sm-3 mx-3 px-0">
            <div className="card-header">
                {/* <a href={"http://localhost:3000/recipe/" + props.meal.strMeal}>{props.meal.strMeal}</a> */}
                <Link className="text-dark" to={`/recipe/${props.meal.strMeal}`}>{props.meal.strMeal}</Link>
            </div>
            <div className="card-body">
                <img className="rounded float-left w-50 mr-3" src={ props.meal.strMealThumb } alt={ props.meal.strMeal }/>
                <ul className="list-unstyled text-left">
                    <li><strong>Category:</strong> { props.meal.strCategory }</li>
                    <li><strong>Cuisine:</strong> { props.meal.strArea }</li>
                    <li><strong>Tags:</strong> { props.meal.strTags }</li>
                </ul>
            </div>
        </div>
    );
}

class SearchPage extends React.Component {
    state = {
        // error: false,
        // success: false,
        userInput: "",
        content: []

    }
       SearchPost =(e) => {  
        this.setState({
            userInput: e.target.value
        })

        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + e.target.value)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            if(json.meals!==null)
            {
                this.setState({
                    content: json.meals
                })
            }else{

                this.setState({
                    content: []
                }) 
            }
        })
        .catch(error => {console.log(error)
        });
    }

    render() {
        return (
            <div>
                <div id="background" />                           
                <div className="container">
                    <div className="row justify-content-center">
                        <SearchField changed={ (e) => this.SearchPost(e) } value={ this.state.userInput } />
                        {this.state.content.map((meal)=>{
                            return <DisplayMeal meal={meal}/>
                        })}
                    </div>
                </div> 
            </div>
            
        );
    }
}

export default SearchPage;