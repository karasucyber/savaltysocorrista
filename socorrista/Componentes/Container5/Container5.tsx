import { Container } from '../Geral/geral/ContainerGeral';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface ModelViewerProps {
  modelPath: string; 
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <Canvas>
      <ambientLight intensity={10} />
      <directionalLight intensity={10} position={[10, 10, 5]} />
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 6}
        minAzimuthAngle={-Math.PI / 5}
        maxAzimuthAngle={Math.PI / 0}
      />
      {scene && <primitive object={scene}  scale={[0.70, 0.70, 0.70]} />}
    </Canvas>
  );
};

const Container5 = () => {
  const modelPath = "public/Ambulance.gltf"; 

  return (
    <Container>
      <ModelViewer modelPath={modelPath} /> 
    </Container>
  );
};

export default Container5;
