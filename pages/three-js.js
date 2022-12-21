import { OrbitControls, PerspectiveCamera, PresentationControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useState } from "react"
import HeadSeo from "../components/HeadSeo"
import { Laptop } from "../components/Laptop"
import { useGLTF } from '@react-three/drei'
import styles from '../styles/Three-js.module.scss'

const ThreeJs = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)

  return ( 
    <>
      <HeadSeo title="Three.js" description="Three.js with Framer motion" />
      <div className={styles.container}>
        <div className={styles.preview} onMouseEnter={() => {setIsHover(true); setIsOpen(true)}} onMouseLeave={() => {setIsHover(false); setIsOpen(false)}}>
        <Canvas>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 50]} />
          <PresentationControls zoom={5} >
            <Laptop isOpen={isOpen} isHover={isHover} />
          </PresentationControls>
          <PerspectiveCamera makeDefault position={[0, 3, 15]} />
          {/* OrbitControls allows us to rotate the camera around the object with the mouse */}
          {/* <OrbitControls /> */}
        </Canvas>
        </div>
        {/* <div className={styles.footer}>
          <label className={styles.switch}>
            <input type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
            <span className={styles.slider}></span>
          </label>
        </div> */}
      </div>
    </>
   )
}
 
export default ThreeJs;