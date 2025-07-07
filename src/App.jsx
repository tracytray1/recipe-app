import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/CardList/CardList'


const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
  })}, []);


  return (
    <>
      <h2>Recipes of the day</h2>
      <CardList recipes = {recipes} />
    </>
  )
}

export default App
