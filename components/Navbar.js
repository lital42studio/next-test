import Link from "next/link";
import styles from "../styles/Navbar.module.scss"

const Navbar = () => {
  return ( 
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/coins">Coins</Link>
        <Link href="/three-js">Three.js</Link>
        <Link href="/scroll-3d">3D Scroll</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;