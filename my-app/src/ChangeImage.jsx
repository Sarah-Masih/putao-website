import React from 'react';
import DisplayImg from './DisplayImage';

let coinToss = ''
let coinTossChange = 'hello'

function ChangeImage(){
  
    coinToss = Math.random()<0.5? 'heads':'tails'

    alert("Coin Toss: " + coinTossChange);
 
    return (coinToss);
};

export default ChangeImage;
