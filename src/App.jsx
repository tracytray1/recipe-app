import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/Searchbox'
import MealType from './components/MealType/MealType'


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);
  })}, []);

  const handleChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    const newFilteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchString)
    );
    setFilteredRecipes(newFilteredRecipes);
  }

  const onClickMeal = (event) => {
    const meal = event.target.id;
    if (meal === 'all') {
      setFilteredRecipes(recipes);
    } else {
    const filtered = recipes.filter((recipe) =>
      recipe.mealType.some(type => type.toLowerCase() === meal.toLowerCase())
    );
      setFilteredRecipes(filtered);
    };
  }

  return (
    <div className="app-container">
      <div className="app-banner">
        <h1 className="banner-title"> Cooksy </h1>
        <h2 className="banner-subtitle"> Explore our selection of <br/> recipes </h2>
      </div>
      <SearchBox onSearchChange={handleChange}/>
      <MealType onClickMeal={onClickMeal} />
      {filteredRecipes.length === 0 ? (
        <p className="no-results">No recipe found.</p>
      ) : (
        <CardList recipes={filteredRecipes} />
      )}
    </div>
  )
}

export default App
