import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

function Box (props) {
  // This reference gives us direct access to the THREE.Mesh object.
  const ref = useRef()
  const { viewport } = useThree()

  // Hold state for hovered and clicked events.
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  // Subscribe this component to the render-loop and rotate the mesh every frame.
  useFrame((state,delta) => {
    const x = (state.mouse.x * viewport.width) / 2
    const y = (state.mouse.y * viewport.height) / 2
    ref.current.rotation.x += delta;
    ref.current.position.x = x;
    ref.current.position.y = y;
  })

  // Return the view.
  // These are regular three.js elements expressed in JSX.
  return (
    <mesh      
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    > 
      <boxGeometry args={[1, 1, 1]} />      
      <meshStandardMaterial color={hovered ? 'green' : 'orange' } />    
    </mesh>
  )
}

function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.5} />      
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />      
        <pointLight position={[-10, -10, -10]} />      
        <Box />
      </Canvas>
    </div>
  );
}

export default Home;
