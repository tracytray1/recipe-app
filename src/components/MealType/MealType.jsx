import './MealType.css';

const meals = [
  { id: 'all', label: 'All', image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg' },
  { id: 'breakfast', label: 'Breakfast', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
  { id: 'lunch', label: 'Lunch', image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg' },
  { id: 'dinner', label: 'Dinner', image: 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg' }
];

const MealType = ({ onClickMeal }) => {
  return (
    <div className="mealtype-container">
      {meals.map((meal) => (
        <button
          key={meal.id}
          id={meal.id}
          onClick={onClickMeal}
          className="mealtype-button"
        >
          <img
            src={meal.image}
            alt={meal.label}
            className="mealtype-image"
          />
          <p className="mealtype-label">{meal.label}</p>
        </button>
      ))}
    </div>
  );
};

export default MealType;
