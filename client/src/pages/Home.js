import React from 'react';
import { Carousel } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <h1 className="display-2 heading mt-5 mb-4">
              <svg className="logo-fill" width="273.601" height="69.742" viewBox="0 0 273.601 69.742" xmlns="http://www.w3.org/2000/svg" fill="none">
                <g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#FFF" stroke-width="0.25mm">
                  <path className="path" d="M 22.117 68.983 A 36.993 36.993 0 0 0 29.791 69.741 Q 35.551 69.741 40.591 68.076 Q 45.631 66.411 49.501 63.171 A 6.2 6.2 0 0 0 49.598 63.092 Q 50.061 62.706 50.377 62.286 A 3.258 3.258 0 0 0 51.031 60.741 Q 51.068 60.457 51.068 60.185 A 3.466 3.466 0 0 0 50.536 58.311 Q 49.861 57.231 48.556 56.961 Q 47.593 56.762 46.459 57.297 A 6.515 6.515 0 0 0 45.631 57.771 A 23.391 23.391 0 0 1 38.675 61.603 A 26.484 26.484 0 0 1 29.971 62.991 Q 19.261 62.991 13.591 56.241 A 20.83 20.83 0 0 1 10.733 51.762 Q 9.215 48.569 8.517 44.57 A 43.107 43.107 0 0 1 7.921 37.161 Q 7.921 30.945 9.383 26.145 A 22.357 22.357 0 0 1 13.591 18.171 Q 19.261 11.421 29.971 11.421 A 30.079 30.079 0 0 1 32.813 11.553 A 23.219 23.219 0 0 1 45.451 16.551 A 6.712 6.712 0 0 0 46.031 16.929 Q 47.309 17.663 48.376 17.406 Q 49.681 17.091 50.401 15.966 A 3.447 3.447 0 0 0 50.949 14.069 Q 50.949 13.744 50.896 13.401 A 3.106 3.106 0 0 0 50.749 12.827 Q 50.357 11.74 49.141 10.881 A 24.478 24.478 0 0 0 46.118 8.805 A 28.756 28.756 0 0 0 40.411 6.291 A 32.708 32.708 0 0 0 40.332 6.266 A 34.511 34.511 0 0 0 29.791 4.671 A 37.665 37.665 0 0 0 22.89 5.275 A 27.552 27.552 0 0 0 13.771 8.631 Q 7.111 12.591 3.556 19.881 A 34.065 34.065 0 0 0 0.681 28.937 A 47.3 47.3 0 0 0 0.001 37.161 Q 0.001 41.729 0.73 45.723 A 33.895 33.895 0 0 0 3.556 54.531 Q 7.111 61.821 13.771 65.781 A 27.251 27.251 0 0 0 22.117 68.983 Z M 86.221 43.551 L 89.101 43.551 L 89.101 40.761 Q 89.101 35.476 87.042 32.977 A 6.117 6.117 0 0 0 86.806 32.706 A 6.944 6.944 0 0 0 84.051 30.93 Q 82.148 30.231 79.471 30.231 Q 76.321 30.231 73.126 31.041 A 27.421 27.421 0 0 0 69.252 32.352 A 34.937 34.937 0 0 0 66.511 33.651 A 5.364 5.364 0 0 1 65.887 33.935 Q 64.83 34.331 64.045 34.01 A 1.882 1.882 0 0 1 63.946 33.966 A 2.749 2.749 0 0 1 62.512 32.364 A 3.512 3.512 0 0 1 62.506 32.346 Q 62.142 31.335 62.432 30.252 A 4.262 4.262 0 0 1 62.506 30.006 A 2.921 2.921 0 0 1 63.68 28.488 A 4.162 4.162 0 0 1 64.261 28.161 A 34.489 34.489 0 0 1 70.335 25.726 A 30.911 30.911 0 0 1 72.046 25.281 A 36.07 36.07 0 0 1 76.552 24.53 A 29.476 29.476 0 0 1 79.471 24.381 A 27.487 27.487 0 0 1 84.109 24.746 Q 86.608 25.175 88.576 26.107 A 12.067 12.067 0 0 1 92.026 28.521 A 12.659 12.659 0 0 1 94.896 33.215 Q 95.613 35.208 95.911 37.673 A 31.111 31.111 0 0 1 96.121 41.391 L 96.121 65.781 A 6.246 6.246 0 0 1 95.972 67.207 Q 95.418 69.561 92.791 69.561 A 4.663 4.663 0 0 1 91.359 69.36 Q 89.849 68.873 89.436 67.204 A 5.943 5.943 0 0 1 89.281 65.781 L 89.281 61.371 Q 87.571 65.241 84.016 67.491 Q 80.461 69.741 75.691 69.741 A 19.833 19.833 0 0 1 71.176 69.246 A 16.363 16.363 0 0 1 67.636 67.986 A 14.833 14.833 0 0 1 63.609 65.121 A 13.642 13.642 0 0 1 62.011 63.171 Q 59.941 60.111 59.941 56.331 Q 59.941 52.289 61.718 49.669 A 8.766 8.766 0 0 1 62.416 48.771 A 9.776 9.776 0 0 1 64.844 46.832 Q 66.054 46.128 67.605 45.589 A 24.963 24.963 0 0 1 70.606 44.766 A 44.556 44.556 0 0 1 74.586 44.125 Q 79.414 43.551 86.221 43.551 Z M 263.701 43.551 L 266.581 43.551 L 266.581 40.761 Q 266.581 35.476 264.522 32.977 A 6.117 6.117 0 0 0 264.286 32.706 A 6.944 6.944 0 0 0 261.531 30.93 Q 259.628 30.231 256.951 30.231 Q 253.801 30.231 250.606 31.041 A 27.421 27.421 0 0 0 246.732 32.352 A 34.937 34.937 0 0 0 243.991 33.651 A 5.364 5.364 0 0 1 243.367 33.935 Q 242.31 34.331 241.525 34.01 A 1.882 1.882 0 0 1 241.426 33.966 A 2.749 2.749 0 0 1 239.992 32.364 A 3.512 3.512 0 0 1 239.986 32.346 Q 239.622 31.335 239.912 30.252 A 4.262 4.262 0 0 1 239.986 30.006 A 2.921 2.921 0 0 1 241.16 28.488 A 4.162 4.162 0 0 1 241.741 28.161 A 34.489 34.489 0 0 1 247.815 25.726 A 30.911 30.911 0 0 1 249.526 25.281 A 36.07 36.07 0 0 1 254.032 24.53 A 29.476 29.476 0 0 1 256.951 24.381 A 27.487 27.487 0 0 1 261.589 24.746 Q 264.088 25.175 266.056 26.107 A 12.067 12.067 0 0 1 269.506 28.521 A 12.659 12.659 0 0 1 272.376 33.215 Q 273.093 35.208 273.391 37.673 A 31.111 31.111 0 0 1 273.601 41.391 L 273.601 65.781 A 6.246 6.246 0 0 1 273.452 67.207 Q 272.898 69.561 270.271 69.561 A 4.663 4.663 0 0 1 268.839 69.36 Q 267.329 68.873 266.916 67.204 A 5.943 5.943 0 0 1 266.761 65.781 L 266.761 61.371 Q 265.051 65.241 261.496 67.491 Q 257.941 69.741 253.171 69.741 A 19.833 19.833 0 0 1 248.656 69.246 A 16.363 16.363 0 0 1 245.116 67.986 A 14.833 14.833 0 0 1 241.089 65.121 A 13.642 13.642 0 0 1 239.491 63.171 Q 237.421 60.111 237.421 56.331 Q 237.421 52.289 239.198 49.669 A 8.766 8.766 0 0 1 239.896 48.771 A 9.776 9.776 0 0 1 242.324 46.832 Q 243.534 46.128 245.085 45.589 A 24.963 24.963 0 0 1 248.086 44.766 A 44.556 44.556 0 0 1 252.066 44.125 Q 256.894 43.551 263.701 43.551 Z M 109.621 54.441 L 109.621 8.541 Q 109.621 5.628 111.864 5.015 A 5.151 5.151 0 0 1 113.221 4.851 A 5.312 5.312 0 0 1 114.681 5.034 Q 116.911 5.673 116.911 8.541 L 116.911 53.901 A 17.792 17.792 0 0 0 117.226 57.416 Q 118.33 62.867 123.293 63.459 A 10.7 10.7 0 0 0 124.561 63.531 Q 125.285 63.531 125.866 63.459 A 7.366 7.366 0 0 0 126.001 63.441 Q 126.631 63.351 127.261 63.351 A 3.156 3.156 0 0 1 127.433 63.34 Q 128.039 63.318 128.401 63.56 A 1.034 1.034 0 0 1 128.656 63.801 Q 129.059 64.339 129.061 65.949 A 12.958 12.958 0 0 1 129.061 65.961 A 4.508 4.508 0 0 1 128.869 67.328 Q 128.412 68.767 126.862 69.273 A 5.216 5.216 0 0 1 126.001 69.471 A 7.93 7.93 0 0 1 124.821 69.67 A 9.112 9.112 0 0 1 124.471 69.696 A 29.567 29.567 0 0 1 123.493 69.735 A 24.701 24.701 0 0 1 122.941 69.741 A 17.169 17.169 0 0 1 119.018 69.319 Q 115.913 68.591 113.792 66.605 A 10.811 10.811 0 0 1 113.041 65.826 Q 110.302 62.691 109.756 57.276 A 28.307 28.307 0 0 1 109.621 54.441 Z M 148.826 69.128 A 24.597 24.597 0 0 0 154.441 69.741 A 25.703 25.703 0 0 0 157.905 69.514 A 20.001 20.001 0 0 0 165.466 66.951 Q 170.191 64.161 172.756 59.076 A 23.116 23.116 0 0 0 174.794 52.962 A 31.488 31.488 0 0 0 175.321 47.061 A 31.847 31.847 0 0 0 174.864 41.542 A 23.302 23.302 0 0 0 172.756 35.046 Q 170.191 29.961 165.466 27.171 Q 160.741 24.381 154.441 24.381 A 25.683 25.683 0 0 0 150.249 24.711 A 19.512 19.512 0 0 0 143.371 27.171 Q 138.691 29.961 136.126 35.046 A 23.116 23.116 0 0 0 134.087 41.16 A 31.488 31.488 0 0 0 133.561 47.061 A 31.847 31.847 0 0 0 134.017 52.58 A 23.302 23.302 0 0 0 136.126 59.076 Q 138.691 64.161 143.371 66.951 A 19.061 19.061 0 0 0 148.826 69.128 Z M 186.301 65.781 L 186.301 28.251 A 5.601 5.601 0 0 1 186.468 26.814 Q 187.068 24.561 189.811 24.561 A 5.043 5.043 0 0 1 191.252 24.749 Q 192.845 25.225 193.263 26.907 A 5.597 5.597 0 0 1 193.411 28.251 L 193.411 33.021 Q 195.211 28.881 198.991 26.676 A 17.077 17.077 0 0 1 204.269 24.713 A 22.849 22.849 0 0 1 207.991 24.291 Q 210.871 24.021 211.051 27.171 A 5.205 5.205 0 0 1 211.069 27.527 Q 211.114 30.194 208.148 30.639 A 7.321 7.321 0 0 1 207.811 30.681 L 206.371 30.861 Q 201.643 31.272 198.636 33.327 A 10.876 10.876 0 0 0 196.921 34.776 Q 193.718 38.112 193.681 43.867 A 20.962 20.962 0 0 0 193.681 44.001 L 193.681 65.781 A 5.598 5.598 0 0 1 193.504 67.254 Q 192.873 69.561 189.991 69.561 A 5.172 5.172 0 0 1 188.514 69.369 Q 186.301 68.708 186.301 65.781 Z M 218.521 65.421 L 218.521 28.611 Q 218.521 24.741 222.121 24.741 A 5.052 5.052 0 0 1 223.603 24.94 Q 225.233 25.44 225.659 27.203 A 6.002 6.002 0 0 1 225.811 28.611 L 225.811 65.421 A 6.147 6.147 0 0 1 225.637 66.952 Q 225.131 68.916 223.144 69.292 A 5.51 5.51 0 0 1 222.121 69.381 A 4.668 4.668 0 0 1 220.633 69.164 Q 218.521 68.455 218.521 65.421 Z M 154.441 63.891 A 13.873 13.873 0 0 0 159.092 63.143 A 11.844 11.844 0 0 0 164.251 59.526 Q 167.277 55.946 167.821 49.855 A 31.404 31.404 0 0 0 167.941 47.061 A 29.143 29.143 0 0 0 167.58 42.32 Q 167.162 39.789 166.259 37.767 A 13.208 13.208 0 0 0 164.251 34.551 A 12.066 12.066 0 0 0 155.405 30.259 A 16.549 16.549 0 0 0 154.441 30.231 A 14.403 14.403 0 0 0 149.98 30.89 A 11.645 11.645 0 0 0 144.586 34.551 A 13.961 13.961 0 0 0 142.031 39.261 Q 140.941 42.582 140.941 47.061 Q 140.941 52.666 142.686 56.483 A 13.436 13.436 0 0 0 144.586 59.526 Q 148.231 63.891 154.441 63.891 Z M 89.101 51.021 L 89.101 48.321 L 86.311 48.321 A 127.965 127.965 0 0 0 82.058 48.387 Q 78.171 48.517 75.459 48.902 A 33.372 33.372 0 0 0 74.836 48.996 A 20.676 20.676 0 0 0 72.735 49.439 Q 70.631 50.009 69.439 50.937 A 4.895 4.895 0 0 0 68.986 51.336 A 5.523 5.523 0 0 0 67.5 54.122 A 8.176 8.176 0 0 0 67.321 55.881 A 8.642 8.642 0 0 0 67.829 58.9 A 7.613 7.613 0 0 0 69.886 61.911 Q 72.451 64.251 76.861 64.251 Q 82.261 64.251 85.681 60.516 A 12.895 12.895 0 0 0 88.959 53.277 A 17.513 17.513 0 0 0 89.101 51.021 Z M 266.581 51.021 L 266.581 48.321 L 263.791 48.321 A 127.965 127.965 0 0 0 259.538 48.387 Q 255.651 48.517 252.939 48.902 A 33.372 33.372 0 0 0 252.316 48.996 A 20.676 20.676 0 0 0 250.215 49.439 Q 248.111 50.009 246.919 50.937 A 4.895 4.895 0 0 0 246.466 51.336 A 5.523 5.523 0 0 0 244.98 54.122 A 8.176 8.176 0 0 0 244.801 55.881 A 8.642 8.642 0 0 0 245.309 58.9 A 7.613 7.613 0 0 0 247.366 61.911 Q 249.931 64.251 254.341 64.251 Q 259.741 64.251 263.161 60.516 A 12.895 12.895 0 0 0 266.439 53.277 A 17.513 17.513 0 0 0 266.581 51.021 Z M 234.091 4.851 L 225.091 18.891 A 3.114 3.114 0 0 1 224.624 19.466 Q 224.033 20.029 223.26 20.029 A 2.249 2.249 0 0 1 223.021 20.016 A 3.08 3.08 0 0 1 221.861 19.666 A 2.89 2.89 0 0 1 220.996 18.936 A 1.831 1.831 0 0 1 220.576 17.751 Q 220.576 17.201 220.861 16.551 L 228.421 1.881 A 4.627 4.627 0 0 1 228.975 1.048 Q 229.395 0.553 229.908 0.298 A 2.566 2.566 0 0 1 230.536 0.081 A 3.823 3.823 0 0 1 231.208 0.001 Q 232.136 -0.024 232.966 0.441 Q 234.091 1.071 234.541 2.286 Q 234.964 3.43 234.191 4.693 A 4.794 4.794 0 0 1 234.091 4.851 Z" vector-effect="non-scaling-stroke"/>
                </g>
              </svg>
            </h1>
            <p className="lead text-shadow-2 text-light">Your calorie counter and recipe finder for a healthier lifestyle.</p>
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
          
          <div className="row my-5 justify-content-center">
            <Carousel className="w-100">
              <Carousel.Item interval={3000}>
                <img 
                  src="images/sample_1.png" 
                  className="d-block carousel-img box" 
                  alt="Caloria's calorie journal example" />
                <Carousel.Caption>
                  <h3 className="text-shadow-2">Keep track of your own calorie intake</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img 
                  src="images/sample_2.png" 
                  className="d-block carousel-img box" 
                  alt="Cookbook" />
                <Carousel.Caption>
                  <h3 className="text-shadow-2">Create your very own recipe</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img 
                  src="images/sample_3.png" 
                  className="d-block carousel-img box" 
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