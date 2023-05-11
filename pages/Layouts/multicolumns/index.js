import style from "./multicolumns.module.scss"
import Image from "next/image";
const multicolumns = () => {
    return (
        <div className={style.body}>
            <header className={style.header}>
                Multi Columns
            </header>
            <div className={style.gridContainer}>
                <article className={style.mainArticle}>
                    <div className={style.mainPicture}>
                        <Image src={"/img/img1.jpg"} fill={true} alt="image"></Image>
                    </div>
                    <div className={style.mainText}>
                        <h2>Title</h2>                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam commodi ipsa neque quae hic, fugit provident sit, facere, nihil eius nesciunt delectus sunt velit quisquam tempora dignissimos corporis pariatur error! Et, sit?</p>
                    </div>
                </article>

                <article className={style.article}>
                    <div className={style.smallPicture}>
                        <Image src={"/img/img1.jpg"} fill={true} alt="image"></Image>
                    </div>
                    <div className={style.smallText}>
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam commodi ipsa neque quae hic, fugit provident sit, facere, nihil eius nesciunt delectus sunt velit quisquam tempora dignissimos corporis pariatur error! Et, sit?</p>
                    </div>
                </article>

                <article className={style.article}>
                    <div className={style.smallPicture}>
                        <Image src={"/img/img2.jpg"} fill={true} alt="image"></Image>
                    </div>
                    <div className={style.smallText}>
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam commodi ipsa neque quae hic, fugit provident sit, facere, nihil eius nesciunt delectus sunt velit quisquam tempora dignissimos corporis pariatur error! Et, sit?</p>
                    </div>
                </article>

                <article className={style.article}>
                    <div className={style.smallPicture}>
                        <Image src={"/img/img3.jpg"} fill={true} alt="image"></Image>
                    </div>
                    <div className={style.smallText}>
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam commodi ipsa neque quae hic, fugit provident sit, facere, nihil eius nesciunt delectus sunt velit quisquam tempora dignissimos corporis pariatur error! Et, sit?</p>
                    </div>
                </article>


            </div>
        </div>
    );
}
 
export default multicolumns;