import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ recipes }) => {
  return (
      <div className="cardlist-container">
        {recipes.map(({ name, image }) =>
          <Card name={ name } image={ image } />
        )}
      </div>
    )}


export default CardList
