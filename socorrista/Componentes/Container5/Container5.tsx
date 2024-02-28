import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Container } from '../Geral/geral/ContainerGeral';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from '@react-hook/media-query';
const ModelViewer = () => {
  const gltf = useLoader(GLTFLoader, '/scene.gltf');
  const group:any = useRef();
  const isMobileDevice = useMediaQuery("(max-width: 780px)")

  return (<>

    {isMobileDevice ? (
      <>
      <group ref={group}>
<primitive object={gltf.scene} position={[0,-2,0]} scale={[1, 1, 1.]} />
</group>
 
      </>
  ) :<>
       <group ref={group}>
<primitive object={gltf.scene} scale={[1.5, 1.5, 1.5]} />
</group>
</>
  



  }

</>
    
   
  );
};

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

const Container5 = () => {
  return (
    <Container>
      <Scene />
    </Container>
  );
};

export default Container5;
