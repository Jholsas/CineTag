import Banner from "components/Banner";
import styles from "./Favorites.module.css"
import Title from "components/Title";
import Cards from "components/Card";

function Favorites(){
    return(
        <>
            <Banner image="favorites" />          
            <Title>
                <h1>My Favorites</h1>
            </Title>
            <section className={styles.container}>
                <Cards id='1' title='Cat Bony'></Cards> 
            </section>
        </>
    )
}

export default Favorites;
