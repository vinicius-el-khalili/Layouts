import Image from "next/image";
import style from "./fullwidth.module.css"
import pic1 from "@/public/img/fw1.jpg"
import pic2 from "@/public/img/fw2.jpg"

const FullWidth = () => {
    return ( <div className={style.body}>
        <div className={style.gridContainer}>

            <section className={style.mainSection}>
                <nav>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </nav>
                <section>
                    <h1>Rustic</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum perspiciatis fuga eveniet voluptas illo eligendi voluptatum!</p>
                </section>
            </section>

            <section className={style.pictureSection1}>
                <Image src={pic1} fill style={{objectFit:"cover"}} alt="image"></Image>
            </section>
            <section className={style.textSection1}>
                <h2>Lorem</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </section>

            <section className={style.textSection2}>
                <h2>Lorem</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </section>
            <section className={style.pictureSection2}>
                <Image src={pic2} fill style={{objectFit:"cover"}} alt="image"></Image>
            </section>

            
            
            

            

        </div>
    </div>);
}
 
export default FullWidth;