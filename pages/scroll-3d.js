import { useState } from "react"
import HeadSeo from "../components/HeadSeo"
import styles from '../styles/Three-js.module.scss'
import Cube from "../components/Cube"
import { motion, useScroll, useTransform } from 'framer-motion';
import { motion as motion3D } from 'framer-motion-3d';
import { Canvas } from "@react-three/fiber"

const Scroll3D = () => {

  return ( 
    <>
      <HeadSeo title="Three.js" description="Three.js with Framer motion" />
      <div className={styles.container}>
        <div>
          <h1>Scroll down</h1>
          <Canvas style={{ width: '100%', height: '100%', position: 'fixed', top: '3vw', left: '0' }}>
            <Cube />
          </Canvas>
        </div>
      </div>
    </>
   )
}
 
export default Scroll3D;