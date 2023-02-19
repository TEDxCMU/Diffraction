import * as THREE from 'three';
import React, { useRef, Suspense } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial, OrbitControls } from '@react-three/drei';
import vertShader from '../shader/vertex.glsl';
import fragShader from '../shader/fragment.glsl';
import { DodecahedronGeometry } from 'three';

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

    // camera.rotateX(0.001);
    // camera.rotateY(0.001);
    // camera.rotateZ(0.001);

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
  return (
    <Canvas camera={{ position: [0, 0, 0.13], fov: 20}}>
      <Suspense fallback={null}>
        <GradientEffect />
        {/* <mesh>
          <dodecahedronGeometry args={[1,0]} position={[0,0,-0.15]} />
          <meshPhysicalMaterial clearcoat={1} clearcoatRoughness={0} transmission={1} thickness={0.9} roughness={0} toneMapped={false} />
        </mesh> */}
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
