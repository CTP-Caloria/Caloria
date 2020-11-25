import React from 'react';
// import { Redirect } from 'react-router-dom';

// function Post(props) {
//     return (
//       <div className="col-10 col-md-8 col-lg-7">
//         <div className="card mb-4 shadow">
//           <div className="card-header">
//             { props.meal.strMeal }
//           </div>
//           <div className="card-body card-text">
//             { props.meal.strInstructions }
//           </div>
//         </div>
//       </div>
//     );
//   }

function SearchField(props) {
    return (
      <div className="text-center my-4">
        <input type="text" onChange={ props.changed } value={ props.value } placeholder="Search..." />
        {/* <p>You entered: { props.value }</p> */}
      </div>);
  }

function DisplayMeal(props){
    return (
        <div className="card my-3 box col-sm-3 mx-3">
            <div className="card-header">
                <a href={"http://localhost:3000/recipe/" + props.meal.strMeal}>{props.meal.strMeal}</a>
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
    // contentChanged = (e) => {
    //     this.setState({
    //         content: e.target.value
    //     });
    //     console.log(this.state.content);
    // }

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
            // this.setState({
            //     content: []
            // })
        });

     
    }


    render() {
        // if(this.state.success) return <Redirect to="/" />;

        // const content = this.state.content;
        // const recipeInfo = [];

        // for (let i=0; i < content.length; i++) {
        //     const isRecipe = content[i];

        //     recipeInfo.push (
        //         <Post
        //             key = {i}
        //             meal = {isRecipe['strMeal']}
        //             instructions = {isRecipe['strInstructions']}
        //         /> 
        //     )
        // }

        return (
            <div >
                <SearchField changed={ (e) => this.SearchPost(e) } value={ this.state.userInput } />
                {/* <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.content}
                    className="form-control mr-3 rounded"
                    changed={ (e) => this.SearchPost(e) }
                    
                /> */}
                <div className="row justify-content-center">
                    {this.state.content.map((meal)=>{
                        return <DisplayMeal meal={meal}/>
                    })}
                </div>
            </div>

        );
    }
}
export default SearchPage;