import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

function DisplayIngredient(props) {

  return (

    <div className="Meal">
      {/* <a href="google.com\" onClick="this.href+'?food='"></a> */}
      <h4>{props.ingredient.amount} of {props.ingredient.name}</h4>
    </div>

  );
}

class RecipePage extends React.Component {
  state = {
    loading: true,
    post: null,
    notFound: false,
    mealName:"",
    instructions:"",
    ingredients:[],
    
  }


  componentDidMount() {
    // let key = l709xMAGCu1echcVzR8bHNUcpffRk9vSwLs3jge5;
   
    const { id } = this.props.match.params;
    fetch("https://api.nal.usda.gov/fdc/v1/foods/search?api_key=l709xMAGCu1echcVzR8bHNUcpffRk9vSwLs3jge5&query="+id)
    .then(res=>res.json())
    .then(food=>{
      console.log(food);
    })

    
   // console.log(id);
    // fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+id)
    //   .then(res => res.json())
    //   .then(post => {
       
    //     let meal = post.meals[0];
    //     let ing=[];
    //     let i=1

    //     while (meal["strIngredient"+i]){
    //       ing.push({ name: meal["strIngredient" + i], amount: meal["strMeasure" + i] });
    //       i++;
    //     }
  

        
    //     console.log(post.meals[0]);

    //     this.setState({
    //       mealName: meal.strMeal,
    //       instructions: meal.strInstructions,
    //       ingredients: ing,
    //       post: <Post {...post} />,
    //       loading: false,
    //     });
    //     console.log(this.state.mealName);
    //     //console.log(this.state.ingredients);

    //     ing.forEach((ingredient) => {
    //       console.log(`${ingredient.amount} of ${ingredient.name}`)
    //     });

        
    //     // this.setState({
    //     //   
    //     //   // post: <Post {...post} />,
    //     //   // loading: false,
    //     // });

    //   })
    //   .catch(err => {
    //     this.setState({
    //       notFound: true,
    //     });
    //   });
  }


  render() {
    if(this.state.notFound) return <Redirect to="/" />;
    if(this.state.loading) return <Loading />;
    return <h1>HELLO</h1>
    // return(
      
    //     <div> 
    //       <h1>{this.state.mealName}</h1>
    //       <h2>Ingredients</h2>
    //       {this.state.ingredients.map((ingredient)=>{
             
    //         return <DisplayIngredient ingredient={ingredient} />

    //       })}

    //       <h5>{this.state.instructions}</h5>

           
    //     </div>

    // );
  }
}

export default RecipePage;