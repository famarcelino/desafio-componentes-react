import CardCar from "../CardCar";
import "./styles.css";

export default function Card() {
    return (
        <div className="dsct-card-container">
            <h1>Venha nos visitar</h1>
            <CardCar />
            <CardCar />
        </div>
    );
}