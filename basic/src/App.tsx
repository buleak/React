import React, { useState } from 'react';

import {Add, Hok} from './containers';

import './App.css';

function App() {
  const [age, setAge] = useState(0);
  const growth = () => setAge(age+1)
  return (
    <div className="App">
      <Add />
      <Hok str='STRING' age={age} growth={growth} />
    </div>
  );
}

export default App;
