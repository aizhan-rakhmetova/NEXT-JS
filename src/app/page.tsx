import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
      <h1>
        Home page
          <div><Link href={"/products"}> Products List </Link></div>
      </h1>
  );
}
