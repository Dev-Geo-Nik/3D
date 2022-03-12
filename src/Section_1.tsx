import { ContactShadows, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import styled from 'styled-components';
import SmartWatch from './components/SmartWatch';

const  Section_1 :React.FC = () => {

  return (
<Section_1Element > 
        <div className="navigation">
                <span className="logo">Logo</span>
                <div className="menubar">X</div>
        </div>
        <div className="container">
              
          <div className="html-container">
                <h1>Own tour daily routine  with <span>TrackMate X</span> </h1>
                <p>A health tracker that motivates you every step of the way</p>
                <button className="cta">Buy Now</button>
          </div>
            <Canvas  camera={{ fov: 75, near: 0.1, far: 1000, position: [0.5, 0, 1]  }} className="canvas" shadows={true}>
                <Suspense fallback={null}>
                <OrbitControls/>
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
                <pointLight position={[-10,-10,15]} castShadow />
                    <SmartWatch scale={10} position = {[0, 0.1, 0.3]} />
                  
                </Suspense>
            </Canvas>
        </div>
        
</Section_1Element >
);
};

export default Section_1;


const Section_1Element = styled.div`

    
    background: rgb(55,61,61);
    background: linear-gradient(45deg, rgba(55,61,61,1) 14%, rgba(90,95,190,1) 50%, rgba(150,84,184,1) 91%); 
    min-height: 100vh;


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
      
    }
    .html-container p{
        margin: 1rem 0;
    }

    button{ 
      background: #8632D0;
      color: #fff;
      padding:0.7rem 2.5rem;
      border-radius:15px;
      border: none;
      cursor: pointer;

    }
`