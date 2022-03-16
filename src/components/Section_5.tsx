import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import background from "../assets/background-2.png";
//@ts-ignore
import smartwatchBlack from "../assets/smartwatches/X.png";
//@ts-ignore
import battery from "../assets/battery.png";




const  Section_5 :React.FC = () => {

  return (
<Section_5Element >
    <div className="battery-container">
        <img src={battery} alt="" />
         <span>20 Hours Battery Life</span>
    </div>
    <img src={background} alt=""  className="background-image"/>
    <img src={smartwatchBlack} alt="" className="smartwatch" />
</Section_5Element >
);
};

export default Section_5;


const Section_5Element = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    .background-image{
        /* position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; */
        width: 100%;
        
    }

    .smartwatch{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-60%, -50%);
        /* width: 100%; */
    }

    .battery-container{
        display: flex;
        align-items: center;
        position: absolute;
        background: rgba(0,0,0,.5);
        color: #fff;
        width: 25rem;
        border-radius: 10px;
       
        /* margin: 15rem; */
        /* width: 100%; */
        margin-left: auto;
        margin-top: auto;
        top:30%;
        left: 25%;
    }
`