import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const randomInteger = (max) => Math.floor(Math.random() * max);
const cylinderSize = 6;
// const playerCount = 2;

const BOOM = () => <h1> BOOM!!! </h1>;
const Turn = ({ /*activePlayer,*/ setCylinderAngle }) => (
  <div>
    <p> jeď {/* activePlayer */} </p>
    <button onClick={() => {
      setCylinderAngle((previousAngle) => (previousAngle + 1) % cylinderSize);
    }}> strelit </button>
  </div>
);

function App() {
  // const [activePlayer, setActivePlayer] = useState(0);
  const [cylinderAngle, setCylinderAngle] = useState(randomInteger(cylinderSize));
  const [bulletPosition, setBulletPosition] = useState(randomInteger(cylinderSize));
  return (
    <div className="App">
    {cylinderAngle === bulletPosition
      ? <BOOM/>
      : <Turn /*activePlayer={activePlayer}*/ setCylinderAngle={setCylinderAngle} />
    }
    </div>
  );
}

export default App;
