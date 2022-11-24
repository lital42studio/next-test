import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import HeadSeo from '../components/HeadSeo'


export default function Home() {
  const images = [
    {src: '/home-assets/file2.svg', alt: 'Some image'},
    {src: '/home-assets/file3.svg', alt: 'Some image'},
    {src: '/home-assets/file4.svg', alt: 'Some image'},
    {src: '/home-assets/file5.svg', alt: 'Some image'},
    {src: '/home-assets/file6.png', alt: 'Some image'},
    {src: '/home-assets/file7.png', alt: 'Some image'},
  ]

  let { scrollY } = useScroll()
  let y = useTransform(scrollY, [0,250], ['0%', '50%'])

  return (
    <>
    <HeadSeo title="homepage" description="This is my amazing homepage!" />
    <div className={styles.container}>
      <motion.div className={styles.hero} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 1, delay: 0.2}} style={{y}}>
        <motion.h1 initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.5}}>Hello There!</motion.h1>
        <div className={styles.mainImage}>
        <Image src="/home-assets/file1.svg" width="1000" height="400" alt="/"  />
        </div>
      </motion.div>
      <div className={styles.gallery}>
        {images.map((image, index) => {
          return <motion.div className={styles.imgCont} key={index} whileHover={{scale:1.5, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)"}}><Image width="300" height="150" src={image.src} alt={image.alt} /></motion.div>
        })}
        {images.map((image, index) => {
          return <motion.div className={styles.imgCont} key={index} whileHover={{scale:1.5, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)"}}><Image width="300" height="150" src={image.src} alt={image.alt} /></motion.div>
        })}
        {images.map((image, index) => {
          return <motion.div className={styles.imgCont} key={index} whileHover={{scale:1.5, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)"}}><Image width="300" height="150" src={image.src} alt={image.alt} /></motion.div>
        })}
      </div>
    </div>
    </>
  )
}
