import { ContactShadows, GizmoHelper, OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react';
import styled from 'styled-components';
// import SmartWatch from './SmartWatch';
// import { GoThreeBars } from "react-icons/go";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import { Mesh } from 'three';
//@ts-ignore
import logo from "../assets/logo.svg";
//@ts-ignore
import background from "../assets/icons/background.png";
import ModelTest from './ModelTest';
import { BiShoppingBag } from "react-icons/bi";


const  Section_1 :React.FC = () => {

  const [hovered, setHovered] = useState(false)
  
  return (
<Section_1Element > 
        <img src={background} alt="" className="background-image" />
        <div className="navigation">
                  <img src={logo} alt="TrackMate X product logo" />
                  <div className="navigation-icons">
                      <div className="login-container" >
                         <FaUserCircle className="login-icon"/> 
                         <div className="login-text">Log in</div>
                      </div>
                      <div className="cart-container">
                        <FaShoppingCart className='cart-icon'/>
                        
                          <div className='cart-number'>0</div>
                        </div>
                  </div>
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

    
 /* background: #333; */

  height: 100vh;

.background-image{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        z-index:-2;
        width: 100%;
        height: 100%;
      }

    .navigation{
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 2rem 4rem;
       min-height: 10vh;
    }

    .navigation-icons{
      display: flex;
      /* width: 30%; */
    }

    .login-container{
      
      color: #fff;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .login-icon{
      font-size: 3rem;
      
    }
    .login-text{
      font-size: 2rem;
      margin: 0 2rem;
    }


    .cart-container{
      margin-top: 1rem;
      position: relative;
      color: #fff;
      cursor: pointer;
    }

    .cart-icon{
      font-size: 2.5rem;
      /* display: block; */
    }

    .cart-number{
      font-size: 1rem;
      position: absolute;
      top: -2rem;
      right:0.5rem;
      color: #a238ff;
      font-size:1.7rem;
      font-weight: bold;

    }

    .container{
      display: grid;
      /* grid-template-columns: repeat(auto-fit,minmax(50%,1fr)); */
      grid-template-columns: 1fr 1fr;
      min-height: 90vh;
    
    }

    .canvas{
        /* background:#eee; */
        

    }

    .html-container{
      align-self: center;
      justify-self: center;
      /* margin-left:4rem; */
    }
    .html-container h1{
        font-family: var(--font-primary-1);
        color:#fff;
        font-size:2.5rem;
        
        /* font-size:2.5rem; */
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