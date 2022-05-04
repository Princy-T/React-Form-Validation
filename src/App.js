import {useState} from "react";
import "./App.css";

function App(){ 
  const button = () =>{
    alert("Successfully Submited...");
  } 
  return(
    <div className="container">
      <form >
        <h1>Validation Form</h1>
          <div className="field">
            <lable>Name</lable>
            <input type="text" name="name" placeholder="Your Name" required/>
          </div>
          
          <div className="field">
            <lable>Email</lable>
            <input type="email" name="email" placeholder="Email" required/>
          </div>
          
          <div className="field">
            <lable>Password</lable>
            <input type="password" name="password" placeholder="Password" required/>
          </div>
          
          <button onClick={button}>Submit</button>
      </form>
    </div>
  );
}

export default App;
