import {useState} from 'react';
import './App.css';

const App = () => {

  const [ingredients, setIngredients] = useState([
    {name: 'Meat': count: 0},
    {name: 'Cheese': count: 0},
]};

  return (
    <form className='form-selection'>
      <h2>Ingredients</h2>
    <div className='selection'>

    </div>
    </form>
  );
};

export default App;
