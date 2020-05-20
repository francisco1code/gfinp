import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    axios 
      .get('/postagens')
      .then(resposta => {
        console.log(resposta)
      })
    
  }

  render(){
  return (
    <div className="App">
        <p>
          teste1
        </p>
    </div>
  );
  }
}

export default App;
