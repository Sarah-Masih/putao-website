import React from 'react';
import './App.css'
import Button from './Button';
import DisplayImg from './DisplayImage';


//let Displayimg = <img src= {Graduant} alt="Graduate" />;


function App() {
 
  
  return (
    <>
      <h1>Putao Website</h1>


      <div className="card">
        
       <Button />

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        
        </p>
      
      </div>
      <div>
         <DisplayImg />
      </div>

      <p className="read-the-docs">
        This is the putao project, where I test my skills learnt in Codecademy Introduction to JSX
      </p>
    </>
  )
}

export default App

