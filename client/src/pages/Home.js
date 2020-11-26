import React from 'react';
import { Carousel } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row justify-content-center">
            <h1 className="display-2 heading mt-5">Caloría</h1>
            <p className="lead text-shadow-2 text-light">Your calorie counter and recipe finder for a healthier lifestyle. </p>
          </div>

          <div className="row my-5">
            <div className="d-flex justify-content-center col-md my-4">
              <img 
                alt="logo"
                src="images/food_1.jpg"
                className="box w-100"
              />
            </div>
            <div className="col-md my-4 text-light text-shadow-1 text-left">
              <h3>OUR MISSION</h3>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </div>
          </div>
          
          <div className="row my-5 w-100 justify-content-center">
            <Carousel>
              <Carousel.Item interval={6000}>
                <img 
                  src="images/sample_1.png" 
                  className="d-block w-100 carousel-img" 
                  alt="Caloria's calorie journal example" />
                <Carousel.Caption>
                  <h3 className="text-shadow-2">Keep track of your own calorie intake</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={6000}>
                <img 
                  src="images/sample_2.png" 
                  className="d-block w-100 carousel-img" 
                  alt="Cookbook" />
                <Carousel.Caption>
                  <h3 className="text-shadow-2">Create your very own recipe</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={6000}>
                <img 
                  src="images/sample_3.png" 
                  className="d-block w-100 carousel-img" 
                  alt="Caloria: searching recipes" />
                <Carousel.Caption>
                  <h3 className="text-shadow-2">Look for new recipes</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          
          <div className="row my-5">
            <div className="col-md my-4 text-light text-shadow-1 text-left">
              <h3>KEY FEATURES</h3>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </div>
            <div className="d-flex justify-content-center col-md my-4">
              <img 
                alt="logo"
                src="images/food_2.jpg"
                className="box w-100"
              />
            </div>
          </div>

        </div>
        
      </div>
    )
  }
}

export default Home;