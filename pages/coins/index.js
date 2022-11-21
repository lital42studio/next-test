import Link from "next/link";
import styles from "../../styles/Coins.module.scss"
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import CoinPreview from "../../components/CoinPreview";

const CoinList = ({coinData}) => {

  return ( 
    <div className={styles.coinsWrapper}>
      {coinData.coins.map((coin) => {
        return(
          <CoinPreview coin={coin} key={coin.symbol} />
        )
      })}
    </div>
   );
}
 export const getStaticProps = async () => {
   const data = await fetch('https://api.coinstats.app/public/v1/coins?skip=0')
   .then(data => {
    return data.json();
   })

   return {
     props: {
       coinData: data
     }
   }
 }
export default CoinList;