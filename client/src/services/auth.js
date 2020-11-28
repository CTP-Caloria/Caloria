// This service object was adapted from here: 
//  https://tylermcginnis.com/react-router-protected-routes-authentication/
//
// This version was modified to use real authentication implemented
// in the backend api. It was also modified to return promises instead
// of using callbacks `cb`.

import { initialize } from "passport";

  



const auth = {
   
    

    authenticate(email, password) {
      return fetch('/api/auth/login', { 
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('Login Failed');
          }
  
          return response.json();
        })
        .then((body) => {
          this.isAuthenticated = true;
          this.userID = body.id;
        
          return body;

        })
        .then(()=> {
          window.location.replace('/');
        })
        
    },
    signout(cb) {
      return fetch('/api/auth/logout', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('Logout Failed');
          }
  
          return response.json();
        })
        .then((body) => {
          this.isAuthenticated = false;
          this.userID = null;
          return body;


        })
        .then(()=> {
          window.location.replace('/');
        })

    },

    initialize(){
     
      return fetch('/api/auth/whoami')
      .then(res =>{
        console.log(res);
        if(res.ok){
         
          
          return res.json();
        
        }
        else{
          this.isAuthenticated = false;
        }
      }).then((body)=>{
        this.isAuthenticated = true;
        this.userID=body.id;
      })
      .catch(err=>{
        this.isAuthenticated=false;
      })
       
      
    }
  }
  
  export default auth; 