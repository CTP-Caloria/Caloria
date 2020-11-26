import React from 'react';
import { Link } from 'react-router-dom';
class AboutUsPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-shadow-2 text-light display-3 mt-5 mb-3">
          About Us
        </h1>
        <h2 className="text-light display-5 text-shadow-2 text-center">
          Our Motivation
        </h2>
        <div className="row my-4">
          <div className="d-flex col-md justify-content-center">
            <img src="icon.png"
              alt="logo"
              className="box w-100"
            />

          </div>
          <div className="col text-left">
            <p className="text-light text-shadow-3">
              <strong>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
              </strong>
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <h2 className="text-light display-4 text-shadow-2 text-center mt-5 mb-1">
            Our Developers
          </h2>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col mt-3 mb-5" >
            <h3 className="text-shadow-1 text-light">Christian Vargas-Polo</h3>
            <h6 className=" text-shadow-3 text-light text-left">LinkedIn:</h6>
            <h6 className=" text-shadow-3 text-light text-left">Github: {' '}
              <Link to={{ pathname: "https://github.com/echochris234" }} target="_blank" className='text-secondary'>
                echochris234
                </Link>
            </h6>
          </div>
          <div className="col mt-3 mb-5">
            <h3 className="text-shadow-1 text-light">Jessica Chu</h3>
            <h6 className=" text-shadow-3 text-light text-left ml-5">
              LinkedIn: {' '}

            </h6>
            <h6 className=" text-shadow-3 text-light text-left ml-5">Github: {' '}
              <Link to={{ pathname: "https://github.com/jessica-chu" }} target="_blank" className='text-secondary'>
                jessica-chu
              </Link>
            </h6>

          </div>
          <div className="col mt-3 mb-5">
            <h3 className="text-shadow-1 text-light">Jimmy Luy</h3>
            <h6 className=" text-shadow-3 text-light text-left ml-5">LinkedIn:</h6>
            <h6 className=" text-shadow-3 text-light text-left ml-5">Github: {' '}
              <Link to={{ pathname: "https://github.com/jimmyluy1" }} target="_blank" className='text-secondary'>
                jimmyluy1
              </Link>

            </h6>

          </div>

        </div>
      </div>


    )
  }
}

export default AboutUsPage;