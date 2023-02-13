import * as THREE from 'three';
import React, { useRef, Suspense } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial, OrbitControls } from '@react-three/drei';
import vertShader from '../shader/vertex.glsl';
import fragShader from '../shader/fragment.glsl';

const GradientMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uMouse: new THREE.Vector2(0.0, 0.0)
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

    console.log(`position: ${camera.position.x}, ${camera.position.y}, ${camera.position.z}`);
    console.log(`rotation: ${camera.rotation.x}, ${camera.rotation.y}, ${camera.rotation.z}`);
  })

  return (
    <mesh>
      <sphereBufferGeometry args={[1.5, 32, 32]}/>
      <gradientMaterial uColor={"lightblue"} 
                        ref={ref} 
                        side={THREE.DoubleSide}
                         />
    </mesh>
  );
}

const Scene = () => {
  return (
    <Canvas camera={{ position: [0.1, 0.5, 0.1] }}>
      <Suspense fallback={null}>
        <GradientEffect />
      </Suspense>
      {/* <OrbitControls /> */}
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
