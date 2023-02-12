import style from "./masonry.module.css"

const NavButton = ({handleMenuButton}) => {
    return (
        <>
            <div className={style.navButton} onClick={handleMenuButton}>
                X
            </div>
        </>
    );
}
 
export default NavButton;