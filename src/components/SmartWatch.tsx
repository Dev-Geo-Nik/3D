import { useFrame, useLoader } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react';
import styled from 'styled-components';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


interface Props{
    scale: number,
    position:[number, number, number]
 
}

const  SmartWatch :React.FC<Props> = ({scale,position}) => {
  
    const [hovered, setHovered] = useState(false)
    const refWatch = useRef<Mesh>(null)
    // const gltf = useLoader(GLTFLoader, './smart_watch/scene.gltf')
    const gltf = useLoader(GLTFLoader, './smartwatch/scene.gltf')
    // const gltf = useLoader(GLTFLoader, './talkband_b2/scene.gltf')
    
    console.log(gltf)
    const {defines} = gltf.materials.Rubber;
    useFrame(()=>{
      if (refWatch.current ) {
      
         refWatch.current.rotation.y += 0.0055;
        // refWatch.current.rotation.z += -0.005;
  
       
    }
    })

    
 
    // rotation-x={}
    // rotation={[0,0,0]}
   
    return (
      <Suspense fallback={null} >
        <primitive  object={gltf.scene} scale={scale} ref={refWatch} receiveShadow position={position} onPointerOver={()=>setHovered(true)} onPointerOut={()=>setHovered(false)} />
      </Suspense>
    )
}
export default SmartWatch;


const SmartWatchElement = styled.div``