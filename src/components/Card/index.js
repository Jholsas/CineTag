import styles from "./Card.module.css";
import favoriteIcon from "./favorite_outline.png"


function Cards({id, title, thumbnail}){
    return(
        <div className={styles.container}>
            <img src={thumbnail} alt={title} className={styles.thumbnail}/>
            <h2>{title}</h2>
            <img src={favoriteIcon}
                alt="Favorite Move"
                className={styles.favorite} />
        </div>  
    )
}

export default Cards;