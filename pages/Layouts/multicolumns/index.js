import style from "./multicolumns.module.css"
import Image from "next/image";
const multicolumns = () => {
    return (
        <div className={style.body}>
            <header className={style.header}>
                <h1>Page title</h1>
            </header>
            <div className={style.gridContainer}>
                <article className={style.mainArticle}>
                    <div className={style.mainPicture}>
                        <Image src={"/img/img1.jpg"} fill={true} alt="image"></Image>
                    </div>
                    <div className={style.mainText}>
                        <h2>Title</h2>                        
                        <p>Lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem</p>
                    </div>
                </article>

                <article className={style.article}>
                    <div className={style.smallPicture}>
                        <Image src={"/img/img1.jpg"} fill={true} alt="image"></Image>
                    </div>
                    <div className={style.smallText}>
                        <h3>Title</h3>
                        <p>Lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem</p>
                    </div>
                </article>

                <article className={style.article}>
                    <div className={style.smallPicture}>
                        <Image src={"/img/img2.jpg"} fill={true} alt="image"></Image>
                    </div>
                    <div className={style.smallText}>
                        <h3>Title</h3>
                        <p>Lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem</p>
                    </div>
                </article>

                <article className={style.article}>
                    <div className={style.smallPicture}>
                        <Image src={"/img/img3.jpg"} fill={true} alt="image"></Image>
                    </div>
                    <div className={style.smallText}>
                        <h3>Title</h3>
                        <p>Lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem ipsum epstemium stuff lorem</p>
                    </div>
                </article>


            </div>
        </div>
    );
}
 
export default multicolumns;