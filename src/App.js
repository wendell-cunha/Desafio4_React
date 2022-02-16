import React, {Component} from 'react';
import './App.css';

class App extends Component{

 Soma = (a,b) => {
    return a + b;
  }
  render(){
    return(
      <div>
        {this.Soma(5,8)}
      </div>
    )
  }
  Mensagem = () => {
    return "Hello Mundo";
  }
  render(){
    return(
      <div>
        {this.Mensagem()}
      </div>
    )
  }






}
export default App;

