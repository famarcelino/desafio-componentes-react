import './styles.css';
import CardText from '../CardText';

export default function CardBottom() {
    return (
        <div className='dsct-card-bottom-container'>
            <h3>O que estão dizendo</h3>
            <div>
                <CardText />
                <CardText />
                <CardText />
                <CardText />
                <CardText />
            </div>
        </div>
    );
}