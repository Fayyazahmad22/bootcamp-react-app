import React from 'react';
import Dinner from './dinner.js';


function App() {
  return (
    <div>
      <h1>Hello World! From Fayyaz ahmad</h1>
      <hr/>

      <Dinner dishName="Chicken Karahi" sweetDish="kheer"/>
      <hr/>
      <Dinner dishName="Biryani" sweetDish="jaleebi"/>
      <hr/>
      <Dinner dishName="Nihaari" sweetDish="Halwa"/>
    </div>
  );
}

export default App;
