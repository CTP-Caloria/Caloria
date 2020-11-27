import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';



class RecipePage extends React.Component {
    state = {
        loading: true,
        post: null,
        notFound: false,
        mealName: "",
        instructions: [],
        ingredients: [],
        calories: 0,
        fat: 0,
        protien: 0,
        sugar: 0,
        cholesterol: 0,
        image: ""

    }

    componentDidMount() {
        const { id } = this.props.match.params;
    }


    render() {
        if (this.state.notFound) return <Redirect to="/" />;
        if (this.state.loading) return <Loading />;

        return (

            <h1>HELLO</h1>
            // <div className="background">
            //     <div className="food-wrapper my-5">
            //         <div>

            //             <div className="my-4">
            //                 <h1 className="display-4"><b>{this.state.mealName}</b></h1>
            //                 <img id="image" src={this.state.image} alt="food" className="mt-4"></img>
            //             </div>

            //             <div className="my-4">
            //                 <h2>Ingredients</h2>
            //                 <ul>
            //                     {this.state.ingredients.map((ingredient) => {
            //                         return <li><DisplayIngredient ingredient={ingredient} /></li>
            //                     })}
            //                 </ul>
            //             </div>

            //             <div className="my-4">
            //                 <h3>Nutrition Facts</h3>
            //                 <ul>
            //                     <li>Calories: {this.state.calories}</li>
            //                     <li>Fat: {this.state.fat}</li>
            //                     <li>Protein: {this.state.protien}</li>
            //                     <li>Sugar: {this.state.sugar}</li>
            //                     <li>Cholesterol: {this.state.cholesterol}</li>
            //                 </ul>
            //             </div>

            //             <div className="my-4">
            //                 <h3>Instructions</h3>
            //                 <ol>
            //                     {this.state.instructions.map((instruction) => {
            //                         if (instruction !== "")
            //                             return <li>{instruction.trim()}</li>

            //                     })}
            //                     {/* <h6>{this.state.instructions}</h6> */}
            //                 </ol>
            //             </div>

            //         </div>
            //     </div>
            // </div>

        );
    }
}

export default RecipePage;