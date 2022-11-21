import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import styles from "../../styles/Coins.module.scss"


const CoinDetails = () => {
  const router = useRouter()
  const {coinId} = router.query
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.coinstats.app/public/v1/coins/${coinId}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setLoading(false)
      console.log(data.coin);
      })
  }, [coinId])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>


  return ( 
    <div className={styles.coinDetails}>
      <img src={data.coin.icon} alt={coinId} />
      <h3>{data.coin.name}</h3>
      <div className={styles.details}>
        <div className={styles.row}>
        <h5>Symbol: </h5><p>{data.coin.symbol}</p>
        </div>
        <div className={styles.row}>
        <h5>Rank: </h5><p>{data.coin.rank}</p>
        </div>
        <div className={styles.row}>
        <h5>Price: </h5><p>{data.coin.price}</p>
        </div>
        <div className={styles.row}>
        <h5>Price in BTC: </h5><p>{data.coin.priceBtc}</p>
        </div>
        <div className={styles.row}>
        <h5>Volume: </h5><p>{data.coin.volume}</p>
        </div>
        <div className={styles.row}>
        <h5>Market Cap: </h5><p>{data.coin.marketCap}</p>
        </div>
        <div className={styles.row}>
        <h5>Available Supply: </h5><p>{data.coin.availableSupply}</p>
        </div>
        <div className={styles.row}>
        <h5>Total Supply: </h5><p>{data.coin.totalSupply}</p>
        </div>
      </div>
    </div>
   );
}

export default CoinDetails;