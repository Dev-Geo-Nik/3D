import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import smartwatchesBackground from "../assets/smartwatches-background.png";
import EyeSvg from './util/EyeSvg';
import { smartwatchBlue, smartwatchGreen, smartwatchRed, smartwatchYellow,smartwatchLightBlue, smartwatchGrey } from './util/images';

const  Section_4 :React.FC = () => {

  return (
<Section_4Element >
         
            <EyeSvg/>
             <h2>Match Your TrackMate X to Your Style</h2>
             <div className="smartwatches-container">
                 <img src={smartwatchRed} alt="" />
                 <img src={smartwatchYellow} alt="" />
                 <img src={smartwatchBlue} alt="" />
                 <img src={smartwatchGreen} alt="" />
                 <img src={smartwatchGrey} alt="" />
                 <img src={smartwatchLightBlue} alt="" />
             </div>
            <img src={smartwatchesBackground} alt="" className="background-img" />
             <button className="btn-cta">Buy Now</button>
       
</Section_4Element >
);
};

export default Section_4;


const Section_4Element = styled.div`

        position:  relative;
        display: flex;
        flex-direction: column;
        align-items: center; 
        /* justify-content: flex-start; */
        min-height:100vh;
        overflow: hidden;

    h2{
        font-size: 3rem;
        color:#fff;
    }

    .smartwatches-container{
            margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3,1fr);
    }
    .smartwatches-container img{
        
        
        
        
     }
    button { 
        /* margin: auto 0 5rem 0; */
        margin-top:5rem;
    }

    .background-img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -2;
  
     
      
    }
`