import { ContactShadows, GizmoHelper, OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react';
import styled from 'styled-components';
import SmartWatch from './SmartWatch';
import { GoThreeBars } from "react-icons/go";
import { Mesh } from 'three';
//@ts-ignore
import logo from "../assets/logo.svg";
//@ts-ignore
import background from "../assets/background.webp";
import ModelTest from './ModelTest';


const  Section_1 :React.FC = () => {

  const [hovered, setHovered] = useState(false)
 
  return (
<Section_1Element > 
        <img src={background} alt="" className="background-image" />
        <div className="navigation">
                  <img src={logo} alt="TrackMate X product logo" />
                    <GoThreeBars className="navbar-icon"/>
        </div>
        <div className="container">
              
          <div  className="html-container">
                <h1>Own your daily routine  with <span>TrackMate X</span> </h1>
                <p>A fitness smartwatch  that motivates you every step of the way</p>
                <button className="btn-cta">Buy Now</button>
          </div>
            <Canvas  camera={{ fov: 75, near: 0.1, far: 1000, position:  [0.5, 0, 1]  }} className="canvas" shadows={true} >
                <Suspense fallback={null}>
                {/* <OrbitControls/> */}
       

     

            
              
                <pointLight position={[20, 20, 20]} castShadow />
                <ambientLight intensity={1} />
                <directionalLight
                  castShadow
                  position={[0, 10, 0]}
                  intensity={1.5}
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                  shadow-camera-far={50}
                  shadow-camera-left={-10}
                  shadow-camera-right={10}
                  shadow-camera-top={10}
                  shadow-camera-bottom={-10}
                />
                <pointLight position={[10,10,15]} castShadow />
                    {/* <SmartWatch   scale={8} position = {[0.1, 0.1, 0.05]}  /> */}
                    <ModelTest position={[0,0,0]} scale={hovered ? 10:8} rotation={[0,0,0]} onPointerOver={()=>setHovered(true)} onPointerOut={()=>setHovered(false)}/>
                </Suspense>
            </Canvas>
        </div>
      
</Section_1Element >
);
};



export default Section_1;


const Section_1Element = styled.div`

    
 

min-height: 100vh;

.background-image{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        z-index:-2;
      }

    .navigation{
       display: flex;
       justify-content: space-between;
       padding: 2rem 4rem;
       min-height: 10vh;
    }

    .container{
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 90vh;
    }

    .canvas{
        /* background:#eee; */
    }

    .html-container{
      align-self: center;
      justify-self: center;
    }
    .html-container h1{
        font-family: var(--font-primary-1);
        color:#fff;
        font-size:2.5rem;
    }

    .html-container p{
        margin: 1rem 0 2rem 0;
        font-size: 1.7rem;
        color:#fff;
    }

    .html-container span {
      color: #fff;
      text-shadow:
      0 0 5px #a238ff,
      0 0 10px #a238ff,
      0 0 20px #a238ff,
      0 0 40px #a238ff,
      0 0 80px #a238ff,
      0 0 90px #0ff,
      0 0 100px #0ff,
      0 0 150px #0ff;

    }

    .navbar-icon{
      font-size:3rem;
      color: #fff;
    }

 
`