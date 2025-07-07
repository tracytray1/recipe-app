import './Card.css';

const Card = ({ name, image }) => {
  return (
    <div className="card-container">
      <h2>{name}</h2>
      <img src={image} alt={name} width="200" />
      <p>View recipe</p>
    </div>
  )
}

export default Card;
