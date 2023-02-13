import * as THREE from 'three';
import React, { useRef, Suspense } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
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
      <planeBufferGeometry args={[0.4, 0.6, 16, 16]}/>
      <gradientMaterial uColor={"hotpink"} ref={ref} wireframe />
    </mesh>
  );
}

const Scene = () => {
  return (
    <Canvas camera={{ fov: 10 }}>
      <Suspense fallback={null}>
        <GradientEffect />
      </Suspense>
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
