import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Button } from "@mui/material";
import Layout from "../components/Layout";
// import { PerspectiveCamera, OrbitControls, Sky, Stars } from "@react-three/drei"
// import { Physics, useBox, usePlane } from "@react-three/cannon";

const Cube = () => {
  const ref = useRef(null);

  useFrame(() => {
    if (!ref.current) {
      return;
    }
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.015;
  });

  return (
    <mesh ref={ref} position={[ 0, 0, 0 ]}>
      <boxGeometry />
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
}

// const Box = (props) => {
//   const [ ref, api ] = useBox(() => ({mass: 1, position: props.position}))
//   return (
//     <mesh onClick={() => {
//       api.velocity.set(0, 2, 0);
//     }} ref={ref}>
//       <boxBufferGeometry args={[ 1, 1, 1 ]}/>
//       <meshLambertMaterial color="hotpink" />
//     </mesh>
//   )
// }

// const Plane = () => {
// //   const [ ref ] = usePlane(() => ({rotation: [ -Math.PI / 2, 0, 0 ]}))
//   return (
//     // <mesh ref={ref}>
//     <mesh rotation={[ -Math.PI / 2, 0, 0 ]}>
//       <planeBufferGeometry args={[ 90, 90 ]}/>
//       <meshLambertMaterial color="lightgray" />
//     </mesh>
//   )
// }

const Demo = () => {
  const [ show, setShow ] = useState(false);

  const handleButtonClick = () => {
    setShow(!show);
  }

  return (
    <Layout title="Demo">
      <p>Welcome to the demo page!</p>
      <Button onClick={handleButtonClick} variant="contained">Toggle Demo</Button>
      {show && (
        <Canvas>
          <PerspectiveCamera makeDefault fov={75} position={[ -2, 2, 2 ]} />
          <OrbitControls />
          <ambientLight intensity={0.15}/>
          <pointLight intensity={0.75} position={[ 20, 20, 20 ]} />
          <Cube />
          {/* <PerspectiveCamera makeDefault fov={75} position={[ 0, 1, 5 ]} />
          <OrbitControls />
          <Sky distance={450000} sunPosition={[ 1, 1, 1 ]} inclination={0} azimuth={0.25} />
          <Stars />
          <ambientLight intensity={0.5} />
          <spotLight position={[ 50, 25, 50 ]} angle={Math.PI / 3}/>
          <Physics>
          <Box position={[ 0, 5, 0 ]}/>
          <Plane />
          </Physics> */}
        </Canvas>
      )}
    </Layout>
  );
}

export default Demo;
