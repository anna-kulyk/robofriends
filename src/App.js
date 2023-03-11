// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './components/Card/Card';

class App extends React.Component {
  render() {
    return (
      <>
      <h1>Robofriends</h1>
        <div className='cards-wrapper'>
          <Card />
          <Card />
          <Card />
        </div>
      </>
    );
  }
}

export default App;
