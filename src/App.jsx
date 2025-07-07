import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card/Card'


const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((data) =>
        setRecipes(data.recipes))
        console.log(recipes);
  }, []);
/*
  return (
    <>
      <h1>Hello World</h1>
      {recipes.map(({name}) =>
        <Card name={name}/>
      )}
    </>
  )*/
}

export default App
