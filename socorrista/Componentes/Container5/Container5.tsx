import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Container } from '../Geral/geral/ContainerGeral';

interface ModelViewerProps {
  getModelPath: () => string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ getModelPath }) => {
  const modelPath = getModelPath();
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
      {scene && <primitive object={scene} scale={[1.5, 1.5, 1.5]} />}
    </Canvas>
  );
};

const Container5 = () => {
  const getModelPath = () => {
    return "scene.gltf";
  };
  return (
    <Container>
      <ModelViewer getModelPath={getModelPath} />
    </Container>
  );
};

export default Container5;
