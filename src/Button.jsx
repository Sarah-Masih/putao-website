import React from 'react';
import ChangeImage from './ChangeImage';
import DisplayImg from './DisplayImage';



function Button (){

    
    return (
        <button onClick = {() => ChangeImage()}>
            Change Image
        </button>
    );
}

export default Button;
