import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import background from "../assets/background-2.png";
//@ts-ignore
import TrackMateX from "../assets/TrackMateX.svg";
//@ts-ignore
import battery from "../assets/icons/battery.png";
//@ts-ignore
import bluetooth from "../assets/icons/bluetooth.png";
//@ts-ignore
import wireless from "../assets/icons/wireless.png";
//@ts-ignore
import water from "../assets/icons/water.png";




const  Section_5 :React.FC = () => {

  return (
<Section_5Element >
    <div className="flex-container">
        <div className="battery container">
            <img src={battery} alt="" />
            <span>20 Hours Battery Life</span>
        </div>
        <div className="bluetooth container">
            <img src={bluetooth} alt="" />
            <span>Bluetooth Connectivity</span>
        </div>
        <img src={TrackMateX} alt="" className="smartwatch" />
        <div className="water container">
            <img src={water} alt="" />
            <span>Water Resistance</span>
        </div>
        <div className="wireless container">
            <img src={wireless} alt="" />
            <span>Wireless Charging</span>
        </div>
       
        <button className="btn-cta">Buy Now</button>
    </div>
   
    <img src={background} alt=""  className="background-image"/>
</Section_5Element >
);
};

export default Section_5;


const Section_5Element = styled.div`
    position: relative;
    height: 100%;
    /* width: 100%; */
    



    .background-image{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; 
        width: 100%;
        height: 100%;
        z-index:-3; 
        
        
    }

    .smartwatch{
         /* position: absolute; */
         /* display: block; */
        
        /* transform: translate(-50%, 100%); */
        width: 15%;
        display: block;
        align-self: center;

    }

    .flex-container{

        display: flex;
        flex-flow: column;
        /* height: 100%; */
        justify-content: space-around; 
        /* background: red; */
        
    }
  
    .container{
        display: flex;
        align-items: center;
        background: rgba(0,0,0,.5);
        color: #fff;
        width:35rem;
        border-radius: 10px;
        /* position: absolute; */
        transform: var(--transform);
      
    }
    .container  span{
        /* font-size: clamp(0.2rem, 0.5rem + 2vw, 5rem); */
        font-size: 1.6rem;
    }

    .battery {
        align-self: flex-end;
        /* margin: 15% 15% 0 0; */
        margin-right:40rem;
        transform: translateY(60%);

    }
   

    .bluetooth {
        margin-left:40rem;
    
    }

    .water{
       align-self:flex-end;
       margin-right:40rem;
        transform: translateY(60%);
      
    }

    .wireless{
        /* top: 60rem;
        left: 18rem; */
        margin-left:40rem;
    }

    button{

        align-self: center;
        margin: 6rem 0;
        
    }
  
`