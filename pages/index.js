import Link from "next/link"
export default function Home() {
  return (
    <>
      <Link href={"/Layouts/basics"}>Basics</Link>
      <Link href={"/Layouts/multicolumns"}>Multi-columns</Link>
    </>
  )
} 
