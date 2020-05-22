import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {

  // Utilizando o useEffect(Ciclo de vida c/ React Hooks): callback executado toda vez que o componente for montado
  useEffect(() => {
    console.log('Componente Montado...');
    axios 
      .get('/postagens')
      .then(resposta => {
        console.log(resposta)
      })
  },[]);

  return (
    <div className="App">
        <p>
          teste1
        </p>
    </div>
  );
  
}

export default App;