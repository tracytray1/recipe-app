import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ recipes }) => {
  return (
  <div className="cardlist-container">
  {recipes.map(({ name, image, prepTimeMinutes, id }) => {
    return (
      <Card
        name={name}
        image={image}
        prepTime={ prepTimeMinutes }
        key={ id }/>
    )
    })}
  </div>
  )}


export default CardList
