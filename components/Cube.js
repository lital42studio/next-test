import React from 'react';
import { useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import { motion, useScroll, useTransform, useTime } from 'framer-motion';
import { motion as motion3D } from 'framer-motion-3d';
import { degreesToRadians, progress, mix } from "popmotion";
import THREE from 'three'

function Cube() {

  let { scrollYProgress } = useScroll()
  let yAngle = useTransform(scrollYProgress, [0, 1], [0.001, degreesToRadians(180)])
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();
  

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* <ambientLight intensity={0.1} /> */}
      <pointLight position={[0, 20, 10]} intensity={1.5} />
      <mesh>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={"#6be092"} />
      </mesh>
      {/* <OrbitControls /> */}
    </>
  );
}

export default Cube;
