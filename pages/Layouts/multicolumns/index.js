import style from "./multicolumns.module.css"
const multicolumns = () => {
    return (
        <>
            <div className={style.gridContainer}>
                <div className={style.pageTitle}><h1>Page title</h1></div>
                <div className={style.mainPicture}></div>
                <div className={style.mainText}>
                    <h2>Main Text</h2>
                    <p>lorem ipstesium stuff lorem ipstesium stuff lorem ipstesium stuff lorem ipstesium stuff lorem ipstesium stuff lorem ipstesium stuff lorem ipstesium stuff </p>
                </div>
                <div className={style.gallery}>
                    <div className={style.smallPicture}></div>
                    <div className={style.smallPicture}></div>
                    <div className={style.smallPicture}></div>    
                </div>
            </div>
        </>
    );
}
 
export default multicolumns;