import * as THREE from 'three';
import React, { useRef, Suspense } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial, OrbitControls } from '@react-three/drei';
import vertShader from '../shader/vertex.glsl';
import fragShader from '../shader/fragment.glsl';
import { WaterEffect } from '../shader/waterShader'
import { DodecahedronGeometry } from 'three';
import { ChromaticAberration, EffectComposer, HueSaturation, TiltShift } from '@react-three/postprocessing';

const GradientMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uMouse: new THREE.Vector3(0.0, 0.0, 0.0)
  },
  vertShader,
  fragShader
)

extend({ GradientMaterial });

const GradientEffect = () => {

  const ref = useRef();
  const {viewport } = useThree();

  useFrame(({clock, raycaster, scene, camera}) => {
    ref.current.uTime = clock.getElapsedTime();
    // ref.current.uMouse = pointer

    const intersections = raycaster.intersectObjects(scene.children)
    if (intersections.length >= 1) {
      ref.current.uMouse = intersections[0].point;
    }

  });

  return (
    <mesh>
      <sphereBufferGeometry args={[1.5, 64, 32]}/>
      {/* <planeBufferGeometry args={[5, 5, 32, 32]}/> */}
      <gradientMaterial uColor={"lightblue"} 
                        ref={ref} 
                        side={THREE.DoubleSide}
                         />
    </mesh>
  );
}

const Scene = () => {
  const ref = useRef()
  return (
    <>
      <GradientEffect />
      <OrbitControls />
      <EffectComposer >
        <WaterEffect  ref={ref}/>
      </EffectComposer>
    </>
  );
}

function Gradient() {
  return (
  <div style={{ position:"absolute", left:0, width: "100vw", height: "100vh" }}>
    <Canvas camera={{ position: [0, 0, 0.13], fov: 20}}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
  );
}

export default Gradient;
