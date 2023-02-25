import * as THREE from 'three';
import React, { useRef, useState, Suspense, forwardRef, useMemo } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial, OrbitControls } from '@react-three/drei';
import vertShader from '../shader/vertex.glsl';
import fragShader from '../shader/fragment.glsl';
import { FunEffect } from '../shader/funShader'
import { Effect } from '../shader/rippleDistortEffect'
import { ImagePlane } from '../shader/ImagePlane';
import { BadTVEffect } from 'shader/BadTV';
import { WaterTexture, WaterEffect } from 'shader/waterShader';
import { useControls } from 'leva'
import { ChromaticAberration, EffectComposer, Bloom, HueSaturation, TiltShift } from '@react-three/postprocessing';

const GradientMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor1: new THREE.Color(0xff813a),
    uColor2: new THREE.Color(0xdf43ff),
    uColor3: new THREE.Color(0x426bff),
    uMouse: new THREE.Vector3(0.0, 0.0, 0.0)
  },
  vertShader,
  fragShader
)

extend({ GradientMaterial });

const GradientEffect = () => {

  const ref = useRef();

  useFrame(({clock, raycaster, scene, camera, mouse}) => {
    ref.current.uTime = clock.getElapsedTime();

    const intersections = raycaster.intersectObjects(scene.children)
    if (intersections.length >= 1) {
      ref.current.uMouse = intersections[0].point;
    }

    let rotationFactor = 0.1;
    camera.rotation.x = mouse.x * rotationFactor;
    camera.rotation.y = mouse.y * rotationFactor;
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
  const { distortion, distortion2, speed, rollSpeed } = useControls('BadTV', {
    distortion: { value: 16.0, min: 0, max: 50.0 },
    distortion2: { value: 0.0, min: 0, max: 50.0 },
    speed: { value: 0.05, min: 0, max: 5.0 },
    rollSpeed: { value: 0, min: 0, max: 5.0 }
  })

  const BadTV = forwardRef(({ distortion = 3.0, distortion2 = 5.0, speed = 0.2, rollSpeed = 0.1 }, ref) => {
    const effect = useMemo(() => new BadTVEffect({ distortion, distortion2, speed, rollSpeed }), [
      distortion,
      distortion2,
      speed,
      rollSpeed
    ])
    return <primitive ref={ref} object={effect} dispose={null} />
  })

  return (
    <>
      <GradientEffect />
      <EffectComposer >
        <BadTV distortion={distortion} distortion2={distortion2} speed={speed} rollSpeed={rollSpeed} />
        <HueSaturation saturation={0.2}/>
      </EffectComposer>
    </>
  );
}

function Gradient() {

  return (
  <div style={{ position:"absolute", left:0, width: "100vw", height: "100vh" }}>
    <Canvas camera={{ position: [0, 0, 0.13], fov: 20}}>
      <OrbitControls />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
  );
}

export default Gradient;
