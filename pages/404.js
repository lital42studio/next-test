import Link from "next/link";

const PageNotFound = () => {
  return ( 
    <div>
      <h1>Page Nor Found</h1>
      <Link href="/">Click here to go back home</Link>
    </div>
   );
}
 
export default PageNotFound;