import { useLoader } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import styled from 'styled-components';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


interface Props{
    scale: number,
    position:[number, number, number]
}

const  SmartWatch :React.FC<Props> = ({scale,position}) => {

    const refWatch = useRef<Mesh>(null)
    const gltf = useLoader(GLTFLoader, './smartwatch/scene.gltf')

    if (refWatch.current) {
        // refWatch.current.rotation.x = refWatch.current.rotation.x + 0.1;
        // refWatch.current.rotation.z = refWatch.current.rotation.z + 0.1;
    }

    return (
      <Suspense fallback={null}>
        <primitive  object={gltf.scene} scale={scale} ref={refWatch} receiveShadow position={position} />
      </Suspense>
    )
}
export default SmartWatch;


const SmartWatchElement = styled.div``