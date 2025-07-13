import React from 'react';
import Graduant from './images/graduant.png';
import AngryLoaf from './images/angry_loaf.png';
import coinToss from './ChangeImage';

let img = <img src= {Graduant} alt="Graduate" />;
let notify = '';

function DisplayImg(){
   // check status of button, if clicked then switch images
 if (coinToss == 'heads'){
        img = <img src= {AngryLoaf} alt="AngryLoaf" />;
        notify = 'Angry Loaf'
    }
    else{
        img = <img src= {Graduant} alt="Graduate" />;
        notify = 'Graduate';
    }

    alert("notify: "+notify)

return img;
};


export default DisplayImg