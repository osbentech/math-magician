import './App.css';
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Calculator App</h1>
        <Calculator />
      </div>
    );
  }
}
export default App;
