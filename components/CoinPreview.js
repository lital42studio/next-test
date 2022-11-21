import Link from "next/link"
import styles from "../styles/Coins.module.scss"
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const CoinPreview = ({coin}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})

  return ( 
    <Link href={`/coins/${coin.id}`} ref={ref}>
      <div className={styles.coin}>
        <h2>{coin.name}</h2>
        <img src={coin.icon} alt={coin.name} style={{transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s"}} />
        <p>{coin.price}</p>
      </div>
    </Link>
   );
}
 
export default CoinPreview;