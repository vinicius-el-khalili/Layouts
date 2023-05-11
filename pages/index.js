import Link from "next/link"
import style from "@/styles/Home.module.scss"
import { v4 } from "uuid"

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <div>
        {
          "RESPONSIVE".split("").map(char=>(
            <p key={v4()}>{char}</p>
          ))
        }
        </div>
        <div>
        {
          "LAYOUTS".split("").map(char=>(
            <p key={v4()}>{char}</p>
          ))
        }
        </div>
      </div>

      <div/>
      <div className={style.menu}>
        <Link className={style.link} href={"/Layouts/multicolumns"}>Multi Columns</Link>
        <Link className={style.link} href={"/Layouts/fullwidth"}>Full Width</Link>
        <Link className={style.link} href={"/Layouts/holygrail"}>Holy Grail</Link>
        <Link className={style.link} href={"/Layouts/masonry"}>Masonry</Link>
      </div>
    </div>
  )
} 
