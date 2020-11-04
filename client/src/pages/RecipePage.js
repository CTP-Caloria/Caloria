import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

function DisplayIngredient(props) {

  return (

    <div className="Meal">
      {/* <a href="google.com\" onClick="this.href+'?food='"></a> */}
      <h6>{props.ingredient.amount} of {props.ingredient.name}</h6>
    </div>

  );
}

class RecipePage extends React.Component {
  state = {
    loading: true,
    post: null,
    notFound: false,
    mealName:"",
    instructions:[],
    ingredients:[],
    calories:0,
    fat:0,
    protien:0,
    sugar:0,
    cholesterol:0,
    
  }


  componentDidMount() {
    // let key = l709xMAGCu1echcVzR8bHNUcpffRk9vSwLs3jge5;
   
    const { id } = this.props.match.params;

    
   console.log(id);
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+id)
      .then(res => res.json())
      .then(post => {
       
        let meal = post.meals[0];
        let ing=[];
        let i=1

        while (meal["strIngredient"+i]){
          ing.push({ name: meal["strIngredient" + i], amount: meal["strMeasure" + i] });
          i++;
        }
   

        
        console.log(post.meals[0]);

    
        console.log(this.state.mealName);
        //console.log(this.state.ingredients);
        let c=0;
        let f=0;
        let p=0;
        let s=0;
        let cl=0;

        ing.forEach((ingredient) => {

          fetch("https://api.edamam.com/api/nutrition-data?app_id=6bf9067c&app_key= 528f8228f03c5cf1e9d0e338baa2f1b1&ingr=" + ingredient.amount + " " + ingredient.name)
            .then(res => res.json())
            .then(post => {
              console.log(post);
              console.log(`Total Calories for ${ ingredient.amount } of ${ ingredient.name }`);
              console.log(post.totalNutrients.ENERC_KCAL.quantity);
              //load data to store
              c += post.totalNutrients.ENERC_KCAL.quantity;
              f += post.totalNutrients.FAT.quantity;
              p += post.totalNutrients.PROCNT.quantity;
              s += post.totalNutrients.SUGAR.quantity;
              cl += post.totalNutrients.CHOLE.quantity;

              console.log("TOTAL"+c);
              this.setState({
                calories: c.toFixed(2)+" kcal",
                fat: f.toFixed(2)+" g",
                protien: p.toFixed(2)+" g",
                sugar: s.toFixed(2)+" g",
                cholesterol: cl.toFixed(2)+" mg",
                
              });

            }).catch(err=>{console.log(err)});
          
        });
       
        let res = meal.strInstructions.split(".");
        console.log(res);
        this.setState({
          mealName: meal.strMeal,
          instructions: res,
          ingredients: ing,
          post: <Post {...post} />,
          loading: false,
        });
        
        // this.setState({
        //   
        //   // post: <Post {...post} />,
        //   // loading: false,
        // });

      })
      .catch(err => {
        this.setState({
          notFound: true,
        });
      });


   
  }


  render() {
    if(this.state.notFound) return <Redirect to="/" />;
    if(this.state.loading) return <Loading />;
    // return <h1>HELLO</h1>
    return(
      
        <div id="Recepie"> 
            <div id="rName">
              <h1>{this.state.mealName}</h1>
            </div>


        <div id="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {this.state.ingredients.map((ingredient) => {

              return <li><DisplayIngredient ingredient={ingredient} /></li>

            })}
          </ul>
        </div>
            
            <div id="foodFacts">
              <h3>Nutrtition Facts</h3>
              <ul>
                <li>Total Calories: {this.state.calories}</li>
                <li>Total Fat: {this.state.fat}</li>
                <li>Total Protien: {this.state.protien}</li>
                <li>Total Sugar: {this.state.sugar}</li>
                <li>Total Cholesterol: {this.state.cholesterol}</li>
              </ul>
            </div>
          
        
       

            <div id="instructions">
              <ol>
                  {this.state.instructions.map((instruction) => {
                    if(instruction!=="")
                      return <li>{instruction.trim()}</li>

                  })}
                {/* <h6>{this.state.instructions}</h6> */}
              </ol>
            </div>
            
        </div>

    );
  }
}

export default RecipePage;