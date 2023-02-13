import * as THREE from 'three';
import React, { useRef, Suspense } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial, OrbitControls } from '@react-three/drei';
import vertShader from '../shader/vertex.glsl';
import fragShader from '../shader/fragment.glsl';

const GradientMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0)
  },
  vertShader,
  fragShader
)

extend({ GradientMaterial });

const GradientEffect = () => {

  const ref = useRef();

  useFrame(({clock}) => {
    ref.current.uTime = clock.getElapsedTime();
  })

  return (
    <mesh>
      <sphereBufferGeometry args={[1.5, 32, 32]}/>
      <gradientMaterial uColor={"lightblue"} ref={ref} side={THREE.DoubleSide}/>
    </mesh>
  );
}

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1.3], fov: 10 }}>
      <Suspense fallback={null}>
        <GradientEffect />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

function Gradient() {
  return (
  <div style={{ position:"absolute", left:0, width: "100vw", height: "100vh" }}>
    <Scene />
  </div>
  );
}

export default Gradient;
