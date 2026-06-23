import profilepic from "./assets/Komi.jpg";
import PropTypes from "prop-types";
import './Card.css';

function Card(props){
    return(
        <div className="card">
            <img src={profilepic} alt="Komi" />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

Card.defaultProps = {
    name: "Unknown",
    description: "No description available.",
    age: 0
};

export default Card;