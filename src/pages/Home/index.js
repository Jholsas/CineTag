import Banner from "components/Banner";
import Card from "components/Card";
import Footer from "components/Footer";
import Header from "components/Header";
import Title from "components/Title";

function Home(){
    return(
        <>
            <Header />
            <Banner image="home" />
            <Title>
                <h1>A place to save your videos and movies!</h1>
            </Title>
            <Card id='1' title='Bonny Cat' thumbnail='' />
            <Footer />
        </>
    )
}

export default Home;