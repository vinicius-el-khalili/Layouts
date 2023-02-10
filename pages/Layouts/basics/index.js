import style from "./basics.module.css"
const MultiColumn = () => {
    return (
        <div className={style.pageBody}>
            <div className={style.gridContainer}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
 
export default MultiColumn;