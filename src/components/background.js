import * as THREE from 'three';
import React, { useRef, useState, Suspense, forwardRef, useMemo } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial, OrbitControls } from '@react-three/drei';
import { Vector2 } from 'three';

import vertShader from '../shader/gradientVertex.glsl';
import fragShader from '../shader/gradientFragment.glsl';
import { EffectComposer, Bloom, HueSaturation } from '@react-three/postprocessing';

import styles from "./background.module.css";

const GradientMaterial = shaderMaterial(
  // Uniforms
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

  useFrame(({clock, raycaster, scene}) => {
    ref.current.uTime = clock.getElapsedTime();

    // get point where ray intersects sphere
    const intersections = raycaster.intersectObjects(scene.children)
    if (intersections.length >= 1) {
      ref.current.uMouse = intersections[0].point;
    }
  });

  return (
    <mesh>
      <sphereGeometry args={[1.5, 64, 32]}/>
      <gradientMaterial uColor={"lightblue"} 
                        ref={ref} 
                        side={THREE.DoubleSide}
                         />
    </mesh>
  );
}

const Droplet = () => {

  const { viewport } = useThree();
  const dropletRef = useRef();

  useFrame(({ mouse }) => {
    const mouseX = (mouse.x * viewport.width) / 2
    const mouseY = (mouse.y * viewport.height) / 2
    const currentX = dropletRef.current.position.x;
    const currentY = dropletRef.current.position.y;
    const diff = new Vector2(mouseX - currentX, mouseY - currentY);
    
    console.log(diff)
    const easing = 0.05;
    const scaleEasing = 0.08;

    dropletRef.current.position.x += diff.x * easing
    dropletRef.current.position.y += diff.y * easing

    // dropletRef.current.scale.x = diff.length() * scaleEasing + 0.1;
    // dropletRef.current.scale.y = diff.length() * scaleEasing + 0.1;
    // dropletRef.current.scale.z = diff.length() * scaleEasing + 0.1;
  });

  return (
    <mesh position={dropletRef.mouse} ref={dropletRef} scale={0.07}>
        <sphereGeometry args={[1, 32, 32]}/>
        <meshPhysicalMaterial roughness={0} transmission={1} thickness={20} />
    </mesh>
  )
}

const Scene = (props) => {
  return (
    <>
      <GradientEffect/>
      {props.home ? <Droplet /> : null}

      <EffectComposer > 
        <HueSaturation saturation={0.5}/>
        <Bloom />
      </EffectComposer>
    </>
  );
}

// home: if true then it shows the interactive blob thing
export function Background(props) {

  return (
  <div className={styles.background}>
    <Canvas camera={{ position: [0, 0, 1], fov: 40}}>
      {/* <OrbitControls /> */}
      <Suspense fallback={null}>
        <Scene home={props.home}/>
      </Suspense>
    </Canvas>
  </div>
  );
}