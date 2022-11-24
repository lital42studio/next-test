import Image from "next/image";
import Link from "next/link";
import styles from "../styles/404.module.scss"

const PageNotFound = () => {
  return ( 
    <div className={styles.notFound}>
      <h1>Oh no, you broke our robot!</h1>
      <Link href="/">Click here to go back home</Link>
      <Image src="/404.jpg" alt="404" width="500" height="500" />
    </div>
   );
}
 
export default PageNotFound;