import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Container } from '../Geral/geral/ContainerGeral';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from '@react-hook/media-query';
import styled from 'styled-components';



const ModelViewer = () => {
  const gltf = useLoader(GLTFLoader, '/scene.gltf');
  const group:any = useRef();
  const isMobileDevice = useMediaQuery("(max-width: 780px)")

  return (<>

    {isMobileDevice ? (
      <>
      <group ref={group}>
<primitive object={gltf.scene} position={[0,-2,0]} scale={[1.5, 1.5, 1.5]} />
</group>
 
      </>
  ) :<>
       <group ref={group}>
<primitive object={gltf.scene}  position={[-0,-2,-0]}  scale={[1.5, 1.5, 1.5]} />
</group>
</>}</>);};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={10} />
      <directionalLight intensity={0.10} position={[10, 10, 5]} />
      <Suspense fallback={null}>
        <ModelViewer />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export const Container1 = styled.div`
    width: 50%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Corrected misspelling from 'aling-itens' to 'align-items' */

    @media only screen and (max-width: 780px) {
      width: 100%;
      height: 500px;
    }
`;


const Container5 = () => {
  return (
    <Container1 >
      <Scene />
    </Container1>
  );
};

export default Container5;
