import { useState, useEffect } from 'react';
import './css/App.css'
import React from 'react';
import EjerciciosComponent from './components/Ejercicios/EjerciciosComponent';
import 'tailwindcss/tailwind.css';

function App() {
  const [data, setData] = useState(null);

  //Hace la peticion http
  useEffect(()=>{
    fetch()
  }, []);
  return (
      <div className="App">
        {/* <h1>Fetch like a pro</h1>
        <div className="card"></div> */}
        <EjerciciosComponent />
      </div>
  );
}

export default App;
