import { Container } from '../Geral/geral/ContainerGeral';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Ambulance from "./textures/Material_84_baseColor.png";

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
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI /2}
        maxAzimuthAngle={Math.PI / 2}
      />
      {scene && <primitive object={scene} scale={[0.70, 0.70, 0.70]} />}
    </Canvas>
  );
};

const Container5 = () => {
  return (
    <Container>
      <ModelViewer modelPath="public/Ambulance.gltf" />
    </Container>
  );
};

export default Container5;
