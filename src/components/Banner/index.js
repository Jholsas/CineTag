import styles from "./Banner.module.css";

function Banner({image}){    
    return(
        <div 
            className={styles.thumbnail}             
            style={{backgroundImage: `url('/image/banner-${image}.png')`}} />
    )
}
export default Banner;