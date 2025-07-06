import React from 'react';
import './App.css'
import Button from './Button';
import Graduant from './images/graduant.png';
import ChangeImage from './ChangeImage';

function App() {
 
  
  return (
    <>
      <div>
         <ChangeImage />
      </div>


      <h1>Putao Website</h1>


      <div className="card">
        
       <Button />

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        
        </p>
      
      </div>


      <p className="read-the-docs">
        This is the putao project, where I test my skills learnt in Codecademy Introduction to JSX
      </p>
    </>
  )
}

export default App

