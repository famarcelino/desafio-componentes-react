import Card from "../../components/Card";
import CardBottom from "../../components/CardBottom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";

export default function Catalog() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <Card />
                    <CardBottom />
                </section>
            </main>
            <Footer />
        </>
    );
}