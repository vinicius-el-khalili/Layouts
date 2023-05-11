import style from "./masonry.module.css"

const NavButton = ({menuToggle,handleMenuButton}) => {
    return (
        <>
            <div className={style.navButton} onClick={handleMenuButton}>
                
            </div>
        </>
    );
}
 
export default NavButton;