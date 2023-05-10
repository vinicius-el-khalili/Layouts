import Link from "next/link"
export default function Home() {
  return (
    <>
      <Link href={"/Layouts/basics"}>Basics</Link>
      <Link href={"/Layouts/multicolumns"}>Multi Columns</Link>
      <Link href={"/Layouts/fullwidth"}>Full Width</Link>
      <Link href={"/Layouts/holygrail"}>Holy Grail</Link>
      <Link href={"/Layouts/masonry"}>Masonry</Link>
    </>
  )
} 
