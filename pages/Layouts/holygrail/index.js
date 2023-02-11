import style from "./holygrail.module.css"
import Image from "next/image";
const HolyGrail = () => {
    return (
        <div className={style.body}>

            <div className={style.gridContainer}>
                
                <header className={style.header}>
                    <h1>Deep Waters</h1>
                </header>
                
                <section className={style.menu}>
                    <h4>Categories</h4>
                    <div>
                        <p>Category</p>
                        <p>Category</p>
                        <p>Category</p>
                        <p>Category</p>
                        <p>Category</p>
                        <p>Category</p>
                    </div>
                </section>

                <section className={style.content}>
                    <h1>World's most beautiful waters</h1>
                    <div>
                        <Image src={"/img/caribe.jpg"} fill={true} style={{objectFit:"cover"}}></Image>
                    </div>
                    <article>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, odit autem deleniti quam fugit id vero consequatur eaque rerum ab recusandae saepe, enim tempora ullam similique dolore. Natus pariatur fugit praesentium ab, excepturi at officia sint quod cupiditate placeat ducimus et fugiat tempora minima nemo iure eius quis vero aspernatur non debitis doloribus aperiam? Eveniet ullam similique quibusdam, cum consectetur consequatur hic culpa accusantium, illum qui rem ipsa quae, delectus ex accusamus id ad. In facere, reiciendis, doloremque sint rerum unde fuga vel sit velit enim accusamus porro fugit aut error quia ea, impedit commodi cumque quas recusandae dolorem vero?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, odit autem deleniti quam fugit id vero consequatur eaque rerum ab recusandae saepe, enim tempora ullam similique dolore. Natus pariatur fugit praesentium ab, excepturi at officia sint quod cupiditate placeat ducimus et fugiat tempora minima nemo iure eius quis vero aspernatur non debitis doloribus aperiam? Eveniet ullam similique quibusdam, cum consectetur consequatur hic culpa accusantium, illum qui rem ipsa quae, delectus ex accusamus id ad. In facere, reiciendis, doloremque sint rerum unde fuga vel sit velit enim accusamus porro fugit aut error quia ea, impedit commodi cumque quas recusandae dolorem vero?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, odit autem deleniti quam fugit id vero consequatur eaque rerum ab recusandae saepe, enim tempora ullam similique dolore. Natus pariatur fugit praesentium ab, excepturi at officia sint quod cupiditate placeat ducimus et fugiat tempora minima nemo iure eius quis vero aspernatur non debitis doloribus aperiam? Eveniet ullam similique quibusdam, cum consectetur consequatur hic culpa accusantium, illum qui rem ipsa quae, delectus ex accusamus id ad. In facere, reiciendis, doloremque sint rerum unde fuga vel sit velit enim accusamus porro fugit aut error quia ea, impedit commodi cumque quas recusandae dolorem vero?</p>
                    </article>
                </section>

                <section className={style.sidebar}>
                    <h5>Published on:</h5>
                    <p>Feb 10th 2023</p>
                    <h5>In the category:</h5>
                    <p>Category two</p>
                    <h5>Written by:</h5>
                    <p>Me</p>
                </section>

                <footer className={style.footer}>
                    Copyright and stuff
                </footer>

            </div>
        </div>
    );
}
 
export default HolyGrail;





                                ;






                                