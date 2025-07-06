import React from 'react';
import Graduant from './images/graduant.png';
import AngryLoaf from './images/angry_loaf.png';


function ChangeImage(){
   
    //DisplayImg= <img src= {AngryLoaf} alt="Angry Loaf" />
    // check status of button, if clicked then switch images
    return <img src= {Graduant} alt="Graduate" />;
};

export default ChangeImage;
