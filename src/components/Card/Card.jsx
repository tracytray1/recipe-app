import './Card.css';

const Card = ({ name, image, prepTime }) => {
  return (
    <div className='card-container'>
      <img src={image} alt={name} width='250' />
      <div className="recipe-content">
        <p className='recipe-title'>{name}</p>
        <p className='prep-time'><i className="fa-solid fa-clock"></i> { prepTime } mins</p>
      </div>
    </div>
  )
}

export default Card;
