import React from 'react';
import ChangeImage from './ChangeImage';
function Button (props){

    function SaySomething(){
        ChangeImage();
    }
    
    return (
        <button onClick = {SaySomething}>
            Change Image
        </button>
    );
}

export default Button;
