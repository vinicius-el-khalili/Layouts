import style from "./masonry.module.css"
import Image from "next/image"
import cherry1 from "@/public/img/cherry1.jpg"
import cherry2 from "@/public/img/cherry2.jpg"
import cherry3 from "@/public/img/cherry3.jpg"
import cherry4 from "@/public/img/cherry4.jpg"
import NavButton from "./navButton"
import { useState } from "react"
const Masonry = () => {
    const [menuToggle,setMenuToggle] = useState(true)
    function handleMenuButton(){
        menuToggle?
            setMenuToggle(false)
            :
            setMenuToggle(true)
    }
    return (<>
        <div className={style.body}>

            <nav className={style.nav}>
                <NavButton handleMenuButton={handleMenuButton}></NavButton>
                <div className={style.pageTitle}>
                    <div>
                        <h3>Cherry</h3>
                        <h1>BLOSSOM</h1>                        
                    </div>
                </div>
                
                <div style={menuToggle?{display:"block"}:{display:"none"}}>
                    <div className={style.menu}>
                        <h3>Section</h3>
                        <h3>Section</h3>
                        <h3>Section</h3>
                        <h3>Section</h3>
                    </div>    
                </div>
                


            </nav>

            <div className={style.gridContainer}>

                <Image src={cherry1} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry2} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry3} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry4} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry4} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry3} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry2} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry1} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry2} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry4} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry1} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry3} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry3} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry1} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry4} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>
                <Image src={cherry2} style={{display:"block",width:"100%",height:"auto"}} className={style.picture} alt="picture"></Image>

            </div>



        </div>
        </>);
}
 
export default Masonry;